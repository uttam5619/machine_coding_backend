import { User } from "./models.js"

export function getUserDetails(req,res){
    const email = req.body.email 
}


export async function createUser(req,res){
    const {name,email, password}= req.body
    if(!name || !email ||!password){
        return res.status(400).json(
            {
                status:'error',
                message:'all the firlds are mandetory'
            }
        )
    }

    const preExisitingUser = await User.findOne({email})
    if(preExisitingUser){
        return res.status(409).json({
            status:'fail',
            message:'email already in use'
        })
    }

    const newuser = await User.create({name,email,password})
    if(!newuser){
        return res.status(500).json({
            status:'error',
            message:'failed to register the user'
        })
    }

    const userObject = newuser.toObject()
    delete userObject.password

    res.status(201).json({
        status:'sucess',
        message:'user data fetched sucessfully',
        userData:userObject
    })
}

export function getUserListv1(req,res){
    // returing the data from the hardcoded list
    const page = req.params.page ||0
    const limit= req.params.limit || 20
    
}

export async function getUserListv2(req,res){
    //returing the data from database

    const page = req.params.page ||0
    const limit= req.params.limit || 20
    const offset= (page-1)*limit

    const userData = await Users.find()
                                .skip(offset).limit(limit);
    
    const totalUsers = await User.countDocuments()

    res.status(200).json({
        success: true,
        page,
        limit,
        totalUsers,
        totalPages: Math.ceil(totalUsers / limit),
        data: userData,
      });

}

export function updateUser(){

}

export function deleteUser(){

}