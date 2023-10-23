import React, { type FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader: FC<{ appear: boolean; children?: React.ReactNode }> = ({ appear, children }) => {
  return (
    <>
      {appear
        ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
          )
        : (
            children
          )}
    </>
  );
};

export default Loader;
