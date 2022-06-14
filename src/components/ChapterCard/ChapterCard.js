import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './ChapterCard.style';

function ChapterCard({data, navigation}) {
  function handleChapter() {
    navigation.navigate('ChapterDetailScreen', {chapterId: data.id});
  }
  return (
    <TouchableWithoutFeedback onPress={handleChapter}>
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Image source={require("../../assets/rickandmorty.jpg")} style={styles.img}/>
          <View style={styles.inner_container}>
            <Text style={styles.name}>Chapter Name: {data.name}</Text>
            <Text style={styles.episode}>Episode: {data.episode}</Text>
          </View>
          <Text style={styles.date}>Air date: {data.air_date}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ChapterCard;
