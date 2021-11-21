import React from 'react'
import { Dimensions ,Text } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { MainColor } from '../../components/Color'

const Width = Dimensions.get('window').width

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
`
const ContentBox = styled.View`
    height:100%;
    background-color: wheat;
    flex-direction: row;
    width: ${Width*0.67 - 48}px;
`
const ContentHeader = styled.View`

`
const ContentBottom = styled.View`

`
const ing = () => {
    const user = useSelector( (state) => state.loginout.user)
    
    // 방 리스트 가져오는 api
    // 방들어가는 api, 나가는 api

    return (
        <Wrapper>
            <Contents>
                <Content>
                    <PostImage />
                    <ContentBox>
                        <ContentHeader />
                        <ContentBottom />
                    </ContentBox>
                </Content>
            </Contents>
        </Wrapper>
    )
}

export default ing
