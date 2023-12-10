import React, { useEffect, useState } from 'react'
import MainLayout from '../../layout/mainLayout/mainLayout'
import FavoriteComponent from '../../components/favorite/favorite';
import { authorizedRequest } from '../../utils/queries';
import { favoriteUrl } from '../../utils/network';
import useUserStore from '../../modules/user/store';
import ToastModal from '../../components/generall/toastModal/toastModal';
import { ToastType } from '../../components/generall/toastModal/toastModal.type';
function Favorite () {
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const user = useUserStore((state) => state)
  const getFavoriteList = async () => {
    try {
      const list = await authorizedRequest(favoriteUrl, 'GET');
      user.updateUserData({ ...user, favorite: [...list.map((item: { value: string }) => item.value)] });
    } catch (err) {
      setError(true)
      setErrorText(String(err))
    }
  }
  useEffect(() => {
    getFavoriteList()
  }, [])
  return (
    <MainLayout background={false}>
      <ToastModal error={error} errorText={errorText} type={ToastType.error} />
      <FavoriteComponent />
    </MainLayout>
  );
}

export default Favorite
