import axios from 'axios'

export const register = newAdmin => {
    return axios
      .post('http://localhost:4000/admin/adminregisteration', {
        FullName: newAdmin.FullName,
        OfficeID: newAdmin.OfficeID,
        ID: newAdmin.ID,
        Key: newAdmin.Key
      })
      .then(response => {
        console.log('Admin Registered Successfully.')
      })
  }

  export const loginAdmin = admin => {
    return axios
      .post('http://localhost:4000/admin/adminlogin', {
        ID: admin.ID,
        Key: admin.Key
      })
      .then(response => {
        localStorage.setItem('admintoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }