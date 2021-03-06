import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import DTab from '../detail_tab_bar/DTab'
//icon
import Location from '../../asset/common/list_icon/list_icon_1_location'
import Date from '../../asset/common/list_icon/list_icon_2_data'
import My from '../../asset/common/list_icon/list_icon_3_my'
import Like from '../../asset/common/list_icon/list_icon_4_like'
import Out from '../../asset/6_page/1_out.svg'
import Renew from '../../asset/6_page/2_renew.svg'
import Share from '../../asset/6_page/3_public.svg'
import Heart from '../../asset/6_page/9_heart.svg'
import Time from '../../asset/6_page/5_time.svg'
import Pencil from '../../asset/6_page/8_pencil.svg'
import Mark from '../../asset/6_page/9_.svg'
import Eye from '../../asset/common/list_icon/list_icon_5_eye'

import { MainColor } from '../../components/Color';
import styled from 'styled-components';

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
const Container = styled.View`
    margin-top: 8px;
    background-color: white;
    height: 48px;
    flex-direction: row;
`
const Width = Dimensions.get('window').width;

const First = (props) => {
    const {room, image} = props
    console.log(props)

    console.log(room)

    return (
        <View style={{ backgroundColor: 'transparent',}} >
        <ImageBackground
            style={{ width:Width, height: 164, backgroundColor: 'wheat' }} 
            resizeMode= 'cover' 
            source={{ uri: `${image}` }}>
            <TouchableOpacity style={{ position:'absolute', top: 12, left: 16}} onPress={ () => navigation.popToTop()} >
                <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ position:'absolute', top: 0, right: 0}} >
                <Renew />
            </TouchableOpacity>
            <TouchableOpacity style={{ position:'absolute', top: 0, right: 48}} >
                <Out  />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row',position: 'absolute', bottom: 8, left:16 }} >
                <View style={{ marginRight: 8, width: 40,  backgroundColor: room.periodic ? 'black' : MainColor.Banana, alignItems:'center', justifyContent: 'center', borderRadius:2 }} >
                    <Text style={{ fontFamily:'Noto500', color: room.periodic ? MainColor.BLACKBOX : MainColor.BANANABOX, lineHeight:16, fontSize:10, letterSpacing: 0.25 }} >{`#${room.periodic ? "??????" : "??????" }`}</Text>
                </View>
                    {room.prefer.split("_").map( (list, index) => (
                        list === "null" ? null : (
                            <View  key={index} style={{ borderRadius:2, flexDirection: 'row',marginRight: 8, width: 70, height: 16, backgroundColor: '#848484', alignItems:'center', justifyContent: 'center' }} >
                                <Text style={{ fontFamily:'Noto500', color: 'white', lineHeight:16, fontSize:10, letterSpacing: 0.25 }} >{`#${list}?????????`.substr(0,6)}</Text>
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
            <Text style={{  fontFamily: 'Noto400', fontSize: 12, color: '#949497', justifyContent: 'center', lineHeight: 16 }} >???????????? ?????? ????????? ???????????????.</Text>
            <Pencil />
            <View  style={{ width:Width, height: 1, backgroundColor: '#F6F6F6', marginBottom: 16, position: 'absolute', left:-16, bottom: -36}} />
        </View>
    

        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 4, right: 16 }} >
            <Share marginRight={12} />
            <Heart />
        </View>

        <View style={{ marginTop: 24, }} >
            <View style={{ marginBottom: 8 ,flexDirection: 'row',alignItems: 'center',  }} >
                <Location width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                <Text style={{ width: 54, marginRight: 16, fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color:"#515151B2" }} >?????????</Text>
                
                <View>
                    <Text>{room.place}</Text>
                </View>

            </View>
            
            <View style={{ marginBottom: 8 ,flexDirection: 'row', alignItems: 'center', }} >
                <Time width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                <Text style={{ width: 54, marginRight: 16, fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color: "#515151B2"}} >??????</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, lineHeight: 16 }} >{room.periodic ? "??????" : '??????'}</Text>
                    <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, lineHeight: 16, color: MainColor.GRAY2 }} >{room.periodic ? " ??? " : ''}</Text>
                    <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, lineHeight: 16 }} >{room.periodic ? `${room.frequency}???` : ''}</Text>
                </View>

            </View>
            
            <View style={{ marginBottom: 8 ,flexDirection: 'row', alignItems: 'center',  }} >
                <Date width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                <Text style={{ width: 54, marginRight: 16, fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color:"#515151B2" }} >?????????</Text>

                <View style={{ flexDirection: 'row' }} >
                    <Text>{`${room.startDate} ${room.periodic === null ? null : ' ~ ' } ${room.endDate}`}</Text>
                    <TagContainer period={room.periodic} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 4 }} >
                        <Tag period={room.periodic} >{room.periodic ? "??????" : "??????"}</Tag>
                    </TagContainer>
                </View>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                <My width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                <Text style={{ width: 54, marginRight: 16 , fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color:"#515151B2"}} >????????????</Text>

                <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.25 }} >{`${room.nowPeople}/${room.maxPeople}`}</Text>

            </View>
        </View>
    </View>

    </View>
    )
}

export default First
