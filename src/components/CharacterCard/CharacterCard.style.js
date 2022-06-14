import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button:{
        backgroundColor:"#FAE48B99",
        margin:13,
        borderRadius:15,
        borderWidth:0.5,
        borderColor:"white"
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
    },
    img:{
        width:100,
        height:100,
        resizeMode:"contain",
        borderRadius:50
    },
    title:{
        fontSize:20,
        color:"black",
        marginLeft:20,
        justifyContent:"center",
        flex:1
    },
    arrow:{
        width:25,
        height:25,
        resizeMode:"contain",
        marginRight:10
    }
})