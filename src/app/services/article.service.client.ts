import {Injectable} from '@angular/core';

const pApiUrl = 'https://panfree.herokuapp.com/api/article/';

const mamiUrl = 'https://panfree.herokuapp.com/api/person/';

const baseApiUrl = 'https://panfree.herokuapp.com/api/';

@Injectable()
export class ArticleServiceClient {


  findAllArticle() {
    return fetch( pApiUrl)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findAllBlog() {
    return fetch( baseApiUrl + 'blog/')
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findArticleById(id) {
    return fetch( pApiUrl  + id)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findArticleByLogin(login) {
    return fetch( pApiUrl + 'login/' + login)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findLikedArticlesByPerson(id) {
    return fetch(mamiUrl + id + '/likes')
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findAllPersonWhoLikedArticle(id) {
    return fetch(pApiUrl + id + '/likes')
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }




  updatePerson(id, article) {
    console.log(id, article);
    return fetch(pApiUrl + id, {
      // credentials: 'include',
      method: 'put',
      body: JSON.stringify(article),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }


  addLikeToArticle(pid, aid) {
    console.log(pid, aid);
    return fetch(mamiUrl + pid + '/article/' + aid, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteAllArticle() {
    return fetch(pApiUrl + 'deleteall', {
      credentials: 'include',
      method: 'delete'
    });
  }

  deleteArticleById(pid) {
    return fetch(pApiUrl + pid, {
      credentials: 'include',
      method: 'delete'
    });
  }

  deleteAllArticleForALogin(login) {
    return fetch(pApiUrl + 'login/' + login, {
      credentials: 'include',
      method: 'delete'
    });
  }
}
