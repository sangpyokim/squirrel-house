import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { View, Image, Button } from 'react-native'
import D_Day from '../../components/D_Day'


const Mypage = () => {
    const [ uri, setUri ] = useState()

        const getAllLists = async(room) => {
            const data = await axios.get('http://3.35.235.33:8080/file/getImg/1')
            setUri(data.data)
        }
      
    return (
        <View>
            <Button title="123" onPress={() => getAllLists()} />
            <Image 
                style={{ height: 250, width: 250 }}
                source={{ uri: uri }}
                resizeMode= 'cover'
            /> 
            <D_Day endDate={"2021-12-25"} /> 
        </View>
    )
}

export default Mypage
