import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {normalize, wp} from '../../styles/responsiveScreen';
import NavigationBar from '../NavigationBar';
import FontText from '../FontText';

const Header = ({title, rightTitle, onRightPress, onLeftPress}) => {
  return (
    <NavigationBar
      hasLeft
      hasCenter
      hasRight
      left={
        <TouchableOpacity onPress={onLeftPress}>
          <Image
            style={styles.iconStyle}
            source={require('../../assets/menu.png')}
          />
        </TouchableOpacity>
      }
      center={
        <FontText size={normalize(18)} fontWeight={'700'}>
          {title}
        </FontText>
      }
      right={
        <TouchableOpacity onPress={onRightPress}>
          <FontText size={normalize(14)} fontWeight={'500'}>
            {rightTitle}
          </FontText>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    height: wp(5),
    width: wp(5),
  },
});

export default Header;
