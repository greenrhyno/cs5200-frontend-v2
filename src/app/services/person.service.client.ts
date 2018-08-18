import {Injectable} from '@angular/core';

const pApiUrl = 'https://panfree.herokuapp.com/api/person/';
const baseApiUrl = 'https://panfree.herokuapp.com/api/';

@Injectable()
export class PersonServiceClient {

  username = '';
  type = '';

  current(username) {
    this.username = username;
  }
  currentType(type) {
    this.type = type;
  }

  profile() {
    return fetch( pApiUrl + this.username)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }



  createPerson(login, password, userType) {
    const creds = {
      login: login,
      password: password,
      // type: userType
    };
    if (userType === 'User') {
      return fetch(baseApiUrl + 'user', {
        method: 'post',
        body: JSON.stringify(creds),
        // credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json());
    } else if (userType === 'Chef') {
      return fetch(baseApiUrl + 'chef', {
        method: 'post',
        body: JSON.stringify(creds),
        // credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json());
} else if (userType === 'Admin') {
      return fetch(baseApiUrl + 'admin', {
        method: 'post',
        body: JSON.stringify(creds),
        // credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json());
    } else {
      return fetch(baseApiUrl + 'companyrep', {
        method: 'post',
        body: JSON.stringify(creds),
        // credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json());
    }
}

  findPersonByLogin(login) {
    return fetch( pApiUrl + 'login/' + login)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findPersonById(id) {
    return fetch( pApiUrl + 'login/' + id)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findAllPerson() {
    return fetch( pApiUrl)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }
  //
  // profile() {
  //   return fetch('https://webdev-nodejs-madness.herokuapp.com/api/profile', {
  //     credentials: 'include'
  //   })
  //     .then(response => response.json());
  // }




  updatePerson(id, person) {
    console.log(id, person);
    return fetch(pApiUrl + id, {
      // credentials: 'include',
      method: 'put',
      body: JSON.stringify(person),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }






  // createUser(username, password) {
  //   const user = {
  //     username: username,
  //     password: password
  //   };
  //   return fetch('https://webdev-nodejs-madness.herokuapp.com/api/register/', {
  //     body: JSON.stringify(user),
  //     credentials: 'include',
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   });
  // }
  //
  // logout() {
  //   return fetch('https://webdev-nodejs-madness.herokuapp.com/api/logout/', {
  //     method: 'post',
  //     credentials: 'include'
  //   });
  // }

  deleteAllPerson() {
    return fetch(pApiUrl + 'deleteall', {
      credentials: 'include',
      method: 'delete'
    });
  }

  deletePersonById(pid) {
    return fetch(pApiUrl + pid, {
      credentials: 'include',
      method: 'delete'
    });
  }


}
