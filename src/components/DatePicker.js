import React, {useState} from 'react';
import { Platform, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker'
import styled from 'styled-components';

const dayList = ['일', '월', '화', '수', '목', '금', '토']


export const DatePickers = ({setDay}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);

    const Container = styled.View`
        border: 1px solid #999;
        background-color: #fff;
        border-radius: 2px ;
        width: 45%;
        height: 40px;
        align-items:center;
        justify-content:center;

    `
    const Text = styled.Text`
      opacity: 0.4;
      font-size: 12px;
      font-family: 'Noto400';
    `
  return (
    <Container >
      <TouchableOpacity 
        color={Platform.OS === 'ios' ? "#999" : `"#999"`} 
        onPress={() => setOpen(true)} 
        >
          <Text>
            {`${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()} (${dayList[date.getDay()]})` } 
          </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        locale="ko"
        mode={'date'}
        textColor="black"
        minimumDate={new Date()}
        maximumDate={new Date("2022-12-31")}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setDay(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </Container>
  )
};
