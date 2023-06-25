import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { initialState } from "../reducer";
import UserService from "../services/UserService";

const ListUserComponents = () => {
    const [user, setUser] = useState([])

    useEffect(() => { 
        getAllUser();
    },[])

    const getAllUser = ()=>{
        UserService.getAllUser().then((response)=>{
            setUser(response.data)
            console.log(response.data);
    
        }).catch(error=>{
           console.log(error); 
        })
    }
    const deleteUser=(userId) =>{
        UserService.deleteUser(userId).then((response)=>{
     
         getAllUser();
        }).catch(error=>{
         console.log(error);
        })
       }
return(

    <div className="container">

<h2 className = "text-center"> List Users </h2>
<Link to = "/add-user" className="btn btn-primary mb-2">Add User For The System </Link>
<table className="table table-bordered table-striped">
            <thead>
                    <th> User Id </th>
                    <th> User Name </th>
                    <th> User Email Id </th>
                    <th> User Password </th>
                    <th> User Address </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        user.map(
                            user=>
                            <tr key = {user.id}> 
                                <td> {user.id} </td>
                                <td> {user.name} </td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.address}</td>
                                <td>
                                <Link className="btn btn-info" to={`/edit-user/${user.id}`} >Update</Link>
                                <button className = "btn btn-danger" onClick = {() => deleteUser(user.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button> 
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
    </div>
)




}
export default ListUserComponents