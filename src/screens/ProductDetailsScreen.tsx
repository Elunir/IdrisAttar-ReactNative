import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetailsScreen = ({route}) => {
  const {name, price, description, avatar, developerEmail} = route.params.data;
  return (
    <View style={styles.product}>
      <Image
        source={{
          uri: avatar,
        }}
        style={styles.image}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
        <Text style={styles.productPrice}>{description}</Text>
        <Text style={styles.productPrice}>{developerEmail}</Text>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
  },
  product: {
    width: 180,
    height: 260,
    maxHeight: 260,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  productInfo: {
    padding: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    marginTop: 10,
  },
});
