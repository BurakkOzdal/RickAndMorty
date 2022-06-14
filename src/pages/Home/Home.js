import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import Loading from "../../components/Loading"
import Error from "../../components/Error"
import ChapterCard from "../../components/ChapterCard"
import useFetch from '../../hooks/useFetch'
import styles from "./Home.style"

function Home({navigation}) {
    const{data, error, loading}=useFetch('https://rickandmortyapi.com/api/episode')
    console.log(data.results)

    if (loading) {
        <Loading/>
    }
    if (error) {
        <Error/>
        console.log(error)
    }

    function renderResult({item}) {
        return <ChapterCard data={item} navigation={navigation}/>
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={data.results} renderItem={renderResult}/>
        </SafeAreaView>
    )
}
export default Home