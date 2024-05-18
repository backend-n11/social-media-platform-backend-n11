import {createPosts} from "../database/posts.queries.js"

export const createPost = (req, res) =>{
    const { title, body, user_id, status, image } = req.body
    try{
        if(!title || !body || !user_id || !status){
            res.send("Not enough data provided!")
        }else{
            createPosts(title, body, user_id, status, image)
            res.send("Updated successfully")
        }
    }
    catch(err){

    }
}