import React from 'react';
import {View,StatusBar, StyleSheet,FlatList} from 'react-native';
import { FAB,Appbar,Portal,Paragraph,Text } from 'react-native-paper';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;
const Checkout = ({route,navigation}) => {
    const orderJSON = route.params.orderJSON;    
    const totalPrice = route.params.totalPrice;     
    const order = JSON.parse(orderJSON);
    const renderItem = ({item}) => {      
        return (            
            <View style={styles.card}>
              <View style={styles.quantity}>
                <Text style={{fontSize:20}}>{item.quantity}</Text>
              </View>
              <View style={styles.menuItem}>
                <Text style={styles.cardTitle}>{item.name}</Text>
              </View>
              <View style={styles.price}>
                <Text >$ {item.price * item.quantity}</Text>
                <Text >($ {item.price} ea)</Text>
              </View>
            </View>            
        );
    }

    const goToPayment = () => {
      navigation.navigate('PaymentScreen',{orderJSON:orderJSON});
    }
  return(

    <View style={styles.container}>              
      <StatusBar barStyle="light-content" />
      <Appbar.Header>
          <Appbar.Content title="Your Order" />        
      </Appbar.Header>      
      { <FlatList  data={order} renderItem={renderItem} keyExtractor={item => item.name}/> }      
          <Text style={styles.totalPriceText}>Total Price : {totalPrice ? totalPrice : 0}</Text>                    
          <Portal>
          <FAB style={styles.fab} label="Proceed to Payment" onPress={() => goToPayment()}/> 
          </Portal>                
    </View>    
      )      
  }
export default Checkout;
const styles = StyleSheet.create({
    card: {
      height: 100,
      marginVertical: 25,
      marginLeft:20,
      marginRight:10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      justifyContent: 'space-between',
    },    
    cardTitle: {
      fontWeight: 'bold',
    },
    quantity:{
      fontSize: 22,
      color: '#444',
      width:12,
      alignSelf:'center',
    },
    menuItem:{
      width:300,
      alignSelf:'center',      
    },

    cardDetails: {
      fontSize: 12,
      color: '#444',
    },
    price:{
      fontSize: 15,
      color: '#444',
      alignSelf:'center'
    },
    totalPriceText:{
        fontSize:30,
      fontWeight:"bold"
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });
  