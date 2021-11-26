import React from 'react'
import { View, Text } from 'react-native'

const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const Dater = ({endDate}) => {
    
    const monthCul = num => {
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
        
        console.log(endDay - day )
        if ( endDay - day === 1 || endDay - day === 2 ) {
            return `${endDay - day}`
        } else {
            return null
        }

    }
    return dater()
}


export default Dater
