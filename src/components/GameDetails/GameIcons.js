import React, { memo, Fragment } from 'react'
import './GameDetails.css'

// list of icons csv calender price stats ==>
import { imgList } from '../../utilities/contants/ListingPageConstants'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Component for static icons and their respective actions like calender csv stats ==>

const GameIcons = ({ icon, label, clickHandler = () => { } , calDate}) => {

    // custom input function for react-datepicker
    const ExampleCustomInput = ({ value, onClick }) => (
        <div className="gameIcon" onClick={onClick}>
        <span className="gameImg"><img alt="thumbNail" className="thumbImg" src={imgList[icon]} /></span>
        <span className="gameLabel">{label}</span>
    </div>
      );

    return (
        
            <Fragment>
            {icon === 'calender' ?
            // React-Datepicker component for selecting date
                <Fragment>
                    <DatePicker popperPlacement="auto-left" selected={calDate} onChange={date => clickHandler(date)} customInput={<ExampleCustomInput />}/>
                </Fragment>
            :
            <div className="gameIcon" onClick={(e) => clickHandler(e)}>
            <span className="gameImg"><img  alt="thumbNail" className="thumbImg" src={imgList[icon]} /></span>
            <span className="gameLabel">{label}</span>
        </div>

        }
        </Fragment>
    )
}
export default memo(GameIcons)
