        <ScrollView style={{ backgroundColor: 'transparent' }} >
            <Tab.Navigator 
                screenOptions={{
            tabBarIndicatorStyle:{ position: 'absolute', top: 0, backgroundColor: MainColor.Banana, height: 1.5 },
        }} 
            tabBar={ () => (
            <View style={{ width:Width, height:Dimensions.get('window').height-50 , backgroundColor:'#e5e5e5' }} >
            <ImageBackground
                style={{ width:Width, height: 164, backgroundColor: 'wheat' }} 
                resizeMode= 'cover' 
                source={{ uri: `${image}` }}>
                <TouchableOpacity style={{ position:'absolute', top: 12, left: 16}} onPress={ () => navigation.popToTop()} >
                    <AntDesign name="left" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ position:'absolute', top: 0, right: 0}} >
                    <Renew />
                </TouchableOpacity>
                <TouchableOpacity style={{ position:'absolute', top: 0, right: 48}} >
                    <Out  />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row',position: 'absolute', bottom: 8, left:16 }} >
                    <View style={{ marginRight: 8, width: 40,  backgroundColor: room.periodic ? 'black' : MainColor.Banana, alignItems:'center', justifyContent: 'center', borderRadius:2 }} >
                        <Text style={{ fontFamily:'Noto500', color: room.periodic ? MainColor.BLACKBOX : MainColor.BANANABOX, lineHeight:16, fontSize:10, letterSpacing: 0.25 }} >{`#${room.periodic ? "장기" : "단기" }`}</Text>
                    </View>
                        {room.prefer.split("_").map( (list, index) => (
                            list === "null" ? null : (
                                <View  key={index} style={{ borderRadius:2, flexDirection: 'row',marginRight: 8, width: 70, height: 16, backgroundColor: '#848484', alignItems:'center', justifyContent: 'center' }} >
                                    <Text style={{ fontFamily:'Noto500', color: 'white', lineHeight:16, fontSize:10, letterSpacing: 0.25 }} >{`#${list}끼리만`.substr(0,6)}</Text>
                                </View>
                        )))}
                </View>

                <View style={{ position:'absolute', bottom: 8, right: 16, flexDirection:'row', alignItems: 'center', justifyContent: 'center' }} >
                    <Eye width={16} height={16} fill={"#c5c6c9"}  />
                    <Text style={{ color: "#c5c6c9",  fontFamily: 'Noto400', fontSize: 10, lineHeight: 14, marginLeft: 2 }} >{room.views}</Text>
                </View>

            </ImageBackground>

            <View style={{ width:'100%', height: 224, paddingRight: 16, paddingLeft: 16, backgroundColor:'white', paddingTop: 16 }} >
                <Title>{room.title}</Title>

                <View style={{ flexDirection: 'row', alignItems: 'center', height: 16,  marginBottom: 16 }} >
                    <Text style={{  fontFamily: 'Noto400', fontSize: 12, color: '#949497', justifyContent: 'center', lineHeight: 16 }} >구체적인 모임 정보를 적어보세요.</Text>
                    <Pencil />
                    <View  style={{ width:Width, height: 1, backgroundColor: '#F6F6F6', marginBottom: 16, position: 'absolute', left:-16, bottom: -36}} />
                </View>
                

                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 4, right: 16 }} >
                    <Share marginRight={12} />
                    <Heart />
                </View>

                <View style={{ marginTop: 24 }} >
                    <View style={{ marginBottom: 8 ,flexDirection: 'row',alignItems: 'center',  }} >
                        <Location width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                        <Text style={{ width: 54, marginRight: 16, fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color:"#515151B2" }} >활동지</Text>
                        
                        <View>
                            <Text>{room.place}</Text>
                        </View>

                    </View>
                    
                    <View style={{ marginBottom: 8 ,flexDirection: 'row', alignItems: 'center', }} >
                        <Time width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                        <Text style={{ width: 54, marginRight: 16, fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color: "#515151B2"}} >횟수</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, lineHeight: 16 }} >{room.periodic ? "장기" : '단기'}</Text>
                            <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, lineHeight: 16, color: MainColor.GRAY2 }} >{room.periodic ? " 주 " : ''}</Text>
                            <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, lineHeight: 16 }} >{room.periodic ? `${room.frequency}회` : ''}</Text>
                        </View>

                    </View>
                    
                    <View style={{ marginBottom: 8 ,flexDirection: 'row', alignItems: 'center',  }} >
                        <Date width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                        <Text style={{ width: 54, marginRight: 16, fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color:"#515151B2" }} >활동일</Text>

                        <View style={{ flexDirection: 'row' }} >
                            <Text>{`${room.startDate} ${room.periodic === null ? null : ' ~ ' } ${room.endDate}`}</Text>
                            <TagContainer period={room.periodic} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 4 }} >
                                <Tag period={room.periodic} >{room.periodic ? "장기" : "단기"}</Tag>
                            </TagContainer>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                        <My width={16} height={16} fill={'#808184'} style={{ marginRight: 4}} />
                        <Text style={{ width: 54, marginRight: 16 , fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.15, color:"#515151B2"}} >모집인원</Text>

                        <Text style={{ fontFamily: 'Noto400', fontSize: 14, letterSpacing: 0.25 }} >{`${room.nowPeople}/${room.maxPeople}`}</Text>

                    </View>
                </View>
            <View style={{ position: 'absolute', bottom: -425,width: '110%', backgroundColor: 'white',  }} >
                <View style={{ position: 'absolute', top: -8 , width: '100%', height: 8, backgroundColor: '#f2f3f5'}} />
                <View style={{ flexDirection:'row' }} >
                    <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', height: 48, borderTopColor: MainColor.Banana, borderTopWidth:1.5, borderRightWidth: 1, borderRightColor: "#e2e2e2" }} >
                        <Text style={{ fontFamily:'Noto500', fontSize: 16, letterSpacing: 0.15 }} >정보</Text>
                    <View style={{ position: 'absolute',top: -3,right:-2 }} ><Mark fill={MainColor.Banana} /></View>
                    </View>
                    <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', height: 48,borderBottomWidth: 0.4, borderBottomColor: "#e2e2e2"  }} >
                        <Text style={{ fontFamily:'Noto500', fontSize: 16, letterSpacing: 0.15, opacity: 0.5 }} >게시판</Text>
                    </View>
                    <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', height: 48,borderBottomWidth: 0.4, borderBottomColor: "#e2e2e2"  }} >
                        <Text style={{ fontFamily:'Noto500', fontSize: 16, letterSpacing: 0.15 , opacity: 0.5}} >채팅방</Text>
                    </View>
                </View>
                    <View>
                        <View style={{ padding: 16 }} >
                            <Text style={{ fontFamily: 'Noto500', fontSize:16, marginBottom: 8 }} >모임 설명</Text>
                            <Text style={{ fontFamily: 'Noto400', fontSize:12, opacity: 0.4}} >아직 모임정보가 없어요...</Text>
                            <Text style={{ fontFamily: 'Noto400', fontSize:12, opacity: 0.4 }} >구체적일수록 매칭률이 올라간다G! <Pencil /></Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#f2f3f5', height: 8 }} />
                    <View style={{ padding: 16}} >
                        <Text style={{ fontFamily: 'Noto500', fontSize: 16, opacity:0.8, marginBottom: 8  }} >
                            모임 멤버 <Text style={{ color: MainColor.Banana, fontFamily: 'Noto500', fontSize: 16, }} >1</Text>명
                        </Text>
                        <Text style={{ fontFamily: 'Noto500', fontSize: 12, opacity:0.5  }} >
                            남 0  여 1  평균연령대 중
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#e5e5e5', height: 1 }} />
                    <View style={{ flexDirection: 'row',padding:16 }} >
                        <Image source={require('../asset/common/6_img/6/2_me.png')} style={{ width: 48, height: 48 }} />
                        <View style={{ flexDirection:'column', marginLeft: 8 }} >
                            <View style={{ justifyContent:'space-between', flexDirection: 'row' }} >
                                <Text style={{ fontFamily: "Noto500", fontSize: 12 }} >히다히히
                                    <Text style={{ fontFamily: "Noto500", fontSize: 10 }} >님 
                                        <Text style={{ fontFamily: "Noto500", fontSize: 10, color: MainColor.Banana  }} >   LV3 </Text>
                                        
                                    </Text>
                                </Text>
                            </View>
                            <Text style={{ fontFamily: 'Noto400', fontSize: 12, opacity: 0.28 }} >안녕하세요!</Text>
                        <View style={{ position: 'absolute', right: -222 }} >
                            <Text style={{ fontFamily: "Noto500", fontSize: 12, color: MainColor.Banana }} >  모임장</Text>
                        </View>
                        </View>
                    </View>
                        <View style={{ backgroundColor: '#e5e5e5', height: 1, width:'100%' }} />
                        <View style={{ height: 100 }} />

            </View>
        </View>
    </View>
    )
            }
        >
            <Tab.Screen name="정보" component={Info} />
            <Tab.Screen name="게시판" component={Board} />
            <Tab.Screen name="채팅방" component={ChatRoom} />
        </Tab.Navigator>
        </ScrollView>