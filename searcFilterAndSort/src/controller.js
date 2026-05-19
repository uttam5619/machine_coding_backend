import { Category, Product } from "./model.js"


export async function createCategory(req,res){

    const { categoryName, categoryDescription } = req.body
    const categoryDetails = req.body

    if(!categoryName || !categoryDescription){
        return res.status(400).json({
            status:'error',
            message:'name and description are mandetory'
        })
    }

    const newCategory = await Category.create(categoryDetails)
    if(!newCategory){
        return res.status(500).json(
            {
                status:'success',
                message:'failed to create a category'
            }
        )
    }

    res.status(200).json({
        status:'success',
        message:'category created sucessfully',
        data:newCategory
    })
}

export async function getCategory(req,res){

    const category_id = req.params.category_id
    if(!category_id){
        return res.status(400).json({
            status:'error',
            message:'category_id is missing'
        })
    }

    const categoryObject = await Category.findById(category_id)
    if(!categoryObject){
        return res.status(500).json(
            {
                status:'error',
                message:"failed to fetch the categgory"
            }
        )
    }

    res.status(200).json(
        {
            status:'success',
            message:'category fetched successfully',
            data:categoryObject
        }
    )
}

export async function getAllCategory(req,res){

    const categoryList = await Category.find()
    if(!categoryList){
        return res.status(500).json(
            {
                status:'error',
                message:"failed to fetch the categgory list"
            }
        )
    }

    res.status(200).json(
        {
            status:'success',
            message:'category list fetched',
            data:categoryList
        }
    )
}

export async function updateCategoty(req,res){

    const category_id = req.params.category_id
    const categoryData = req.body
    if(!category_id){
        return res.status(400).json({
            status:'error',
            message:'category_id is missing'
        })
    }

    const categoryObject = await Category.findByIdAndUpdate(category_id,categoryData)
    if(!categoryObject){
        return res.status(500).json(
            {
                status:'error',
                message:"failed to update the categgory"
            }
        )
    }

    res.status(200).json(
        {
            status:'success',
            message:'category updated sucessfully',
            data:categoryObject
        }
    )
}

export async function deleteCategory(req,res){

    const category_id = req.params.category_id
    if(!category_id){
        return res.status(400).json({
            status:'error',
            message:'category_id is missing'
        })
    }

    const categoryObject = await Category.findByIdAndDelete(category_id)
    if(!categoryObject){
        return res.status(500).json(
            {
                status:'error',
                message:"failed to delete the categgory"
            }
        )
    }

    res.status(200).json(
        {
            status:'success',
            message:'category deleted successfully',
            data:categoryObject
        }
    )
}




export async function createProduct(req,res){

    const { productName, productShortDescription, category_id, price } = req.body
    const productDetails = req.body
    if(!productName || !productShortDescription || !category_id ||!price){
        return res.status(400).json({
            status:'error',
            message:'fields are mandetory'
        })
    }

    const newProduct = await Product.create(productDetails)
    if(!newProduct){
        return res.status(500).json(
            {
                status:'success',
                message:'failed to create a product'
            }
        )
    }

    res.status(200).json({
        status:'success',
        message:'category created sucessfully',
        data:newProduct
    })
}

export async function getProduct(req,res){
    const product_id = req.params.product_id
    if(!product_id){
        return res.status(400).json({
            status:'error',
            message:'product_id is missing'
        })
    }

    const productObject = await Product.findById(product_id)
    if(!productObject){
        return res.status(500).json(
            {
                status:'error',
                message:"failed to fetch the product"
            }
        )
    }

    res.status(200).json(
        {
            status:'success',
            message:'category fetched successfully',
            data: productObject
        }
    )
}

export async function getproductList(req,res){
    const productList = await Product.find()
    if(!productList){
        return res.status(500).json(
            {
                status:'error',
                message:"failed to fetch the product list"
            }
        )
    }

    res.status(200).json(
        {
            status:'success',
            message:'category list fetched',
            data:productList
        }
    )
}

export async function updateProduct(req,res){
    const product_id = req.params.product_id
    const productData = req.body
    if(!product_id){
        return res.status(400).json({
            status:'error',
            message:'product_id is missing'
        })
    }

    const productObject = await Product.findByIdAndUpdate(product_id,{new:true}, productData)
    if(!productObject){
        return res.status(500).json(
            {
                status:'error',
                message:"failed to fetch the product"
            }
        )
    }

    res.status(200).json(
        {
            status:'success',
            message:'product updated successfully',
            data: productObject
        }
    )
}

export async function deleteProduct(req,res){
    const product_id = req.params.product_id
    if(!product_id){
        return res.status(400).json({
            status:'error',
            message:'product_id is missing'
        })
    }

    const productObject = await Product.findByIdAndDelete(product_id, productData)
    if(!productObject){
        return res.status(500).json(
            {
                status:'error',
                message:"failed to delete the product"
            }
        )
    }

    res.status(200).json(
        {
            status:'success',
            message:'product updated successfully',
            data: productObject
        }
    )
}