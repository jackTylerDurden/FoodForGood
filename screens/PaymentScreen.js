import React,{useState} from 'react';
import {View,StyleSheet,Alert} from 'react-native';
import { FAB,Portal} from 'react-native-paper';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
const Payment = ({navigation,route}) => {  
    const [cardDetails,setCardDetails] = useState({})    
    const placeOrder = () => {        
        if(cardDetails.valid){
          Alert.alert(
            "Food For Good",
            "Thank you for your order. Your food will be at your doorstep shortly.",
            [              
              { text: "OK", onPress: () => navigation.navigate('Home')}
            ],            
          );          
        }else{
          alert('Please enter valid card details');
        }
        
    }
  return(
    <View style={styles.container}>      
      <CreditCardInput onChange={(value) => {setCardDetails(value)}} />      
       <Portal>
          <FAB style={styles.fab} small label="Place order" onPress={() => placeOrder()}/>
      </Portal>
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
    fab: {
      position: 'relative',
      marginTop: 350,
      margin:16,
      right: 0,
      bottom: 0,
    },
    container: {
      flex: 1, 
      width: '90%',
      alignSelf: 'center'
    }
    
  });
  