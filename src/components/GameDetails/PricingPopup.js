import React, { memo } from 'react'
import './GameDetails.css'
import GameName from './GameName'
import { connect } from 'react-redux'

const pricingPopup = ({ rowData }) => {
    const {
       pricing_Details:{
        yearly,
        halfYearly,
        monthly,
       }={},
        image_url,
        name,
        region,
    } = rowData
    return (
        <div className='pricePopUp'>

            {/* Reusing Display Game Name And Image Static Component==> */}
            <GameName imageUrl={image_url}
                name={name}
                region={region}
                largeImage
            />
            {/* The Cost Card of the Tuple==> */}
            <div className="pricingDetail">
                <h3 className="heading">Pricing</h3>
                <div className="content">
                    <div className="duration
                                "><p>1 Week - 1 Month</p><p>6 Months</p><p>1 Year</p>
                    </div>
                    <div className="cost">
                        <p>{monthly}</p><p>{halfYearly}</p><p>{yearly}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Fetching the Particular row Selected to show pricing details ==>
const mapStateToProps = state => {
    const {
        rowData = {}
    } = state

    return {
        rowData,
    }
}

export default connect(mapStateToProps)(memo(pricingPopup))



