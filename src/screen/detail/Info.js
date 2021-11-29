import React from 'react'
import { View, Text, Dimensions, ScrollView, Animated, Button } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const Info = (props) => {
    const Y = new Animated.Value(0)

    const onScroll = (event) => {
        console.log(event.nativeEvent.contentOffset.y)
    }

    return (
        <ScrollView style={{ width: Width, height: Height+1000, backgroundColor: 'pransparent', position: 'absolute' }} onScroll={onScroll} scrollEventThrottle={16} >
            <Button title="!23"  />
            <Animated.View style={{
                transform: [{translateY: Y}]
            }} ><Text>1234</Text></Animated.View>
        </ScrollView>
    )
}

export default Info
