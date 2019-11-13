import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class PostProvider
{
    server: string = "https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/";

    constructor(public http: HttpClient)
    {

    }

    postData(body, file)
    {
        let type = "application/json; charset=UTF-8";
        let headers = new HttpHeaders({ 'Content-type': type });
        // let options = new RequestOptions({ headers: headers });

        return this.http.post(this.server + file, JSON.stringify(body));

    }

}