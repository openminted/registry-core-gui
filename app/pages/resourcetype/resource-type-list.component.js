/**
 * Created by stefania on 5/26/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var resource_type_service_1 = require('./../../services/resource-type.service');
var ResourceTypeListComponent = (function () {
    function ResourceTypeListComponent(_router, _resourceTypeService) {
        this._router = _router;
        this._resourceTypeService = _resourceTypeService;
    }
    ResourceTypeListComponent.prototype.ngOnInit = function () {
        this.getResourceTypes();
    };
    ResourceTypeListComponent.prototype.getResourceTypes = function () {
        var _this = this;
        this._resourceTypeService.getResourceTypes().subscribe(function (resourceTypePage) { return _this.resourceTypePage = resourceTypePage; }, function (error) { return _this.errorMessage = error; });
    };
    ResourceTypeListComponent.prototype.gotoDetail = function (resourceType) {
        this._router.navigate(['/resourceType/detail', resourceType.name]);
        // this.selectedResourceType = resourceType;
        // let link = ['ResourceTypeDetails', { name: resourceType.name }];
        // this._router.navigate(link);
    };
    ResourceTypeListComponent.prototype.addNewResourceType = function () {
        // let link = ['NewResource'];
        // this.router.navigate(link);
        this._router.navigate(['/resourceType/new']);
    };
    ResourceTypeListComponent = __decorate([
        core_1.Component({
            selector: 'resource-type-list',
            templateUrl: 'app/pages/resourcetype/resource-type-list.component.html',
            styleUrls: ['app/pages/resourcetype/resource-type-list.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, resource_type_service_1.ResourceTypeService])
    ], ResourceTypeListComponent);
    return ResourceTypeListComponent;
}());
exports.ResourceTypeListComponent = ResourceTypeListComponent;
//# sourceMappingURL=resource-type-list.component.js.map