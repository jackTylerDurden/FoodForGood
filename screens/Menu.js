import React,{useState,useEffect} from 'react';
import { List,FAB,Portal,Paragraph,Text} from 'react-native-paper';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Counter from "react-native-counters";
const Menu = ({menuVal,navigation}) => {
  const menuList = menuVal[0];
  const [totalPrice,setTotalPrice] = useState(0);
  const [cartItemsJSON, setCartItems] = useState("[]");  

  useEffect(() => {
    let newTotalPrice  = 0;
    const cartItems = JSON.parse(cartItemsJSON);
      for(var i=0;i<cartItems.length;i++){
        var item = cartItems[i];
        newTotalPrice += item.price * item.quantity;
      }      
      setTotalPrice(newTotalPrice);      
  },[cartItemsJSON]);

  const goToCheckout = () => {
    console.log('totalPrice--->>>',totalPrice)
    if(totalPrice == 0){
      alert('Please add some items to your cart');
    }else{
      let preciseTotalPrice = totalPrice.toPrecision(4);
      navigation.navigate('CheckoutScreen', {orderJSON: cartItemsJSON,totalPrice:preciseTotalPrice});    
    }        
  }
  const addToCart = (quantity,menuItem) => {            
      menuItem.quantity = quantity;
      let newCartItems = JSON.parse(cartItemsJSON);
      var itemFound = false;
      for(var i=0;i<newCartItems.length;i++){
        var item = newCartItems[i];
        if(item.name === menuItem.name){
          itemFound = true;
          item.quantity = menuItem.quantity;
          if(quantity == 0){
            newCartItems.splice(i,1);
          }else{
            newCartItems.splice(i,1,item);
          }          
        }
      }
      if(!itemFound)
        newCartItems.push(menuItem);
      const newCartItemsJSON = JSON.stringify(newCartItems);
      setCartItems(newCartItemsJSON);
  }
  
  return(    
    <View>
    <List.Section title="Menu">{
    menuList.menu_sections.map((menuSection,index) => {      
      return (           
            <List.Accordion key={index+'section'} id={index+'section'} title={menuSection.section_name}>
            {
              menuSection.menu_items.map((menuItem,index) =>{
                 return (
                  <View key={index+'item'} style={styles.cardInfo}>
                    <View>
                      <Text style={styles.cardTitle}>{menuItem.name}</Text>
                      {/* <Text numberOfLines={2} style={styles.cardDetails}>{menuItem.description}</Text> */}
                      <Paragraph>{menuItem.description}</Paragraph>
                      <Text style={styles.price}>$ {menuItem.price}</Text>
                      <Counter start={0} onChange={(value) => addToCart(value,menuItem)} />
                    </View>                    
                  </View>)})
            }
            </List.Accordion>            
              )            
          })
        }                
        </List.Section>
        <FAB style={styles.fab} label="Checkout" onPress={() => goToCheckout()}/>       
        </View>   
      )      
  }
export default Menu;
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
    fab: {
      position: 'relative',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });
  