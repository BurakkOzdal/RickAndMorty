import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error';
import CharacterCard from '../../components/CharacterCard';
import useFetch from '../../hooks/useFetch';
import styles from './ChapterDetail.style';

function ChapterDetail({route, navigation}) {
  const {chapterId} = route.params;
  const {data, error, loading} = useFetch(
    `https://rickandmortyapi.com/api/episode/${chapterId}`,
  );

  if (loading) {
   return <Loading />;
  }
  if (error) {
    console.log(error);
   return <Error />;
  }

  function renderCharacter({item}) {
    return <CharacterCard item={item} navigation={navigation} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <View style={styles.inner_container}>
          <Text style={styles.titles}>Chapter Name</Text>
          <Text style={styles.datas}>{data.name}</Text>
          <Text style={styles.titles}>Episode</Text>
          <Text style={styles.datas}>{data.episode}</Text>
        </View>
        <Text style={styles.titles}>Air date</Text>
        <Text style={styles.datas}>{data.air_date}</Text>
      </View>
      <View style={styles.character_container}>
        <Text style={styles.character_container_title}> Characters </Text>
      </View>
      <FlatList data={data.characters} renderItem={renderCharacter} />
    </SafeAreaView>
  );
}

export default ChapterDetail;
