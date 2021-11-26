import React from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const Info = (props) => {
    console.log(props)
    return (
        <ScrollView style={{ width: Width, height: Height, backgroundColor: 'white', }} >
            <Text>1234</Text>
        </ScrollView>
    )
}

export default Info
