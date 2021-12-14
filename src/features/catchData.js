import axios from "axios"

const getCookies = () =>{
  return axios.get("http://127.0.0.1:8000/api/cookies/")
  .then(response => response.data.cooks)
}
const getCook = (id) =>{
  return axios.get(`http://127.0.0.1:8000/api/cookies/${id}`)
  .then(response => response.data)
}
const getCookByCity = (city) =>{
  return axios.get(`http://127.0.0.1:8000/api/cooki?city=${city}`)
  .then(response => response.data)
}
export {getCookies,getCook,getCookByCity}
