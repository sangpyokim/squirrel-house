import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { Text, View,Button, TouchableOpacity, Keyboard, TextInput, Alert } from 'react-native'
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
    font-family: 'Dream';
`
const CategoryToggle = styled.TouchableOpacity`

`
const CategoryContents = styled.View`
    flex:1;
    flex-direction: row;
    flex-wrap: wrap;
`
const CategoryContent = styled.View`
    background-color: ${MainColor.BACKGROUND};
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
    border-radius: 2px ;
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
    padding: 0% 16px;
    justify-content:center;
    padding-bottom: 0;
`
const PrefContents = styled.View`
    padding: 0 12px;
`
const PrefContent = styled.View`
    align-items:center;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 5%;

`

const OptionWrapper = styled.View`
    padding: 3% 5%;
    background-color: ${MainColor.BACKGROUND};
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
    border-radius: 2px;
`

const Writing = ({ navigation }) => {
    const [ firstToggle, setFirstToggle] = useState(true)
    const [ secondToggle, setSecondToggle] = useState(false)
    const [ thirdToggle, setThirdToggle] = useState(false)
    const [ selected, setSelected ] = useState(null) // 카테고리 인덱스
    const [ name, setName ] = useState("") // 모임명
    const [ area, setArea ] = useState("") // 활동지역
    const [ image, setImage ] = useState(null) //사진
    const [ period, setPriod ] = useState(true); // 단기 정기
    const [ times, setTimes ] = useState("") // 주 몇번
    const [ beforeDay, setBeforeDay ] = useState(new Date()) // 시작날짜
    const [ afterDay, setAfterDay ] = useState(null) // 끝나는 날짜
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
    
    const unLoadImage = async ( Image ) => {

        const formData = new FormData();
        formData.append('poster', {
          name: new Date() + '_poster',
          uri: Image,
          type: 'image/jpg'
        })
        console.log(JSON.stringify(formData))
      }
    

    const onPress = (index) => {
        setSelected(index)
    }

    const dataValidation = () => {
        selected === null ? Error.throw() : null
        name === "" ? Error.throw() : null
        area === "" ? Error.throw() : null
        period && afterDay === null ? Error.throw() : null
        period && times === "" ? Error.throw() : null        
    }

    const onPressMakingGroup = async() => {
        try {
            dataValidation()

            const data = await fetch('http://211.227.151.158:8080/room/register', {
                method: 'post',
                headers: {
                  "Accept": 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "category_id" : selected === null ? null : selected + 1 , // 카테고리 번호
                    "title" : name,      // 모임(방) 이름
                    "place" : area,         // 활동지
                    "periodic" : period,      // 정기 모임이면 true 단기 모임이면 false
                    "endDate" : "2021-11-30",
                    "frequency": count,    // 모임 종료 날짜
                    "max_People" : count,      // 최대 인원
                    "prefer" : `${firstOption ? firstOption : null}, ${secondOption ? secondOption : null}`,   // 선호 옵션
                    "member_id" : "User1",      // 방 생성하는 사람 id(방장)
                    })
            }).then( res => res.json() ).catch( e => console.log("실패"))
            unLoadImage(image)
            console.log("api 호출: ",data)
            
        } catch (error) {
            console.log(error)
            Alert.alert('정보들을 입력해주세요.')
        }
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
                                    backgroundColor: index === selected ? 'white': MainColor.BACKGROUND,
                                    borderColor: index === selected ? MainColor.Banana: null,
                                    borderWidth: index === selected ? 1 : null,
                                    height: 75, width: '100%',
                                    alignItems: 'center', 
                                    justifyContent: 'center' ,
                                }} >
                                <AntDesign name="down" size={25} color={index === selected ? MainColor.Banana: MainColor.BLACK38} />
                                <Text style={{ color:index === selected ? MainColor.Banana: MainColor.BLACK38, fontFamily: 'Noto500' }} >{category}</Text>
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
                                <Text style={{ width: 50, textAlign: 'left', color: MainColor.BLACK70, fontFamily: 'Noto500', fontSize: 14 }} >모임명</Text>
                                <TextInput onChangeText={(text) => setName(text)}  value={name} placeholder='모임명을 적어주세요' maxLength={15} style={{ width: '80%', fontFamily: 'Noto400', fontSize: 12, height: 40,padding: 10 ,backgroundColor: 'white', marginLeft: 10, borderWidth: 1, borderColor: '#999', borderRadius: 2 }}  ></TextInput>
                            </PrefContent>
                            <PrefContent>
                                <AntDesign name="down" size={25} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 50, textAlign: 'left', color: MainColor.BLACK70, fontFamily: 'Noto500', fontSize: 14 }}  >활동지</Text>
                                <TextInput onChangeText={(text) => setArea(text)} value={area} placeholder='활동 장소를 적어주세요' style={{ width: '80%', height: 40, fontFamily: 'Noto400', fontSize: 12,padding: 10 ,backgroundColor: 'white', marginLeft: 10, borderWidth: 1, borderColor: '#999', borderRadius: 2 }}  ></TextInput>
                            </PrefContent>
                            <PrefContent>
                                <AntDesign name="down" size={25} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 50, textAlign: 'left', color: MainColor.BLACK70, fontFamily: 'Noto500', fontSize: 14 }}  >사진</Text>
                                <View style={{ width: '80%', flexDirection: 'row', justifyContent:'space-between',marginRight: 10  }} >
                                    <View
                                        style={{ width: '70%', height: 40,backgroundColor: 'white', marginLeft: 10, borderWidth: 1, borderColor: '#999', borderRadius: 2, paddingLeft: 10, textAlign: 'center', justifyContent: 'center'}} >
                                        <Text style={{ fontFamily: 'Noto400', fontSize: 12 }} >
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
                                <Text style={{ width: 50, textAlign: 'left', color: MainColor.BLACK70, fontFamily: 'Noto500', fontSize: 14}}  >횟수</Text>
                                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginLeft: 10, alignItems: 'center' }} >
                                    <View style={{ width: '50%', flexDirection: 'row' }} >
                                        <TouchableOpacity 
                                            onPress={() => {
                                                setPriod(false)
                                                setAfterDay(null)
                                            } }
                                            style={{ width: '45%',height:40 ,backgroundColor: period ? 'white' : MainColor.GRAY2 , borderWidth: 1, borderColor: '#999', borderRadius: 2, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text  style={{ opacity: 0.4, fontFamily: 'Noto400', fontSize: 12}}>단기</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            onPress={() => setPriod(true)}
                                            style={{ width: '45%',height:40 ,backgroundColor: period ? MainColor.GRAY2 : 'white' , borderWidth: 1, borderColor: '#999', borderRadius: 2, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ opacity: 0.4, fontFamily: 'Noto400', fontSize: 12}} >정기</Text>
                                        </TouchableOpacity>
                                    </View>
                                    { period 
                                      ? 
                                        <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}} >
                                            <Text style={{ width: '25%', paddingLeft: 10}} >주</Text>
                                            <TextInput onChangeText={(text) => setTimes(text)} value={times} placeholder='회' style={{ width: '75%', height: 40,padding: 8,backgroundColor: 'white', borderWidth: 1, borderColor: '#999', borderRadius: 2, textAlign:'right' }}></TextInput>
                                        </View>
                                    :
                                        null
                                      }
                                </View>
                            </PrefContent>
                            <PrefContent>
                                <AntDesign name="down" size={25} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 50, textAlign: 'left', color: MainColor.BLACK70, fontFamily: 'Noto500', fontSize: 14 }}  >활동일</Text>
                                {period 
                                  ?
                                  <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginLeft: 10, alignItems: 'center' }} >
                                    <DatePickers setDay={setBeforeDay} />
                                    <Text style={{ opacity: 0.2, fontSize: 22}} > - </Text>
                                    <DatePickers setDay={setAfterDay} />
                                    </View>
                                  :
                                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginLeft: 10, alignItems: 'center' }} >
                                  <DatePickers setDay={setBeforeDay} />
                                </View>
                                }
                            </PrefContent>
                            <PrefContent>
                                <AntDesign name="down" size={24} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ width: 55, textAlign: 'left', color: MainColor.BLACK70, fontFamily: 'Noto500', fontSize: 14}} >모집인원</Text>
                                <InfoCount>
                                    <InfoCountButton>
                                        <Text onPress={() => count < 10 ? setCount(count+1) : null } >+</Text>
                                    </InfoCountButton>
                                    <Text style={{ color: MainColor.BLACK70 }} >{count}</Text>
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
                        <OptionContent onPress={ () => setFirstOption( firstOption === null ? "동성" : null  ) } >
                            <AntDesign name="meh" size={48} color={ firstOption ? '#FFd515' : 'black'}/>
                            <View style={{ position:'absolute', top:10, right: 10}} >
                                <AntDesign name="checkcircle" size={24} color={ firstOption ? '#FFd515' : 'black'}/>
                            </View>
                        </OptionContent>
                        <OptionContent onPress={ () => setSecondOption( secondOption === null ? "동갑" : null )} >
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
            <CreateButton onPress={() => onPressMakingGroup()}> 
                <Text style={{ color: MainColor.BLACK }} >모임 만들기</Text>
            </CreateButton>
        </Wrapper>
    )
}
export default Writing
