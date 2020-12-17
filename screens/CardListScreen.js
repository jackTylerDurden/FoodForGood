import React,{useRef,useState,useEffect} from 'react';
import { View, Text, Button, FlatList,Title, StyleSheet } from 'react-native';
import Card from '../components/Card';
import  {fetchRestaurants}   from '../Api.js';

const CardListScreen = ({navigation,route}) => {    
    const searchParams = route.params.searchParamsJSON; 
    const [restaurantList,setRestaurantList] = useState([]);
    useEffect(() => {
      fetchRestaurants(searchParams).then((value) => {        
        var restList = value.data;
        for(var i=0;i<restList.length;i++){
          var temp = restList[i];
          temp.restaurant_id = temp.restaurant_id+"";
          restList[i] = temp;
        }
        setRestaurantList(restList);        
      });    
    },[]);    
    const renderItem = ({item}) => {      
        return (
            <Card itemData={item} onPress={()=> navigation.navigate('CardItemDetails', {itemData: item})}
            />            
        );
    };

    return (
      <View style={styles.container}>
        { <FlatList 
            data={restaurantList}
            renderItem={renderItem}
            keyExtractor={item => item.restaurant_id}
        /> }
      </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});
