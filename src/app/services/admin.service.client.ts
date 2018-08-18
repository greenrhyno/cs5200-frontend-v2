import {Injectable} from '@angular/core';

const pApiUrl = 'https://panfree.herokuapp.com/api/admin/';
const baseApiUrl = 'https://panfree.herokuapp.com/api/';

@Injectable()
export class AdminServiceClient {

  username = '';
  type = '';

  current(username) {
    this.username = username;
  }
  currentType(type) {
    this.type = type;
  }

  profile() {
    return fetch(pApiUrl + 'login/' + this.username)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findAdminByLogin(login) {
    return fetch( pApiUrl + 'login/' + login)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findAdminById(id) {
    return fetch( pApiUrl  + id)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findAllAdmin() {
    return fetch( pApiUrl)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }


  updateAdmin(id, admin) {
    console.log(id, admin);
    return fetch(pApiUrl + id, {
      // credentials: 'include',
      method: 'put',
      body: JSON.stringify(admin),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteAllAdmin() {
    return fetch(pApiUrl + 'deleteall', {
      credentials: 'include',
      method: 'delete'
    });
  }

  deleteAdminById(pid) {
    return fetch(pApiUrl + pid, {
      credentials: 'include',
      method: 'delete'
    });
  }


}
