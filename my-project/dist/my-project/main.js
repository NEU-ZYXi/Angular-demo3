(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
















var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__["FlickrImageSearchComponent"] },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\n  text-decoration: none;\n}\n\n.container-align {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.container {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.form-control {\n  margin-bottom: 5px;\n}\n\n.bc-blue {\n  background-color: #337ab7;\n}\n\n.bc-grey {\n  background-color: #d3d3d354;\n}\n\n.text-white {\n  color: white;\n}\n\n.text-blue {\n  color: #337ab7;\n}\n\n.text-grey {\n  color: grey;\n  font-weight: bold;\n}\n\n.text-black {\n  color: black;\n}\n\n.text-white-bold {\n  color: white;\n  font-weight: bold;\n}\n\nli i {\n  padding: 3px;\n  float: right;\n}\n\n.vertical-line {\n  border-left: 1px solid lightgrey;\n}\n\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n\n.paragraph-img {\n  height: 400px;\n  width: 1000px;\n  max-height: 30%;\n  max-width: 90%;\n}\n\n.icon-padding {\n  padding-top: 8px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyLWFsaWduIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJjLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuXG4uYmMtZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM1NDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLnRleHQtZ3JleSB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50ZXh0LXdoaXRlLWJvbGQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5saSBpIHtcbiAgcGFkZGluZzogM3B4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi52ZXJ0aWNhbC1saW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7XG4gIGJvcmRlci10b3A6IDAgbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMCBub25lO1xuICBib3JkZXItbGVmdDogMCBub25lO1xuICBib3JkZXItcmlnaHQ6IDAgbm9uZTtcbn1cblxuLnBhcmFncmFwaC1pbWcge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMCU7XG4gIG1heC13aWR0aDogOTAlO1xufVxuXG4uaWNvbi1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _services_safepipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/safepipe */ "./src/app/services/safepipe.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/sortable.directive */ "./src/app/directives/sortable.directive.ts");
/* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-text/widget-text.component */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__["PageEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_14__["PageListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
                _services_safepipe__WEBPACK_IMPORTED_MODULE_25__["SafePipe"],
                _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_27__["SortableDirective"],
                _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_29__["WidgetHtmlComponent"],
                _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_30__["WidgetTextComponent"],
                _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_31__["FlickrImageSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_26__["HttpModule"],
                ngx_quill_editor__WEBPACK_IMPORTED_MODULE_28__["QuillEditorModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_32__["FlickrService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/sortable.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/sortable.directive.ts ***!
  \**************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


'use strict';
var SortableDirective = /** @class */ (function () {
    function SortableDirective(ele) {
        this.ele = ele;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.ele.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    start: refe.initialIndex,
                    end: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flickr.service.client.ts ***!
  \***************************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '90ea0df0685933f65ea96fab852a3023';
        this.secret = '59b7fb7ceb0a467b';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])() // needed as we're injecting Http service into this service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        // page._id = String(Math.floor(Math.random() * 1000) + 1);
        page.websiteId = websiteId;
        return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    PageService.prototype.updatePage = function (pageId, newPage) {
        return this.http.put(this.baseUrl + '/api/page/' + pageId, newPage)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/safepipe.ts":
/*!**************************************!*\
  !*** ./src/app/services/safepipe.ts ***!
  \**************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





// @Injectable() cannot be missed since here we have http in constructor
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    // all functions return an observable, .subscribe whenever used
    UserService.prototype.createUser = function (user) {
        // user._id = String(Math.floor(Math.random() * 1000) + 1);
        return this.http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            // important to check if response is empty since .json() cannot be called on empty
            return res.text() ? res.json() : undefined;
        });
    };
    UserService.prototype.updateUser = function (userId, newUser) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, newUser)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        // website._id = String(Math.floor(Math.random() * 1000) + 1);
        website.developerId = userId;
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, newWebsite) {
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, newWebsite)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");





var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.widgetChosen = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('DEFAULT');
        this.currentWidgetType = this.widgetChosen.asObservable();
        this.widgetTypes = ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT INPUT'];
        this.editFlag = false;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.pageId = pageId;
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, newWidget) {
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, newWidget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.chooseNewType = function (widgetType) {
        this.widgetChosen.next(widgetType);
    };
    WidgetService.prototype.reorderWidgets = function (start, end, pageId) {
        return this.http.put(this.baseUrl + '/api/page/' + pageId + '/widget?start=' + start + '&end=' + end, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Edit Page\n      </a>\n    </div>\n    <a (click)=\"onEditPage()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        name=\"pageName\"\n        class=\"form-control\"\n        placeholder=\"{{ page.name }}\"\n        [(ngModel)]=\"page.name\">\n    </div>\n    <div class=\"form-group\">\n      <label>Title</label>\n      <input\n        type=\"text\"\n        name=\"pageTile\"\n        class=\"form-control\"\n        placeholder=\"{{ page.title }}\"\n        [(ngModel)]=\"page.title\">\n    </div>\n    <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.page = { name: "", title: "", websiteId: "", description: "" };
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.pageService.findPageById(this.pageId)
            .subscribe(function (page) {
            _this.page = page;
        });
    };
    PageEditComponent.prototype.onEditPage = function () {
        var _this = this;
        this.pageService.updatePage(this.pageId, this.page)
            .subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    PageEditComponent.prototype.onDelete = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (pages) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Pages\n      </a>\n    </div>\n    <a [routerLink]=\"['./', 'new']\" class=\"text-black\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"form-control\" *ngFor=\"let page of pages\">\n    <a [routerLink]=\"['./', page._id, 'widget']\" class=\"text-blue\">{{ page.name }}</a>\n    <a [routerLink]=\"['./', page._id]\" class=\"text-blue float-right\">\n      <i class=\"fas fa-cog\"></i>\n    </a>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, route) {
        this.pageService = pageService;
        this.route = route;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        New Page\n      </a>\n    </div>\n    <a (click)=\"onNewPage()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        name=\"pageName\"\n        class=\"form-control\"\n        placeholder=\"Page Name\"\n        required\n        [(ngModel)]=\"newPageName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Title</label>\n      <input\n        type=\"text\"\n        name=\"pageTitle\"\n        class=\"form-control\"\n        placeholder=\"Page Title\"\n        [(ngModel)]=\"newPageTitle\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.newPageName = '';
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent.prototype.onNewPage = function () {
        var _this = this;
        if (this.newPageName === '') {
            return false;
        }
        else {
            this.newPage = { name: this.newPageName, title: this.newPageTitle, websiteId: this.websiteId, description: this.newPageDescription };
            this.pageService.createPage(this.websiteId, this.newPage)
                .subscribe(function (pages) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div\n    *ngIf=\"errorFlag\"\n    class=\"alert alert-danger\">\n    <h1>{{ errorMessage }}</h1>\n    <hr>\n    <a routerLink=\"login\" (click)=\"reload()\">Back</a>\n  </div>\n\n  <div *ngIf=\"!errorFlag\">\n    <h1>Login</h1>\n    <form\n      (ngSubmit)=\"onLogin()\"\n      #form='ngForm'>\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          name=\"username\"\n          class=\"form-control\"\n          placeholder=\"username\"\n          ngModel\n          required\n          #username=\"ngModel\">\n        <span\n          class=\"help-block\"\n          *ngIf=\"!username.valid && username.touched\">\n          Please enter a username\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <input\n          type=\"password\"\n          name=\"password\"\n          class=\"form-control\"\n          placeholder=\"password\"\n          ngModel\n          required\n          #password=\"ngModel\">\n        <span\n          class=\"help-block\"\n          *ngIf=\"!password.valid && password.touched\">\n          Please enter a password\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <button\n          class=\"btn btn-primary btn-block\"\n          type=\"submit\"\n          [disabled]=\"!form.valid\">\n          Login\n        </button>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</a>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, route) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.errorFlag = false;
        this.errorMessage = "Invalid username or password";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        // can also use findUserByUsername and check if password matches
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            _this.loginUser = user;
            // in user.service, if response is empty, return undefined
            if (_this.loginUser === undefined || _this.loginUser === null) {
                _this.errorFlag = true;
            }
            else {
                _this.router.navigate(['/user', _this.loginUser._id]);
            }
        });
    };
    LoginComponent.prototype.reload = function () {
        this.errorFlag = false;
        this.router.navigate(['./'], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default fixed-top bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header navbar-dark\">\n      <a class=\"navbar-brand text-white-bold\" routerLink=\"./\">Profile</a>\n    </div>\n    <div class=\"ml-auto\">\n      <a (click)=\"onUpdateUser()\" style=\"cursor:pointer;\" class=\"float-right text-white\">\n        <i class=\"fas fa-check\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input\n        name=\"username\"\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ user.username }}\"\n        [(ngModel)]=\"user.username\">\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input\n        name=\"email\"\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{ user.email }}\"\n        [(ngModel)]=\"user.email\">\n    </div>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input\n        name=\"first-name\"\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ user.firstName }}\"\n        [(ngModel)]=\"user.firstName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input\n        name=\"last-name\"\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ user.lastName }}\"\n        [(ngModel)]=\"user.lastName\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\" routerLink=\"./website\">Websites</a>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</a>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a routerLink=\"./\" class=\"text-white float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        // object needs to be initialized to avoid undefined on ngOnInit()
        this.user = { username: '', password: '', firstName: '', lastName: '', email: '', phone: '' };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            return _this.userService.findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
                _this.username = _this.user['username'];
            });
        });
    };
    ProfileComponent.prototype.onUpdateUser = function () {
        var _this = this;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            alert("Successfully update your profile");
            _this.user = user;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <form\n    (ngSubmit)=\"onRegister()\"\n    #form='ngForm'>\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        name=\"username\"\n        class=\"form-control\"\n        placeholder=\"username\"\n        [(ngModel)]=\"regUsername\"\n        required\n        #username=\"ngModel\">\n      <span\n        class=\"help-block\"\n        *ngIf=\"!username.valid && username.touched\">\n        Please enter a valid username\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        name=\"password\"\n        class=\"form-control\"\n        placeholder=\"password\"\n        [(ngModel)]=\"regPassword\"\n        required\n        #password=\"ngModel\">\n      <span\n        class=\"help-block\"\n        *ngIf=\"!password.valid && password.touched\">\n        Please enter a valid password\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        name=\"verifiedPassword\"\n        class=\"form-control\"\n        placeholder=\"verify password\"\n        [(ngModel)]=\"regVerifiedPassword\"\n        required\n        #verifiedPassword=\"ngModel\">\n      <span\n        class=\"help-block\"\n        *ngIf=\"(regPassword !== regVerifiedPassword || !verifiedPassword.valid) && verifiedPassword.touched\">\n        Please enter the same password\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <button\n        class=\"btn btn-primary btn-block\"\n        type=\"submit\"\n        [disabled]=\"!form.valid || regPassword !== regVerifiedPassword\">\n        Register\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"onCancel()\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = { username: '', password: '', firstName: '', lastName: '', email: '', phone: '' };
        this.loginUser = { _id: '', username: '', password: '', firstName: '', lastName: '', email: '', phone: '' };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.user.username = this.regUsername;
        this.user.password = this.regPassword;
        this.userService.createUser(this.user)
            .subscribe(function (user) {
            _this.loginUser = user;
            _this.router.navigate(['/user', _this.loginUser._id]);
        });
    };
    RegisterComponent.prototype.onCancel = function () {
        this.router.navigate(['login']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "signupForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-blue\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-brand navbar-dark\">\n          <a routerLink=\"../\" class=\"float-left text-white\">\n            <i class=\"fas fa-chevron-left\"></i>\n          </a>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <a class=\"text-white-bold\" routerLink=\"../\">\n            Websites\n          </a>\n\n        </div>\n        <a routerLink=\"../new\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-plus\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"container-fluid\">\n        <a class=\"navbar-brand text-white-bold\" routerLink=\"./\">\n          Edit Website\n        </a>\n        <a (click)=\"onEditWebsite()\" style=\"cursor: pointer\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-check\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-align\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"form-control\" *ngFor=\"let website of websites\">\n        <a [routerLink]=\"['../', website._id, 'page']\" class=\"text-blue\">{{ website.name }}</a>\n        <a [routerLink]=\"['../', website._id]\" (click)=\"onChangeWebsite(website._id)\" class=\"text-blue float-right\">\n          <i class=\"fas fa-cog\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-7\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input\n            type=\"text\"\n            name=\"websiteName\"\n            class=\"form-control\"\n            id=\"websiteName\"\n            placeholder=\"{{ website.name }}\"\n            [(ngModel)]=\"website.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea\n            id=\"websiteDescription\"\n            name=\"websiteDescription\"\n            class=\"form-control\"\n            rows=\"5\"\n            [(ngModel)]=\"website.description\"\n            placeholder=\"{{ website.description }}\"></textarea>\n        </div>\n        <button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"onDelete()\">Delete</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-white float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.website = { name: "", developerId: "", description: "" };
        this.websiteIdObs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
        this.websiteService.findWebsiteById(this.websiteId)
            .subscribe(function (website) {
            _this.website = website;
        });
        // dynamically change the current website info of website-edit inside website-edit page
        this.websiteIdObs
            .subscribe(function (websiteId) {
            _this.websiteId = websiteId;
            _this.websiteService.findWebsiteById(_this.websiteId)
                .subscribe(function (website) {
                _this.website = website;
            });
        });
    };
    WebsiteEditComponent.prototype.onChangeWebsite = function (id) {
        this.websiteIdObs.next(id);
    };
    WebsiteEditComponent.prototype.onEditWebsite = function () {
        var _this = this;
        this.websiteService.updateWebsite(this.websiteId, this.website)
            .subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    WebsiteEditComponent.prototype.onDelete = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (websites) {
            _this.websites = websites;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-dark\">\n      <a routerLink=\"../\" class=\"float-left text-white\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-white-bold\">\n        Websites\n      </a>\n    </div>\n    <a routerLink=\"./new\" class=\"text-white\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"form-control\" *ngFor=\"let website of websites\">\n      <a [routerLink]=\"['./', website._id, 'page']\" class=\"text-blue\">{{ website.name }}</a>\n      <a [routerLink]=\"['./', website._id]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-cog\"></i>\n      </a>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-white float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, route) {
        this.websiteService = websiteService;
        this.route = route;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-blue\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-brand navbar-dark\">\n          <a routerLink=\"../\" class=\"float-left text-white\">\n            <i class=\"fas fa-chevron-left\"></i>\n          </a>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <a class=\"text-white-bold\" routerLink=\"../\">\n            Websites\n          </a>\n\n        </div>\n        <a routerLink=\"./\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-plus\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"container-fluid\">\n        <a class=\"navbar-brand text-white-bold\" routerLink=\"./\">\n          New Websites\n        </a>\n        <a routerLink=\"../\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-check\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-align\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"form-control\" *ngFor=\"let website of websites\">\n        <a [routerLink]=\"['../', website._id, 'page']\" class=\"text-blue\">{{ website.name }}</a>\n        <a [routerLink]=\"['../', website._id]\" class=\"text-blue float-right\">\n          <i class=\"fas fa-cog\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-7\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input\n            type=\"text\"\n            name=\"websiteName\"\n            class=\"form-control\"\n            id=\"websiteName\"\n            [(ngModel)]=\"newWebsiteName\"\n            required\n            #name=\"ngModel\">\n          <span\n            class=\"help-block\"\n            *ngIf=\"!name.valid && name.touched\">\n            Please enter a valid website name\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea\n            id=\"websiteDescription\"\n            name=\"websiteDescription\"\n            class=\"form-control\"\n            rows=\"5\"\n            [(ngModel)]=\"newWebsiteDescription\"></textarea>\n        </div>\n        <button\n          class=\"btn btn-primary btn-block\"\n          type=\"submit\"\n          [disabled]=\"!f.valid\">\n          Submit\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-white float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newWebsite = { name: this.newWebsiteName, developerId: this.userId, description: this.newWebsiteDescription };
        this.websiteService.createWebsite(this.userId, this.newWebsite)
            .subscribe(function (websites) {
            _this.websites = websites;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Choose Widget\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <ul class=\"list-group\" *ngFor=\"let type of widgetTypes\">\n    <li class=\"list-group-item border-0\">\n      <a class=\"text-blue\" (click)=\"onNewWidget(type)\" style=\"cursor:pointer; color: #337ab7;\">{{ type }}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, route, router) {
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetTypes = this.widgetService.widgetTypes;
        this.subscription = this.widgetService.currentWidgetType
            .subscribe(function (widgetType) {
            _this.widgetType = widgetType;
        });
    };
    WidgetChooserComponent.prototype.onNewWidget = function (widgetType) {
        var _this = this;
        this.widgetService.chooseNewType(widgetType);
        this.newWidget = { name: '', text: '', widgetType: this.widgetType };
        this.widgetService.createWidget(this.pageId, this.newWidget)
            .subscribe((function (widget) {
            _this.router.navigate(['../', widget._id], { relativeTo: _this.route });
        }));
    };
    WidgetChooserComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widget !== undefined\" [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n  <div *ngSwitchCase=\"'TEXT INPUT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n  <div *ngSwitchDefault>\n    <h1>This Widget Type is not DEFINED in assignment</h1>\n    <hr>\n    <button routerLink=\"../\">Back</button>\n  </div>\n</div>\n\n<div *ngIf=\"widget === undefined\" [ngSwitch]=\"widgetChosen\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n  <div *ngSwitchCase=\"'TEXT INPUT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n  <div *ngSwitchDefault>\n    <h1>This Widget Type is not DEFINED in assignment</h1>\n    <hr>\n    <button routerLink=\"../new\">Back</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
        });
        this.subscription = this.widgetService.currentWidgetType
            .subscribe(function (widgetChosen) {
            _this.widgetChosen = widgetChosen;
        });
        // console.log(this.widgetId);
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
            this.widgetService.editFlag = true;
        }
        else {
            this.widgetService.editFlag = false;
        }
    };
    WidgetEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widget Edit\n      </a>\n    </div>\n    <a (click)=\"onEditWidget()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"{{ widget.name }}\"\n        [(ngModel)]=\"newWidgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"{{ widget.text }}\"\n        [(ngModel)]=\"newWidgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>Size</label>\n      <input\n        type=\"number\"\n        class=\"form-control\"\n        name=\"widgetSize\"\n        placeholder=\"{{ widget.size }}\"\n        [(ngModel)]=\"newWidgetSize\">\n    </div>\n    <button *ngIf=\"editFlag\" class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.newWidgetText = '';
        this.newWidgetSize = null;
        this.editFlag = false;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
        });
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        }
        this.editFlag = this.widgetService.editFlag;
    };
    WidgetHeaderComponent.prototype.onEditWidget = function () {
        var _this = this;
        if (this.widgetId === 'undefined') {
            this.newWidget = { name: this.newWidgetName, size: this.newWidgetSize, text: this.newWidgetText, pageId: this.pageId, widgetType: 'HEADING' };
            this.widgetService.createWidget(this.pageId, this.newWidget)
                .subscribe(function (widgets) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
        else {
            if (this.newWidgetText === '') {
                this.newWidgetText = this.widget.text;
            }
            if (this.newWidgetSize === null) {
                this.newWidgetSize = this.widget.size;
            }
            // console.log(this.newWidgetText);
            this.newWidget = { name: this.newWidgetName, size: this.newWidgetSize, text: this.newWidgetText, pageId: this.pageId, widgetType: 'HEADING' };
            this.widgetService.updateWidget(this.widgetId, this.newWidget)
                .subscribe(function (widget) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
    };
    WidgetHeaderComponent.prototype.onDelete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaHRtbC93aWRnZXQtaHRtbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widget Edit\n      </a>\n    </div>\n    <a (click)=\"onEditWidget()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form novalidate name=\"model.myform\">\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"widname\"\n             placeholder=\"{{ widget.name }}\"\n             required>\n      <!--<span class=\"alert-class\"-->\n            <!--*ngIf=\"flag\">{{alert}}</span>-->\n    </div>\n    <!--<div ng-model=\"model.widget.text\"-->\n    <!--text-angular-->\n    <!--ta-toolbar=\"[['h1','h2','h3'],['bold','italics','underline','strikeThrough'],-->\n    <!--['ul','ol'],['justifyLeft','justifyCenter','justifyRight','justifyFull'],-->\n    <!--['indent','outdent'],['html']]\">-->\n    <!--</div>-->\n\n    <!-- use with ngModel -->\n    <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n    <!--[options]=\"editorOptions\"-->\n    <!--(blur)=\"onEditorBlured($event)\"-->\n    <!--(focus)=\"onEditorFocused($event)\"-->\n    <!--(ready)=\"onEditorCreated($event)\"-->\n    <!--(change)=\"onContentChanged($event)\"-->\n  </form>\n  <p></p>\n  <button *ngIf=\"editFlag\" class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.newWidgetText = '';
        this.editFlag = false;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
        });
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        }
        this.editFlag = this.widgetService.editFlag;
    };
    WidgetHtmlComponent.prototype.onEditWidget = function () {
        var _this = this;
        if (this.widgetId === 'undefined') {
            this.newWidget = { name: this.newWidgetName, text: this.newWidgetText, pageId: this.pageId, widgetType: 'HTML' };
            this.widgetService.createWidget(this.pageId, this.newWidget)
                .subscribe(function (widgets) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
        else {
            if (this.newWidgetText === '') {
                this.newWidgetText = this.widget.text;
            }
            if (this.newWidgetName === '') {
                this.newWidgetName = this.widget.name;
            }
            // console.log(this.newWidgetText);
            this.newWidget = { name: this.newWidgetName, text: this.newWidgetText, pageId: this.pageId, widgetType: 'HTML' };
            this.widgetService.updateWidget(this.widgetId, this.newWidget)
                .subscribe(function (widget) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
    };
    WidgetHtmlComponent.prototype.onDelete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2UvZmxpY2tyLWltYWdlLXNlYXJjaC9mbGlja3ItaW1hZ2Utc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widget Edit\n      </a>\n    </div>\n    <a (click)=\"onEditWidget()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class = \"container\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n            <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n                <i class=\"fas fa-search\"></i>\n            </a>\n        </span>\n  </div>\n\n  <div class=\"row\">\n    <!--<div *ngFor = \"let pic of photos['photo']\"-->\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <!--[src] = \"https://farm\" + photo.farm + \".staticflickr.com/\" + photo.server + \"/\" + photo.id + \"_\" + photo.secret + \"_\" + \"s.jpg\"/>-->\n      <p></p>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: FlickrImageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrImageSearchComponent", function() { return FlickrImageSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");





var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, route) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
            console.log(_this.photos);
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        // console.log("flickr: " + url);
        var widget = {
            pageId: this.pageId,
            url: url
        };
        this.widgetService
            .updateWidget(this.widgetId, widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget/' + _this.widgetId]);
        });
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_flickr_service_client__WEBPACK_IMPORTED_MODULE_4__["FlickrService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widget Edit\n      </a>\n    </div>\n    <a (click)=\"onEditWidget()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"{{ widget.name }}\"\n        [(ngModel)]=\"newWidgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"{{ widget.text }}\"\n        [(ngModel)]=\"newWidgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input\n        type=\"url\"\n        class=\"form-control\"\n        name=\"widgetURL\"\n        placeholder=\"{{ widget.url }}\"\n        [(ngModel)]=\"newWidgetURL\">\n    </div>\n    <div class=\"form-group\">\n      <label>Width</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetWidth\"\n        placeholder=\"{{ widget.width }}\"\n        [(ngModel)]=\"newWidgetWidth\">\n    </div>\n  </form>\n  <form ngNoForm action=\"{{ baseUrl }}/api/upload\" method=\"POST\" enctype=\"multipart/form-data\">\n    <div class=\"form-group\">\n      <label>Upload</label>\n      <div class=\"file-upload\">\n        <input type=\"file\"\n               id=\"avatar\" name=\"avatar\"\n               accept=\"image/png, image/jpeg\">\n      </div>\n    </div>\n    <input name=\"widgetId\" value=\"{{ widgetId }}\" style=\"display: none;\">\n    <input name=\"websiteId\" value=\"{{ websiteId }}\" style=\"display: none;\">\n    <input name=\"pageId\" value=\"{{ pageId }}\" style=\"display: none;\">\n    <input name=\"userId\" value=\"{{ userId }}\" style=\"display: none;\">\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Upload Image</button>\n    <br>\n    <a class=\"btn btn-primary btn-block \"\n       [routerLink]=\"['/user/'+userId+'/website/'+websiteId+'/page/'+pageId+'/widget/'+widgetId+'/flickr']\" >Choose From Flickr</a>\n    <button *ngIf=\"editFlag\" class=\"btn btn-danger btn-block\" (click)=\"onDelete()\" type=\"button\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.newWidgetText = '';
        this.newWidgetWidth = '';
        this.newWidgetURL = '';
        this.editFlag = false;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
        });
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        }
        this.editFlag = this.widgetService.editFlag;
        this.baseUrl = this.widgetService.baseUrl;
    };
    WidgetImageComponent.prototype.onEditWidget = function () {
        var _this = this;
        if (this.widgetId === 'undefined') {
            this.newWidget = { name: this.newWidgetName, width: this.newWidgetWidth, text: this.newWidgetText, url: this.newWidgetURL, pageId: this.pageId, widgetType: 'IMAGE' };
            this.widgetService.createWidget(this.pageId, this.newWidget)
                .subscribe(function (widgets) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
        else {
            if (this.newWidgetText === '') {
                this.newWidgetText = this.widget.text;
            }
            if (this.newWidgetWidth === '') {
                this.newWidgetWidth = this.widget.width;
            }
            if (this.newWidgetURL === '') {
                this.newWidgetURL = this.widget.url;
            }
            this.newWidget = { name: this.newWidgetName, width: this.newWidgetWidth, text: this.newWidgetText, url: this.newWidgetURL, pageId: this.pageId, widgetType: 'IMAGE' };
            this.widgetService.updateWidget(this.widgetId, this.newWidget)
                .subscribe(function (widget) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
    };
    WidgetImageComponent.prototype.onDelete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtdGV4dC93aWRnZXQtdGV4dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widget Edit\n      </a>\n    </div>\n    <a (click)=\"onEditWidget()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  Text\n  <input [(ngModel)]=\"newWidgetText\" class=\"form-control\" placeholder=\"{{ widget.text }}\"/>\n  Rows\n  <input [(ngModel)]=\"newWidgetRows\" class=\"form-control\" type=\"number\" placeholder=\"{{ widget.rows }}\"/>\n\n  <label for=\"Name\">Name</label>\n  <div>\n    <input [(ngModel)]=\"newWidgetName\"\n           type=\"text\"\n           class=\"form-control\"\n           id=\"Name\"\n           name=\"name\"\n           placeholder=\"Name\">\n  </div>\n  Placeholder\n  <input [(ngModel)]=\"newWidgetPlaceholder\" class=\"form-control\" placeholder=\"{{ widget.placeholder }}\" required/>\n  <p></p>\n  <div class=\"input-group\">\n    <input type=\"text\"\n           readonly\n           value=\"Formatted\"\n           class=\"form-control\"/>\n    <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"newWidgetFormatted\"\n               type=\"checkbox\"/>\n    </span>\n  </div>\n  <p></p>\n  <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.newWidgetText = '';
        this.newWidgetRows = null;
        this.newWidgetPlaceholder = '';
        this.newWidgetFormatted = null;
        this.editFlag = false;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
        });
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        }
        this.editFlag = this.widgetService.editFlag;
    };
    WidgetTextComponent.prototype.onEditWidget = function () {
        var _this = this;
        if (this.widgetId === 'undefined') {
            this.widget.widgetType = 'TEXT INPUT';
            this.widgetService.createWidget(this.pageId, this.widget)
                .subscribe(function (widgets) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
        else {
            if (this.newWidgetText === '') {
                this.newWidgetText = this.widget.text;
            }
            if (this.newWidgetName === '') {
                this.newWidgetName = this.widget.name;
            }
            if (this.newWidgetRows === null) {
                this.newWidgetRows = this.widget.rows;
            }
            if (this.newWidgetPlaceholder === '') {
                this.newWidgetPlaceholder = this.widget.placeholder;
            }
            if (this.newWidgetFormatted === null) {
                this.newWidgetFormatted = this.widget.formatted;
            }
            this.newWidget = { name: this.newWidgetName, text: this.newWidgetText, pageId: this.pageId, rows: this.newWidgetRows,
                placeholder: this.newWidgetPlaceholder, formatted: this.newWidgetFormatted, widgetType: 'TEXT INPUT' };
            console.log(this.newWidget);
            this.widgetService.updateWidget(this.widgetId, this.newWidget)
                .subscribe(function (widget) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
    };
    WidgetTextComponent.prototype.onDelete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widget Edit\n      </a>\n    </div>\n    <a (click)=\"onEditWidget()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"{{ widget.name }}\"\n        [(ngModel)]=\"newWidgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"{{ widget.text }}\"\n        [(ngModel)]=\"newWidgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input\n        type=\"url\"\n        class=\"form-control\"\n        name=\"widgetURL\"\n        placeholder=\"{{ widget.url }}\"\n        [(ngModel)]=\"newWidgetURL\">\n    </div>\n    <div class=\"form-group\">\n      <label>Width</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetWidth\"\n        placeholder=\"{{ widget.width }}\"\n        [(ngModel)]=\"newWidgetWidth\">\n    </div>\n    <button *ngIf=\"editFlag\" class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.newWidgetText = '';
        this.newWidgetWidth = '';
        this.newWidgetURL = '';
        this.editFlag = false;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
        });
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        }
        this.editFlag = this.widgetService.editFlag;
    };
    WidgetYoutubeComponent.prototype.onEditWidget = function () {
        var _this = this;
        if (this.widgetId === 'undefined') {
            this.newWidget = { name: this.newWidgetName, width: this.newWidgetWidth, text: this.newWidgetText, url: this.newWidgetURL, pageId: this.pageId, widgetType: 'YOUTUBE' };
            this.widgetService.createWidget(this.pageId, this.newWidget)
                .subscribe(function (widgets) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
        else {
            if (this.newWidgetText === '') {
                this.newWidgetText = this.widget.text;
            }
            if (this.newWidgetWidth === '') {
                this.newWidgetWidth = this.widget.width;
            }
            if (this.newWidgetURL === '') {
                this.newWidgetURL = this.widget.url;
            }
            this.newWidget = { name: this.newWidgetName, width: this.newWidgetWidth, text: this.newWidgetText, url: this.newWidgetURL, pageId: this.pageId, widgetType: 'YOUTUBE' };
            this.widgetService.updateWidget(this.widgetId, this.newWidget)
                .subscribe(function (widget) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
    };
    WidgetYoutubeComponent.prototype.onDelete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widgets\n      </a>\n    </div>\n    <a routerLink=\"new\" class=\"text-black\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"widget-list\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n    <div *ngFor=\"let widget of widgets\" [ngSwitch]=\"widget.widgetType\">\n      <a routerLink=\"./\" class=\"float-right text-black\">\n        <i class=\"fas fa-bars\"></i>\n      </a>\n      <a routerLink=\"{{ widget._id }}\" class=\"float-right text-blue\">\n        <i class=\"fas fa-cog\"></i>\n      </a>\n      <div *ngSwitchCase=\"'HEADING'\" [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"1\">{{ widget.text }}</h1>\n        <h2 *ngSwitchCase=\"2\">{{ widget.text }}</h2>\n        <h3 *ngSwitchCase=\"3\">{{ widget.text }}</h3>\n        <h4 *ngSwitchCase=\"4\">{{ widget.text }}</h4>\n        <h5 *ngSwitchCase=\"5\">{{ widget.text }}</h5>\n        <h3 *ngSwitchDefault>{{ widget.text }}</h3>\n      </div>\n      <img *ngSwitchCase=\"'IMAGE'\" src=\"{{ widget.url }}\" alt=\"\" width=\"400\">\n      <iframe *ngSwitchCase=\"'YOUTUBE'\" width=\"400\" [src]=\"widget.url | safe\"></iframe>\n      <div *ngSwitchCase=\"'HTML'\" [innerHTML]=\"widget.text\"></div>\n      <div *ngSwitchCase=\"'TEXT INPUT'\">\n        <div *ngIf=\"widget.formatted\">\n          <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n        </div>\n\n        <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n               placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n        <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                  rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                  class=\"form-control\">{{widget.text}}</textarea>\n      </div>\n      <p *ngSwitchDefault><br><br></p>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"\">\n      <a routerLink=\"./\" class=\"text-black\">\n        <i class=\"fas fa-play\"></i>\n      </a>\n      &nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-black\">\n        <i class=\"fas fa-eye\"></i>\n      </a>\n    </div>\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, route) {
        this.widgetService = widgetService;
        this.route = route;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        this.widgetService.reorderWidgets(indexes.start, indexes.end, this.pageId)
            .subscribe();
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // baseUrl: 'http://localhost:3200'
    baseUrl: 'https://webdev-cs5610-zhenyuan.herokuapp.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stevenxi/Documents/CS5610/my-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map