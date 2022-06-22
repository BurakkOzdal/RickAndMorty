import React from 'react'
import { FlatList, SafeAreaView} from 'react-native'
import Loading from "../../components/Loading"
import Error from "../../components/Error"
import ChapterCard from "../../components/ChapterCard"
import useFetch from '../../hooks/useFetch'
import styles from "./Home.style"

function Home({navigation}) {
    const{data, error, loading}=useFetch('https://rickandmortyapi.com/api/episode')
    if (loading) {
       return <Loading/>
    }
    if (error) {
        console.log(error)
        return <Error/>
         
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