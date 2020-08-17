
import React, { memo } from 'react'
import './GameDetails.css'
import { getFormattedDate, getDateDifference } from '../../utilities/functions/utilityFunctions'

// Compoennt to dispalay date published and the relative days from todays date==>

const GameDate = ({ rawDate }) => {
    // function to get formatted Date ==>
    const date= getFormattedDate(rawDate)

    // function to get date Difference ==>
    let fromCurrent=getDateDifference(rawDate)

    // setting formatted text ==>
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