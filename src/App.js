
import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movielist from './components/Movielist';
import {  Navbar, NavbarBrand,Container,Nav,Form, FormControl,Button } from 'react-bootstrap'





const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=b80142a02dfb0192723eeffdfdd9d7a5";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=b80142a02dfb0192723eeffdfdd9d7a5&query";


function App() {
  const [movies,setMovies] = useState([ ]);
  const [query, setquery] = useState("");


  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data =>{console.log(data)
    setMovies(data.results);
  })
  } , [])


  const searchMovie = async(e) => {
    e.preventDefault();
    console.log("searching");
    try{
      const url='https://api.themoviedb.org/3/search/movie?api_key=b80142a02dfb0192723eeffdfdd9d7a5&query=${query}';
      const res= await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
        console.log(e);

    }
  } 

    const changeHandler=(e) =>{
      setquery(e.target.value);
    }
 
  
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <NavbarBrand href="/home">MovieApp</NavbarBrand>
        
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="navarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex"  onSubmit={searchMovie}>
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container'>
      <div className='grid'>
         {movies.map((moviereq)=>
          <Movielist key={moviereq.id} {...moviereq}/>)}
      </div>
    </div>
    </>
    
  );
}


export default App;