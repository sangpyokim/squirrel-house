import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { MainColor } from './Color'


const DDay = styled.View`
    position: absolute;
    top:0;
    left:0;
    height:24px;
    width:54px;
    background-color:${props => props.color !== null ? 'black' : 'transparent'};
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
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const D_Day = ({endDate}) => {

    const monthCul = (num) => {
        let day = 0
        for( let i = 0; i < num; i++ ) {
            day += month[i]
        }
        return day
    }

    const dater = () => {
        const daterr = new Date()
        const dater = JSON.stringify(daterr)
        const day = dater.substr(2,9).split("-")[0] * 365 + monthCul(dater.substr(2,9).split("-")[1]) + dater.substr(2,9).split("-")[2] * 1
        const endDay = endDate.substr(2,9).split("-")[0] * 365 + monthCul(endDate.substr(2,9).split("-")[1]) + endDate.substr(2,9).split("-")[2] * 1
        

        if ( endDay - day === 1 || endDay - day === 2 ) {
            return `D-${endDay - day}`
        } else {
            return null
        }

    }

    useEffect( () => {
    },[])

    return(
        <DDay color={dater()} >
            <Day>
                <Text>{dater()}</Text>
            </Day>    
        </DDay>
    )
}



export default D_Day
