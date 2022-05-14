import { StyleSheet } from 'react-native'
import { Constants } from '../../config/constants';
import defaultStyles from "../../config/styles";
import Colors from '../../config/colors';

const z=Constants.z;


export default StyleSheet.create({
    buttonstyle:{
            
            width: 355*z,
            height: 52*z,
            
    
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        
            mixBlendMode: 'soft-light',
            borderRadius: 56*z,
        
            
        },
        textstyle:{
            
            
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 17*z,
            lineHeight: 17*z,
            
            
            
            color: '#FFFFFF',
             
        }

})