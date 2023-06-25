import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductService from '../services1/ProductService'


const ListProductComponent1 = () => {

const[products,setProducts]=useState([])
useEffect(()=>{
    getAllProduct();


},[])
const getAllProduct = () => {
    ProductService.getAllProduct().then((response)  =>  {
        setProducts(response.data)
        console.log(response.data);
        }).catch(error =>{
        
        console.log(error);
        })

}

const deleteProduct = (pId) => {
    ProductService.deleteProduct(pId).then((response) =>{
        getAllProduct();

    }).catch(error =>{
        console.log(error);
    })
     
 }
  return (
    <div className='container'>

        <h2 className='text-center'>List products</h2>
        <Link to="/add-Product" className="btn btn-primary mb-2">Add Product</Link>
        <table className='table table-striped table-bordered'>
                              <thead>
                        
                                     <th> Id</th>
                                    <th>ProductID</th>
                                    <th> Product Name</th>
                                    <th> Product Price</th>
                                    <th> Product Rating</th>
                                    <th> ImageURL</th>
                                    <th> Action</th>
                                    
                               
                            </thead>
                <tbody>{
                              products.map(
                                 product =>
                                             <tr key={product.id}>
                                          <td> {product.id} </td>   
                                           <td> {product.productID} </td>   
                                             <td> {product.name}</td>
                                             <td> {product.price}</td>
                                             <td> {product.rating}</td>
                                             <td> {product.imageURL}</td>
                                             <td>
                                    <Link className="btn btn-info" to={`/edit-product/${product.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteProduct(product.id)}
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

export default ListProductComponent1