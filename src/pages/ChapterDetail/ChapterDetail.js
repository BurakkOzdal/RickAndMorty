import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import useFetch from '../../hooks/useFetch'
import styles from "./ChapterDetail.style"

function ChapterDetail({route,navigation}) {
    const{chapterId}=route.params
    const {data,error,loading}=useFetch(`https://rickandmortyapi.com/api/episode/${chapterId}`)
    console.log(data)
    return(
        <SafeAreaView>
            <View>
                <Text> Bölüm Detay  {chapterId} </Text>
            </View>
        </SafeAreaView>
    )
}

export default ChapterDetail