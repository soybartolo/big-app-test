import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const ServicePage = () => {
  return (
    <View style={styles.servicePage}>
      <View style={styles.view}>
        <Image
          style={[styles.shulgaTashCave, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/shulgatash-cave.png")}
        />
        <View style={styles.card1Parent}>
          <View style={styles.cardSpaceBlock}>
            <View style={[styles.price, styles.priceLayout]}>
              <View style={[styles.priceChild, styles.childPosition]} />
              <Image
                style={[styles.groupIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
            </View>
            <Text style={[styles.from90, styles.from90Typo]}>from 90 $</Text>
          </View>
          <View style={[styles.card2, styles.cardSpaceBlock]}>
            <View style={[styles.price, styles.priceLayout]}>
              <View style={[styles.priceChild, styles.childPosition]} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition1]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
            <Text style={[styles.from90, styles.from90Typo]}>6 часа</Text>
          </View>
          <View style={[styles.card2, styles.cardSpaceBlock]}>
            <View style={[styles.price, styles.priceLayout]}>
              <View style={[styles.priceChild, styles.childPosition]} />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition1]}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
            <Text style={[styles.from90, styles.from90Typo]}>Full Board</Text>
          </View>
          <View style={[styles.card2, styles.cardSpaceBlock]}>
            <View style={[styles.price, styles.priceLayout]}>
              <View style={[styles.priceChild, styles.childPosition]} />
              <Image
                style={[styles.vectorIcon2, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
            <Text
              style={[styles.from90, styles.from90Typo]}
            >{`Insurance `}</Text>
          </View>
        </View>
        <View style={styles.shulgaTashCave1}>
          <Text style={styles.julyEscobar}>July Escobar</Text>
          <Text
            style={[styles.julissaEscobarIs, styles.readMore1Typo]}
          >{`Julissa Escobar is a talented and passionate Makeup Artist and Hairstylist based in Miami, United States. `}</Text>
          <View style={[styles.readMore, styles.childPosition]}>
            <Text style={[styles.readMore1, styles.readMore1Typo]}>
              Read more
            </Text>
            <Image
              style={[styles.moreIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/more.png")}
            />
          </View>
        </View>
        <View style={styles.liked}>
          <View style={[styles.likedChild, styles.childPosition]} />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
        <View style={[styles.guide, styles.guideLayout]}>
          <View style={[styles.guideChild, styles.guideLayout]} />
          <Text style={[styles.makeupArtist, styles.makeupArtistPosition]}>
            Makeup Artist
          </Text>
          <Text style={[styles.southFlorida, styles.makeupArtistPosition]}>
            South Florida
          </Text>
          <Image
            style={[styles.guideItem, styles.priceLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
        </View>
      </View>
      <View style={[styles.steakAndEgg, styles.steakAndEggPosition]}>
        <View style={[styles.groupParent, styles.childPosition]}>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <Text style={[styles.makeupGlam, styles.text1Typo]}>Makeup Glam</Text>
          <Text style={[styles.catEyeUn, styles.catEyeUnTypo]}>
            Cat Eye: Un look de maquillaje con un delineado estilo "cat eye".
          </Text>
          <Text style={[styles.text1, styles.textTypo]}>$150</Text>
        </View>
      </View>
      <View style={styles.back}>
        <View style={[styles.backChild, styles.childPosition]} />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <View style={[styles.handScooped, styles.steakAndEggPosition]}>
        <View style={[styles.groupParent, styles.childPosition]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-1711.png")}
          />
          <Text style={[styles.fantasyRoom, styles.text1Typo]}>
            Fantasy Room
          </Text>
          <Text style={[styles.customMakeupFor, styles.text2Position]}>
            Custom makeup for special events
          </Text>
          <Text style={[styles.text2, styles.text2Position]}>$250</Text>
        </View>
      </View>
      <View style={[styles.home, styles.homeLayout]} />
      <View style={styles.promotionalAvailable}>
        <Image
          style={[styles.promotionalAvailableChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-162.png")}
        />
        <Text style={[styles.promotionalAvailable1, styles.catEyeUnTypo]}>
          2 Promotional Available
        </Text>
        <Image
          style={[styles.path265Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/path-265.png")}
        />
      </View>
      <View style={[styles.home1, styles.homeLayout]}>
        <View style={styles.homeIndicator} />
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
  priceLayout: {
    height: 36,
    width: 36,
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  from90Typo: {
    opacity: 0.6,
    fontFamily: FontFamily.text,
    fontSize: FontSize.bodySmall13_size,
  },
  cardSpaceBlock: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: Padding.p_sm,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_3xl,
    width: 80,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_base,
  },
  vectorIconPosition1: {
    left: "19.44%",
    right: "19.44%",
    width: "61.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  readMore1Typo: {
    lineHeight: 20,
    fontSize: FontSize.bodyMedium15_size,
    textAlign: "left",
    fontFamily: FontFamily.text,
    left: "0%",
    position: "absolute",
  },
  vectorIconPosition: {
    top: "28.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  guideLayout: {
    height: 44,
    width: 170,
    position: "absolute",
  },
  makeupArtistPosition: {
    left: 48,
    color: Color.textLight,
    textAlign: "left",
    position: "absolute",
  },
  steakAndEggPosition: {
    top: "79.13%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "-0.02%",
    top: "-0.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Typo: {
    fontFamily: FontFamily.basicRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  catEyeUnTypo: {
    fontSize: FontSize.titleH416_size,
    fontFamily: FontFamily.basicRegular,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_7xl,
    top: "70.05%",
    height: "17.65%",
  },
  text2Position: {
    left: "12.71%",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    textAlign: "left",
    position: "absolute",
  },
  homeLayout: {
    height: 27,
    position: "absolute",
  },
  shulgaTashCave: {
    height: "60.24%",
    bottom: "39.76%",
    borderRadius: 34,
    left: "0%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  priceChild: {
    borderRadius: Border.br_5xs,
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.textLight,
  },
  groupIcon: {
    width: "66.67%",
    top: "24.31%",
    right: "16.67%",
    bottom: "25.69%",
    left: "16.67%",
    height: "50%",
    position: "absolute",
  },
  price: {
    overflow: "hidden",
  },
  from90: {
    textAlign: "center",
    marginTop: 12,
    color: Color.gray_300,
  },
  vectorIcon: {
    height: "52.78%",
    top: "25%",
    bottom: "22.22%",
  },
  card2: {
    marginLeft: 12,
  },
  vectorIcon1: {
    height: "61.11%",
    top: "19.44%",
    bottom: "19.44%",
  },
  vectorIcon2: {
    height: "69.44%",
    width: "55.56%",
    top: "16.67%",
    right: "22.22%",
    bottom: "13.89%",
    left: "22.22%",
    position: "absolute",
  },
  card1Parent: {
    top: 582,
    left: 8,
    flexDirection: "row",
    position: "absolute",
  },
  julyEscobar: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.6,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.title,
    fontWeight: "500",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  julissaEscobarIs: {
    top: "33.83%",
    opacity: 0.7,
    color: Color.gray_300,
    width: "100%",
  },
  readMore1: {
    color: Color.pink,
    top: "0%",
    lineHeight: 20,
  },
  moreIcon: {
    height: "30%",
    width: "10.53%",
    top: "45%",
    bottom: "25%",
    left: "89.47%",
    right: "0%",
    position: "absolute",
  },
  readMore: {
    height: "15.04%",
    width: "32.76%",
    top: "84.96%",
    right: "67.24%",
  },
  shulgaTashCave1: {
    height: "19.73%",
    width: "77.33%",
    top: "63.06%",
    right: "20.53%",
    bottom: "17.21%",
    left: "2.13%",
    position: "absolute",
  },
  likedChild: {
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_base,
  },
  vectorIcon3: {
    width: "56.25%",
    right: "21.88%",
    bottom: "21.88%",
    left: "21.88%",
    height: "50%",
  },
  liked: {
    height: "4.75%",
    width: "8.53%",
    top: "57.86%",
    right: "9.33%",
    bottom: "37.39%",
    left: "82.13%",
    position: "absolute",
    overflow: "hidden",
  },
  guideChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gray_700,
  },
  makeupArtist: {
    top: 6,
    fontSize: FontSize.size_smi,
    color: Color.textLight,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    left: 48,
  },
  southFlorida: {
    top: 24,
    color: Color.textLight,
    opacity: 0.6,
    fontFamily: FontFamily.text,
    fontSize: FontSize.bodySmall13_size,
  },
  guideItem: {
    top: 4,
    left: 4,
    position: "absolute",
  },
  guide: {
    top: 329,
    left: 24,
  },
  view: {
    height: "75.22%",
    width: "92.14%",
    top: "1.79%",
    right: "3.93%",
    bottom: "22.99%",
    left: "3.93%",
    position: "absolute",
  },
  groupChild: {
    height: "100.03%",
    right: "0%",
    width: "100%",
  },
  makeupGlam: {
    left: "12.22%",
    color: Color.black,
    fontSize: FontSize.size_base,
    top: "14.44%",
    height: "10.7%",
    fontFamily: FontFamily.basicRegular,
    width: "86.11%",
  },
  catEyeUn: {
    height: "38.5%",
    top: "27.27%",
    left: "13.33%",
    opacity: 0.5,
    color: Color.black,
    width: "86.11%",
  },
  text1: {
    width: "27.78%",
    left: "12.78%",
    color: Color.black,
    fontFamily: FontFamily.basicRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  steakAndEgg: {
    height: "19.64%",
    width: "44.23%",
    right: "4.18%",
    bottom: "1.23%",
    left: "51.6%",
  },
  backChild: {
    borderRadius: Border.br_3xs,
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.whitesmoke_100,
  },
  vectorIcon4: {
    height: "43.83%",
    width: "21.89%",
    right: "40.61%",
    bottom: "28.05%",
    left: "37.5%",
  },
  back: {
    height: "3.57%",
    width: "7.86%",
    top: "4.46%",
    right: "82.31%",
    bottom: "91.96%",
    left: "9.83%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    height: "100.04%",
    width: "99.45%",
    right: "0.55%",
  },
  fantasyRoom: {
    width: "53.59%",
    left: "12.15%",
    color: Color.black,
    fontSize: FontSize.size_base,
    top: "14.44%",
    height: "10.7%",
    fontFamily: FontFamily.basicRegular,
  },
  customMakeupFor: {
    height: "31.55%",
    width: "87.29%",
    top: "26.74%",
    opacity: 0.5,
    fontSize: FontSize.bodyMedium15_size,
    left: "12.71%",
  },
  text2: {
    width: "29.83%",
    fontSize: FontSize.size_7xl,
    top: "70.05%",
    height: "17.65%",
  },
  handScooped: {
    height: "19.42%",
    width: "44.47%",
    right: "51.11%",
    bottom: "1.45%",
    left: "4.42%",
  },
  home: {
    top: 869,
    left: 5,
    width: 375,
  },
  promotionalAvailableChild: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  promotionalAvailable1: {
    top: "31.91%",
    left: "10.28%",
    color: Color.textLight,
  },
  path265Icon: {
    height: "24.79%",
    width: "3.38%",
    top: "37.86%",
    right: "6.63%",
    bottom: "37.35%",
    left: "89.99%",
    position: "absolute",
  },
  promotionalAvailable: {
    height: "5.25%",
    width: "52.58%",
    top: "85.6%",
    right: "24.82%",
    bottom: "9.15%",
    left: "22.6%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 0,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "rgba(36, 36, 36, 0.19)",
    width: 134,
    height: 5,
    position: "absolute",
  },
  home1: {
    top: 867,
    left: -5,
    width: 417,
  },
  servicePage: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.textLight,
  },
});

export default ServicePage;
