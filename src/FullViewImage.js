import React from 'react'
import { View, Text, SafeAreaView, ImageBackground, Dimensions } from 'react-native'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const FullViewImage = (props) => {
    return (
        <SafeAreaView>
            <ImageBackground source={props.route.params.url} style={{
                height: deviceHeight,
                width: deviceWidth,
            }} />


        </SafeAreaView>
    )
}

export default FullViewImage
