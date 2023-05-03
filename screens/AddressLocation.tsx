import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const AddressLocation = () => {
  return (
    <View style={styles.addressLocation}>
      <View style={[styles.view, styles.viewPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.address, styles.addressPosition]}>
          <Image
            style={[styles.addressChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-65.png")}
          />
          <View
            style={[
              styles.univercityRoadParent,
              styles.univercityParentPosition,
            ]}
          >
            <Text style={[styles.univercityRoad, styles.textTypo]}>
              1226 Univercity Road
            </Text>
            <Text style={[styles.hollywoodFl, styles.textTypo]}>
              Hollywood, FL
            </Text>
          </View>
        </View>
        <View style={[styles.address1, styles.addressPosition]}>
          <Image
            style={[styles.addressChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-65.png")}
          />
          <View
            style={[
              styles.univercityWalkParent,
              styles.univercityParentPosition,
            ]}
          >
            <Text style={[styles.univercityRoad, styles.textTypo]}>
              1226 Univercity Walk
            </Text>
            <Text style={[styles.hollywoodFl, styles.textTypo]}>Davie, FL</Text>
          </View>
        </View>
        <View style={[styles.address2, styles.addressPosition]}>
          <Image
            style={[styles.addressChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-65.png")}
          />
          <View
            style={[
              styles.univercityDriveParent,
              styles.univercityParentPosition,
            ]}
          >
            <Text style={[styles.univercityRoad, styles.textTypo]}>
              1226 Univercity Drive
            </Text>
            <Text style={[styles.hollywoodFl, styles.textTypo]}>
              Menlo Park, CA, USA
            </Text>
          </View>
        </View>
        <Image
          style={styles.path19Icon}
          resizeMode="cover"
          source={require("../assets/path-19.png")}
        />
        <Image
          style={[styles.path20Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/path-20.png")}
        />
        <Image
          style={[styles.path22Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/path-20.png")}
        />
        <Image
          style={[styles.path23Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/path-20.png")}
        />
        <View style={styles.iphoneXKeyboardsDefault}>
          <Image
            style={[styles.shiftIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/shift.png")}
          />
          <Image
            style={[styles.emojiGlyphIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/emoji-glyph.png")}
          />
          <Image
            style={[styles.dictationGlyphIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/dictation-glyph.png")}
          />
          <Image
            style={[styles.deleteIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/delete.png")}
          />
          <View style={[styles.thirdRow, styles.rowLayout]}>
            <Image
              style={[styles.backgroundIcon, styles.backgroundIconLayout2]}
              resizeMode="cover"
              source={require("../assets/background1.png")}
            />
            <Image
              style={[styles.backgroundIcon1, styles.backgroundIconLayout2]}
              resizeMode="cover"
              source={require("../assets/background2.png")}
            />
            <Image
              style={[styles.backgroundIcon2, styles.backgroundIconLayout2]}
              resizeMode="cover"
              source={require("../assets/background3.png")}
            />
            <Image
              style={[styles.backgroundIcon3, styles.backgroundIconLayout2]}
              resizeMode="cover"
              source={require("../assets/background4.png")}
            />
            <Image
              style={[styles.backgroundIcon4, styles.backgroundIconLayout2]}
              resizeMode="cover"
              source={require("../assets/background5.png")}
            />
            <Image
              style={[styles.backgroundIcon5, styles.backgroundIconLayout2]}
              resizeMode="cover"
              source={require("../assets/background6.png")}
            />
            <Image
              style={[styles.backgroundIcon6, styles.backgroundIconLayout2]}
              resizeMode="cover"
              source={require("../assets/background7.png")}
            />
            <Text style={[styles.m, styles.mTypo]}>M</Text>
            <Text style={[styles.n, styles.mTypo]}>N</Text>
            <Text style={[styles.b, styles.mTypo]}>B</Text>
            <Text style={[styles.v, styles.mTypo]}>V</Text>
            <Text style={[styles.c, styles.mTypo]}>C</Text>
            <Text style={[styles.x, styles.mTypo]}>X</Text>
            <Text style={[styles.z, styles.mTypo]}>Z</Text>
          </View>
          <View style={[styles.secondRow, styles.rowLayout]}>
            <Image
              style={[styles.backgroundIcon7, styles.backgroundIconLayout1]}
              resizeMode="cover"
              source={require("../assets/background8.png")}
            />
            <Image
              style={[styles.backgroundIcon8, styles.backgroundIconLayout1]}
              resizeMode="cover"
              source={require("../assets/background9.png")}
            />
            <Image
              style={[styles.backgroundIcon9, styles.backgroundIconLayout1]}
              resizeMode="cover"
              source={require("../assets/background10.png")}
            />
            <Image
              style={[styles.backgroundIcon10, styles.backgroundIconLayout1]}
              resizeMode="cover"
              source={require("../assets/background11.png")}
            />
            <Image
              style={[styles.backgroundIcon11, styles.backgroundIconLayout1]}
              resizeMode="cover"
              source={require("../assets/background12.png")}
            />
            <Image
              style={[styles.backgroundIcon12, styles.backgroundIconLayout1]}
              resizeMode="cover"
              source={require("../assets/background13.png")}
            />
            <Image
              style={[styles.backgroundIcon13, styles.backgroundIconLayout1]}
              resizeMode="cover"
              source={require("../assets/background14.png")}
            />
            <Image
              style={[styles.backgroundIcon14, styles.backgroundIconLayout1]}
              resizeMode="cover"
              source={require("../assets/background15.png")}
            />
            <Image
              style={[styles.backgroundIcon15, styles.backgroundIconLayout1]}
              resizeMode="cover"
              source={require("../assets/background16.png")}
            />
            <Text style={[styles.l, styles.lTypo]}>L</Text>
            <Text style={[styles.k, styles.lTypo]}>K</Text>
            <Text style={[styles.j, styles.lTypo]}>J</Text>
            <Text style={[styles.h, styles.lTypo]}>H</Text>
            <Text style={[styles.g, styles.lTypo]}>G</Text>
            <Text style={[styles.f, styles.lTypo]}>F</Text>
            <Text style={[styles.d, styles.lTypo]}>D</Text>
            <Text style={[styles.s, styles.lTypo]}>S</Text>
            <Text style={[styles.a, styles.lTypo]}>A</Text>
          </View>
          <View style={[styles.firstRow, styles.rowLayout]}>
            <Image
              style={[styles.backgroundIcon16, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background17.png")}
            />
            <Image
              style={[styles.backgroundIcon17, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background18.png")}
            />
            <Image
              style={[styles.backgroundIcon18, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background19.png")}
            />
            <Image
              style={[styles.backgroundIcon19, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background20.png")}
            />
            <Image
              style={[styles.backgroundIcon20, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background21.png")}
            />
            <Image
              style={[styles.backgroundIcon21, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background22.png")}
            />
            <Image
              style={[styles.backgroundIcon22, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background23.png")}
            />
            <Image
              style={[styles.backgroundIcon23, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background24.png")}
            />
            <Image
              style={[styles.backgroundIcon24, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background25.png")}
            />
            <Image
              style={[styles.backgroundIcon25, styles.backgroundIconLayout]}
              resizeMode="cover"
              source={require("../assets/background26.png")}
            />
            <Text style={[styles.p, styles.pTypo]}>P</Text>
            <Text style={[styles.o, styles.pTypo]}>O</Text>
            <Text style={[styles.i, styles.pTypo]}>I</Text>
            <Text style={[styles.u, styles.pTypo]}>U</Text>
            <Text style={[styles.y, styles.pTypo]}>Y</Text>
            <Text style={[styles.t, styles.pTypo]}>T</Text>
            <Text style={[styles.r, styles.pTypo]}>R</Text>
            <Text style={[styles.e, styles.pTypo]}>E</Text>
            <Text style={[styles.w, styles.pTypo]}>W</Text>
            <Text style={[styles.q, styles.pTypo]}>Q</Text>
          </View>
          <View style={[styles.keys, styles.keysPosition]}>
            <View style={[styles.symbols, styles.viewPosition]}>
              <Image
                style={[styles.addressChild, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/background27.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>123</Text>
            </View>
            <View style={[styles.space, styles.viewPosition]}>
              <Image
                style={[styles.addressChild, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/background28.png")}
              />
              <Text style={[styles.space1, styles.textTypo]}>space</Text>
            </View>
            <View style={[styles.button, styles.viewPosition]}>
              <Image
                style={[styles.groupIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/group8.png")}
              />
              <Text style={[styles.label, styles.textTypo]}>Label</Text>
            </View>
          </View>
        </View>
        <View style={[styles.tag, styles.tagPosition]}>
          <Image
            style={[styles.addressChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-66.png")}
          />
          <Text style={[styles.drive, styles.driveTypo]}>Drive</Text>
        </View>
        <View style={[styles.tag1, styles.tagPosition]}>
          <Image
            style={[styles.addressChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-661.png")}
          />
          <Text style={[styles.drives, styles.driveTypo]}>Drives</Text>
        </View>
        <View style={[styles.tag2, styles.tagPosition]}>
          <Image
            style={[styles.addressChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-662.png")}
          />
          <Text style={[styles.drivers, styles.driveTypo]}>Drivers</Text>
        </View>
        <Image
          style={[styles.searchIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/search2.png")}
        />
        <Text style={[styles.searchFor1226, styles.textTypo]}>
          Search for '1226 university drive
        </Text>
        <View style={styles.addressSearch}>
          <Image
            style={[styles.addressChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-63.png")}
          />
          <Text style={[styles.universityDrive, styles.textTypo]}>
            <Text style={styles.universityDrive1}>1226 university drive</Text>
            <Text style={styles.text1}>|</Text>
          </Text>
          <Image
            style={[styles.searchIcon1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/search.png")}
          />
          <Image
            style={[styles.closeOIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/closeo2.png")}
          />
        </View>
      </View>
      <Image
        style={styles.locationIcon}
        resizeMode="cover"
        source={require("../assets/location.png")}
      />
      <Image
        style={[styles.locationIcon1, styles.locationIconLayout]}
        resizeMode="cover"
        source={require("../assets/location1.png")}
      />
      <Image
        style={[styles.locationIcon2, styles.locationIconLayout]}
        resizeMode="cover"
        source={require("../assets/location1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addressPosition: {
    height: "7.59%",
    right: "0.63%",
    width: "99.37%",
    left: "0%",
    position: "absolute",
  },
  univercityParentPosition: {
    left: "17.63%",
    bottom: "17.65%",
    top: "25%",
    height: "57.35%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  iconLayout: {
    width: "95.53%",
    left: "3.84%",
    opacity: 0.1,
    height: "0.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0.63%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    bottom: "42.05%",
    top: "41.82%",
    height: "16.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rowLayout: {
    height: "16.26%",
    position: "absolute",
  },
  backgroundIconLayout2: {
    width: "12.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mTypo: {
    fontSize: FontSize.size_4xl,
    top: "15.12%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  backgroundIconLayout1: {
    width: "9.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lTypo: {
    color: Color.gray_400,
    fontSize: FontSize.size_4xl,
    top: "15.12%",
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  backgroundIconLayout: {
    width: "8.68%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pTypo: {
    top: "14.53%",
    color: Color.gray_400,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  keysPosition: {
    width: "100%",
    right: "0%",
    left: "0%",
  },
  tagPosition: {
    bottom: "37.28%",
    top: "58.48%",
    height: "4.24%",
    position: "absolute",
  },
  driveTypo: {
    top: "23.68%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconPosition: {
    bottom: "32.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  locationIconLayout: {
    left: "6.16%",
    right: "89.89%",
    width: "3.95%",
    height: "2.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    right: "0.63%",
    width: "99.37%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  addressChild: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  univercityRoad: {
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.basicRegular,
    left: "0%",
    top: "0%",
  },
  hollywoodFl: {
    top: "53.85%",
    fontSize: FontSize.titleH416_size,
    opacity: 0.5,
    color: Color.black,
    left: "0%",
  },
  univercityRoadParent: {
    width: "34.06%",
    right: "48.31%",
  },
  address: {
    top: "16.29%",
    bottom: "76.12%",
  },
  univercityWalkParent: {
    width: "33.82%",
    right: "48.55%",
  },
  address1: {
    bottom: "68.53%",
    top: "23.88%",
  },
  univercityDriveParent: {
    width: "34.54%",
    right: "47.83%",
  },
  address2: {
    bottom: "60.94%",
    top: "31.47%",
  },
  path19Icon: {
    top: "16.41%",
    bottom: "83.48%",
    opacity: 0.1,
    height: "0.11%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  path20Icon: {
    bottom: "76%",
    left: "3.84%",
    top: "23.88%",
  },
  path22Icon: {
    bottom: "68.42%",
    left: "3.84%",
    top: "31.47%",
  },
  path23Icon: {
    top: "39.06%",
    bottom: "60.83%",
    left: "3.84%",
  },
  shiftIcon: {
    width: "11.03%",
    right: "88.97%",
    left: "0%",
  },
  emojiGlyphIcon: {
    height: "10.51%",
    width: "7.35%",
    top: "89.49%",
    right: "86.52%",
    left: "6.13%",
    bottom: "0%",
  },
  dictationGlyphIcon: {
    height: "9.81%",
    width: "4.17%",
    top: "89.84%",
    right: "7.36%",
    bottom: "0.35%",
    left: "88.48%",
  },
  deleteIcon: {
    width: "11.28%",
    left: "88.72%",
    right: "0%",
  },
  backgroundIcon: {
    left: "87.54%",
    right: "0%",
  },
  backgroundIcon1: {
    right: "14.4%",
    left: "73.15%",
  },
  backgroundIcon2: {
    right: "29.18%",
    left: "58.36%",
  },
  backgroundIcon3: {
    right: "43.58%",
    left: "43.96%",
  },
  backgroundIcon4: {
    right: "58.36%",
    left: "29.18%",
  },
  backgroundIcon5: {
    right: "72.76%",
    left: "14.78%",
  },
  backgroundIcon6: {
    right: "87.54%",
    left: "0%",
  },
  m: {
    left: "90.42%",
  },
  n: {
    left: "76.55%",
  },
  b: {
    left: "62.15%",
  },
  v: {
    left: "47.67%",
  },
  c: {
    left: "32.64%",
  },
  x: {
    left: "18.45%",
  },
  z: {
    left: "3.74%",
  },
  thirdRow: {
    width: "69.82%",
    top: "41.79%",
    right: "14.95%",
    bottom: "41.96%",
    left: "15.23%",
  },
  backgroundIcon7: {
    left: "90.38%",
    right: "0%",
  },
  backgroundIcon8: {
    right: "11.41%",
    left: "78.97%",
  },
  backgroundIcon9: {
    right: "22.52%",
    left: "67.86%",
  },
  backgroundIcon10: {
    right: "33.93%",
    left: "56.45%",
  },
  backgroundIcon11: {
    right: "45.04%",
    left: "45.34%",
  },
  backgroundIcon12: {
    right: "56.45%",
    left: "33.93%",
  },
  backgroundIcon13: {
    right: "67.86%",
    left: "22.52%",
  },
  backgroundIcon14: {
    right: "78.97%",
    left: "11.41%",
  },
  backgroundIcon15: {
    right: "90.38%",
    left: "0%",
  },
  l: {
    left: "93.55%",
  },
  k: {
    left: "81.86%",
  },
  j: {
    left: "71.12%",
  },
  h: {
    left: "59.07%",
  },
  g: {
    left: "47.94%",
  },
  f: {
    left: "37.09%",
  },
  d: {
    left: "25.21%",
  },
  s: {
    left: "14.36%",
  },
  a: {
    left: "2.83%",
  },
  secondRow: {
    width: "90.07%",
    top: "20.89%",
    right: "4.98%",
    bottom: "62.85%",
    left: "4.94%",
  },
  backgroundIcon16: {
    left: "91.32%",
    right: "0%",
  },
  backgroundIcon17: {
    right: "10.03%",
    left: "81.29%",
  },
  backgroundIcon18: {
    right: "20.32%",
    left: "71%",
  },
  backgroundIcon19: {
    right: "30.35%",
    left: "60.97%",
  },
  backgroundIcon20: {
    right: "40.65%",
    left: "50.67%",
  },
  backgroundIcon21: {
    right: "50.67%",
    left: "40.65%",
  },
  backgroundIcon22: {
    right: "60.97%",
    left: "30.35%",
  },
  backgroundIcon23: {
    right: "71%",
    left: "20.32%",
  },
  backgroundIcon24: {
    right: "81.29%",
    left: "10.03%",
  },
  backgroundIcon25: {
    right: "91.32%",
    left: "0%",
  },
  p: {
    left: "94.03%",
  },
  o: {
    left: "83.57%",
  },
  i: {
    left: "74.7%",
  },
  u: {
    left: "63.34%",
  },
  y: {
    left: "53.28%",
  },
  t: {
    left: "43.34%",
  },
  r: {
    left: "33%",
  },
  e: {
    left: "23.1%",
  },
  w: {
    left: "11.76%",
  },
  q: {
    left: "2.27%",
  },
  firstRow: {
    width: "99.76%",
    right: "0.16%",
    bottom: "83.74%",
    left: "0.07%",
    top: "0%",
  },
  text: {
    top: "27.66%",
    left: "35.82%",
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.basicRegular,
  },
  symbols: {
    width: "23.77%",
    right: "76.23%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  space1: {
    top: "24.37%",
    left: "39.25%",
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.basicRegular,
  },
  space: {
    width: "49.75%",
    right: "25%",
    left: "25.25%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIcon: {
    height: "102.13%",
    bottom: "-2.13%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  label: {
    top: "23.4%",
    left: "28.84%",
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.basicRegular,
  },
  button: {
    width: "23.53%",
    left: "76.47%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  keys: {
    height: "16.47%",
    top: "61.8%",
    bottom: "21.73%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  iphoneXKeyboardsDefault: {
    height: "31.85%",
    width: "97.93%",
    top: "65.48%",
    right: "1.35%",
    bottom: "2.68%",
    left: "0.72%",
    position: "absolute",
  },
  drive: {
    left: "27.91%",
  },
  tag: {
    width: "20.64%",
    right: "75.52%",
    left: "3.84%",
  },
  drives: {
    left: "25.53%",
  },
  tag1: {
    width: "22.56%",
    right: "48.4%",
    left: "29.04%",
  },
  drivers: {
    left: "24%",
  },
  tag2: {
    width: "24%",
    right: "19.83%",
    left: "56.17%",
  },
  searchIcon: {
    height: "3.46%",
    width: "7.44%",
    top: "40.74%",
    right: "88.72%",
    bottom: "55.8%",
    left: "3.84%",
  },
  searchFor1226: {
    top: "41.29%",
    left: "17.52%",
    color: Color.green,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.basicRegular,
  },
  universityDrive1: {
    color: Color.black,
  },
  text1: {
    color: Color.gainsboro_100,
  },
  universityDrive: {
    top: "32.79%",
    left: "14.92%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.basicRegular,
  },
  searchIcon1: {
    height: "32.79%",
    width: "5.24%",
    top: "34.43%",
    right: "90.05%",
    left: "4.71%",
  },
  closeOIcon: {
    height: "36.07%",
    width: "5.76%",
    top: "31.15%",
    right: "3.14%",
    left: "91.1%",
  },
  addressSearch: {
    height: "6.81%",
    width: "91.69%",
    top: "6.47%",
    right: "4.47%",
    bottom: "86.72%",
    left: "3.84%",
    position: "absolute",
  },
  view: {
    width: "100.64%",
    right: "-0.64%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  locationIcon: {
    top: "18.81%",
    right: "90.13%",
    bottom: "79.04%",
    left: "5.92%",
    width: "3.95%",
    height: "2.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  locationIcon1: {
    top: "26.4%",
    bottom: "71.45%",
  },
  locationIcon2: {
    top: "34.21%",
    bottom: "63.64%",
  },
  addressLocation: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddressLocation;
