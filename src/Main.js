import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import UpNav from './UpNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Places from './Places';
import { Ionicons } from '@expo/vector-icons';
import Homescreen from './Homescreen';


const Tab = createBottomTabNavigator();


const Main1 = props => {

  return (
    <View style={styles.container}>
         
    <UpNav></UpNav>
  
    
    <Places name= {"Pashupatinath"} opa={0.1} >  </Places>
    <Places name= {"Pashupatinath"}> </Places>
    <Places name= {"Pashupatinath"}> </Places>
    <Places name= {"Pashupatinath"}> </Places>
    <Places name= {"Pashupatinath"}> </Places>
    <Places name= {"Pashupatinath"}> </Places>
    <Places name= {"Pashupatinath"}> </Places>
    <Places name= {"Pashupatinath"}> </Places>  
    <Places name= {"Pashupatinath"}> </Places>


    
    <Tab.Navigator
        screenOptions={{
          style: {
            backgroundColor: '#6200ee',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 70,
            paddingVertical: 10
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#b8b8b8',
        }}
      >
        <Tab.Screen
          name=" "
          component={Homescreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="camera" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  
    

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

export default Main1;