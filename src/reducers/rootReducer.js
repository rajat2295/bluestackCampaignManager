const initState = {
    data: [],
}
const rootReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_LISTING_DATA':
            return { ...state, listingData: payload };
        case 'SET_ROW_DATA':
            return { ...state, rowData: payload };
        case 'OPEN_CLOSE_POPUP':
            return { ...state, openClosePopUpLayer: payload };
        case 'SORT_LIST_DATA':
            return { ...state, sortListData: payload };
            
        default:
            return state;
    }
}
export default rootReducer
