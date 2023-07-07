import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/colors';
import BottomSheet from '../../components/BottomSheet';
import Button from '../../components/Button';
import FontText from '../../components/FontText';
import Header from '../../components/Header';
import {hp, normalize, wp} from '../../styles/responsiveScreen';
import {list1Api, list2Api} from '../../api/homeApis';
import {useDispatch} from 'react-redux';
import UserListItem from './UserListItem';
import TodoListItem from './TodoListItem';
import {resetNavigate} from '../../navigation/navigationHelper';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [list1, setList1] = useState(false);
  const [list2, setList2] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const modalizeRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    modalizeRef.current.open();
  }, []);

  const goForList1 = async () => {
    setDataSource([]);
    setList2(false);
    setList1(true);
    modalizeRef.current?.close();
    setLoading(true);
    const response = await list1Api(dispatch);
    console.log('error,...', response);
    if (!response?.error) {
      setTimeout(() => {
        setLoading(false);
        setDataSource(response);
      }, 1000);
    } else {
      console.log('error,...', response.message);
      setLoading(false);
    }
  };

  const goForList2 = async () => {
    setDataSource([]);
    setList1(false);
    setList2(true);
    modalizeRef.current?.close();
    setLoading(true);
    const response = await list2Api(dispatch);
    if (!response?.error) {
      setTimeout(() => {
        setLoading(false);
        setDataSource(response);
      }, 1000);
    } else {
      console.log('error,...', response.message);
      setLoading(false);
    }
  };

  const FlatListSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Home'}
        rightTitle={'LogOut'}
        onRightPress={() => resetNavigate('Login')}
        onLeftPress={() => modalizeRef.current?.open()}
      />
      {list1 && (
        <FlatList
          data={dataSource}
          ItemSeparatorComponent={FlatListSeparator}
          renderItem={({item}) => {
            return <UserListItem item={item} />;
          }}
          keyExtractor={item => item.id.toString()}
        />
      )}
      {list2 && (
        <FlatList
          data={dataSource}
          ItemSeparatorComponent={FlatListSeparator}
          renderItem={({item}) => {
            return <TodoListItem item={item} />;
          }}
          keyExtractor={item => item.id.toString()}
        />
      )}
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
          <Text style={{fontSize: 16, color: 'red'}}>Loading Data...</Text>
        </View>
      )}
      <BottomSheet
        refName={modalizeRef}
        height={hp(56)}
        autoClose={false}
        withHandle
        withReactModal
        content={
          <View
            style={{
              flex: 1,
              paddingHorizontal: wp(6),
              paddingVertical: wp(10),
            }}>
            <Button onPress={goForList1} style={styles.btn} bgColor={'red'}>
              <FontText size={normalize(15)} color="white" fontWeight={'700'}>
                {'List 1'}
              </FontText>
            </Button>
            <Button onPress={goForList2} style={styles.btn} bgColor={'red'}>
              <FontText size={normalize(15)} color="white" fontWeight={'700'}>
                {'List 2'}
              </FontText>
            </Button>
            <Button
              onPress={() => modalizeRef.current?.close()}
              style={styles.btn}
              bgColor={'transparent'}>
              <FontText size={normalize(15)} color="red" fontWeight={'700'}>
                {'Close'}
              </FontText>
            </Button>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.background,
  },
  btn: {
    marginTop: wp(5),
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});

export default Home;
