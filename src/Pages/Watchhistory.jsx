import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getHistoryAPI } from '../../service/allAPI';

function Watchhistory() {

  // const navigateByUrl = useNavigate();
  const [history,setHistory] = useState([]);

  const removeHistory = async(id) =>{
    await deleteHistoryAPI(id)
    getHistory()
  }

  useEffect(()=> {
    getHistory()
  },[])


  const getHistory = async() =>{
  const result = await getHistoryAPI()
    console.log(result);
    if(result.status == 200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }
  console.log(history);
  


  return (

    <div className="container">

      <div className=" mt-5 mb-5 d-flex justify-content-between ">
      <h1 style={{cursor:'default'}}><i class="fa-solid fa-laptop me-3"></i>Watch History</h1>
      <Link style={{textDecoration:"none", color:"red", fontSize:"30px"}} to={'/'}><i class="fa-solid fa-house me-3"></i>Back to Home </Link>
      </div>
      
    
    <div>
<Table hover bordered variant='dark' className='mt-5 mb-5' >
      <thead >
        <tr style={{cursor:"pointer"}}>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>TimeStamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       

       {
        history ?.length > 0 ? history.map((video,index) => (
          <tr style={{cursor:"pointer"}}>
          <td>{index + 1}</td>
          <td>{video.caption}</td>
          <td><a target='_blank' href={video.link}>{video.link}</a></td>
          <td>{video.timeStamp}</td>
          <td><button onClick={()=> removeHistory(video?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
        )) : <p>Nothing to Display</p>
       }

      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Watchhistory
