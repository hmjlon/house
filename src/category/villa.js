function Villa(props){
  let villa = props.roomsInfo;
  console.log(villa);
  return(
    <div>
      {
        villa.map((x,i)=>{
          if(x.type === "Villa"){
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

export default Villa;