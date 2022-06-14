import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './CharacterDetail.style';

function CharacterDetail({route}) {
  const {characterId} = route.params;
  const {data, error, loading} = useFetch(
    `https://rickandmortyapi.com/api/character/${characterId}`,
  );
  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
        <Image source={{uri: data.image}} style={styles.img} />
      <ScrollView>
        <View style={styles.inner_container}>
          <Text style={styles.titles}>Name</Text>
          <Text style={styles.datas}>{data.name}</Text>

          <Text style={styles.titles}>Gender</Text>
          <Text style={styles.datas}>{data.gender}</Text>

          <Text style={styles.titles}>Species</Text>
          <Text style={styles.datas}>{data.species}</Text>

          <Text style={styles.titles}>Origin</Text>
          <Text style={styles.datas}>{data.origin?.name}</Text>

          <Text style={styles.titles}>Location</Text>
          <Text style={styles.datas}>{data.location?.name}</Text>

          <Text style={styles.titles}>Status</Text>
          <Text style={styles.datas}>{data.status}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default CharacterDetail;
