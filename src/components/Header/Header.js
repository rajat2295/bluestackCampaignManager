import React, { memo } from 'react'
import './Header.css'
import { imgList } from '../../utilities/contants/ListingPageConstants'

// Static Header Component ===>
const Header = () => {
    
    return(
        <header className="header">
            <div className='logo'>
                <img alt="logo" src={imgList.logo} />
            </div>
            </header>
    )
}

export default memo(Header);