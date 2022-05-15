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
      marginTop:200*z,
      marginBottom:10*z,
        color:Colors.white,
      },
      description: {
        textAlign: 'center',
        fontSize: 22,
        color: Colors.grey,
        marginBottom: 20*z,
    
        marginTop: 10*z,
      },
      formfield:{
        marginBottom: 20*z,
    
        marginTop: 20*z,
      },
      buttoncontainer: {
        marginTop: 15*z,
        marginBottom: 30*z,
        justifyContent:'center',
        flexDirection:'row'
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
        marginBottom: 20*z,
    
        marginTop: 10*z,
      },
      signupcon: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      linecon: {
        flexDirection: 'row',
      },
      iconcon: {
        marginBottom:20*z,
        marginTop:10*z,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      icon: {
        marginLeft: 18*z,
        marginRight: 18*z,
        width:40*z,
        height:40*z,
        justifyContent:'center',
        flexDirection:'row',
        
        borderRadius:50,
      },
      ellipse1:{
      width:'100%',
      height:'100%',
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',
      },
      socialicon:{
  
  
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