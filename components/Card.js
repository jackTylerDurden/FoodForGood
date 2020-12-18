import React,{useRef,useState,useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import StarRating from './StarRating';
import  {fetchRestaurantOtherInfo}   from '../Api.js';

const Card = ({itemData, onPress}) => {  
  const[rating,setRating] = useState(0);
  const[price,setPrice] = useState("");
  const[imageUrl,setImageUrl] = useState("");
  const[restaurantUrl,setRestaurantUrl] = useState("");
  const[noOfReviews,setNoOfReviews] = useState(0);
  const[showRestaurantCard,setShowRestaurantCard] = useState(false);
  useEffect(() => {
    const searchParams = {};
    searchParams.term = itemData.restaurant_name;
    searchParams.location = itemData.address.formatted;
    searchParams.lattitude = itemData.geo.lat;
    searchParams.longitude = itemData.geo.lon;
    const searchParamsJSON  = JSON.stringify(searchParams);
    fetchRestaurantOtherInfo(searchParamsJSON).then((value) => {      
      if(value && value.businesses && value.businesses[0]){
        const yelpInfo = value.businesses[0];        
        setRestaurantUrl(yelpInfo.url);
        setImageUrl(yelpInfo.image_url);
        itemData.imageUrl = yelpInfo.image_url;
        setPrice(yelpInfo.price ? yelpInfo.price : "0");
        setRating(yelpInfo.rating ? yelpInfo.rating : "0");
        setNoOfReviews(yelpInfo.review_count ? yelpInfo.review_count : 0);
        setShowRestaurantCard(true);
      }      
    });
  },[])
  return (    
    <View key={itemData.restaurant_id}>
      {showRestaurantCard ? (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image source={{uri : imageUrl}} resizeMode="cover" style={styles.cardImg}/>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{itemData.restaurant_name}</Text>
              <StarRating ratings={rating} price={price} reviews={noOfReviews}/>
              <Text style={styles.cardDetails}>{itemData.restaurant_phone}</Text>          
              <Text numberOfLines={2} style={styles.cardDetails}>{itemData.address.formatted}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}      
    </View>    
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
