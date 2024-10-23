(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-base-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ng-base-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-base-lib.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgBaseLibService = /** @class */ (function () {
        function NgBaseLibService() {
        }
        NgBaseLibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgBaseLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgBaseLibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgBaseLibService_Factory() { return new NgBaseLibService(); }, token: NgBaseLibService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [NgBaseLibComponent],
                        imports: [],
                        exports: [NgBaseLibComponent]
                    },] }
        ];
        return NgBaseLibModule;
    }());

    exports.NgBaseLibComponent = NgBaseLibComponent;
    exports.NgBaseLibModule = NgBaseLibModule;
    exports.NgBaseLibService = NgBaseLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-base-lib.umd.js.map
