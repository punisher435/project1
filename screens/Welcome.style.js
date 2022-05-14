import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';

const z=Constants.z;


export default StyleSheet.create({
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