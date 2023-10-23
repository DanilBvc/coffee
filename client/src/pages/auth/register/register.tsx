import React, { useCallback, useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import ToastManager, { Toast } from 'toastify-react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
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
      Toast.error(`${String(err).slice(0, 20)}...`);
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

  const handleImageSelect = useCallback(async () => {
    try {
      const file = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      const { assets } = file;
      if (file.canceled) {
        return;
      }
      if (!assets) {
        return;
      }
      const asset = assets[0];
      const fileName = asset.uri.replace(/^.*[\\\/]/, '');
      const ext = asset.uri.substring(asset.uri.lastIndexOf('.') + 1);
      const formData: FormData = new FormData();
      formData.append('file', {
        uri: asset.uri,
        name: fileName,
        type: asset.type ? `image/${ext}` : `video/${ext}`,
      } as unknown as Blob);

      const userAvatar = await fetch(saveAvatar, {
        method: 'POST',
        headers: {
          'content-type': 'multipart/form-data',
        },
        body: formData,
      });
      const result = await userAvatar.json();
      setUserData((prev) => ({ ...prev, avatar: result.link }));
    } catch (err) {
      Toast.error(`${String(err).slice(0, 20)}...`);
    }
  }, []);

  return (
    <BaseLayout style={styles.layout}>
      <AuthHeader />
      <ToastManager />
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
