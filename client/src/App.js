import React from "react";
import { useState , useEffect} from "react";
import Axios from "axios";


function App() {
const [listofUsers, setlistofUsers] = useState([  ]);
const [name, setname] = useState("")
const [Age, setAge] = useState("")
const [username, setusername] = useState("")


useEffect(() => {
Axios.get("http://localhost:3001/getUsers").then((response) => {
    setlistofUsers(response.data);
});


} , []);


const createUser = () => {
Axios.post("http://localhost:3001/createUser", {name: name, age: Age , username: username}).then((response) => {
setlistofUsers([...listofUsers, {name: name, age: Age , username: username}]);
});


};



return (
 <div className="App">
<div className="usersDisplay"> 

{listofUsers.map((user) => {
return( <div> 
<h1> Users details </h1>
<h1> Name : {user.name}</h1>
<h1> Age : {user.age}</h1>
<h1> Username : {user.username}</h1>
</div>);




})}

<div> 

<input type="text" placeholder="Name"   
onChange={(event) => {
    setname(event.target.value);
}}

/>
<input type="text" placeholder="Age" 
onChange={(event) => {
    setAge(event.target.value);}}
/>

<input type="text" placeholder="Username"
onChange={(event) => {
    setusername(event.target.value); }}

/>

<button onClick={createUser}> Create User </button>
</div>



</div>
 </div>
);



}
export default App;