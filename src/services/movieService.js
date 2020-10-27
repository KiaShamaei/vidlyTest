import http from '../services/httpservices';
import api  from '../config.json';
const apiEndpoint =api.apiEndPointMovies;

function movieUrl(id){
 return `${apiEndpoint}/${id}`;
}
export function getMovies(){
 return  http.get(apiEndpoint);
}
export function saveMovie(movie){
	if (movie._id){
	 let body = {...movie};
	 delete body._id;
	 return http.put(movieUrl(movie._id), body);
}
	 return http.post(apiEndpoint , movie);
}
export function getMovie(id){
 return http.get (movieUrl(id));
}
export function deleteMovie(id){
 return http.delete(movieUrl(id));
}