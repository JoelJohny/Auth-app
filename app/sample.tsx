import { StyleSheet, Text, View } from 'react-native'
import {Link} from 'expo-router';

const sample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>sample</Text>
      <Link href="/profile" style={{color:'blue'}}>Go To profile</Link>
    </View>
  )
}

export default sample

const styles = StyleSheet.create({
    container:{
       display:'flex',
       flex:1,
       backgroundColor:'#fff',
       alignItems:'center',
       justifyContent:'center',
    },
    text: {
        color: 'green', // This sets the text color to white
        // You can add other text styles here if needed
      },
})