
// using http default standard library

var https = require('https');
//external libraray axios
var axios = require('axios');

const host = 'example.com'
const endpoint = '/api/user' //this is our api endpoint where we are making request

//GET METHOD - Used for retriving Data from server
const req = http.get(`${endpoint}?id=1`,(res)=>{
// A chunk of data has been received.
  res.on('data', (chunk) => {
    process.stdout.write(chunk)
  });
});

req.on('error', error => {
  console.error(error)
})

req.end();

//using axios easy way
const getData = async() => {
	const res = awiat axios.get(`${endpoint}/${endpoint}/get?id=1`);
  console.log(res);
}
getData();


//POST METHOD - for sending data consider we are adding info of person with id = 2 and name = jhone in our database
const data = JSON.stringify({
'id': '2',
'name':'Jhon'
})

// prepare the header
const postheaders = {
    'Content-Type' : 'application/json',
    'Content-Length' : data.length
};

//options for post req
const optionspost = {
    host : host,
    port : 443,
    path : endpoint,
    method : 'POST',
    headers : postheaders
};

const postreq = https.req(opt,(res)=>{
		res.on('data', function(d) {
        process.stdout.write(d);
    });
})

reqPost.write(jsonObject);
reqPost.end();
reqPost.on('error', function(e) {
    console.error(e);
});


//using axios
const postData = async() => {
		const res = await axios.post(`${host}/${endpoint}/add`,data);
    console.log(res.data.statuscode);
}
postData();


//PUT and DELETE requests use the same POST request format - you just need to change the options.method value to the appropriate method.

//Put Method creates a resource or updates an existing resource.
//for eg consider data that we have added while making post req we will edit that data

const edata = JSON.stringify({
'id': '2', // if this id is not avilable it will creat it.
'name':'Xd' // changing name;
})


//options for post req
const optionsput = {
    host : host,
    port : 443,
    path : `${endpoint}/edit`, //endpoint for editing data
    method : 'PUT', // chaing From post to put
    headers : postheaders
};

const putreq = https.req(opt,(res)=>{
		res.on('data', function(d) {
        process.stdout.write(d);
    });
})

reqPost.write(edata);
reqPost.end();
reqPost.on('error', function(e) {
    console.error(e);
});


//using axios

const putData = async() => {
		const res = await axios.post(`${host}/${endpoint}/edit`,data);
    console.log(res.data.statuscode);
}


//Delete - as name suggest deleting data

const ddata = JSON.stringify({
'id': '2', // if this id is not avilable it will creat it.
'name':'Xd' // changing name;
})


const optionsdeleted = {
    host : host,
    port : 443,
    path : `${endpoint}/delete?id=1`, //endpoint for deleting data whose id = 1;
    method : 'DELETE', // chaing From post to put
    headers : postheaders
};

const deletereq = https.req(opt,(res)=>{
		res.on('data', function(d) {
        process.stdout.write(d);
    });
})

deletereq.write(ddata);
deletereq.end();
deletereq.on('error', function(e) {
    console.error(e);
});


//using axios

const deleteData = async() => {
		const res = await axios.delete(`${host}/${endpoint}/delete`,{ data: ddata });
    console.log(res.data.statuscode);
}
//ENDED