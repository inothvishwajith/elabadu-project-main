/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.usermetadata.service;

import com.example.usermetadata.data.UserMetaData;
import com.example.usermetadata.data.UserRepo;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author User
 */
@Service
public class UserService implements UserServiceCo{
    @Autowired
	private UserRepo userRepo;

    @Override
    public UserMetaData createUser(UserMetaData user) {
        return userRepo.save(user);
    }

    @Override
    public List<UserMetaData> getAllUser() {
        return userRepo.findAll();
    }

    @Override
    public UserMetaData getUserById(int id) {
       return (UserMetaData) userRepo.findById(id);
    }

    @Override
    public void deleteUser(int id) {
         UserMetaData user = (UserMetaData) userRepo.findById(id);
		if (user != null) {
			userRepo.delete(user);
		}
    }

    
@Override
    public UserMetaData updateUser(int id, UserMetaData user) {
         return userRepo.save(user);
    }
    
}
