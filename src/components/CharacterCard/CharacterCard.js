import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './CharacterCard.style';

function CharacterCard({item, navigation}) {
  const {data, error, loading} = useFetch(item);

  function handleCharacter() {
    navigation.navigate('CharacterDetailScreen', {characterId: data.id});
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleCharacter}>
      <View style={styles.container}>
        <Image source={{uri:data.image}} style={styles.img}/>
        <Text style={styles.title}>{data.name}</Text>
        <Image source={require("../../assets/next.png")} style={styles.arrow}/>
      </View>
    </TouchableOpacity>
  );
}

export default CharacterCard;
