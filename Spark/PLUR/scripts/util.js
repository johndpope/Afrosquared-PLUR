//////////////////////////////////////////////////////////////////////////
// require/import

const Time = require('Time');



//////////////////////////////////////////////////////////////////////////
// sleep

export const sleep = (ms) => {
	return new Promise(resolve => { Time.setTimeout(resolve, ms) }); 
}