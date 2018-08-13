import {Injectable} from '@angular/core';

const pApiUrl = 'https://panfree.herokuapp.com/api/person/'

@Injectable()
export class PersonServiceClient {



  createPerson(login, password) {
    const credentials = {
      login: login,
      password: password
    };
    return fetch(pApiUrl, {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
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
    return fetch(pApiUrl + 'id', {
      credentials: 'include',
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
