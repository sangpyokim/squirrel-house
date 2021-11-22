import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

const Hot_Bunning = styled.View`
    
    width: 296px;
    height: 24px;
    left: 16.09px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #FFD515;
    background-color:blue;
`

const Midterm = styled.View`
    
    width: 296px;
    height: 48px;
    left: 16.09px;
    font-family: LotteMartDreamBold;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
    background-color:yellow;
`

const Midterm_text = styled.View`
    
    width: 173px;
    height: 40px;
    left: 20.09px;
    
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: #949494;
    background-color:purple;
`

const Withme = styled.View`
    
    width: 328px;
    height: 48px;
    left: 16.09px;

    background: #FFD515;
    border-radius: 2px;
    background-color:skyblue;
`

const Total_bunning_group_list = styled.View`
    
    width: 296px;
    height: 23px;
    left: 48.09px;
    
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    text-align: right;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.38);
    background-color:red;
`

const Total_group_list = styled.View`
    
    width: 296px;
    height: 24px;
    left: 16.09px;
    
    font-family: LotteMartDreamBold;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #FFD515;
    background-color:green;
`


const Wrapper = styled.ScrollView`
    padding: 8px 16px 0px 16px;
    width:100%;
    background-color:white;
`
const Header = styled.View`
  background-color: gray;
  width: 100%;
  height:100%;
`
const Content = styled.View`
  background-color:white;
  width: 100%;
  height:70px;
`

const Home = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [ list, setList ] = useState(null)


    const onPress = async() => {
      const data = await fetch('http://211.227.151.158:8080/room/getList', {
        method: 'post',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "memberID": "User1"
        })
      }).then( res => res.json() )

      console.log( data )
    } 

    return (
      <Wrapper bounces={false} >
        <Header>
          <H24 />
          <Hot_Bunning>
            <Text>HOT RUNNING</Text>
          </Hot_Bunning>
          <H2 />
          <Midterm />
          <H16 />
          <Midterm_text />
          <H29 />
          <Withme />
          <H1 />
          <Total_bunning_group_list />
          <H14 />
          <Total_group_list_wrapper>
            <Total_group_list />
            <Gugyong />
          </Total_group_list_wrapper>
          <H8 />
          <Group_Image_Wrapper>
            <Group_Image />
            <H8 />
            <Group_Image />
            <H8 />
            <Group_Image />
            
          </Group_Image_Wrapper>
          <H40 />
          <Total_group />
          <Recent />
          <H11 />
          <Category_list_wrapper>
            <H88_8_0_8_16 />
          </Category_list_wrapper>
        </Header>
      </Wrapper>
      );
}


const H1 = styled.View`
    width:1px;
    height:1px;
    backgroundColor:yellow;
`;

const H2 = styled.View`
    width:2px;
    height:2px;
    backgroundColor:yellow;
`;

const H8 = styled.View`
    width:8px;
    height:8px;
    backgroundColor:yellow;
`;
const H11 = styled.View`
    width:11px;
    height:11px;
    backgroundColor:yellow;
`;
const H14 = styled.View`
    width:14px;
    height:14px;
    backgroundColor:yellow;
`;
const H16 = styled.View`
    width:16px;
    height:16px;
    backgroundColor:yellow;
`;
const H22 = styled.View`
    width:16px;
    height:22px;
    backgroundColor:red;
`;
const H24 = styled.View`
    width:100%;
    height:24px;
    backgroundColor:blue;
`;
const H29 = styled.View`
    width:16px;
    height:29px;
    backgroundColor:red;
`;
const H40 = styled.View`
    width:40px;
    height:40px;
    backgroundColor:white;
`;
const H40_0_4_0_4 = styled.View`
    width:173px;
    height:40px;
    backgroundColor:red;
    margin:0px 4px 0px 4px;
`;
const H40_0_8_0_8 = styled.View`
    width:100%;
    height:40px;
    backgroundColor:red;
    padding:0px 8px 0px 8px;
`;
const H48 = styled.View`
    width:100%;
    height:48px;
    backgroundColor:green;
`;
const H55_24 = styled.View`
    width:55px;
    height:24px;
    backgroundColor:green;
`;
const H88_8_0_8_16 = styled.View`
    width:88px;
    height:88px;
    backgroundColor:green;
    padding: 8px 0px 8px 16px;
`;

const Text_12_16_12_16 = styled.Text`
    padding:12px 16px 12px 16px;
`;
const Group_Image = styled.View`
    height:112px;
    width:128px;
    backgroundColor:red;
    
`;
const Group_Image_Wrapper = styled.View`
    height:112px;
    width:256px;
    backgroundColor:gray;
    flex-direction: row;
`;

/* Rectangle 139 */

const Category_list = styled.View`
    width: 128.03px;
    height: 112px;
    
    background: rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`

const Total_group = styled.View`
    width: 65px;
    height: 24px;
    left: 16.09px;
    font-family: LotteMartDreamBold;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
    backgroundColor:red;
`
const Recent = styled.View`
    width: 86px;
    height: 32px;
    left: 257.11px;
    background: #F2F3F5;
    border: 1px solid #EDEDED;
    border-radius: 2px;
`
const Total_group_List = styled.View`
    width: 360px;
    height: 104px;
    left: 0px;
    top: 0px;
    background: black;
`
const Total_group_list_wrapper = styled.View`
    width: 100%;
    height: 24px;
    left: 0px;
    top: 0px;
    background: blue;
    flexDirection:row;
`
const Category_list_wrapper = styled.View`
    width: 100%;
    height: 112px;
    left: 15.87px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 2px;

    flexDirection:row;
`
const Gugyong = styled.View`
    position: absolute;
    width: 45.09px;
    height: 23px;
    left: 286.39px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    text-align: right;
    letter-spacing: 0.15px;
    color: black;
`
export default Home;