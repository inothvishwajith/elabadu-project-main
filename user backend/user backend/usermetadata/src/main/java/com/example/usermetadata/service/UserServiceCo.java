/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.usermetadata.service;

import com.example.usermetadata.data.UserMetaData;
import java.util.List;

/**
 *
 * @author User
 */
public interface UserServiceCo {
    public UserMetaData createUser(UserMetaData user);
    public List<UserMetaData> getAllUser();

	public UserMetaData getUserById(int id);

	public void deleteUser(int id);

	public UserMetaData updateUser(int id, UserMetaData user);
}
