import {StyleSheet, Text, View, TextInput as RNTextInput} from 'react-native';
import React from 'react';

const TextInput = (props: any) => {
  const {label} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 22,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    marginTop: 8,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
});
