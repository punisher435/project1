import React, { useState } from "react";
import { SocialIcon } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground,Image,PixelRatio } from "react-native";
import * as Yup from "yup";
import { Icon } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native';

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import { Constants } from '../config/constants';
import styles from './Login.style';

import { Colors } from "react-native/Libraries/NewAppScreen";






const validationSchema = Yup.object().shape({


  username: Yup.string().required().label("Username"),
  password: Yup.string().required().label("password"),
});


const obj1 = {
  bgcolor: 'dark',
  color: 'white',
  x1: 10,
  x2: 10,
  x3: 10,
  x4: 10,
  width: '100%',
}

function Login(props) {
  const navigation = useNavigation();



  const redirectlogin = () => {
    navigation.navigate('Signup');
  }

  const submitform = ({
    username,
    password,
  }) => {
    
   

    console.log(username);
    console.log(password);

  }




  return (
    <>

      <Screen style={styles.container}>
     
      <ImageBackground source={require('../config/assets/Login_background.png')}  resizeMode="cover" style={styles.bgimage}>

      <Image source={require('../config/assets/Rectangle_login.png')}  style={styles.gradientimage}>
        
        </Image>

        {/* <Image source={require('../config/assets/Rectangle_login_1.png')}  style={styles.gradientimage}>
        
        </Image> */}
        <View style={styles.content}>

        <Text style={styles.title}>
          Login
        </Text>

        


        <Form
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={submitform}
          validationSchema={validationSchema}
        >

          <View style={styles.formfield}>
          <FormField
            autoCapitalize="none"
            autoCorrect={false}


            name="username"
            holder="Email"

          />
          </View>

          <View style={styles.formfield}>
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}

            name="password"
            holder="Password"

          />
          </View>

          <View style={styles.logincon}>

            <View style={styles.loginbutton}>
              <TouchableOpacity

                onPress={redirectlogin}
              >
                <Text style={styles.logintext}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttoncontainer}>
            <SubmitButton title="Login"/>
          </View>

          <View style={styles.signupcon}>
            <Text style={styles.statement}>Other sign in options</Text>


          </View>

          <View style={styles.iconcon}>
            <View style={styles.icon}>
              <ImageBackground  style={styles.ellipse1} source={require('../config/assets/Ellipse_1.png')}>
              <Image  style={styles.socialicon} source={require('../config/assets/ant-design_apple-filled.png')}></Image>
              </ImageBackground>
              
            </View>
            <View style={styles.icon}>
            <ImageBackground  style={styles.ellipse1} source={require('../config/assets/Ellipse_2.png')}>
              <Image  style={styles.socialicon} source={require('../config/assets/akar-icons_google-fill.png')}></Image>
              </ImageBackground>
            </View>
            <View style={styles.icon}>
            <ImageBackground  style={styles.ellipse1} source={require('../config/assets/Ellipse_3.png')}>
              <Image  style={styles.socialicon} source={require('../config/assets/brandico_facebook.png')}></Image>
              </ImageBackground>
            </View>
          </View>

          

          

          <View style={styles.signupcon}>
            <Text style={styles.textcon}>Don't have an account ?</Text>
            <View style={styles.loginbutton}>
              <TouchableOpacity

                onPress={redirectlogin}
              >
                <Text style={styles.logintext}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Form>
        </View>
    </ImageBackground>
      </Screen>
    </>
  );
}







export default Login;
