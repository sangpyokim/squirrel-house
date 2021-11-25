import React, { useEffect, useState } from 'react'
import { View, Dimensions, TouchableOpacity, Text, ImageBackground } from 'react-native'
import styled from 'styled-components'
import { MainColor } from '../components/Color'
import Like from '../asset/common/list_icon/list_icon_4_like.svg';
import Location from '../asset/common/list_icon/list_icon_1_location.svg'
import Date from '../asset/common/list_icon/list_icon_2_data.svg'
import My from '../asset/common/list_icon/list_icon_3_my.svg'
import Eye from '../asset/common/list_icon/list_icon_5_eye.svg'
import Mark from '../asset/common/4_tag/mark.svg'
import { useSelector } from 'react-redux';
import D_Day from './D_Day';


const Width = Dimensions.get('window').width
const Color = ['#FFD515', '#FF5D17', '#266CF9', '#4BBF00', "#FF8515" ,'#F6F6F6' ]


const Contents = styled.View`
    width: 100%;
    height: 104px;
    background-color: white;
    padding: 8px 16px;
    flex-direction: row;
    border-color: #F6F6F6;
    border-bottom-width: 1px;
`
const BackGroundImage = styled.ImageBackground`
    width: 88px;
    height: 88px;
    justify-content: flex-end;
    padding: 4px;
    border-radius:2px;
    margin-right: 8px;

`

const Content = styled.View`
    width: ${Width - 88 - 40}px;
    height:100%;
`
const Title = styled.Text`
    margin-right: 8px;
    line-height: 24px;
    font-family: 'Noto500';
    font-size:16px;
    letter-spacing: 0.15px;
`
const TagContainer = styled.View`
    width: 35px;
    height: 16px;
    background-color: ${props => props.period === true ? MainColor.Banana : MainColor.BLACK};
    border-radius: 2px;
`

const Tag = styled.Text`
    color: ${props => props.period ? MainColor.BANANABOX : MainColor.BLACKBOX};
    line-height:14px;
    font-size:10px;
    font-family: "Noto500";
    letter-spacing: 0.25px;
`
const OptionView = styled.View`
    border-radius: 2px;
    background-color: #949494;
    width: 64px;
    height: 16px;
    margin-top: 16px;
    justify-content: center;
    align-items:center;
    margin-right: ${ (props) => props.index === 0 ? 4 : 0}px;
`
const Option = styled.Text`
    font-family: 'Noto500';
    font-size:10px;
    line-height:16px;
    color:white;
    letter-spacing: 0.25px;
`
const Views = styled.View`
    margin-left:8px;
    margin-top: 16px;
    flex-direction: row;
    align-items:center;
    justify-content:center;
`
const ViewsText = styled.Text`
    margin-left:2px;
    font-family: 'Noto400';
    font-size:10px;
    line-height: 16px;
    color: #c5c6c9;
`



const List = ({lists}) => {
    const user = useSelector( state => state.loginout.user)
    
    const [ image, setImage ] = useState()

    const getAllLists = async(lists) => {
        const data = await fetch(`http://192.168.1.80:8080/file/getImg/${lists}`).then( res => res.json() ).catch( e => console.log(e))
        setImage(data.img)
    }

    useEffect(() => {
        getAllLists(lists.id)
    }, [])
    
    return (
        <Contents>
                <ImageBackground 
                    style={{
                        width:88,
                        height:88,
                        padding: 4,
                        borderRadius: 2,
                        marginRight: 8,
                        justifyContent: 'flex-end',
                        backgroundColor: 'black'
                    }}
                    resizeMode='cover' 
                    source={{ uri: `data:image/png;base64,${image}` }}  >
                    <D_Day endDate={lists.startDate} />
                <TouchableOpacity  >
                    <Like width="24" height="24" fill={MainColor.Banana} />
                </TouchableOpacity>
                <View style={{ position: 'absolute', bottom: -1, right: -1 }} >
                    <Mark width={17.5} height={17.5} fill={Color[lists.categoryID-1]} />
                </View>
                </ImageBackground>

                <Content>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:4, marginTop:2 }} >
                        <Title>{lists.title}</Title>
                        <TagContainer period={lists.periodic} style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Tag period={lists.periodic} >{lists.periodic ? "단기" : "장기"}</Tag>
                        </TagContainer>
                    </View> 

                    <View style={{ flexDirection:'row' }} >
                        <View style={{ flexDirection:'row' }} >
                            <Location width={16} height={16} fill={'#808184'} />
                            <Text style={{ marginLeft:4, marginRight:4 , fontFamily: 'Noto400', lineHeight:18, fontSize: 12, color: '#808184' }} >{lists.place}</Text>
                        </View>
                        <View style={{ flexDirection:'row' }} >
                            <Date width={16} height={16} fill={'#808184'} />
                            <Text style={{ marginLeft:4, marginRight:4 , fontFamily: 'Noto400', lineHeight:18, fontSize: 12, color: '#808184' }}>{lists.periodic ? "단기" : "장기"}</Text>
                        </View>
                        <View style={{ flexDirection:'row' }} >
                            <My width={16} height={16} fill={'#808184'} />
                            <Text style={{ marginLeft:4, marginRight:4 , fontFamily: 'Noto400', lineHeight:17, fontSize: 12, color: '#808184' }} >{`${lists.nowPeople}/${lists.maxPeople}`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                            {lists.prefer.split("_").map( (list, index) => (
                                list === "null" ? null : (
                                <OptionView index={index} key={index} >
                                    <Text style={{ fontFamily:'Noto500', color: 'white', lineHeight:16, fontSize:10, letterSpacing: 0.25 }} >{`${list}끼리만`.substr(0,5)}</Text>
                                </OptionView>)
                            ))}
                        <Views>
                            <Eye width={12} height={12} fill={"#c5c6c9"} />
                            <ViewsText>{lists.views}</ViewsText>
                        </Views>
                    </View>

                    <View style={{ position:'absolute', bottom:0, right:0 }} >
                        <Text style={{ color:MainColor.Banana, fontSize: 16, textAlign: 'right' }} >{lists.maxPeople - lists.nowPeople}</Text>
                        <Text style={{ color:MainColor.BLACK38, fontSize: 10, lineHeight: 16, fontFamily:'Noto400', letterSpacing:0.15 }} >남은자리</Text>
                    </View>
                </Content>
            </Contents>
    )
}

export default List
