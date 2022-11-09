import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type ButtonProps = {
  text: string;
  buttonColor: string;
  textColor: string;
  onPress: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: props.buttonColor}]}
      onPress={props.onPress}>
      <Text style={[styles.buttonText, {color: props.textColor}]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
