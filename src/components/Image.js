import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components';


const Container = styled.TouchableOpacity`
    width: 30%;
    align-items: center;
    justify-content: center;
    background-color: #c4c4c4;
`

export const ImagePick = ({ setImage }) => {

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Container onPress={pickImage} >
          <Text>사진선택</Text>
    </Container>
  );
}