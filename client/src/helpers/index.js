
  export function  getJwtAdmin() {
    return {adminToken: 'bearer ' + localStorage.getItem('adminToken'),
            ID: localStorage.getItem('AdminID')
  }
  };