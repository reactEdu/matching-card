import React, { useState, useRef, useReducer, useCallback, useEffect } from 'react';
import Table from './components/Table';
import './App.css';

function checkIsEnd(passData){
  // console.log("passData", passData)
  // let result = true;
  // passData.forEach((v, i) => {
  //   if(v===false) return false
  // });
  // return result;
}

const initialState = {
  tableData: [
    ['a','b','c','d'],
    ['a','b','c','d'],
  ],
  passData: [
    [false,false,false,false,],
    [false,false,false,false,]
  ],
  clickedValue: [-1, -1], // 클릭한 셀의 값
  classOn: 'OFF', // ON
  isEnd: false,
};

export const CLICK_CELL = 'CLICK_CELL';
export const CHOICE_OK = 'CHOICE_OK';
export const CHECK_END = 'CHECK_END';

const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_CELL:
      // console.log("CLICK_CELL", action.row, action.cell)
      return {
        ...state,
        clickedValue: [action.row, action.cell]
      }
    case CHOICE_OK:
      console.log("CHOICE_OK", action.row, action.cell)

      return {
        ...state,
        ...state.passData[action.bRow][action.bCell]=true,
        ...state.passData[action.aRow][action.aCell]=true
        // passData: [
        //   ...state.passData,
        //   [action.row, action.cell]
        // ]
      }
    case CHECK_END:
      console.log("CHECK_END")

      return {
        ...state,
        isEnd: true
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
      console.log(fVal.current, '['+row, cell+']', tableData[row][cell])
      if(isEnd) {
        alert("게임 끝났습니다")
      }

      if(fVal.current === '') {
        fVal.current = tableData[row][cell];
        fIdx.current = [row, cell];
        return;
      } else {
        if(fVal.current  === tableData[row][cell]) {
          console.log('맞췄다'); 

          dispatch({ type: CHOICE_OK, bRow:fIdx.current[0], bCell:fIdx.current[1], aRow:row, aCell: cell});
        } else {
          console.log('틀렸다');
        }
        fVal.current = '';
        fIdx.current = [];

        // dispatch({ type: CHECK_END, checked: checkIsEnd(passData)});

        return;
      }

    } else {
      return;
    }
  }, [clickedValue])

  return (
    <>
    <Table tableData={tableData} passData={passData} dispatch={dispatch} clickedValue={state.clickedValue}/>
    {JSON.stringify(state.tableData)}
    {JSON.stringify(state.passData)}
    </>
  );
}

export default App;
