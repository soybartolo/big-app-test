import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Email = () => {
  return (
    <View style={styles.email}>
      <View style={styles.ui}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.maskFrame71, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/mask-frame-71.png")}
        />
        <Text style={[styles.whatYourEmail, styles.whatYourEmailTypo]}>
          What' your email address
        </Text>
        <Image
          style={[styles.inputIcon, styles.inputIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-631.png")}
        />
        <Text style={[styles.emaillindacom, styles.closeOIconPosition]}>
          email@linda.com
        </Text>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={[styles.closeOIcon, styles.closeOIconPosition]}
          resizeMode="cover"
          source={require("../assets/closeo1.png")}
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
      </View>
      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
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
  whatYourEmailTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
  },
  inputIconPosition: {
    left: "5.16%",
    position: "absolute",
  },
  closeOIconPosition: {
    top: "56.57%",
    position: "absolute",
  },
  vectorIcon: {
    height: "99.01%",
    width: "92.83%",
    right: "5.61%",
    bottom: "0%",
    left: "1.57%",
    top: "0.99%",
    maxWidth: "100%",
    position: "absolute",
  },
  maskFrame71: {
    height: "49.17%",
    right: "-1.57%",
    bottom: "49.83%",
    left: "1.57%",
    top: "0.99%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  whatYourEmail: {
    top: "49.17%",
    fontSize: FontSize.titleH320_size,
    left: "5.16%",
    position: "absolute",
  },
  inputIcon: {
    height: "6.74%",
    width: "85.65%",
    top: "54.36%",
    right: "9.19%",
    bottom: "38.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  emaillindacom: {
    left: "9.19%",
    fontSize: FontSize.size_base,
    opacity: 0.22,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
  },
  vectorIcon1: {
    top: 596,
    left: 10,
    width: 408,
    height: 285,
    position: "absolute",
  },
  closeOIcon: {
    height: "2.43%",
    width: "4.93%",
    right: "27.8%",
    bottom: "40.99%",
    left: "67.26%",
    opacity: 0.2,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  backIcon: {
    height: "1.61%",
    width: "4.27%",
    top: "7.5%",
    right: "90.45%",
    bottom: "90.89%",
    left: "5.29%",
    position: "absolute",
  },
  nextIcon: {
    height: "5.86%",
    width: "12.56%",
    top: "54.81%",
    right: "10.09%",
    bottom: "39.34%",
    left: "77.35%",
    position: "absolute",
  },
  ui: {
    top: -9,
    left: -7,
    width: 446,
    height: 905,
    position: "absolute",
  },
  image4Icon: {
    height: "46.65%",
    width: "78.26%",
    top: "0%",
    right: "0%",
    bottom: "53.35%",
    left: "21.74%",
    position: "absolute",
  },
  email: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Email;
