import React from 'react'
import { Dimensions, TouchableOpacity, View, Text  } from 'react-native';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { MainColor } from '../../../components/Color'
import RightIcon from '../../../asset/2_page/right_icon.svg'
import LongRightIcon from '../../../asset/2_page/long_right_icon.svg'
import List from '../../../components/List'


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
    opacity: 0.4;
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
`
const GroupContainer = styled.View`
    width: 100%;
    height: 400px;
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
    font-size: 16px;
    line-height: 24px; 
    font-weight: 400;
    letter-spacing: 0.15px;
    margin-bottom: 10px;
    color: ${MainColor.BLACK70};
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
    font-size: 14px;
    line-height: 24px; 
    font-weight: 400;
    letter-spacing: 0.15px;
    margin-bottom: 10px;
    color: ${MainColor.BLACK70};
    margin-right: 5px;
    text-align: center;
`
const HeaderContents = styled.View`

`

const Home = ({navigation}) => {
    const dispatch = useDispatch()

    return (
        <Wrapper  >
            <BurningContainer>
                <BurningHeader>
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
                <BurningButtonuUnderText>총 기말 모임 N개</BurningButtonuUnderText>
                

            </BurningContainer>

            <CurrentContainer>
                <View style={{ flexDirection: 'row',  justifyContent: 'space-between', alignItems:'center' }} >
                    <CurrentHeader>219명이 현재 모임에 참여중이G~</CurrentHeader>
                    <TouchableOpacity style={{ justifyContent:'center', flexDirection: 'row', alignItems:'center',position:'absolute', right:4, bottom:4 }} >
                        <Text style={{ fontFamily: 'Noto500', fontSize:12, color: '#676767',marginRight: 4}} >구경가기</Text>
                        <RightIcon width={12} height={12} />
                    </TouchableOpacity>
                </View>
                <CurrentContents horizontal={true} bounces={false} showsHorizontalScrollIndicator={false} >
                    <CurrentContent>
                        <View style={{ position: 'absolute', top:0, left:0, borderTopLeftRadius:2, backgroundColor:'black', height:24, width:55, alignItems:'center', justifyContent:'center' }} >
                            <Text style={{ color:'white', fontFamily: 'Noto500', fontSize:12, lineHeight:20, textAlign: 'center'}} >운동</Text>
                        </View>
                        <View style={{ justifyContent:'center', flexDirection: 'row', alignItems:'center',position:'absolute', bottom:4, left:8}} >
                            <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:14, color: MainColor.Banana }} >21</Text>
                            <View>
                                <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:12, position: 'absolute', left:2, bottom: -12 }} >개</Text>
                            </View>
                        </View>

                    </CurrentContent>
                    <CurrentContent>
                        <View style={{ position: 'absolute', top:0, left:0, borderTopLeftRadius:2, backgroundColor:'black', height:24, width:55, alignItems:'center', justifyContent:'center' }} >
                            <Text style={{ color:'white', fontFamily: 'Noto500', fontSize:12, lineHeight:20, textAlign: 'center'}} >오락</Text>
                        </View>
                        <View style={{ justifyContent:'center', flexDirection: 'row', alignItems:'center',position:'absolute', bottom:4, left:8}} >
                            <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:14, color: MainColor.Banana }} >21</Text>
                            <View>
                                <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:12, position: 'absolute', left:2, bottom: -12 }} >개</Text>
                            </View>
                        </View>
                    </CurrentContent>
                    <CurrentContent>
                        <View style={{ position: 'absolute', top:0, left:0, borderTopLeftRadius:2, backgroundColor:'black', height:24, width:55, alignItems:'center', justifyContent:'center' }} >
                            <Text style={{ color:'white', fontFamily: 'Noto500', fontSize:12, lineHeight:20, textAlign: 'center'}} >공부</Text>
                        </View>
                        <View style={{ justifyContent:'center', flexDirection: 'row', alignItems:'center',position:'absolute', bottom:4, left:8}} >
                            <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:14, color: MainColor.Banana }} >21</Text>
                            <View>
                                <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:12, position: 'absolute', left:2, bottom: -12 }} >개</Text>
                            </View>
                        </View>
                    </CurrentContent>
                    <CurrentContent>
                        <View style={{ position: 'absolute', top:0, left:0, borderTopLeftRadius:2, backgroundColor:'black', height:24, width:55, alignItems:'center', justifyContent:'center' }} >
                            <Text style={{ color:'white', fontFamily: 'Noto500', fontSize:12, lineHeight:20, textAlign: 'center'}} >사진</Text>
                        </View>
                        <View style={{ justifyContent:'center', flexDirection: 'row', alignItems:'center',position:'absolute', bottom:4, left:8}} >
                            <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:14, color: MainColor.Banana }} >21</Text>
                            <View>
                                <Text style={{ fontFamily:'Noto500', lineHeight: 20, fontSize:12, position: 'absolute', left:2, bottom: -12 }} >개</Text>
                            </View>
                        </View>
                    </CurrentContent>
                </CurrentContents>
            </CurrentContainer>

            <GroupContainer>
                <GroupHeader>
                    <HeaderText>전체모임</HeaderText>
                    <HeaderOption>
                        <HeaderOptionText>최신순</HeaderOptionText>
                        <AntDesign name="down" size={22} color={MainColor.fontColor} />
                    </HeaderOption>
                </GroupHeader>                                                                                  
                    <HeaderContents>
                        <List />
                    </HeaderContents>
            </GroupContainer>
        </Wrapper>
    );
  
}

export default Home;