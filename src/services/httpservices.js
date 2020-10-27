import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null,error=>{
	const expected = error.response && 
	error.response.status>= 400 &&
	 error.response.status < 500 ;
	 if(!expected){
		 console.log('logging the error',error);
		 toast.error("an unexpected error!");}
	return Promise.reject(error);
});
export default{
	get : axios.get,
	put : axios.put,
	delete : axios.delete,
	post :axios.post
}