/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.Productdet.service;

import com.example.Productdet.data.Product;
import java.util.List;

/**
 *
 * @author User
 */
public interface ProductServiceCo {
        public Product createProduct(Product product);
        
        public List<Product> getAllProduct();

	public Product getProductById(int id);

	public void deleteProduct(int id);

	public Product updateProduct(int id, Product product);
}
