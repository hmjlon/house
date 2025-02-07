function Oroom(props){
  let apartment = props.roomsInfo;
  console.log(apartment);
  return(
    <div>
      {
        apartment.map((x,i)=>{
          if(x.type === "Apartment"){
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