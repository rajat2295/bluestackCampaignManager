import { fetchListingData } from "../utilities/api/getListingApi";

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

export const setListingData = data => ({
	type: 'SET_LISTING_DATA',
	payload: { ...data }
});

export const setRowData = data => ({
    type: 'SET_ROW_DATA',
	payload: { ...data }
})
export const openClosePopUp = data => ({
    type: 'OPEN_CLOSE_POPUP',
	payload: data
})

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
