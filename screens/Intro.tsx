import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Intro = () => {
  return (
    <View style={styles.intro}>
      <Image
        style={[styles.coverImageIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/coverimage.png")}
      />
      <View style={styles.logo}>
        <Text style={[styles.linda, styles.lindaPosition]}>Linda</Text>
        <Image
          style={[styles.path1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/path-1.png")}
        />
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
  lindaPosition: {
    left: "0%",
    top: "0%",
  },
  coverImageIcon: {
    height: "100.11%",
    right: "0%",
    bottom: "-0.11%",
    left: "0%",
    top: "0%",
    width: "100%",
    maxWidth: "100%",
  },
  linda: {
    fontSize: 55,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.textLight,
    textAlign: "left",
    position: "absolute",
  },
  path1Icon: {
    height: "15.52%",
    width: "22.31%",
    top: "82.16%",
    right: "48.09%",
    bottom: "2.32%",
    left: "29.61%",
  },
  logo: {
    top: 417,
    left: 116,
    width: 155,
    height: 83,
    position: "absolute",
  },
  intro: {
    backgroundColor: Color.textLight,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Intro;
