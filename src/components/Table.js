import React from 'react';
import Tr from './Tr';

const Table = ({ isEnd, dispatch, tableData, clickedValue, passData }) => {
	return (
		<div className="flex_table">
			<div className="tbody">
				{Array(tableData.length).fill().map((tr, i) => {
					return <Tr isEnd={isEnd} dispatch={dispatch} passData={passData} clickedValue={clickedValue} key={"r"+i} rowIndex={i} rowData={tableData[i]} />	
				})}
			</div>
		</div>
	);
};

export default Table;