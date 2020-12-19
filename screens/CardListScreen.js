import React,{useState,useEffect} from 'react';
import { View, Text, Button, FlatList,Title, StyleSheet,ActivityIndicator} from 'react-native';
import Card from '../components/Card';
import  {fetchRestaurants}   from '../Api.js';

const CardListScreen = ({navigation,route}) => {    
    const searchParams = route.params.searchParamsJSON; 
    
    const [restaurantList,setRestaurantList] = useState([]);
    const [restaurantListJSON,setRestaurantListJSON] = useState("[]");
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() =>{      
      setIsLoading(false);
    },[restaurantListJSON]);

    useEffect(() => {
      setIsLoading(true);
      fetchRestaurants(searchParams).then((value) => {        
        var restList = value.data;
        for(var i=0;i<restList.length;i++){
          var temp = restList[i];
          temp.restaurant_id = temp.restaurant_id+"";
          restList[i] = temp;
        }       
        setRestaurantList(restList);        
        setRestaurantListJSON(JSON.stringify(restList));
      });    
    },[]);

    const renderItem = ({item}) => {      
        return (
            <Card itemData={item} onPress={()=> navigation.navigate('CardItemDetails', {itemData: item})}
            />            
        );
    };
    
    if(isLoading){      
      return(
        <View style={styles.container}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator color="#0000ff" size="large"/>
          </View>
        </View>
      )
    }else{      
      return(        
        <View style={styles.container}>
         <FlatList 
          data={restaurantList}
          renderItem={renderItem}
          keyExtractor={item => item.restaurant_id}
        />
        </View>
      );    
    }
    
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});
