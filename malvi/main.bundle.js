webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <angular-file-uploader\n      [config]=\"afuConfig\">\n</angular-file-uploader> -->\n\n<div  style=\"position: fixed;top:0px;left:0px;width:100%;z-index: 1000;background-color: white;\">\n      <app-header></app-header>\n</div>\n\n<div  style=\"position: absolute;top:130px;left:0px;width:100%;\">\n<router-outlet></router-outlet>\n</div>\n\n<!-- <input type=\"file\" name=\"file\" id=\"file\" (change)=\"onFileChanged($event)\" />\n<input type=\"submit\" (click)=\"uploadFile();\"> -->\n<!-- \n<form action=\"fileupload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input type=\"file\" name=\"filetoupload\"><br>\n      <input type=\"submit\">\n</form> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(newsService) {
        this.newsService = newsService;
        this.title = 'app';
        this.afuConfig = {
            uploadAPI: {
                url: 'http://localhost:3000/news/upload'
            }
        };
        this.files = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.uploadFile();
    };
    AppComponent.prototype.onFileChanged = function (event) {
        this.files = event.target.files;
    };
    AppComponent.prototype.uploadFile = function () {
        // const formData = new FormData();
        // for (const file of this.files) {
        //     formData.append(name, file, file.name);
        // }
        // console.log(this.files);
        // console.log(formData);
        this.newsService.uploadFiles().subscribe(function (res) {
            console.log(res);
        }, function (error) { console.log(error); }, function () { console.log('updated Poll.'); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_route__ = __webpack_require__("../../../../../src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_file_uploader__ = __webpack_require__("../../../../angular-file-uploader/fesm5/angular-file-uploader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_show_main_news_show_main_component__ = __webpack_require__("../../../../../src/app/news-show-main/news-show-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_show_detail_news_show_detail_component__ = __webpack_require__("../../../../../src/app/news-show-detail/news-show-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_edit_news_edit_component__ = __webpack_require__("../../../../../src/app/news-edit/news-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__news_search_news_search_component__ = __webpack_require__("../../../../../src/app/news-search/news-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__poll_create_poll_create_component__ = __webpack_require__("../../../../../src/app/poll-create/poll-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__poll_show_poll_show_component__ = __webpack_require__("../../../../../src/app/poll-show/poll-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__poll_service__ = __webpack_require__("../../../../../src/app/poll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__newsadvt_service__ = __webpack_require__("../../../../../src/app/newsadvt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pagination_pipe__ = __webpack_require__("../../../../../src/app/pagination.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_pipe__ = __webpack_require__("../../../../../src/app/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sort_pipe__ = __webpack_require__("../../../../../src/app/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__news_category_news_category_component__ = __webpack_require__("../../../../../src/app/news-category/news-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__news_admin_news_admin_component__ = __webpack_require__("../../../../../src/app/news-admin/news-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__news_advt_news_advt_component__ = __webpack_require__("../../../../../src/app/news-advt/news-advt.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__news_show_main_news_show_main_component__["a" /* NewsShowMainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__news_show_detail_news_show_detail_component__["a" /* NewsShowDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__news_edit_news_edit_component__["a" /* NewsEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__news_search_news_search_component__["a" /* NewsSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__poll_create_poll_create_component__["a" /* PollCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_13__poll_show_poll_show_component__["a" /* PollShowComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pagination_pipe__["a" /* PaginationPipe */],
                __WEBPACK_IMPORTED_MODULE_19__search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_20__sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_21__news_category_news_category_component__["a" /* NewsCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_22__news_admin_news_admin_component__["a" /* NewsAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_23__news_advt_news_advt_component__["a" /* NewsAdvtComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4_angular_file_uploader__["a" /* AngularFileUploaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__app_route__["a" /* appRouterModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_15__poll_service__["a" /* PollService */], __WEBPACK_IMPORTED_MODULE_16__newsadvt_service__["a" /* NewsadvtService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_show_main_news_show_main_component__ = __webpack_require__("../../../../../src/app/news-show-main/news-show-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_show_detail_news_show_detail_component__ = __webpack_require__("../../../../../src/app/news-show-detail/news-show-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_search_news_search_component__ = __webpack_require__("../../../../../src/app/news-search/news-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_category_news_category_component__ = __webpack_require__("../../../../../src/app/news-category/news-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poll_create_poll_create_component__ = __webpack_require__("../../../../../src/app/poll-create/poll-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__poll_show_poll_show_component__ = __webpack_require__("../../../../../src/app/poll-show/poll-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_admin_news_admin_component__ = __webpack_require__("../../../../../src/app/news-admin/news-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_advt_news_advt_component__ = __webpack_require__("../../../../../src/app/news-advt/news-advt.component.ts");









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__news_show_main_news_show_main_component__["a" /* NewsShowMainComponent */] },
    { path: 'news-detail/:id', component: __WEBPACK_IMPORTED_MODULE_2__news_show_detail_news_show_detail_component__["a" /* NewsShowDetailComponent */] },
    { path: 'news-category/:category', component: __WEBPACK_IMPORTED_MODULE_4__news_category_news_category_component__["a" /* NewsCategoryComponent */] },
    { path: 'news-create', component: __WEBPACK_IMPORTED_MODULE_3__news_search_news_search_component__["a" /* NewsSearchComponent */] },
    { path: 'poll-create', component: __WEBPACK_IMPORTED_MODULE_5__poll_create_poll_create_component__["a" /* PollCreateComponent */] },
    { path: 'poll-show', component: __WEBPACK_IMPORTED_MODULE_6__poll_show_poll_show_component__["a" /* PollShowComponent */] },
    { path: 'advt-create', component: __WEBPACK_IMPORTED_MODULE_8__news_advt_news_advt_component__["a" /* NewsAdvtComponent */] },
    { path: 'news-admin', component: __WEBPACK_IMPORTED_MODULE_7__news_admin_news_admin_component__["a" /* NewsAdminComponent */] },
];
var appRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes, { enableTracing: false });


/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#menuIcon{\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n   \r\n    #menuIcon{\r\n        display: block;\r\n    }\r\n    #menu  {display: none;}\r\n    \r\n  }\r\n\r\n\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"row\">\n<div class=\"col-12\" style=\"box-shadow: 1px 1px 5px #555;width: 100%;height: 70px;\">\n<img src=\"././assets/logonews.png\" style=\"width:120px;\">\n<i class=\"fa fa-bars\" style=\"font-size:30px;float: right;margin-top:20px;\" id=\"menuIcon\" (click)=\"toogleMenu();\"></i>\n</div>\n\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\" style=\"width:100%;\" id=\"menu\"> \n    <!-- Links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink= \"/\"><i class=\"fa fa-home\"></i> होम </a>\n     </li>\n      <li class=\"nav-item\" *ngFor=\"let category of newsCategories\">\n        <a class=\"nav-link\" routerLink= \"/news-category/{{category.name}}\">{{category.name}}</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink= \"/poll-show\"> पोल </a>\n     </li>\n      \n    </ul>\n  </nav>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(newsService) {
        this.newsService = newsService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getNewsCategory();
    };
    HeaderComponent.prototype.getNewsCategory = function () {
        var that = this;
        this.newsService.getNewsCategory().subscribe(function (res) { that.newsCategories = res.data; }, function (error) { console.log(error); }, function () { console.log('Its over News.'); });
    };
    HeaderComponent.prototype.toogleMenu = function () {
        console.log(document.getElementById('menu').style.display);
        if (document.getElementById('menu').style.display === 'block') {
            document.getElementById('menu').style.display = 'none';
        }
        else {
            document.getElementById('menu').style.display = 'block';
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news-admin/news-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news-admin/news-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark col-12\" style=\"width:100%;\" id=\"menu\"> \n  <!-- Links -->\n  <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink= \"/news-create\"> Create News </a>\n   </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink= \"/poll-create\"> Create Poll </a>\n   </li>\n   <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink= \"/advt-create\"> Create Advt. </a>\n</li>\n  </ul>\n</nav>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/news-admin/news-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsAdminComponent = /** @class */ (function () {
    function NewsAdminComponent() {
    }
    NewsAdminComponent.prototype.ngOnInit = function () {
    };
    NewsAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-admin',
            template: __webpack_require__("../../../../../src/app/news-admin/news-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news-admin/news-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsAdminComponent);
    return NewsAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news-advt/news-advt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news-advt/news-advt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:10px;\">\n  <div class=\"row\">\n  <div class=\"col-12\"\n         style=\"border:1px solid #DADADA; border-radius:5px;\" [hidden]=\"addflag\" >\n         <div class=\"col-6\">\n             <i class=\"fa fa-file-text-o\" style=\"font-size:25px;color:#2979FF;cursor:pointer;margin:15px;\" \n             (click)=\"createAdvt();\">Create Advt</i></div>\n             <div class=\"col-6 form-group\">\n                <input type=\"text\" class=\"form-control col-5\" id=\"search\" [(ngModel)]=\"search\" name=\"search\" placeholder=\"Type here to search by name\">\n                \n             </div>\n    \n             <div class=\"col-12\">\n                <ul class=\"pagination\">\n      <li class=\"page-item\" [class.disabled]=\"pageno===1\"><a class=\"page-link\" (click)=\"first()\">First</a></li>\n      <li class=\"page-item\" [class.disabled]=\"pageno===1\"><a class=\"page-link\" (click)=\"previous()\">Previous</a></li>\n      <li class=\"page-item\" [class.disabled]=\"1===1\"><a class=\"page-link\" >{{pageno}}</a></li>\n      <li class=\"page-item\" [class.disabled]=\"pageno===totalpages\"><a class=\"page-link\" (click)=\"next()\">Next</a></li>\n      <li class=\"page-item\" [class.disabled]=\"pageno===totalpages\"><a class=\"page-link\" (click)=\"last()\">Last</a></li>\n    </ul>\n            </div>\n         <table class=\"table table-dark table-striped table-hover\" *ngIf=\"AdvtDetails\">\n         <tr>\n    <th>Id</th>\n    <th>Advt Header</th>\n    <th></th>\n    <th></th>\n         </tr> \n         <!--  -->\n         <tr *ngFor=\"let AdvtDetail of AdvtDetails   | search : search | pagination : strat:  end \">\n    <td>{{AdvtDetail._id}}</td>\n    <td>{{AdvtDetail.header}}</td>\n    <td><div style=\"cursor:pointer;\"  (click)=\"deleteAdvt(AdvtDetail._id);\">\n        <i class=\"fa fa-trash-o\" style=\"font-size:25px;\" data-toggle=\"tooltip\" title=\"Click here to delete\"></i></div>\n    </td>\n        <td>\n    <div style=\"cursor:pointer;\"  (click)=\"getAdvtDetailsById(AdvtDetail._id);\">\n        <i class=\"fa fa-edit\" style=\"font-size:25px\" data-toggle=\"tooltip\" title=\"Click here to update\"></i></div></td>\n         </tr>\n       </table>\n    \n      </div>\n        <div class=\"mx-auto col-10 bg-light\" style=\"border:1px solid #DADADA; border-radius:5px;\"\n         [hidden]=\"!addflag\">\n             <h3 class=\"fa fa-file-text-o\" style=\"font-size:25px;color:#007bff;margin:15px;\" >Add Advt</h3>\n            \n      <div>\n        <div class=\"container-fluid\" style=\"margin-top:10px;\">\n          <h3>Advt Form</h3><br>\n          <div class=\"alert alert-success alert-dismissible col-10\"\n          [hidden]=\"!successFlag\" id=\"sucssess\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n          <strong>Success!</strong> {{message}}\n          </div>\n          <div style=\"margin-bottom:10px;float:right;\">\n    \n              <button class=\"btn btn-primary\" (click)=\"addAdvt(Advtform)\" [hidden]=\"updateflag\">Submit</button>\n              <button class=\"btn btn-primary\" (click)=\"updateAdvt(Advtform)\" [hidden]=\"!updateflag\">Update</button>\n            <button class=\"btn btn-primary\" (click)=\"resetAdvt()\">Reset</button>\n              <button class=\"btn btn-primary\" (click)=\"closeAdvt()\">Close</button>\n              </div>\n      <form #Advtform=\"ngForm\" novalidate (ngSubmit)=\"addAdvt(Advtform)\">\n        <div class=\"form-group\">\n          <label >Header:</label>\n          <input type=\"text\" placeholder=\"Header\" [(ngModel)]=\"Advt.header\" name=\"header\"\n          required  class=\"form-control col-10\" #tHeader=\"ngModel\">\n          <div *ngIf=\"(tHeader.touched && !tHeader.valid) || Advtform.submitted\"\n          class=\"alert alert-danger form-control col-4\">Header can't be blank</div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label >Description:</label>\n          <input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"Advt.description\" name=\"description\"\n            class=\"form-control col-10\" #tDescription=\"ngModel\">\n          \n        </div>\n  \n        <div class=\"form-group\">\n          <label >ImageUrl:</label>\n          <input type=\"text\" placeholder=\"ImageUrl\" [(ngModel)]=\"Advt.imageUrl\" name=\"imageUrl\"\n            class=\"form-control col-10\" #tImageUrl=\"ngModel\">\n       \n        </div>\n      \n      \n      \n      </form>\n      \n      \n      </div>\n      </div>\n     \n        </div>\n    \n    <div style=\"position:fixed;top:48%;left:48%;opacity:0.5;\" [hidden]=\"!loader\">\n    <i class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;color:#0069d9;\"></i>\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/news-advt/news-advt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsAdvtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__newsadvt_service__ = __webpack_require__("../../../../../src/app/newsadvt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsAdvtComponent = /** @class */ (function () {
    function NewsAdvtComponent(newsadvtService) {
        this.newsadvtService = newsadvtService;
        this.pageno = 1;
        this.rowsperpage = 5;
        this.updateflag = false;
        this.addflag = false;
        this.loader = false;
        this.successFlag = false;
        this.setIndex(1);
    }
    // set  pageno(val: number) {
    // if(val! =  = this.pageno) {
    // this._pageno = val; }
    // console.log(this._pageno) }
    NewsAdvtComponent.prototype.first = function () { this.setIndex(this.pageno = 1); };
    NewsAdvtComponent.prototype.previous = function () { this.setIndex(this.pageno = this.pageno - 1); };
    NewsAdvtComponent.prototype.next = function () { this.setIndex(this.pageno = this.pageno + 1); };
    NewsAdvtComponent.prototype.last = function () { this.setIndex(this.pageno = this.totalpages); };
    NewsAdvtComponent.prototype.setIndex = function (page) {
        this.strat = ((page - 1) * this.rowsperpage) + 1;
        this.end = page * this.rowsperpage;
    };
    NewsAdvtComponent.prototype.createAdvt = function () {
        this.addflag = true;
        this.updateflag = false;
        this.successFlag = false;
        this.resetAdvt();
    };
    NewsAdvtComponent.prototype.closeAdvt = function () {
        this.resetAdvt();
        this.addflag = false;
        this.updateflag = false;
        this.getAdvtDetails();
    };
    NewsAdvtComponent.prototype.ngOnInit = function () {
        this.AdvtDetails = [];
        this.getAdvtDetails();
        this.Advt = { 'header': '', 'description': '', 'imageUrl': '' };
    };
    NewsAdvtComponent.prototype.getAdvtDetails = function () {
        var that = this;
        this.loader = true;
        this.newsadvtService.getAdvt().subscribe(function (res) {
            that.AdvtDetails = res.data;
            console.log(that.AdvtDetails);
            that.totalpages = Math.ceil(that.totalrows / that.rowsperpage);
            that.loader = false;
            // this.addflag = false;
            console.log(that.totalpages);
        }, function (error) { console.log(error); }, function () { console.log('Its over Advt.'); });
    };
    NewsAdvtComponent.prototype.getAdvtDetailsById = function (id) {
        this.addflag = true;
        this.updateflag = true;
        this.loader = true;
        this.successFlag = false;
        var that = this;
        this.newsadvtService.getAdvtById(id).subscribe(function (res) {
            that.id = res.data._id;
            that.Advt = res.data;
            that.loader = false;
            console.log(res);
        }, function (error) { console.log(error); }, function () { console.log('Its over Advt.'); });
    };
    NewsAdvtComponent.prototype.addAdvt = function (Advtform) {
        var _this = this;
        if (Advtform.valid) {
            var AdvtBody = Advtform.value;
            AdvtBody.option1Count = 0;
            AdvtBody.option2Count = 0;
            AdvtBody.option3Count = 0;
            AdvtBody.option4Count = 0;
            this.newsadvtService.addAdvt(AdvtBody).subscribe(function (res) {
                console.log(res);
                _this.message = 'Advt created successfully.';
                // this.getAdvtDetails();
                _this.successFlag = true;
                // this.addflag = false;
            }, function (error) { console.log(error); }, function () { console.log('Its over add Advt.'); });
        }
    };
    NewsAdvtComponent.prototype.deleteAdvt = function (id) {
        var _this = this;
        var that = this;
        var r = confirm('Do you want to delete the Advt?');
        if (r === true) {
            this.newsadvtService.deleteAdvt(id).subscribe(function (res) {
                console.log(res);
                _this.message = 'Advt deleted successfully.';
                that.getAdvtDetails();
                // $("#myModal").modal('show');
            }, function (error) { console.log(error); }, function () { console.log('Advt deleted.'); });
        }
    };
    NewsAdvtComponent.prototype.updateAdvt = function (Advtform) {
        var _this = this;
        this.loader = true;
        console.log(this.id);
        if (Advtform.valid) {
            var AdvtBody = Advtform.value;
            this.newsadvtService.updateAdvt(AdvtBody, this.id).subscribe(function (res) {
                console.log(res);
                // this.resetAdvt();
                // this.getAdvtDetails();
                _this.updateflag = false;
                _this.successFlag = true;
                // this.addflag = false;
                _this.loader = false;
                document.getElementById('messagebody').innerHTML = 'Advt updated successfully.';
                _this.message = 'Advt updated successfully.';
            }, function (error) { console.log(error); }, function () { console.log('updated Advt.'); });
        }
    };
    NewsAdvtComponent.prototype.resetAdvt = function () {
        this.Advt = { 'header': '', 'description': '', 'imageUrl': '' };
    };
    NewsAdvtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-advt',
            template: __webpack_require__("../../../../../src/app/news-advt/news-advt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news-advt/news-advt.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__newsadvt_service__["a" /* NewsadvtService */]])
    ], NewsAdvtComponent);
    return NewsAdvtComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news-category/news-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news-category/news-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\" style=\"margin-top:20px;margin-bottom: 20px;\">\n      <div class=\"col-12 col-lg-9 col-md-9\">\n        <div class=\"row\" >\n          <div class=\"col-12 col-lg-6 col-md-6\" *ngFor=\"let news of newsData   | slice:0:10; let i = index;\" \n          style=\"margin-top: 15px;\" routerLink= \"/news-detail/{{news._id}}\">\n              <img src={{news.imageUrl}}  class=\"col-12\" \n              style=\"padding:5px;  border-radius: 15px;max-height:250px; \">\n              <h4 class=\"col-12\">{{news.headline}}</h4>\n         </div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-lg-3 col-md-3\">\n        AD\n      </div>\n     \n   \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/news-category/news-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsCategoryComponent = /** @class */ (function () {
    function NewsCategoryComponent(newsService, route) {
        this.newsService = newsService;
        this.route = route;
    }
    NewsCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.category = params['category']; });
        this.getNewsCategory(this.category);
    };
    NewsCategoryComponent.prototype.getNewsCategory = function (category) {
        var that = this;
        this.newsService.getNewsByCategory(category).subscribe(function (res) {
            that.newsData = res.data;
            console.log(that.newsData);
        }, function (error) { console.log(error); }, function () { console.log('Its over News.'); });
    };
    NewsCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-category',
            template: __webpack_require__("../../../../../src/app/news-category/news-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news-category/news-category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NewsCategoryComponent);
    return NewsCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news-edit/news-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news-edit/news-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"container-fluid\" style=\"margin-top:10px;\">\n\t\t<h3>News Form</h3><br>\n<form #newsform=\"ngForm\" novalidate (ngSubmit)=\"addNews(newsform)\">\n  <div class=\"form-group\">\n    <label >Headline:</label>\n    <input type=\"text\" placeholder=\"Headline\" [(ngModel)]=\"news.headline\" name=\"headline\"\n    required  class=\"form-control col-10\" #tHeadline=\"ngModel\">\n    <div *ngIf=\"(tHeadline.touched && !tHeadline.valid) || newsform.submitted\"\n    class=\"alert alert-danger form-control col-4\">Headline can't be blank</div>\n  </div>\n\n  <div class=\"form-group\">\n    <label >Description:</label>\n    <textarea type=\"text\" placeholder=\"Description\" [(ngModel)]=\"news.description\" name=\"description\"\n    required  class=\"form-control col-12 col-lg-10\" #tDescription=\"ngModel\"></textarea>\n   <div *ngIf=\"(tDescription.touched && !tDescription.valid) || newsform.submitted\"\n    class=\"alert alert-danger form-control col-4\">Description can't be blank</div>\n  </div>\n\n  <div class=\"form-group\">\n    <label >Category:</label>\n    <input type=\"text\" placeholder=\"Category\" [(ngModel)]=\"news.category\" name=\"Category\"\n    required class=\"form-control col-12 col-lg-10\" #tCategory=\"ngModel\" />\n      <div *ngIf=\"(tCategory.touched && !tCategory.valid) || newsform.submitted\"\n    class=\"alert alert-danger form-control col-4\">Category can't be blank</div>\n\n  </div>\n\n  <div class=\"form-group\">\n    <label >ImageUrl:</label>\n    <input type=\"text\" placeholder=\"ImageUrl\" [(ngModel)]=\"news.imageUrl\" name=\"imageUrl\"\n      class=\"form-control col-12 col-lg-10\" #imageUrl=\"ngModel\" />\n  </div>\n\n  <div class=\"form-group\">\n    <label >VideoUrl:</label>\n    <input type=\"text\" placeholder=\"VideoUrl\" [(ngModel)]=\"news.videoUrl\" name=\"VideoUrl\"\n      class=\"form-control col-12 col-lg-10\" #VideoUrl=\"ngModel\" />\n  </div>\n\n\n<button type=\"submit\" class=\"btn btn-primary col-12 col-lg-10\" >Save</button>\n</form>\n\n\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/news-edit/news-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsEditComponent = /** @class */ (function () {
    function NewsEditComponent(newsService) {
        this.newsService = newsService;
    }
    NewsEditComponent.prototype.ngOnInit = function () {
        this.news = { 'headline': '', 'description': '', 'imageUrl': '', 'videoUrl': '', 'category': '' };
    };
    NewsEditComponent.prototype.save = function (newsform) {
        if (newsform.valid) {
            console.log(newsform.value);
            console.log(newsform);
            console.log('Saved');
        }
    };
    NewsEditComponent.prototype.addNews = function (newsform) {
        var _this = this;
        if (newsform.valid) {
            var newsBody = newsform.value;
            this.newsService.addNews(newsBody).subscribe(function (res) {
                console.log(res);
                _this.message = 'News created successfully.';
            }, function (error) { console.log(error); }, function () { console.log('Its over add news.'); });
        }
    };
    NewsEditComponent.prototype.deleteNews = function (id) {
        var _this = this;
        var r = confirm('Do you want to delete the news?');
        if (r === true) {
            this.newsService.deleteNews(id).subscribe(function (res) {
                console.log(res);
                _this.message = 'News updated successfully.';
                // $("#myModal").modal('show');
            }, function (error) { console.log(error); }, function () { console.log('News deleted.'); });
        }
    };
    NewsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-edit',
            template: __webpack_require__("../../../../../src/app/news-edit/news-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news-edit/news-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]])
    ], NewsEditComponent);
    return NewsEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news-search/news-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news-search/news-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:10px;\">\n  \n<div class=\"row\">\n\t\n\t<div class=\"col-12\"\n     style=\"border:1px solid #DADADA; border-radius:5px;\" [hidden]=\"addflag\" >\n     <div class=\"col-6\">\n         <i class=\"fa fa-newspaper-o\" style=\"font-size:25px;color:#2979FF;cursor:pointer;margin:15px;\" \n         (click)=\"createNews();\">Create News</i></div>\n         <div class=\"col-6 form-group\">\n            <input type=\"text\" class=\"form-control col-5\" id=\"search\" [(ngModel)]=\"search\" name=\"search\" placeholder=\"Type here to search by name\">\n            \n         </div>\n\n         <div class=\"col-12\">\n           <!--  <app-pager [pageno]=\"pageno\" [totalpages]=\"totalpages\"\n            (changepage)=\"pageno =$event\"></app-pager> -->\n            <ul class=\"pagination\">\n  <li class=\"page-item\" [class.disabled]=\"pageno===1\"><a class=\"page-link\" (click)=\"first()\">First</a></li>\n  <li class=\"page-item\" [class.disabled]=\"pageno===1\"><a class=\"page-link\" (click)=\"previous()\">Previous</a></li>\n  <li class=\"page-item\" [class.disabled]=\"1===1\"><a class=\"page-link\" >{{pageno}}</a></li>\n  <li class=\"page-item\" [class.disabled]=\"pageno===totalpages\"><a class=\"page-link\" (click)=\"next()\">Next</a></li>\n  <li class=\"page-item\" [class.disabled]=\"pageno===totalpages\"><a class=\"page-link\" (click)=\"last()\">Last</a></li>\n</ul>\n        </div>\n\t\t <table class=\"table table-dark table-striped table-hover\" *ngIf=\"newsDetails\">\n   \t<tr>\n<th>Id</th>\n<th>Category</th>\n<th>Headline</th>\n<th></th>\n<th></th>\n     </tr> \n     <!--  -->\n   \t<tr *ngFor=\"let newsDetail of newsDetails  | search : search | pagination : strat:  end \">\n<td>{{newsDetail._id}}</td>\n<td>{{newsDetail.category}}</td>\n<td>{{newsDetail.headline}}</td>\n<td><div style=\"cursor:pointer;\"  (click)=\"deleteNews(newsDetail._id);\">\n    <i class=\"fa fa-trash-o\" style=\"font-size:25px;\" data-toggle=\"tooltip\" title=\"Click here to delete\"></i></div>\n</td>\n    <td>\n<div style=\"cursor:pointer;\"  (click)=\"getNewsDetailsById(newsDetail._id);\">\n    <i class=\"fa fa-edit\" style=\"font-size:25px\" data-toggle=\"tooltip\" title=\"Click here to update\"></i></div></td>\n   \t</tr>\n   </table>\n\n\t</div>\n    <div class=\"mx-auto col-10 bg-light\" style=\"border:1px solid #DADADA; border-radius:5px;\"\n     [hidden]=\"!addflag\">\n     <!-- <i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> -->\n         <h3 class=\"fa fa-newspaper-o\" style=\"font-size:25px;color:#007bff;margin:15px;\" >Add News</h3>\n        \n  <div>\n    <div class=\"container-fluid\" style=\"margin-top:10px;\">\n      <h3>News Form</h3><br>\n      <div class=\"alert alert-success alert-dismissible col-10\"\n      [hidden]=\"!successFlag\" id=\"sucssess\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n      <strong>Success!</strong> {{message}}\n      </div>\n      <div style=\"margin-bottom:10px;float:right;\">\n\n          <button class=\"btn btn-primary\" (click)=\"addNews(newsform)\" [hidden]=\"updateflag\">Submit</button>\n          <button class=\"btn btn-primary\" (click)=\"updateNews(newsform)\" [hidden]=\"!updateflag\">Update</button>\n        <button class=\"btn btn-primary\" (click)=\"resetNews()\">Reset</button>\n          <button class=\"btn btn-primary\" (click)=\"closeNews()\">Close</button>\n          </div>\n  <form #newsform=\"ngForm\" novalidate (ngSubmit)=\"addNews(newsform)\">\n    <div class=\"form-group\">\n      <label >Headline:</label>\n      <input type=\"text\" placeholder=\"Headline\" [(ngModel)]=\"news.headline\" name=\"headline\"\n      required  class=\"form-control col-12 col-lg-10\" #tHeadline=\"ngModel\">\n      <div *ngIf=\"(tHeadline.touched && !tHeadline.valid) || newsform.submitted\"\n      class=\"alert alert-danger form-control col-4\">Headline can't be blank</div>\n    </div>\n  \n    <div class=\"form-group\">\n      <label >Description:</label>\n      <textarea type=\"text\" placeholder=\"Description\" [(ngModel)]=\"news.description\" name=\"description\"\n      required  class=\"form-control col-12 col-lg-10\" #tDescription=\"ngModel\"></textarea>\n     <div *ngIf=\"(tDescription.touched && !tDescription.valid) || newsform.submitted\"\n      class=\"alert alert-danger form-control col-4\">Description can't be blank</div>\n    </div>\n  \n    <div class=\"form-group\">\n      <label >Category:</label>\n      \n    <select [(ngModel)]=\"news.category\" name=\"category\"\n    required class=\"form-control col-12 col-lg-10\" #tCategory=\"ngModel\">\n      <option *ngFor=\"let newsCategory of newsCategories\" [ngValue]=\"newsCategory.name\">\n        {{newsCategory.name}}</option>\n    </select>\n        <div *ngIf=\"(tCategory.touched && !tCategory.valid) || newsform.submitted\"\n      class=\"alert alert-danger form-control col-4\">Category can't be blank</div>\n  \n    </div>\n  \n    <div class=\"form-group\">\n      <label >ImageUrl:</label>\n      <input type=\"text\" placeholder=\"ImageUrl\" [(ngModel)]=\"news.imageUrl\" name=\"imageUrl\"\n        class=\"form-control col-12 col-lg-10\" #imageUrl=\"ngModel\" />\n        <input type=\"file\" name=\"filetoupload\" [(ngModel)]=\"filetoupload\" \n        class=\"form-control col-12 col-lg-10\">\n    </div>\n  \n    <div class=\"form-group\">\n      <label >VideoUrl:</label>\n      <input type=\"text\" placeholder=\"VideoUrl\" [(ngModel)]=\"news.videoUrl\" name=\"videoUrl\"\n        class=\"form-control col-12 col-lg-10\" #VideoUrl=\"ngModel\" />\n    </div>\n   \n    <div class=\"form-group\">\n      <label >Active:</label>\n      <input type=\"checkbox\" name=\"active\" [(ngModel)]=\"news.active\" checked=\"true\" class=\"form-control\"> \n    </div>\n   \n  \n  \n  <!-- <button type=\"submit\" class=\"btn btn-primary col-12 col-lg-10\" >Save</button> -->\n  </form>\n  \n  \n  </div>\n  </div>\n \n    </div>\n\n\n<div style=\"position:fixed;top:48%;left:48%;opacity:0.5;\" [hidden]=\"!loader\">\n<i class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;color:#0069d9;\"></i>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/news-search/news-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsSearchComponent = /** @class */ (function () {
    function NewsSearchComponent(newsService) {
        this.newsService = newsService;
        this.pageno = 1;
        this.rowsperpage = 5;
        this.updateflag = false;
        this.addflag = false;
        this.loader = false;
        this.successFlag = false;
        this.setIndex(1);
    }
    // set  pageno(val: number) {
    // if(val! =  = this.pageno) {
    // this._pageno = val; }
    // console.log(this._pageno) }
    NewsSearchComponent.prototype.first = function () { this.setIndex(this.pageno = 1); };
    NewsSearchComponent.prototype.previous = function () { this.setIndex(this.pageno = this.pageno - 1); };
    NewsSearchComponent.prototype.next = function () { this.setIndex(this.pageno = this.pageno + 1); };
    NewsSearchComponent.prototype.last = function () { this.setIndex(this.pageno = this.totalpages); };
    NewsSearchComponent.prototype.setIndex = function (page) {
        this.strat = ((page - 1) * this.rowsperpage) + 1;
        this.end = page * this.rowsperpage;
    };
    NewsSearchComponent.prototype.createNews = function () {
        this.addflag = true;
        this.updateflag = false;
        this.successFlag = false;
        this.resetNews();
    };
    NewsSearchComponent.prototype.closeNews = function () {
        this.resetNews();
        this.addflag = false;
        this.updateflag = false;
        this.getNewsDetails();
    };
    NewsSearchComponent.prototype.ngOnInit = function () {
        this.getNewsDetails();
        this.news = { 'headline': '', 'description': '', 'imageUrl': '', 'videoUrl': '', 'category': '',
            'filetoupload': '', 'active': '' };
        this.getNewsCategory();
    };
    NewsSearchComponent.prototype.getNewsCategory = function () {
        var that = this;
        this.loader = true;
        this.newsService.getNewsCategory().subscribe(function (res) { that.newsCategories = res.data; }, function (error) { console.log(error); }, function () { console.log('Its over News.'); });
    };
    NewsSearchComponent.prototype.getNewsDetails = function () {
        var that = this;
        this.loader = true;
        this.newsService.getNews().subscribe(function (res) {
            that.newsDetails = res.data;
            console.log(that.newsDetails);
            that.totalpages = Math.ceil(that.totalrows / that.rowsperpage);
            that.loader = false;
            // this.addflag = false;
            console.log(that.totalpages);
        }, function (error) { console.log(error); }, function () { console.log('Its over News.'); });
    };
    NewsSearchComponent.prototype.getNewsDetailsById = function (id) {
        this.addflag = true;
        this.updateflag = true;
        this.loader = true;
        this.successFlag = false;
        var that = this;
        this.newsService.getNewsById(id).subscribe(function (res) {
            that.id = res.data._id;
            that.news = res.data;
            that.loader = false;
            console.log(res);
        }, function (error) { console.log(error); }, function () { console.log('Its over News.'); });
    };
    NewsSearchComponent.prototype.addNews = function (newsform) {
        var _this = this;
        if (newsform.valid) {
            var newsBody = newsform.value;
            this.newsService.addNews(newsBody).subscribe(function (res) {
                console.log(res);
                _this.message = 'News created successfully.';
                // this.getNewsDetails();
                _this.successFlag = true;
                // this.addflag = false;
            }, function (error) { console.log(error); }, function () { console.log('Its over add news.'); });
        }
    };
    NewsSearchComponent.prototype.deleteNews = function (id) {
        var _this = this;
        var r = confirm('Do you want to delete the news?');
        if (r === true) {
            this.newsService.deleteNews(id).subscribe(function (res) {
                console.log(res);
                _this.message = 'News deleted successfully.';
                _this.getNewsDetails();
                // $("#myModal").modal('show');
            }, function (error) { console.log(error); }, function () { console.log('News deleted.'); });
        }
    };
    NewsSearchComponent.prototype.updateNews = function (newsform) {
        var _this = this;
        this.loader = true;
        console.log(this.id);
        if (newsform.valid) {
            var newsBody = newsform.value;
            this.newsService.updateNews(newsBody, this.id).subscribe(function (res) {
                console.log(res);
                // this.resetNews();
                // this.getNewsDetails();
                _this.updateflag = false;
                _this.successFlag = true;
                // this.addflag = false;
                _this.loader = false;
                document.getElementById('messagebody').innerHTML = 'News updated successfully.';
                _this.message = 'News updated successfully.';
            }, function (error) { console.log(error); }, function () { console.log('updated News.'); });
        }
    };
    NewsSearchComponent.prototype.resetNews = function () {
        this.news = { 'headline': '', 'description': '', 'imageUrl': '', 'videoUrl': '', 'category': '' };
    };
    NewsSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-search',
            template: __webpack_require__("../../../../../src/app/news-search/news-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news-search/news-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]])
    ], NewsSearchComponent);
    return NewsSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news-show-detail/news-show-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news-show-detail/news-show-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"row\">\n  <div class=\"col-12 col-lg-9 col-md-9\">\n      <h4 class=\"col-12\">{{news.headline}}</h4>\n    <img src={{news.imageUrl}}  class=\"col-12\" \n    style=\"padding:5px;  border-radius: 15px;max-height:350px; \">\n    <div class=\"col-12\"*ngIf=\"news.videoUrl\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n         <!-- src=\"https://www.youtube.com/embed/8qF925ZrovM\"  -->\n      <iframe width=\"660\" height=\"315\"\n      [src]=\"youtubepath\"\n    frameborder=\"0\" allow=\"autoplay;\" allowfullscreen></iframe>\n    </div>\n    <p class=\"col-12\">{{news.description}}</p>\n  </div>\n  <div class=\"col-12 col-lg-3 col-md-3\">\n    AD\n  </div>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/news-show-detail/news-show-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsShowDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsShowDetailComponent = /** @class */ (function () {
    function NewsShowDetailComponent(newsService, route, sanitizer) {
        this.newsService = newsService;
        this.route = route;
        this.sanitizer = sanitizer;
    }
    NewsShowDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.newsId = params['id']; });
        this.getNewsDetailsById(this.newsId);
        // this.news.videoUrl = 'https://www.youtube.com/embed/8qF925ZrovM';
    };
    NewsShowDetailComponent.prototype.getNewsDetailsById = function (id) {
        var that = this;
        this.newsService.getNewsById(id).subscribe(function (res) {
            that.id = res.data._id;
            that.news = res.data;
            // that.news.videoUrl = 'https://www.youtube.com/embed/' + that.news.videoUrl;
            that.youtubepath = that.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + that.news.videoUrl);
            console.log(that.youtubepath);
        }, function (error) { console.log(error); }, function () { console.log('Its over News.'); });
    };
    NewsShowDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-show-detail',
            template: __webpack_require__("../../../../../src/app/news-show-detail/news-show-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news-show-detail/news-show-detail.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], NewsShowDetailComponent);
    return NewsShowDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news-show-main/news-show-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news-show-main/news-show-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\" style=\"margin-top:20px;margin-bottom: 20px;\">\n        <div class=\"col-12 col-lg-9 col-md-9\">\n          <div class=\"row\" >\n            <div class=\"col-12 col-lg-6 col-md-6\" *ngFor=\"let news of newsData    | slice:0:4; let i = index;\" \n            style=\"margin-top: 15px;\" routerLink= \"/news-detail/{{news._id}}\">\n                <img src={{news.imageUrl}}  class=\"col-12\" \n                style=\"padding:5px;  border-radius: 15px;max-height:250px; \">\n                <h4 class=\"col-12\">{{news.headline}}</h4>\n           </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-lg-3 col-md-3\" style=\"margin-top: 15px;\" >\n\n            <h4>आज का सवाल</h4>\n            <div *ngFor=\"let poll of PollDetails    | slice:0:1; let i = index;\">\n            <h6> {{poll.question}}</h6>\n            <p>\n                <input type=\"radio\" name=\"todayPoll\" value=\"option1Count\" [(ngModel)]=\"todayPoll\">{{poll.option1}}\n            {{poll.option1Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n              </p>\n            <p>\n                <input type=\"radio\" name=\"todayPoll\" value=\"option2Count\" [(ngModel)]=\"todayPoll\">{{poll.option2}}\n                {{poll.option2Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n              </p>\n            <p *ngIf=\"poll.option3\">\n                <input type=\"radio\" name=\"todayPoll\" value=\"option3Count\" [(ngModel)]=\"todayPoll\">{{poll.option3}}\n                {{poll.option3Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n           </p>\n            <p *ngIf=\"poll.option4\">\n                <input type=\"radio\" name=\"todayPoll\" value=\"option4Count\" [(ngModel)]=\"todayPoll\">{{poll.option4}}\n                {{poll.option4Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n            </p>\n            <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"updatePoll(poll._id)\"\n            *ngIf=\"VoteId!==poll._id\">Vote</button>\n            <span *ngIf=\"VoteId===poll._id\" class=\"text-success\">Thanks for your vote.</span>\n            </div>\n            <h4>पिछला सवाल</h4> \n            <div *ngFor=\"let poll of PollDetails    | slice:1:2; let i = index;\">\n            <h6> {{poll.question}}</h6>\n            <p>{{poll.option1}}    \n            \n              <span class=\"progress\">\n               \n                <span class=\"progress-bar bg-success\" style=\"width:50%\">{{poll.option1Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}</span>\n              </span>\n              </p>\n            <p>{{poll.option2}}  \n                <span class=\"progress\">\n                   \n                    <span class=\"progress-bar bg-info\" style=\"width:30%\">{{poll.option2Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n                      </span>\n                  </span>\n            </p>\n            \n            <p *ngIf=\"poll.option3\">{{poll.option3}}   \n                <span class=\"progress\">\n                  \n                    <span class=\"progress-bar bg-warning\" style=\"width:15%\">{{poll.option3Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n                      </span>\n                  </span>\n            </p>\n            <p *ngIf=\"poll.option4\">{{poll.option4}}  \n                <span class=\"progress\">\n                   \n                    <span class=\"progress-bar bg-danger\" style=\"width:5%\">{{poll.option4Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n                      </span>\n                  </span>\n            </p>\n          </div>\n        </div>\n        <div class=\"col-12 col-lg-9 col-md-9\">\n            <div class=\"row\" >\n                <div class=\"col-12 col-lg-4 col-md-4\" *ngFor=\"let news of newsData  | slice:4:11; let i = index;\" \n                style=\"margin-top: 15px;\" routerLink= \"/news-detail/{{news._id}}\">\n                <div class=\"row\" >\n                    <img src={{news.imageUrl}}  class=\"col-4\" \n                    style=\"padding:5px;  border-radius: 15px;max-height:100px; \">\n                    <h6 class=\"col-8\">{{news.headline}}</h6>\n               </div>\n              </div>\n            </div>\n        </div> \n    </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\" style=\"margin-top:20px;margin-bottom: 20px;\">\n      <div class=\"col-12 col-lg-6\" style=\"border: 1px solid #DADADA; border-radius: 5px;\">\n          <h4>Advertise</h4><br>\n  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n    <!-- Indicators -->\n    <ul class=\"carousel-indicators\" >\n      <li data-target=\"#demo\" *ngFor=\"let advt of AdvtDetails; let i = index;\"\n      data-slide-to=\"i\" [ngClass]=\"i===0 ? 'active' : 'inactive'\" ></li>\n    </ul>\n    \n    <!-- The slideshow -->\n    <div class=\"carousel-inner\" >\n      <div class=\"carousel-item\" *ngFor=\"let advt of AdvtDetails; let i = index;\"\n      [ngClass]=\"i===0 ? 'active' : 'inactive'\" >\n          <div class=\"row\" >\n        <img class=\"col-12\" src={{advt.imageUrl}} style=\"max-height: 300px;\">\n        <h6 class=\"col-12\">{{advt.header}}</h6>\n        <p>{{advt.description}}</p>\n      </div>\n    </div>\n    </div>\n    \n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n  </div>\n\n    <div class=\"col-12 col-lg-6\" style=\"border: 1px solid #DADADA; border-radius: 5px;\">\n        <h4>{{category1}}</h4><br>\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n  <!-- Indicators -->\n  <ul class=\"carousel-indicators\" >\n    <li data-target=\"#demo\" *ngFor=\"let news of category1Array; let i = index;\"\n    data-slide-to=\"i\" [ngClass]=\"i===0 ? 'active' : 'inactive'\" ></li>\n  </ul>\n  \n  <!-- The slideshow -->\n  <div class=\"carousel-inner\" >\n    <div class=\"carousel-item\" *ngFor=\"let news of category1Array; let i = index;\"\n    [ngClass]=\"i===0 ? 'active' : 'inactive'\" >\n        <div class=\"row\" >\n      <img class=\"col-12\" src={{news.imageUrl}} style=\"max-height: 300px;\">\n      <h6 class=\"col-12\">{{news.headline}}</h6>\n    </div>\n  </div>\n  </div>\n  \n  <!-- Left and right controls -->\n  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n</div>\n<div class=\"col-12 col-lg-6\" style=\"border: 1px solid #DADADA; border-radius: 5px;\">\n    <h4>{{category2}}</h4><br>\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n<!-- Indicators -->\n<ul class=\"carousel-indicators\" >\n<li data-target=\"#demo\" *ngFor=\"let news of category2Array; let i = index;\"\ndata-slide-to=\"i\" [ngClass]=\"i===0 ? 'active' : 'inactive'\" ></li>\n</ul>\n\n<!-- The slideshow -->\n<div class=\"carousel-inner\" >\n<div class=\"carousel-item\" *ngFor=\"let news of category2Array; let i = index;\"\n[ngClass]=\"i===0 ? 'active' : 'inactive'\" >\n    <div class=\"row\" >\n  <img class=\"col-12\" src={{news.imageUrl}} style=\"max-height: 300px;\">\n  <h6 class=\"col-12\">{{news.headline}}</h6>\n</div>\n</div>\n</div>\n\n<!-- Left and right controls -->\n<a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n<span class=\"carousel-control-prev-icon\"></span>\n</a>\n<a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n<span class=\"carousel-control-next-icon\"></span>\n</a>\n</div>\n</div>\n<div class=\"col-12 col-lg-6\" style=\"border: 1px solid #DADADA; border-radius: 5px;\">\n    <h4>{{category3}}</h4><br>\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n<!-- Indicators -->\n<ul class=\"carousel-indicators\" >\n<li data-target=\"#demo\" *ngFor=\"let news of category3Array; let i = index;\"\ndata-slide-to=\"i\" [ngClass]=\"i===0 ? 'active' : 'inactive'\" ></li>\n</ul>\n\n<!-- The slideshow -->\n<div class=\"carousel-inner\" >\n<div class=\"carousel-item\" *ngFor=\"let news of category3Array; let i = index;\"\n[ngClass]=\"i===0 ? 'active' : 'inactive'\" >\n    <div class=\"row\" >\n  <img class=\"col-12\" src={{news.imageUrl}} style=\"max-height: 300px;\">\n  <h6 class=\"col-12\">{{news.headline}}</h6>\n</div>\n</div>\n</div>\n\n<!-- Left and right controls -->\n<a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n<span class=\"carousel-control-prev-icon\"></span>\n</a>\n<a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n<span class=\"carousel-control-next-icon\"></span>\n</a>\n</div>\n</div>\n</div>\n</div>\n\n<!-- <div class=\"container-fluid\">\n<div class=\"bg-info row\" style=\"height: 200px;;\">\n \n  <h4>राजनीति</h4><br>\n  <div class=\"col-12 col-lg-3 col-md-3\">\n    <div class=\"card\" style=\"position: absolute; top:40px;\">\n      <img class=\"card-img-top\" src=\"././assets/modi.jpg\" alt=\"Card image\" \n      style=\"width:100%;max-height: 120px;\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">John Doe</h4>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-lg-3 col-md-3\">\n    <div class=\"card\" style=\"position: absolute; top:40px;\">\n      <img class=\"card-img-top\" src=\"././assets/modi.jpg\" alt=\"Card image\" \n      style=\"width:100%;max-height: 120px;\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">John Doe</h4>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-lg-3 col-md-3\">\n    <div class=\"card\" style=\"position: absolute; top:40px;\">\n      <img class=\"card-img-top\" src=\"././assets/modi.jpg\" alt=\"Card image\" \n      style=\"width:100%;max-height: 120px;\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">John Doe</h4>\n      </div>\n    </div>\n  </div>\n\n</div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/news-show-main/news-show-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsShowMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poll_service__ = __webpack_require__("../../../../../src/app/poll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsadvt_service__ = __webpack_require__("../../../../../src/app/newsadvt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsShowMainComponent = /** @class */ (function () {
    function NewsShowMainComponent(newsService, pollService, newsadvtService) {
        this.newsService = newsService;
        this.pollService = pollService;
        this.newsadvtService = newsadvtService;
        this.category1 = 'राजनीति';
        this.category2 = 'खेल';
        this.category3 = 'देश/विदेश';
    }
    NewsShowMainComponent.prototype.ngOnInit = function () {
        this.category1Array = [];
        this.category2Array = [];
        this.category3Array = [];
        this.getNewsDetails();
        this.getPollDetails();
        this.VoteId = localStorage.getItem('pollVote');
    };
    NewsShowMainComponent.prototype.getNewsDetails = function () {
        var that = this;
        this.newsService.getNews().subscribe(function (res) {
            that.newsData = res.data;
            console.log(that.newsData);
            (that.newsData).forEach(function (newscat) {
                if (newscat.category === that.category1) {
                    that.category1Array.push(newscat);
                }
                else if (newscat.category === that.category2) {
                    that.category2Array.push(newscat);
                }
                else if (newscat.category === that.category3) {
                    that.category3Array.push(newscat);
                }
            });
        }, function (error) { console.log(error); }, function () { console.log('Its over News.'); });
    };
    NewsShowMainComponent.prototype.getPollDetails = function () {
        var that = this;
        this.pollService.getPoll().subscribe(function (res) { that.PollDetails = res.data; }, function (error) { console.log(error); }, function () { console.log('Its over Poll.'); });
    };
    NewsShowMainComponent.prototype.getAdvtDetails = function () {
        var that = this;
        this.newsadvtService.getAdvt().subscribe(function (res) {
            that.AdvtDetails = res.data;
            console.log(that.AdvtDetails);
        }, function (error) { console.log(error); }, function () { console.log('Its over Advt.'); });
    };
    NewsShowMainComponent.prototype.updatePoll = function (pollId) {
        console.log(this.todayPoll);
        localStorage.setItem('pollVote', pollId);
        this.VoteId = pollId;
        this.pollService.updatePollCount({ 'updateField': this.todayPoll }, pollId).subscribe(function (res) {
            console.log(res);
        }, function (error) { console.log(error); }, function () { console.log('updated Poll.'); });
    };
    NewsShowMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-show-main',
            template: __webpack_require__("../../../../../src/app/news-show-main/news-show-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news-show-main/news-show-main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_2__poll_service__["a" /* PollService */],
            __WEBPACK_IMPORTED_MODULE_3__newsadvt_service__["a" /* NewsadvtService */]])
    ], NewsShowMainComponent);
    return NewsShowMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.newsUrl = 'http://localhost:3000/news';
    }
    NewsService.prototype.getNews = function () {
        console.log('Get News');
        return this.http.get(this.newsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsService.prototype.getNewsCategory = function () {
        console.log('Get News');
        return this.http.get(this.newsUrl + '/category')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsService.prototype.getNewsById = function (id) {
        console.log('Get News');
        return this.http.get(this.newsUrl + '/ById/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsService.prototype.getNewsByCategory = function (category) {
        console.log('Get News');
        return this.http.get(this.newsUrl + '/ByCategory/' + category)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsService.prototype.addNews = function (newsOb) {
        console.log(newsOb);
        var Newstring = JSON.stringify(newsOb);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.newsUrl, Newstring, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsService.prototype.updateNews = function (newsOb, id) {
        var Newstring = JSON.stringify(newsOb);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.newsUrl + '/' + id, Newstring, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsService.prototype.deleteNews = function (id) {
        console.log('Come in');
        return this.http.delete(this.newsUrl + '/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    //   uploadFiles (newsOb: Object) {
    //     console.log('fileOb: ' + newsOb);
    //    const Newstring = JSON.stringify(newsOb);
    //    const headers = new Headers({'Content-Type': 'application/json'});
    //    const options = new RequestOptions({headers: headers});
    //    return this.http.post('http://localhost:3000/upload', Newstring,  options)
    //    .map((res: Response) => {return res.json()})
    //    .catch((error: any) => Observable.throw(error || 'Server error'));
    //  }
    NewsService.prototype.uploadFiles = function () {
        console.log('Get upload');
        return this.http.get('http://localhost:3000/upload')
            .map(function (res) { return res; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "../../../../../src/app/newsadvt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsadvtService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsadvtService = /** @class */ (function () {
    function NewsadvtService(http) {
        this.http = http;
        this.AdvtUrl = 'http://localhost:3000/advt';
    }
    NewsadvtService.prototype.getAdvt = function () {
        console.log('Get Advt');
        return this.http.get(this.AdvtUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsadvtService.prototype.getAdvtById = function (id) {
        console.log('Get Advt');
        return this.http.get(this.AdvtUrl + '/ById/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsadvtService.prototype.addAdvt = function (AdvtOb) {
        console.log(AdvtOb);
        var Advttring = JSON.stringify(AdvtOb);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.AdvtUrl, Advttring, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsadvtService.prototype.updateAdvt = function (AdvtOb, id) {
        var Advttring = JSON.stringify(AdvtOb);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.AdvtUrl + '/' + id, Advttring, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsadvtService.prototype.deleteAdvt = function (id) {
        console.log('Come in');
        return this.http.delete(this.AdvtUrl + '/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    NewsadvtService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NewsadvtService);
    return NewsadvtService;
}());



/***/ }),

/***/ "../../../../../src/app/pagination.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginationPipe = /** @class */ (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (param, start, end) {
        var value = param.slice(start - 1, end);
        return value;
    };
    PaginationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'pagination'
        })
    ], PaginationPipe);
    return PaginationPipe;
}());



/***/ }),

/***/ "../../../../../src/app/poll-create/poll-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poll-create/poll-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:10px;\">\n<div class=\"row\">\n<div class=\"col-12\"\n       style=\"border:1px solid #DADADA; border-radius:5px;\" [hidden]=\"addflag\" >\n       <div class=\"col-6\">\n           <i class=\"fa fa-file-text-o\" style=\"font-size:25px;color:#2979FF;cursor:pointer;margin:15px;\" \n           (click)=\"createPoll();\">Create Poll</i></div>\n           <div class=\"col-6 form-group\">\n              <input type=\"text\" class=\"form-control col-5\" id=\"search\" [(ngModel)]=\"search\" name=\"search\" placeholder=\"Type here to search by name\">\n              \n           </div>\n  \n           <div class=\"col-12\">\n              <ul class=\"pagination\">\n    <li class=\"page-item\" [class.disabled]=\"pageno===1\"><a class=\"page-link\" (click)=\"first()\">First</a></li>\n    <li class=\"page-item\" [class.disabled]=\"pageno===1\"><a class=\"page-link\" (click)=\"previous()\">Previous</a></li>\n    <li class=\"page-item\" [class.disabled]=\"1===1\"><a class=\"page-link\" >{{pageno}}</a></li>\n    <li class=\"page-item\" [class.disabled]=\"pageno===totalpages\"><a class=\"page-link\" (click)=\"next()\">Next</a></li>\n    <li class=\"page-item\" [class.disabled]=\"pageno===totalpages\"><a class=\"page-link\" (click)=\"last()\">Last</a></li>\n  </ul>\n          </div>\n       <table class=\"table table-dark table-striped table-hover\" *ngIf=\"PollDetails\">\n       <tr>\n  <th>Id</th>\n  <th>Poll Question</th>\n  <th></th>\n  <th></th>\n       </tr> \n       <!--  -->\n       <tr *ngFor=\"let PollDetail of PollDetails   | search : search | pagination : strat:  end \">\n  <td>{{PollDetail._id}}</td>\n  <td>{{PollDetail.question}}</td>\n  <td><div style=\"cursor:pointer;\"  (click)=\"deletePoll(PollDetail._id);\">\n      <i class=\"fa fa-trash-o\" style=\"font-size:25px;\" data-toggle=\"tooltip\" title=\"Click here to delete\"></i></div>\n  </td>\n      <td>\n  <div style=\"cursor:pointer;\"  (click)=\"getPollDetailsById(PollDetail._id);\">\n      <i class=\"fa fa-edit\" style=\"font-size:25px\" data-toggle=\"tooltip\" title=\"Click here to update\"></i></div></td>\n       </tr>\n     </table>\n  \n    </div>\n      <div class=\"mx-auto col-10 bg-light\" style=\"border:1px solid #DADADA; border-radius:5px;\"\n       [hidden]=\"!addflag\">\n           <h3 class=\"fa fa-file-text-o\" style=\"font-size:25px;color:#007bff;margin:15px;\" >Add Poll</h3>\n          \n    <div>\n      <div class=\"container-fluid\" style=\"margin-top:10px;\">\n        <h3>Poll Form</h3><br>\n        <div class=\"alert alert-success alert-dismissible col-10\"\n        [hidden]=\"!successFlag\" id=\"sucssess\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <strong>Success!</strong> {{message}}\n        </div>\n        <div style=\"margin-bottom:10px;float:right;\">\n  \n            <button class=\"btn btn-primary\" (click)=\"addPoll(Pollform)\" [hidden]=\"updateflag\">Submit</button>\n            <button class=\"btn btn-primary\" (click)=\"updatePoll(Pollform)\" [hidden]=\"!updateflag\">Update</button>\n          <button class=\"btn btn-primary\" (click)=\"resetPoll()\">Reset</button>\n            <button class=\"btn btn-primary\" (click)=\"closePoll()\">Close</button>\n            </div>\n    <form #Pollform=\"ngForm\" novalidate (ngSubmit)=\"addPoll(Pollform)\">\n      <div class=\"form-group\">\n        <label >Question:</label>\n        <input type=\"text\" placeholder=\"Question\" [(ngModel)]=\"Poll.question\" name=\"question\"\n        required  class=\"form-control col-10\" #tQuestion=\"ngModel\">\n        <div *ngIf=\"(tQuestion.touched && !tQuestion.valid) || Pollform.submitted\"\n        class=\"alert alert-danger form-control col-4\">Question can't be blank</div>\n      </div>\n\n      <div class=\"form-group\">\n        <label >Option 1:</label>\n        <input type=\"text\" placeholder=\"Option 1\" [(ngModel)]=\"Poll.option1\" name=\"option1\"\n        required  class=\"form-control col-10\" #tOption1=\"ngModel\">\n        <div *ngIf=\"(tOption1.touched && !tOption1.valid) || Pollform.submitted\"\n        class=\"alert alert-danger form-control col-4\">Option 1 can't be blank</div>\n      </div>\n\n      <div class=\"form-group\">\n        <label >Option 2:</label>\n        <input type=\"text\" placeholder=\"Option 2\" [(ngModel)]=\"Poll.option2\" name=\"option2\"\n        required  class=\"form-control col-10\" #tOption2=\"ngModel\">\n        <div *ngIf=\"(tOption2.touched && !tOption2.valid) || Pollform.submitted\"\n        class=\"alert alert-danger form-control col-4\">Option 2 can't be blank</div>\n      </div>\n    \n      <div class=\"form-group\">\n        <label >Option 3:</label>\n        <input type=\"text\" placeholder=\"Option 3\" [(ngModel)]=\"Poll.option3\" name=\"option3\"\n          class=\"form-control col-10\" #tOption3=\"ngModel\">\n      </div>\n\n      <div class=\"form-group\">\n        <label >Option 4:</label>\n        <input type=\"text\" placeholder=\"Option 4\" [(ngModel)]=\"Poll.option4\" name=\"option4\"\n        class=\"form-control col-10\" #tOption4=\"ngModel\">\n      </div>\n    \n    </form>\n    \n    \n    </div>\n    </div>\n   \n      </div>\n  \n  <div style=\"position:fixed;top:48%;left:48%;opacity:0.5;\" [hidden]=\"!loader\">\n  <i class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;color:#0069d9;\"></i>\n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/poll-create/poll-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poll_service__ = __webpack_require__("../../../../../src/app/poll.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PollCreateComponent = /** @class */ (function () {
    function PollCreateComponent(pollService) {
        this.pollService = pollService;
        this.pageno = 1;
        this.rowsperpage = 5;
        this.updateflag = false;
        this.addflag = false;
        this.loader = false;
        this.successFlag = false;
        this.setIndex(1);
    }
    // set  pageno(val: number) {
    // if(val! =  = this.pageno) {
    // this._pageno = val; }
    // console.log(this._pageno) }
    PollCreateComponent.prototype.first = function () { this.setIndex(this.pageno = 1); };
    PollCreateComponent.prototype.previous = function () { this.setIndex(this.pageno = this.pageno - 1); };
    PollCreateComponent.prototype.next = function () { this.setIndex(this.pageno = this.pageno + 1); };
    PollCreateComponent.prototype.last = function () { this.setIndex(this.pageno = this.totalpages); };
    PollCreateComponent.prototype.setIndex = function (page) {
        this.strat = ((page - 1) * this.rowsperpage) + 1;
        this.end = page * this.rowsperpage;
    };
    PollCreateComponent.prototype.createPoll = function () {
        this.addflag = true;
        this.updateflag = false;
        this.successFlag = false;
        this.resetPoll();
    };
    PollCreateComponent.prototype.closePoll = function () {
        this.resetPoll();
        this.addflag = false;
        this.updateflag = false;
        this.getPollDetails();
    };
    PollCreateComponent.prototype.ngOnInit = function () {
        this.PollDetails = [];
        this.getPollDetails();
        this.Poll = { 'question': '', 'option1': '', 'option2': '', 'option3': '', 'option4': '' };
    };
    PollCreateComponent.prototype.getPollDetails = function () {
        var that = this;
        this.loader = true;
        this.pollService.getPoll().subscribe(function (res) {
            that.PollDetails = res.data;
            console.log(that.PollDetails);
            that.totalpages = Math.ceil(that.totalrows / that.rowsperpage);
            that.loader = false;
            // this.addflag = false;
            console.log(that.totalpages);
        }, function (error) { console.log(error); }, function () { console.log('Its over Poll.'); });
    };
    PollCreateComponent.prototype.getPollDetailsById = function (id) {
        this.addflag = true;
        this.updateflag = true;
        this.loader = true;
        this.successFlag = false;
        var that = this;
        this.pollService.getPollById(id).subscribe(function (res) {
            that.id = res.data._id;
            that.Poll = res.data;
            that.loader = false;
            console.log(res);
        }, function (error) { console.log(error); }, function () { console.log('Its over Poll.'); });
    };
    PollCreateComponent.prototype.addPoll = function (Pollform) {
        var _this = this;
        if (Pollform.valid) {
            var PollBody = Pollform.value;
            PollBody.option1Count = 0;
            PollBody.option2Count = 0;
            PollBody.option3Count = 0;
            PollBody.option4Count = 0;
            this.pollService.addPoll(PollBody).subscribe(function (res) {
                console.log(res);
                _this.message = 'Poll created successfully.';
                // this.getPollDetails();
                _this.successFlag = true;
                // this.addflag = false;
            }, function (error) { console.log(error); }, function () { console.log('Its over add Poll.'); });
        }
    };
    PollCreateComponent.prototype.deletePoll = function (id) {
        var _this = this;
        var that = this;
        var r = confirm('Do you want to delete the Poll?');
        if (r === true) {
            this.pollService.deletePoll(id).subscribe(function (res) {
                console.log(res);
                _this.message = 'Poll deleted successfully.';
                that.getPollDetails();
                // $("#myModal").modal('show');
            }, function (error) { console.log(error); }, function () { console.log('Poll deleted.'); });
        }
    };
    PollCreateComponent.prototype.updatePoll = function (Pollform) {
        var _this = this;
        this.loader = true;
        console.log(this.id);
        if (Pollform.valid) {
            var PollBody = Pollform.value;
            this.pollService.updatePoll(PollBody, this.id).subscribe(function (res) {
                console.log(res);
                // this.resetPoll();
                // this.getPollDetails();
                _this.updateflag = false;
                _this.successFlag = true;
                // this.addflag = false;
                _this.loader = false;
                document.getElementById('messagebody').innerHTML = 'Poll updated successfully.';
                _this.message = 'Poll updated successfully.';
            }, function (error) { console.log(error); }, function () { console.log('updated Poll.'); });
        }
    };
    PollCreateComponent.prototype.resetPoll = function () {
        this.Poll = { 'question': '', 'option1': '', 'option2': '', 'option3': '', 'option4': '' };
    };
    PollCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-poll-create',
            template: __webpack_require__("../../../../../src/app/poll-create/poll-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/poll-create/poll-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__poll_service__["a" /* PollService */]])
    ], PollCreateComponent);
    return PollCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/poll-show/poll-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poll-show/poll-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\" style=\"margin-top:20px;margin-bottom: 20px;margin-left:20px;\">\n<div class=\"col-12\" >\n\n  <h4>आज का सवाल</h4>\n  <div *ngFor=\"let poll of PollDetails  | slice:0:1; let i = index;\">\n  <h6> {{poll.question}}</h6>\n  <p>\n      <input type=\"radio\" name=\"todayPoll\" value=\"option1Count\" [(ngModel)]=\"todayPoll\">{{poll.option1}}\n  {{poll.option1Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n    </p>\n  <p>\n      <input type=\"radio\" name=\"todayPoll\" value=\"option2Count\" [(ngModel)]=\"todayPoll\">{{poll.option2}}\n      {{poll.option2Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n    </p>\n  <p *ngIf=\"poll.option3\">\n      <input type=\"radio\" name=\"todayPoll\" value=\"option3Count\" [(ngModel)]=\"todayPoll\">{{poll.option3}}\n      {{poll.option3Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n </p>\n  <p *ngIf=\"poll.option4\">\n      <input type=\"radio\" name=\"todayPoll\" value=\"option4Count\" [(ngModel)]=\"todayPoll\">{{poll.option4}}\n      {{poll.option4Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n  </p>\n  <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"updatePoll(poll._id)\"\n  *ngIf=\"VoteId!==poll._id\">Vote</button>\n  <span *ngIf=\"VoteId===poll._id\" class=\"text-success\">Thanks for your vote.</span>\n  </div>\n  <h4>पिछला सवाल</h4> \n  <div *ngFor=\"let poll of PollDetails    | slice:1:15; let i = index;\">\n  <h6> {{poll.question}}</h6>\n  <p>{{poll.option1}}    \n  \n    <span class=\"progress\">\n     \n      <span class=\"progress-bar bg-success\" style=\"width:50%\">{{poll.option1Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}</span>\n    </span>\n    </p>\n  <p>{{poll.option2}}  \n      <span class=\"progress\">\n         \n          <span class=\"progress-bar bg-info\" style=\"width:30%\">{{poll.option2Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n            </span>\n        </span>\n  </p>\n  \n  <p *ngIf=\"poll.option3\">{{poll.option3}}   \n      <span class=\"progress\">\n        \n          <span class=\"progress-bar bg-warning\" style=\"width:15%\">{{poll.option3Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n            </span>\n        </span>\n  </p>\n  <p *ngIf=\"poll.option4\">{{poll.option4}}  \n      <span class=\"progress\">\n         \n          <span class=\"progress-bar bg-danger\" style=\"width:5%\">{{poll.option4Count/(poll.option1Count+poll.option2Count+poll.option3Count+poll.option4Count) | percent}}\n            </span>\n        </span>\n  </p>\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/poll-show/poll-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poll_service__ = __webpack_require__("../../../../../src/app/poll.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PollShowComponent = /** @class */ (function () {
    function PollShowComponent(pollService) {
        this.pollService = pollService;
    }
    PollShowComponent.prototype.ngOnInit = function () {
        this.getPollDetails();
        this.VoteId = localStorage.getItem('pollVote');
    };
    PollShowComponent.prototype.getPollDetails = function () {
        var that = this;
        this.pollService.getPoll().subscribe(function (res) { that.PollDetails = res.data; }, function (error) { console.log(error); }, function () { console.log('Its over Poll.'); });
    };
    PollShowComponent.prototype.updatePoll = function (pollId) {
        console.log(this.todayPoll);
        localStorage.setItem('pollVote', pollId);
        this.VoteId = pollId;
        this.pollService.updatePollCount({ 'updateField': this.todayPoll }, pollId).subscribe(function (res) {
            console.log(res);
        }, function (error) { console.log(error); }, function () { console.log('updated Poll.'); });
    };
    PollShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-poll-show',
            template: __webpack_require__("../../../../../src/app/poll-show/poll-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/poll-show/poll-show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__poll_service__["a" /* PollService */]])
    ], PollShowComponent);
    return PollShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/poll.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PollService = /** @class */ (function () {
    function PollService(http) {
        this.http = http;
        this.pollUrl = 'http://localhost:3000/poll';
    }
    PollService.prototype.getPoll = function () {
        console.log('Get Poll');
        return this.http.get(this.pollUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    PollService.prototype.getPollById = function (id) {
        console.log('Get Poll');
        return this.http.get(this.pollUrl + '/ById/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    PollService.prototype.addPoll = function (PollOb) {
        console.log(PollOb);
        var Polltring = JSON.stringify(PollOb);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.pollUrl, Polltring, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    PollService.prototype.updatePoll = function (PollOb, id) {
        var Polltring = JSON.stringify(PollOb);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.pollUrl + '/' + id, Polltring, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    PollService.prototype.deletePoll = function (id) {
        console.log('Come in');
        return this.http.delete(this.pollUrl + '/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    PollService.prototype.updatePollCount = function (PollOb, id) {
        var Polltring = JSON.stringify(PollOb);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.pollUrl + '/count/' + id, Polltring, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    PollService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PollService);
    return PollService;
}());



/***/ }),

/***/ "../../../../../src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(terms); // only filter country name
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (value, args) {
        return value.reverse();
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map