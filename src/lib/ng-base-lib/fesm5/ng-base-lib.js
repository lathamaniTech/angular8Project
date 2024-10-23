import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-base-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgBaseLibService = /** @class */ (function () {
    function NgBaseLibService() {
    }
    NgBaseLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgBaseLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgBaseLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgBaseLibService_Factory() { return new NgBaseLibService(); }, token: NgBaseLibService, providedIn: "root" });
    return NgBaseLibService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-base-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgBaseLibComponent = /** @class */ (function () {
    function NgBaseLibComponent() {
    }
    /**
     * @return {?}
     */
    NgBaseLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NgBaseLibComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-ngBase-lib",
                    template: "\n    <p>ng-base-lib works!</p>\n    <button class=\"btnStyle\">Open</button>\n  ",
                    styles: ["\n      .btnStyle {\n        background-color: green;\n        padding: 6px;\n        font-size: 14px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NgBaseLibComponent.ctorParameters = function () { return []; };
    return NgBaseLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-base-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgBaseLibModule = /** @class */ (function () {
    function NgBaseLibModule() {
    }
    NgBaseLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgBaseLibComponent],
                    imports: [],
                    exports: [NgBaseLibComponent]
                },] }
    ];
    return NgBaseLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-base-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgBaseLibComponent, NgBaseLibModule, NgBaseLibService };
//# sourceMappingURL=ng-base-lib.js.map
