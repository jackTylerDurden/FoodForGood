import React from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import { FAB } from 'react-native-paper';
const Payment = ({navigation,route}) => {  
    console.log('route----->>>',route.params.orderJSON);
    const placeOrder = () => {
        alert('thanks for your order. Your food will be delivered shortly');
    }
  return(
    <View style={styles.container}>        
        <FAB style={styles.fab} label="Place order" onPress={() => placeOrder()}/> 
    </View>
      )      
  }
export default Payment;
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
    price:{
      fontSize: 15,
      color: '#444',      
    },
    totalPriceText:{
        fontSize:30,
      fontWeight:"bold"
    },
  });
  