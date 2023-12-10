import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Toast } from 'toastify-react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthHeader from '../../../components/auth/authHeader/authHeader';
import TextField from '../../../components/generall/textField/textField';
import BaseLayout from '../../../layout/baseLayout/baseLayout';
import { styles } from '../login/login.style';
import { unauthorizedRequest } from '../../../utils/queries';
import { registerUrl, saveAvatar } from '../../../utils/network';
import { validateEmail, validatePassword, validateUserName } from '../../../utils/regex';
import useUserStore from '../../../modules/user/store';
import Loader from '../../../components/generall/loader/loader';
import Button from '../../../components/generall/button/button';
import UsePicImage from '../../../hooks/usePicImage';
import ToastModal from '../../../components/generall/toastModal/toastModal';
import { ToastType } from '../../../components/generall/toastModal/toastModal.type';

const defaultRegisterData = {
  mail: '',
  avatar: '',
  password: '',
  userName: '',
};

function Register () {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(defaultRegisterData);
  const [loading, setLoading] = useState(false);
  const { link, error, handleImageSelect, errorText, updateError } = UsePicImage({ endpoint: saveAvatar });
  const { userName, mail, password, avatar } = userData;
  const updateUserData = useUserStore((state) => state.updateUserData);
  // redirect
  const handleNavigate = (route: string) => {
    navigation.navigate(route as never);
  };
  const clearForm = () => {
    setUserData(defaultRegisterData);
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await unauthorizedRequest(registerUrl, 'POST', userData);
      await Toast.success('Success');
      updateUserData(response.userData);
      await AsyncStorage.setItem('accessToken', response.tokens.accessToken);
      clearForm();
      handleNavigate('Main');
    } catch (err) {
      updateError(true, String(err));
    } finally {
      setLoading(false);
    }
  };

  // state handlers
  const handlePasswordChange = (value: string) => {
    setUserData((prev) => ({ ...prev, password: value }));
  };

  const handleUserNameChange = (value: string) => {
    setUserData((prev) => ({ ...prev, userName: value }));
  };

  const handleEmailChange = (value: string) => {
    setUserData((prev) => ({ ...prev, mail: value }));
  };

  useEffect(() => {
    if (link) {
      setUserData((prev) => ({ ...prev, avatar: link }));
    }
  }, [link])

  useEffect(() => {
    if (error) {
      updateError(true, String(error))
    }
  }, [error]);

  return (
    <BaseLayout style={styles.layout}>
      <AuthHeader />
      <ToastModal error={false} errorText={errorText} type={ToastType.error} />
      <TextField
        value={userName}
        onChange={handleUserNameChange}
        title="User name"
        placeholder="Enter your name"
        validation={validateUserName}
        errorMessage="Incorrect user name format"
        eye={false}
      />

      <TextField
        value={mail}
        onChange={handleEmailChange}
        title="E-mail"
        placeholder="Enter your email"
        validation={validateEmail}
        errorMessage="Incorrect email format"
        eye={false}
      />
      <TextField
        value={password}
        onChange={handlePasswordChange}
        title="Password"
        placeholder="Enter your password"
        validation={validatePassword}
        errorMessage="Incorrect password format"
        eye
      />
      <Button
        onPress={handleImageSelect}
        title="select avatar"
        additionalStyles={styles.marginTop}
      />
      {avatar && <Image width={100} height={100} source={{ uri: avatar }} />}
      <Button title="Sign up" onPress={signUp} additionalStyles={styles.marginTop} />
      <Loader appear={loading} />
      <View style={[styles.centerText, styles.marginTop]}>
        <Text>Already have an account? </Text>
        <Pressable
          onPress={() => {
            handleNavigate('Login');
          }}
        >
          <Text style={styles.greenText}>Sign in</Text>
        </Pressable>
      </View>
    </BaseLayout>
  );
}
export default Register;
