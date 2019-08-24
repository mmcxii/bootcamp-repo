const axios = require('axios');

axios.get('https://www.zachmurphy.dev').then((res) => console.log(res.data));
