import React, { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/ListTable.css'
import { campaignNavConfig } from "../../utilities/contants/ListingPageConstants";
import ListTable from "./ListTable";
import { useSelector } from "react-redux";

const ListTableWrapper = () => {

    const sortListData = useSelector(state=>state.sortListData)

    const [tab, setTab] = useState('upcoming');
    const [tableData,setTableData] = useState([]);
    

    useEffect(()=>{

        setTableData(sortListData[tab]);
    },[sortListData])

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