import { Category } from "../models/index.js";


export async function addMultipleCategories(req, res){
    try {
      const categories = req.body.data;
      //console.log(products)
      const addedCats = await Category.create(categories,(error, docs) => {
        if (error) {
          console.log(error);
        } else {
          console.log(docs);
        }
      });
      res.json({
        success: true,
        products: addedCats
      });
  
      
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error
      });
    }
    
  }