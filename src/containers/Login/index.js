import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors';
import FontText from '../../components/FontText';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {hp, normalize, wp} from '../../styles/responsiveScreen';
import { resetNavigateTo } from '../../navigation/navigationHelper';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  const onLoginPress = async () => {
    resetNavigateTo(navigation, 'Home');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <FontText fontWeight={'700'} size={normalize(24)}>
            Login
          </FontText>
          <Input
            ref={emailRef}
            height={hp(5.5)}
            fontSize={normalize(16)}
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder={'Email Address'}
            onSubmit={() => passwordRef?.current.focus()}
            style={styles.inputStyle}
          />
          <Input
            ref={passwordRef}
            height={hp(5.5)}
            fontSize={normalize(16)}
            returnKeyType="done"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            placeholder={'Password'}
            style={styles.inputStyle}
            blurOnSubmit
          />
          <Button onPress={onLoginPress} style={styles.btn} bgColor={'red'} fontWeight={'700'}>
            <FontText size={normalize(15)} color="white">
              {'Login'}
            </FontText>
          </Button>
          <View style={styles.row}>
            <FontText
              size={normalize(14)}
              color={'black'}
              textAlign={'center'}>
              {'Don`t have an account?'}
            </FontText>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <FontText
                size={normalize(14)}
                color={'red'}
                fontWeight={'700'}
                pTop={wp(2.5)}
                pBottom={wp(2.5)}
                pLeft={5}>
                {'Sign Up'}
              </FontText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: wp(5),
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: colors.white,
    marginTop: wp(5),
  },
  btn: {
    marginTop: wp(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
