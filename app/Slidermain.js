import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Slidermain = () => {
    const images = [
        { id: 1, source: require('../assests/1.png') },
        { id: 2, source: require('../assests/2.png') },
        { id: 3, source: require('../assests/3.png') },
        
      ];

      const renderItem = ({ item }) => (
        <View style={styles.slide}>
          <Image source={item.source} style={styles.image} />
        </View>
      );
  return (
    <>
         <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width}
    />
    </>
  )
}

export default Slidermain

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });
  