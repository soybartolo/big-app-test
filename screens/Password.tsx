import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Password = () => {
  return (
    <View style={styles.password}>
      <View style={styles.view}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
        <Text style={[styles.createYourAccount, styles.textTypo]}>
          Create your account password
        </Text>
        <Image
          style={[styles.inputIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-631.png")}
        />
        <Text style={[styles.minimum8Characters, styles.textTypo]}>
          Minimum 8 characters
        </Text>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
        <Image
          style={[styles.nextIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/next.png")}
        />
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>8:09</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
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
  vectorIcon: {
    height: "83.12%",
    width: "65.09%",
    right: "8.81%",
    bottom: "0%",
    left: "26.1%",
    top: "16.88%",
    maxWidth: "100%",
  },
  image5Icon: {
    height: "61.69%",
    right: "-26.1%",
    bottom: "21.43%",
    left: "26.1%",
    top: "16.88%",
    maxWidth: "100%",
    width: "100%",
  },
  createYourAccount: {
    top: "57.33%",
    fontSize: FontSize.titleH320_size,
    left: "28.62%",
  },
  inputIcon: {
    height: "5.66%",
    width: "60.06%",
    top: "61.69%",
    right: "11.32%",
    bottom: "32.65%",
    left: "28.62%",
  },
  minimum8Characters: {
    top: "63.54%",
    left: "31.45%",
    fontSize: FontSize.size_base,
    opacity: 0.22,
  },
  vectorIcon1: {
    top: 769,
    left: 169,
    width: 408,
    height: 285,
    position: "absolute",
  },
  backIcon: {
    height: "1.36%",
    width: "2.99%",
    top: "22.34%",
    right: "68.3%",
    bottom: "76.3%",
    left: "28.71%",
  },
  nextIcon: {
    height: "4.92%",
    width: "8.81%",
    top: "62.06%",
    right: "11.95%",
    bottom: "33.02%",
    left: "79.25%",
  },
  text: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.bodyMedium15_size,
  },
  wifiIcon: {
    width: "4.4%",
    right: "8.8%",
    left: "86.8%",
  },
  batteryIcon: {
    width: "7.29%",
    right: "0%",
    left: "92.71%",
  },
  parent: {
    top: 197,
    left: 200,
    width: 364,
    height: 19,
    position: "absolute",
  },
  view: {
    top: -182,
    left: -166,
    width: 636,
    height: 1078,
    position: "absolute",
  },
  password: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Password;
