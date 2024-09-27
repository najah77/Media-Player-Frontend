import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl = useNavigate();
  return (
    <div>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
        <h1 style={{fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque impedit obcaecati enim nihil! Beatae veniam molestias aperiam quia ipsa temporibus et maxime. Sunt totam quod voluptatibus asperiores veniam commodi eaque.</p>
        <button onClick={() => navigateByUrl('/home')} className='btn btn-info mt-4'>Get started</button>
        </Col>
        <Col lg={5}>
        <img src="" alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
        <h2>Features</h2>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <Card style={{ width: '22rem',borderRadius:"30px" }} className='p-4 bg-info'>
      <Card.Img style={{borderRadius:"30px"}} variant="top" height={'300px'} src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" />
      <Card.Body>
        <Card.Title className='text-warning fw-bolder'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '22rem' ,borderRadius:"30px" }} className='p-4 bg-info'>
      <Card.Img style={{borderRadius:"30px"}} variant="top" height={'300px'} src="https://www.icegif.com/wp-content/uploads/2024/01/icegif-109.gif" />
      <Card.Body>
        <Card.Title className='text-warning fw-bolder'>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '22rem',borderRadius:"30px" }} className='p-4 bg-info'>
      <Card.Img style={{borderRadius:"30px"}} variant="top" height={'300px'} src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
      <Card.Body>
        <Card.Title className='text-warning fw-bolder'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>

      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">

        <div className="col-lg-5 w-100">
          <h4 className='text-warning'>Simple,Powerfull and Fast</h4>
          <h6 className="mb-5 mt-3"> <span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quaerat illum voluptates, cumque a commodi error ex. Libero consequuntur neque nobis, impedit odit molestias numquam excepturi placeat eum quisquam corporis. </h6>

          <h6 className="mb-5 mt-3"> <span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quaerat illum voluptates, cumque a commodi error ex. Libero consequuntur neque nobis, impedit odit molestias numquam excepturi placeat eum quisquam corporis. </h6>

          <h6 className="mb-5 mt-3"> <span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quaerat illum voluptates, cumque a commodi error ex. Libero consequuntur neque nobis, impedit odit molestias numquam excepturi placeat eum quisquam corporis. </h6>
          <div className="video col-lg-5">
          <iframe width="240%" height="400" src="https://www.youtube.com/embed/tOM-nWPcR4U?si=qCu9IkM4dz2OqY7m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage

//the Intl.DateTimeFormat object enables language-sensitive date and time formatting
