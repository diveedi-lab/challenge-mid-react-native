import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { getGalleryPictures } from './mock/api';
import { useGalleryPictures } from './hooks/useGalleryPictures';
import Header from './components/Header';

export default function App() {
  const galleryPictures = useGalleryPictures(getGalleryPictures);

  return (
    <View style={styles.container}>
      <Header title={'React Native Challenge'} />
      <View style={styles.gallery_wrapper}>
        {galleryPictures.map(item => (
          <View key={item.id} style={styles.item_wrapper}>
            <Image style={styles.image} source={{uri: item.url}} />
            <View style={styles.title_wrapper}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingHorizontal: '4%'
  },
  gallery_wrapper: {
    paddingVertical: 10,
    width: '100%'
  },
  item_wrapper: {
    marginVertical: 30,
    height: '100%',
    maxHeight: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8
  },
  title_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '100%'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});
