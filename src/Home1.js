import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import { darkGreen, green, white } from './Constants';
import Background from './Background';
import Btn from './Btn';
import { LinearGradient } from 'expo-linear-gradient';

const screenHeight = Dimensions.get('screen').height;

const Home = (props) => {
    return (

   
    <View style={{ marginHorizontal: 40, marginVertical: 300}}>
    <ImageBackground source={require("./assets/Trinetra-removebg-preview.png")} style={{ height: '78%'}} />
    {/* <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
      TRINETRA
          </Text> */}
          <View style={{marginLeft:40}}>
          <TouchableOpacity
    onPress={() => props.navigation.navigate("Login")}
      style={{
        backgroundColor: darkGreen,
        borderRadius: 100,
        alignItems: 'center',
        width: 250,
        paddingVertical: 5,
        justifyContent: "center",
        marginVertical: 10
      }}>
      <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
        Login
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => props.navigation.navigate("Signup")}
      style={{
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        width: 250,
        paddingVertical: 5,
        justifyContent: "center", 
        marginVertical: 10
      }}>
      <Text style={{color: darkGreen, fontSize: 25, fontWeight: 'bold'}}>
        Signup
      </Text>
    </TouchableOpacity>
    
      {/* <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn textColor={darkGreen} bgColor={white} btnLabel="Signup"  Press={() => props.navigation.navigate("Signup")} /> */}
      </View>

    </View>
  )
}

// const styles = StyleSheet.create({})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
// flex:1,
  }
});
export default Home;