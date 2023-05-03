import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Location1 = () => {
  return (
    <View style={styles.location}>
      <View style={styles.view}>
        <Image
          style={[styles.vectorIcon, styles.locationLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.firstLetsFind, styles.weNeedToTypo]}>
          First, let’s find you
        </Text>
        <Text style={[styles.weNeedTo, styles.weNeedToTypo]}>
          We need to know your address in order to find the right person for you
        </Text>
        <View style={styles.searchInput}>
          <Image
            style={[styles.searchInputChild, styles.path19IconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-631.png")}
          />
          <Text style={styles.enterAddress}>Enter address</Text>
          <Image
            style={styles.searchIcon}
            resizeMode="cover"
            source={require("../assets/search.png")}
          />
        </View>
        <Text style={[styles.currentLocation, styles.currentLocationTypo]}>
          Current Location
        </Text>
        <Text
          style={[styles.nw123thAveMiamiContainer, styles.currentLocationTypo]}
        >
          123 NW 123TH AVEMiami, FL, USA
        </Text>
        <Image
          style={[styles.path19Icon, styles.path19IconPosition]}
          resizeMode="cover"
          source={require("../assets/path-191.png")}
        />
        <Image
          style={[styles.communicationGpsLocation, styles.locationLayout]}
          resizeMode="cover"
          source={require("../assets/communication-gps-location-map-navigation-service-icon.png")}
        />
      </View>
      <Image
        style={[styles.locationChild, styles.locationLayout]}
        resizeMode="cover"
        source={require("../assets/group-33331.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  weNeedToTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    left: "3.84%",
    position: "absolute",
  },
  path19IconPosition: {
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  currentLocationTypo: {
    left: "15.12%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  vectorIcon: {
    width: "99.37%",
    right: "0.63%",
    left: "0%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  firstLetsFind: {
    top: "9.15%",
    fontSize: FontSize.size_9xl,
  },
  weNeedTo: {
    height: "5.02%",
    width: "91.69%",
    top: "14.73%",
    fontSize: FontSize.title_size,
    opacity: 0.5,
  },
  searchInputChild: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
  },
  enterAddress: {
    left: "14.92%",
    opacity: 0.22,
    fontSize: FontSize.size_base,
    top: "32.79%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  searchIcon: {
    height: "32.79%",
    width: "5.24%",
    right: "90.05%",
    bottom: "34.43%",
    left: "4.71%",
    top: "32.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchInput: {
    top: 202,
    left: 16,
    width: 382,
    height: 61,
    position: "absolute",
  },
  currentLocation: {
    top: "34.82%",
  },
  nw123thAveMiamiContainer: {
    height: "4.35%",
    width: "75.37%",
    top: "37.95%",
    opacity: 0.5,
  },
  path19Icon: {
    height: "0.11%",
    top: "32.48%",
    bottom: "67.4%",
    opacity: 0.1,
  },
  communicationGpsLocation: {
    height: "2.23%",
    width: "4.79%",
    top: "35.05%",
    right: "87.04%",
    bottom: "62.72%",
    left: "8.16%",
    opacity: 0.2,
  },
  view: {
    top: 0,
    left: 0,
    width: 417,
    position: "absolute",
    height: 896,
  },
  locationChild: {
    height: "53.01%",
    width: "90.58%",
    top: "57.59%",
    right: "3.86%",
    bottom: "-10.6%",
    left: "5.56%",
  },
  location: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 896,
  },
});

export default Location1;
