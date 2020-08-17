import React from 'react'
import GameName from '../../components/GameDetails/GameName';
import PricingDetails from '../../components/GameDetails/PricingDetails';
import GameDate from '../../components/GameDetails/GameDate';
import GameActions from '../../components/GameDetails/GameActions';

// Formatter functions that return a formatted component for the particular column==>
export const dateFormatter = (cell) => {
    return (
        <GameDate rawDate={cell} />
    );
}

// Formatter functions that return a formatted component for the particular column==>
export const campaignNameFormatter = (cell, row) => {
    return (
        <GameName imageUrl={row.image_url}
        name={row.name}
        region={row.region}/>
    )
}

// Formatter functions that return a formatted component for the particular column==>
export const viewDetailsFormatter = (cell,row) => {
    return (
        <PricingDetails gameInfo={row} />
    )
}

// Formatter functions that return a formatted component for the particular column==>
export const actionFormatter = (cell,row) => {
    return (
        <GameActions rowData={row} />
    )
}

// to get Formatted Date ==>
export const getFormattedDate = paramDate => {
    const currDate = new Date(paramDate)
    const ye = currDate.getFullYear();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const mo = monthNames[currDate.getMonth()+1]; 
    const da = currDate.getDate().toString().padStart(2, "0");
    const date = `${mo} ${ye}, ${da}`;
    return date
}

// to get day dfifference ==>
export const getDateDifference=(paramDate)=>{
    const today = new Date()
    let fromCurrent = (today.setHours(0,0,0,0) - new Date(paramDate).setHours(0,0,0,0)) / (24 * 60 * 60 * 1000)
    fromCurrent = Math.round(fromCurrent)
    return fromCurrent;

}