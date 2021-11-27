import React, { Children, useEffect, useState } from 'react'
import { View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import D_Day from './D_Day'
import Mark from '../asset/common/4_tag/mark.svg'
import Like from '../asset/common/list_icon/list_icon_4_like.svg';
import { MainColor } from './Color';
import axios from 'axios';
const Width = Dimensions.get('window').width


const IngImage = ({lists}) => {
    const [ image, setImage ] = useState()
    const getAllLists = async(lists) => {
        const data = await axios.get(`http://3.35.235.33:8080/file/getImg/${lists}`)
        setImage(data.data)
    }
    useEffect(() => {
        getAllLists(lists)
    }, [])

    return (
        <ImageBackground 
            style={{
                width:Width*0.33,
                height:'100%',
                backgroundColor: 'wheat',
                borderBottomLeftRadius: 2,
                borderBottomRightRadius: 2,
                borderTopRightRadius: 2,
                borderTopLeftRadius: 2,
                overflow: 'hidden',
            }}
            resizeMode='cover' 
            source={{ uri: `${image}` }} >
            </ImageBackground>
    )
}

export default IngImage
