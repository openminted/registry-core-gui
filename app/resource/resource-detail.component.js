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
var router_deprecated_1 = require('@angular/router-deprecated');
var resource_service_1 = require('./resource.service');
var resource_form_component_1 = require("./resource-form.component");
var ResourceDetailsComponent = (function () {
    function ResourceDetailsComponent(resourceService, routeParams) {
        this.resourceService = resourceService;
        this.routeParams = routeParams;
    }
    ResourceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resourceType = this.routeParams.get('resourceType');
        var id = this.routeParams.get('id');
        this.resourceService.getResource(resourceType, id).subscribe(function (resource) { return _this.resource = resource; }, function (error) { return _this.errorMessage = error; });
    };
    ResourceDetailsComponent.prototype.goBack = function () {
        window.history.back();
    };
    ResourceDetailsComponent = __decorate([
        core_1.Component({
            selector: 'resource-type-detail',
            templateUrl: 'app/resource/resource-detail.component.html',
            directives: [resource_form_component_1.ResourceFormComponent]
        }), 
        __metadata('design:paramtypes', [resource_service_1.ResourceService, router_deprecated_1.RouteParams])
    ], ResourceDetailsComponent);
    return ResourceDetailsComponent;
}());
exports.ResourceDetailsComponent = ResourceDetailsComponent;
//# sourceMappingURL=resource-detail.component.js.map