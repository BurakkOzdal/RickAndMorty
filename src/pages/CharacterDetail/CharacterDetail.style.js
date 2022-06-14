import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#B7E4F999",
        flex:1
    },
    img:{
        width:200,
        height:200,
        resizeMode:"contain",
        alignSelf:"center",
        marginTop:30,
        borderRadius:20
    },
    inner_container:{
        margin:18
    },
    titles:{
        color:"black",
        fontSize:25,
        fontWeight:"bold"
    },
    datas:{
        color:"black",
        fontSize:22,
        fontStyle:"italic",
        marginBottom:20,
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#aeaeae"
    },
})