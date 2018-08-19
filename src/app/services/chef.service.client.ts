import {Injectable} from '@angular/core';

const pApiUrl = 'https://panfree.herokuapp.com/api/chef/';
const baseApiUrl = 'https://panfree.herokuapp.com/api/';

@Injectable()
export class ChefServiceClient {

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
  createNewBlog(chefId, blog) {
    console.log(chefId, blog);
    return fetch(pApiUrl + chefId + '/blog', {
      method: 'put',
      body: JSON.stringify(blog),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findAllBlogsForChef(username) {
    return fetch(baseApiUrl + 'blog/login/' + username).then(function (response) {
      if (response.status > 400) {
        return null;
      }
      return response.json();
    });
  }

  deleteBlogById(id) {
    return fetch(baseApiUrl + 'blog/' + id, {
      method: 'delete'
    });
  }

  findChefByLogin(login) {
    return fetch( pApiUrl + 'login/' + login)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findChefById(id) {
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


  updatePerson(id, chef) {
    console.log(id, chef);
    return fetch(pApiUrl + id, {
      // credentials: 'include',
      method: 'put',
      body: JSON.stringify(chef),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

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
