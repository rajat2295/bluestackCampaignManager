import React, { useState } from "react"
import '../../css/ListTable.css'


const ListTableHead = ({ headerConfig, }) => {
    return (
                    <tr role="row">
                        {headerConfig.map(head=>
                            <>
                            <th  role="columnheader">{head.label}</th>
                            </>
                            )}
                    </tr>
    )
}


export default (ListTableHead);