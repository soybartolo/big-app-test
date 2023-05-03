import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}

const Intro2Icon: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.intro2Icon}
      resizeMode="cover"
      source={require("../assets/intro2.png")}
    >
      <TouchableOpacity
        style={styles.skip}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Image
          style={[styles.skipChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Text style={[styles.skip1, styles.skip1Typo]}>Skip</Text>
      </TouchableOpacity>


      <View style={styles.statusBar}>
        <Text style={[styles.text, styles.textClr]}>8:09</Text>
        <Image
          style={[styles.wifiIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/battery1.png")}
        />
      </View>

      <TouchableOpacity
        style={styles.getStartedBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={[styles.getStartedBtnChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-23.png")}
        />
        <Image
          style={[styles.path2Icon, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/path-21.png")}
        />
        <Text style={[styles.getStarted, styles.skip1Typo]}>Get Started</Text>
      </TouchableOpacity>

      <Text style={[styles.getReadyWith, styles.textClr]}>
        Get ready with us
      </Text>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  skip1Typo: {
    fontFamily: FontFamily.basicRegular,
    textAlign: "left",
    position: "absolute",
  },
  textClr: {
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  iconPosition: {
    bottom: "15.79%",
    top: "21.05%",
    height: "63.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  skipChild: {
    opacity: 0.03,
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  skip1: {
    top: "25%",
    left: "32.56%",
    fontSize: FontSize.titleH416_size,
    color: "#000401",
    textAlign: "left",
  },
  skip: {
    top: 52,
    left: 312,
    width: 86,
    height: 36,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.bodyMedium15_size,
    textAlign: "left",
    left: "0%",
    top: "0%",
    color: Color.black,
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
    bottom: "15.79%",
    top: "21.05%",
    height: "63.16%",
  },
  statusBar: {
    top: 15,
    left: 34,
    width: 364,
    height: 19,
    position: "absolute",
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
  path2Icon: {
    height: "23.54%",
    width: "2.4%",
    top: "38.23%",
    right: "4.94%",
    bottom: "38.23%",
    left: "92.65%",
  },
  getStarted: {
    top: "28.33%",
    left: "34.82%",
    fontSize: FontSize.titleH320_size,
    color: Color.textLight,
    textAlign: "left",
  },
  getStartedBtn: {
    top: 777,
    left: 3,
    width: 382,
    height: 60,
    position: "absolute",
  },
  getReadyWith: {
    height: "8.15%",
    width: "75.85%",
    top: "47.88%",
    left: "12.08%",
    fontSize: 39,
    textAlign: "center",
  },
  intro2Icon: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Intro2Icon;
