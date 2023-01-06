import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

function OnboardingScreen({ navigation }) {
  const skipButton = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text style={styles.button}>Skip</Text>
    </TouchableOpacity>
  );

  const nextButton = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text style={styles.button}>Next</Text>
    </TouchableOpacity>
  );
  const doneButton = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text style={styles.button}>Done</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Onboarding
        SkipButtonComponent={skipButton}
        NextButtonComponent={nextButton}
        DoneButtonComponent={doneButton}
        onSkip={() => navigation.replace("Home")}
        onDone={() => navigation.replace("Home")}
        pages={[
          {
            imageContainerStyles: { marginTop: 2 },
            backgroundColor: "#00BFA6",
            image: <Image source={require("../../assets/onboarding1.png")} />,
            title: "Welcome To Matcher",
            subtitle: "Here you can Match yourself with Anyone",
          },
          {
            backgroundColor: "#C278AA",
            image: <Image source={require("../../assets/onboarding2.png")} />,
            title: "Machometer",
            subtitle:
              "Check Compatiblity with friends, family, And Couples with our Machometer",
          },
          {
            backgroundColor: "#FCE584",
            image: <Image source={require("../../assets/onboarding3.png")} />,
            title: "Your Privacy Matters",
            subtitle:
              "We have strict policy to protect your personal Informatiom",
          },
        ]}
      />
    </View>
  );
}

export default OnboardingScreen;
// red: #D6484A

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
  },
  container: {
    width: "100%",
    height: "100%",
  },
});
