import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function Places(props, opa) {
  return (
    <View 
    style={{
      //opacity:{opa}
    }}
    >
    <TouchableOpacity
    //onPress={}
    >

        <View style={styles.places}>
          <Text style={styles.texts}>{props.name}</Text>
        </View>
        </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  places: {
    backgroundColor: "red",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 15,
    width: 300,
    marginLeft:30,
  },

  texts: {
    color: "white",
    fontSize: 20,
  },

  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Places;
