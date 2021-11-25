
const BASE_URL = "http://192.168.1.80:8080"

const roomRegister = async(selected, name, area, period, beforeDay, afterDay, times, count, firstOption, secondOption, user) => {
    await fetch(`${BASE_URL}/room/register`, {
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
            "memberID" : user.id      // 방 생성하는 사람 id(방장)
})})}

const roomGetList = async(user) => {
     await fetch(`${BASE_URL}/room/register`, {
      method: 'post',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "memberID" : "User1"     // 방 생성하는 사람 id(방장)
      })
}).then( res => res.json() ).catch( e => console.log(e))
}


export const Api = { roomRegister, roomGetList };