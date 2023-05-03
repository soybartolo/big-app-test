import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const OrderStatus = () => {
  return (
    <View style={styles.orderStatus}>
      <View style={[styles.view, styles.viewChildPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={styles.segmentedControl2Items}>
          <View style={[styles.view, styles.viewChildPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/background.png")}
            />
            <View style={[styles.maskGroup66, styles.inactivePosition]}>
              <View style={[styles.view, styles.viewChildPosition]}>
                <View style={[styles.view, styles.viewChildPosition]}>
                  <Text style={[styles.pastOrders, styles.textTypo]}>
                    Past Orders
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.groupIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={[styles.inactive, styles.inactivePosition]}>
            <Text style={[styles.pastOrders, styles.textTypo]}>Upcoming</Text>
          </View>
        </View>
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
            source={require("../assets/battery.png")}
          />
        </View>
        <View style={styles.carlsJr1001VeteransBlvd}>
          <Image
            style={[styles.vectorIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/nopath--copy-31.png")}
          />
          <Image
            style={[styles.nopathCopy311, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/nopath--copy-311.png")}
          />
          <Text style={[styles.julyEscobarMakeup, styles.viewMoreTypo]}>
            July Escobar Makeup
          </Text>
          <View style={styles.viewMenu}>
            <View style={[styles.view, styles.viewChildPosition]}>
              <Image
                style={[styles.vectorIcon, styles.iconChildLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-288.png")}
              />
              <Text style={[styles.viewMore, styles.viewMoreTypo]}>
                View More
              </Text>
            </View>
          </View>
          <Image
            style={[styles.restaurentProfileImage, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/restaurent-profile-image.png")}
          />
        </View>
        <Text style={[styles.preparingYourOrder, styles.us250Typo]}>
          Preparing Your order for pickup
        </Text>
        <Text style={[styles.estimatedArrival255, styles.orderNumber1Typo]}>
          Estimated arrival: 2:55 PM
        </Text>
        <Image
          style={[styles.dividerIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/divider.png")}
        />
        <View style={styles.crisscutFries}>
          <Text style={[styles.fantasyRoom, styles.us250Typo]}>
            Fantasy Room
          </Text>
          <Text style={[styles.us250, styles.us250Typo]}>US$250</Text>
        </View>
        <View style={[styles.viewReciept, styles.getHelpPosition]}>
          <Image
            style={[styles.viewRecieptChild, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-291.png")}
          />
          <Text style={[styles.viewReciept1, styles.getHelp1Typo]}>
            View Reciept
          </Text>
        </View>
        <View style={[styles.getHelp, styles.getHelpPosition]}>
          <Image
            style={[styles.getHelpChild, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-292.png")}
          />
          <Text style={[styles.getHelp1, styles.getHelp1Typo]}>Get Help</Text>
        </View>
        <View style={styles.orderNumber}>
          <Text style={[styles.orderNumber1, styles.orderNumber1Typo]}>
            Order Number
          </Text>
          <Text style={[styles.coff30, styles.textTypo]}>#COFF30</Text>
          <View style={styles.track}>
            <Image
              style={[styles.trackChild, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-293.png")}
            />
            <Text style={[styles.track1, styles.us250Typo]}>Track</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.image89Icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/image-89.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewChildPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  inactivePosition: {
    bottom: "24.24%",
    top: "27.27%",
    height: "48.48%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    color: Color.black,
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
  viewMoreTypo: {
    textAlign: "center",
    fontSize: FontSize.titleH416_size,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  us250Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  orderNumber1Typo: {
    opacity: 0.5,
    fontSize: FontSize.bodySmall13_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  getHelpPosition: {
    bottom: "28.01%",
    top: "65.51%",
    width: "43.48%",
    height: "6.47%",
    position: "absolute",
  },
  getHelp1Typo: {
    top: "32.76%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  pastOrders: {
    fontSize: FontSize.size_smi,
    left: "0%",
    top: "0%",
  },
  view: {
    left: "0%",
  },
  maskGroup66: {
    width: "16.75%",
    right: "67.78%",
    left: "15.46%",
  },
  groupIcon: {
    height: "103.03%",
    width: "50.26%",
    top: "4.55%",
    right: "0.13%",
    bottom: "-7.58%",
    left: "49.61%",
    position: "absolute",
  },
  inactive: {
    width: "14.66%",
    right: "18.9%",
    left: "66.45%",
  },
  segmentedControl2Items: {
    height: "3.68%",
    width: "92.27%",
    top: "5.47%",
    bottom: "90.85%",
    left: "3.86%",
    right: "3.86%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.bodyMedium15_size,
    left: "0%",
    top: "0%",
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
  parent: {
    height: "2.12%",
    width: "87.81%",
    top: "1.67%",
    right: "3.99%",
    bottom: "96.21%",
    left: "8.21%",
    position: "absolute",
  },
  nopathCopy311: {
    opacity: 0.6,
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  julyEscobarMakeup: {
    width: "99.74%",
    top: "45.41%",
    color: Color.textLight,
    left: "0.26%",
  },
  viewMore: {
    top: "32.61%",
    color: Color.black,
    left: "0%",
    width: "100%",
    fontSize: FontSize.titleH416_size,
  },
  viewMenu: {
    height: "23.47%",
    width: "43.16%",
    top: "61.22%",
    right: "28.42%",
    bottom: "15.31%",
    left: "28.42%",
    position: "absolute",
  },
  restaurentProfileImage: {
    height: "26.02%",
    width: "13.42%",
    top: "10.71%",
    right: "43.16%",
    bottom: "63.27%",
    left: "43.42%",
    position: "absolute",
  },
  carlsJr1001VeteransBlvd: {
    height: "21.88%",
    width: "91.79%",
    top: "11.38%",
    right: "4.11%",
    bottom: "66.74%",
    left: "4.11%",
    position: "absolute",
  },
  preparingYourOrder: {
    top: "35.6%",
    left: "4.11%",
    color: Color.black,
  },
  estimatedArrival255: {
    top: "48.66%",
    left: "4.11%",
  },
  dividerIcon: {
    height: "11.72%",
    width: "91.67%",
    top: "46.56%",
    bottom: "41.72%",
    left: "4.47%",
    right: "3.86%",
    position: "absolute",
  },
  fantasyRoom: {
    color: Color.black,
    left: "0%",
    top: "0%",
  },
  us250: {
    left: "85.63%",
    color: Color.black,
    top: "0%",
  },
  crisscutFries: {
    height: "2.23%",
    width: "85.75%",
    top: "54.24%",
    right: "9.66%",
    bottom: "43.53%",
    left: "4.59%",
    position: "absolute",
  },
  viewRecieptChild: {
    opacity: 0.2,
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  viewReciept1: {
    left: "22.22%",
  },
  viewReciept: {
    right: "52.66%",
    left: "3.86%",
  },
  getHelpChild: {
    opacity: 0.22,
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  getHelp1: {
    left: "31.67%",
  },
  getHelp: {
    left: "52.66%",
    right: "3.86%",
  },
  orderNumber1: {
    left: "0%",
    top: "0%",
  },
  coff30: {
    top: "48.89%",
    fontSize: FontSize.title_size,
    left: "0.26%",
  },
  trackChild: {
    opacity: 0.1,
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  track1: {
    top: "25.58%",
    left: "23.17%",
    color: Color.green,
  },
  track: {
    height: "95.56%",
    width: "21.52%",
    top: "2.22%",
    bottom: "2.22%",
    left: "78.48%",
    right: "0%",
    position: "absolute",
  },
  orderNumber: {
    height: "5.02%",
    width: "92.03%",
    top: "40.4%",
    bottom: "54.58%",
    left: "4.11%",
    right: "3.86%",
    position: "absolute",
  },
  image89Icon: {
    height: "5.25%",
    width: "15.22%",
    top: "15.63%",
    right: "42.27%",
    bottom: "79.13%",
    left: "42.51%",
    position: "absolute",
  },
  orderStatus: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default OrderStatus;
