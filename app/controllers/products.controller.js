const axios = require("axios");

const requestURL = 'https://teknasyon.myshopify.com/admin/api/2022-01/products.json';
const requestURLDetails = 'https://teknasyon.myshopify.com/admin/api/2022-01/products/';


  const options = {
      headers: {
          'X-Shopify-Access-Token': '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',
      }
  };

exports.getProducts  = async (req, res) => {
    axios.get(requestURL, options).then(response => {
      res.status(200).send(response.data.products);
     }).catch(err => {
         console.log(err);
     });
  };

  exports.getProductDetail  = async (req, res) => {
    axios.get(requestURLDetails + req.id + ".json", options).then(response => {
        console.log(response);
      res.status(200).send(response.data.products);
     }).catch(err => {
         console.log(err);
     });
  };