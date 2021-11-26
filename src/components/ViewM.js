
const ViewM = async(id) => {
    const data = await fetch(`http://211.227.151.158:8080/room/getOne/${id}`, {
                method: 'post',
                headers: {
                  "Accept": 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "roomID" : id,      // 방 생성하는 사람 id(방장)
                    })
            }).then( res => res.json())
    return(
        null
    )
}

export default ViewM
