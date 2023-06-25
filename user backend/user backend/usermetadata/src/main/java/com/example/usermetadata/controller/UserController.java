/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.usermetadata.controller;

import com.example.usermetadata.data.UserMetaData;
import com.example.usermetadata.service.UserService;
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
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/api/v1/users")
@RestController
public class UserController {
    @Autowired
	private UserService userService;

	@PostMapping
	public ResponseEntity<UserMetaData> createUser(@RequestBody UserMetaData user) {
		return new ResponseEntity<UserMetaData>(userService.createUser(user), HttpStatus.CREATED);
	}
    
        @GetMapping
	public ResponseEntity<List<UserMetaData>> getAllUser() {
		return new ResponseEntity<List<UserMetaData>>(userService.getAllUser(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<UserMetaData> getUserById(@PathVariable int id) {
		return new ResponseEntity<UserMetaData>(userService.getUserById(id), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable int id) {

		userService.deleteUser(id);
		return new ResponseEntity<String>("Delete Sucessfully", HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<UserMetaData> updateUser(@PathVariable int id, @RequestBody UserMetaData user) {
		return new ResponseEntity<UserMetaData>(userService.updateUser(id, user), HttpStatus.OK);
	}
}
