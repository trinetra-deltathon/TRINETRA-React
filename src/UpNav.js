
import { View, StyleSheet, Text } from "react-native";

export default function UpNav() {
  return (

    <View>

    <View style={styles.upper}>
      <Text style={styles.texts}>Trinetra</Text>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
    upper:{
        
        backgroundColor:"red",
        height:75,
        justifyContent:"center",
        alignItems:"center",
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        marginBottom:50
    },

    texts:{
        fontSize:25,
        color:"white"
    }

})
