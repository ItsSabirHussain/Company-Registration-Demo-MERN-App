import axios from 'axios'

export const registerUser = newUser => {
    return axios
      .post('http://localhost:4000/user/userregisteration', {
        FullName: newUser.FullName,
        City: newUser.City,
        Country: newUser.Country,
        ID: newUser.ID,
        Key: newUser.Key
      })
      .then(response => {
        console.log('User Registered Successfully.')
      })
  }

  export const loginUser = user => {
    return axios
      .post('http://localhost:4000/user/userlogin', {
        ID: user.ID,
        Key: user.Key
      })
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }