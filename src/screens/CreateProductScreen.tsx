import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const CreateProduct = () => {
  const [productTitle, setProductTitle] = useState('Nintendo Switch');
  const [price, setPrice] = useState('300');
  const [description, setDescription] = useState('A Gaming Console');
  const [image, setImage] = useState(
    'https://m.media-amazon.com/images/I/61dYrzvBLbL._SL1483_.jpg',
  );

  const createProduct = (details: any) => {
    try {
      fetch('https://upayments-studycase-api.herokuapp.com/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept':  'application/json',
          'Authorization':
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzLmF0dGFyQG5lb3NvZnRtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9FbHVuaXIiLCJpYXQiOjE2NjgwMTA2MTEsImV4cCI6MTY2ODQ0MjYxMX0.PtSJFopSu924weF5p3GsbDGclyOYF94iqSf1MWAthZM',
        },
        body: JSON.stringify(details),
      })
        .then(res => res.json())
        .then(console.log);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Product Title"
        value={productTitle}
        onChangeText={setProductTitle}
      />
      <TextInput label="Price" value={price} onChangeText={setPrice} />
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput label="Image Link" value={image} onChangeText={setImage} />
      <Text>Selected Category:</Text>
      <Button
        text={'Create Product'}
        buttonColor={'gray'}
        textColor={'white'}
        onPress={() =>
          createProduct({
            name: productTitle,
            price,
            description,
            avatar: image,
            category: 'Electronics',
            developerEmail: 'idris.attar@neosoftmail.com',
          })
        }
      />
    </View>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});
