const axios = require('axios');
let data = JSON.stringify({
  "company": "Bajaj Finserv Ltd",
  "currentPrice": 1578,
  "accountNumber": "BFHL0018641",
  "githubRepoLink": "https://github.com/Pranav-2465/Bajaj-Finserv-Qualifer1"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks',
  headers: { 
    'bfhl-auth': '2110992465', 
    'Content-Type': 'application/json'
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
