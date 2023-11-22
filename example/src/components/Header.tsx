import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const logo = require('../../assets/logo.jpg');

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: logo}} />
      <View style={styles.title_wrapper}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 18,
    textAlign: 'center',
    position: 'relative',
    maxHeight: 60,
  },
  logo: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  title_wrapper: {
    width: '100%',
    minHeight: 40,
  },
  title: {
    height: '100%',
    fontSize: 14,
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Header;
