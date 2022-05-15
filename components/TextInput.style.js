import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';
import defaultStyles from "../config/styles";
import Colors from '../config/colors';

const z=Constants.z;


export default StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        
        flexDirection: "row",
        
    
      },
      inputtext: {
        borderBottomWidth:1,
       
        borderColor: Colors.white,
        width: '100%',
        height: 50,
        paddingLeft: 10,
        fontSize:20*z,
        paddingTop:25*z,
        color: Colors.white,
      },
      placeh: {
        color: Colors.white,
      },
      icon: {
        marginRight: 10,
        paddingTop: 15,
      },
      placeholdertext:{
        color:Colors.white,
        position:'absolute',
        top:-10,
        left:0,
      }

})