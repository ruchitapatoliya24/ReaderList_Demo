import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/routes';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
