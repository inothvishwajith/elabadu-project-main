import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import UserService from '../services/UserService'

const AddEmployeeComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateUser = (e) =>{
        e.preventDefault();

        const user = {name,email,password,address}

        if(id){

            UserService.updateUser(id,user)
            .then((response)=>{
               
                history.push('/users')
            }).catch(error => {
                console.log(error)
            })


        }
        else{

            UserService.createUser(user)
            .then((response)=>{
    
                console.log(response.data)
                history.push('/users');
            }).catch(error => {
                console.log(error)
            })
        }
       
        
    }
    useEffect(()=>{
    
        UserService.getUserById(id).then((response)=>{
            setName(response.data.name)
            setEmail(response.data.email)
            setPassword(response.data.password)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })

    },[])
    const title = ()=>{
        if(id){
            return<h2 className="text-center">Update Employee</h2>
        }else{
            return<h2 className="text-center">Add Employee</h2>
        }
    }
    

    return (
        <div>
            <br/><br/>
          <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                        title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter  name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email id"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">Password :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Password"
                                        name = "password"
                                        className = "form-control"
                                        value = {password}
                                        onChange = {(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Address"
                                        name = "address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success " onClick = {(e) => saveOrUpdateUser(e)} >Submit </button>
                                <Link to="/users" className="btn btn-danger "> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>
           
        </div>
        </div>
    )
}

export default AddEmployeeComponent