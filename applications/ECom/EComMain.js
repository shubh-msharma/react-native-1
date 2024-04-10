import { Text,StyleSheet, View,FlatList, Image } from "react-native"
import {useState,useEffect} from 'react'
const EComMain = () => {

    useEffect(()=>{
        getData()
    },[])
    const [products,setProduct] = useState([])
    const getData = () => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json=>{
            setProduct(os=>json)
        })
    }

    return (
        <HorizontalList pdtList={products}/>
        // <VerticallList pdtList={products}/>
        // <View style = {styles.container}>

        // </View>
    )
}

const styles = StyleSheet.create({

    hImage:{
        height:150,
        width:100,
        alignSelf:'center'
    },
    hItemCard:{
        backgroundColor:'white',
        width:150,
        height:250,
        elevation:20,
        marginHorizontal:3,
        paddingHorizontal:4,
        marginVertical:5
    },
    hPdtDtls:{

    },
    hTtlAndDesc:{
        height:69
    },
    hPrice:{
        fontSize:20,
        fontWeight:'600',
        color:'green'
    },
    hPdtTitle:{
        fontWeight:'600',
    },
    hListContainer:{
        marginTop:30
    },



    container:{
        flex:1,
        // paddingTop:20,
        // paddingHorizontal:10,
        // backgroundColor:'red',
        marginVertical:18,
        marginHorizontal:5
    },
    productItemCard:{
        width:'97%',
        height:150,
        marginBottom:5,
        backgroundColor:'#ccd2db',
        alignSelf:'center',
        flexDirection:'row',
        borderRadius:5,
        borderWidth:1,
        borderColor:'grey'
    },
    pdtImage:{
        width:100,
        height:'100%'
    },
    pdtDtls:{
        paddingHorizontal:3,
        position:'relative'
    },
    price:{
        fontSize:20,
        fontWeight:'800',
        color:'green',
        position:'absolute',
        right:-30,
        bottom:0
    }
})


const VerticallList = ({pdtList}) => {
    return (
        <View style = {styles.container}>
            <FlatList
                data={pdtList}
                renderItem = {
                    (({item,index})=>{
                        return <View style = {styles.productItemCard}>
                            <Image style = {styles.pdtImage} source={{uri:item.image}}/>
                            <View style = {styles.pdtDtls}>
                                <Text>{item.title.length > 30 ? item.title.substring(0,30) + "...":item.title}</Text>
                                <Text>{item.description.length > 30 ? item.description.substring(0,35)+ "...":item.description}</Text>
                                <Text style = {styles.price}>{'$' + item.price}</Text>
                            </View>
                        </View>
                    })
                }
            />
        </View>
    )
}

const HorizontalList = ({pdtList}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.hListContainer}>
                    <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    data={pdtList}
                    renderItem = {({item,index})=>{
                        return <View style = {styles.hItemCard}>
                            <Image style = {styles.hImage} source={{uri:item.image}}/>
                            <View style = {styles.hPdtDtls}>
                                <View style = {styles.hTtlAndDesc}>
                                    <Text style = {styles.hPdtTitle}>{item.title.length > 30 ? item.title.substring(0,30)+ "..." : item.title}</Text>
                                    <Text>{item.description.length > 30 ? item.description.substring(0,30) + "..." : item.description}</Text>
                                </View>
                                <View>
                                    <Text style= {styles.hPrice}>{'$'+item.price}</Text>  
                                </View>
                            </View>
                        </View>
                    }}
                />
            </View>
        </View>
        
    );
}

export default EComMain

/*

{
"category": "women's clothing", 
"description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort", 
"id": 19, 
"image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg", 
"price": 7.95, 
"rating": {"count": 146, "rate": 4.5}, 
"title": "Opna Women's Short Sleeve Moisture"
}


*/