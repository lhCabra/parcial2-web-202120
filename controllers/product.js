const data = require('../assets/data');

function getProducts(query) {
  console.log(typeof(query)+'')
  var resp=[]
  if(typeof(query) === 'undefined')
  {
    console.log('undifined')
    resp=data
  }
  else
  {
    console.log('llegó')
    console.log(query)
    for(var i =0;i<data.length;i++){
      if(data[i]["name"].toLowerCase().includes(query.toLowerCase()))
      {
        resp.push(data[i])
      }
    }
  }
  return resp;
}

module.exports = { getProducts };
