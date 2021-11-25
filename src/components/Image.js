import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components';


const Container = styled.TouchableOpacity`
    width: 30%;
    align-items: center;
    justify-content: center;
    background-color: #c4c4c4;
    border-radius: 2px;
`

export const ImagePick = ({ setImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    const uri = result.base64;
    setImage(uri)
    if (!result.cancelled) {
    }
  };
  
  return (
    <Container onPress={pickImage} >
          <Text>사진선택</Text>
    </Container>
  );
}