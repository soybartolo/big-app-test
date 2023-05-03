import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ProfileSettings = () => {
  return (
    <View style={styles.profileSettings}>
      <View style={[styles.view, styles.childPosition2]}>
        <Image
          style={[styles.vectorIcon, styles.childIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-260.png")}
        />
        <Image
          style={[styles.backIcon, styles.childIconLayout]}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
        <Text style={[styles.bartolo, styles.textTypo]}>Bartolo</Text>
        <Text style={[styles.viewAccount, styles.textTypo]}>View Account</Text>
        <Image
          style={[styles.profileImageIcon, styles.childIconLayout]}
          resizeMode="cover"
          source={require("../assets/profile-image.png")}
        />
        <View style={[styles.viewBasket, styles.childLayout]}>
          <Image
            style={[styles.vectorIcon, styles.childIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Text style={styles.logout}>Logout</Text>
        </View>
        <View style={[styles.payments, styles.helpPosition]}>
          <Image
            style={[styles.paymentsChild, styles.childIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-252.png")}
          />
          <Text style={[styles.payments1, styles.help1Typo]}>Payments</Text>
          <Image
            style={[styles.bankCardFillIcon, styles.childIconLayout]}
            resizeMode="cover"
            source={require("../assets/bankcardfill.png")}
          />
        </View>
        <View style={[styles.promotions, styles.helpPosition]}>
          <Image
            style={[styles.promotionsChild, styles.childIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-254.png")}
          />
          <Text style={[styles.promotions1, styles.help1Typo]}>Promotions</Text>
          <Image
            style={[styles.tagIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/tag.png")}
          />
        </View>
        <View style={[styles.notifications, styles.helpPosition]}>
          <Image
            style={[styles.notificationsChild, styles.childPosition1]}
            resizeMode="cover"
            source={require("../assets/rectangle-255.png")}
          />
          <Text style={[styles.notifications1, styles.help1Typo]}>
            Notifications
          </Text>
          <Image
            style={[styles.hmIconsBell, styles.childIconLayout]}
            resizeMode="cover"
            source={require("../assets/hm-icons-bell.png")}
          />
        </View>
        <View style={[styles.deliverWithFoodly, styles.helpPosition]}>
          <Image
            style={[styles.deliverWithFoodlyChild, styles.childPosition1]}
            resizeMode="cover"
            source={require("../assets/rectangle-256.png")}
          />
          <Text style={[styles.workWithUs, styles.help1Typo]}>
            Work with us
          </Text>
          <Image
            style={[styles.shoppingBagIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/shoppingbag.png")}
          />
        </View>
        <View style={[styles.yourFavorites, styles.helpPosition]}>
          <Text style={[styles.yourFavorites1, styles.help1Typo]}>
            Your Favorites
          </Text>
          <Image
            style={[styles.glyphsTabBarHeartIcon, styles.childIconLayout]}
            resizeMode="cover"
            source={require("../assets/-glyphstabbarheart.png")}
          />
          <Image
            style={[styles.yourFavoritesChild, styles.childPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-251.png")}
          />
        </View>
        <View style={[styles.help, styles.helpPosition]}>
          <Image
            style={[styles.helpChild, styles.childPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-253.png")}
          />
          <Text style={[styles.help1, styles.help1Typo]}>Help</Text>
          <Image
            style={[styles.helpCenterIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/help-center.png")}
          />
        </View>
        <View style={styles.statusBar}>
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
        <Image
          style={[styles.item, styles.childIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-33597.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition2: {
    left: "0%",
    top: "0%",
  },
  childIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  childLayout: {
    height: "6.7%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  helpPosition: {
    left: "9.18%",
    height: "3.01%",
    position: "absolute",
  },
  help1Typo: {
    top: "11.11%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  iconLayout: {
    height: "51.85%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  childPosition1: {
    opacity: 0.21,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  childPosition: {
    opacity: 0.1,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconPosition: {
    bottom: "15.79%",
    top: "21.05%",
    height: "63.16%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  child: {
    width: "86.47%",
    top: "41.52%",
    right: "6.76%",
    bottom: "51.79%",
    left: "6.76%",
    opacity: 0.2,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  backIcon: {
    height: "1.63%",
    width: "4.6%",
    top: "6.57%",
    right: "91.4%",
    bottom: "91.8%",
    left: "4.01%",
    position: "absolute",
  },
  bartolo: {
    top: "10.83%",
    fontSize: FontSize.titleH320_size,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    left: "24.64%",
  },
  viewAccount: {
    top: "13.84%",
    fontSize: FontSize.titleH416_size,
    color: Color.green,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    left: "24.64%",
  },
  profileImageIcon: {
    height: "7.48%",
    width: "16.18%",
    top: "9.71%",
    right: "79.47%",
    bottom: "82.81%",
    left: "4.35%",
    position: "absolute",
  },
  logout: {
    top: "33.33%",
    left: "43.9%",
    color: Color.textLight,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  viewBasket: {
    width: "93%",
    top: "82.81%",
    right: "3.38%",
    bottom: "10.49%",
    left: "3.62%",
  },
  paymentsChild: {
    width: "25.71%",
    right: "74.29%",
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  payments1: {
    left: "35.24%",
  },
  bankCardFillIcon: {
    height: "51.29%",
    width: "16.19%",
    top: "27.74%",
    right: "79.05%",
    left: "4.76%",
    bottom: "20.97%",
    position: "absolute",
  },
  payments: {
    width: "25.36%",
    top: "43.3%",
    right: "65.46%",
    bottom: "53.68%",
  },
  promotionsChild: {
    width: "23.08%",
    right: "76.92%",
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  promotions1: {
    left: "31.62%",
  },
  tagIcon: {
    width: "11.97%",
    top: "27.18%",
    right: "82.05%",
    left: "5.98%",
    bottom: "20.97%",
  },
  promotions: {
    width: "28.26%",
    top: "55.69%",
    right: "62.56%",
    bottom: "41.29%",
  },
  notificationsChild: {
    width: "21.6%",
    right: "78.4%",
  },
  notifications1: {
    left: "29.6%",
  },
  hmIconsBell: {
    height: "55.54%",
    width: "9.28%",
    top: "21.09%",
    right: "84.32%",
    bottom: "23.37%",
    left: "6.4%",
    position: "absolute",
  },
  notifications: {
    width: "30.19%",
    top: "61.94%",
    right: "60.63%",
    bottom: "35.04%",
  },
  deliverWithFoodlyChild: {
    width: "21.09%",
    right: "78.91%",
  },
  workWithUs: {
    left: "28.91%",
  },
  shoppingBagIcon: {
    width: "10.94%",
    top: "26.61%",
    right: "83.59%",
    bottom: "21.53%",
    left: "5.47%",
  },
  deliverWithFoodly: {
    width: "30.92%",
    top: "68.19%",
    right: "59.9%",
    bottom: "28.79%",
  },
  yourFavorites1: {
    left: "27.41%",
  },
  glyphsTabBarHeartIcon: {
    height: "42.27%",
    width: "9.26%",
    top: "29.63%",
    right: "85.56%",
    bottom: "28.1%",
    left: "5.19%",
    position: "absolute",
  },
  yourFavoritesChild: {
    width: "20%",
    right: "80%",
  },
  yourFavorites: {
    width: "32.61%",
    top: "37.05%",
    right: "58.21%",
    bottom: "59.93%",
  },
  helpChild: {
    width: "39.71%",
    right: "60.29%",
  },
  help1: {
    left: "54.41%",
  },
  helpCenterIcon: {
    width: "20.59%",
    top: "25.37%",
    right: "70.59%",
    bottom: "22.78%",
    left: "8.83%",
  },
  help: {
    width: "16.43%",
    top: "49.55%",
    right: "74.4%",
    bottom: "47.43%",
  },
  text: {
    fontSize: FontSize.bodyMedium15_size,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
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
    width: "87.81%",
    top: "1.67%",
    right: "3.99%",
    bottom: "96.21%",
    left: "8.21%",
    position: "absolute",
  },
  item: {
    height: "22.54%",
    width: "48.79%",
    top: "14.84%",
    right: "23.91%",
    bottom: "62.61%",
    left: "27.29%",
    opacity: 0.27,
    position: "absolute",
  },
  view: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  profileSettings: {
    flex: 1,
    height: 896,
    width: "100%",
  },
});

export default ProfileSettings;
