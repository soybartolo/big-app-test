import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ServiceList = () => {
  return (
    <View style={styles.serviceList}>
      <View style={[styles.view, styles.viewGroupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.childIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.restaurentCard, styles.iconPosition1]}>
          <Image
            style={[styles.groupIcon, styles.childIconLayout]}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
          <View style={styles.card}>
            <Image
              style={[styles.dennys814AhwaneeAve, styles.cardChildPosition]}
              resizeMode="cover"
              source={require("../assets/dennys-814-ahwanee-ave.png")}
            />
            <Text style={[styles.ramonitaBeautyStudio, styles.makeupTypo]}>
              Ramonita Beauty Studio
            </Text>
            <Text style={styles.makeupNails}>$ . Makeup . Nails</Text>
            <View style={[styles.milesParent, styles.timeStampPosition]}>
              <View style={[styles.miles, styles.viewGroupPosition]}>
                <Image
                  style={[styles.milesChild, styles.childIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-97.png")}
                />
                <Text style={[styles.mi, styles.minsTypo]}>9.6 mi</Text>
              </View>
              <View style={[styles.time, styles.viewGroupPosition]}>
                <Image
                  style={[styles.milesChild, styles.childIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-971.png")}
                />
                <Text style={[styles.mins, styles.minsTypo]}>10-25 MINS</Text>
              </View>
              <View style={[styles.review, styles.viewGroupPosition]}>
                <View style={[styles.groupParent, styles.viewGroupPosition]}>
                  <Image
                    style={[styles.milesChild, styles.childIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-972.png")}
                  />
                  <Text style={[styles.text, styles.minsTypo]}>4.0 (100)</Text>
                </View>
                <Image
                  style={[styles.starIcon, styles.childIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star.png")}
                />
              </View>
            </View>
            <View
              style={[styles.peopleSayWellPackedParent, styles.peoplePosition]}
            >
              <Text style={[styles.peopleSay, styles.peopleTypo]}>
                People say : well packed
              </Text>
              <Image
                style={[styles.groupItem, styles.childIconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-16.png")}
              />
              <Image
                style={[styles.chatIcon, styles.chatIconPosition]}
                resizeMode="cover"
                source={require("../assets/chat.png")}
              />
            </View>
            <Image
              style={[styles.cardChild, styles.cardChildPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-111.png")}
            />
            <Text style={styles.specialOrder}>Special Order</Text>
            <Image
              style={[styles.path258Icon, styles.childIconLayout]}
              resizeMode="cover"
              source={require("../assets/path-258.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.backIcon, styles.childIconLayout]}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
        <Image
          style={[styles.overlayIcon, styles.childIconLayout]}
          resizeMode="cover"
          source={require("../assets/overlay.png")}
        />
        <Text style={[styles.makeupArtist, styles.makeupTypo]}>
          Makeup Artist
        </Text>
        <Image
          style={[styles.path279Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/path-2791.png")}
        />
        <Text style={[styles.resultsForMakeup, styles.restaurentCard1Position]}>
          80 results for "Makeup Artist"
        </Text>
        <View style={[styles.viewBasket, styles.viewBasketPosition]}>
          <Image
            style={[styles.viewBasketChild, styles.childIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-21.png")}
          />
          <Text style={[styles.viewBasket1, styles.us19079Typo]}>
            View Basket
          </Text>
          <Text style={[styles.us19079, styles.us19079Typo]}>US$190.79</Text>
        </View>
        <Image
          style={[styles.closeOIcon, styles.viewBasketPosition]}
          resizeMode="cover"
          source={require("../assets/closeo.png")}
        />
        <View style={[styles.restaurentCard1, styles.restaurentCard1Position]}>
          <Image
            style={[styles.dennys814AhwaneeAve, styles.cardChildPosition]}
            resizeMode="cover"
            source={require("../assets/carls-jr-1001-veterans-blvd.png")}
          />
          <Text
            style={[styles.ramonitaBeautyStudio, styles.makeupTypo]}
          >{`Juanita’s Beauty `}</Text>
          <Text style={styles.makeupNails}>$$ . Makeup . Hair . Eyelashes</Text>
          <View style={[styles.timeStamp, styles.timeStampPosition]}>
            <View style={[styles.miles1, styles.viewGroupPosition]}>
              <Image
                style={[styles.milesChild, styles.childIconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-973.png")}
              />
              <Text style={[styles.mi1, styles.minsTypo]}>3.4 mi</Text>
            </View>
            <View style={[styles.time1, styles.viewGroupPosition]}>
              <Image
                style={[styles.milesChild, styles.childIconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-974.png")}
              />
              <Text style={[styles.mins1, styles.minsTypo]}>5-15 MINS</Text>
            </View>
            <View style={[styles.review1, styles.viewGroupPosition]}>
              <View style={[styles.groupParent, styles.viewGroupPosition]}>
                <Image
                  style={[styles.milesChild, styles.childIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-972.png")}
                />
                <Text style={[styles.text, styles.minsTypo]}>4.0 (100)</Text>
              </View>
              <Image
                style={[styles.starIcon, styles.childIconLayout]}
                resizeMode="cover"
                source={require("../assets/star.png")}
              />
            </View>
          </View>
          <View style={[styles.peopleSay1, styles.peoplePosition]}>
            <Text style={[styles.peopleSay2, styles.peopleTypo]}>
              People say : very professional (15)
            </Text>
            <Image
              style={[styles.peopleSayChild, styles.childIconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-161.png")}
            />
            <Image
              style={[styles.chatIcon1, styles.chatIconPosition]}
              resizeMode="cover"
              source={require("../assets/chat.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.child, styles.sortPosition]}
          resizeMode="cover"
          source={require("../assets/group-41.png")}
        />
        <View style={[styles.pickups, styles.sortPosition]}>
          <Image
            style={[styles.groupIcon1, styles.groupIconPosition1]}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Text style={[styles.category, styles.sort1Typo]}>Category</Text>
        </View>
        <View style={[styles.topEats, styles.topEatsPosition]}>
          <Image
            style={[styles.groupIcon2, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group4.png")}
          />
          <Text style={[styles.topRating, styles.sort1Typo]}>Top Rating</Text>
        </View>
        <View style={[styles.priceRange, styles.topEatsPosition]}>
          <Image
            style={[styles.groupIcon3, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group4.png")}
          />
          <Text style={[styles.topRating, styles.sort1Typo]}>Price Range</Text>
        </View>
        <View style={[styles.sort, styles.sortPosition]}>
          <Image
            style={[styles.groupIcon4, styles.groupIconPosition1]}
            resizeMode="cover"
            source={require("../assets/group5.png")}
          />
          <Text style={[styles.sort1, styles.sort1Typo]}>Sort</Text>
          <Image
            style={[styles.path120Icon, styles.childIconLayout]}
            resizeMode="cover"
            source={require("../assets/path-120.png")}
          />
        </View>
        <View style={styles.statusBar}>
          <Text style={[styles.text2, styles.makeupTypo]}>8:09</Text>
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
        style={[styles.menuBarIcon, styles.childIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-bar3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewGroupPosition: {
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  childIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition1: {
    right: "0.96%",
    position: "absolute",
  },
  cardChildPosition: {
    bottom: "51.97%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  makeupTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
  },
  timeStampPosition: {
    bottom: "13.62%",
    top: "72.04%",
    height: "14.34%",
    left: "0%",
    position: "absolute",
  },
  minsTypo: {
    top: "27.5%",
    fontSize: FontSize.titleH416_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  peoplePosition: {
    top: "90.32%",
    height: "9.68%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  peopleTypo: {
    top: "18.52%",
    opacity: 0.5,
    fontSize: FontSize.titleH416_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  chatIconPosition: {
    bottom: "25.46%",
    top: "25.93%",
    height: "48.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    opacity: 0.1,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  restaurentCard1Position: {
    left: "4.31%",
    position: "absolute",
  },
  viewBasketPosition: {
    right: "4.31%",
    position: "absolute",
  },
  us19079Typo: {
    top: "33.33%",
    color: Color.textLight,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  sortPosition: {
    bottom: "85.71%",
    top: "10.49%",
    height: "3.79%",
    position: "absolute",
  },
  groupIconPosition1: {
    bottom: "-23.53%",
    top: "-5.88%",
    height: "129.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sort1Typo: {
    top: "26.47%",
    fontSize: FontSize.bodySmall13_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  topEatsPosition: {
    width: "20.1%",
    bottom: "85.71%",
    top: "10.49%",
    height: "3.79%",
    position: "absolute",
  },
  groupIconPosition: {
    left: "-5.95%",
    bottom: "-23.53%",
    top: "-5.88%",
    height: "129.41%",
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
  vectorIcon: {
    right: "0.96%",
    position: "absolute",
    width: "99.04%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupIcon: {
    height: "132.57%",
    top: "-15.31%",
    bottom: "-17.26%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  dennys814AhwaneeAve: {
    height: "48.03%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  ramonitaBeautyStudio: {
    top: "51.97%",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
    left: "0%",
  },
  makeupNails: {
    top: "61.65%",
    opacity: 0.5,
    fontSize: FontSize.titleH416_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    left: "0%",
    position: "absolute",
  },
  milesChild: {
    opacity: 0.3,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  mi: {
    left: "22.54%",
  },
  miles: {
    width: "23.13%",
    right: "76.87%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  mins: {
    left: "14.68%",
  },
  time: {
    width: "35.5%",
    left: "64.5%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  text: {
    left: "15.53%",
  },
  groupParent: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  starIcon: {
    height: "21.38%",
    width: "8.75%",
    top: "40%",
    right: "52.42%",
    bottom: "38.62%",
    left: "38.83%",
    position: "absolute",
  },
  review: {
    width: "33.55%",
    right: "39.41%",
    left: "27.04%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  milesParent: {
    width: "80.79%",
    right: "19.21%",
  },
  peopleSay: {
    left: "18.99%",
  },
  groupItem: {
    width: "15.08%",
    right: "84.92%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  chatIcon: {
    width: "7.34%",
    right: "88.82%",
    left: "3.84%",
  },
  peopleSayWellPackedParent: {
    width: "47.11%",
    right: "52.89%",
  },
  cardChild: {
    height: "11.83%",
    width: "34.21%",
    top: "36.2%",
    left: "65.79%",
  },
  specialOrder: {
    top: "39.43%",
    left: "74.47%",
    color: Color.textLight,
    fontSize: FontSize.bodySmall13_size,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  path258Icon: {
    height: "7.37%",
    width: "7.21%",
    top: "29.94%",
    bottom: "62.7%",
    left: "92.79%",
    right: "0%",
    position: "absolute",
  },
  card: {
    height: "90.88%",
    width: "91.79%",
    top: "4.56%",
    right: "3.86%",
    bottom: "4.56%",
    left: "4.35%",
    position: "absolute",
  },
  restaurentCard: {
    height: "34.26%",
    top: "57.7%",
    bottom: "8.04%",
    width: "99.04%",
    right: "0.96%",
    left: "0%",
  },
  backIcon: {
    height: "1.63%",
    width: "4.55%",
    top: "6.57%",
    right: "91.48%",
    bottom: "91.8%",
    left: "3.97%",
    position: "absolute",
  },
  overlayIcon: {
    height: "20.54%",
    width: "98.8%",
    top: "79.46%",
    left: "0.24%",
    right: "0.96%",
    position: "absolute",
    bottom: "0%",
  },
  makeupArtist: {
    top: "6.25%",
    left: "11.24%",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  path279Icon: {
    height: "0.11%",
    width: "98.75%",
    top: "16.8%",
    right: "1.25%",
    bottom: "83.09%",
    left: "0%",
    position: "absolute",
  },
  resultsForMakeup: {
    top: "20.09%",
    fontSize: FontSize.titleH320_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
  },
  viewBasketChild: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  viewBasket1: {
    left: "37.66%",
  },
  us19079: {
    left: "77.4%",
  },
  viewBasket: {
    height: "6.7%",
    width: "92.11%",
    top: "82.81%",
    bottom: "10.49%",
    left: "3.59%",
  },
  closeOIcon: {
    height: "1.79%",
    width: "3.83%",
    top: "6.47%",
    bottom: "91.74%",
    left: "91.87%",
    opacity: 0.1,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mi1: {
    left: "22.22%",
  },
  miles1: {
    width: "24.08%",
    right: "75.92%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  mins1: {
    left: "15.84%",
  },
  time1: {
    width: "33.78%",
    left: "66.22%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  review1: {
    width: "34.45%",
    right: "37.79%",
    left: "27.76%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  timeStamp: {
    width: "78.68%",
    right: "21.32%",
  },
  peopleSay2: {
    left: "14.41%",
  },
  peopleSayChild: {
    width: "11.44%",
    right: "88.56%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  chatIcon1: {
    width: "5.57%",
    right: "91.52%",
    left: "2.91%",
  },
  peopleSay1: {
    width: "62.11%",
    right: "37.89%",
  },
  restaurentCard1: {
    height: "31.14%",
    width: "90.91%",
    top: "25.33%",
    right: "4.78%",
    bottom: "43.53%",
  },
  child: {
    width: "8.13%",
    right: "88.04%",
    left: "3.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon1: {
    width: "113.16%",
    right: "-6.58%",
    left: "-6.58%",
  },
  category: {
    left: "17.11%",
  },
  pickups: {
    width: "18.18%",
    right: "67.7%",
    left: "14.11%",
  },
  groupIcon2: {
    width: "111.9%",
    right: "-5.95%",
  },
  topRating: {
    left: "20.24%",
  },
  topEats: {
    right: "23.92%",
    left: "55.98%",
  },
  groupIcon3: {
    width: "101.19%",
    right: "4.76%",
  },
  priceRange: {
    left: "79.9%",
    right: "0%",
  },
  groupIcon4: {
    width: "114.49%",
    right: "-7.25%",
    left: "-7.25%",
  },
  sort1: {
    left: "21.74%",
  },
  path120Icon: {
    height: "20.04%",
    width: "15.66%",
    top: "41.49%",
    right: "14.37%",
    bottom: "38.47%",
    left: "69.97%",
    position: "absolute",
  },
  sort: {
    width: "16.51%",
    right: "47.61%",
    left: "35.89%",
  },
  text2: {
    fontSize: FontSize.bodyMedium15_size,
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
    width: "86.97%",
    top: "1.67%",
    right: "4.9%",
    bottom: "96.21%",
    left: "8.13%",
    position: "absolute",
  },
  view: {
    width: "100.97%",
    right: "-0.97%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  menuBarIcon: {
    height: "7.92%",
    width: "100.72%",
    top: "91.96%",
    right: "-0.72%",
    bottom: "0.11%",
    left: "0%",
    position: "absolute",
  },
  serviceList: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default ServiceList;
