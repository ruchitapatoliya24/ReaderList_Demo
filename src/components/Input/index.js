import React, {
  createRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  findNodeHandle,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors';
// import fonts from '../../assets/fonts';
import {hp, normalize, wp} from '../../styles/responsiveScreen';
import FontText from '../FontText';

const Input = forwardRef(
  (
    {
      value,
      editable,
      height,
      fontSize,
      fontName,
      color,
      placeholder,
      placeholderTextColor,
      blurOnSubmit,
      returnKeyType,
      multiline,
      multilineHeight,
      keyboardType,
      autoCapitalize,
      maxLength,
      secureTextEntry,
      inputStyle,
      children,
      style,
      onFocus,
      onBlur,
      autoFocus,
      textAlign,
      caretHidden,
      contextMenuHidden,
      selectTextOnFocus,
      pointerEvents,
      onSubmit,
      clearOnSubmit,
      willCheckPosition,
      checkPosition,
      onChangeText,
      onEndEditing,
      onKeyPress,
      autoCorrect,
      withTitle,
      title,
      titleSize,
      withLeftIcon,
      withRightIcon,
      leftIcon,
      rightIcon,
      fontStyle,
      onRightIconPress,
      isRequired,
      pTop,
    },
    ref,
  ) => {
    const [inputValue, setValue] = useState(value);
    const [inputEditable, setEditable] = useState(editable);
    let inputRef = createRef();

    const onChangeTextHandler = text => {
      setValue(text);
      if (typeof onChangeText === 'function') {
        onChangeText(text);
      }
    };

    const onSubmitEditingHandler = () => {
      if (typeof onSubmit === 'function') {
        onSubmit(inputValue);
      }
      if (clearOnSubmit) {
        setValue('');
      }
    };

    const onFocusHandler = () => {
      if (typeof onFocus === 'function') {
        onFocus();
      }
      if (willCheckPosition && typeof checkPosition === 'function') {
        checkPosition(findNodeHandle(inputRef));
      }
    };

    const _inputStyle = {
      height: multiline ? multilineHeight : height,
      fontSize,
      // fontFamily: fonts[fontName],
      color: colors[color],
    };

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.focus(),
      blur: () => inputRef.blur(),
      disable: () => setEditable(false),
      enable: () => setEditable(true),
    }));

    return (
      <View>
        {withTitle && (
          <FontText
            size={titleSize}
            color={'white'}
            opacity={0.5}
            pTop={pTop}
            pBottom={hp(0.5)}
            pLeft={wp(3.5)}
            style={fontStyle}>
            {title}
            {isRequired && (
              <FontText
                size={normalize(15)}
                color={'red'}
                pBottom={hp(0.9)}
                style={fontStyle}>
                {'*'}
              </FontText>
            )}
          </FontText>
        )}
        <View style={[styles.wrapper, style]}>
          {withLeftIcon ? leftIcon : null}
          <TextInput
            ref={el => {
              inputRef = el;
            }}
            textContentType="none"
            pointerEvents={pointerEvents}
            editable={inputEditable}
            value={value}
            textAlign={textAlign}
            autoComplete="off"
            autoCorrect={!!(autoCorrect && autoCorrect === true)}
            allowFontScaling={false}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeTextHandler}
            onSubmitEditing={onSubmitEditingHandler}
            blurOnSubmit={multiline ? false : blurOnSubmit}
            returnKeyType={returnKeyType}
            multiline={multiline}
            underlineColorAndroid="transparent"
            keyboardType={keyboardType}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            onFocus={onFocusHandler}
            onBlur={onBlur}
            onEndEditing={onEndEditing}
            autoFocus={autoFocus}
            caretHidden={caretHidden}
            contextMenuHidden={contextMenuHidden}
            selectTextOnFocus={selectTextOnFocus}
            onKeyPress={onKeyPress}
            style={[
              multiline ? styles.inputMultiline : null,
              styles.input,
              _inputStyle,
              inputStyle,
            ]}
          />
          {children}
          <TouchableOpacity onPress={onRightIconPress}>
            {withRightIcon ? rightIcon : null}
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

Input.defaultProps = {
  height: 46,
  fontSize: normalize(14),
  fontName: 'default',
  color: 'default',
  placeholder: 'Type something...',
  placeholderTextColor: colors.placeHolder,
  defaultValue: '',
  clearOnSubmit: false,
  blurOnSubmit: false,
  returnKeyType: 'default',
  multiline: false,
  multilineHeight: hp(10),
  autoCapitalize: null,
  editable: true,
  keyboardType: 'default',
  maxLength: null,
  secureTextEntry: false,
  onFocus: null,
  onBlur: null,
  autoFocus: false,
  textAlign: null,
  onChangeText: null,
  caretHidden: false,
  contextMenuHidden: false,
  selectTextOnFocus: false,
  willCheckPosition: true,
  withTitle: false,
  titleSize: normalize(16),
  withLeftIcon: false,
  withRightIcon: false,
  isRequired: false,
  pTop: wp(6),
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  inputMultiline: {
    textAlignVertical: 'top',
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: colors.lightGray2,
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: wp(3.5),
    // borderBottomWidth: 2,
    // borderColor: colors.lightGray2,
    justifyContent: 'space-between',
  },
});

export default Input;
