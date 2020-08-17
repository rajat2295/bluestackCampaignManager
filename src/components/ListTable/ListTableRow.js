import React, { useState } from "react"
import '../../css/ListTable.css'

const ListTableRow = ({ rowStyle={} , rowData={} }) => {
    return(
    <tr role="row" style={rowStyle}>
        {Object.values(rowData).map(value=>(
            <td role="cell">{value}</td>   
        ))}
    </tr>
    )
        
}


export default (ListTableRow);