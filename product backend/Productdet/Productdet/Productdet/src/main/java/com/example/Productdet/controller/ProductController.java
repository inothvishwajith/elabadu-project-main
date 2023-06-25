/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Productdet.controller;

import com.example.Productdet.data.Product;
import com.example.Productdet.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author User
 */
@CrossOrigin ("*")
@RequestMapping("/api/v1/products")
@RestController
public class ProductController {
    @Autowired
	private ProductService productService;
    
    @PostMapping
	public ResponseEntity<Product> createProduct(@RequestBody Product product) {
		return new ResponseEntity<Product>(productService.createProduct(product), HttpStatus.CREATED);
	}
    
        @GetMapping
	public ResponseEntity<List<Product>> getAllProduct() {
		return new ResponseEntity<List<Product>>(productService.getAllProduct(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id) {
		return new ResponseEntity<Product>(productService.getProductById(id), HttpStatus.OK);
	}

	@DeleteMapping("/deletes/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int id) {

		productService.deleteProduct(id);
		return new ResponseEntity<String>("Delete Sucessfully", HttpStatus.OK);
	}

	@PutMapping("/updates/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product Product) {
		return new ResponseEntity<Product>(productService.updateProduct(id, Product), HttpStatus.OK);
	}
}
