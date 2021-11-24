import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { MainColor } from '../../components/Color'
import Like from '../../asset/common/list_icon/list_icon_4_like.svg';
import IllHot from '../../asset/common/5_illustration/ill_hot.svg';
import List from '../../components/List'

const Width = Dimensions.get('window').width

const FilterContainer = styled.View`
    height:48px;
    width:100%;
    background-color:white;
`
const TitleContainer = styled.View`
    width:100%;
    height: 96px;
    background-color: transparent;
    padding: 0 16px;
    justify-content:flex-end;
`
const TitleContainerTitle = styled.View`
    width:100%;
    height: 50%;
    justify-content:flex-end;
    margin-bottom: 8px;
`
const Contents = styled.View`
    width: 100%;
    height: 104px;
    background-color: white;
    padding: 8px 16px;
    flex-direction: row;
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
`
const Content = styled.View`
    width: ${Width - 88 - 40}px;
    height:100%;
    background-color:wheat;
`
const Title = styled.Text`
    margin-right: 8px;
`
const TagContainer = styled.View`
    width: 35px;
    height: 16px;
    background-color: ${MainColor.Banana};
    border-radius: 2px;
`

const Tag = styled.Text`
    color: ${MainColor.BANANABOX};
`

const HotGroup = () => {
    return (
        <View>
            <FilterContainer>
                <Text>필터 넣을거임</Text>
            </FilterContainer>
            <TitleContainer>
                <TitleContainerTitle>
                    <Text style={{ fontFamily: 'Dream', fontSize: 20, height:24}} >실시간 HOT 10</Text>
                    <Text style={{ height: 20, fontFamily: 'Noto400', fontSize:10 }} >11.09 07시 02분 기준</Text>
                </TitleContainerTitle>
                <View style={{ position: 'absolute', right: 16, bottom: -4 }} >
                <IllHot/>
                </View>
            </TitleContainer>

            <List />
            <List />

        </View>
    )
}

export default HotGroup
