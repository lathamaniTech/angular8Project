import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-base-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgBaseLibService {
    constructor() { }
}
NgBaseLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgBaseLibService.ctorParameters = () => [];
/** @nocollapse */ NgBaseLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgBaseLibService_Factory() { return new NgBaseLibService(); }, token: NgBaseLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-base-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgBaseLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NgBaseLibComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-ngBase-lib",
                template: `
    <p>ng-base-lib works!</p>
    <button class="btnStyle">Open</button>
  `,
                styles: [`
      .btnStyle {
        background-color: green;
        padding: 6px;
        font-size: 14px;
      }
    `]
            }] }
];
/** @nocollapse */
NgBaseLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-base-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgBaseLibModule {
}
NgBaseLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgBaseLibComponent],
                imports: [],
                exports: [NgBaseLibComponent]
            },] }
];

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
