import React, { memo, Fragment } from 'react'
import './GameDetails.css'
import GameIcons from './GameIcons'
import { connect } from 'react-redux'
import { changeDate } from '../../actions/action'

const GameActions = ({changeDate,rowData}) => {

    const openCalender =(date) =>{
        changeDate(rowData,date);
    }

    const config = [{
        label: 'CSV',
        icon: 'csv',
    }, {
        label: 'Report',
        icon: 'stats',
    }, {
        label: 'Schedule Again',
        icon: 'calender',
        clickHandler : openCalender
    }]
    return (
        <Fragment>
            {
                config.map(element => <GameIcons label={element.label} icon={element.icon} clickHandler={element.clickHandler} calDate={rowData.createdOn}/>)
            }
        </Fragment>
    )
}
const mapDispatchToProps = dispatch => ({
    changeDate(rowData,newDate){
        dispatch(changeDate(rowData,newDate));
    }
})
export default connect(null,mapDispatchToProps)(memo(GameActions))