import React from 'react'
import './Header.css'
import { imgList } from '../../utilities/contants/ListingPageConstants'
const Header = () => {
    
    return(
        <header className="header">
            <div className='logo'>
                <img alt="logo" src={imgList.logo} />
            </div>
            </header>
    )
}
export default Header;