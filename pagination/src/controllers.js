

export function getUserDetails(req,res){
    const email = req.body.email 
}


export function createUser(){

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