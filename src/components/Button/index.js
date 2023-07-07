import React from 'react';
import {TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import colors from '../../assets/colors';
import {wp} from '../../styles/responsiveScreen';

const Button = props => {
  const {
    children,
    style,
    buttonStyle,
    activeOpacity,
    bgColor,
    disabled,
    pointerEvents,
    buttonHeight,
  } = props;

  function onButtonPress(prop) {
    return evt => {
      const {onPress, dismissKeyboardOnPress} = prop;
      dismissKeyboardOnPress && Keyboard.dismiss();
      if (onPress) {
        onPress(evt);
      }
    };
  }

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onButtonPress(props)}
      disabled={disabled}
      pointerEvents={pointerEvents}
      style={[
        styles.button,
        buttonStyle,
        bgColor ? {backgroundColor: colors[bgColor]} : null,
        buttonHeight ? {height: buttonHeight} : null,
        style,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  position: 'center',
  buttonHeight: wp(12),
  activeOpacity: 0.5,
  bgColor: 'tintColor',
  disabled: false,
  dismissKeyboardOnPress: true,
};

const styles = StyleSheet.create({
  button: {
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  shadow: {
    shadowOffset: {width: -4, height: -4},
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 10,
  },
});

export default Button;
