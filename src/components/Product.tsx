import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Product = ({data}: any) => {
  const {navigate} = useNavigation();
  return (
    <TouchableWithoutFeedback
      key={data.id + 'item'}
      onPress={() =>
        navigate('ProductDetails', {
          data,
        })
      }>
      <View style={styles.product}>
        <Image
          source={{
            uri: data.avatar,
          }}
          style={styles.image}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{data.name}</Text>
          <Text style={styles.productPrice}>${data.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Product;

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
  },
  product: {
    width: 180,
    height: 260,
    maxHeight: 260,
    borderRadius: 12,
    backgroundColor: 'white',
    marginVertical: 8,
    marginRight: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  productInfo: {
    padding: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    marginTop: 10,
  },
});
