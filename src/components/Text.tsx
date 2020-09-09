import React from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';

export interface TextProps {
  children: React.ReactNode;
  type?: 'title' | 'large' | 'medium' | 'small' | 'tiny';
  weight?: 'thin' | 'light' | 'regular' | 'bold';
  color?: string;
  style?: TextStyle;
}

const Text = ({ children, type, weight, color, style = {} }: TextProps) => {
  const fontSize = getFontSize(type);
  const fontFamily = getFontFamily(weight);

  const mixedStyle = StyleSheet.create({
    style: {
      color: color || '#fff',
      fontSize,
      fontFamily
    }
  });

  return <RNText style={[mixedStyle.style, style]}>{children}</RNText>;
};

const getFontSize = (type) => {
  let fontSize;
  switch (type) {
    case 'title':
      fontSize = 24;
      break;
    case 'large':
      fontSize = 34;
      break;
    case 'medium':
      fontSize = 26;
      break;
    case 'small':
      fontSize = 18;
      break;
    case 'tiny':
      fontSize = 14;
      break;

    default:
      fontSize = 16;
  }

  return fontSize;
};

const getFontFamily = (weight) => {
  let fontFamily;
  switch (weight) {
    case 'thin':
      fontFamily = 'Lato-Thin';
      break;
    case 'light':
      fontFamily = 'Lato-Light';
      break;
    case 'regular':
      fontFamily = 'Lato-Regular';
      break;
    case 'bold':
      fontFamily = 'Lato-Bold';
      break;

    default:
      fontFamily = 'Lato-Regular';
      break;
  }

  return fontFamily;
};

export default Text;
