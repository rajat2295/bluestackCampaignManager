import { fetchListingData } from "../utilities/api/getListingApi";

// Action to fetch listing data and store it in the store==>
export const getListingData = () => async (dispatch) => {
    let listingData = {};
    try {
        listingData = await fetchListingData();
        dispatch(sortList(listingData.data))
        dispatch(setListingData(listingData));
	} catch (e) {
        console.log('error')
    }
   
}

// Function to segregate the list into live, past and upcoming campaigns and store into store==>
const sortList =(listingData) => dispatch=> {
    const upcoming=[];
    const live=[];
    const past=[]
    listingData && listingData.map(row=>{
        const date1= new Date(row.createdOn).setHours(0,0,0,0)
        const date2 = new Date().setHours(0,0,0,0)
        if(date1<date2)
        past.push(row)
        else if(date1===date2){
            live.push(row)
        }
        else{
            upcoming.push(row)
        }
    })
    dispatch(({
        type: 'SORT_LIST_DATA',
        payload: {'upcoming':upcoming,'past':past,'live':live}
    }))
    return null;
}

// Dispatcher function to storeListing Data into store 
export const setListingData = data => ({
	type: 'SET_LISTING_DATA',
	payload: { ...data }
});

// store the data of a particular Row===>
export const setRowData = data => ({
    type: 'SET_ROW_DATA',
	payload: { ...data }
})

// Action for toggling the popUpLayer==>
export const openClosePopUp = data => ({
    type: 'OPEN_CLOSE_POPUP',
	payload: data
})

/*action triggered when a date is changed from Calender component and then further 
calls the sort list function ====> */
export const changeDate =(rowData,date) => (dispatch,getState)=>{
    const  listingData  = getState().listingData;
    listingData && listingData.data && listingData.data.map(row=> {
        if(rowData.name===row.name){
            row.createdOn = date.getTime()
        }
    })
    dispatch(sortList(listingData.data));
    return null;
}
