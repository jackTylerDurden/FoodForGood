const documenuApiKey = '8cdb97c14d7e9ad10a1a82a86e4cba32';
const documenuEndpoint = 'https://api.documenu.com/v2';
const yelpEndPoint = 'https://api.yelp.com/v3/businesses/';
const yelpBearerToken = 'VGO9NNe6eQYJ6VKl8GrgZ04q6VB5oIH7UhIOXCQX8WhmlV6EtRZVaz0aAJO38WgGTeQnNgbJuyLq1K2rCW8fDf83Ez6TkWrvxb6F7gDsKLw52CE0l85I1QZUL_HBX3Yx';

export const fetchRestaurantOtherInfo = async (paramsJSON) => {
  const params = JSON.parse(paramsJSON);
  let searchString = '';    
    if(params.term){
      searchString += '?term='+params.term;
    }
    if(params.location){
      searchString += '&location='+params.location;
    }
    if(params.lattitude){
      searchString += '&lattitude='+params.lattitude;
    }
    if(params.longitude){
      searchString += '&longitude='+params.longitude;
    }
    let yelpfinalEndPoint = yelpEndPoint +'search'+searchString;
    // console.log('yelpFinalEndpoint----->>>',yelpfinalEndPoint)
    try {
      let response = await fetch(yelpfinalEndPoint,{
        method:'GET',
        headers:{
          'Authorization': 'Bearer ' + yelpBearerToken
        }
      })
      return await response.json();
    }catch(error){

    }
}

export const fetchRestaurants = async (paramsJSON) =>{    
  const params = JSON.parse(paramsJSON);
  // console.log('params---->>>',params);
    let searchString = '';
    if(params.zip){
      searchString += '?zip_code='+params.zip;
    }
    if(params.state){
      searchString += '&state='+params.state;
    }
    if(params.name){
      searchString += '&restaurant_name='+params.name;
    }
    if(params.city){
      searchString += '&city='+params.city;
    }    
    let finalEndpoint = documenuEndpoint + '/restaurants/search/fields'+ searchString+'&fullmenu=true';//+'&exact=false';    
    // console.log('finalEndpoint----->>>',finalEndpoint)
    try {      
      let response = await fetch(finalEndpoint,{
        method:'GET',
        headers:{
          'X-API-KEY':documenuApiKey
        }
      });      
      return  await response.json();      
    } catch (error) {
      console.log('error---->>', error);
    }
  };
