import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../../service/allAPI';

function Add({setUploadVideoResponse}) {

  const[uploadVideo,setUploadVideo] = useState({
    id : "",
    caption : "",
    url : "",
    link : ""
  })

  //https://www.youtube.com/watch?v=HkvVaj_28C8
  //https://www.youtube.com/embed/HkvVaj_28C8
  console.log(uploadVideo);
  const getYoutubeLink = (e) => {
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link : `https://www.youtube.com/embed/${vID}`})
      
    }else{
      setUploadVideo({...uploadVideo,link : ""})
    }
  }
  
  const[show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    const {id,caption,url,link} = uploadVideo;

    if(!id || !caption || !url || !link){
      alert("Please Fill all the details")
    }else{
      //store video details to JSON server

      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);

      if (result.status >= 200 && result.status <=300){
        handleClose();
        alert("Video Added Successfully");

        //after successfully uploading video the response filed should be empty
        setUploadVideo({
          id : "",
          caption : "",
          url : "",
          link : ""
        })

        setUploadVideoResponse(result.data)
        
      }else{
        alert("Failed to Add Video");
      }
      
    }
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        {/* <h5>Upload Videos</h5> */}
        <Button className='p-3' variant="info" onClick={handleShow}>
        Upload Videos<i className='fa-solid fa-arrow-up-from-bracket fa-beat mb-2 ms-3'></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Id" onChange={(e) => setUploadVideo({...uploadVideo,id:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTitle" label="Video Title" className='mb-3' onChange={(e) => setUploadVideo({...uploadVideo,caption:e.target.value})}>
        <Form.Control type="text" placeholder="Video Title" />
      </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="Image URL"
        className="mb-3"
        onChange={(e) => setUploadVideo({...uploadVideo,url:e.target.value})}
      >
        <Form.Control type="text" placeholder="Image URL" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video URL" className='mt-3' onChange={getYoutubeLink}>
        <Form.Control type="text" placeholder="Password" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} className='w-25' variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
      </div>


      


    </div>
  )
}

export default Add
