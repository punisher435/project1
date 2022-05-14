import { StyleSheet, Text, View,ImageBackground,Image,PixelRatio } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


import { Constants } from '../config/constants';
import Button from '../components/Button';
import Colors from '../config/colors';

import styles from './Welcome.style';




const x=PixelRatio.get();
const y=Constants.y;
const z=y/x;

export default function Welcome() {
    const navigation = useNavigation();
    console.log(x);
  return (
    <View style={styles.container}>
        
        {/* <LinearGradient 
        locations={[0,0.98]}
        colors={['#ffffff', '#131429']}
        style={styles.linearGradient}
        > */}
        
        <ImageBackground source={require('../config/assets/welcome_image.png')}  resizeMode="cover" style={styles.bgimage}>
        <Image source={require('../config/assets/Rectangle_6.png')}  style={styles.gradientimage}>
        
        </Image>
            
            <Image source={
  require('../config/assets/QI_Play_Altar_Logo_White_Transparant_1.png')
  
}
            style={styles.image}></Image>
            
            <Text style={styles.header}>Welcome!</Text>
            <Text style={styles.description}>Train and live the new experience of Yoga and Kung Fu at home</Text>
        
        <Button title="Get Started" onPress={() => {navigation.navigate("Login")}} buttonstyle={
            {
                position: 'absolute',
                width: 329*z,
                height: 52*z,
                left: 70*z,
                top: 764*z,

                backgroundColor: 'rgba(255, 255, 255, 0.1)',
            
                mixBlendMode: 'soft-light',
                borderRadius: 56*z,
            
                
            }}
            textstyle={{
                
                
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: 18*z,
                lineHeight: 21*z,
                
                
                
                color: '#FFFFFF',
                 
            }}
        />
        </ImageBackground>

        {/* </LinearGradient> */}

       
      
    </View>
  )
}

