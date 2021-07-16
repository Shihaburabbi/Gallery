import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import images from './Images'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Home = (props) => {
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {images.map((image, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => props.navigation.navigate('FullViewImage', { url: image.url })}>
                                <Image source={image.url} style={{
                                    height: deviceHeight / 3,
                                    width: deviceWidth / 3 - 6,
                                    borderRadius: 5,
                                    margin: 2
                                }} />
                            </TouchableOpacity>
                        )
                    })
                    }
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Home
