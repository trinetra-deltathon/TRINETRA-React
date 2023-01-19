import React, { useState} from 'react';
import {View, Text, Touchable, TouchableOpacity, styles} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import {initializeApp} from "@firebase/app";



const Login = (props) => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  //after adding firebase
   
  const firebaseConfig = {
    apiKey: "AIzaSyAW74CXqBEltLkXvpzmOLOFrWc6aheVr8o",
    authDomain: "trinetra-9d645.firebaseapp.com",
    projectId: "trinetra-9d645",
    storageBucket: "trinetra-9d645.appspot.com",
    messagingSenderId: "54735448810",
    appId: "1:54735448810:web:8d500be65a12a560600593"
  };

  const app = initializeApp(firebaseConfig);



  const GetHandle = async () =>{
       
    const sub = await fetch("https://trinetra-9d645-default-rtdb.asia-southeast1.firebasedatabase.app//userdata.json")

    const data = await sub.json()
    console.log(data)

  }


  //upto here

  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        {/* <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text> */}
        <View
          style={{
            
            height: 700,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <View
          style={{
            height: 700,
            width: 420,
            borderTopLeftRadius: 130,
         paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field
            placeholder="Email / Username"
            value={email}
            onChangeText={text => setEmail(text)}
            // style={styles.input}
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" 
          value={password}
          onChangeText={text => setPassword(text)}
          //style={styles.input}
          secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          {/* <Btn textColor='white'
           bgColor={darkGreen} 
           btnLabel="Login"
            Press={() =>
              
             alert("Logged In")
             } /> */}
             <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => {
              GetHandle
              props.navigation.navigate("Main1");
            }
            }
          ></Btn>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center"}}>
            <Text style={{ fontSize: 16, fontWeight:"bold" , color:'white'}}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
      </View>
    </Background>
  );
};

export default Login;
