'use strict';

import Api from '../api';

export default class Api_Teams extends Api
{
    constructor()
    {
        super();
    }
    list(success, failure)
    {
        var url = '/v1/teams';

        this.get(url, success, failure);
    }
    item(name, success, failure)
    {
        var url = '/v1/teams/' + name;
        this.get(url, success, failure);
    }
    members(name, page, success, failure)
    {
        var url = '/v1/teams/' + name + '/members' + (null === page ? '' : '?page=' + page);
        this.get(url, success, failure);
    }
}
