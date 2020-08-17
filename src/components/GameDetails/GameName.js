import React, { memo } from 'react'
import './GameDetails.css'

// Static Component that Displays image , name and region of the game==>
const GameName = ({imageUrl,name,region,largeImage}) => {
    return(
    <div className={`campainNameContainer ${largeImage?'largeImage':''}`} >
        <div className="logo"><img alt="largeThumb" className={largeImage ?'largeThumb':'thumbImg'} src={imageUrl} /></div>
        <div className="campaignName">
            <p>{name}</p>
            <p>{region}</p>
        </div>
    </div >
    )
}
export default memo(GameName)