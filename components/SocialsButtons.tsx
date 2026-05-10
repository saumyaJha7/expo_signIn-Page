import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function SocialButtons() {
  return (
    <View style={styles.wrapper}>

      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="facebook" size={28} color="#222" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <AntDesign name="google" size={28} color="#222" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <AntDesign name="instagram" size={28} color="#222" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignSelf: 'center',
    gap: 14,
    margin : 10,
  },

  iconButton: {
    width: 70,
    height: 70,
    borderRadius: 22,
    backgroundColor: '#f5f5f5',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#ddd',

    // shadow ios
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    // shadow android
    elevation: 3,
  },
});