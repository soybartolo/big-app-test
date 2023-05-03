import React, { useState , FC } from 'react';
import { Image, StyleSheet, Text, ImageBackground, View , TouchableOpacity , TextInput} from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { NavigationProp } from "@react-navigation/native";
import Carousel from 'react-native-snap-carousel';

interface Props {
  navigation: NavigationProp<any>;
}

const MainPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const categories = [
    {
      title: 'Nails',
      image: require('../assets/group-77.png'),
    },
    {
      title: 'Makeup',
      image: require('../assets/nature.png'),
    },
    {
      title: 'Hair',
      image: require('../assets/group-77.png'),
    },
  ];
  


  return (
    <View style={styles.mainPage}>
      <Image
        style={[styles.mainPageChild, styles.childPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.statusbar, styles.statusbarPosition]} />
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.childBg]} />
              

        <TextInput
  style={[styles.input, { zIndex: 0, position: 'absolute' }]}
  placeholder="Enter name of category"
  keyboardType="email-address"
  onChangeText={(text) => setEmail(text)}
  value={email}
/>

        <Image
          style={[styles.searchIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/search1.png")}
        />
      </View>


      <Text style={[styles.popular, styles.popularTypo]}>{`Popular  `}</Text>
      <Text style={[styles.uncomingBookings, styles.popularTypo]}>
        Uncoming Bookings
      </Text>


      <View style={styles.categories}>
        <View style={styles.top30}>
          <View style={[styles.top301, styles.top301Layout]}>
            <View style={[styles.top30Child, styles.childPosition]} />
            <Image
              style={[styles.groupIcon, styles.foodItemPosition]}
              resizeMode="cover"
              source={require("../assets/group7.png")}
            />
          </View>
          <Text style={[styles.makeup, styles.makeupTypo]}>Makeup</Text>
        </View>
        <View style={styles.natureSpaceBlock}>
          <Image
            style={[styles.top301, styles.top301Layout]}
            resizeMode="cover"
            source={require("../assets/nature.png")}
          />
          <Text style={[styles.makeup, styles.makeupTypo]}>Nails</Text>
        </View>
        <View style={[styles.gastro, styles.natureSpaceBlock]}>
          <View style={[styles.top301, styles.top301Layout]}>
            <View style={[styles.foodChild, styles.childPosition]} />
            <Image
              style={[styles.foodItem, styles.foodItemPosition]}
              resizeMode="cover"
              source={require("../assets/group-77.png")}
            />
          </View>
          <Text style={[styles.makeup, styles.makeupTypo]}>{`Hair `}</Text>
        </View>
        <View style={styles.natureSpaceBlock}>
          <View style={[styles.top301, styles.top301Layout]}>
            <View style={[styles.foodChild, styles.childPosition]} />
            <Image
              style={[styles.foodItem, styles.foodItemPosition]}
              resizeMode="cover"
              source={require("../assets/group-77.png")}
            />
          </View>
          <Text style={[styles.makeup, styles.makeupTypo]}>{`Hair `}</Text>
        </View>
      </View>
      <View style={[styles.krasnyyKlyuch, styles.krasnyyKlyuchLayout]}>
        <Image
          style={[styles.krasnyyKlyuch1, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/krasnyy-klyuch.png")}
        />
        <Text style={[styles.krasnyyKlyuchSpring, styles.promoChildLayout]}>
          Krasnyy klyuch spring
        </Text>
        <View style={[styles.liked, styles.likedLayout]}>
          <View style={[styles.likedChild, styles.borderBorder]} />
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/vector7.png")}
          />
        </View>
        <View style={[styles.rating, styles.ratingLayout1]}>
          <View style={[styles.ratingChild, styles.ratingPosition]} />
          <Image
            style={[styles.rateIcon, styles.rateIconLayout]}
            resizeMode="cover"
            source={require("../assets/rate.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>5,0</Text>
        </View>
      </View>
      <View style={[styles.salavatYulaev, styles.krasnyyKlyuchLayout]}>
        <Image
          style={[styles.krasnyyKlyuch1, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/serprovider.png")}
        />
        <Text
          style={[
            styles.julyEscobarMakeupArtistContainer,
            styles.promoChildLayout,
          ]}
        >
          July EscobarMakeup Artist
        </Text>
        <View style={[styles.liked1, styles.likedLayout]}>
          <View style={[styles.likedChild, styles.borderBorder]} />
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
        </View>
        <View style={[styles.rating1, styles.ratingLayout]}>
          <View style={[styles.ratingItem, styles.ratingLayout]} />
          <Image
            style={[styles.rateIcon1, styles.rateIconLayout]}
            resizeMode="cover"
            source={require("../assets/rate1.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>4,9</Text>
        </View>
      </View>
      <View style={styles.combinedShape2Parent}>
        <View style={styles.combinedShape2}>
          <View style={styles.combinedShape}>

          </View>
        </View>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-18103.png")}
        />
        <View style={[styles.frameParent, styles.top301Layout]}>
          <View style={styles.currentLocationParent}>
            <Text
              style={[styles.currentLocation, styles.currentLocationFlexBox]}
            >
              Current Location
            </Text>
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/1.png")}
            />
          </View>
          <Text style={[styles.dhakaBangladesh, styles.currentLocationFlexBox]}>
            New Yourk, USA
          </Text>
        </View>
        <Image
          style={[styles.profileImageIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/profile-image1.png")}
        />
      </View>
      <View style={[styles.barsStatusBarIphoneL, styles.statusbarPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
            resizeMode="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi2.png")}
        />
        <Image
          style={[styles.cellularConnectionIcon, styles.textLayout]}
          resizeMode="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.promo, styles.promoShadowBox]}>
        <View style={[styles.rectangle1, styles.promoShadowBox]} />
        <View style={styles.promoInner}>
          <View style={[styles.groupItem, styles.promoShadowBox]} />
        </View>
        <Image
          style={styles.mlihf8tw1Icon}
          resizeMode="cover"
          source={require("../assets/77mlihf8tw-1.png")}
        />
        <Text style={[styles.internationalGalaM, styles.madisonAveNewTypo]}>
          Invite your friends
        </Text>
        <Text style={[styles.madisonAveNew, styles.madisonAveNewTypo]}>
          Get $20 OFF your next booking
        </Text>
        <View style={[styles.promoChild, styles.promoChildLayout]} />
        <Text style={styles.invite}>Invite</Text>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.mainPageItemLayout]}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.groupInner} />
        <Image
          style={[styles.groupChild1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-181291.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.rectangleView} />
        <Text style={[styles.armanRokni, styles.armanPosition]}>
          <Text style={styles.armanRokniTxtContainer}>
            <Text style={styles.text2}>{`10
`}</Text>
            <Text style={styles.june}>June</Text>
          </Text>
        </Text>
      </View>
      <Image
        style={[styles.mainPageItem, styles.mainPageItemLayout]}
        resizeMode="cover"
        source={require("../assets/group-33318.png")}
      />
      <View style={[styles.mainPageInner, styles.groupViewPosition]}>
        <View style={[styles.allCopyParent, styles.groupItemPosition]}>
          <Text style={styles.allCopy}>See All</Text>
          <Image
            style={[styles.groupChild2, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-1.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.allCopyParent, styles.groupItemPosition]}>
          <Text style={styles.allCopy}>See All</Text>
          <Image
            style={[styles.groupChild2, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-1.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.rectangleView} />
        <Text style={[styles.armanRokni1, styles.armanPosition]}>
          <Text style={styles.armanRokniTxtContainer}>
            <Text style={styles.text2}>{`12
`}</Text>
            <Text style={styles.june}>June</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition1: {
    left: 0,
    top: 0,
  },
  statusbarPosition: {
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0, 
    marginHorizontal: 0,
    marginVertical: 0,
    padding: 10,
  },
  searchLayout: {
    height: 42,
    width: 351,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_base,
  },
  capIconPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  popularTypo: {
    fontFamily: FontFamily.title,
    fontWeight: "500",
    fontSize: FontSize.title_size,
    textAlign: "left",
    color: Color.gray_200,
    position: "absolute",
  },
  top301Layout: {
    height: 36,
    overflow: "hidden",
  },
  childPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  foodItemPosition: {
    left: "19.44%",
    right: "19.44%",
    width: "61.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  makeupTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.bodyMedium15_size,
    fontFamily: FontFamily.text,
  },
  natureSpaceBlock: {
    marginLeft: 12,
    alignItems: "center",
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_200,
    flexDirection: "row",
    borderRadius: Border.br_base,
  },
  krasnyyKlyuchLayout: {
    height: "23.52%",
    position: "absolute",
  },
  groupItemPosition: {
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  promoChildLayout: {
    height: 29,
    position: "absolute",
  },
  likedLayout: {
    height: "11.36%",
    position: "absolute",
    overflow: "hidden",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  ratingLayout1: {
    height: 17,
    width: 53,
    position: "absolute",
  },
  ratingPosition: {
    backgroundColor: Color.gray_700,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  rateIconLayout: {
    borderRadius: Border.br_12xs_4,
    left: "15.18%",
    right: "60.29%",
    width: "24.53%",
    height: "56.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textLayout: {
    width: 19,
    height: 11,
  },
  ratingLayout: {
    width: 52,
    height: 17,
    position: "absolute",
  },
  rectangleLayout1: {
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_11xs_5,
    left: "87.81%",
    height: "12.5%",
    position: "absolute",
  },
  currentLocationFlexBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.basicRegular,
    top: "50%",
    alignItems: "center",
    position: "absolute",
  },
  promoShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    position: "absolute",
  },
  madisonAveNewTypo: {
    fontFamily: FontFamily.basicRegular,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  mainPageItemLayout: {
    height: 131,
    width: 218,
    top: 281,
    position: "absolute",
  },
  rectangleLayout: {
    height: 47,
    width: 45,
    top: 289,
    position: "absolute",
  },
  armanPosition: {
    width: "81.94%",
    marginTop: -20.34,
    textTransform: "uppercase",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.basicRegular,
    top: "50%",
    alignItems: "center",
    height: 44,
    position: "absolute",
  },
  groupViewPosition: {
    left: "80.43%",
    right: "3.29%",
    width: "16.28%",
    height: "2.56%",
    position: "absolute",
  },
  mainPageChild: {
    width: 421,
    height: 159,
    position: "absolute",
  },
  statusbar: {
    width: 375,
  },
  searchBarChild: {
    height: 42,
    width: 351,
    position: "absolute",
    left: 0,
    top: 0,
  },
  enterNameOr: {
    top: 13,
    left: 17,
    width: 307,
    height: 16,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.bodyMedium15_size,
    fontFamily: FontFamily.text,
    color: Color.gray_200,
    opacity: 0.4,
  },
  searchIcon: {
    height: "38.1%",
    width: "5.35%",
    top: "30.95%",
    right: "5.69%",
    bottom: "30.95%",
    left: "88.96%",
    opacity: 0.3,
  },
  searchBar: {
    top: 95,
    left: 21,
    height: 42,
    width: 351,
  },
  popular: {
    top: 432,
    left: 15,
  },
  uncomingBookings: {
    top: 244,
    left: 14,
  },
  top30Child: {
    backgroundColor: "#e8002a",
  },
  groupIcon: {
    height: "58.33%",
    top: "19.44%",
    bottom: "22.22%",
  },
  top301: {
    width: 36,
  },
  makeup: {
    color: Color.black,
    marginLeft: 8,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.bodyMedium15_size,
  },
  top30: {
    alignItems: "center",
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_200,
    flexDirection: "row",
    borderRadius: Border.br_base,
  },
  foodChild: {
    backgroundColor: Color.indianred,
  },
  foodItem: {
    height: "45.83%",
    top: "27.78%",
    bottom: "26.39%",
  },
  gastro: {
    overflow: "hidden",
  },
  categories: {
    top: 177,
    width: 493,
    paddingRight: 61,
    flexDirection: "row",
    left: 14,
    position: "absolute",
  },
  krasnyyKlyuch1: {
    borderRadius: Border.br_9xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  krasnyyKlyuchSpring: {
    width: 129,
    color: Color.textLight,
    left: 24,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    top: 138,
    height: 29,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  likedChild: {
    borderColor: "rgba(255, 255, 255, 0.05)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_base,
  },
  vectorIcon: {
    height: "50%",
    width: "56.25%",
    top: "28.12%",
    right: "21.88%",
    bottom: "21.88%",
    left: "21.88%",
  },
  liked: {
    width: "11.79%",
    top: "6.27%",
    right: "8.49%",
    bottom: "82.37%",
    left: "79.72%",
  },
  ratingChild: {
    height: 17,
    width: 53,
    position: "absolute",
  },
  rateIcon: {
    top: "23.85%",
    bottom: "19.63%",
  },
  text: {
    top: 3,
    opacity: 0.65,
    height: 11,
    color: Color.textLight,
    left: 24,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.text,
    width: 19,
    position: "absolute",
  },
  rating: {
    top: 173,
    left: 24,
  },
  krasnyyKlyuch: {
    width: "50.6%",
    top: "51.64%",
    right: "-6.68%",
    bottom: "24.83%",
    left: "56.09%",
  },
  julyEscobarMakeupArtistContainer: {
    width: 113,
    color: Color.textLight,
    left: 24,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    top: 138,
    height: 29,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  liked1: {
    width: "11.48%",
    top: "6.63%",
    right: "3.83%",
    bottom: "82.01%",
    left: "84.69%",
  },
  ratingItem: {
    backgroundColor: Color.gray_700,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  rateIcon1: {
    top: "23.9%",
    bottom: "19.58%",
  },
  rating1: {
    top: 173,
    left: 24,
  },
  salavatYulaev: {
    width: "49.88%",
    top: "51.56%",
    right: "46.78%",
    bottom: "24.92%",
    left: "3.34%",
  },
  rectangle: {
    top: "286.46%",
    bottom: "-198.96%",
    right: "-87.81%",
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_11xs_5,
    left: "87.81%",
    height: "12.5%",
    width: "100%",
  },
  rectangleCopy5: {
    width: "75%",
    top: "330.21%",
    right: "-62.81%",
    bottom: "-242.71%",
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_11xs_5,
    left: "87.81%",
    height: "12.5%",
  },
  rectangleCopy6: {
    top: "373.96%",
    bottom: "-286.46%",
    right: "-87.81%",
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_11xs_5,
    left: "87.81%",
    height: "12.5%",
    width: "100%",
  },
  combinedShape: {
    width: 28,
    height: 19,
    backgroundColor: "transparent",
  },
  combinedShape2: {
    height: "22.15%",
    width: "7.47%",
    right: "92.53%",
    bottom: "70.23%",
    opacity: 0.94,
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    top: 9,
    left: 342,
    width: 39,
    height: 79,
    position: "absolute",
  },
  currentLocation: {
    marginTop: -7,
    width: "80.37%",
    left: "3.74%",
    opacity: 0.7,
    fontSize: FontSize.bodySmall13_size,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.textLight,
  },
  icon: {
    height: "31.25%",
    width: "9.35%",
    top: "37.5%",
    bottom: "31.25%",
    left: "90.65%",
    opacity: 0.9,
    right: "0%",
  },
  currentLocationParent: {
    height: "44.44%",
    width: "87.7%",
    right: "5.74%",
    bottom: "55.56%",
    left: "6.56%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  dhakaBangladesh: {
    marginTop: 0,
    width: "72.95%",
    left: "13.11%",
    color: "#f4f4fe",
    fontSize: FontSize.size_smi,
  },
  frameParent: {
    left: 103,
    width: 170,
    top: 0,
    position: "absolute",
  },
  profileImageIcon: {
    height: "39.23%",
    width: "9.45%",
    top: "11.54%",
    right: "0",
    bottom: "49.23%",
    left: "91.29%",
  },
  combinedShape2Parent: {
    height: "9.65%",
    width: "90.93%",
    top: "4.23%",
    right: "3.1%",
    bottom: "86.12%",
    left: "5.97%",
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#fff",
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    position: "absolute",
    backgroundColor: Color.textLight,
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 17,
    height: 11,
    right: 43,
    top: 17,
    position: "absolute"
  },
  cellularConnectionIcon: {
    height: 11,
    right: 66,
    top: 17,
    position: "absolute"

  },
  time: {
    marginTop: -4.5,
    left: -15,
    letterSpacing: 0,
    width: 54,
    textAlign: "center",
    fontFamily: FontFamily.basicRegular,
    top: "50%",
    color: Color.textLight,
    fontSize: FontSize.bodyMedium15_size,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    height: 21,
    width: 54,
    left: 21,
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    width: 419,
  },
  rectangle1: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(255, 0, 0, 0.25)",
    shadowRadius: 0,
    elevation: 0,
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.whitesmoke_200,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  groupItem: {
    backgroundColor: Color.card,
    shadowColor: "rgba(65, 65, 65, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    borderRadius: Border.br_base,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  promoInner: {
    height: "102.56%",
    width: "101.54%",
    top: "-2.56%",
    right: "-1.28%",
    left: "-0.26%",
    bottom: "0%",
    position: "absolute",
  },
  mlihf8tw1Icon: {
    top: -6,
    left: 120,
    width: 280,
    height: 151,
    position: "absolute",
  },
  internationalGalaM: {
    marginTop: -46.52,
    width: "43.29%",
    left: "5.49%",
    lineHeight: 34,
    color: Color.colorTypographyTitle,
    height: 31,
    fontSize: FontSize.title_size,
  },
  madisonAveNew: {
    marginTop: -22.5,
    width: "53.85%",
    left: "5.64%",
    color: "#484d70",
    height: 22,
    fontSize: FontSize.size_smi,
  },
  promoChild: {
    top: 59,
    left: 16,
    borderRadius: 5,
    backgroundColor: Color.crimson_100,
    width: 77,
  },
  invite: {
    top: 63,
    left: 36,
    width: 35,
    textTransform: "uppercase",
    lineHeight: 23,
    height: 21,
    fontFamily: FontFamily.basicRegular,
    fontSize: FontSize.bodySmall13_size,
    color: Color.textLight,
    textAlign: "left",
    position: "absolute",
  },
  promo: {
    height: "13.03%",
    width: "93.08%",
    top: "77.17%",
    right: "3.34%",
    bottom: "9.8%",
    left: "3.58%",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 4,
    elevation: 4,
  },
  maskGroupIcon: {
    left: 14,
  },
  groupInner: {
    borderRadius: 7,
    backgroundColor: Color.gray_600,
    height: 30,
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    height: "46.67%",
    width: "52.5%",
    top: "26.67%",
    right: "24.16%",
    bottom: "26.67%",
    left: "23.33%",
  },
  rectangleParent: {
    left: 194,
    height: 30,
    width: 30,
    top: 289,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_3xs,
    height: 45,
    width: 45,
    backgroundColor: Color.gray_600,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text2: {
    lineHeight: 6,
    fontSize: FontSize.title_size,
  },
  june: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
  },
  armanRokniTxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  armanRokni: {
    left: "11.11%",
    color: "#0d0504",
  },
  rectangleGroup: {
    left: 22,
  },
  mainPageItem: {
    left: 252,
  },
  allCopy: {
    width: "81.04%",
    fontSize: FontSize.titleH416_size,
    color: Color.slategray_100,
    textAlign: "right",
    lineHeight: 23,
    display: "flex",
    fontFamily: FontFamily.basicRegular,
    left: "0%",
    top: "0%",
    alignItems: "center",
    position: "absolute",
  },
  groupChild2: {
    height: "39.13%",
    width: "11.66%",
    top: "33.54%",
    bottom: "27.33%",
    left: "88.34%",
    borderRadius: Border.br_12xs,
    opacity: 0.5,
    right: "0%",
  },
  allCopyParent: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  mainPageInner: {
    top: "27.17%",
    bottom: "70.27%",
  },
  groupView: {
    top: "48.55%",
    bottom: "48.89%",
  },
  armanRokni1: {
    left: "8.89%",
    color: "#040404",
  },
  rectangleContainer: {
    left: 260,
  },
  mainPage: {
    flex: 1,
    height: 898,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.textLight,
  },
});

export default MainPage;
