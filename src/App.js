import React, { useRef, useReducer, useCallback, useEffect } from 'react';
import Table from './components/Table';
import './App.scss';

// 4가지 알파벳 랜덤배치
function shuffleCards() {
  let result = [];
  function choiceNumber() {
    let arr = [];
    while (arr.length < 4) {
      let str = String.fromCharCode(Math.floor(Math.random() * 4)+65);
      if(arr.indexOf(str) === -1) arr.push(str)
    }
    return arr;
  }
  result = [choiceNumber(), choiceNumber()];

  for (let i = 0; i < result.length; i++) {
    const tempF = result[0][i];
    result[0][i] = result[1][i];
    result[1][i] = tempF;
  }

  // console.log(result);
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
  if(passData[0].indexOf(false) === -1 && passData[1].indexOf(false) === -1) result = true;

  return result;
}

const initialState = {
  tableData: [
    // ['a','b','c','d'],
    // ['a','b','c','d'],
    ...shuffleCards()
  ],
  passData: [
    [false,false,false,false,],
    [false,false,false,false,]
  ],
  clickedValue: [-1, -1], // 클릭한 셀의 값
  isEnd: false,
};

export const CLICK_CELL = 'CLICK_CELL';
export const CHOICE_OK = 'CHOICE_OK';
export const CHECK_END = 'CHECK_END';
export const RESTART_GAME = 'RESTART_GAME';

const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_CELL:
      // console.log("CLICK_CELL", action.row, action.cell)
      return {
        ...state,
        clickedValue: [action.row, action.cell]
      }
    case CHOICE_OK:
      // console.log("CHOICE_OK", action.row, action.cell)
      return {
        ...state,
        ...state.passData[action.bRow][action.bCell]=true,
        ...state.passData[action.aRow][action.aCell]=true
      }
    case CHECK_END:
      // console.log("CHECK_END",  action.passData)
      return {
        ...state,
        isEnd: true,
      }
    case RESTART_GAME:
      // console.log("CHECK_END",  action.passData)
      return {
        tableData: [
          ...shuffleCards()
        ],
        passData: [
          [false,false,false,false,],
          [false,false,false,false,]
        ],
        clickedValue: [-1, -1],
        isEnd: false,
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
 
    // console.log(passData);
    if(checkIsEnd(passData)) {
      dispatch({type: CHECK_END});
      alert("게임 끝났습니다");
      return;
    }

    if(row !== -1){
      // console.log('['+row, cell+']', tableData[row][cell])
      
      if(fVal.current === '') {
        fVal.current = tableData[row][cell];
        fIdx.current = [row, cell];
        return;
      } else {
        // console.log("idx ",fIdx.current, row, cell)
        if(fIdx.current[0] === row && fIdx.current[1] === cell) {
          alert("같은 칸 클릭했습니다.")
          fVal.current = [];
          fVal.current = '';
          return;
        }

        if(fVal.current === tableData[row][cell]) {
          // alert('맞췄다');

          dispatch({ type: CHOICE_OK, bRow:fIdx.current[0], bCell:fIdx.current[1], aRow:row, aCell: cell});
        } else {
          alert('틀렸다');
          console.log('틀렸다',fVal.current, fIdx.current[0], fIdx.current[1], row, cell);
        }
        fVal.current = '';
        fIdx.current = [];
        
        return;
      }

    } else {
      return;
    }
  }, [clickedValue, passData])

  const onRestart = () => {
    dispatch({ type: RESTART_GAME});
  }

  return (
    <>
    <Table isEnd={isEnd} tableData={tableData} passData={passData} dispatch={dispatch} clickedValue={state.clickedValue}/>
    {JSON.stringify(state.tableData[0])}<br/>{JSON.stringify(state.tableData[1])}
    {isEnd ? <button onClick={onRestart}>다시시작</button> : ''}
    </>
  );
}

export default App;
