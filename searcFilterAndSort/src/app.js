import { createCategory, createProduct, deleteCategory, getAllCategory, getCategory, getProduct, getproductList, updateCategoty, updateProduct, deleteProduct, searchCategory, searchProduct } from "./controller.js"
import express from 'express'

export const appRouter = express.Router()

appRouter.get('/app/searchcategory', searchCategory)
appRouter.get('/app/searchproduct', searchProduct)

appRouter.post('/app/category', createCategory)
appRouter.get('/app/category', getAllCategory)

appRouter.post('/app/product', createProduct)
appRouter.get('/app/products', getproductList)

appRouter.get('/app/:category_id', getCategory)
appRouter.put('/app/:category_id', updateCategoty)
appRouter.delete('/app/:category_id', deleteCategory)

appRouter.get('/app/:product_id', getProduct)
appRouter.put('/app/:product_id', updateProduct)
appRouter.delete('/app/:product_id', deleteProduct)






