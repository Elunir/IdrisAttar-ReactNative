import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetails = () => {
  return (
    <View style={styles.product}>
      <Image
        source={{
          uri: 'https://randomuser.me/api/portraits/men/75.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Product Name</Text>
        <Text style={styles.productPrice}>Price</Text>
      </View>
    </View>
  );
};

export default ProductDetails;

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
