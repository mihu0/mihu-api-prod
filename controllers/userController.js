import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { Product, User } from '../models/index.js';

export async function getUserProfile(req,res,next){
    let favs = []
    if (req.user.favorites.length!==0) {
        try {
            favs = await Product.find({_id: {$in: req.user.favorites}})
            console.log(favs)
            
        } catch (error) {
            favs=[]
        }
        
    }
    res.status(200).json({
        success:true,
        msg:req.user,
        favorites:favs
    })
}

export async function manageFavorites(req,res,next){
    const favs = req.body.favorites;
    console.log(req.body.favorites,req.user._id)
    try {
        
       
        const user = await User.findOneAndUpdate({_id:req.user._id},{favorites:favs},{new:true})
        console.log(user)
        res.status(200).json({success:true,user:user});


    } catch (error) {
        res.status(500).json({success:false,error:error});
        
    }
}