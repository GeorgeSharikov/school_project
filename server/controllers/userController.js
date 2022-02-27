class User{
    async registration(req, res, next){
        res.send('<h1>Pupkin Zalpkin</h1>')
    }
}

export const UserController = new User()