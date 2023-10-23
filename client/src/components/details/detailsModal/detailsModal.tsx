import React, { type FC } from 'react'
import { View, ImageBackground, Button, Text } from 'react-native';
import ModalWindow from '../../generall/modal/modal';
import { type detailsModalType } from './detailsModal.type';
import confirmationImage from '../../../assets/images/confirmation.png'
import { styles } from './detailsModal.style';
const DetailsModal: FC<detailsModalType> = ({ open, closeRedirect, close, date }) => {
  return (
    <ModalWindow
    modalProps={{
      animationType: 'slide',
      transparent: true,
      visible: open,
      onRequestClose: close,
    }}
    close={close}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalTextContainer}>
      <Text style={styles.title}>Your order is confirmed</Text>
      <Text style={styles.text}>Thank you for shopping with us Your order will reach you on {date}.</Text>
      </View>
      <ImageBackground style={styles.img} source={confirmationImage}/>
      <Button
      color={'#95D0A9'}
        onPress={closeRedirect}
        title={'HOME'}
      />
    </View>
  </ModalWindow>
  )
}

export default DetailsModal
