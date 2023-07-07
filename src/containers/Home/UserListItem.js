import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontText from '../../components/FontText';
import {normalize, wp} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';

const UserListItem = ({item}) => {
  return (
    <View style={styles.list}>
      <FontText fontWeight={'600'} size={normalize(16)} color={'black'}>
        {item.name}
      </FontText>
      <FontText fontWeight={'400'} size={normalize(14)} color={'black'}>
        {item.email}
      </FontText>
      <FontText fontWeight={'400'} size={normalize(12)} color={'black'}>
        {item.company.name}
      </FontText>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: wp(3),
    paddingHorizontal: wp(5),
    backgroundColor: colors.background,
  },
});

export default UserListItem;
