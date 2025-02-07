function Oroom(props){
  let oroom = props.roomsInfo;
  console.log(oroom);
  return(
    <div>
      {
        oroom.map((x,i)=>{
          if(x.type === "OneRoom"){
            return(
              <div key={i}>
                <img src={x.image} width="100px" height="100px"></img>
                <span>{x.content}</span>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Oroom;