import React, { type FC } from 'react';
import { Image, Text, View } from 'react-native';
import { StarSvg } from '../../../assets/images/icons';
import { type productItem } from '../../../modules/products/store';
import MilkFrame from '../../../assets/images/MilkFrame.png';
import CoffeeFrame from '../../../assets/images/CoffeeFrame.png';
import { styles } from './productDetails.style';

const ProductDetails: FC<{ product: productItem }> = ({ product }) => {
  const { picture, stars, starsCount, description, title } = product;
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: picture }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.rating}>
            <StarSvg />
            <Text style={styles.stars}>{stars}</Text>
            <Text style={styles.starsCount}>({starsCount})</Text>
          </View>
        </View>
        <View style={styles.categories}>
          <Image source={MilkFrame} />
          <Image source={CoffeeFrame} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
