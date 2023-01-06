import { Button, StyleSheet, Text, View } from "react-native";

  function HomeScreen({navigation}){
    return (
      <View>
        <Text>Home screen</Text>
        <Button title="go to about" onPress={()=> navigation.navigate('About')} />
      </View>
    )
  }

  export default HomeScreen;