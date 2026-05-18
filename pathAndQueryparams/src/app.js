
export function extractData(){

}


export function addition(req,res){
    const {num1,num2} = req.query
    if(!num1 || !num2){
        return res.status(400).json({
            message:'numbers are missing'
        })
    }

    const result =parseInt(num1)+parseInt(num2);
    res.status(200).json({
        status:'success',
        message:'addition completed',
        result:result
    })
}

export function substraction(req,res){
    const {num1,num2} = req.query
    if(!num1 || !num2){
        return res.status(400).json({
            message:'numbers are missing'
        })
    }

    const result =parseInt(num1)-parseInt(num2);
    res.status(200).json({
        status:'success',
        message:'addition completed',
        result:result
    })
}

export function multiplication(req,res){
    const {num1,num2} = req.query
    if(!num1 || !num2){
        return res.status(400).json({
            message:'numbers are missing'
        })
    }

    const result =parseInt(num1)*parseInt(num2);
    res.status(200).json({
        status:'success',
        message:'multiplication completed',
        result:result
    })
}


export function division(req,res){
    const {num1,num2} = req.query
    if(!num1 || !num2){
        return res.status(400).json({
            message:'numbers are missing'
        })
    }

    const result = parseInt(num1)/parseInt(num2);
    res.status(200).json({
        status:'success',
        message:'division completed',
        result:result
    })
}