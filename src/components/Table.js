import React from 'react';
import Tr from './Tr';

const Table = ({ dispatch, tableData, clickedValue, passData }) => {
	return (
		<table>
			<tbody>
				{Array(tableData.length).fill().map((tr, i) => {
					return <Tr dispatch={dispatch} passData={passData} clickedValue={clickedValue} rowIndex={i} rowData={tableData[i]} />	
				})}
			</tbody>
		</table>
	);
};

export default Table;