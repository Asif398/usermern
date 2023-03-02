import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faEdit
} from "@fortawesome/free-solid-svg-icons";
// import { Await } from 'react-router-dom';

function UpdateModals(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [user,setUser] = useState({});
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [phone,setPhone]= useState("");
  const [website,setWebsite]= useState("");
 
  
    console.log("asif",props.props._id)
  useEffect(()=>{
    setUser(props.user)
    getUserDetails();
    //get user or updateUser
  },[]);

  const getUserDetails= async()=>{
    let x= props.props._id
    console.log(x);
    let result =await fetch(`http://localhost:8000/api/getUserById/${x}`)
    result = await result.json();
    result = result.result;

    console.log(result);
    setName(result.name);
    setEmail(result.email);
    setPhone(result.phone);
    setWebsite(result.website);
  }

  


  
  const updateData=async()=>{
    console.log(name,email,phone,website);
    let result =await fetch(`http://localhost:8000/api/updateDetails/${props.props._id}`,{
     method:'PUT',
     body:JSON.stringify({name,email,phone,website}) ,
     headers:{
      'Content-Type':'application/json'
     }
    });
    result=await result.json();
    handleCloseModal();
    window.location.reload();
    console.log("line54",result); 
  }

  function handleOpenModal() {

    setIsOpen(true);
  }

  //functionTupdateuser
const userUpdate=(thisUser)=>{
  console.log("update",thisUser);
}



  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={handleOpenModal}>Open Modal</button> */}
    <FontAwesomeIcon onClick={handleOpenModal} className='side' icon={faEdit} />
      <Modal isOpen={isOpen} className='set'  onRequestClose={handleCloseModal}>
        <h2>Basic Modal</h2>
      <div>
      <input type="text"  className='setInput'  value={name} onChange={(e)=>setName(e.target.value)} 
       placeholder='Enter name here' /><br />
        <input type="text" className='setInput' value={email} onChange={(e)=>setEmail(e.target.value)} 
        placeholder='Enter Email here' /><br />
        <input type="text" className='setInput' value={phone} onChange={(e)=>setPhone(e.target.value)} 
        placeholder='Enter Phone here' /><br />
        <input type="text" className='setInput' value={website} onChange={(e)=>setWebsite(e.target.value)} 
        placeholder='Enter website here'/>

      </div>
       
        
        <button className='btn btn-success my-2 ms-2 me-2' onClick={updateData} >ok</button>
        <button className='btn btn-danger my-2 ms-4 me-2' onClick={handleCloseModal}>Cancel</button> 
      </Modal>
    </div>
  );
}

export default UpdateModals;
