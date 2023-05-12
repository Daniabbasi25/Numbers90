import { getHeight, getWidth } from '@helpers';
import { AppliedTheme } from '@constants';
import { StyleSheet, Dimensions } from 'react-native'
 
const {width, height}=Dimensions.get('window')
const theme=AppliedTheme()
  const styles = StyleSheet.create({
    label: {
      fontSize: 18,
      color: theme.text.input,
      marginBottom: 5,
      marginLeft: 5,
    },
    textField: {
      borderWidth: 1,
      width: getWidth(90),
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderColor: theme.border.secondary,
      borderRadius: 8.58,
    },
    inputStyle: {
      fontSize: 18,
      // backgroundColor:'red',
      color: theme.text.input,
    },
    container: {
      // marginVertical:height%
      marginVertical: getHeight(2),
    },
    iconStyle:{
      resizeMode:'contain',
      width:getWidth(8),
      // backgroundColor:'red',
      height:getHeight(3)
    }
  });
  export default styles