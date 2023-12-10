import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailsLayout from '../../layout/detailsLayout/detailsLayout';
import useProductStore, { type productItem } from '../../modules/products/store';
import HeartButton from '../../components/generall/heartButton/heartButton';
import ProductDetails from '../../components/details/productDetails/productDetails';
import ExpandableText from '../../components/generall/expandableText/expandableText';
import CheckBox from '../../components/generall/checkBox/checkBox';
import BottomSection from '../../components/generall/bottomSection/bottomSection';
import { styles } from './detail.style';
import { authorizedRequest } from '../../utils/queries';
import { createOrder, favoriteUrl } from '../../utils/network';
import useUserStore from '../../modules/user/store';
import Button from '../../components/generall/button/button';
import DetailsModal from '../../components/details/detailsModal/detailsModal';
import { getDateFrom } from '../../utils/dateAndTime';
function Detail () {
  const updateUserData = useUserStore((state) => state.updateUserData);
  const favorite = useUserStore((state) => state.favorite);
  const [product, setProduct] = useState<productItem | null>(null);
  const [orderDate, setOrderDate] = useState('');
  const [size, setSize] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const route = useRoute();
  const productId = (route.params as { id: string }).id;
  const navigation = useNavigation();
  const updateSize = (size: string) => {
    setSize(size);
  };
  useEffect(() => {
    if (productId) {
      const foundProduct = useProductStore
        .getState()
        .products.find((product) => product._id === productId);
      setProduct(foundProduct ?? null);
    }
  }, [productId]);
  const favoriteHandler = async () => {
    try {
      const updatedUser = await authorizedRequest(favoriteUrl, 'POST', 'accessToken', {
        id: productId,
      });
      updateUserData(updatedUser);
    } catch (err) {
      console.log(err);
      console.log(`${String(err).slice(0, 20)}...`);
    }
  };

  const sendOrder = async () => {
    try {
      if (product) {
        return await authorizedRequest(createOrder, 'POST', 'accessToken', product);
      }
    } catch (err) {
      console.log(`${String(err).slice(0, 20)}...`);
    }
  };

  const active = useMemo(() => {
    return favorite.includes(productId);
  }, [productId, favorite]);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const showModal = () => {
    setModalIsOpen(true);
  };
  const handleNavigate = (route: string) => {
    navigation.navigate(route as never);
  };
  const send = async () => {
    const order = await sendOrder();
    const date = getDateFrom(order.createdAt);
    setOrderDate(date);
    showModal();
  };

  return (
    <>
      <DetailsModal
        close={closeModal}
        open={modalIsOpen}
        closeRedirect={() => {
          handleNavigate('Main');
        }}
        date={orderDate}
      />
      <DetailsLayout>
        {product
          ? (
          <>
            <View style={styles.container}>
              <ProductDetails product={product} />
              <Text style={styles.title}>Description</Text>
              <ExpandableText text={product.fullDescription} length={100} />
              <Text style={[styles.title, styles.titleSize]}>Size</Text>
              <CheckBox
                optionList={product.availableSizes}
                horizontal={false}
                update={updateSize}
                activeItems={[size]}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 30 }}>
              <Button additionalStyles={{ width: '50%' }} onPress={send} title="Buy Now" />
            </View>
          </>
            )
          : (
          <Text>Product not found</Text>
            )}
      </DetailsLayout>

      <BottomSection>
        <View style={styles.detailSection}>
          <View>
            <Text>Price</Text>
            <Text>$ {product ? product.price : ''}</Text>
          </View>
          <Pressable onPress={favoriteHandler}>
            <HeartButton active={active} />
          </Pressable>
        </View>
      </BottomSection>
    </>
  );
}

export default Detail;
