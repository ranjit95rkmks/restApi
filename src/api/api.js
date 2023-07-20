import axios from "axios";


const BaseURL = "https://basic-blog.teamrabbil.com/api";


export async function catgoriesName(){
     let res = await axios.get(BaseURL+"/post-categories");
    if (res.status === 200){
        return res;
    }
    else{
        return [];
    }
    
}

// export async function  