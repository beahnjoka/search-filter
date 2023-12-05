import { useState } from 'react'
import './App.css'
import {users} from "./users";
import Table from './table';


function App() {
const [query, setQuery] = useState("");

const keys =["first_name", "last_name", "gender"]


const search = (data) => {
  return data.filter((item) =>
   keys.some(key=>item[key].toLowerCase().includes(query))
  
  );
};

  return (
    <>
    <div className="container">
      <input type="text" placeholder='search...' className="search"

      onChange={(e)=> setQuery(e.target.value)}
      
      />
     <Table data={search(users)}/>
    </div>
       
    </>
  )
}

export default App
