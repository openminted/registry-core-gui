/**
 * Created by stefania on 4/11/16.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ResourceType } from './resource-type';
import { Observable } from 'rxjs/Observable';
import { ResourceTypePage } from './resource-type-page';


@Injectable()
export class ResourceTypeService {

    constructor (private http: Http) {}

    private _resourceTypesUrl = 'http://83.212.96.150:8080/RegistryService/resourceType/';
    // private _resourceTypesUrl = 'http://192.168.1.25:8080/registry/resourceType/';

    getResourceTypes() {
        return this.http.get(this._resourceTypesUrl)
            .map(res => <ResourceTypePage> res.json())
            .catch(this.handleError);
    }

    getResourceType(name: string) {
        return this.http.get(this._resourceTypesUrl + name)
            .map(res => <ResourceType> res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}