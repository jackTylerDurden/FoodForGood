import React,{useState} from 'react';

import {
  View,
  Text,  
  StyleSheet,  
  StatusBar,  
  TouchableHighlight,
  ScrollView,
  TextInput,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FAB,Portal } from 'react-native-paper';


const HomeScreen = ({navigation}) => {
  const theme = useTheme();
  const {colors} = useTheme();
  const[showRefineMenu,setShowRefineMenu] = useState(false);
  const[restaurantName,setRestaurantName] = useState("");
  const[stateCode,setStateCode] = useState("");
  const[city,setCity] = useState("");
  const[zip,setZip] = useState("");
  const getRestaurants = () =>{
    const usStates = require('../assets/USState.json');
    console.log('clicked on restaurants');    
    const searchParams = {};
    searchParams.name = restaurantName;
    searchParams.state = stateCode.toUpperCase();
    searchParams.city = city;
    searchParams.zip = zip;            
    navigation.navigate('CardListScreen', {title: 'Restaurant',searchParamsJSON:JSON.stringify(searchParams)});    
  }
  
   

  const showHideRefineMenu = () => {    
    setShowRefineMenu(!showRefineMenu);
  }
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  
  return (    
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />            
      <View style={styles.cardsWrapper}>
        <View style={styles.action}>
          <FontAwesome name="search" color={colors.text} size={20} />
            <TextInput value={restaurantName} onChangeText={(value) => setRestaurantName(value)} placeholder="Restaurants" placeholderTextColor="#666666" autoCorrect={false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
            />
            <TouchableHighlight onPress={()=>showHideRefineMenu()}>
              <View>                
                <FontAwesome name="sliders" style={{alignSelf: 'center'}} color={colors.text} size={20} />
                <Text>Refine</Text>
              </View>
            </TouchableHighlight>            
        </View>
        {showRefineMenu ? (
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>             
              <TextInput placeholder="State Code" value={stateCode} onChangeText={(value) => {setStateCode(value)}} placeholderTextColor="#666666"  autoCorrect={false} style={[styles.textInput,{color: colors.text,},]}/>                            
              <TextInput placeholder="City" value={city} onChangeText={(value) => {setCity(value)}} placeholderTextColor="#666666" autoCorrect={false} style={[styles.textInput,{color: colors.text,},]}/>
              <TextInput keyboardType={'numeric'} value={zip} placeholder="Zip Code" onChangeText={(value) => {setZip(value)}} placeholderTextColor="#666666" autoCorrect={false} style={[styles.textInput,{color: colors.text,},]}/> 
            </View>
          </View>         
        ):null}        
          <FAB style={styles.fab}  label="Let's Hunt Yo Food!" onPress={() => getRestaurants()}/>        
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },            
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
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
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  fab: {
    position: 'relative',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
