import React, { useState } from 'react';
import  {Modal , show, Button}  from 'react-bootstrap';


const API_IMG="https://image.tmdb.org/t/p/w500/";
const Movielist = ({titel,poster_path,vote_average,release_date,overview}) => {
const [show,setshow] = useState(false);
const handelshow=() => setshow(true);
const handleClose=() => setshow(false);

  return (
    <>
      
       <div className='card text-center bg-secondry mb-3'>
         <div className='card-body'>
          
            <img className='card-img-top' src={API_IMG+poster_path} alt="movieimg"/>
            <div className='card-body'>
                <button type='button'  onClick={handelshow}>details</button>
                <Modal show={show} onHide={handleClose}>
                     <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path}  alt="image"/>
                      <h3>{titel}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>

              
             
            </div>
            
          </div>
        
          
        </div>
        
    </>
  )
}

export default Movielist
