import axios from 'axios'
const getRecipes = (query)  => {
  return axios.get(`http://www.recipepuppy.com/api/?q=${query}`);
}
export default getRecipes