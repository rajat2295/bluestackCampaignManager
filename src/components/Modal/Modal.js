import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Modal.css'
import PricingPopup from '../GameDetails/PricingPopup';
import { openClosePopUp } from '../../actions/action';

const Modal = () => {
    
    // To get the state of PopUp layer from the store==>
    const openClosePopUpLayer = useSelector(state => state.openClosePopUpLayer); 
    
    // initializing dispatch via hooks==>
    const dispatch = useDispatch();

    // Modal Container with a close button to change PopUplayer state in the store==>
    return (
        <Fragment>
            {openClosePopUpLayer && <div id="myModal" className="modal" style={{ display: 'block', }}>
                <div className="modal-content">

                    {/* Pricing Popup component==> */}
                    <PricingPopup /> 
                    
                    <div className="footer">
                        <div className="button-container">
                            <button onClick={() => dispatch(openClosePopUp(false))} className="closeModal">Close</button>
                        </div>
                    </div>
                </div>

            </div>
            }
        </Fragment>
    )
}

export default Modal;