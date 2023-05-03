import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Payments = () => {
  return (
    <View style={styles.payments}>
      <View style={[styles.view, styles.viewPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.payments1, styles.payments1Typo]}>Payments</Text>
        <Image
          style={[styles.cancelIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/cancel.png")}
        />
        <View style={[styles.addPaymentMethod, styles.paymentsItemPosition]}>
          <Image
            style={[styles.addPaymentMethodChild, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-258.png")}
          />
          <Text style={[styles.addPaymentMethod1, styles.addPosition]}>
            Add Payment Method
          </Text>
          <Image
            style={[styles.addPaymentMethodItem, styles.addPosition]}
            resizeMode="cover"
            source={require("../assets/group-196.png")}
          />
        </View>
        <View style={styles.statusBar}>
          <Text style={styles.text}>8:09</Text>
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
      <Image
        style={[styles.paymentsItem, styles.paymentsItemPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/.png")}
      />
      <Image
        style={[styles.compassIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/compass.png")}
      />
      <View style={[styles.component7iconscheckParent, styles.parentPosition]}>
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
          style={[styles.groupChild, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-127501.png")}
        />
        <View style={styles.mastercardWhiteLogoStylParent}>
          <Image
            style={[styles.mastercardWhiteLogoStyl, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/mastercard--white-logo--style-11.png")}
          />
          <Text style={[styles.bank, styles.bankTypo]}>Bank</Text>
        </View>
        <Text style={[styles.bartoloSmith, styles.bankTypo]}>
          Bartolo Smith
        </Text>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo1]}> 9018</Text>
          <Text style={[styles.text2, styles.textTypo1]}>{` 4756 `}</Text>
          <Text style={styles.text3}>02 / 26</Text>
          <Image
            style={[styles.circlesHideIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/circles-hide.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={[styles.groupItem, styles.viewPosition]} />
        <View style={[styles.component6, styles.componentPosition]}>
          <Text style={styles.applecom}>apple.com</Text>
          <View style={styles.component6Child} />
          <Text style={[styles.text4, styles.textTypo]}>-$399.00</Text>
          <Text style={styles.sep261034}>Sep 26. 10:34</Text>
          <LinearGradient
            style={[styles.buttonsiconButtonmedium, styles.buttonsiconFlexBox]}
            locations={[0, 1]}
            colors={["#e83f94", "#f54e5e"]}
          >
            <Image
              style={styles.component7iconsapple}
              resizeMode="cover"
              source={require("../assets/component-7iconsapple.png")}
            />
          </LinearGradient>
        </View>
        <View style={[styles.component61, styles.componentPosition]}>
          <Text style={styles.applecom}>{`Email `}</Text>
          <View style={styles.component6Child} />
          <Text style={[styles.text5, styles.textTypo]}>-$99.00</Text>
          <Text style={styles.sep261034}>Sep 26. 10:34</Text>
          <View
            style={[styles.buttonsiconButtonmedium1, styles.buttonsiconFlexBox]}
          >
            <Image
              style={styles.component7iconsapple}
              resizeMode="cover"
              source={require("../assets/component-7iconsimage.png")}
            />
          </View>
        </View>
        <View style={[styles.component62, styles.componentPosition]}>
          <Text style={styles.applecom}>Transport</Text>
          <View style={styles.component6Child} />
          <Text style={[styles.text6, styles.textTypo]}>-$3.00</Text>
          <Text style={styles.sep261034}>Sep 26. 10:34</Text>
          <View
            style={[styles.buttonsiconButtonmedium1, styles.buttonsiconFlexBox]}
          >
            <Image
              style={styles.component7iconsapple}
              resizeMode="cover"
              source={require("../assets/component-7iconstransport.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.transactions}>{`Transactions `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  payments1Typo: {
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    textAlign: "left",
  },
  paymentsItemPosition: {
    left: "4.35%",
    position: "absolute",
  },
  addPosition: {
    top: "39.62%",
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
  parentPosition: {
    right: "4.59%",
    width: "91.06%",
    left: "4.35%",
    position: "absolute",
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
  bankTypo: {
    color: Color.textLight,
    fontFamily: FontFamily.titleH416,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo1: {
    alignItems: "center",
    display: "flex",
    lineHeight: 20,
    width: "19.87%",
    height: "33.33%",
    color: Color.textLight,
    fontFamily: FontFamily.titleH416,
    fontWeight: "700",
    fontSize: FontSize.titleH416_size,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  componentPosition: {
    left: "5.97%",
    right: "5.97%",
    width: "88.06%",
    height: "21.15%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "center",
    color: Color.secondaryRed,
    top: 14,
    lineHeight: 16,
    letterSpacing: 0.1,
    fontSize: FontSize.bodySmall13_size,
    fontFamily: FontFamily.bodySmall13,
    position: "absolute",
  },
  buttonsiconFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_xs,
    height: 44,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  payments1: {
    top: "6.03%",
    left: "40.58%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  cancelIcon: {
    height: "1.56%",
    width: "3.38%",
    top: "6.62%",
    right: "92.37%",
    bottom: "91.82%",
    left: "4.25%",
    position: "absolute",
  },
  addPaymentMethodChild: {
    opacity: 0.23,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  addPaymentMethod1: {
    left: "10.32%",
    fontSize: FontSize.title_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
  },
  addPaymentMethodItem: {
    height: "20.2%",
    width: "5.66%",
    right: "9.58%",
    bottom: "40.18%",
    left: "84.75%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  addPaymentMethod: {
    height: "11.83%",
    width: "91.3%",
    top: "42.19%",
    right: "4.35%",
    bottom: "45.98%",
  },
  text: {
    fontSize: FontSize.bodyMedium15_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    left: "0%",
    top: "0%",
    position: "absolute",
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
    width: "87.81%",
    top: "1.67%",
    right: "3.99%",
    bottom: "96.21%",
    left: "8.21%",
    position: "absolute",
  },
  view: {
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  paymentsItem: {
    height: "4.69%",
    width: "10.63%",
    top: "92.86%",
    right: "85.02%",
    bottom: "2.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon: {
    height: "3.96%",
    width: "61.47%",
    top: "93.19%",
    right: "6.76%",
    bottom: "2.84%",
    left: "31.76%",
    position: "absolute",
  },
  compassIcon: {
    height: "2.57%",
    width: "5.56%",
    top: "93.86%",
    right: "87.68%",
    bottom: "3.57%",
    left: "6.76%",
    position: "absolute",
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
    right: "-5.04%",
    bottom: "6.65%",
    left: "-4.77%",
    position: "absolute",
  },
  mastercardWhiteLogoStyl: {
    width: "13.8%",
    right: "86.2%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  bank: {
    height: "67.84%",
    width: "23.13%",
    top: "15.96%",
    left: "76.87%",
    textAlign: "right",
    fontSize: FontSize.titleH416_size,
    color: Color.textLight,
    fontFamily: FontFamily.titleH416,
    fontWeight: "700",
  },
  mastercardWhiteLogoStylParent: {
    height: "10.57%",
    width: "87.76%",
    top: "9.7%",
    right: "5.67%",
    bottom: "79.72%",
    left: "6.57%",
    position: "absolute",
  },
  bartoloSmith: {
    height: "10.13%",
    width: "40.3%",
    top: "36.29%",
    fontSize: FontSize.titleH320_size,
    lineHeight: 28,
    left: "6.57%",
    textAlign: "left",
  },
  text1: {
    left: "80.13%",
  },
  text2: {
    left: "0%",
  },
  text3: {
    width: "26.59%",
    top: "66.67%",
    letterSpacing: 0.2,
    fontFamily: FontFamily.bodySmall13,
    alignItems: "center",
    display: "flex",
    height: "33.33%",
    color: Color.textLight,
    fontSize: FontSize.bodyMedium15_size,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  circlesHideIcon: {
    height: "11.02%",
    width: "43.23%",
    top: "10.42%",
    right: "28.38%",
    bottom: "78.57%",
    left: "28.38%",
    position: "absolute",
  },
  parent: {
    height: "20.25%",
    width: "56.13%",
    top: "54.43%",
    right: "37.31%",
    bottom: "25.32%",
    left: "6.57%",
    position: "absolute",
  },
  component7iconscheckParent: {
    height: "30.25%",
    top: "11.38%",
    bottom: "58.37%",
  },
  groupItem: {
    borderRadius: Border.br_base,
    backgroundColor: Color.card,
    shadowColor: "rgba(65, 65, 65, 0.08)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  applecom: {
    top: 1,
    color: Color.textDark,
    left: 60,
    fontFamily: FontFamily.titleH416,
    fontWeight: "700",
    fontSize: FontSize.titleH416_size,
    textAlign: "left",
    position: "absolute",
  },
  component6Child: {
    top: 6,
    right: 0,
    borderRadius: Border.br_37xl,
    backgroundColor: Color.gray6,
    width: 82,
    height: 32,
    position: "absolute",
  },
  text4: {
    right: 17,
  },
  sep261034: {
    top: 24,
    color: Color.textGrey,
    lineHeight: 16,
    letterSpacing: 0.1,
    fontSize: FontSize.bodySmall13_size,
    left: 60,
    fontFamily: FontFamily.bodySmall13,
    textAlign: "left",
    position: "absolute",
  },
  component7iconsapple: {
    width: 20,
    height: 20,
  },
  buttonsiconButtonmedium: {
    backgroundColor: Color.textDark,
  },
  component6: {
    top: "7.69%",
    bottom: "71.15%",
  },
  text5: {
    right: 20,
  },
  buttonsiconButtonmedium1: {
    backgroundColor: Color.textDark,
  },
  component61: {
    top: "38.46%",
    bottom: "40.38%",
  },
  text6: {
    right: 23,
  },
  component62: {
    top: "69.23%",
    bottom: "9.62%",
  },
  rectangleParent: {
    height: "29.8%",
    top: "59.93%",
    bottom: "10.27%",
  },
  transactions: {
    top: "56.92%",
    left: "5.8%",
    opacity: 0.5,
    fontSize: FontSize.bodySmall13_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  payments: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },

  
});

export default Payments;
