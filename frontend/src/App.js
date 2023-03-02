// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import { useState,useEffect } from 'react';

function App() {

  //usseEffect =getcall 
  //usreList 
  // let userlist= [
  //   {
  //     _id:"1",
  //     name:"asif",
  //     email:"ras@gmail.com",
  //     phone:"+312457552",
  //     website:"https.com",
  //     isLike:false
  //   }
  //   ,
  //   {
  //     _id:"2",
  //     name:"raza",
  //     email:"ras@gmail.com",
  //     phone:"+312457552",
  //     website:"http://hildegard.org",
  //     isLike:false
  //   },
  //   {
  //     _id:"2",
  //     name:"shami",
  //     email:"ras@gmail.com",
  //     phone:"+312457552",
  //     website:"https.com",
  //     isLike:false
  //   }
  // ]

  // const navigate = useNavigate();

    const [userlist,setUserList] = useState([]);
useEffect(()=>{
    getUser();
},[])

const getUser = async()=>{
    let  result = await fetch(`http://localhost:8000/api/getAllUser`,{
      method:"GET"
    });
    result = await result.json();
    console.log("hiii",result.result);
    setUserList(result.result);
}
  return (

    <div className="App container">
    
      
      <div className='d-flex justify-content-around flex-wrap'>
      {
        userlist.map((user)=> <Card  user={user} />)
      }
      </div>
     
    

    </div>
  );
}

export default App;
