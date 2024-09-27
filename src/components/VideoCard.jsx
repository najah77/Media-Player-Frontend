import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteVideo } from '../../service/allAPI';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const removeVideo = async(id) => {
    await deleteVideo(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted = (e,id) => {
    e.dataTransfer.setData('VideoId',id)
    console.log('drag started');
    
  }

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    const {caption,link} = video

    let today = new Date();
    // console.log(new Intl.DateTimeFormat('en-US',{year : 'numeric',month : '2-digit',day : '2-digit',hour : '2-digit',minute : '2-digit',second : '2-digit'}).format(today));
    let timeStamp = new Intl.DateTimeFormat('en-US',{year : 'numeric',month : '2-digit',day : '2-digit',hour : '2-digit',minute : '2-digit',second : '2-digit'}).format(today)

    let videoHistory = {caption,link,timeStamp}

    await addHistoryAPI(videoHistory)
    
  }
  return (
    <div>
      <div className="container">
      <Card className='mt-5' style={{ width: '18rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" src={video.url} onClick={handleShow}  />
      <Card.Body>
        <div className=" text-center">
        <Card.Title className=''><h5>{video.caption}</h5></Card.Title>
        { insideCategory ? null : <button onClick={()=> removeVideo(video.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>}
        </div>
      

      </Card.Body>
    </Card>
    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard
