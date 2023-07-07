import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontText from '../../components/FontText';
import {normalize, wp} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';

const TodoListItem = ({item}) => {
  return (
    <View style={styles.list}>
      <FontText fontWeight={'600'} size={normalize(16)} color={'black'}>
        {item.title}
      </FontText>
      <FontText fontWeight={'400'} size={normalize(12)} color={'black'}>
        {`Status: ${item.completed ? 'Completed': 'Failed'}`}
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

export default TodoListItem;
