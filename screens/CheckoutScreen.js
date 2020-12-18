import React from 'react';
import {View,ScrollView,StatusBar, Text, StyleSheet,FlatList} from 'react-native';
import HeaderImageScrollView, {TriggeringView} from 'react-native-image-header-scroll-view';
import { FAB,Appbar,Portal,Provider } from 'react-native-paper';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;
const Checkout = ({route,navigation}) => {
    const orderJSON = route.params.orderJSON;    
    const totalPrice = route.params.totalPrice;     
    const order = JSON.parse(orderJSON);
    const renderItem = ({item}) => {      
        return (            
            <View style={styles.card}>            
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text numberOfLines={2} style={styles.cardDetails}>{item.description}</Text>
              <Text style={styles.cardDetails}>{item.price}</Text>          
              <Text style={styles.cardDetails}>{item.quantity}</Text>                        
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
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });
  