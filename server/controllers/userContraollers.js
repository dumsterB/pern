class UserContraoller{
    async registration(req,res){

    }
    async login(req,res){

    }
    async check(req,res){
     const {id}=req.query
        res.json(id)
    }
}
module.exports=new UserContraoller()