const axios = require('axios');
let data = JSON.stringify({
  "name": "Pranav Avasthi",
  "email": "pranav2465.be21@chitkara.edu.in",
  "rollNumber": 2110992465,
  "phone": 8146502567
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'BrowserId=RFm8nuUGEe6GNK_dV2cnjA; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
