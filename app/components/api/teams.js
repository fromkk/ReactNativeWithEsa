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
}
