import axios from "axios";


const BaseURL = "https://basic-blog.teamrabbil.com/api";


export async function catgoriesName(){
     let res = await axios.get(BaseURL+"/post-categories");
    if (res.status === 200){
        //console.log(res)
        return res.data;
    }
    else{
        return [];
    }
    
}

// export async function  