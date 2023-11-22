import type { ImageStyle, StyleProp } from 'react-native';
import type { IResourceResolver } from '../core/resolver/IResourceResolver';
import { View } from 'react-native';
import React from 'react';

interface CachedNetworkImageProps {
  styles?: StyleProp<ImageStyle>;
  resolver?: IResourceResolver;
  url: string;
}

export const CachedNetworkImage = (_props: CachedNetworkImageProps) => {
  return (
    <View></View>
  );
};
