/** @format */

import React from "react";
import { View, Text, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import styles from "./styles";
import { getHeight, getWidth } from "@helpers";
import { images } from "@assets";

interface Slide {
  title: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: images.frame1,
  },
  {
    image: images.frame2,
  },
  {
    image: images.frame3,
  },
];

const CarouselCard = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderSlide = ({ item, index }: { item: Slide; index: number }) => (
    <View
      style={[styles.CardView, index !== activeSlide && styles.InactiveSlide]}
    >
      <Image source={item.image} style={styles.imageStyle} />
      {/* <Text style={{ fontSize: 24, position: "absolute" }}>{item.title}</Text>
      <Text style={{ fontSize: 16 }}>{item.text}</Text> */}
    </View>
  );

  return (
    <View style={styles.CarouselStyle}>
      <Carousel
        data={slides}
        renderItem={renderSlide}
        sliderWidth={getWidth(100)}
        itemWidth={getWidth(68)}
        onSnapToItem={(index) => setActiveSlide(index)}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={{ paddingVertical: getHeight(6) }}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
      />
    </View>
  );
};

export default CarouselCard;
