import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { MainColor } from '../../components/Color'
import IllHot from '../../asset/common/5_illustration/ill_hot.svg';

import List from '../../components/List'
import { useSelector } from 'react-redux';

import Filter from '../../asset/5_page/icon_filter.svg'

const Width = Dimensions.get('window').width

const FilterContainer = styled.View`
    height:48px;
    width:100%;
    background-color:white;
    justify-content:center;
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



const HotGroup = ({navigation}) => {
    const user = useSelector( state => state.loginout.user)

    const [ loading, setLoading ] = useState(true)
    const [ lists, setLists ] = useState()
    const [ focused, setFocused ] = useState(true)
    const [ short, setShort ] = useState(false)
    const [ long, setLong ] = useState(false)


    const getAllLists = async() => {

        const data = await fetch('http://3.35.235.33:8080/room/hotRoomList', {
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
        <>
            <FlatList 
                ListHeaderComponent={
                    <>
                    <FilterContainer>
                        <View style={{ flexDirection:'row', alignItems:'center' }} >
                            <View style={{ flexDirection: 'row', alignItems:'center',justifyContent:'center', margin:16, marginTop: 8, marginBottom: 8, borderWidth: 1, borderColor:"#E5E6E8", borderStyle: 'solid', width: 62, height: 32 }} >
                                <Filter width={16} height={16} />
                                <Text style={{ fontFamily: 'Noto700', fontSize:14, lineHeight: 18, marginLeft: 4, color: MainColor.Banana }} >필터</Text>
                            </View>
                            <TouchableOpacity  onPress={() => {
                                setFocused(true)
                                setShort(false)
                                setLong(false)
                                }} style={{ marginRight: 4, marginLeft:4, backgroundColor: focused ? '#f6f6f6' : 'white', width:36, height:24, alignItems:'center', justifyContent: 'center' }} >
                                <Text style={{ fontFamily: 'Noto500', fontSize:14, letterSpacing: 0.15, lineHeight: 18, color: focused ? "#212121" : "#9e9e9e" }} >전체</Text>
                            </TouchableOpacity>

                            <Text style={{ color: "#9e9e9e" }} >・</Text>

                            <TouchableOpacity onPress={() => {
                                setFocused(false)
                                setShort(true)
                                setLong(false)
                                }} style={{ marginRight: 4, marginLeft:4, backgroundColor: short ? '#f6f6f6' : 'white', width:36, height:24, alignItems:'center', justifyContent: 'center' }} >
                                <Text style={{ fontFamily: 'Noto500', fontSize:14, letterSpacing: 0.15, lineHeight: 18, color: short ? "#212121" : "#9e9e9e" }} >단기</Text>
                            </TouchableOpacity>

                            <Text style={{ color: "#9e9e9e" }} >・</Text>

                            <TouchableOpacity onPress={() => {
                                setFocused(false)
                                setShort(false)
                                setLong(true)
                                }} style={{ marginRight: 4, marginLeft:4, backgroundColor: long ? '#f6f6f6' : 'white', width:36, height:24, alignItems:'center', justifyContent: 'center' }} >
                                <Text style={{ fontFamily: 'Noto500', fontSize:14, letterSpacing: 0.15, lineHeight: 18, color: long ? "#212121" : "#9e9e9e" }} >장기</Text>
                            </TouchableOpacity>
                        </View>
                    </FilterContainer>
                    <TitleContainer>
                        <TitleContainerTitle>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={{ fontFamily: 'Dream', fontSize: 20, height:24}} >실시간 </Text>
                                <Text style={{ fontFamily: 'Dream', fontSize: 20, height:24, color: MainColor.Banana}} >HOT</Text>
                                <Text style={{ fontFamily: 'Dream', fontSize: 20, height:24, color: MainColor.Banana}} >10</Text>
                            </View>
                            <Text style={{ height: 20, fontFamily: 'Noto400', fontSize:10, opacity: 0.4 }} >{JSON.stringify(new Date()).substr(6,12).replace("-",'.').replace("T"," ").replace(":", '시 ').replace(':', '분 기준') }</Text>
                        </TitleContainerTitle>
                        <View style={{ position: 'absolute', right: 16, bottom: -4 }} >
                        <IllHot/>
                        </View>
                    </TitleContainer>
            </>
                }
                refreshing={loading}
                onRefresh={() => getAllLists()}
                data={lists}
                renderItem={ ({item, index}) => (
                    <List lists={item} short={short} long={long} navigation={navigation} />
                 )}
                keyExtractor={item => item.id}
            />
             
            <View style={{ height:50 }} />
        </>
    )
}

export default HotGroup
