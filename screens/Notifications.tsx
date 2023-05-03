import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Notifications = () => {
  return (
    <View style={styles.notifications}>
      <View style={[styles.view, styles.viewPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.turnOnNotifications, styles.notificationsTypo]}>
          Turn on notifications so you never miss anything
        </Text>
        <Text style={[styles.pushNotificationsAre, styles.notificationsTypo]}>
          Push notifications are used to provide updates on your order. You can
          change this
        </Text>
        <View style={[styles.enablePushNotificationsBtn, styles.btnPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Image
            style={[styles.path2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/path-2.png")}
          />
          <Text style={[styles.enablePushNotifications, styles.skipForNowTypo]}>
            Enable push notifications
          </Text>
        </View>
        <View style={[styles.skipForNowBtn, styles.btnPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-22.png")}
          />
          <Text style={[styles.skipForNow, styles.skipForNowTypo]}>
            Skip for now
          </Text>
        </View>
        <Image
          style={[styles.illustrationIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/illustration.png")}
        />
      </View>
      <Image
        style={[styles.notificationsChild, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-33596.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  notificationsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    left: "3.86%",
    color: Color.black,
    position: "absolute",
  },
  btnPosition: {
    right: "3.14%",
    height: "6.7%",
    left: "3.86%",
    width: "93%",
    position: "absolute",
  },
  skipForNowTypo: {
    fontSize: FontSize.size_base,
    top: "33.33%",
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  turnOnNotifications: {
    top: "46.32%",
    fontSize: FontSize.size_9xl,
    width: "93%",
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    left: "3.86%",
  },
  pushNotificationsAre: {
    width: "75.6%",
    top: "56.14%",
    fontSize: FontSize.title_size,
    opacity: 0.5,
  },
  path2Icon: {
    height: "23.54%",
    width: "2.38%",
    top: "38.23%",
    right: "5.12%",
    bottom: "38.23%",
    left: "92.5%",
  },
  enablePushNotifications: {
    left: "23.64%",
    color: Color.textLight,
  },
  enablePushNotificationsBtn: {
    top: "67.75%",
    bottom: "25.56%",
  },
  skipForNow: {
    left: "37.66%",
    color: Color.black,
    top: "33.33%",
  },
  skipForNowBtn: {
    top: "76.12%",
    bottom: "17.19%",
  },
  illustrationIcon: {
    height: "35.71%",
    width: "63.53%",
    top: "3.79%",
    right: "17.87%",
    bottom: "60.49%",
    left: "18.6%",
  },
  view: {
    position: "absolute",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  notificationsChild: {
    height: "22.54%",
    width: "48.79%",
    top: "14.06%",
    right: "25.12%",
    bottom: "63.39%",
    left: "26.09%",
  },
  notifications: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Notifications;
