## Team Members
Name - Pooja Rajendra Pawar
RedId - 824645686

Name - Tanmay Pravin Deshpande
RedId - 824646024

## Description
**Food For Good** is an app built in *react native* which lets you order food from restaurants accross the US. Restaurants can be searched on the basis of their name, city, state code and zip code. You can search the restaurants, go throught their menus, add food items to the cart and order them.

## Special Instructions


## Third party libraries
To get the restaurant info we are consuming following apis
1. [Documenu](https://documenu.com/) - to get restaurant name, phone, address and menu.
2. [Yelp Fusion Api](https://www.yelp.com/developers/documentation/v3) - to get restaurant photos, ratings, review count, price range.

## Credentials for third party apis
You can check these apis with following credentials  
**username - nativereact.sdsu@gmail.com**  
**password - Test@12345**  
Same credentials can be used to access Gmail,Documenu and Yelp Apis.

## Known issues / Limitations
1. As of now we haven't integrated this with a payment gateway.
2. The Documenu api doesn't provide the functionality of sorting restaurants based on their rating or price. 
3. Since we are using react native version *"^0.63.4"*, the Picker widget is made deprecated. So we tried to implement a dropdown list of US states but were unable to do so. We tried to install it from  [@react-native-picker/picker npm package](https://github.com/react-native-picker/picker)

We came accross following error  "Error: Unable to resolve module 'react-native-web/dist/modules/UnimplementedView' from 'node_modules\@react-native-picker\picker\js\PickerIOS.js: react-native-web/dist/modules/UnimplementedView could not be found within the project."

so while searching the restaurants based on the US state they are situated in, you have to use state code and not the state string. e.g. You have to use CA instead of California. The states code list can be found in USState.json under assets folder.
4. Since we have opted for free plan for the [Documenu api](https://documenu.com/) we get to fire **500 api requests per account**. So we haven't implemented the pagination functionality for restaurant search. You can check the api consumption count at [Documenu Dashboard](https://documenu.com/dashboard) using the credentials mentioned above.

## Screens
1. ![1](/assets/Pic_1.jpg)
2. ![2](/assets/Pic_2.jpg)
3. ![3](/assets/Pic_3.jpg)
4. ![4](/assets/Pic_4.jpg)
5. ![4](/assets/Pic_5.jpg)
