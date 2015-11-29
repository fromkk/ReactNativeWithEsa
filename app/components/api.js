'use strict';

export default class Api
{
    constructor()
    {
        this.config = require('../config/api');
    }
    isEmpty(args)
    {
        return void(0) === args || null === args || 0 === args.length;
    }
    get(url, success, failure)
    {
        url = this.config.domain + url;
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.config.accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if (void(0) !== json.error)
            {
                typeof failure === 'function' && failure(json);
            } else
            {
                typeof success === 'function' && success(json);
            }
        }).catch((error) => {
            typeof failure === 'function' && failure(error.json());
        }).done();
    }
    post(url, posts, success, failure)
    {
        url = this.config.domain + url;
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + this.config.accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posts)
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if (void(0) !== json.error)
            {
                typeof failure === 'function' && failure(json);
            } else
            {
                typeof success === 'function' && success(json);
            }
        }).catch((error) => {
            typeof failure === 'function' && failure(error.json());
        }).done();
    }
}
