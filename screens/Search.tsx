import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={[styles.view, styles.viewPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout7]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.mexicanIcon, styles.iconLayout6]}
          resizeMode="cover"
          source={require("../assets/mexican.png")}
        />
        <Image
          style={[styles.bubbleTeaIcon, styles.iconPosition4]}
          resizeMode="cover"
          source={require("../assets/mexican.png")}
        />
        <Text style={[styles.topCategories, styles.textTypo]}>
          Top Categories
        </Text>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>8:09</Text>
          <Image
            style={[styles.wifiIcon, styles.iconPosition3]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.batteryIcon, styles.iconPosition3]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
        </View>
        <Image
          style={[styles.path119Icon, styles.iconLayout7]}
          resizeMode="cover"
          source={require("../assets/path-119.png")}
        />
        <Text style={[styles.chinese, styles.textTypo]}>Chinese</Text>
        <Image
          style={[styles.latestDealsIcon, styles.iconLayout5]}
          resizeMode="cover"
          source={require("../assets/mexican.png")}
        />
        <Image
          style={[styles.pizzaIcon, styles.iconLayout5]}
          resizeMode="cover"
          source={require("../assets/mexican.png")}
        />
        <Image
          style={[styles.chineseIcon, styles.iconLayout4]}
          resizeMode="cover"
          source={require("../assets/mexican.png")}
        />
        <Image
          style={[styles.sushiIcon, styles.iconLayout4]}
          resizeMode="cover"
          source={require("../assets/mexican.png")}
        />
        <View style={styles.addressSearch}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout7]}
            resizeMode="cover"
            source={require("../assets/rectangle-63.png")}
          />
          <Text style={[styles.universityDrive, styles.closeOIconPosition]}>
            <Text style={styles.universityDrive1}>1226 university drive</Text>
            <Text style={styles.text1}>|</Text>
          </Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout7]}
            resizeMode="cover"
            source={require("../assets/search.png")}
          />
          <Image
            style={[styles.closeOIcon, styles.closeOIconPosition]}
            resizeMode="cover"
            source={require("../assets/closeo1.png")}
          />
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>8:09</Text>
          <Image
            style={[styles.wifiIcon, styles.iconPosition3]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.batteryIcon, styles.iconPosition3]}
            resizeMode="cover"
            source={require("../assets/battery1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.barber1Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/barber-1.png")}
      />
      <Image
        style={[styles.hair1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/hair-1.png")}
      />
      <Image
        style={[styles.hairremoval1Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/hairremoval-1.png")}
      />
      <Image
        style={[styles.lashes1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/lashes-1.png")}
      />
      <Image
        style={[styles.nails1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/nails-1.png")}
      />
      <Image
        style={[styles.skin1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/skin-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout7: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout6: {
    bottom: "9.93%",
    top: "59.26%",
    width: "59.42%",
    height: "30.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition4: {
    left: "40.58%",
    right: "0%",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
  },
  iconPosition3: {
    bottom: "15.79%",
    top: "21.05%",
    height: "63.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout5: {
    bottom: "53.91%",
    top: "15.29%",
    width: "59.42%",
    height: "30.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout4: {
    bottom: "32.03%",
    top: "37.17%",
    width: "59.42%",
    height: "30.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  closeOIconPosition: {
    top: "32.79%",
    position: "absolute",
  },
  iconPosition1: {
    left: "8.45%",
    right: "57.25%",
  },
  iconPosition: {
    left: "57.25%",
    right: "8.45%",
  },
  iconLayout: {
    bottom: "16.63%",
    top: "65.29%",
    width: "34.3%",
    height: "18.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  mexicanIcon: {
    right: "40.58%",
    left: "0%",
  },
  bubbleTeaIcon: {
    bottom: "9.93%",
    top: "59.26%",
    width: "59.42%",
    height: "30.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  topCategories: {
    top: "16.18%",
    left: "4.11%",
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.bodyMedium15_size,
    color: Color.black,
    left: "0%",
    top: "0%",
    position: "absolute",
    fontFamily: FontFamily.basicRegular,
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
  parent: {
    height: "2.12%",
    width: "87.81%",
    top: "1.67%",
    right: "3.99%",
    bottom: "96.21%",
    left: "8.21%",
    position: "absolute",
  },
  path119Icon: {
    height: "0.22%",
    width: "1.36%",
    top: "93.41%",
    right: "49.52%",
    bottom: "6.37%",
    left: "49.12%",
    position: "absolute",
  },
  chinese: {
    top: "55.58%",
    left: "66.67%",
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  latestDealsIcon: {
    right: "40.58%",
    left: "0%",
  },
  pizzaIcon: {
    left: "40.58%",
    right: "0%",
  },
  chineseIcon: {
    left: "40.58%",
    right: "0%",
  },
  sushiIcon: {
    right: "40.58%",
    left: "0%",
  },
  universityDrive1: {
    color: Color.black,
  },
  text1: {
    color: Color.gainsboro_100,
  },
  universityDrive: {
    left: "14.92%",
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.size_base,
  },
  searchIcon: {
    height: "32.79%",
    width: "5.24%",
    top: "34.43%",
    right: "90.05%",
    bottom: "32.79%",
    left: "4.71%",
    position: "absolute",
  },
  closeOIcon: {
    height: "36.07%",
    width: "5.76%",
    right: "3.4%",
    bottom: "31.15%",
    left: "90.84%",
    opacity: 0.2,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  addressSearch: {
    height: "6.81%",
    width: "92.27%",
    top: "6.47%",
    right: "3.86%",
    bottom: "86.72%",
    left: "3.86%",
    position: "absolute",
  },
  view: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  barber1Icon: {
    bottom: "60.6%",
    top: "21.32%",
    width: "34.3%",
    height: "18.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hair1Icon: {
    bottom: "60.6%",
    top: "21.32%",
    width: "34.3%",
    height: "18.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hairremoval1Icon: {
    top: "43.19%",
    bottom: "38.73%",
    width: "34.3%",
    height: "18.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lashes1Icon: {
    top: "43.97%",
    bottom: "37.95%",
    width: "34.3%",
    height: "18.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nails1Icon: {
    left: "8.45%",
    right: "57.25%",
  },
  skin1Icon: {
    left: "57.25%",
    right: "8.45%",
  },
  search: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Search;
