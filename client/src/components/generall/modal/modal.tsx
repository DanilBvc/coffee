import React, { type FC } from 'react';
import { Pressable, View, Modal, type ModalProps } from 'react-native';
import { CrossSvg } from '../../../assets/images/icons';
import { styles } from './modal.style';

const ModalWindow: FC<{
  children: React.ReactNode;
  modalProps: ModalProps;
  close: () => void;
}> = ({ children, modalProps, close }) => {
  return (
    <Modal {...modalProps}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.cross} onPress={close}>
            <CrossSvg />
          </Pressable>
          <View style={styles.childrenContainer}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalWindow;
