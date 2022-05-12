import { StyleSheet, Text, View,ImageBackground,Image,PixelRatio } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


import { Constants } from '../config/constants';
import Button from '../components/Button';
import Colors from '../config/colors';




const x=PixelRatio.get();
const y=Constants.y;
const z=y/x;

export default function Welcome() {
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
        
        <Button title="Get Started" onPress={() => {}} buttonstyle={
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

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bgimage:{
        flex: 1,
        justifyContent: "center",
        zIndex:0,
        position:'absolute',
        width:'100%',
        height:'100%',
        
       
    },
    gradientimage:{
        flex:1,
        
        width:'100%',
        height:'100%',
        position:'absolute',
        
    },
    image:{
        position: 'absolute',
        width: 430*z ,
        height: 299*z,
        left: 22*z,
        top: 18*z,
    },
    header:{
        position: 'absolute',
    width: 213*z,
    height: 56*z,
    left: 53*z,
    top: 610*z,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 48*z,
    lineHeight: 56*z,

    color: '#FFFFFF',

    },
    description:{
        position: 'absolute',
        width: 289*z,
        height: 42*z,
        left: 53*z,
        top: 678*z,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18*z,
        lineHeight: 21*z,

        color: '#FFFFFF',
    },

    linearGradient:{
        flex:1,
        zIndex:1,
      
    },

})