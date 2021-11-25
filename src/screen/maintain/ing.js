import React, { useEffect, useState } from 'react'
import { Dimensions ,Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { MainColor } from '../../components/Color'
import Chat from '../../asset/4_page/chat.svg'
import Goal from '../../asset/4_page/goal.svg'
import Out from '../../asset/4_page/out.svg'
import { ICONSIZE } from '../../components/Size'
import D_Day from '../../components/D_Day'


const Width = Dimensions.get('window').width


const  GroupCount = styled.View`
    margin-left: 16px;
    flex-direction: row;
`
const Wrapper = styled.ScrollView`
    background-color: ${MainColor.BACKGROUND};
    width: 100%;
`
const Contents = styled.View`
    background-color:white;
    padding: 0 16px 16px 16px;
    width: 100%;
`
const Content = styled.View`
    width:100%;
    height: 184px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-top: 16px;
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
    height: 16px;
    background-color: ${ props => props.backgroundColor ? MainColor.Banana : 'black' };
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

    const [ loading, setLoading ] = useState(true)
    const [ myRoomList, setMyRoomList ] = useState(null)


    const getMyRoomList = async() => {
        const data = await fetch('http://211.227.151.158:8080/room/myRoomList', {
            method: 'post',
            headers: {
              "Accept": 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "memberID" : user.id,      // 방 생성하는 사람 id(방장)
                })
        }).then( res => res.json() ).catch( e => console.log("실패"))
        setMyRoomList(data)
        setLoading(false)
        console.log(data[0])
    }
    
    useEffect( () => {
        getMyRoomList()
        // 방 리스트 가져오는 api
        // 방들어가는 api, 나가는 api

    }, [])

    const onPressOutGroup = async(id) => {

        const data = await fetch('http://211.227.151.158:8080/memberInRoom/outRoom', {
            method: 'put',
            headers: {
              "Accept": 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "roomID" : id,
                "memberID" : user.id,      // 방 생성하는 사람 id(방장)
                })
        }).then( res => res.json() ).catch( e => console.log("실패")) 
        getMyRoomList()
        console.log(id,data)
    }

    return (
        <Wrapper>
            {myRoomList === null 
              ? 
                null
              :
                loading === true
                  ? 
                    <Text>로딩중 . . .</Text>
                  : 
            <>  
                <GroupCount >
                    <Text style={{ fontFamily: 'Noto400', fontSize:12, letterSpacing: 0.15 }} >{myRoomList.length}</Text>
                    <Text style={{ fontFamily: 'Noto400', fontSize:12, color: MainColor.BLACK38, letterSpacing: 0.15 }} >개의 모임 진행중</Text>
                </GroupCount>
                <Contents>
                {myRoomList.map( (list, index) => (
                    <Content key={ index } >
                        <PostImage />
                        <ContentBox>
                            <ContentHeader >
                                <ContentHeaderView >
                                    <ContentHeaderViewText backgroundColor={list.periodic}  >
                                        <Text style={{ color: list.periodic ? MainColor.Banana : MainColor.BLACKBOX, fontSize: 10, fontFamily: 'Noto500', lineHeight: 16 }} >{list.periodic ? "단기" : "정기"}</Text>
                                    </ContentHeaderViewText>
                                </ContentHeaderView>

                                <Text style={{ fontFamily: 'Dream', fontSize: 20, marginTop: 8 }} >{list.title}</Text>

                                <View style={{ flexDirection: 'row', justifyContent:'space-between', width: "100%" }} >
                                    <View style={{  alignItems:'center', justifyContent: 'center' }} >
                                        <Text style={{ color: MainColor.BANANABOX, fontSize: 14, fontFamily: 'Noto500'  }}>{list.periodic ? `단기 ${list.frequency}회 모임` : `주 ${list.frequency}회 모임`}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity style={{ position: 'absolute', top: 0, right:0 }} >
                                    <Chat width={24} height={24} fill={MainColor.BLACK50} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ position: 'absolute', top: 40, right:0 }} onPress={() => onPressOutGroup(list.id)} >
                                    <Out width={24} height={24} fill={MainColor.BLACK50} />
                                </TouchableOpacity>
                            </ContentHeader>

                            <ContentBottom>
                                <ContentBottomView >
                                    <View 
                                        style={{ width: '99%', height:2, backgroundColor:MainColor.GRAY2, position:'absolute', bottom:-1 }} />
                                    <View 
                                        style={{ width: list.periodic ? '0%' : "30%" , height:2, backgroundColor:MainColor.Banana, position:'absolute', bottom:-1 }} />
                                    <Text style={{ fontFamily: 'Noto400', fontSize: 12, color: MainColor.GRAY2, }} >활동 시작전이에요.</Text>
                                    <View style={{ position:'absolute', bottom: 2, right: 0 }} >
                                        <Goal width={ICONSIZE.BOTTOM_NAV_HEADER_ICON} height={ICONSIZE.BOTTOM_NAV_HEADER_ICON} fill={MainColor.BLACK38} />
                                    </View>
                                </ContentBottomView>
                            </ContentBottom>
                        </ContentBox>
                        <View style={{ position:'absolute', bottom: -16, left:-16, width: Width, height:1, backgroundColor: '#eee' }} />
                    </Content>
                ))}
                </Contents>
            </>
            }
        </Wrapper>
    )
}

export default ing
