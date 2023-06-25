import React ,{useEffect, useState}from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import ProductService from '../services1/ProductService'

const AddProductComponent = () => {
const[productID,setproductID]=useState("")
const[name,setname]=useState("")
const[price,setprice]=useState("")
const[rating,setrating]=useState("")
const[imageURL,setimageURL]=useState("")
const history = useHistory();
const {id} = useParams();

const saveOrUpdateProduct=(e)=>{
e.preventDefault();

const product = {productID,name,price,rating,imageURL}
if(id){
    ProductService.updateProduct(id, product).then((response) => {
        history.push('/products')
    }).catch(error => {
        console.log(error)
    })

}else{
    ProductService.createProduct(product).then((response) =>{

        console.log(response.data)

        history.push('/products');

    }).catch(error => {
        console.log(error)
    })
}

}

useEffect(() => {

    ProductService.getProductById(id).then((response) =>{
        setproductID(response.data.productID)
        setname(response.data.name)
        setprice(response.data.price)
        setrating(response.data.rating)
        setimageURL(response.data.imageURL)
    }).catch(error => {
        console.log(error)
    })
}, [])
const title = () => {

    if(id){
        return <h2 className = "text-center">Update Prodect</h2>
    }else{
        return <h2 className = "text-center">Add Prodect</h2>
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
                            <label className = "form-label"> ProductID :</label>
                            <input
                                type = "text"
                                placeholder = "Enter ProductID"
                                name = "productID"
                                className = "form-control"
                                value = {productID}
                                onChange = {(e) => setproductID(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label"> Product Name :</label>
                            <input
                                type = "text"
                                placeholder = "Enter Product Name"
                                name = "name"
                                className = "form-control"
                                value = {name}
                                onChange = {(e) => setname(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label">Product Price :</label>
                            <input
                                type = "text"
                                placeholder = "Enter Product Price"
                                name = "price"
                                className = "form-control"
                                value = {price}
                                onChange = {(e) => setprice(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className = "form-group mb-2">
                            <label className = "form-label">Product Rating :</label>
                            <input
                                type = "text"
                                placeholder = "Enter Product Price"
                                name = "rating"
                                className = "form-control"
                                value = {rating}
                                onChange = {(e) => setrating(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className = "form-group mb-2">
                            <label className = "form-label">ImageURL :</label>
                            <input
                                type = "text"
                                placeholder = "Enter ImageURL"
                                name = "imageURL"
                                className = "form-control"
                                value = {imageURL}
                                onChange = {(e) => setimageURL(e.target.value)}
                            >
                            </input>
                        </div>

                        <button className = "btn btn-success " onClick = {(e) => saveOrUpdateProduct(e)} >Submit </button>
                        <Link to="/products" className="btn btn-danger"> Cancel </Link>
                    </form>

                </div>
            </div>
        </div>
   
</div>
</div>
  )
}

export default AddProductComponent