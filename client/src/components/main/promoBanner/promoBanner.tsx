import React, { type FC } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { type promoBannerType } from './promoBanner.type';
import { styles } from './promoBanner.style';

const PromoBanner: FC<promoBannerType> = ({ src, title }) => {
  return (
    <>
      {src && title && (
        <View style={styles.container}>
          <ImageBackground
            imageStyle={{ borderRadius: 16 }}
            style={styles.banner}
            source={{ uri: src }}
          />
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.promo}>Promo</Text>
            </View>
            <View style={{ position: 'relative' }}>
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  backgroundColor: 'black',
                  bottom: 0,
                }}
              />
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default PromoBanner;
