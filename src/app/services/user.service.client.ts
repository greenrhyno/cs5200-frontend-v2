import {Injectable} from '@angular/core';

const pApiUrl = 'https://panfree.herokuapp.com/api/user/';
const baseApiUrl = 'https://panfree.herokuapp.com/api/';

@Injectable()
export class UserServiceClient {

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

  newFoodItem(userId, fooditem) {
    const food = {
      'foodName': fooditem
    }
    return fetch(baseApiUrl + 'user/' + userId + '/fooditem', {
      method: 'post',
      body: JSON.stringify(food),
      // credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteFood(foodId) {
    return fetch(baseApiUrl + 'fooditem/' + foodId, {
      method: 'delete'
    });
  }

  findUserByLogin(login) {
    return fetch( pApiUrl + 'login/' + login)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findUserById(id) {
    return fetch( pApiUrl  + id)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findAllChef() {
    return fetch( pApiUrl)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }


  updateUser(id, user) {
    console.log(id, user);
    return fetch(pApiUrl + id, {
      // credentials: 'include',
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteAllUser() {
    return fetch(pApiUrl + 'deleteall', {
      credentials: 'include',
      method: 'delete'
    });
  }

  deleteUserById(pid) {
    return fetch(pApiUrl + pid, {
      credentials: 'include',
      method: 'delete'
    });
  }


}
