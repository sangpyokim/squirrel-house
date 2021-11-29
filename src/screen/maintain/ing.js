import React, { useEffect, useState } from 'react'
import { Dimensions ,FlatList,Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { MainColor } from '../../components/Color'
import Chat from '../../asset/4_page/chat.svg'
import Goal from '../../asset/4_page/goal.svg'
import Out from '../../asset/4_page/out.svg'
import { ICONSIZE } from '../../components/Size'
import D_Day from '../../components/D_Day'
import IngImage from '../../components/IngImage'
import Mark from '../../asset/common/4_tag/mark.svg'
import axios from 'axios'

const Width = Dimensions.get('window').width
const Color = ['#FFD515', '#FF5D17', '#266CF9', '#4BBF00', "#FF8515" ,'#F6F6F6' ]



const  GroupCount = styled.View`
    margin-left: 16px;
    flex-direction: row;
    height: 24px;
    align-items:center;
`
const Wrapper = styled.View`
    background-color: ${MainColor.BACKGROUND};
    width: 100%;
`
const Contents = styled.View`
    background-color:white;
    padding: 0 16px 16px 16px;
    width: 100%;
`
const Content = styled.TouchableOpacity`
    width:100%;
    height: 184px;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 16px;
    padding-top: 16px;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
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
    background-color: ${ props => props.backgroundColor ? 'black' : MainColor.Banana };
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


const ing = ({navigation}) => {
    const user = useSelector( (state) => state.loginout.user)

    const [ loading, setLoading ] = useState(true)
    const [ myRoomList, setMyRoomList ] = useState(null)
    const [ image, setImage ] = useState()



    const getMyRoomList = async() => {
        const data = await fetch('http://3.35.235.33:8080/room/myRoomList', {
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
    }
    
    
    const onPressOutGroup = async(id) => {
        const data = await axios.put(`http://3.35.235.33:8080/delete/${id}`)
        console.log(id,data)
    }
    
    

    useEffect( () => {
        getMyRoomList()
        // 방 리스트 가져오는 api
        // 방들어가는 api, 나가는 api

    }, [])

    return (
        <Wrapper>
            {myRoomList === null 
              ? 
                null
              :
            <>  
                <GroupCount >
                    <Text style={{ fontFamily: 'Noto400', fontSize:12, letterSpacing: 0.15, opacity: 0.8 }} >{myRoomList.length}</Text>
                    <Text style={{ fontFamily: 'Noto400', fontSize:12, color: MainColor.BLACK38, letterSpacing: 0.15 }} >개의 모임 진행중</Text>
                </GroupCount>

                <Contents>
                <FlatList 
                    refreshing={loading}
                    onRefresh={() => getMyRoomList()}
                    data={myRoomList}
                    keyExtractor={ item => item.roomInfoDTO.id}
                    renderItem={ ({item, index}) => (
                        <Content  key={ index} onPress={ () => navigation.navigate('Detail', {'room': item.roomInfoDTO})} >
                            <View>
                            <IngImage lists={item.roomInfoDTO.id} />
                                <D_Day endDate={item.roomInfoDTO.startDate} />
                                <View style={{ position: 'absolute', bottom: -1, right: -1 }} >
                                    <Mark width={17.5} height={17.5} fill={Color[item.roomInfoDTO.categoryID-1]} />
                                </View>
                            </View>    
                            <ContentBox>
                                <ContentHeader >
                                    <ContentHeaderView >
                                        <ContentHeaderViewText backgroundColor={item.roomInfoDTO.periodic}  >
                                            <Text style={{ color: item.roomInfoDTO.periodic ? MainColor.BLACKBOX : MainColor.BANANABOX, fontSize: 10, fontFamily: 'Noto500', lineHeight: 16 }} >{item.roomInfoDTO.periodic ? "정기" : "단기"}</Text>
                                        </ContentHeaderViewText>
                                    </ContentHeaderView>

                                    <Text style={{ fontFamily: 'Dream', fontSize: 20, marginTop: 8, marginBottom: 12, letterSpacing: 0.15 }} >{item.roomInfoDTO.title}</Text>

                                    <View style={{ flexDirection: 'row', justifyContent:'space-between', width: "100%" }} >
                                        <View style={{  alignItems:'center', justifyContent: 'center' }} >
                                            <Text style={{ color: MainColor.BANANABOX, fontSize: 14, fontFamily: 'Noto500',  }}>{item.roomInfoDTO.periodic ? `주 ${item.roomInfoDTO.frequency}회 모임` : `단기 모임`}</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity style={{ position: 'absolute', top: 0, right:0 }} >
                                        <Chat width={24} height={24} fill={MainColor.BLACK50} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ position: 'absolute', top: 40, right:0 }} onPress={() => onPressOutGroup(item.roomInfoDTO.id)} >
                                        <Out width={24} height={24} fill={MainColor.BLACK50} />
                                    </TouchableOpacity>
                                </ContentHeader>

                                <ContentBottom>
                                    <ContentBottomView >
                                        <View 
                                            style={{ width: '99%', height:2, backgroundColor:MainColor.GRAY2, position:'absolute', bottom:-1 }} />
                                        <View 
                                            style={{ width: item.roomInfoDTO.periodic ? '60%' : "0%" , height:2, backgroundColor:MainColor.Banana, position:'absolute', bottom:-1 }} />
                                        <Text style={{ fontFamily: 'Noto400', fontSize: 12, color: MainColor.GRAY2, marginBottom: 4 }} >
                                            {item.roomInfoDTO.periodic ? <Text>활동완료까지<Text style={{ color: 'black' }} > -7</Text>일</Text> : "활동 시작전에이요." }
                                        </Text>
                                        <View style={{ position:'absolute', bottom: 2, right: 0 }} >
                                            <Goal width={ICONSIZE.BOTTOM_NAV_HEADER_ICON} height={ICONSIZE.BOTTOM_NAV_HEADER_ICON} fill={MainColor.BLACK38} />
                                        </View>
                                    </ContentBottomView>
                                </ContentBottom>
                            </ContentBox>
                        </Content>
                        
                        )}
                    listFooterComponent={<View style={{ height:70, backgroundColor:'white' }} />}
                />
                </Contents>
            </>
            }
        </Wrapper>
    )
}

export default ing
