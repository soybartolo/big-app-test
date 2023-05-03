import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.accept, styles.acceptTypo]}>Accept</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={[styles.groupItem, styles.borderBorder]} />
          <Text style={[styles.reject, styles.acceptFlexBox]}>Reject</Text>
        </View>
      </View>
      <Image
        style={[styles.notificationChild, styles.notificationChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <Image
        style={[styles.notificationItem, styles.notificationChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-62.png")}
      />
      <Image
        style={[styles.notificationInner, styles.notificationChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-63.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.notificationChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-64.png")}
      />
      <Image
        style={[styles.notificationChild1, styles.notificationChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-65.png")}
      />
      <Image
        style={[styles.notificationChild2, styles.notificationChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-66.png")}
      />
      <Image
        style={[styles.notificationChild3, styles.notificationChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-63.png")}
      />
      <Text style={[styles.davidSilbiaInviteContainer, styles.containerTypo1]}>
        <Text style={styles.davidSilbiaInviteContainer1}>
          <Text style={styles.davidSilbia}>David Silbia{` `}</Text>
          <Text
            style={styles.inviteJoMalone}
          >{`Invite Jo Malone London’s Mother’s `}</Text>
        </Text>
      </Text>
      <Text style={[styles.justNow, styles.agoTypo]}>Just now</Text>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.accept, styles.acceptTypo]}>Accept</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={[styles.groupItem, styles.borderBorder]} />
          <Text style={[styles.reject, styles.acceptFlexBox]}>Reject</Text>
        </View>
      </View>
      <Text style={[styles.joanBakerInviteContainer, styles.containerTypo]}>
        <Text style={styles.davidSilbiaInviteContainer1}>
          <Text style={styles.davidSilbia}>Joan Baker</Text>
          <Text style={styles.inviteAVirtualEveningOfSm}>
            <Text style={styles.davidSilbia}>{` `}</Text>
            <Text style={styles.inviteAVirtual}>
              Invite A virtual Evening of Smooth Jazz
            </Text>
          </Text>
        </Text>
      </Text>
      <Text style={[styles.minAgo, styles.agoTypo]}>20 min ago</Text>
      <View style={[styles.groupParent1, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.accept2, styles.acceptTypo]}>Accept</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={[styles.groupItem, styles.borderBorder]} />
          <Text style={[styles.reject, styles.acceptFlexBox]}>Reject</Text>
        </View>
      </View>
      <Text style={[styles.jenniferFritzInviteContainer, styles.containerTypo]}>
        <Text style={styles.davidSilbiaInviteContainer1}>
          <Text style={styles.davidSilbia}>Jennifer Fritz{` `}</Text>
          <Text
            style={styles.inviteJoMalone}
          >{`Invite you International Kids Safe `}</Text>
        </Text>
      </Text>
      <Text style={[styles.tue510, styles.agoTypo]}>Tue , 5:10 pm</Text>
      <View
        style={[styles.adnanSafiStartedFollowingYParent, styles.parentLayout]}
      >
        <Text
          style={[styles.adnanSafiStartedContainer, styles.startedPosition]}
        >
          <Text style={styles.davidSilbiaInviteContainer1}>
            <Text style={styles.davidSilbia}>{`Adnan Safi  `}</Text>
            <Text style={styles.inviteJoMalone}>Started following you</Text>
          </Text>
        </Text>
        <Text style={[styles.minAgo1, styles.minAgo1Position]}>5 min ago</Text>
      </View>
      <Text style={[styles.ronaldCKinchContainer, styles.containerTypo]}>
        <Text style={styles.davidSilbiaInviteContainer1}>
          <Text style={styles.davidSilbia}>Ronald C. Kinch{` `}</Text>
          <Text style={styles.inviteJoMalone}>Like you events</Text>
        </Text>
      </Text>
      <Text style={[styles.hrAgo, styles.agoTypo]}>1 hr ago</Text>
      <Text style={[styles.claraTolsonJoinContainer, styles.containerTypo]}>
        <Text style={styles.davidSilbiaInviteContainer1}>
          <Text style={styles.davidSilbia}>Clara Tolson</Text>
          <Text style={styles.inviteJoMalone}>
            Join your Event Gala Music Festival
          </Text>
        </Text>
      </Text>
      <Text style={[styles.hrAgo1, styles.agoTypo]}>9 hr ago</Text>
      <View style={[styles.groupParent2, styles.parentLayout]}>
        <View
          style={[
            styles.ericGPrickettStartedFolloWrapper,
            styles.startedPosition,
          ]}
        >
          <Text
            style={[styles.adnanSafiStartedContainer, styles.startedPosition]}
          >
            <Text style={styles.davidSilbiaInviteContainer1}>
              <Text style={styles.davidSilbia}>
                Eric G. Prickett
                {` `}
              </Text>
              <Text style={styles.inviteJoMalone}>Started following you</Text>
            </Text>
          </Text>
        </View>
        <Text style={[styles.wed330Pm, styles.minAgo1Position]}>
          Wed, 3:30 pm
        </Text>
      </View>
      <View style={[styles.actionBarTitle, styles.rectangleGroupPosition]}>
        <Text style={[styles.helloAshfak, styles.timeClr]}>Notification</Text>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/back1.png")}
        />
        <View style={[styles.barsStatusBarIphoneLWrapper, styles.barsPosition]}>
          <View style={[styles.barsStatusBarIphoneL, styles.barsPosition]}>
            <View style={[styles.batteryParent, styles.minAgo1Position]}>
              <View style={[styles.battery, styles.batteryPosition]}>
                <View style={[styles.border, styles.borderBorder]} />
                <Image
                  style={[styles.capIcon, styles.batteryPosition]}
                  resizeMode="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={styles.capacity} />
              </View>
              <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../assets/wifi1.png")}
              />
              <Image
                style={styles.cellularConnectionIcon}
                resizeMode="cover"
                source={require("../assets/cellular-connection.png")}
              />
              <View style={[styles.timeStyle, styles.timePosition]}>
                <Text style={[styles.time, styles.timePosition]}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.moreIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/more1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 36,
    width: 214,
    left: 94,
    position: "absolute",
  },
  rectangleLayout: {
    width: 100,
    height: 36,
  },
  groupLayout: {
    borderRadius: Border.br_7xs,
    left: 0,
    width: 100,
    height: 36,
  },
  acceptTypo: {
    width: 51,
    color: Color.textLight,
    left: 24,
    textAlign: "center",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.titleH416_size,
    position: "absolute",
  },
  rectangleGroupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  acceptFlexBox: {
    justifyContent: "center",
    top: 6,
    alignItems: "center",
    display: "flex",
    lineHeight: 23,
  },
  notificationChildLayout: {
    height: 45,
    left: 32,
    width: 48,
    position: "absolute",
  },
  containerTypo1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.titleH416_size,
  },
  agoTypo: {
    textAlign: "right",
    fontSize: FontSize.bodySmall13_size,
    color: Color.colorTypographyParagraph,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.basicRegular,
  },
  containerTypo: {
    width: 190,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.titleH416_size,
    left: 94,
    position: "absolute",
  },
  parentLayout: {
    width: 282,
    height: 46,
    left: 94,
    position: "absolute",
  },
  startedPosition: {
    width: 189,
    left: 0,
    top: 0,
    position: "absolute",
  },
  minAgo1Position: {
    top: 7,
    position: "absolute",
  },
  timeClr: {
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.basicRegular,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "6.25%",
    top: "66.25%",
    width: "5.87%",
    height: "27.5%",
    position: "absolute",
    overflow: "hidden",
  },
  barsPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.crimson_100,
    top: 0,
    position: "absolute",
  },
  accept: {
    justifyContent: "center",
    top: 6,
    alignItems: "center",
    display: "flex",
    lineHeight: 23,
    width: 51,
    color: Color.textLight,
    left: 24,
  },
  rectangleParent: {
    left: 114,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    borderColor: "#eee",
    borderRadius: Border.br_7xs,
    left: 0,
    width: 100,
    height: 36,
  },
  reject: {
    left: 28,
    color: Color.dimgray,
    width: 43,
    textAlign: "center",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.titleH416_size,
    justifyContent: "center",
    top: 6,
    position: "absolute",
  },
  rectangleGroup: {
    width: 100,
    height: 36,
  },
  groupParent: {
    top: 173,
  },
  notificationChild: {
    top: 120,
  },
  notificationItem: {
    top: 226,
  },
  notificationInner: {
    top: 288,
  },
  ellipseIcon: {
    top: 394,
  },
  notificationChild1: {
    top: 456,
  },
  notificationChild2: {
    top: 518,
  },
  notificationChild3: {
    top: 624,
  },
  davidSilbia: {
    color: Color.gray_500,
  },
  inviteJoMalone: {
    color: Color.colorTypographyParagraph,
    lineHeight: 23,
  },
  davidSilbiaInviteContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  davidSilbiaInviteContainer: {
    top: 119,
    width: 203,
    textAlign: "left",
    left: 94,
    display: "flex",
    position: "absolute",
  },
  justNow: {
    top: 126,
    left: 323,
    width: 53,
    position: "absolute",
  },
  groupContainer: {
    top: 341,
  },
  inviteAVirtual: {
    color: Color.colorTypographyParagraph,
  },
  inviteAVirtualEveningOfSm: {
    lineHeight: 23,
  },
  joanBakerInviteContainer: {
    top: 287,
  },
  minAgo: {
    top: 294,
    left: 312,
    width: 64,
    position: "absolute",
  },
  accept2: {
    top: 8,
    lineHeight: 19,
  },
  groupParent1: {
    top: 571,
  },
  jenniferFritzInviteContainer: {
    top: 517,
  },
  tue510: {
    top: 524,
    left: 301,
    width: 75,
    position: "absolute",
  },
  adnanSafiStartedContainer: {
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.titleH416_size,
  },
  minAgo1: {
    left: 225,
    width: 57,
    textAlign: "right",
    fontSize: FontSize.bodySmall13_size,
    color: Color.colorTypographyParagraph,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.basicRegular,
  },
  adnanSafiStartedFollowingYParent: {
    top: 225,
    height: 46,
  },
  ronaldCKinchContainer: {
    top: 405,
  },
  hrAgo: {
    top: 399,
    left: 330,
    width: 46,
    position: "absolute",
  },
  claraTolsonJoinContainer: {
    top: 455,
  },
  hrAgo1: {
    top: 462,
    left: 328,
    width: 48,
    fontSize: FontSize.bodySmall13_size,
    position: "absolute",
  },
  ericGPrickettStartedFolloWrapper: {
    height: 46,
  },
  wed330Pm: {
    left: 202,
    width: 80,
    textAlign: "right",
    fontSize: FontSize.bodySmall13_size,
    color: Color.colorTypographyParagraph,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.basicRegular,
  },
  groupParent2: {
    top: 623,
    height: 46,
  },
  helloAshfak: {
    width: "35.73%",
    top: "61.25%",
    left: "15.2%",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  backIcon: {
    right: "87.73%",
    left: "6.4%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#120d26",
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorTypographyTitle,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 10,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 17,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontSize: FontSize.bodyMedium15_size,
    letterSpacing: 0,
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.basicRegular,
    textAlign: "center",
  },
  timeStyle: {
    height: 21,
    top: 0,
  },
  batteryParent: {
    right: 15,
    width: 378,
    height: 22,
  },
  barsStatusBarIphoneL: {
    height: "100%",
    bottom: "0%",
  },
  barsStatusBarIphoneLWrapper: {
    height: "55%",
    bottom: "45%",
  },
  moreIcon: {
    right: "6.4%",
    left: "87.73%",
  },
  actionBarTitle: {
    width: 414,
    height: 80,
  },
  notification: {
    backgroundColor: Color.textLight,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Notification1;
