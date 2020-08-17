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
            <GameName imageUrl={image_url}
                name={name}
                region={region}
                largeImage
            />
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

            {/* <div className="modal-footer">
                        <div className="button-container">
                            <button type="button" className="close-modal">Close</button>
                        </div>
                    </div> */}
        </div>
    )
}

const mapStateToProps = state => {
    const {
        rowData = {}
    } = state

    return {
        rowData,
    }
}

export default connect(mapStateToProps)(memo(pricingPopup))



