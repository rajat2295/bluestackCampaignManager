import React, { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/ListTable.css'
import { campaignNavConfig } from "../../utilities/contants/ListingPageConstants";
import ListTable from "./ListTable";
import { useSelector } from "react-redux";

const ListTableWrapper = () => {

    // get Sorted List in upcoming live and past campaigns
    const sortListData = useSelector(state=>state.sortListData)

    // get Tab name from store ==>
    const [tab, setTab] = useState('upcoming');
    // get table data from store==>
    const [tableData,setTableData] = useState([]);
    

    useEffect(()=>{

        // get the sorted list based on the current tab selected==>
        setTableData(sortListData[tab]);

    },[sortListData])


    // function to change tabs from upcoming live and past and set table Data accordingly ==>
    const changeTab = (type) => {

        setTableData(sortListData[type]);
        setTab(type)

    }

    return (
        <div>
            <Container>
            <div className="title">
                <p>Manage Campaigns</p>
            </div>
                <div className='navBtn'>
                    {/* constatnt config list iterated and rendered accordingly with respective values==> */}
                    {campaignNavConfig.map((ele,index) =>
                        <button key={`${ele.label}${index}`} onClick={() => changeTab(ele.value)} className={`panelBtn ${tab === ele.value ? 'active' : ''}`}>{ele.label}</button>)
                        }
                    <div className=' spacer16'></div>
                </div>
                <Row>
                    <ListTable tableData={tableData} />
                </Row>
            </Container >
        </div>
    )
}


export default (ListTableWrapper);