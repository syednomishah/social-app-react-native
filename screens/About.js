import { Button, StyleSheet, Text, View } from "react-native";

function AboutScreen({navigation}){
    return (
      <View>
        <Text>About screen</Text>
        <Button title="go to home" onPress={()=> navigation.navigate('Home')} />
      </View>
    )
  }

  export default AboutScreen;