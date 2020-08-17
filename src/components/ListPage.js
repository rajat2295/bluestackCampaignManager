import { useSelector, useDispatch } from "react-redux"
import React, { useEffect } from "react"
import { getListingData } from "../actions/action"
import ListTableWrapper from "./ListTable/ListTableWrapper";

const ListPage = (props) => {

    const dispatch = useDispatch();

    // get table Data from the Store==>
    const tableData = useSelector(state => state);

    // initial function to initiate datat Fetching when component mounts ==>
    useEffect(() => {
        dispatch(getListingData());
    }, []);



    return (
        <div className="tableRoot">

            {/* Displaye Table once the Data is populated in the store==> */}
            {tableData.listingData && tableData.listingData.data.length > 0 && <ListTableWrapper />}
            
        </div>
    )
}
export default (ListPage)