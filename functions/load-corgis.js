// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')

exports.handler = async () => {
  const response = await fetch('http://138.68.98.19/corgis')
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
