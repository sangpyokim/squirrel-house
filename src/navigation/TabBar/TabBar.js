import React, {  useState } from 'react'
import { Dimensions,  } from 'react-native'
import styled from 'styled-components'
import Tab from './Tab'
import WriteTab from './WriteTab'
import Svg, { Path } from 'react-native-svg'

const width = Math.floor(Dimensions.get('window').width)
const height = Math.floor(Dimensions.get('window').height)

const Container = styled.View`
    position: absolute;
    bottom:0px;
    width: ${width}px;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    background-color: transparent;
    z-index: 10;
`

const icons = ['home'];

const TabBar = (props,{ state}) => {
    const [ selected, setSelected ] = useState('모임찾기')

    const {routes} = props.state;
    const {navigation} = props

    const renderColor = (currentTab) => currentTab === selected ? 'wheat' : 'black'

    const handlePress = (activeTab) => {
        if (selected !== activeTab){
            setSelected(activeTab)
            navigation.navigate(activeTab)
        }
    }



    return(
        <>
            <Svg style={{ width: '100%', height:'8%',
                backgroundColor: 'transparent', 
                position:'absolute', 
                bottom: 0,
             	shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3, 
                }}> 

                <Path fill="white" stroke="#555" strokeWidth="3" strokeOpacity="0.1" d={ `M ${width / 5 * 3}, 0 A 30 30 0 1 1 ${width / 5 * 2}, 0 L 0, 0 L 0, ${height} L ${width} ${height} L ${width} 0 L ${width /5 *3} 0 ` } />
            </Svg>
        <Container>
                <Tab 
                    tab={routes[0]} 
                    icon={icons[0]} 
                    onPress={() => handlePress(routes[0].name)} 
                    color={renderColor(routes[0].name)} 
                    key={routes[0].key} 
                />
                <Tab 
                    tab={routes[1]} 
                    icon={routes[1].name} 
                    onPress={() => handlePress(routes[1].name)} 
                    color={renderColor(routes[1].name)} 
                    key={routes[1].key} 
                />
                <WriteTab 
                    tab={routes[2]} 
                    icon={null} 
                    onPress={() => navigation.navigate('Writing')} 
                    key={routes[2].key} 
                />
                <Tab 
                    tab={routes[3]} 
                    icon={routes[3].name} 
                    onPress={() => handlePress(routes[3].name)} 
                    color={renderColor(routes[3].name)} 
                    key={routes[3].key} 
                />
                <Tab 
                    tab={routes[4]} 
                    onPress={() => handlePress(routes[4].name)} 
                    color={renderColor(routes[4].name)} 
                    icon={routes[4].name} 
                    key={routes[4].key} 
                />
        </Container>
        </>
    )
}

export default TabBar

/*
    return(
        <Container>
            <Views>
                <Tab 
                    tab={routes[0]} 
                    icon={icons[0]} 
                    onPress={() => handlePress(routes[0].name)} 
                    color={renderColor(routes[0].name)} 
                    key={routes[0].key} 
                />
                <Tab 
                    tab={routes[1]} 
                    icon={routes[1].name} 
                    onPress={() => handlePress(routes[1].name)} 
                    color={renderColor(routes[1].name)} 
                    key={routes[1].key} 
                />
                <WriteTab 
                    tab={routes[2]} 
                    icon={null} 
                    onPress={() => navigation.navigate('Writing')} 
                    key={routes[2].key} 
                />
                <Tab 
                    tab={routes[3]} 
                    icon={routes[3].name} 
                    onPress={() => handlePress(routes[3].name)} 
                    color={renderColor(routes[3].name)} 
                    key={routes[3].key} 
                />
                <Tab 
                    tab={routes[4]} 
                    onPress={() => handlePress(routes[4].name)} 
                    color={renderColor(routes[4].name)} 
                    icon={routes[4].name} 
                    key={routes[4].key} 
                />
            </Views>
        </Container>
    )
*/