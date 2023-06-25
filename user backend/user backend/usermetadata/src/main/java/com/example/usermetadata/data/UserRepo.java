/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.usermetadata.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author User
 */
@Repository
public interface UserRepo extends  JpaRepository<UserMetaData, Long>{
   
    UserMetaData save(UserMetaData userdata);
    public Object findById(int id);

    public void deleteById(int id);

   

	
}
