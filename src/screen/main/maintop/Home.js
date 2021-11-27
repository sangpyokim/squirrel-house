import React, { useEffect, useState } from 'react'
import { Dimensions, TouchableOpacity, View, Text, FlatList, ImageBackground  } from 'react-native';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MainColor } from '../../../components/Color'
import RightIcon from '../../../asset/2_page/right_icon.svg'
import LongRightIcon from '../../../asset/2_page/long_right_icon.svg'
import BurningImage from '../../../asset/common/5_illustration/ill_bunning.svg'
import List from '../../../components/List';
import Down from '../../../asset/3_page/flow/flow_down.svg'

import Mark from '../../../asset/common/4_tag/mark.svg'


const Width = Dimensions.get('window').width



const Wrapper = styled.ScrollView`
    width: ${Width}px;
    background-color: #f4f4f4;
`
const BurningContainer = styled.View`
    width: 100%;
    background-color: white;
    padding: 16px 16px 8px 16px;
    margin-top: 8px;
    margin-bottom: 8px;
`
const BurningHeader = styled.View`
    margin-top: 0px;
    margin-bottom: 16px;
`
const SmallHeader = styled.Text`
    color: ${MainColor.Banana};
    font-size:12px;
    font-weight:500;
    letter-spacing: 0.15px;
    line-height: 24px;
`
const BigHeader = styled.Text`
    font-size:20px;
    letter-spacing: 0.15px;
    line-height: 24px;
    font-family: 'Dream';
`
const BurningContent = styled.View`
    margin-bottom: 28px;
    height:40px;
`
const ContentText = styled.Text`
    font-family: 'Noto400';
    color: ${MainColor.BLACK38};
    line-height:20px;
    font-size:14px;
    font-weight:400;
    letter-spacing: 0.15px;
`
const BurningButtonBox = styled.TouchableOpacity`
    width:100%;
    height: 50px;
    background-color: ${MainColor.Banana};
    border-radius: 2px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 0px 16px;
    text-align: center;
    box-shadow: 0 0 3px rgba(25, 25, 25, 0.4);
    elevation: 5;
`
const BurningButtonText = styled.Text`
    font-family: 'Noto500';
    color: white;
    font-size:16px;
    font-weight:500;
    letter-spacing: 0.15px;
    line-height: 24px;
    color: #515151;
`
const BurningButtonuUnderText = styled.Text`
    font-size:14px;
    font-weight:400;
    letter-spacing: 0.15px;
    line-height: 24px;
    text-align:right;
    color: rgba(0, 0, 0, 0.38);
    opacity: 1;
    font-family: 'Noto400';
`
const CurrentContainer = styled.View`
    width: 100%;
    height: 180px;
    background-color: white;
    padding: 16px;
`
const CurrentHeader = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 24px; 
    letter-spacing: 0.15px;
    margin-bottom: 10px;
    color: #676767;
`
const CurrentContents = styled.ScrollView`

`
// ImageBackground 로 변경해야함
const CurrentContent = styled.View`
    width: 120px;
    height:110px;
    background-color: aliceblue;
    margin-right: 8px;
    border-radius: 2px;
`
const GroupContainer = styled.View`
    width: 100%;
    margin-top: 8px;
    background-color: white;    
`
const GroupHeader = styled.View`
    width: 100%;
    height: 55px;
    padding: 16px 16px 0 16px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 0.91px;
    border-bottom-color: rgba(33,33,33, 0.08);
`
const HeaderText = styled.Text`
    font-family: "Dream";
    font-size: 16px;
    line-height: 24px; 
    font-weight: 400;
    letter-spacing: 0.15px;
    margin-bottom: 10px;
`
const HeaderOption = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    background-color: #f2f3f5;
    height:35px;
    width: 95px;
    padding: 5px 5px 0 10px;
    position: relative;
    top: -5px;
`
const HeaderOptionText = styled.Text`
font-family: 'Noto400';
    font-size: 14px;
    line-height: 24px; 
    font-weight: 400;
    letter-spacing: 0.15px;
    margin-bottom: 10px;
    margin-right: 5px;
    text-align: center;
`
const HeaderContents = styled.View`

`

const Home = ({navigation}) => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.loginout.user)

    const [ lists, setLists ] = useState()
    const [ loading, setLoading ] = useState(true)

    const getAllLists = async() => {
        const data = await fetch('http://3.35.235.33:8080/room/getList', {
                method: 'post',
                headers: {
                  "Accept": 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "memberID" : user.id,      // 방 생성하는 사람 id(방장)
                    })
            }).then( res => res.json() ).catch( e => console.log(e))
            setLists(data)
            setLoading(false)
    }
    useEffect( () => {
        getAllLists()
    }, [])
return (
<FlatList 
    refreshing={loading}
    onRefresh={() => getAllLists()}
    data={lists}
    ListHeaderComponent={
        <Wrapper  >
            <BurningContainer>
                <BurningHeader>
                    <View style={{position:'absolute', right:0}} >
                        <BurningImage />
                    </View>
                    <SmallHeader>HOT BURNING</SmallHeader>
                    <BigHeader>중간고사 같이</BigHeader>
                    <BigHeader>준비할 사람 모여람!</BigHeader>
                </BurningHeader>

                <BurningContent>
                    <ContentText>벛꽃의 꽃말은 중간고사라G...</ContentText>
                    <ContentText>도서관에서 같이 공부할 사람?</ContentText>
                </BurningContent>

                <BurningButtonBox >
                        <BurningButtonText>
                            함께하기
                        </BurningButtonText>
                        <LongRightIcon widht={24} height={24}  />
                </BurningButtonBox>
                <BurningButtonuUnderText>총 중간 모임 <Text style={{ color: '#FFD515', fontFamily: 'Noto400', opacity: 1 }} >N</Text>개</BurningButtonuUnderText>
            </BurningContainer>

            <CurrentContainer>
                <View style={{ flexDirection: 'row',  justifyContent: 'space-between', alignItems:'center' }} >
                    <CurrentHeader><Text style={{ color: "#FFD515", fontFamily: 'Dream' }} >219</Text>명이 현재 모임에 참여중이G~</CurrentHeader>
                    <TouchableOpacity style={{ justifyContent:'center', flexDirection: 'row', alignItems:'center',position:'absolute', right:4, bottom:14 }} >
                        <Text style={{ fontFamily: 'Noto500', fontSize:12, color: '#676767',marginRight: 4}} >구경가기</Text>
                        <RightIcon width={12} height={12} />
                    </TouchableOpacity>
                </View>
                <CurrentContents horizontal={true} bounces={false} showsHorizontalScrollIndicator={false} >

                    <ImageBackground  source={ require('../../../asset/common/6_img/2/1_soccer.jpg')} style={{ width: 128, height: 112, marginRight: 8}}  borderRadius={2} >
                        <View style={{ position: 'absolute', bottom: -1, right: -1 }} >
                            <Mark width={17.5} height={17.5} fill={"#266CF9"} />
                        </View>
                        <View style={{ position: 'absolute', top:0, left:0, borderTopLeftRadius:2, backgroundColor:'black', height:24, width:55, alignItems:'center', justifyContent:'center' }} >
                            <Text style={{ color:'white', fontFamily: 'Noto500', fontSize:12, lineHeight:20, textAlign: 'center'}} >운동</Text>
                        </View>
                        <View style={{ justifyContent:'center', flexDirection: 'row', alignItems:'center',position:'absolute', bottom:4, left:8}} >
                            <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:14, color: MainColor.Banana }} >21</Text>
                            <View>
                                <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:12, position: 'absolute', left:2, bottom: -12 }} >개</Text>
                            </View>
                        </View>
                    </ImageBackground>

                    <ImageBackground  source={ require('../../../asset/common/6_img/2/2_game.png')} style={{ width: 128, height: 112, marginRight: 8}}  borderRadius={2} >
                    <View style={{ position: 'absolute', bottom: -1, right: -1 }} >
                            <Mark width={17.5} height={17.5} fill={"#FF5D17"} />
                        </View>
                        <View style={{ position: 'absolute', top:0, left:0, borderTopLeftRadius:2, backgroundColor:'black', height:24, width:55, alignItems:'center', justifyContent:'center' }} >
                            <Text style={{ color:'white', fontFamily: 'Noto500', fontSize:12, lineHeight:20, textAlign: 'center'}} >오락</Text>
                        </View>
                        <View style={{ justifyContent:'center', flexDirection: 'row', alignItems:'center',position:'absolute', bottom:4, left:8}} >
                            <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:14, color: MainColor.Banana }} >21</Text>
                            <View>
                                <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:12, position: 'absolute', left:2, bottom: -12 }} >개</Text>
                            </View>
                        </View>
                    </ImageBackground>

                    <ImageBackground  source={ require('../../../asset/common/6_img/2/3_study.png')} style={{ width: 128, height: 112, marginRight: 8}}  borderRadius={2} >
                    <View style={{ position: 'absolute', bottom: -1, right: -1 }} >
                            <Mark width={17.5} height={17.5} fill={"#4BBF00"} />
                        </View>
                        <View style={{ position: 'absolute', top:0, left:0, borderTopLeftRadius:2, backgroundColor:'black', height:24, width:55, alignItems:'center', justifyContent:'center' }} >
                            <Text style={{ color:'white', fontFamily: 'Noto500', fontSize:12, lineHeight:20, textAlign: 'center'}} >공부</Text>
                        </View>
                        <View style={{ justifyContent:'center', flexDirection: 'row', alignItems:'center',position:'absolute', bottom:4, left:8}} >
                            <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:14, color: MainColor.Banana }} >21</Text>
                            <View>
                                <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:12, position: 'absolute', left:2, bottom: -12 }} >개</Text>
                            </View>
                        </View>
                    </ImageBackground>

                </CurrentContents>
            </CurrentContainer>

                <GroupContainer>
                    <GroupHeader>
                        <HeaderText style={{ color: '#000000DE' }} >전체모임</HeaderText>
                        <HeaderOption  >
                            <HeaderOptionText style={{ fontFamily: 'Noto400', fontSize: 14, color: '#545454DE' }} >최신순</HeaderOptionText>
                            <Down width={24} height={24} fill="#B6B8BA" />
                        </HeaderOption>
                    </GroupHeader>                                                                                  
                </GroupContainer>
            </Wrapper>
}
    renderItem={ ({item}) => (
        <List lists={item} navigation={navigation}/>
        )}
    ListFooterComponent={<View style={{ height:70, backgroundColor:'white' }} />}
    keyExtractor={item => item.id}
/>
    );
  
}

export default Home;