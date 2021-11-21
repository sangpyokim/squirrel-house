import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled.View`
  padding: 8px 0;
  width:100%;
`
const Header = styled.View`
  background-color: black;
  padding: 16px 8px;
  width: 100%;
  height:100px;
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
      <Wrapper>
        <Header>
          <Content>
            <Text>
              hot burning
            </Text>
          </Content>
        </Header>
      </Wrapper>
      );
}

export default Home;
