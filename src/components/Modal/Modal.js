import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Modal.css'
import PricingPopup from '../GameDetails/PricingPopup';
import { openClosePopUp } from '../../actions/action';

const Modal = () => {

    const openClosePopUpLayer = useSelector(state => state.openClosePopUpLayer);
    const dispatch = useDispatch();
    return (
        <Fragment>
            {openClosePopUpLayer && <div id="myModal" className="modal" style={{ display: 'block', }}>
                <div className="modal-content">
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