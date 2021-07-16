import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView,StyleSheet } from 'react-native'
import images from './Images'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Home = (props) => {
    return (
        <ScrollView>
            <SafeAreaView>
                {/* Header start  */}
                <View style={styles.Header}>
                    <Text style={styles.HeaderText}>Gallery</Text>
                </View>
                {/* Header end  */}

                {/* image layer start  */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {images.map((image, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => props.navigation.navigate('FullViewImage', { url: image.url })}>
                                <Image source={image.url} style={styles.imageStyle} />
                            </TouchableOpacity>
                        )
                    })
                    }
                </View>
                {/* image layer end  */}


            </SafeAreaView>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    Header:{ 
        height: 60, 
        backgroundColor: 'gray', 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    HeaderText:{ 
        fontSize: 20,
         color: '#000' 
        },
        imageStyle:{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 5,
            margin: 2
        }
})

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   Alert,
//   ScrollView,
//   FlatList,
// } from 'react-native';



// export default class Home extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {id:1, title: "Product 1",  count:4, image:"https://via.placeholder.com/400x200/FFB6C1/000000"},
//         {id:2, title: "Product 2",  count:4, image:"https://via.placeholder.com/400x200/87CEEB/000000"} ,
//         {id:3, title: "Product 3",  count:4, image:"https://via.placeholder.com/400x200/6A5ACD/000000"}, 
//         {id:4, title: "Product 4",  count:4, image:"https://via.placeholder.com/400x200/4682B4/000000"}, 
//         {id:5, title: "Product 5",  count:4, image:"https://via.placeholder.com/400x200/40E0D0/000000"}, 
//         {id:6, title: "Product 6",  count:4, image:"https://via.placeholder.com/400x200/008080/000000"}, 
//         {id:7, title: "Product 7",  count:4, image:"https://via.placeholder.com/400x200/FF6347/000000"}, 
//         {id:8, title: "Product 8",  count:4, image:"https://via.placeholder.com/400x200/4169E1/000000"},
//         {id:9, title: "Product 9",  count:4, image:"https://via.placeholder.com/400x200/6A5ACD/000000"},
//         {id:9, title: "Product 10", count:4, image:"https://via.placeholder.com/400x200/FA8072/000000"},
//       ]
//     };
//   }

//   addProductToCart = () => {
//     Alert.alert('Success', 'The product has been added to your cart')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList style={styles.list}
//           contentContainerStyle={styles.listContainer}
//           data={this.state.data}
//           horizontal={false}
//           numColumns={2}
//           keyExtractor= {(item) => {
//             return item.id;
//           }}
//           ItemSeparatorComponent={() => {
//             return (
//               <View style={styles.separator}/>
//             )
//           }}
//           renderItem={(post) => {
//             const item = post.item;
//             return (
//               <View style={styles.card}>
//                 <View style={styles.imageContainer}>
//                   <Image style={styles.cardImage} source={{uri:item.image}}/>
//                 </View>
//                 <View style={styles.cardContent}>
//                   <Text style={styles.title}>{item.title}</Text>
//                   <Text style={styles.count}>({item.count})</Text>
//                 </View>
//               </View>
//             )
//           }}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     marginTop:20,
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   listContainer:{
//     alignItems:'center'
//   },
//   separator: {
//     marginTop: 10,
//   },
//   /******** card **************/
//   card:{
//     marginVertical: 8,
//     backgroundColor:"white",
//     flexBasis: '45%',
//     marginHorizontal: 10,
//   },
//   cardContent: {
//     paddingVertical: 17,
//     justifyContent: 'space-between',
//   },
//   cardImage:{
//     flex: 1,
//     height: 150,
//     width: null,
//   },
//   imageContainer:{
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.32,
//     shadowRadius: 5.46,

//     elevation: 9,
//   },
//   /******** card components **************/
//   title:{
//     fontSize:18,
//     flex:1,
//     color:"#778899"
//   },
//   count:{
//     fontSize:18,
//     flex:1,
//     color:"#B0C4DE"
//   },
// }); 