import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { Text, View,Button, TouchableOpacity, Keyboard, TextInput } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { DatePickers } from '../../components/DatePicker';
import { MainColor } from '../../components/Color'
import { ImagePick } from '../../components/Image';

const MainCategory = [ '사진/영상', '게임/오락', '운동/스포츠', '공부/스터디' , '식사/술', '자유주제']

const Wrapper = styled.ScrollView`
    flex: 1;
    background-color: white;
`
//category
const CategoryContainer = styled.View`
    margin-top: 8%;
`
const CategoryHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5% 5% 5%;
`
const CategoryTitle = styled.Text`
    font-size: 18px;
`
const CategoryToggle = styled.TouchableOpacity`

`
const CategoryContents = styled.View`
    flex:1;
    flex-direction: row;
    flex-wrap: wrap;
`
const CategoryContent = styled.View`
    background-color: #ddd;
    align-items: center;
    justify-content: center;
    width: 25%;
`
//info
const InfoContainer = styled.View`
margin-top: 3%;
`
const InfoHeader = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 0 5% 5% 5%;
`
const Info = styled.TouchableOpacity`

`
const InfoCount = styled.View`
    width: 80%;
    height: 40px;
    padding: 10px;
    margin-left: 10px;
    border-radius: 5px ;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
`
const InfoCountButton = styled.TouchableOpacity`
    opacity: 0.6;
    margin: 0 5px;
`
//prefer
const PrefContainer = styled.View`
margin-top: 3%;
`
const PrefHeader = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 0 5% 5% 5%;
`
const PrefWrapper = styled.View`
    background-color: #eee;
    padding: 5% 7%;
    justify-content:center;
    padding-bottom: 0;
`
const PrefContents = styled.View`
`
const PrefContent = styled.View`
    align-items:center;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 5%;

`

const OptionWrapper = styled.View`
    padding: 3% 5%;
    background-color: #eee;
    margin-bottom: 3%;
`
const OptionContioner = styled.View`
    flex-direction: row;
    align-items:center;
`
const OptionContent = styled.TouchableOpacity`
    width: 75px;
    height: 75px;
    background-color: #ddd;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`
const CreateButton = styled.TouchableOpacity`
    width: 90%;
    background-color: ${MainColor.Banana};
    margin-left: 5%;
    justify-content:center;
    align-items:center;
    height: 50px;
`

const Writing = ({ navigation }) => {
    const [ firstToggle, setFirstToggle] = useState(true)
    const [ secondToggle, setSecondToggle] = useState(false)
    const [ thirdToggle, setThirdToggle] = useState(false)
    const [ selected, setSelected ] = useState(null) // 카테고리 인덱스
    const [ name, setName ] = useState(null) // 모임명
    const [ area, setArea ] = useState(null) // 활동지역
    const [ image, setImage ] = useState(null) //사진
    const [ period, setPriod ] = useState(true); // 단기 정기
    const [ times, setTimes ] = useState(null) // 주 몇번
    const [ beforeDay, setBeforeDay ] = useState(new Date()) // 시작날짜
    const [ afterDay, setAfterDay ] = useState(new Date()) // 끝나는 날짜
    const [ count, setCount ] = useState(2); // 모집인원 수
    const [ firstOption, setFirstOption ] = useState(false); // 선호 옵션 선택
    const [ secondOption, setSecondOption ] = useState(false); // 선호 옵션 선택
    

    const refresh = () => {
        setFirstToggle(true)
        setSecondToggle(false)
        setThirdToggle(false)
        setSelected(null)
        setName(null)
        setArea(null)
        setImage(null)
        setPriod(true)
        setTimes(null)
        setBeforeDay(new Date())
        setAfterDay(new Date())
        setCount(2)
        setFirstOption(null)
        setSecondOption(null)
    }

    useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => (<TouchableOpacity 
                style={{ marginRight: 10 }} 
                onPress={() => refresh() }
                >
                <Ionicons name="refresh" size={27} color="black" />
            </TouchableOpacity>),
        })
    })


    const onPress = (index) => {
        setSelected(index)
    }
    const onPressMakingGroup = () => {
        // 모임 생성 api 호출 && 생성이되면 메인페이지로 이동
        console.log(
            "selected:", selected,
            "name:", name,
            "area:", area,
            "image:", image,
            "period:", period,
            "times:", times,
            "beforeDay:", beforeDay,
            "afterDay:", JSON.stringify(afterDay).substr(0, 11) == JSON.stringify(beforeDay).substr(0, 11) ? null : beforeDay,
            "count:",count,
            "firstOption:", firstOption,
            "secondOption:", secondOption,
        )
        null
    }
    return (
        <Wrapper bounces={false} onPress={Keyboard.dismiss} >
                {/* 카테고리 */}                
                <CategoryContainer>
                    <CategoryHeader>   
                        <CategoryTitle>모임 카테고리</CategoryTitle>
                        {firstToggle ? 
                        <CategoryToggle >
                            <AntDesign name="down" size={25} color="black" />
                        </CategoryToggle> :
                        <CategoryToggle onPress={ () => {
                            setFirstToggle(true)
                            setSecondToggle(false)
                            setThirdToggle(false)
                            } } >
                            <AntDesign name="left" size={25} color="black" />
                        </CategoryToggle>
                        }
                    </CategoryHeader>
                    {firstToggle ?
                    <CategoryContents horizontal={true} bounces={false} showsHorizontalScrollIndicator={false}  >
                        { MainCategory.map( (category, index) => (
                            <CategoryContent key={index} >
                            <TouchableOpacity 
                                onPress={() => onPress(index)} 
                                style={{ 
                                    backgroundColor: index === selected ? 'white':'#F2F3F5',
                                    borderColor: index === selected ? MainColor.Banana: null,
                                    borderWidth: index === selected ? 1 : null,
                                    height: 75, width: '100%',
                                    alignItems: 'center', 
                                    justifyContent: 'center' 
                                }} >
                                <AntDesign name="down" size={25} color={index === selected ? MainColor.Banana: "black"} />
                                <Text style={{ color:index === selected ? MainColor.Banana: "black" }} >{category}</Text>
                            </TouchableOpacity>
                            </CategoryContent>
                        ))}
                    </CategoryContents>
                    :
                        null
                    }
                </CategoryContainer>
                {/* 기본정보 */}
                <InfoContainer>
                    <InfoHeader>   
                            <CategoryTitle>모임 기본정보</CategoryTitle>
                            {secondToggle ? 
                            <CategoryToggle>
                                <AntDesign name="down" size={25} color="black" />
                            </CategoryToggle> :
                            <CategoryToggle onPress={ () => {
                                setSecondToggle(true)
                                setFirstToggle(false)
                                setThirdToggle(false)
                                } } >
                                <AntDesign name="left" size={25} color="black" />
                            </CategoryToggle>
                            }
                    </InfoHeader>
                    {secondToggle ?
                    <PrefWrapper>
                        <PrefContents>
                            <PrefContent>
                                <AntDesign name="down" size={25} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 50, textAlign: 'left' }} >모임명</Text>
                                <TextInput onChangeText={(text) => setName(text)} placeholder='모임명을 적어주세요' style={{ width: '80%', height: 40,padding: 10 ,backgroundColor: 'white', marginLeft: 10, borderWidth: 1, borderColor: '#999', borderRadius: 5 }}  ></TextInput>
                            </PrefContent>
                            <PrefContent>
                                <AntDesign name="down" size={25} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 50, textAlign: 'left', }}  >활동지</Text>
                                <TextInput onChangeText={(text) => setArea(text)} placeholder='활동 장소를 적어주세요' style={{ width: '80%', height: 40,padding: 10 ,backgroundColor: 'white', marginLeft: 10, borderWidth: 1, borderColor: '#999', borderRadius: 5 }}  ></TextInput>
                            </PrefContent>
                            <PrefContent>
                                <AntDesign name="down" size={25} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 50, textAlign: 'left', }}  >사진</Text>
                                <View style={{ width: '80%', flexDirection: 'row', justifyContent:'space-between',marginRight: 10  }} >
                                    <View
                                        style={{ width: '70%', height: 40,backgroundColor: 'white', marginLeft: 10, borderWidth: 1, borderColor: '#999', borderRadius: 5, paddingLeft: 10, textAlign: 'center', justifyContent: 'center'}} >
                                        <Text>
                                        {image 
                                          ? 
                                        `${image.substring(image.lastIndexOf("ImagePicker")+12).substr(0,15)}...${image.substr(-4)}`
                                          :
                                        null    
                                        }
                                        </Text>
                                    </View>
                                    
                                    <ImagePick 
                                        setImage={setImage}
                                         />
                                </View>
                            </PrefContent>
                            <PrefContent>
                                <AntDesign name="down" size={25} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 50, textAlign: 'left'}}  >횟수</Text>
                                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginLeft: 10, alignItems: 'center' }} >
                                    <View style={{ width: '50%', flexDirection: 'row' }} >
                                        <TouchableOpacity 
                                            onPress={() => setPriod(true)}
                                            style={{ width: '45%',height:40 ,backgroundColor: period ? 'wheat' : 'white' , borderWidth: 1, borderColor: '#999', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text  style={{ opacity: 0.4}}>단기</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            onPress={() => setPriod(false)}
                                            style={{ width: '45%',height:40 ,backgroundColor: period ? 'white' : 'wheat' , borderWidth: 1, borderColor: '#999', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ opacity: 0.4}} >정기</Text>
                                        </TouchableOpacity>
                                    </View>
                                    { period ? null 
                                      :
                                    <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}} >
                                        <Text style={{ width: '25%', paddingLeft: 10}} >주</Text>
                                        <TextInput onChangeText={(text) => setTimes(text)}  placeholder='회' style={{ width: '75%', height: 40,padding: 10 ,backgroundColor: 'white', borderWidth: 1, borderColor: '#999', borderRadius: 5, textAlign: 'center' }}></TextInput>
                                    </View>
                                      
                                      }
                                </View>
                            </PrefContent>
                            <PrefContent>
                                <AntDesign name="down" size={25} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 50, textAlign: 'left', }}  >활동일</Text>
                                {period 
                                  ?
                                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginLeft: 10, alignItems: 'center' }} >
                                  <DatePickers setDay={setBeforeDay} />

                              </View>
                                  :
                                  <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginLeft: 10, alignItems: 'center' }} >
                                    <DatePickers setDay={setBeforeDay} />
                                    <Text style={{ opacity: 0.2, fontSize: 22}} > - </Text>
                                    <DatePickers setDay={setAfterDay} />
                                </View>
                                }
                                
                            </PrefContent>
                            <PrefContent>
                                <AntDesign name="down" size={25} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 50, textAlign: 'left' }} >모집인원</Text>
                                <InfoCount>
                                    <InfoCountButton>
                                        <Text onPress={() => count < 10 ? setCount(count+1) : null } >+</Text>
                                    </InfoCountButton>
                                    <Text>{count}</Text>
                                    <InfoCountButton>
                                        <Text onPress={() => count > 2 ? setCount(count-1) : null } >-</Text>
                                    </InfoCountButton>
                                </InfoCount>
                            </PrefContent>
                        </PrefContents>
                    </PrefWrapper>
                    : 
                        null    
                    }
                </InfoContainer>
                {/* 선호옵션 */}
                <PrefContainer>
                    <PrefHeader>   
                            <CategoryTitle>선호 옵션</CategoryTitle>
                            {thirdToggle ? 
                            <CategoryToggle >
                                <AntDesign name="down" size={25} color="black" />
                            </CategoryToggle> :
                            <CategoryToggle onPress={ () => {
                                setThirdToggle(true)
                                setSecondToggle(false)
                                setFirstToggle(false)
                                } } >
                                <AntDesign name="left" size={25} color="black" />
                            </CategoryToggle>
                            }
                    </PrefHeader>
                    {thirdToggle ? 
                    <OptionWrapper>
                    <OptionContioner  >
                        <OptionContent onPress={ () => setFirstOption( firstOption === true ? false : true  ) } >
                            <AntDesign name="meh" size={48} color={ firstOption ? '#FFd515' : 'black'}/>
                            <View style={{ position:'absolute', top:10, right: 10}} >
                                <AntDesign name="checkcircle" size={24} color={ firstOption ? '#FFd515' : 'black'}/>
                            </View>
                        </OptionContent>
                        <OptionContent onPress={ () => setSecondOption( secondOption === true ? false : true )} >
                            <AntDesign name="meh" size={48} color={ secondOption ? '#FFd515' : 'black'}/>
                            <View style={{ position:'absolute', top:10, right: 10}} >
                                <AntDesign name="checkcircle" size={24} color={ secondOption ? '#FFd515' : 'black'}/>
                            </View>
                        </OptionContent>
                    </OptionContioner> 
                    </OptionWrapper>
                    :
                    null
                    }
                </PrefContainer>
            <CreateButton onPress={onPressMakingGroup}> 
                <Text>모임 만들기</Text>
            </CreateButton>
        </Wrapper>
    )
}
export default Writing
