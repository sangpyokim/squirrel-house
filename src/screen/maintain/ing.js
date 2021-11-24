import React from 'react'
import { Dimensions ,Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { MainColor } from '../../components/Color'
import Chat from '../../asset/4_page/chat.svg'
import Goal from '../../asset/4_page/goal.svg'
import Out from '../../asset/4_page/out.svg'
import { ICONSIZE } from '../../components/Size'



const Width = Dimensions.get('window').width


const  GroupCount = styled.View`
    justify-content:center;
    margin-left: 16px;
`
const Wrapper = styled.ScrollView`
    background-color: ${MainColor.BACKGROUND};
    width: 100%;
`
const Contents = styled.View`
    background-color:white;
    padding: 16px;
    width: 100%;
`
const Content = styled.View`
    width:100%;
    height: 184px;
    flex-direction: row;
    justify-content: space-between;
`
const PostImage = styled.View`
    height:100%;
    width: ${Width*0.33}px;
    background-color:black;
    border-radius: 2px;
`
const ContentBox = styled.View`
    height:100%;
    width: ${Width*0.67 - 48}px;
`
const ContentHeader = styled.View`
    width: 100%;
    height: 50%;
`
const ContentHeaderView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
const ContentHeaderViewText = styled.View`
    width:50px;
    background-color: ${MainColor.Banana};
    align-items:center;
    justify-content: center;
    border-radius:2px;
`

const ContentBottom = styled.View`
    height:50%;
    justify-content: flex-end;
`
const ContentBottomView = styled.View`
    justify-content: space-between;
    flex-direction: row;
`

const ing = () => {
    const user = useSelector( (state) => state.loginout.user)
    
    // 방 리스트 가져오는 api
    // 방들어가는 api, 나가는 api

    return (
        <Wrapper>
            <GroupCount >
                <Text style={{ fontFamily: 'Noto400', fontSize:12 }} >몇개의 모임 진행중</Text>
            </GroupCount>
            <Contents>
                <Content>
                    <PostImage />
                    <ContentBox>
                        <ContentHeader >
                            <ContentHeaderView>
                                <ContentHeaderViewText >
                                    <Text style={{ color: MainColor.BANANABOX, fontSize: 10, fontFamily: 'Noto500', }} >단기</Text>
                                </ContentHeaderViewText>
                            </ContentHeaderView>
                            <Text style={{ fontFamily: 'Dream', fontSize: 20, marginTop: 8 }} >내일 9시 홈파티</Text>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between', width: "100%" }} >
                                <View style={{  alignItems:'center', justifyContent: 'center' }} >
                                    <Text style={{ color: MainColor.BANANABOX, fontSize: 14, fontFamily: 'Noto500', marginTop:4 }}>단기 1회 모임</Text>
                                </View>
                            </View>
                        </ContentHeader>

                        <ContentBottom>
                            <ContentBottomView >
                                <View 
                                    style={{ width: '99%', height:2, backgroundColor:MainColor.GRAY2, position:'absolute', bottom:-1 }} />
                                <View 
                                    style={{ width: '50%', height:2, backgroundColor:MainColor.Banana, position:'absolute', bottom:-1 }} />
                                <Text style={{ fontFamily: 'Noto400', fontSize: 12, color: MainColor.GRAY2, }} >활동 시작전이에요.</Text>
                                <Goal width={ICONSIZE.BOTTOM_NAV_HEADER_ICON} height={ICONSIZE.BOTTOM_NAV_HEADER_ICON} fill={MainColor.BLACK38} />
                            </ContentBottomView>
                        </ContentBottom>
                    </ContentBox>
                </Content>
            </Contents>
        </Wrapper>
    )
}

export default ing
