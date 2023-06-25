import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams } from 'react-router-dom';
import UserService from './services/UserService';
import './Register.css';
import logo from "./img/logo.png";


const Register = () => {

    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const history = useHistory();
    const {id} = useParams();


  
    const saveOrUpdateUser = (e) =>{
        e.preventDefault();

        const user = {Name,email,password,address}
        if(id){
            UserService.updateUser(id,user).then((response)=>{

                history.push('/')
            }).catch(error =>{
                console.log(error);
            })

        }else{
 
            UserService.saveUser(user).then((response)=>{
                console.log(response.data)
                history.push("/");
                }).catch(error =>{
                    console.log(error)
                })
        }
        
    }

    useEffect(()=>{
    
        UserService.getUserById(id).then((response)=>{
            setName(response.data.Name)
            setEmail(response.data.email)
            setPassword(response.data.password)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })

    },[])

    return (
  
           <div className="register">
           <img
                    className="register__logo"
                    src={logo} alt='logo'
                />
                            <form className='register__form'>
                            <h1 className="register__h1">Register</h1>
                                <div className = "formInput">
                                    <label className = "formInput__label">Full Name :</label>
                                    <input 
                                        type = "text"
                                        placeholder = "Enter Full name"
                                        name = "name" 
                                        className = "formInput__input"
                                        value = {Name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                    
                                </div>
                                

                                <div className = "formInput">
                                    <label className = "formInput__label">Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Address"
                                        name = "address"
                                        className = "formInput__input"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "formInput">
                                    <label className = "formInput__label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email id"
                                        name = "email"
                                        className = "formInput__input"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "formInput">
                                    <label className = "formInput__label">Password :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Password"
                                        name = "password"
                                        className = "formInput__input"
                                        value = {password}
                                        onChange = {(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                    <p className='register__p'>
                                    Register you agree to the elabadu Conditions of Rules. Please
                                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                                    </p>
                                </div>

                                

                                <button className="register__button" onClick = {(e) => saveOrUpdateUser(e)} >Submit </button>
                                <Link to='/' className="formInput "> Cancel </Link>
                            </form>

                        </div>
            
                        
           
           
        
    
    )
}

export default Register