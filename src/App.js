import React, { useRef, useReducer, useEffect, useState } from 'react';
import Table from './components/Table';
import './App.scss';
import axios from './axiosConfig';

const initialState = {
  tableData: [
    ...shuffleCards()
  ],
  passData: [
    [false,false,false,false,],
    [false,false,false,false,],
    [false,false,false,false,],
    [false,false,false,false,],
  ],
  clickedValue: [-1, -1], // 클릭한 셀의 값
  isEnd: false,
  count: 0,
  remainder: 7,
};

// 4가지 알파벳 랜덤배치
function shuffleCards() {
  const alphabetLen = 4;
  let result = [];
  function choiceNumber() {
    let arr = [];
    while (arr.length < 4) {
      let str = String.fromCharCode(Math.floor(Math.random() * alphabetLen)+65);
      if(arr.indexOf(str) === -1) arr.push(str)
    }
    return arr;
  }
  result = [choiceNumber(), choiceNumber(), choiceNumber(), choiceNumber()];

  for (let i = 0; i < result.length; i++) {
    const tempF = result[0][i];
    result[0][i] = result[1][i];
    result[1][i] = tempF;
  }

  return result;
}

// 끝났는지 확인
function checkIsEnd(passData){
  // console.log("passData", passData)
  let result = false;
  // for (let i = 0; i < passData.length; i++) {
  //   for (let j = 0; j < passData[i].length; j++) {
  //     if(passData[i][j]===true) result = true;
  //     else result = false;
  //   }
  // }
  if(
    passData[0].indexOf(false) === -1 
    && passData[1].indexOf(false) === -1
    && passData[2].indexOf(false) === -1
    && passData[3].indexOf(false) === -1
  ) result = true;

  return result;
}

export const CLICK_CELL = 'CLICK_CELL';
export const CHOICE_OK = 'CHOICE_OK';
export const CHOICE_NO = 'CHOICE_NO';
export const CHECK_END = 'CHECK_END';
export const RESTART_GAME = 'RESTART_GAME';

const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_CELL:
      // console.log("CLICK_CELL", action.row, action.cell)
      return {
        ...state,
        clickedValue: [action.row, action.cell],
        count: state.count+0.5,
      }
    case CHOICE_OK:
      // console.log("CHOICE_OK", action.bRow, action.bCell)
      return {
        ...state,
        ...state.passData[action.bRow][action.bCell]=true,
        ...state.passData[action.aRow][action.aCell]=true,
        remainder: state.remainder-1,
      }
    case CHOICE_NO:
      // console.log("CHOICE_NO", action)
      return {
        ...state,
        ...state.passData[action.bRow][action.bCell]=false,
        ...state.passData[action.aRow][action.aCell]=false,
        remainder: state.remainder+1,
      }
    case CHECK_END:
      // console.log("CHECK_END",  action.passData)
      return {
        ...state,
        isEnd: true,
      }
    case RESTART_GAME:
      // console.log("RESTART_GAME",  state)
      return {
        tableData: [
          ...shuffleCards()
        ],
        passData: [
          [false,false,false,false,],
          [false,false,false,false,],
          [false,false,false,false,],
          [false,false,false,false,],
        ],
        clickedValue: [-1, -1], // 클릭한 셀의 값
        isEnd: false,
        count: 0,
      }
    default:
      return state;
  }
};

function App() {
  let fVal = useRef('');
  let fIdx = useRef([]);

  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { tableData, clickedValue, passData, isEnd } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if(!mounted.current) mounted.current = true;
    const [ row, cell ] = clickedValue;

    if(row !== -1){
      // console.log('['+row, cell+']', tableData[row][cell])
      
      if(fVal.current === '') {
        fVal.current = tableData[row][cell];
        fIdx.current = [row, cell];
        return;
      } else {
        // console.log("idx ",fIdx.current, row, cell)
        if(fIdx.current[0] === row && fIdx.current[1] === cell) {
          alert("같은 칸 클릭했습니다. \n You clicked same cell.")
          fVal.current = [];
          fVal.current = '';
          return;
        }

        if(fVal.current === tableData[row][cell]) { // 맞춘 경우
          dispatch({ type: CHOICE_OK, bRow:fIdx.current[0], bCell:fIdx.current[1], aRow:row, aCell: cell});
          
          // console.log(state.remainder);
          if(state.remainder === 0) {
            setTimeout(()=> {
              dispatch({type: CHECK_END});
              let nickname = prompt('GAME Clear!! \n please write your nickname');
              if(nickname.trim() === "") nickname = '';
              axios.post('/card/score', {
                try: state.count,
                nickname,
              });
            },900);
            return;
          }

        } else { // 틀린 경우
          let br = fIdx.current[0];
          let bc = fIdx.current[1];
          dispatch({ type: CHOICE_OK, bRow:br, bCell:bc, aRow:row, aCell: cell});
          
          setTimeout(()=>{
            dispatch({ type: CHOICE_NO, bRow:br, bCell:bc, aRow:row, aCell: cell })
          }, 900)
        }
        fVal.current = '';
        fIdx.current = [];

        return;
      }

    } else {
      return;
    }
  }, [clickedValue, passData])


  const [avg, setAvg] = useState(0);
  const [min, setMin] = useState(0);
  const [nick, setNick] = useState('');

  const getScore = async () => {
    try {
      const result = await axios.get('/card/score');
      setAvg(result.data[0].avg);
      setMin(result.data[0].min);
      setNick(result.data[0].nickname);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // 게임 새로 할때만 콘솔 찍기
    if(state.count === 0) {
      // console.table(state.tableData);
      getScore();
      
    }
  },[isEnd, setAvg, setMin, setNick]);

  const onRestart = () => {
    dispatch({ type: RESTART_GAME});
  }

  return (
    <>
    <header>
    <p className="try_len">
      <span className="get_score try">Your Try: {Math.floor(state.count)}<br/></span>
      {avg > 0 ? <span className="get_score avg">Users average: {avg}<br/></span> : null}
      {min > 0 ? <span className="get_score min">Users best: {min} of {nick}<br/></span> : null}
      {isEnd ? <button className="btn_restart" onClick={onRestart}>Restart</button> : ''}
    </p>
    </header>
    <Table isEnd={isEnd} tableData={tableData} passData={passData} dispatch={dispatch} clickedValue={state.clickedValue}/>
    <pre>
      {/* {JSON.stringify(state.tableData).replace(/\],\[/g, '],\n[')}} */}
    </pre>
    </>
  );
}

export default App;
