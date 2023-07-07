/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';
import { wp } from '../../styles/responsiveScreen';

const BottomSheet = (props) => {
  const {height, withReactModal, withHandle, refName, autoClose, content} = props;

  const rednerContent = () => {
    return content;
  };

  return (
    <Modalize
      ref={refName}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        stickyHeaderIndices: [0],
        scrollEnabled: false,
        keyboardShouldPersistTaps: 'handled',
      }}
      disableScrollIfPossible
      adjustToContentHeight
      withReactModal={withReactModal || false}
      withHandle={withHandle}
      // modalHeight={height}
      modalStyle={styles.modalStyle}
      closeOnOverlayTap={autoClose}
      panGestureEnabled={autoClose}>
      {rednerContent()}
    </Modalize>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    borderTopLeftRadius: wp(4),
    overflow: 'hidden',
  },
});

export default BottomSheet;
