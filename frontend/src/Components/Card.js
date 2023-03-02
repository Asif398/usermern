import React, { useEffect,useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faEdit,
  faEnvelope, faHeart, faPhone, faTrash,faGlobe
} from "@fortawesome/free-solid-svg-icons";
import UpdateModals from './UpdateModals';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Card = ({user}) => {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(()=>{
console.log("hii",user);
  },[])

  const deleteUser = async (id)=>{
      let result = await fetch(`http://localhost:8000/api/delete/${id}`,{
          method:"Delete",
         
      });
      result = await result.json()
      if(result)
      {
        // getProducts();
        alert("result successfully delte")
        window.location.reload();

      }
  }

// const likeHeart=()=>{
//   console.log("hii");
//   setOpenHeart()
// }

const handleClick = () => {
  setIsLiked(!isLiked);
};

const iconStyle = {
  // backgroundColor: isLiked ? 'red' : 'transparent',
  color: isLiked ? 'red' : 'white',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};

  return (
    <div className='my-2'>
    <div className="card" style={{width: "18rem"}}>
  <img src={user.photo} className="card-img-top" alt="..." />
  <div className="card-body">
    <div>
    <h5 className="card-title"> {user.name}</h5>
    </div>
    {/* <FontAwesomeIcon icon="fa-thin fa-envelope" /> */}

    <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className='text'>{user.email}</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPhone} />
            <span className='text'>{user.phone}</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faGlobe} />
            <span className='text'>{user.website}</span>
          </div>        
        </div>
    <div className='footer d-flex justify-content-around'>

    <div className="text-danger"  title='like'>
    <FontAwesomeIcon style={iconStyle} onClick={handleClick} icon={faHeart} />
            {/* <span className='select'>heart</span> */}
    </div>
    <div className="edit cursor-pointer"  title='edit'>
    {/* <FontAwesomeIcon className='side' icon={faEdit} /> */}
            {/* <span className='select'>Edit</span> */}
            <UpdateModals props={user}  />
    </div>
    <div className="delete" title='delete'>
    <FontAwesomeIcon className='side' onClick={()=>deleteUser(user._id)} icon={faTrash} />
            {/* <span className='select'>Delete</span> */}
    </div>
    </div>
    
  </div>
</div>  

  

    </div>
  )
}

export default Card;