import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AddPayment = () => {
  return (
    <View style={styles.addPayment}>
      <View style={[styles.view, styles.viewPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.groupIcon, styles.topTabPosition]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={styles.payments}>Payments</Text>
        <Text style={[styles.addPaymentMehthod, styles.textTypo]}>
          Add Payment Mehthod
        </Text>
        <Image
          style={[styles.backIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
        <View style={styles.save}>
          <Image
            style={[styles.saveChild, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Text style={styles.save1}>Save</Text>
        </View>
        <View style={[styles.topTab, styles.topTabPosition]}>
          <Text style={[styles.card, styles.textTypo]}>Card</Text>
          <Text style={[styles.paypal, styles.paypalTypo]}>Paypal</Text>
          <Text style={[styles.giftCard, styles.paypalTypo]}>Gift Card</Text>
          <Image
            style={[styles.path279Icon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/path-279.png")}
          />
          <Image
            style={[styles.path308Icon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/path-308.png")}
          />
        </View>
        <View style={styles.creditCardDetails}>
          <Text style={[styles.text, styles.textTypo]}>
            1111 2222 3333 4444
          </Text>
          <Text style={[styles.bartoloSmith, styles.textTypo]}>
            Bartolo Smith
          </Text>
          <Text style={[styles.cardNumber, styles.cardTypo]}>Card Number</Text>
          <Text style={[styles.cardHolder, styles.cardTypo]}>Card Holder</Text>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text1, styles.textTypo]}>03/25</Text>
            <Text style={[styles.expDate, styles.cardTypo]}>Exp Date</Text>
          </View>
          <View style={[styles.unitedStatesParent, styles.groupPosition1]}>
            <Text style={[styles.text1, styles.textTypo]}>United States</Text>
            <Text style={[styles.expDate, styles.cardTypo]}>Country</Text>
          </View>
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={[styles.text1, styles.textTypo]}>1525410</Text>
            <Text style={[styles.expDate, styles.cardTypo]}>Post Code</Text>
          </View>
          <View style={[styles.container, styles.groupPosition]}>
            <Text style={[styles.text1, styles.textTypo]}>123</Text>
            <Text style={[styles.expDate, styles.cardTypo]}>CVV</Text>
          </View>
          <Image
            style={[styles.path309Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/path-309.png")}
          />
          <Image
            style={[styles.path315Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/path-309.png")}
          />
          <Image
            style={[styles.path310Icon, styles.iconPosition2]}
            resizeMode="cover"
            source={require("../assets/path-310.png")}
          />
          <Image
            style={[styles.path312Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/path-310.png")}
          />
          <Image
            style={[styles.path313Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/path-310.png")}
          />
          <Image
            style={[styles.path311Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/path-310.png")}
          />
          <Image
            style={[styles.path314Icon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/path-314.png")}
          />
        </View>
        <View style={styles.statusBar}>
          <Text style={[styles.text4, styles.textTypo]}>8:09</Text>
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
      <View style={styles.component7iconscheckParent}>
        <Image
          style={[
            styles.component7iconscheck,
            styles.component7iconscheckPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/component-7iconscheck.png")}
        />
        <Image
          style={[
            styles.component7iconscheck1,
            styles.component7iconscheckPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/component-7iconscheck1.png")}
        />
        <Image
          style={[styles.groupChild, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-12750.png")}
        />
        <View style={styles.mastercardWhiteLogoStylParent}>
          <Image
            style={[styles.mastercardWhiteLogoStyl, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/mastercard--white-logo--style-1.png")}
          />
          <Text style={styles.bank}>Bank</Text>
          <Text style={styles.cardNumber1}>Card Number</Text>
          <Text style={[styles.cardHolder1, styles.expiresPosition]}>
            Card Holder
          </Text>
          <Text style={[styles.may, styles.mayPosition]}>29/May</Text>
          <Text style={[styles.expires, styles.mayPosition]}>Expires</Text>
          <Text style={[styles.text5, styles.text5Position]}>
            1111 2222 3333 4444
          </Text>
          <Text style={[styles.bartoloSmith1, styles.text5Position]}>
            Bartolo Smith
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  topTabPosition: {
    left: "0.24%",
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  paypalTypo: {
    opacity: 0.5,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.size_base,
    top: "0%",
    position: "absolute",
  },
  cardTypo: {
    fontSize: FontSize.bodySmall13_size,
    opacity: 0.5,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  parentPosition: {
    bottom: "31.82%",
    top: "53.14%",
  },
  groupPosition1: {
    bottom: "3.85%",
    top: "81.12%",
  },
  groupPosition: {
    left: "58.55%",
    height: "15.03%",
    position: "absolute",
  },
  iconLayout2: {
    width: "99.47%",
    height: "0.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition2: {
    bottom: "27.45%",
    top: "72.2%",
  },
  iconPosition1: {
    bottom: "-0.17%",
    top: "99.83%",
  },
  iconLayout: {
    left: "58.42%",
    right: "0.62%",
    width: "40.96%",
    height: "0.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  component7iconscheckPosition: {
    top: "93.25%",
    height: "6.75%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  expiresPosition: {
    top: "78.27%",
    opacity: 0.2,
    fontSize: FontSize.titleH416_size,
  },
  mayPosition: {
    left: "42.69%",
    color: Color.textLight,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  text5Position: {
    left: "2.49%",
    color: Color.textLight,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  vectorIcon: {
    right: "0.24%",
    maxWidth: "100%",
    bottom: "0%",
    width: "99.76%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupIcon: {
    height: "79.13%",
    width: "99.52%",
    top: "20.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0.24%",
    bottom: "0%",
  },
  payments: {
    top: "6.03%",
    left: "39.04%",
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  addPaymentMehthod: {
    top: "10.49%",
    left: "3.61%",
    fontSize: FontSize.titleH320_size,
  },
  backIcon: {
    height: "1.63%",
    width: "4.58%",
    top: "6.57%",
    right: "91.42%",
    bottom: "91.8%",
    left: "4%",
    position: "absolute",
  },
  saveChild: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
  },
  save1: {
    top: "33.33%",
    left: "45.19%",
    color: Color.textLight,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  save: {
    height: "6.7%",
    width: "92.77%",
    right: "3.37%",
    bottom: "3.91%",
    left: "3.86%",
    top: "89.4%",
    position: "absolute",
  },
  card: {
    left: "13.77%",
    fontSize: FontSize.size_base,
    top: "0%",
  },
  paypal: {
    left: "44.44%",
  },
  giftCard: {
    left: "74.64%",
  },
  path279Icon: {
    height: "3.13%",
    top: "98.44%",
    bottom: "-1.56%",
    opacity: 0.1,
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
  },
  path308Icon: {
    height: "6.25%",
    width: "35.02%",
    top: "96.88%",
    right: "64.98%",
    bottom: "-3.12%",
    left: "0%",
    position: "absolute",
  },
  topTab: {
    height: "3.57%",
    top: "17.3%",
    bottom: "79.13%",
    right: "0%",
    width: "99.76%",
  },
  text: {
    top: "32.87%",
    opacity: 0.8,
    left: "0.13%",
    fontSize: FontSize.size_base,
  },
  bartoloSmith: {
    top: "8.04%",
    left: "0.66%",
    opacity: 0.8,
    fontSize: FontSize.size_base,
  },
  cardNumber: {
    top: "24.82%",
    left: "0.13%",
  },
  cardHolder: {
    left: "0.66%",
    top: "0%",
  },
  text1: {
    top: "53.49%",
    opacity: 0.8,
    fontSize: FontSize.size_base,
    left: "0%",
  },
  expDate: {
    left: "0%",
    top: "0%",
  },
  parent: {
    width: "12.11%",
    right: "87.76%",
    height: "15.03%",
    left: "0.13%",
    position: "absolute",
  },
  unitedStatesParent: {
    width: "24.47%",
    right: "75.39%",
    height: "15.03%",
    left: "0.13%",
    position: "absolute",
  },
  group: {
    width: "13.68%",
    right: "27.76%",
    bottom: "3.85%",
    top: "81.12%",
  },
  container: {
    width: "5.79%",
    right: "35.66%",
    bottom: "31.82%",
    top: "53.14%",
  },
  path309Icon: {
    top: "43.18%",
    right: "0.53%",
    bottom: "56.47%",
    left: "0%",
  },
  path315Icon: {
    top: "18.36%",
    bottom: "81.29%",
    left: "0.53%",
    right: "0%",
  },
  path310Icon: {
    right: "59.04%",
    width: "40.96%",
    height: "0.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  path312Icon: {
    right: "59.04%",
    width: "40.96%",
    height: "0.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  path313Icon: {
    bottom: "-0.17%",
    top: "99.83%",
  },
  path311Icon: {
    bottom: "27.45%",
    top: "72.2%",
  },
  path314Icon: {
    height: "3.25%",
    width: "4.15%",
    top: "91.01%",
    right: "58.85%",
    bottom: "5.74%",
    left: "37%",
    position: "absolute",
  },
  creditCardDetails: {
    height: "31.92%",
    width: "91.57%",
    top: "51.67%",
    right: "3.13%",
    bottom: "16.4%",
    left: "5.3%",
    position: "absolute",
  },
  text4: {
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
  statusBar: {
    height: "2.12%",
    width: "87.6%",
    top: "1.67%",
    right: "4.22%",
    bottom: "96.21%",
    left: "8.19%",
    position: "absolute",
  },
  view: {
    width: "100.24%",
    right: "-0.24%",
    left: "0%",
  },
  component7iconscheck: {
    width: "5.02%",
    right: "56.78%",
    left: "38.21%",
  },
  component7iconscheck1: {
    width: "4.78%",
    right: "56.72%",
    left: "38.51%",
  },
  groupChild: {
    height: "99.26%",
    width: "109.81%",
    top: "-5.9%",
    right: "-4.77%",
    bottom: "6.65%",
    left: "-5.04%",
    position: "absolute",
  },
  mastercardWhiteLogoStyl: {
    height: "15.19%",
    width: "13.8%",
    right: "86.2%",
    bottom: "84.81%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  bank: {
    height: "10.3%",
    width: "23.13%",
    top: "2.42%",
    left: "76.87%",
    fontWeight: "700",
    fontFamily: FontFamily.titleH416,
    textAlign: "right",
    fontSize: FontSize.titleH416_size,
    color: Color.textLight,
    position: "absolute",
  },
  cardNumber1: {
    top: "43.3%",
    opacity: 0.2,
    left: "2.49%",
    fontSize: FontSize.titleH416_size,
    color: Color.textLight,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  cardHolder1: {
    left: "2.49%",
    color: Color.textLight,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  may: {
    opacity: 0.8,
    top: "89.4%",
    fontSize: FontSize.size_base,
  },
  expires: {
    top: "78.27%",
    opacity: 0.2,
    fontSize: FontSize.titleH416_size,
  },
  text5: {
    top: "56.54%",
    fontSize: 21,
    opacity: 0.8,
  },
  bartoloSmith1: {
    opacity: 0.8,
    top: "89.4%",
    fontSize: FontSize.size_base,
  },
  mastercardWhiteLogoStylParent: {
    height: "69.63%",
    width: "87.76%",
    top: "9.7%",
    right: "5.67%",
    bottom: "20.66%",
    left: "6.57%",
    position: "absolute",
  },
  component7iconscheckParent: {
    height: "30.25%",
    width: "91.06%",
    top: "23.1%",
    right: "4.35%",
    bottom: "46.65%",
    left: "4.59%",
    position: "absolute",
  },
  addPayment: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddPayment;
