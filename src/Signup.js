import React, { useState} from 'react';
import {View, Text, Touchable, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import {initializeApp} from "@firebase/app";
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';




const Signup = props => {

  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [Cpassword, setCPassword]= useState('')


  const SubmitHandle = async () =>{
       
    const sub = await fetch("https://trinetra-9d645-default-rtdb.asia-southeast1.firebasedatabase.app/userdata.json",
    {

      method:"POST",
      body: JSON.stringify(
        {
          email: email,
          password: password,
        }
      )
    })     

  }

  return (
    <Background>
      <View style={{alignItems: 'center', width: 410, paddingTop: 100}}>
        <Text
          style={{
            color: 'black',
            fontSize: 50,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            height: 700,
            width: 450,
           // borderTopLeftRadius: 0,
            paddingTop: 30,
            alignItems: 'center',
          }}>
          {/* <Field placeholder="First Name" />
          <Field placeholder="Last Name" /> */}
          {/* <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
         // style={styles.input}
        /> */}

<Field
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            // style={styles.input}
            keyboardType={'email-address'}
          />
       <Field
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
                      />
           <Field
            placeholder="Confirm Password"
            value={Cpassword}
            onChangeText={text => setCPassword(text)}
            secureTextEntry={true}
                      />            
          {/* <Field
            placeholder="Email 
          "
            //keyboardType={'email'}
            onChangeText={text => setEmail(text)}
            value={email}
            //style={styles.input}
          /> */}
          
          {/* <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          //style={styles.input}
        /> */}
          
          {/* <Field placeholder="Contact Number" keyboardType={'number'} /> */}
          
          {/* <Field placeholder="Password"
          //keyboardType={'password'}
          onChangeText={text => setPassword(text)}
          value={password}
           secureTextEntry={true} /> */}

          {/* <Field placeholder="Confirm Password"
          //keyboardType={'password'}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true} /> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              
                if(password == Cpassword )
                {
                  if( password.length>0)
                  {
                props.navigation.navigate('Login');
                alert('Accoutn created');
                SubmitHandle();

                  }
                  else
                  {
                    alert("Please Provide Email & Password Correctly.")
                  }

                }
                else
                {
                  alert("Password Doesn't Match ")
                }
            }}
          ></Btn>
             
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
