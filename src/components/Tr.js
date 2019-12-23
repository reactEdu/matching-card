import React from 'react';
import Td from './Td';

const Tr = ({ dispatch, passData, rowIndex, rowData, clickedValue }) => {
  return (
    <tr>
    {Array(rowData.length).fill().map((td, i) => {
      console.log(passData[rowIndex][i])
      // console.log(clickedValue[0], clickedValue[1] ,rowIndex,i)
      return <Td onClass={clickedValue[0]===rowIndex && clickedValue[1]===i ? "ON" : "OFF"} 
        pass={passData[rowIndex][i]} dispatch={dispatch} clickedValue={clickedValue} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} />
      }
    )}
    </tr>
  );
};

export default Tr;