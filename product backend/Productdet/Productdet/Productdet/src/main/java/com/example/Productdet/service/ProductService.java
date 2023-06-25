/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Productdet.service;

import com.example.Productdet.data.Product;
import com.example.Productdet.data.ProductRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author User
 */
@Service
public class ProductService implements ProductServiceCo{
@Autowired
	private ProductRepository productRepository;
    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProduct() {
       return productRepository.findAll();
    }

    @Override
    public Product getProductById(int id) {
       return productRepository.findById(id).get();
    }

    @Override
    public void deleteProduct(int id) {
         Product emp = productRepository.findById(id).get();
		if (emp != null) {
			productRepository.delete(emp);
		}
    }

    @Override
    public Product updateProduct(int id, Product product) {
         return productRepository.save(product);
    }
    
}
