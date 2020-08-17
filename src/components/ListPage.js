import {  useSelector, useDispatch } from "react-redux"
import React, { useEffect } from "react"
import { getListingData } from "../actions/action"
import ListTableWrapper from "./ListTable/ListTableWrapper";

const ListPage = (props) => {
    const dispatch = useDispatch();
    const tableData = useSelector(state=> state);
    useEffect(() => {
        dispatch(getListingData());
    },[] );



    return (
        <div className="tableRoot">

            {tableData.listingData && tableData.listingData.data.length>0 && <ListTableWrapper  tableData = {tableData.listingData.data}/>}
        </div>
    )
}
export default (ListPage)