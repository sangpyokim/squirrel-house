import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { Text, View,Button, TouchableOpacity, Keyboard, TextInput, Alert, Image } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { DatePickers } from '../../components/DatePicker';
import { MainColor } from '../../components/Color'
import { ImagePick } from '../../components/Image';
import { useSelector } from 'react-redux';
//categoryicon
import Category1 from '../../asset/3_page/category/category_icon_1_camera.svg'
import Category2 from '../../asset/3_page/category/category_icon_2_game.svg'
import Category3 from '../../asset/3_page/category/category_icon_3_sport.svg'
import Category4 from '../../asset/3_page/category/category_icon_4_study.svg'
import Category5 from '../../asset/3_page/category/category_icon_5_eat.svg'
import Category6 from '../../asset/3_page/category/category_icon_6_free.svg'
//baseicon
import Base1 from '../../asset/3_page/base/base_icon_1_name.svg'
import Base3 from '../../asset/3_page/base/base_icon_2_img.svg'
import Base2 from '../../asset/3_page/base/base_icon_3_location.svg'
import Base4 from '../../asset/3_page/base/base_icon_4_time.svg'
import Base5 from '../../asset/3_page/base/base_icon_5_day.svg'
import Base6 from '../../asset/3_page/base/base_icon_6_people.svg'
//prefericon
import Prefer1 from '../../asset/3_page/preference/preference_icon_1_same_sex.svg'
import Prefer2 from '../../asset/3_page/preference/preference_icon_1_same_sex_hover.svg'
import Prefer3 from '../../asset/3_page/preference/preference_icon_2_same_age.svg'
import Prefer4 from '../../asset/3_page/preference/preference_icon_2_same_age_hover.svg'
//commonicon
import Back from '../../asset/3_page/flow/back.svg'
import Check from '../../asset/3_page/flow/check.svg'
import Down from '../../asset/3_page/flow/flow_down.svg'
import Up from '../../asset/3_page/flow/flow_up.svg'
import Right from '../../asset/2_page/right_icon.svg'
import { useQuery } from 'react-query';
import { Api } from '../../../api';


const MainCategory = [ '사진/영상', '게임/오락', '운동/스포츠', '공부/스터디' , '식사/술', '자유주제']

const Wrapper = styled.ScrollView`
    flex: 1;
    background-color: white;
`
//category
const CategoryContainer = styled.View`
    margin-top: 8%;
`
const CategoryHeader = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5% 5% 5%;
`
const CategoryTitle = styled.Text`
    font-size: 18px;
    font-family: 'Dream';
`
const CategoryToggle = styled.View`

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
const InfoHeader = styled.TouchableOpacity`
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
const PrefHeader = styled.TouchableOpacity`
flex-direction: row;
justify-content: space-between;
padding: 0 5% 5% 5%;
`
const PrefWrapper = styled.View`
    padding: 16px;
    justify-content:center;
    padding-bottom: 0;
    background-color:#eee;

`
const PrefContents = styled.View`
    padding: 0 12px;

`
const PrefContent = styled.View`
    align-items:center;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 5%;
    height: 32px;
`

const OptionWrapper = styled.View`
    padding: 3% 5%;
    background-color: ${MainColor.BACKGROUND};
    margin-bottom: 3%;
    height: 88px;
    justify-content:center;
`
const OptionContioner = styled.View`
    flex-direction: row;
    align-items:center;

`
const OptionContent = styled.TouchableOpacity`
    width: 75px;
    height: 75px;
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
    const user = useSelector( (state) => state.loginout.user)
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
    const [ firstOption, setFirstOption ] = useState(null); // 선호 옵션 선택
    const [ secondOption, setSecondOption ] = useState(null); // 선호 옵션 선택
    
 

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
                <Back width={24} height={24} />
            </TouchableOpacity>),
        })
    })
    
        const onPress = (index) => {
            setSelected(index)
        }
    
  

    const dataValidation = () => {
        selected === null ? Error.throw("no select") : null
        name === "" ? Error.throw("no name") : null
        area === "" ? Error.throw("no area") : null
        period && afterDay === null ? Error.throw("no period && after day") : null
        period && times === "" ? Error.throw("no period & times") : null
        !image ? Error.throw("no image") : null
        
    }

    const onPressMakingGroup = async() => {
        try {
            dataValidation() // 유효성 검사

            const data = await fetch('http://192.168.1.80:8080/room/register', {
                method: 'post',
                headers: {
                  "Accept": 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "categoryID" : selected + 1 , // 카테고리 번호
                    "title" : name,      // 모임(방) 이름
                    "place" : area,         // 활동지
                    "periodic" : period,      // 정기 모임이면 true 단기 모임이면 false
                    "startDate" : JSON.stringify(beforeDay).substr(1, 10),   // 모임 시작 날짜
                    "endDate" : JSON.stringify(afterDay).substr(1, 10),   // 모임 종료 날짜
                    "frequency": times,    // 모임 종료 날짜
                    "maxPeople" : count,      // 최대 인원
                    "prefer" : `${firstOption ? firstOption : null}_${secondOption ? secondOption : null}`,   // 선호 옵션
                    "memberID" : user.id,      // 방 생성하는 사람 id(방장)
                    })
            }).then( res => res.json() ).catch( e => Alert.alert("에러가 발생하였습니다."))
            console.log("방번호:",data)
            await unLoadImage(data)
            Alert.alert("등록!")
            navigation.pop()
            
        } catch (error) {
            console.log(error)
            Alert.alert('정보들을 입력해주세요.')
        }
    }
    const unLoadImage = async (roomID) => {
        const data = await fetch('http://192.168.1.80:8080/file/upload', {
                method: 'post',
                headers: {
                  "Accept": 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "roomID" : roomID,   
                    "fileBase64" : image,
                    })
            }).then(res => res.json()).catch( e => console.log(e))
            console.log(data)
      }

    return (
        <Wrapper bounces={false} onPress={Keyboard.dismiss} >
                {/* 카테고리 */}                
                <CategoryContainer>
                    <CategoryHeader onPress={ () => {
                            setFirstToggle(true)
                            setSecondToggle(false)
                            setThirdToggle(false)
                            } }  >   
                        <CategoryTitle>모임 카테고리</CategoryTitle>
                        {firstToggle ? 
                        <CategoryToggle >
                            <Down width={24} height={24} />
                        </CategoryToggle> :
                        <CategoryToggle >
                            <Up width={24} height={24} />
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
                                        {(() => {
                                            switch (index) {
                                            case 0:
                                                return <Category1 width={24} height={24} />
                                            case 1:
                                                return <Category2 width={24} height={24}/>
                                            case 2:
                                                return <Category3 width={24} height={24} />
                                            case 3:
                                                return <Category4 width={24} height={24} />
                                            case 4:
                                                return <Category5 width={24} height={24} />
                                            case 5:
                                                return <Category6 width={24} height={24} />
                                            }
                                        })()}
                                     <Text style={{ color:index === selected ? MainColor.Banana: MainColor.BLACK38, fontFamily: 'Noto400', lineHeight:20, fontSize: 12,  }} >{category}</Text>
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
                    <InfoHeader onPress={ () => {
                                setSecondToggle(true)
                                setFirstToggle(false)
                                setThirdToggle(false)
                                }}  >   
                            <CategoryTitle>모임 기본정보</CategoryTitle>
                            {secondToggle ? 
                            <CategoryToggle>
                                <Down width={24} height={24} />
                            </CategoryToggle> :
                            <CategoryToggle >
                                <Up width={24} height={24} />
                            </CategoryToggle>
                            }
                    </InfoHeader>
                    {secondToggle ?
                    <PrefWrapper>
                        <PrefContents>
                            <PrefContent>
                                <Base1 style={{ marginRight: 12 }} />
                                <Text style={{ width: 50, textAlign: 'left', color: "#515151DE", fontFamily: 'Noto500', fontSize: 14 }} >모임명</Text>
                                <TextInput onChangeText={(text) => setName(text)}  value={name} placeholder='모임명을 적어주세요' maxLength={15} style={{ width: '80%', fontFamily: 'Noto400', fontSize: 12, height: 40,padding: 10 , paddingTop: 0, paddingBottom: 0,backgroundColor: 'white', marginLeft: 10, borderWidth: 1, borderColor: '#999', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}  ></TextInput>
                            </PrefContent>
                            <PrefContent>
                                <Base2 style={{ marginRight: 12 }} />
                                <Text style={{ width: 50, textAlign: 'left', color: "#515151DE", fontFamily: 'Noto500', fontSize: 14 }}  >활동지</Text>
                                <TextInput onChangeText={(text) => setArea(text)} value={area} placeholder='활동 장소를 적어주세요' style={{ width: '80%', height: 40, fontFamily: 'Noto400', fontSize: 12,padding: 10 ,backgroundColor: 'white', paddingTop: 0, paddingBottom: 0,marginLeft: 10, borderWidth: 1, borderColor: '#999', borderRadius: 2 }}  ></TextInput>
                            </PrefContent>
                            <PrefContent>
                                <Base3 style={{ marginRight: 12 }} />
                                <Text style={{ width: 50, textAlign: 'left', color: "#515151DE", fontFamily: 'Noto500', fontSize: 14 }}  >사진</Text>
                                <View style={{ width: '80%', flexDirection: 'row', justifyContent:'space-between',marginRight: 10, height: 38  }} >
                                    <View
                                        style={{ width: '70%',backgroundColor: 'white', marginLeft: 10, borderWidth: 1, borderColor: '#999', borderRadius: 2, paddingLeft: 10, textAlign: 'center', justifyContent: 'center'}} >
                                        <Text style={{ fontFamily: 'Noto400', fontSize: 12 }} >
                                        {image 
                                          ? 
                                        `${image.substring(image.lastIndexOf("/")+1).substr(0,15)}${image.substr(-4)}.jpg`
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
                                <Base4 style={{ marginRight: 12 }} />
                                <Text style={{ width: 50, textAlign: 'left', color: "#515151DE", fontFamily: 'Noto500', fontSize: 14}}  >횟수</Text>
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
                                <Base5 style={{ marginRight: 12 }} />
                                <Text style={{ width: 50, textAlign: 'left', color: "#515151DE", fontFamily: 'Noto500', fontSize: 14 }}  >활동일</Text>
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
                                <Base6 style={{ marginRight: 12 }} />
                                <Text style={{ width: 55, textAlign: 'left', color: "#515151DE", fontFamily: 'Noto500', fontSize: 14}} >모집인원</Text>
                                <InfoCount>
                                    <InfoCountButton>
                                        <Text onPress={() => count < 10 ? setCount(count+1) : null } >+</Text>
                                    </InfoCountButton>
                                    <Text style={{ color: "#515151DE" }} >{count}</Text>
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
                    <PrefHeader  onPress={ () => {
                                setThirdToggle(true)
                                setSecondToggle(false)
                                setFirstToggle(false)
                                } } >   
                            <CategoryTitle>선호 옵션</CategoryTitle>
                            {thirdToggle ? 
                            <CategoryToggle >
                                <Down width={24} height={24} />
                            </CategoryToggle> :
                            <CategoryToggle >
                                <Up width={24} height={24} />
                            </CategoryToggle>
                            }
                    </PrefHeader>
                    {thirdToggle ? 
                    <OptionWrapper>
                    <OptionContioner  >
                        <OptionContent onPress={ () => setFirstOption( firstOption === null ? "동성" : null  ) } >
                                {firstOption 
                                    ? 
                                    <Prefer2   />
                                    :
                                    <Prefer1  />
                                }
                            <View style={{ position:'absolute', top:10, right: 10}} >
                                { firstOption ?
                                    <Check fill={ firstOption ? '#FFd515' : 'black'}/>
                                :  null }
                            </View>
                        </OptionContent>
                        <OptionContent onPress={ () => setSecondOption( secondOption === null ? "동갑" : null )} >
                            {secondOption 
                                ? 
                                <Prefer4  />
                                :
                                <Prefer3  />
                                }
                            <View style={{ position:'absolute', top:10, right: 10}} >
                                { secondOption ? 
                                    <Check fill={ secondOption ? '#FFd515' : 'black'}/>
                                :  null }
                            </View>
                        </OptionContent>
                    </OptionContioner> 
                    </OptionWrapper>
                    :
                    null
                    }
                </PrefContainer>
            <CreateButton onPress={() => {
                onPressMakingGroup()
                }}> 
                <Text style={{ color: MainColor.BLACK }} >모임 만들기</Text>
            </CreateButton>
        </Wrapper>
    )
}
export default Writing
