import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import styled from 'styled-components'
import { MainColor } from '../../components/Color'
import Like from '../../asset/common/list_icon/list_icon_4_like.svg';
import IllHot from '../../asset/common/5_illustration/ill_hot.svg';

import List from '../../components/List'
import { useSelector } from 'react-redux';

const Width = Dimensions.get('window').width

const FilterContainer = styled.View`
    height:48px;
    width:100%;
    background-color:white;
`
const TitleContainer = styled.View`
    width:100%;
    height: 96px;
    background-color: transparent;
    padding: 0 16px;
    justify-content:flex-end;
`
const TitleContainerTitle = styled.View`
    width:100%;
    height: 50%;
    justify-content:flex-end;
    margin-bottom: 8px;
`
const Contents = styled.ScrollView`

`
const BackGroundImage = styled.View`
    width: 88px;
    height: 88px;
    background-color: wheat;
    justify-content: flex-end;
    padding: 4px;
    border-radius:2px;
    margin-right: 8px;

`
const DDay = styled.View`
    position: absolute;
    top:0;
    left:0;
    height:24px;
    width:54px;
    background-color: black;
    align-items:center;
    justify-content:center;
    border-top-left-radius: 2px;

`
const Day = styled.Text`
    color: ${MainColor.BLACKBOX};
`
const Content = styled.View`
    width: ${Width - 88 - 40}px;
    height:100%;
    background-color:wheat;
`
const Title = styled.Text`
    margin-right: 8px;
`
const TagContainer = styled.View`
    width: 35px;
    height: 16px;
    background-color: ${MainColor.Banana};
    border-radius: 2px;
`

const Tag = styled.Text`
    color: ${MainColor.BANANABOX};
`



const HotGroup = () => {
    const user = useSelector( state => state.loginout.user)

    const [ loading, setLoading ] = useState(true)
    const [ lists, setLists ] = useState()
    const [ time, setTime ] = useState(new Date())

    const getAllLists = async() => {
        const data = await fetch('http://192.168.1.80:8080/room/getList', {
                method: 'post',
                headers: {
                  "Accept": 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "memberID" : "User1",      // 방 생성하는 사람 id(방장)
                    })
            }).then( res => res.json() ).catch( e => console.log(e))
            setLists(data)

            setLoading(false)
    }
    useEffect( () => {
        getAllLists()
    }, [])

    return (
        <ScrollView bounces={false} >
            <FilterContainer>
                <Text>필터 넣을거임</Text>
            </FilterContainer>
            <TitleContainer>
                <TitleContainerTitle>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontFamily: 'Dream', fontSize: 20, height:24}} >실시간 </Text>
                        <Text style={{ fontFamily: 'Dream', fontSize: 20, height:24, color: MainColor.Banana}} >HOT 10</Text>
                    </View>
                    <Text style={{ height: 20, fontFamily: 'Noto400', fontSize:10 }} >11.09 07시 02분 기준</Text>
                </TitleContainerTitle>
                <View style={{ position: 'absolute', right: 16, bottom: -4 }} >
                <IllHot/>
                </View>
            </TitleContainer>

            {loading 
              ? 
                null 
              : 
              lists.map( (res, index) => (
                  <List lists={res} key={index} />
              ) )
            }
            <View style={{ height:50 }} />
        </ScrollView>
    )
}

export default HotGroup
