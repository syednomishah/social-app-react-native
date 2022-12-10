import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

  function OnboardingScreen({navigation}){

    const skipButton = ({...props})=>(
        <TouchableOpacity  {...props}>
            <Text style={styles.button}>
                Skip
            </Text>
        </TouchableOpacity>
    )

    const nextButton = ({...props})=>(
        <TouchableOpacity  {...props}>
            <Text style={styles.button}>
                Next
            </Text>
        </TouchableOpacity>
        
    )
    const doneButton = ({...props})=>(
        <TouchableOpacity  {...props}>
            <Text style={styles.button}>
                Done
            </Text>
        </TouchableOpacity>
    )
    return (
      <View style={styles.container}>
       <Onboarding
            SkipButtonComponent={skipButton}
            NextButtonComponent={nextButton}
            DoneButtonComponent={doneButton}
            onSkip={()=> navigation.navigate('Home')}
            onDone={()=> navigation.navigate('Home')}
            pages={[
                {
                imageContainerStyles: {marginTop: 2},
                backgroundColor: '#00BFA6',
                image: <Image source={require('../assets/onboarding1.png')} />,
                title: 'Connect to the world',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                backgroundColor: 'pink',
                image: <Image source={require('../assets/onboarding1.png')} />,
                title: 'Connect to the world',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                backgroundColor: 'blue',
                image: <Image source={require('../assets/onboarding1.png')} />,
                title: 'Connect to the world',
                subtitle: 'Done with React Native Onboarding Swiper',
                },

            ]}
            />
      </View>
    )
  }

  export default OnboardingScreen;
  // red: #D6484A


  const styles = StyleSheet.create({
    button: {
        marginHorizontal: 20,
    },
    container: {
      width: '100%',
      height: '100%'
    },
  });