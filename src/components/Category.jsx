import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, deletetCategoryAPI, getAVideo, getCategoryAPI, updateCategoryAPI } from '../../service/allAPI';
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'



function Category({dropVideoResponse}) {

  const [categoryName,setcategoryName] = useState("")
  const [show, setShow] = useState(false);
  const [allCategories,setAllCategories] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dragOver = (e) => {
    console.log("Videocard Dargging over the Category");
    e.preventDefault();
    
  }

  // const videoDropped = async (e,categoryId) => {
  //   const VideoId = e.dataTransfer.getData("VideoId")
  //   console.log(`Video Dropped ${categoryId}`);
  //   const {data} = await getAVideo(VideoId)
  //   // console.log(data);
  //   const selectedCategory = allCategories.find(item => item.id === categoryId)
  //   selectedCategory.allVideos.push(data)
  //   await updateCategoryAPI(categoryId,selectedCategory)
    
  // }

  const videoDropped = async (e, categoryId) => {
    const VideoId = e.dataTransfer.getData("VideoId")
    const { data } = await getAVideo(VideoId)
    const selectedCategory = allCategories.find(item => item.id === categoryId)
    const newCategories = [...allCategories]
    const updatedCategory = { ...selectedCategory, allVideos: [...selectedCategory.allVideos, data] }
    newCategories[newCategories.indexOf(selectedCategory)] = updatedCategory
    setAllCategories(newCategories)
    await updateCategoryAPI(categoryId, updatedCategory)
  }

  const handleAdd = async()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})
      // console.log(result);
      if(result.status >= 200 && result.status < 300){
        handleClose()
        setcategoryName("")
        getCategories()
      }else{
        alert(result.message)
      }
      
    }else{
      alert('Please add a category name')
    }
  }

  const removeCategory = async(id)=>{
    await deletetCategoryAPI(id)
    getCategories()
  }
  const videoDragStrarted = (e,videoId,categoryId) => {
    let dataShare = ({videoId,categoryId})
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }

  const getCategories = async()=>{
    const {data} = await getCategoryAPI()
    setAllCategories(data)
  }

  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

  // console.log(allCategories);
  

  return (
    <div>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-warning">Add Category</button>
      </div>

      {
        allCategories?.length>0?allCategories.map(category => (
          <div className="card p-3 border-warning rounded mt-5" droppable = 'true' onDragOver={(e) => dragOver(e)} onDrop={e => videoDropped(e,category.id)}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>{category.categoryName}</h5>
          <button className="btn" onClick={()=>removeCategory(category.id)}><i class="fa-solid fa-trash text-danger"></i></button>
        </div>
        <Row>
          {
            category?.allVideos?.length>0?category?.allVideos.map(card => (
              <Col sm = {12} draggable onDragStart={e=>videoDragStrarted(e,card.id,category.id)}>
                <VideoCard video = {card} insideCategory = {true}/>
              </Col>
            )):null
          }
        </Row>
      </div>
        )) : <p>Nothing To Display</p>
      }

      




      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
        <FloatingLabel controlId="floatingName" label="Category" className='mt-3' >
        <Form.Control type="text" placeholder="Enter Category Name" onChange={e => setcategoryName(e.target.value)} />
      </FloatingLabel>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>

    
  )
}

export default Category
