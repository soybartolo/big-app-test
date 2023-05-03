import React, { useState } from 'react';
import { Image, StyleSheet, Text, ImageBackground, View , TouchableOpacity} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { TextInput } from 'react-native';
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  
  return (
    <View style={styles.login}>
      <View style={styles.illustration}>
        <Image
          style={[styles.doodle51Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/doodle5-1.png")}
        />

        <Image
          style={[styles.doodle71Icon, styles.iconPosition2]}
          resizeMode="cover"
          source={require("../assets/doodle7-1.png")}
        />
        <Image
          style={[styles.doodle72Icon, styles.iconPosition2]}
          resizeMode="cover"
          source={require("../assets/doodle7-2.png")}
        />
        
        <ImageBackground
          style={[styles.manIllustration, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/manillustration.png")}
        >
<TextInput
  style={[styles.password, { zIndex: 1 }]}
  placeholder="Password"
  secureTextEntry={true}
  onChangeText={(text) => setPassword(text)}
  value={password}
  
/>
          <Text style={styles.bookNow}>Book Now</Text>
        </ImageBackground>
        <View style={styles.doodle61}>
          <Image
            style={[styles.doodle61Icon, styles.textPosition]}
            resizeMode="cover"
            source={require("../assets/doodle6-1.png")}
          />
        </View>
      </View>
      <View style={styles.topBar}>
        <Image
          style={[styles.cancelIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/cancel.png")}
        />
        <View style={styles.statusBar}>
          <Text style={[styles.text, styles.textPosition]}>8:09</Text>
          <Image
            style={[styles.wifiIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.batteryIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/battery1.png")}
          />
        </View>
      </View>
      <Text style={[styles.dontHaveAnContainer, styles.login2Layout]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        <Text style={styles.signUpTypo}>Sign Up</Text>
      </Text>
      <Image
        style={styles.loginChild}
        resizeMode="cover"
        source={require("../assets/frame-734.png")}
      />
      
      <TouchableOpacity
        style={styles.googlefacebookIcon}
        onPress={() => navigation.navigate("MainPage")}
      >
      <Image
        style={[styles.getStartedBtnChild, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/googlefacebook.png")}
      />
     </TouchableOpacity>


      <View style={styles.login1}>
        <Text style={[styles.login2, styles.signUpTypo]}>Login</Text>
      </View>
      <Text style={[styles.forgotPassword, styles.login2Layout]}>
        Forgot Password ?
      </Text>



      <Image
        style={[styles.passwordIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/password.png")}
      />
<TextInput
  style={[styles.input, { zIndex: 1 }]}
  placeholder="Enter your email"
  keyboardType="email-address"
  onChangeText={(text) => setEmail(text)}
  value={email}
/>
      <Image
        style={[styles.emailIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/email.png")}
      />

    </View>
  );
};


const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  getStartedBtnChild: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },

  iconPosition2: {
    top: "18.48%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    marginHorizontal: 50,
    marginVertical: 388,
    padding: 10,
  },
  password: {
      height: 40,
      width: 300,
      borderColor: "gray",
      borderWidth: 0,
      marginHorizontal: 50,
      marginVertical: 344,
      padding: 10,
      },

  textPosition: {
    left: "0%",
    position: "absolute",
  },
  
  iconPosition1: {
    bottom: "15.79%",
    top: "21.05%",
    height: "63.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  login2Layout: {
    lineHeight: 17,
    textAlign: "left",
  },
  signUpTypo: {
    fontFamily: FontFamily.hindSiliguriSemibold,
    fontWeight: "600",
  },
  iconPosition: {
    left: 55,
    width: 304,
    position: "absolute",
  },
  doodle51Icon: {
    height: "34.5%",
    width: "41.12%",
    top: "65.5%",
    right: "4.55%",
    bottom: "0%",
    left: "54.33%",
    position: "absolute",
  },
  doodle71Icon: {
    height: "29.57%",
    width: "35.24%",
    right: "50.81%",
    bottom: "51.95%",
    left: "13.95%",
  },
  doodle72Icon: {
    height: "7.93%",
    width: "30.1%",
    right: "1.37%",
    bottom: "73.59%",
    left: "68.53%",
  },
  bookNow: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: Color.textLight,
    width: 60,
    height: 40,
    transform: [
      {
        rotate: "-16.73deg",
      },
    ],
    textAlign: "left",
  },
  manIllustration: {
    height: "83.78%",
    width: "99.85%",
    top: "13.35%",
    right: "0.15%",
    bottom: "2.87%",
    paddingLeft: 240,
    paddingTop: 141,
    paddingRight: 23,
    paddingBottom: 141,
    alignItems: "flex-end",
  },
  doodle61Icon: {
    height: "100%",
    top: "35%",
    bottom: "-35%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    left: "0%",
  },
  doodle61: {
    height: "12.32%",
    width: "21.54%",
    top: "14.17%",
    right: "75.28%",
    bottom: "73.51%",
    left: "3.18%",
    position: "absolute",
  },
  illustration: {
    top: -90,
    left: 11,
    width: 409,
    height: 487,
    position: "absolute",
  },
  cancelIcon: {
    height: "24.29%",
    width: "3.69%",
    top: "76.93%",
    right: "96.5%",
    bottom: "-1.23%",
    left: "-0.19%",
    position: "absolute",
  },
  text: {
    top: "0%",
    fontSize: FontSize.bodyMedium15_size,
    fontFamily: FontFamily.basicRegular,
    color: Color.black,
    textAlign: "left",
  },
  wifiIcon: {
    width: "4.4%",
    right: "8.8%",
    left: "86.8%",
  },
  batteryIcon: {
    width: "7.29%",
    left: "92.71%",
    right: "0%",
  },
  statusBar: {
    top: 0,
    left: 16,
    width: 364,
    height: 19,
    position: "absolute",
  },
  topBar: {
    top: 15,
    left: 18,
    width: 379,
    height: 58,
    position: "absolute",
  },
  dontHaveAn: {
    fontFamily: FontFamily.hindSiliguriRegular,
  },
  dontHaveAnContainer: {
    top: "93.75%",
    left: "26.09%",
    color: "#2c406e",
    opacity: 0.8,
    fontSize: FontSize.titleH416_size,
    lineHeight: 17,
    position: "absolute",
  },
  loginChild: {
    top: 691,
    left: 133,
    height: 17,
    width: 304,
    position: "absolute",
  },
  googlefacebookIcon: {
    height: "4.69%",
    width: "24.15%",
    top: "85.04%",
    right: "37.92%",
    bottom: "10.27%",
    left: "37.92%",
    position: "absolute",
  },
  login2: {
    fontSize: FontSize.size_base,
    color: "#fafafa",
    lineHeight: 17,
    textAlign: "left",
  },
  login1: {
    height: "5.8%",
    width: "73.43%",
    top: "65.51%",
    right: "13.29%",
    bottom: "28.68%",
    left: "13.29%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.crimson_100,
    shadowColor: "#f1f7ff",
    shadowOffset: {
      width: -3,
      height: 7,
    },
    shadowRadius: 13,
    elevation: 13,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  forgotPassword: {
    top: "59.48%",
    left: "63.77%",
    color: "#5b67ca",
    fontFamily: FontFamily.hindSiliguriRegular,
    fontSize: FontSize.titleH416_size,
    lineHeight: 17,
    position: "absolute",
  },
  passwordIcon: {
    top: 460,
    height: 39,
  },
  emailIcon: {
    top: 388,
    height: 40,
  },
  login: {
    backgroundColor: Color.textLight,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
