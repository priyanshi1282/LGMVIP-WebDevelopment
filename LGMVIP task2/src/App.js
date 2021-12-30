import React,{useState} from 'react';
import './App.css';
import UserCard from './components/userCard';
import Footer from './components/Footer';
function App() {
  const [users, setUsers]=useState([]);
  const [load, setLoad] = useState(false);
  const getData=()=>{
    setLoad(true);
    const time = setTimeout(async()=>{
      const response = await fetch('https://reqres.in/api/users?page=1');
      const jsonResponse= await response.json();
      setLoad(false);
      setUsers(jsonResponse.data);
    },2000);
    return ()=> clearTimeout(time);
  }
  return (
    <>
    <nav>
      <label >Ps<span id="symbol">&Psi;</span>cho<span id="lname">Pod</span></label>
      <button onClick={getData}>Get Users</button>
    </nav>
    <div className="details">
     {users.map((user, id)=>{
       const userObject= user;
       return(
         <UserCard key={id} temp={userObject} />
           )
       })}
    </div>
    {
      load ? (<div className="loader"></div>):null
    }
    <Footer/>
    </>
  );
}

export default App;
