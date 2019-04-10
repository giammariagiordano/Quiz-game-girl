webpackJsonp([8],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CORRECT = 10;
        this.UNCORRECT = -5;
        this.loading = false;
        this.score = 0;
        this.it = 0;
        this.questionNumber = 4;
        this.questions = new Array();
        this.womanName = new Array();
        this.pool = new Array();
        this.currentQuestion = {
            question: "",
            index: 0,
            choice: ["", "", "", ""]
        };
        this.seconds = 10;
        this.username = navParams.get("username");
    }
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
        this.loadQuestion();
    };
    GamePage.prototype.ionViewDidEnter = function () {
        this.createQuestion();
    };
    GamePage.prototype.loadQuestion = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("Questions").once('value', function (res) {
            res.val().forEach(function (element) {
                _this.questions.push(element);
                _this.womanName.push(element.answer);
            });
            _this.createPool();
        });
    };
    GamePage.prototype.createPool = function () {
        this.mix(this.questions.length, this.questions);
        for (var i = 0; i < this.questionNumber; i++) {
            this.pool.push(this.questions[i]);
        }
    };
    /**
     * giro di stupid sort
     */
    GamePage.prototype.mix = function (len, toSort) {
        for (var i = 0; i < len; i++) {
            var rndIndex = Math.floor(Math.random() * len);
            var app = toSort[i];
            toSort[i] = toSort[rndIndex];
            toSort[rndIndex] = app;
        }
    };
    GamePage.prototype.createQuestion = function () {
        var _this = this;
        this.restartTimerCounter();
        this.decrementSeconds();
        console.log(JSON.stringify(this.questions));
        this.loading = true;
        this.timer = setInterval(function () {
            _this.decrementSeconds(); // inizio a decrementarre i secondi
        }, 1000);
        if (this.it < this.questionNumber) {
            this.currentQuestion.question = this.pool[this.it].question;
            this.currentQuestion.index = this.it;
            var choice = this.currentQuestion.choice;
            choice[0] = this.pool[this.it].answer;
            var index = this.womanName.indexOf(choice[0]);
            if (index > -1) {
                this.womanName.splice(index, 1);
            }
            for (var i = 1; i < 4; i++) {
                var wLen = this.womanName.length;
                var rndIndex = Math.floor(Math.random() * wLen);
                choice[i] = this.womanName[rndIndex];
                var index_1 = this.womanName.indexOf(choice[i]);
                if (index_1 > -1) {
                    this.womanName.splice(index_1, 1);
                }
            }
            this.womanName.push(choice[0]);
            for (var i = 1; i < 4; i++) {
                this.womanName.push(choice[i]);
            }
            this.mix(4, choice);
        }
        else {
            //? avrei potuto fermare qui il timer e chiamare la push ma avrei replicato due linee di codice
            this.answerToQuestion(null);
        }
    };
    GamePage.prototype.answerToQuestion = function (ev) {
        var _this = this;
        if (ev != null) {
            var target = ev.srcElement.textContent.trim();
            this.score = (target == this.pool[this.currentQuestion.index].answer) ? this.score + this.CORRECT : this.score + this.UNCORRECT;
        }
        //crea la nuova domanda
        this.it++;
        //? e qui lasciare solo l'uguaglianza
        if (this.it >= this.questionNumber) {
            clearInterval(this.timer);
            this.loading = false;
            this.toSend = { score: this.score, username: this.username };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__result_result__["a" /* ResultPage */], this.toSend);
        }
        else {
            setTimeout(function () {
                _this.createQuestion();
            }, 500);
        }
    };
    GamePage.prototype.restartTimerCounter = function () {
        this.seconds = 10;
        clearInterval(this.timer);
    };
    GamePage.prototype.decrementSeconds = function () {
        this.seconds--;
        console.log(this.seconds);
        if (this.seconds == 0) {
            console.log("sono arrivato a zero");
            this.restartTimerCounter();
            this.it++;
            this.createQuestion();
        }
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/game/game.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Game</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="container">\n  <div *ngIf= "loading">\n  <ion-card class="paddingCard">\n      <p>Tempo rimanente: {{this.seconds}}</p>\n\n    <ion-card-title>\n      <h1>{{currentQuestion.question}}</h1>\n    </ion-card-title>\n  </ion-card>\n  <div *ngFor="let c of currentQuestion.choice">\n    <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <!-- <button style="padding:10%" ion-button color="secondary" block (click)="answerToQuestion($event)" value={{c}}>{{c}}\n          </button>-->\n          <button class="test" type="submit" style="margin-top: 1%" ion-button color="secondary"\n            (click)="answerToQuestion($event)" block value="{{c}}">\n            {{c}}\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  </div>\n</div>\n<div *ngIf="!loading">\n  <p>Loading...</p>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/game/game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(58);
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
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toSend = {
            username: "",
            score: 0
        };
        this.toSend.score = navParams.get("score");
        this.toSend.username = navParams.get("username");
        /* firebase.database().ref('Users').orderByChild('email').equalTo(toSend.email).on('child_added', res => {
         });*/
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultPage');
    };
    ResultPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], this.toSend);
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/result/result.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>result</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n  <div>\n      <form class="box" action="index.html" method="post" (submit)="goToHome()" >\n          <h1>Il tuo punteggio finale è: {{this.toSend.score}}</h1>\n          <div class="divLogin">\n            <input type="submit" name="" value="Vai alla home">\n          </div>\n        </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/result/result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specific_info_specific_info__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListViewPage = /** @class */ (function () {
    function ListViewPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            username: "",
        };
        this.generalInfo = new Array();
        this.user.username = this.navParams.get('username');
        this.getGirlDetails();
    }
    ListViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DmPage');
    };
    ListViewPage.prototype.getGirlDetails = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('GeneralInfo').orderByChild('name').on('child_added', function (res) {
            //for( let girl of res.val())
            _this.generalInfo.push({ name: res.val().name, info: res.val().info, src: res.val().src });
            //this.generalInfo.push({name: girl.name , info: girl.info, src:girl.src});
        });
    };
    ListViewPage.prototype.onInput = function (ev) {
        /*const val = ev.target.value;
        let temp = this.dealerList;
        if (val && val.trim() != '' && this.dealerList.length == 0) {
          this.dealerList = temp.filter((item) => {
            return ((item.nome + " " + item.cognome).toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        } else if (val && val.trim() != '') {
          this.dealerList = this.dealerList.filter((item) => {
            return ((item.nome + " " + item.cognome).toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        } else {
          this.dealerList = this.dLTemp;
        }*/
    };
    ListViewPage.prototype.showInfo = function (girl) {
        this.toSend = {
            Girl: girl,
            Username: this.user.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__specific_info_specific_info__["a" /* SpecificInfoPage */], this.toSend);
    };
    ListViewPage.prototype.seeListEvent = function (dealer) {
        /*this.getAllEvents(dealer).then(res => {
          this.presentModal();
        })*/
    };
    ListViewPage.prototype.getAllEvents = function (dealer) {
        /* return new Promise((resolve, reject) => {
           firebase.database().ref("Users/" + dealer + "/EventiIscritto").on("child_added", res => {
             firebase.database().ref("Evento/" + res.val()).once("value", ev => {
               //alert(ev.val().data + " " + ev.val().locandina + " " + ev.val().luogo + " " + ev.val().nome + " " + ev.val().scadenza + " " + ev.val().speaker)
               firebase.database().ref("Evento/" + res.val() + "/trainer").once("value", tr => {
                 let element = {
                   data: ev.val().data, locandina: ev.val().locandina, luogo: ev.val().luogo, nome: ev.val().nome,
                   scadenza: ev.val().scadenza, speaker: ev.val().speaker, trainer: { email: tr.val().email, lavoraPer: tr.val().lavoraPer, username: tr.val().username }
                 };
                 firebase.storage().ref(element.locandina).getDownloadURL().then(res => {
                   element.locandina = res;
                   this.listEventOfDealer.push(element);
                   resolve(this.listEventOfDealer);
                 })
               });
             })
           })
         })*/
    };
    ListViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-view',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/list-view/list-view.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Information</ion-title>\n  </ion-navbar>\n\n  <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)">\n  </ion-searchbar>\n</ion-header>\n\n\n<ion-content padding class="container">\n  <ion-list>\n    <ion-item *ngFor ="let girl of generalInfo" (click)="showInfo(girl)">\n      <ion-row>\n        <div item-start>\n          <ion-icon style="font-size: 30px; margin-top: 50%" name="contact"></ion-icon>\n        </div>\n        <div  >\n         <h1 >{{girl.name}}</h1>\n          \n        </div>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/list-view/list-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListViewPage);
    return ListViewPage;
}());

//# sourceMappingURL=list-view.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(58);
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
 * Generated class for the SpecificInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecificInfoPage = /** @class */ (function () {
    function SpecificInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toSend = {
            username: ""
        };
        this.girl = this.navParams.get("Girl");
        this.nameGirl = this.girl.name;
        this.infoText = this.girl.info;
        this.toSend.username = this.navParams.get("Username");
    }
    SpecificInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecificInfoPage');
    };
    SpecificInfoPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], this.toSend);
    };
    SpecificInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-specific-info',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/specific-info/specific-info.html"*/'<!--\n  Generated template for the SpecificInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>SpecificInfo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="container">\n  <div>\n      <form class="box" action="index.html" method="post" (submit)="goToHome()" >\n        <h1>{{this.nameGirl}}</h1>\n          <p >{{this.infoText}}</p>\n          <div class="divLogin">\n            <input type="submit" name="" value="Vai alla home">\n          </div>\n        </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/specific-info/specific-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SpecificInfoPage);
    return SpecificInfoPage;
}());

//# sourceMappingURL=specific-info.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(events, navCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/');
        this.user = {
            email: "",
            password: "",
            username: ""
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (localStorage.getItem("email") !== null) {
            var toSend = {
                email: localStorage.getItem("email"),
                password: localStorage.getItem("password"),
                username: localStorage.getItem("username"),
            };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], toSend);
        }
        else {
            var toSend_1 = {
                email: this.user.email,
                password: this.user.password,
                username: this.user.username,
            };
            toSend_1.email = this.user.email.toLowerCase();
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(toSend_1.email, toSend_1.password)
                .then(function (res) { return __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('Users').orderByChild('email').equalTo(toSend_1.email).once('child_added', function (snapshot) {
                toSend_1.email = snapshot.val().email;
                toSend_1.password = snapshot.val().password;
                toSend_1.username = snapshot.val().username;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], toSend_1);
            }); })
                .catch(function (err) { return alert("Mail o password errate"); });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container">\n\n    <div>\n\n      </div>\n      <div class="imgApp"></div>\n  <form class="box" action="index.html" method="post">\n\n    <input type="text" name="" placeholder="email" [(ngModel)]="user.email" name="email">\n    <input type="password" name="" placeholder="Password" [(ngModel)]="user.password" name="password" pattern="[0-9]*">\n    <div class="divLogin">\n      <input type="submit" name="" value="Login" (click)="doLogin()">\n      <input type="submit" name="" value="Registrati" block (click)="goSignup()">\n      </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(58);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/');
        this.user = {
            email: "",
            username: "",
            password: "",
        };
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        var toSend = {
            email: this.user.email,
            username: this.user.username,
            password: this.user.password,
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(toSend.email, toSend.password)
            .then(function (user) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Users").push(toSend);
            localStorage.setItem("email", toSend.email);
            localStorage.setItem("password", toSend.password);
            localStorage.setItem("username", toSend.username);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], toSend);
        })
            .catch(function (err) { alert("Compila i campi correttamente"); });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Singup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container">\n  <form class="box" action="index.html" method="post" (submit)="doSignup()" >\n      <h1>Registrati</h1>\n      <input type="text" name="" placeholder="email" [(ngModel)]="user.email" name="email">\n      <input type="text" name="" placeholder="username" [(ngModel)]="user.username" name="username">\n\n      <input type="password" name="" placeholder="Password" [(ngModel)]="user.password" name="password" pattern="[0-9]*">\n      <div class="divLogin">\n        <input type="submit" name="" value="Registrati">\n      </div>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-question/add-question.module": [
		377,
		0
	],
	"../pages/game/game.module": [
		378,
		7
	],
	"../pages/list-view/list-view.module": [
		379,
		6
	],
	"../pages/lobby/lobby.module": [
		380,
		5
	],
	"../pages/login/login.module": [
		381,
		4
	],
	"../pages/result/result.module": [
		382,
		3
	],
	"../pages/signup/signup.module": [
		383,
		2
	],
	"../pages/specific-info/specific-info.module": [
		384,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LobbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the LobbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LobbyPage = /** @class */ (function () {
    function LobbyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LobbyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LobbyPage');
    };
    LobbyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lobby',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/lobby/lobby.html"*/'<!--\n  Generated template for the LobbyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>lobby</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/lobby/lobby.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LobbyPage);
    return LobbyPage;
}());

//# sourceMappingURL=lobby.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(272);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_lobby_lobby__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_view_list_view__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_specific_info_specific_info__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__credential_json__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__credential_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__credential_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_game_game__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_result_result__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {
    apiKey: __WEBPACK_IMPORTED_MODULE_13__credential_json__["apiKey"],
    authDomain: __WEBPACK_IMPORTED_MODULE_13__credential_json__["authDomain"],
    databaseURL: __WEBPACK_IMPORTED_MODULE_13__credential_json__["databaseURL"],
    projectId: __WEBPACK_IMPORTED_MODULE_13__credential_json__["projectId"],
    storageBucket: __WEBPACK_IMPORTED_MODULE_13__credential_json__["storageBucket"],
    messagingSenderId: __WEBPACK_IMPORTED_MODULE_13__credential_json__["messagingSenderId"]
};
__WEBPACK_IMPORTED_MODULE_8_firebase___default.a.initializeApp(config);
__WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database.enableLogging(true);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_view_list_view__["a" /* ListViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_specific_info_specific_info__["a" /* SpecificInfoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_lobby_lobby__["a" /* LobbyPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_result_result__["a" /* ResultPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-question/add-question.module#AddQuestionPageModule', name: 'AddQuestionPage', segment: 'add-question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-view/list-view.module#DmPageModule', name: 'ListViewPage', segment: 'list-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lobby/lobby.module#LobbyPageModule', name: 'LobbyPage', segment: 'lobby', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specific-info/specific-info.module#SpecificInfoPageModule', name: 'SpecificInfoPage', segment: 'specific-info', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_view_list_view__["a" /* ListViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_specific_info_specific_info__["a" /* SpecificInfoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_lobby_lobby__["a" /* LobbyPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_result_result__["a" /* ResultPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, sothe platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = {"apiKey":"AIzaSyDwu-STjJLemthvONG68cmtRoY3hh8_RjM","authDomain":"quizgamegirl-e0d99.firebaseapp.com","databaseURL":"https://quizgamegirl-e0d99.firebaseio.com","projectId":"quizgamegirl-e0d99","storageBucket":"quizgamegirl-e0d99.appspot.com","messagingSenderId":"748143241095"}

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_game__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_view_list_view__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParam) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.username = navParam.get("username");
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.username = this.navParam.get("username");
    };
    HomePage.prototype.generalInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_view_list_view__["a" /* ListViewPage */], this.navParam);
    };
    HomePage.prototype.newGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__game_game__["a" /* GamePage */], this.navParam);
    };
    HomePage.prototype.logout = function () {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("username");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="container">\n  <div>\n\n  </div>\n  <div class="imgApp"></div>\n  <div class="padding">\n    <div class="box" style="margin-top:15%">\n      <h4>Bentornato {{this.username}}</h4>\n      <button  class= "test" type = "submit"style="margin-top: 10%" ion-button color="secondary" (click)="newGame()" block>Nuova Partita</button>\n      <button class="test" type="submit" style="margin-top: 10%" ion-button color="secondary" (click)="generalInfo()" block>Ottieni\n        Informazioni</button>\n\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/francescovicidomini/git/Quiz-game-girl/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.js.map