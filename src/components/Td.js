import React, { useCallback } from 'react';
import { CLICK_CELL } from '../App';

const Td = ({isEnd, dispatch, pass, onClass, cellData, rowIndex, cellIndex}) => {
  
  const onClickTd = useCallback(() => {
    // console.log(pass, rowIndex, cellIndex, cellData);
    dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex});
  }, [cellData]);
  return (
    <div onClick={onClickTd} className={onClass} className={pass ? 'td pass' : 'td'} >
      <p className={'ico_'+cellData}>{cellData}</p>
      {/* {JSON.stringify(pass)} */}
    </div>
  );
};

export default Td;