import React, { useState, type FC } from 'react'
import DetailsLayout from '../../layout/detailsLayout/detailsLayout'
import useUserStore from '../../modules/user/store'
import Avatar from '../../components/generall/avatar/avatar'
import { Pressable, Text, View } from 'react-native'
import TextField from '../../components/generall/textField/textField'
import { validateEmail, validateUserName } from '../../utils/regex'
import Button from '../../components/generall/button/button'
import { PenSvg } from '../../assets/images/icons'
import { authorizedRequest, unauthorizedRequest } from '../../utils/queries'
import { logoutUrl, updateUserData } from '../../utils/network'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { styles } from './profile.style'
import UsePicImage from '../../hooks/usePicImage'
import ToastModal from '../../components/generall/toastModal/toastModal'
import { ToastType } from '../../components/generall/toastModal/toastModal.type'
const Profile: FC = () => {
  const user = useUserStore(state => state)
  const [userName, setUserName] = useState(user.userName);
  const [mail, setMail] = useState(user.mail);
  const { link, error, errorText, handleImageSelect, updateError } = UsePicImage({ endpoint: '' })
  const navigation = useNavigation()
  const handleNavigate = (route: string) => {
    navigation.navigate(route as never);
  };

  const updateUser = async () => {
    try {
      const updUser = await authorizedRequest(updateUserData, 'PATCH', 'accessToken', {
        userName,
        mail,
      });
      user.updateUserData(updUser)
    } catch (err) {
      updateError(true, String(err))
    }
  }
  const signOut = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (refreshToken) {
        await unauthorizedRequest(logoutUrl, 'DELETE', {
          refreshToken,
        });
        handleNavigate('Home');
      }
    } catch (err) {
      updateError(true, String(err))
    }
  }
  return (
    <DetailsLayout>
      <ToastModal error={error} errorText={errorText} type={ToastType.error} />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Avatar url={user.avatar} style={styles.avatar} />
          <Pressable style={styles.penContainer} onPress={handleImageSelect}>
            <PenSvg />
          </Pressable>
        </View>
        <Text style={styles.text}>{userName}</Text>
        <Text style={styles.text}>{mail}</Text>
        <TextField
          value={userName}
          onChange={setUserName}
          title={'userName'}
          placeholder={'please add your userName'}
          validation={validateUserName}
          errorMessage={'incorrect userName format'}
          eye={false}
        />
        <TextField
          value={mail}
          onChange={setMail}
          title={'mail'}
          placeholder={'please add your mail address'}
          validation={validateEmail}
          errorMessage={'incorrect mail format'}
          eye={false}
        />
        <Button onPress={updateUser} title={'Submit'} />
        <Button onPress={signOut} title={'Logout'} />
      </View>
    </DetailsLayout>
  );
}

export default Profile
