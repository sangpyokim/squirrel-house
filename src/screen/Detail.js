import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, ImageBackground, Button } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Info from '../screen/detail/Info'
import Board from '../screen/detail/Board'
import ChatRoom from '../screen/detail/ChatRoom'
import { MainColor } from '../components/Color'
import { AntDesign } from '@expo/vector-icons';
import Eye from '../asset/common/list_icon/list_icon_5_eye'
import styled from 'styled-components'
//icon
import Location from '../asset/common/list_icon/list_icon_1_location'
import Date from '../asset/common/list_icon/list_icon_2_data'
import My from '../asset/common/list_icon/list_icon_3_my'
import Like from '../asset/common/list_icon/list_icon_4_like'


const Tab = createMaterialTopTabNavigator();

const Width = Dimensions.get('window').width;

const Title = styled.Text`
    margin-right: 8px;
    line-height: 24px;
    font-family: 'Dream';
    font-size:20px;
    letter-spacing: 0.15px;
    line-height: 24px;
    margin-bottom: 2px;
`
const TagContainer = styled.View`
    width: 35px;
    height: 16px;
    background-color: ${props => props.period === true ? MainColor.BLACK  : MainColor.Banana};
    border-radius: 2px;
`

const Tag = styled.Text`
    color: ${props => props.period ? MainColor.BLACKBOX : MainColor.BANANABOX};
    line-height:14px;
    font-size:10px;
    font-family: "Noto500";
    letter-spacing: 0.25px;
`



const Detail = ({navigation, route}) => {
    const [ image, setImage ] = useState()
    
    const {room} = route.params

    const getAllLists = async(room) => {
        const data = await fetch(`http://211.227.151.158:8080/file/getImg/${room.id}`).then( res => res.json() ).catch( e => console.log(e))
        setImage(data.img)
    }

    useEffect(() => {
        getAllLists(room)
    }, [])

    return (
        <>
        <ScrollView style={{ backgroundColor: 'transparent' }} >


        <View style={{ width:Width, height:396, backgroundColor:'#e5e5e5' }} >
            <ImageBackground
                style={{ width:Width, height: 164, backgroundColor: 'wheat' }} 
                resizeMode= 'cover' 
                source={{ uri: `data:image/png;base64,${image}` }}>
                <TouchableOpacity style={{ position:'absolute', top: 16, left: 16}} onPress={ () => navigation.popToTop()} >
                    <AntDesign name="left" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ position:'absolute', top: 16, right: 16}} >
                    <AntDesign name="left" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ position:'absolute', top: 16, right: 66}} >
                    <AntDesign name="left" size={24} color="white" />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row',position: 'absolute', bottom: 8, left:16 }} >
                    <View style={{ marginRight: 8, width: 40,  backgroundColor: room.periodic ? 'black' : MainColor.Banana, alignItems:'center', justifyContent: 'center', borderRadius:2 }} >
                        <Text style={{ fontFamily:'Noto500', color: room.periodic ? MainColor.BLACKBOX : MainColor.BANANABOX, lineHeight:16, fontSize:10, letterSpacing: 0.25 }} >{`#${room.periodic ? "장기" : "단기" }`}</Text>
                    </View>
                        {room.prefer.split("_").map( (list, index) => (
                            list === "null" ? null : (
                                <View  key={index} style={{ borderRadius:2, flexDirection: 'row',marginRight: 8, width: 70, height: 16, backgroundColor: MainColor.GRAY2, alignItems:'center', justifyContent: 'center' }} >
                                    <Text style={{ fontFamily:'Noto500', color: 'white', lineHeight:16, fontSize:10, letterSpacing: 0.25 }} >{`#${list}끼리만`.substr(0,6)}</Text>
                                </View>
                        )))}
                </View>

                <View style={{ position:'absolute', bottom: 8, right: 16, flexDirection:'row', alignItems: 'center', justifyContent: 'center' }} >
                    <Eye width={16} height={16} fill={"#c5c6c9"}  />
                    <Text style={{ color: "#c5c6c9",  fontFamily: 'Noto400', fontSize: 10, lineHeight: 14, marginLeft: 2 }} >{room.views}</Text>
                </View>

            </ImageBackground>

            <View style={{ width:'100%', height: 224, paddingRight: 16, paddingLeft: 16, backgroundColor:'white', paddingTop: 16 }} >
                <Title>{room.title}</Title>

                <View style={{ flexDirection: 'row', alignItems: 'center', height: 16,  marginBottom: 16 }} >
                    <Text style={{  fontFamily: 'Noto400', fontSize: 12, color: '#949497', justifyContent: 'center', lineHeight: 16 }} >구체적인 모임 정보를 적어보세요.</Text>
                    <AntDesign name="left" size={12} color="black" />
                    <View  style={{ width:Width, height: 1, backgroundColor: '#F6F6F6', marginBottom: 16, position: 'absolute', left:-16, bottom: -36}} />
                </View>
                

                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 16, right: 16 }} >
                    <AntDesign name="left" size={24} color="black" />
                    <AntDesign name="left" size={24} color="black" style={{ marginLeft: 16 }} />
                </View>

                <View style={{ marginTop: 24 }} >
                    <View style={{ marginBottom: 8 ,flexDirection: 'row',alignItems: 'center',  }} >
                        <Location width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                        <Text style={{ width: 54, marginRight: 16, fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color:"#515151B2" }} >활동지</Text>
                        
                        <View>
                            <Text>{room.place}</Text>
                        </View>

                    </View>
                    
                    <View style={{ marginBottom: 8 ,flexDirection: 'row', alignItems: 'center', }} >
                        <Location width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                        <Text style={{ width: 54, marginRight: 16, fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color: "#515151B2"}} >횟수</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, lineHeight: 16 }} >{room.periodic ? "장기" : '단기'}</Text>
                            <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, lineHeight: 16, color: MainColor.GRAY2 }} > 주 </Text>
                            <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, lineHeight: 16 }} >{`${room.frequency}회`}</Text>
                        </View>

                    </View>
                    
                    <View style={{ marginBottom: 8 ,flexDirection: 'row', alignItems: 'center',  }} >
                        <Date width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                        <Text style={{ width: 54, marginRight: 16, fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color:"#515151B2" }} >활동일</Text>

                        <View style={{ flexDirection: 'row' }} >
                            <Text>{`${room.startDate} ${room.endDate === null ? null : ' ~ ' } ${room.endDate}`}</Text>
                            <TagContainer period={room.periodic} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 4 }} >
                                <Tag period={room.periodic} >{room.periodic ? "장기" : "단기"}</Tag>
                            </TagContainer>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                        <My width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                        <Text style={{ width: 54, marginRight: 16 , fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color:"#515151B2"}} >모집인원</Text>

                        <Text style={{ fontFamily: 'Noto400', fontSize: 14 }} >{`${room.nowPeople}/${room.maxPeople}`}</Text>

                    </View>
                </View>
                                <Button title="타티틀" onPress={ () => navigation.navigate('정보') } />
            </View>
        </View>

            <Tab.Navigator 
                screenOptions={{
            tabBarIndicatorStyle:{ position: 'absolute', top: 0, backgroundColor: MainColor.Banana, height: 1.5 },

        }} >
            <Tab.Screen name="정보" component={Info} />
            <Tab.Screen name="게시판" component={Board} />
            <Tab.Screen name="채팅방" component={ChatRoom} />
        </Tab.Navigator>
        </ScrollView>
        </>
    )
}

export default Detail
