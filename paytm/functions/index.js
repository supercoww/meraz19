const functions = require('firebase-functions');
const express = require('express');
const app = express();
const port = 8080;
//const bodyParser = require('body-parser');
const https = require('https');
//const http = require('http');
//const https = require('https');
//const checksum_lib = require('checksum.js');


//exports.checksum_lib = functions.database.ref('/checksum').onWrite(checksum_lib.handler);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/*exports.helloWorld = functions.https.onRequest((request, response) 
  * => {
  console.log("Console test ");
response.send('Hello from Firebase! ' + request);
});*/
//app.use(bodyParser);

app.get('/',async(req,res) => {
  console.log("Main page accesed");
  res.send('Hello World!');
});


app.get('/api/pay/',async (req,res) => {
  console.log("API/PAY is being accessed");
  res.status(200).json({head:"Something",mess:"Message"})
});


exports.helloWorld = functions.https.onRequest(app);

var PaytmConfig = {
	mid: "EJsZqX96778330588437",
	key: "MwmafJb7IQQ9S2vt",
	website: "WEBSTAGING"
}
const qs = require('querystring');
const checksum_lib = require('./checksum.js');

app.get('/api/redirect/',async (req,res) => {
      var params 						= {};
			params['MID'] 					= PaytmConfig.mid;
			params['WEBSITE']				= PaytmConfig.website;
			params['CHANNEL_ID']			= 'WEB';
			params['INDUSTRY_TYPE_ID']	= 'Retail';
			params['ORDER_ID']			= 'TEST_'  + new Date().getTime();
			params['CUST_ID'] 			= 'email@example.com';
			params['TXN_AMOUNT']			= '1000';
  params['CALLBACK_URL']		= "http://localhost:5000/meraz-d165d/us-central1/helloWorld/api/payDone";
  //'https://us-central1-meraz-d165d.cloudfunctions.net/helloWorld/api/payDone'

    
  //'http://localhost:'+port+'/callback';

			params['EMAIL']				= 'abc@mailinator.com';
			params['MOBILE_NO']			= '7777777777';

  
checksum_lib.genchecksum(params, PaytmConfig.key, (err, checksum) => {
  //console.log("Error can be :"+err);
  if (err) res.send("Some Error Occured");
				var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
				// var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
				
				var form_fields = "";
				for(var x in params){
					form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"' >";
				}
				form_fields += "<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' >";

  //res.writeHead(200, {'Content-Type': 'text/html'});
        res.type('.html');
				res.send('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="'+txn_url+'" name="f1">'+form_fields+'</form><script type="text/javascript">document.f1.submit();</script></body></html>');
  //res.end();
			});

});
var body = '';
var html = '';
app.post('/api/payDone',async(req,res)=>{
  var post_data = req.body;  
  console.log('Callback Response: ', JSON.stringify(post_data), "\n");
				html += "<b>Callback Response</b><br>";
				for(var x in post_data){
					html += x + " => " + post_data[x] + "<br/>";
				}
				html += "<br/><br/>";

        // verify the checksum
				var checksumhash = post_data.CHECKSUMHASH;
				// delete post_data.CHECKSUMHASH;
				var result = checksum_lib.verifychecksum(post_data, PaytmConfig.key, checksumhash);
				console.log("Checksum Result => ", result, "\n");
				html += "<b>Checksum Result</b> => " + (result? "True" : "False");
				html += "<br/><br/>";


// Send Server-to-Server request to verify Order Status
				var params = {"MID": PaytmConfig.mid, "ORDERID": post_data.ORDERID};

            checksum_lib.genchecksum(params, PaytmConfig.key, (err, checksum) => {

              if (err) console.log("Error is :"+err);
					params.CHECKSUMHASH = checksum;
					post_data = 'JsonData='+JSON.stringify(params);

					var options = {
						hostname: 'securegw-stage.paytm.in', // for staging
						// hostname: 'securegw.paytm.in', // for production
						port: 443,
						path: '/merchant-status/getTxnStatus',
						method: 'POST',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Content-Length': post_data.length
						}
					};

              // Set up the request
					var response = "";
              var post_req = https.request(options, (post_res) => {
                post_res.on('data', (chunk) =>{
							response += chunk;
						});

                post_res.on('end', () => {
							console.log('S2S Response: ', response, "\n");

							var _result = JSON.parse(response);
							html += "<b>Status Check Response</b><br>";
							for(var x in _result){
								html += x + " => " + _result[x] + "<br/>";
							}

                  res.type('.html');
                  //res.writeHead(200, {'Content-Type': 'text/html'});
                  res.send(html);
                  //							res.write(html);
						});
					});

					// post the data
					post_req.write(post_data);
					post_req.end();
				});
	        })

//res.end(html);

  // console.log(JSON.stringify(req.body));  
  /*
    res.send('POST request to homepage');
  console.log(qs.parse(res));
  req.on('data',data=>{
    console.log("Data is being recieved RN");
    body += data;
  })
  req.on('end',()=>{
    console.log("Data stream seems to be completed");
    var html = "";
    var post_data = qs.parse(body);
    console.log("Data: =>",post_data);
  })
  //console.log("response had this body: " , req.body);
  //console.log("\n\nresponse had this params: " , req.params);
//*/

app.get('/api/payDone/',async (req,res) => {
  console.log("Get Request on PayDone");
  res.send("Payment Is Done");
    /*
			var body = '';
	        
  req.on('data', (data) => {
	            body += data;
	        });

  req.on('end', () => {
				var html = "";
				var post_data = qs.parse(body);


				// received params in callback
				console.log('Callback Response: ', post_data, "\n");
				html += "<b>Callback Response</b><br>";
				for(var x in post_data){
					html += x + " => " + post_data[x] + "<br/>";
				}
				html += "<br/><br/>";


				// verify the checksum
				var checksumhash = post_data.CHECKSUMHASH;
				// delete post_data.CHECKSUMHASH;
				var result = checksum_lib.verifychecksum(post_data, PaytmConfig.key, checksumhash);
				console.log("Checksum Result => ", result, "\n");
				html += "<b>Checksum Result</b> => " + (result? "True" : "False");
				html += "<br/><br/>";



				// Send Server-to-Server request to verify Order Status
				var params = {"MID": PaytmConfig.mid, "ORDERID": post_data.ORDERID};

            checksum_lib.genchecksum(params, PaytmConfig.key, (err, checksum) => {

              console.log("Error is :"+err);
					params.CHECKSUMHASH = checksum;
					post_data = 'JsonData='+JSON.stringify(params);

					var options = {
						hostname: 'securegw-stage.paytm.in', // for staging
						// hostname: 'securegw.paytm.in', // for production
						port: 443,
						path: '/merchant-status/getTxnStatus',
						method: 'POST',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Content-Length': post_data.length
						}
					};


					// Set up the request
					var response = "";
              var post_req = https.request(options, (post_res) => {
                post_res.on('data', (chunk) =>{
							response += chunk;
						});

                post_res.on('end', () => {
							console.log('S2S Response: ', response, "\n");

							var _result = JSON.parse(response);
							html += "<b>Status Check Response</b><br>";
							for(var x in _result){
								html += x + " => " + _result[x] + "<br/>";
							}

                  res.type('.html');
                  //res.writeHead(200, {'Content-Type': 'text/html'});
                  res.send(html);
                  //							res.write(html);
						});
					});

					// post the data
					post_req.write(post_data);
					post_req.end();
				});
	        })
*/
});
