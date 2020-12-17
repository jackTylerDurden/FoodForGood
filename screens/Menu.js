import * as React from 'react';
import { List } from 'react-native-paper';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Menu = ({menuVal}) => {
  const menuList = menuVal[0];
  return(      
    <List.Section title="Menu">{
    menuList.menu_sections.map((menuSection,index) => {      
      return (           
            <List.Accordion key={index+'section'} id={index+'section'} title={menuSection.section_name}>
            {
              menuSection.menu_items.map((menuItem,index) =>{
                 return (
                  <View key={index+'item'} style={styles.cardInfo}>
                    <View >
                      <Text style={styles.cardTitle}>{menuItem.name}</Text>
                      <Text numberOfLines={2} style={styles.cardDetails}>{menuItem.description}</Text>
                      <Text style={styles.price}>$ {menuItem.price}</Text>
                    </View>
                  </View>)})
            }
            </List.Accordion>            
              )            
          })
        }</List.Section>                           
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
    }
  });
  