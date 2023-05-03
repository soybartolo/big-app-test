import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const OrderCart = () => {
  return (
    <View style={styles.orderCart}>
      <Image
        style={[styles.image90Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-90.png")}
      />
      <View style={[styles.view, styles.viewPosition]}>
        <Image
          style={[styles.image90Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={[styles.yourBasket, styles.viewPosition]}>
          <Image
            style={[styles.image90Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-148.png")}
          />
          <Text style={[styles.yourOrders, styles.us999Typo]}>Your orders</Text>
          <Image
            style={[styles.cancelIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cancel.png")}
          />
          <Image
            style={[styles.dividerIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/divider1.png")}
          />
          <Text style={[styles.addANote, styles.addANoteTypo]}>
            Add a note (e.g. call before arriving)
          </Text>
          <View style={styles.getATextMessageToRemindYParent}>
            <Text style={[styles.getAText, styles.addANoteTypo]}>
              Get a text message to remind your appointment
            </Text>
            <Text style={[styles.remindMe24, styles.us999Typo]}>
              Remind me 24 hours before
            </Text>
          </View>
          <Image
            style={[styles.container1Icon, styles.container1IconPosition]}
            resizeMode="cover"
            source={require("../assets/container1.png")}
          />
          <Text style={[styles.subtotal, styles.taxesTypo]}>Subtotal</Text>
          <Text style={[styles.promotion, styles.taxesTypo]}>Promotion</Text>
          <Text style={[styles.taxes, styles.taxesTypo]}>Taxes</Text>
          <Text style={[styles.total, styles.taxesTypo]}>Total</Text>
          <Text style={[styles.us999, styles.us999Typo]}>US$9.99</Text>
          <View
            style={[styles.promotionApplied, styles.container1IconPosition]}
          >
            <Image
              style={[styles.promotionAppliedChild, styles.path297IconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-185.png")}
            />
            <Text
              style={[styles.promotionApplied1, styles.switchPromosPosition]}
            >
              Promotion applied
            </Text>
            <Text style={styles.youreSaving25}>You're saving 25%</Text>
            <Text style={[styles.switchPromos, styles.switchPromosPosition]}>
              Switch Promos
            </Text>
            <Image
              style={[styles.tagIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/tag1.png")}
            />
          </View>
          <Text style={[styles.us1179, styles.us295Typo]}>US$11.79</Text>
          <Text style={[styles.us295, styles.us295Typo]}>-US$2.95</Text>
          <Text style={[styles.us115, styles.us295Typo]}>US$1.15</Text>
          <Image
            style={[styles.path297Icon, styles.addPaymentPosition]}
            resizeMode="cover"
            source={require("../assets/path-297.png")}
          />
          <View style={[styles.addPayment, styles.addPaymentPosition]}>
            <Image
              style={[styles.image90Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-186.png")}
            />
            <Text style={[styles.payment, styles.us999Typo]}> Payment</Text>
            <Image
              style={[styles.path298Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/path-298.png")}
            />
            <Image
              style={[styles.creditCardIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/creditcard.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  viewPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  us999Typo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  addANoteTypo: {
    opacity: 0.55,
    fontSize: FontSize.titleH416_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  container1IconPosition: {
    right: "3.86%",
    position: "absolute",
  },
  taxesTypo: {
    left: "4.11%",
    fontSize: FontSize.titleH416_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  path297IconLayout: {
    opacity: 0.1,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  switchPromosPosition: {
    color: Color.crimson_100,
    left: "26.06%",
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  us295Typo: {
    opacity: 0.8,
    fontSize: FontSize.bodySmall13_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  addPaymentPosition: {
    width: "91.79%",
    right: "3.86%",
    left: "4.35%",
    position: "absolute",
  },
  image90Icon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  yourOrders: {
    top: "2.25%",
    left: "38.89%",
    fontSize: FontSize.size_base,
  },
  cancelIcon: {
    height: "1.75%",
    width: "3.38%",
    top: "2.29%",
    right: "92.37%",
    bottom: "95.96%",
    left: "4.25%",
    position: "absolute",
  },
  dividerIcon: {
    height: "7.01%",
    top: "7.82%",
    bottom: "85.17%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  addANote: {
    top: "10.14%",
    left: "4.35%",
  },
  getAText: {
    top: "55%",
    left: "0%",
  },
  remindMe24: {
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
  },
  getATextMessageToRemindYParent: {
    height: "5.01%",
    width: "70.29%",
    top: "16.77%",
    right: "25.36%",
    bottom: "78.22%",
    left: "4.35%",
    position: "absolute",
  },
  container1Icon: {
    height: "4.32%",
    width: "12.56%",
    top: "17.27%",
    bottom: "78.41%",
    left: "83.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  subtotal: {
    top: "56.57%",
  },
  promotion: {
    top: "60.7%",
  },
  taxes: {
    top: "67.21%",
  },
  total: {
    top: "72.22%",
  },
  us999: {
    top: "71.71%",
    left: "75.12%",
    fontSize: 19,
  },
  promotionAppliedChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  promotionApplied1: {
    top: "16.96%",
    fontSize: FontSize.size_base,
  },
  youreSaving25: {
    top: "38.39%",
    left: "26.05%",
    fontSize: FontSize.bodySmall13_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  switchPromos: {
    top: "65.18%",
    textDecoration: "underline",
    fontSize: FontSize.titleH416_size,
    left: "26.06%",
  },
  tagIcon: {
    height: "48.43%",
    width: "14.2%",
    top: "27.68%",
    right: "79.58%",
    bottom: "23.89%",
    left: "6.22%",
    position: "absolute",
  },
  promotionApplied: {
    height: "14.02%",
    width: "92.27%",
    top: "23.78%",
    bottom: "62.2%",
    left: "3.86%",
  },
  us1179: {
    top: "56.7%",
    left: "82.61%",
  },
  us295: {
    top: "60.83%",
    left: "82.13%",
  },
  us115: {
    top: "67.46%",
    left: "84.54%",
  },
  path297Icon: {
    height: "0.13%",
    top: "65.49%",
    bottom: "34.39%",
    opacity: 0.1,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  payment: {
    top: "36.51%",
    left: "36.32%",
    fontSize: FontSize.size_base,
  },
  path298Icon: {
    height: "28.59%",
    width: "2.74%",
    top: "36.97%",
    right: "5.86%",
    bottom: "34.43%",
    left: "91.39%",
    position: "absolute",
  },
  creditCardIcon: {
    height: "42.01%",
    width: "10.13%",
    top: "28.97%",
    right: "83.95%",
    bottom: "29.02%",
    left: "5.92%",
    position: "absolute",
  },
  addPayment: {
    height: "7.88%",
    top: "88.36%",
    bottom: "3.75%",
  },
  yourBasket: {
    height: "89.17%",
    top: "10.83%",
    left: "0%",
  },
  view: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  orderCart: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default OrderCart;
