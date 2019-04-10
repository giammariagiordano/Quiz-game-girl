webpackJsonp([0],{

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionPageModule", function() { return AddQuestionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_question__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddQuestionPageModule = /** @class */ (function () {
    function AddQuestionPageModule() {
    }
    AddQuestionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_question__["a" /* AddQuestionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_question__["a" /* AddQuestionPage */]),
            ],
        })
    ], AddQuestionPageModule);
    return AddQuestionPageModule;
}());

//# sourceMappingURL=add-question.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddQuestionPage = /** @class */ (function () {
    function AddQuestionPage(navCtrl, navParams) {
        //  this.user.username = this.navParams.get('username'); 
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            username: "",
        };
        this.generalInfo = new Array();
        this.question = new Array();
        this.getGirlDetails();
    }
    AddQuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddQuestionPage');
    };
    AddQuestionPage.prototype.getGirlDetails = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('GeneralInfo').orderByChild('name').on('child_added', function (res) {
            _this.generalInfo.push({ name: res.val().name, info: res.val().info, src: res.val().src });
            console.log("add question: " + JSON.stringify(_this.generalInfo));
        });
    };
    AddQuestionPage.prototype.sendQuestion = function () {
        console.log("question send correct");
    };
    AddQuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-question',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/add-question/add-question.html"*/'<!--\n  Generated template for the AddQuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>addQuestion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="container">\n    <select>\n        <option value="" selected disabled hidden>Seleziona una Informatica</option>\n        <option *ngFor="let girl of generalInfo" [ngValue]="girl.name">{{girl.name}}</option>\n        <option [ngValue]="olther" >Non è presente nella lista</option>\n      </select>\n\n      <form class="box" action="index.html" method="post" (submit)="sendQuestion()" >\n          <input *ngIf="olther" type="text" name="" placeholder="Indica il nome e il cognome " [(ngModel)]="question.question" name="question">\n\n          <input type="text" name="" placeholder="Domanda" [(ngModel)]="question.question" name="question">\n          <input type="text" name="" placeholder="Risposta Corretta" [(ngModel)]="question.correctAnswer" name="correctAnswer">\n          \n          <input type="text" name="" placeholder="Risposta Errata" [(ngModel)]="question.uncorrectAnswer1" name="uncorrectAnswer1">\n          <input type="text" name="" placeholder="Risposta Errata" [(ngModel)]="question.uncorrectAnswer2" name="uncorrectAnswer2">\n          <input type="text" name="" placeholder="Risposta Errata" [(ngModel)]="question.uncorrectAnswer3" name="uncorrectAnswer3">\n          <input type="text" name="" placeholder="Indica la fonte della domanda" [(ngModel)]="question.source" name="source">\n\n          <input type="submit" name="" value="Invia domanda">\n\n        </form>\n</ion-content>'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/add-question/add-question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddQuestionPage);
    return AddQuestionPage;
}());

//# sourceMappingURL=add-question.js.map

/***/ })

});
//# sourceMappingURL=0.js.map