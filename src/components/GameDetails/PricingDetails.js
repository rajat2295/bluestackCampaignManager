import React, { memo, Fragment } from 'react'
import './GameDetails.css'
import GameIcons from './GameIcons'
import {  connect } from 'react-redux'
import { setRowData, openClosePopUp } from '../../actions/action'

const pricingDetails = ({ gameInfo,setRowData,openClosePopUp }) => {

    const pricingPopUpHandler = () => {
        setRowData(gameInfo);
        openClosePopUp(true);
    }
    return (
        <Fragment>
            <GameIcons clickHandler={pricingPopUpHandler} label='View Pricing' icon='price' />
            {/* <PricingPopup /> */}
        </Fragment>
    )
}

const mapDispatchToProps =(dispatch) => ({
    setRowData(data){
        dispatch(setRowData(data))
    },
    openClosePopUp(data){
        dispatch(openClosePopUp(data))
    }
})
export default connect(null,mapDispatchToProps)(memo(pricingDetails))

