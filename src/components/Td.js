import React, { useCallback } from 'react';
import { CLICK_CELL } from '../App';

const Td = ({dispatch, pass, onClass, cellData, rowIndex, cellIndex}) => {
  
  const onClickTd = useCallback(() => {
    // console.log(pass, rowIndex, cellIndex, cellData);
    dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex});
  }, [cellData]);

  return (
    <td onClick={onClickTd} className={onClass} >
      {cellData}<br/>
      {JSON.stringify(pass)}
    </td>
  );
};

export default Td;