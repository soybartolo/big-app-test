import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Filter = () => {
  return (
    <View style={styles.filter}>
      <Image
        style={styles.image91IconPosition}
        resizeMode="cover"
        source={require("../assets/image-91.png")}
      />
      <View style={[styles.filterChild, styles.image91IconPosition]} />
      <View style={[styles.rectangleParent, styles.rectangleTransform]}>
        <View style={styles.rectangle} />
        <View style={[styles.rectangle1, styles.rectangleTransform]} />
      </View>
      <View style={[styles.selectPriceRangeParent, styles.parentPosition]}>
        <Text style={[styles.selectPriceRange, styles.textPosition]}>
          Select price range
        </Text>
        <Text style={[styles.text, styles.textClr]}>$20-$120</Text>
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          resizeMode="cover"
          source={require("../assets/group-18303.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={styles.rectangleGroup}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.continue, styles.continueTypo]}>Apply</Text>
        </View>
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupItem, styles.groupBorder]} />
          <Text style={[styles.continue1, styles.continueTypo]}>Reset</Text>
        </View>
      </View>
      <Text style={[styles.filter1, styles.textClr]}>Filter</Text>
      <View style={[styles.filterInner, styles.filterInnerLayout]}>
        <View style={[styles.groupContainer, styles.filterInnerLayout]}>
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector-6.png")}
            />
            <Text style={styles.newYourkUsa}>New Yourk, USA</Text>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-18207.png")}
            />
          </View>
          <Text style={[styles.location, styles.textPosition]}>Location</Text>
        </View>
      </View>
      <View style={[styles.timeDateParent, styles.groupParentLayout]}>
        <Text
          style={[styles.timeDate, styles.textPosition]}
        >{`Time & Date`}</Text>
        <View style={[styles.groupParent1, styles.groupParentLayout]}>
          <View style={styles.groupParent2}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangleView, styles.groupChildBorder]} />
              <Text style={[styles.today, styles.todayTypo]}>Today</Text>
            </View>
            <View style={[styles.rectangleParent2, styles.groupChild1Layout]}>
              <View style={[styles.groupChild1, styles.groupChild1Layout]} />
              <Text style={styles.tomorrow}>Tomorrow</Text>
            </View>
            <View style={[styles.rectangleParent3, styles.groupChild2Layout]}>
              <View style={[styles.groupChild2, styles.groupChild2Layout]} />
              <Text style={[styles.thisWeek, styles.todayTypo]}>This week</Text>
            </View>
          </View>
          <View style={[styles.rectangleParent4, styles.groupChild3Layout]}>
            <View style={[styles.groupChild3, styles.groupChild3Layout]} />
            <Text style={[styles.chooseFromCalender, styles.todayTypo]}>
              Choose from calender
            </Text>
            <Image
              style={[styles.calendarIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/calendar.png")}
            />
            <Image
              style={[styles.groupChild4, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector-9.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent5, styles.parentPosition]}>
        <View style={[styles.groupChild5, styles.groupBorder]} />
        <Image
          style={[styles.rectangleIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle1.png")}
        />
        <View
          style={[styles.imGoingToShakeYParent, styles.goingParentPosition]}
        >
          <Text style={[styles.imGoingTo, styles.goingParentPosition]}>
            International Gala Music Festival
          </Text>
          <Image
            style={[styles.groupChild6, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/group-18129.png")}
          />
          <View style={styles.june900PmParent}>
            <Text style={[styles.june900, styles.june900Typo]}>
              10 June • 9:00 PM
            </Text>
            <Text style={[styles.sponsored, styles.june900Typo]}>
              Sponsored
            </Text>
          </View>
          <View style={[styles.minParent, styles.goingParentPosition]}>
            <Text style={styles.min}>{`36 Guild Street London, UK  `}</Text>
            <Image
              style={styles.groupChild7}
              resizeMode="cover"
              source={require("../assets/group-6.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image91IconPosition: {
    height: 890,
    width: 413,
    left: 1,
    top: 0,
    position: "absolute",
  },
  rectangleTransform: {
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    position: "absolute",
  },
  parentPosition: {
    width: 377,
    left: 20,
    position: "absolute",
  },
  textPosition: {
    alignItems: "center",
    display: "flex",
    lineHeight: 34,
    top: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
  },
  groupParentLayout: {
    width: 376,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continueTypo: {
    justifyContent: "center",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: -10,
    top: "50%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.textLight,
  },
  filterInnerLayout: {
    height: 106,
    width: 377,
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    left: 0,
    width: 377,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 11,
    width: 8,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: "#e6e6e6",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.textLight,
  },
  todayTypo: {
    color: Color.gray_100,
    fontSize: FontSize.bodyMedium15_size,
    top: 9,
    lineHeight: 25,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  groupChild1Layout: {
    width: 128,
    height: 42,
    top: 0,
    position: "absolute",
  },
  groupChild2Layout: {
    width: 125,
    height: 42,
    top: 0,
    position: "absolute",
  },
  groupChild3Layout: {
    width: 281,
    height: 42,
    left: 0,
    position: "absolute",
  },
  goingParentPosition: {
    top: "50%",
    position: "absolute",
  },
  june900Typo: {
    lineHeight: 19,
    fontSize: FontSize.size_smi,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  filterChild: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  rectangle: {
    borderTopLeftRadius: Border.br_19xl,
    borderTopRightRadius: Border.br_19xl,
    backgroundColor: Color.textLight,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    position: "absolute",
    width: "100%",
  },
  rectangle1: {
    height: "0.67%",
    width: "6.93%",
    top: "1.58%",
    right: "46.66%",
    bottom: "97.75%",
    left: "46.41%",
    borderRadius: 3,
    backgroundColor: "rgba(178, 178, 178, 0.5)",
  },
  rectangleParent: {
    height: "91.45%",
    width: "99.81%",
    top: "7.96%",
    right: "0.34%",
    bottom: "0.59%",
    left: "-0.16%",
  },
  selectPriceRange: {
    width: 138,
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.basicRegular,
    display: "flex",
    lineHeight: 34,
    fontSize: FontSize.size_base,
    left: 0,
  },
  text: {
    left: 297,
    fontSize: FontSize.title_size,
    textAlign: "right",
    width: 80,
    alignItems: "center",
    display: "flex",
    lineHeight: 34,
    top: 0,
    position: "absolute",
    color: Color.black,
  },
  groupChild: {
    top: 49,
    height: 66,
    left: 0,
  },
  selectPriceRangeParent: {
    top: 433,
    height: 115,
  },
  rectangleIcon: {
    borderRadius: Border.br_sm,
    left: "0%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  continue: {
    width: "24.86%",
    left: "37.84%",
    color: Color.textLight,
    justifyContent: "center",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: -10,
  },
  rectangleGroup: {
    width: "55.39%",
    left: "44.61%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
  },
  groupItem: {
    width: 148,
    height: 59,
    borderColor: "#e5e5e5",
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    borderRadius: Border.br_sm,
    left: 0,
    position: "absolute",
  },
  continue1: {
    width: "34.62%",
    left: "33.08%",
    justifyContent: "center",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: -10,
    color: Color.colorTypographyTitle,
  },
  rectangleContainer: {
    width: 147,
    height: 58,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    height: "6.47%",
    width: "91.06%",
    top: "66.07%",
    right: "4.11%",
    bottom: "27.46%",
    left: "4.83%",
    position: "absolute",
  },
  filter1: {
    top: 100,
    fontSize: 25,
    lineHeight: 33,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  groupInner: {
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.textLight,
    borderColor: "#e5e5e5",
    top: 0,
  },
  vectorIcon: {
    top: 24,
    left: 350,
  },
  newYourkUsa: {
    top: 18,
    left: 80,
    width: 123,
    lineHeight: 25,
    color: Color.black,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupIcon: {
    top: 8,
    left: 9,
    width: 51,
    height: 45,
    position: "absolute",
  },
  groupView: {
    top: 46,
  },
  location: {
    width: 67,
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.basicRegular,
    display: "flex",
    lineHeight: 34,
    fontSize: FontSize.size_base,
    left: 0,
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  filterInner: {
    top: 303,
    left: 20,
  },
  timeDate: {
    width: 98,
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.basicRegular,
    display: "flex",
    lineHeight: 34,
    fontSize: FontSize.size_base,
    left: 0,
  },
  rectangleView: {
    width: 95,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  today: {
    width: 44,
    left: 25,
    color: Color.gray_100,
  },
  rectanglePosition: {
    width: 95,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.crimson_100,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  tomorrow: {
    left: 26,
    width: 77,
    fontSize: FontSize.bodyMedium15_size,
    top: 9,
    lineHeight: 25,
    justifyContent: "center",
    textAlign: "center",
    color: Color.textLight,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  rectangleParent2: {
    left: 109,
  },
  groupChild2: {
    borderColor: "#e6e6e6",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.textLight,
    left: 0,
  },
  thisWeek: {
    width: 75,
    left: 25,
    color: Color.gray_100,
  },
  rectangleParent3: {
    left: 251,
  },
  groupParent2: {
    height: 42,
    width: 376,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild3: {
    borderColor: "#e6e6e6",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.textLight,
    top: 0,
  },
  chooseFromCalender: {
    left: 64,
    width: 165,
  },
  calendarIcon: {
    height: "55.56%",
    width: "8.71%",
    top: "21.43%",
    right: "85.48%",
    bottom: "23.01%",
    left: "5.81%",
  },
  groupChild4: {
    top: 16,
    left: 251,
  },
  rectangleParent4: {
    top: 56,
  },
  groupParent1: {
    height: 98,
    top: 46,
    left: 0,
  },
  timeDateParent: {
    top: 133,
    height: 144,
    left: 20,
  },
  groupChild5: {
    top: -1,
    left: -1,
    borderColor: "#000",
    width: 379,
    height: 131,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  rectangleIcon1: {
    height: "71.32%",
    width: "28.16%",
    top: "21.71%",
    right: "69.41%",
    bottom: "6.98%",
    left: "2.43%",
    borderRadius: Border.br_3xs,
  },
  imGoingTo: {
    marginTop: -3.5,
    width: "65.43%",
    left: "33.89%",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: "50%",
  },
  groupChild6: {
    height: "16.84%",
    width: "5.19%",
    top: "24.21%",
    bottom: "58.95%",
    left: "94.81%",
    right: "0%",
    maxWidth: "100%",
  },
  june900: {
    top: 20,
    left: 120,
    width: 108,
  },
  sponsored: {
    width: 69,
    left: 0,
    top: 0,
  },
  june900PmParent: {
    width: 228,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  min: {
    marginTop: -8.5,
    width: "87.21%",
    left: "12.79%",
    color: "#989aa6",
    fontSize: FontSize.size_smi,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  groupChild7: {
    top: 1,
    width: 18,
    height: 16,
    left: 0,
    position: "absolute",
  },
  minParent: {
    marginTop: 30.5,
    width: "55.44%",
    right: "10.81%",
    left: "33.75%",
    height: 17,
  },
  imGoingToShakeYParent: {
    marginTop: -56.5,
    width: "94.3%",
    right: "3.31%",
    left: "2.39%",
    height: 95,
  },
  rectangleParent5: {
    top: 745,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 129,
  },
  filter: {
    backgroundColor: "#f6f7fb",
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Filter;
