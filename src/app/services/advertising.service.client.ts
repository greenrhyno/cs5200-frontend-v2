import {Injectable} from '@angular/core';

const pApiUrl = 'https://panfree.herokuapp.com/api/advertisement/';
const maMiUrl = 'https://panfree.herokuapp.com/api/companyrep/';
const baseApiUrl = 'https://panfree.herokuapp.com/api/';

@Injectable()
export class AdvertisingServiceClient {

  username = '';
  type = '';

  findAllAdvert() {
    return fetch( pApiUrl)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findAdvertById(id) {
    return fetch( pApiUrl  + id)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findAdvertByRepId(id) {
    return fetch( pApiUrl + 'companyrep/' + id)
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  addAdvert(id, advert) {
    console.log(id, advert);
    return fetch(maMiUrl + id + '/newAd', {
      // credentials: 'include',
      method: 'put',
      body: JSON.stringify(advert),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteAllAdvert() {
    return fetch(pApiUrl + 'deleteall', {
      credentials: 'include',
      method: 'delete'
    });
  }

  deleteAllAdvertByRep(rid) {
    return fetch(pApiUrl + 'companyrep/' + rid, {
      credentials: 'include',
      method: 'delete'
    });
  }
}
