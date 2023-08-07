import url from "./url";
import {post,get} from "../axios/axiosConfig"
const getLoigin=(params)=>{
  return  post(url.login,params)  
}
export{
    getLoigin
}