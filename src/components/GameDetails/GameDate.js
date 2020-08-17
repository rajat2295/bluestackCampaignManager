
import React, { memo } from 'react'
import './GameDetails.css'
import { getFormattedDate, getDateDifference } from '../../utilities/functions/utilityFunctions'

const GameDate = ({ rawDate }) => {
    const date= getFormattedDate(rawDate)
    let fromCurrent=getDateDifference(rawDate)
    const subText = fromCurrent > 0 ?'Days Ago' :fromCurrent < 0 ? 'Days Ahead':'Live'
    fromCurrent=Math.abs(fromCurrent);
    return (
        <span className="date">
            <strong>{date}</strong>
            <p>{subText !== 'Live'?fromCurrent:''} {subText}</p>
        </span>

    )
}
export default memo(GameDate)