import { useState } from "react";
import { useDispatch } from "react-redux";
import ViewAllComp from "./viewAll";

function UpdateViewsComp() {
    const dispatch = useDispatch();
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] = useState('')
    return ( <div>
        <h1>Update View</h1>
        <hr />
        <div>
            <div>
                ID: <input type="text" name="ID" id="userID" onChange={(e)=>setId(e.target.value)}/>
            </div>
            <div>
                First Name <input type="text" name="fname" id="userfName" onChange={(e)=>setFname(e.target.value)}/>
            </div>
            <div>
                Last Name <input type="text" name="lname" id="userlName" onChange={(e)=>setLname(e.target.value)}/>
            </div>
            <div>
                Age <input type="text" name="age" id="userAge" onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div>
                <button onClick={()=>{dispatch({type: "ADD", payload: {
                    id: id,
                    fname: fname,
                    lname: lname,
                    age: age
                }})}}>Add</button>
                <button onClick={()=>{dispatch({type: "UPDATE", payload: {
                    id: id,
                    fname: fname,
                    lname: lname,
                    age: age
                }})}}>Update</button>
                <button onClick={()=>{dispatch({type: "DELETE", payload: {
                    id: id
                }})}}>Delete</button>
            </div>
        </div>
        <div>
            <ViewAllComp></ViewAllComp>
        </div>
    </div> );
}

export default UpdateViewsComp;