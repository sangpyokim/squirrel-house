import React from 'react'
import { View, Dimensions, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import { MainColor } from '../components/Color'
import Like from '../asset/common/list_icon/list_icon_4_like.svg';
import Location from '../asset/common/list_icon/list_icon_1_location.svg'
import Date from '../asset/common/list_icon/list_icon_2_data.svg'
import My from '../asset/common/list_icon/list_icon_3_my.svg'
import Eye from '../asset/common/list_icon/list_icon_5_eye.svg'

const Width = Dimensions.get('window').width

const Contents = styled.View`
    width: 100%;
    height: 104px;
    background-color: white;
    padding: 8px 16px;
    flex-direction: row;
    border-color: #F6F6F6;
    border-bottom-width: 1px;
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
    font-family: 'Noto500';
    line-height:20px;
    font-size:12px;
    letter-spacing: 0.15px;
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
    background-color: ${MainColor.Banana};
    border-radius: 2px;
`

const Tag = styled.Text`
    color: ${MainColor.BANANABOX};
    line-height:16px;
    font-size:10px;
`
const OptionView = styled.View`
    border-radius: 2px;
    background-color: #949494;
    width: 64px;
    height: 16px;
    margin-top: 16px;
    justify-content: center;
    align-items:center;
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



const HotGroup = () => {
    return (
            <Contents>
                <BackGroundImage>
                    <DDay>
                        <Day>
                            D-1
                        </Day>
                    </DDay>
                <TouchableOpacity>
                    <Like width="24" height="24" fill={MainColor.Banana} />
                </TouchableOpacity>
                </BackGroundImage>
                <Content>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:4, marginTop:2 }} >
                        <Title>내일 9시 홈파티</Title>
                        <TagContainer style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Tag>단기</Tag>
                        </TagContainer>
                    </View>

                    <View style={{ flexDirection:'row' }} >
                        <View style={{ flexDirection:'row' }} >
                            <Location width={16} height={16} fill={'#808184'} />
                            <Text style={{ marginLeft:4, marginRight:4 , fontFamily: 'Noto400', lineHeight:18, fontSize: 12, color: '#808184' }} >우리집</Text>
                        </View>
                        <View style={{ flexDirection:'row' }} >
                            <Date width={16} height={16} fill={'#808184'} />
                            <Text style={{ marginLeft:4, marginRight:4 , fontFamily: 'Noto400', lineHeight:18, fontSize: 12, color: '#808184' }}>단기</Text>
                        </View>
                        <View style={{ flexDirection:'row' }} >
                            <My width={16} height={16} fill={'#808184'} />
                            <Text style={{ marginLeft:4, marginRight:4 , fontFamily: 'Noto400', lineHeight:18, fontSize: 12, color: '#808184' }} >6/7</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        <OptionView>
                            <Option>동갑끼리만</Option>
                        </OptionView>
                        <Views>
                            <Eye width={12} height={12} fill={"#c5c6c9"} />
                            <ViewsText>123</ViewsText>
                        </Views>
                    </View>

                    <View style={{ position:'absolute', bottom:0, right:0 }} >
                        <Text style={{ color:MainColor.Banana, fontSize: 16, textAlign: 'right' }} >1</Text>
                        <Text style={{ color:MainColor.BLACK38, fontSize: 10, lineHeight: 16, fontFamily:'Noto400', letterSpacing:0.15 }} >남은자리</Text>
                    </View>
                </Content>
            </Contents>
    )
}

export default HotGroup
