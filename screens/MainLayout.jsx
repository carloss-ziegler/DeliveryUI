import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Header } from "../components";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
} from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { useRef } from "react";
import { Home, Favourite, Search, CartTab, Notification } from "./";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

const TabButton = ({
  label,
  icon,
  outerContainerStyle,
  innerContainerStyle,
  isFocused,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
          outerContainerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: "80%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? COLORS.white : COLORS.gray,
            }}
          />

          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  const flatListRef = useRef();

  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favoTabFlex = useSharedValue(1);
  const favoTabColor = useSharedValue(COLORS.white);
  const notiTabFlex = useSharedValue(1);
  const notiTabColor = useSharedValue(COLORS.white);

  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });

  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });

  const searchFlexStyle = useAnimatedStyle(() => {
    return {
      flex: searchTabFlex.value,
    };
  });

  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: searchTabColor.value,
    };
  });

  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value,
    };
  });

  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value,
    };
  });

  const favoFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favoTabFlex.value,
    };
  });

  const favoColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favoTabColor.value,
    };
  });

  const notiFlexStyle = useAnimatedStyle(() => {
    return {
      flex: notiTabFlex.value,
    };
  });

  const notiColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notiTabColor.value,
    };
  });

  useEffect(() => {
    if (selectedTab == constants.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      });

      homeTabFlex.value = withTiming(4, { duration: 200 });
      homeTabColor.value = withTiming(COLORS.primary, { duration: 250 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 200 });
      homeTabColor.value = withTiming(COLORS.white, { duration: 250 });
    }

    if (selectedTab == constants.screens.search) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });

      searchTabFlex.value = withTiming(4, { duration: 200 });
      searchTabColor.value = withTiming(COLORS.primary, { duration: 250 });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 200 });
      searchTabColor.value = withTiming(COLORS.white, { duration: 250 });
    }

    if (selectedTab == constants.screens.cart) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });

      cartTabFlex.value = withTiming(4, { duration: 200 });
      cartTabColor.value = withTiming(COLORS.primary, { duration: 250 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 200 });
      cartTabColor.value = withTiming(COLORS.white, { duration: 250 });
    }

    if (selectedTab == constants.screens.favourite) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });

      favoTabFlex.value = withTiming(4, { duration: 200 });
      favoTabColor.value = withTiming(COLORS.primary, { duration: 250 });
    } else {
      favoTabFlex.value = withTiming(1, { duration: 200 });
      favoTabColor.value = withTiming(COLORS.white, { duration: 250 });
    }

    if (selectedTab == constants.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      });

      notiTabFlex.value = withTiming(4, { duration: 200 });
      notiTabColor.value = withTiming(COLORS.primary, {
        duration: 250,
      });
    } else {
      notiTabFlex.value = withTiming(1, { duration: 200 });
      notiTabColor.value = withTiming(COLORS.white, { duration: 250 });
    }
  }, [selectedTab]);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle,
      }}
    >
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{ width: 40, height: 40, borderRadius: SIZES.radius }}
            />
          </TouchableOpacity>
        }
      />

      {/* Content */}
      <View style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View style={{ height: SIZES.height, width: SIZES.width }}>
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.search && <Search />}
                {item.label == constants.screens.cart && <CartTab />}
                {item.label == constants.screens.favourite && <Favourite />}
                {item.label == constants.screens.notification && (
                  <Notification />
                )}
              </View>
            );
          }}
        />
      </View>

      {/* Footer */}
      <View style={{ height: 80, justifyContent: "flex-end" }}>
        {/* Shadow */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
          }}
        >
          <TabButton
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => setSelectedTab(constants.screens.home)}
            label="Home"
            icon={icons.home}
          />
          <TabButton
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            isFocused={selectedTab == constants.screens.search}
            onPress={() => setSelectedTab(constants.screens.search)}
            label="Procurar"
            icon={icons.search}
          />
          <TabButton
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            isFocused={selectedTab == constants.screens.cart}
            onPress={() => setSelectedTab(constants.screens.cart)}
            label="Carrinho"
            icon={icons.cart}
          />
          <TabButton
            outerContainerStyle={favoFlexStyle}
            innerContainerStyle={favoColorStyle}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => setSelectedTab(constants.screens.favourite)}
            label="Favoritos"
            icon={icons.favourite}
          />
          <TabButton
            outerContainerStyle={notiFlexStyle}
            innerContainerStyle={notiColorStyle}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => setSelectedTab(constants.screens.notification)}
            label="Notificações"
            icon={icons.notification}
          />
        </View>
      </View>
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
