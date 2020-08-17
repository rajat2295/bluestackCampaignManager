export const fetchListingData = () => {
	
	// to fetch the Api and get table data==>
	const url = `https://api.jsonbin.io/b/5f172d189180616628462efc/4`;
	// const url = `/res.json`;

	let resData = fetch(url, {
		method: 'GET'
	})
		.then(response => response.json())
		.then(data => {
			return data;
		})
		.catch(err => console.log('Fetcherr', err));

	return resData;
};