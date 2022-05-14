import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';
import { Colors } from "react-native/Libraries/NewAppScreen";

const z=Constants.z;


export default StyleSheet.create({
    container: {
    
        flex: 1,
    
      },
      title: {
        textAlign: 'left',
        fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 48*z,
    lineHeight: 56*z,
        marginBottom: 10*z,
        marginTop: 20*z,
        color:Colors.white,
      },
      description: {
        textAlign: 'center',
        fontSize: 22,
        color: Colors.grey,
        marginBottom: 20,
    
        marginTop: 10,
      },
      buttoncontainer: {
        marginTop: 15,
      },
      buttoncontainer: {
    
      },
      textcon: {
        fontSize: 15,
        color: '#B0B0B0',
      },
      logintext: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18*z,
        
    
        color: '#FFFFFF',
    
      },
    
      statement:{
        fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    
    
    letterSpacing: -0.01,
    color:'#FFFFFF',
      },
      loginbutton: {
        marginLeft: 10,
      },
      logincon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      signupcon: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      linecon: {
        flexDirection: 'row',
      },
      iconcon: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      icon: {
        marginLeft: 2,
        marginRight: 2,
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
    content:{
        padding:25,
    }

})