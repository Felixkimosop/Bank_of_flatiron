import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Table from './Components/Table';

function App() {

 const [list, setList] = useState([])

 useEffect(function(){
  fetch("  http://localhost:8001/transactions")
  .then(response => response.json())
      .then(data => setList(data))

      
},[])



function handleDelete(e){
  e.preventDefault();
  const removed = e.target
  removed.parentElement.parentElement.remove();
}





  return (
    <div className="App">
      
     <Header />
     <Form list = {list} setList = {setList} />
     <Table list = {list} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
