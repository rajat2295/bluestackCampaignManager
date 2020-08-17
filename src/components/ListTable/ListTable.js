import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { dateFormatter, campaignNameFormatter, viewDetailsFormatter, actionFormatter } from "../../utilities/functions/utilityFunctions";
import '../../css/ListTable.css'


const ListTable = ({tableData}) => {

    const columns = [{
        dataField: 'createdOn',
        text: 'DATE',
         headerStyle: () => {
           return {width:'15%'}
         },
        formatter: dateFormatter,
      }, {
        dataField: 'name',
        text: 'CAMPAIGN',
        headerStyle: () => {
          return {width:'30%'}
        },
        formatter: campaignNameFormatter,
      }, {
        dataField: 'view',
        text: 'VIEW',
        headerStyle: () => {
          return {width:'15%'}
        },
        formatter: viewDetailsFormatter,
      }, {
        dataField: 'action',
        text: 'ACTION',
        headerStyle: () => {
          return {width:'40%'}
        },
        formatter: actionFormatter,
      }];

      return(
          <div className="listTable" >
        <BootstrapTable keyField='id' data={ tableData } columns={ columns } />
        </div>
        
      )
}

export default ListTable;