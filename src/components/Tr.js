import React from 'react';
import Td from './Td';

const Tr = ({ isEnd, dispatch, passData, rowIndex, rowData, clickedValue }) => {
  return (
    <div className="tr">
    {Array(rowData.length).fill().map((td, i) => {
      // console.log(passData[rowIndex][i])
      // console.log(clickedValue[0], clickedValue[1] ,rowIndex,i)
      return <Td onClass={clickedValue[0]===rowIndex && clickedValue[1]===i ? "ON" : "OFF"} 
      isEnd={isEnd} 
      pass={passData[rowIndex][i]} 
      dispatch={dispatch} 
      clickedValue={clickedValue} 
      key={rowIndex+""+i} 
      rowIndex={rowIndex} 
      cellIndex={i} 
      cellData={rowData[i]} />
      }
    )}
    </div>
  );
};

export default Tr;