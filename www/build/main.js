webpackJsonp([11],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_question_add_question__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
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
        this.username = localStorage.getItem("username");
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.username = localStorage.getItem("username");
    };
    HomePage.prototype.goToAddQuestion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__add_question_add_question__["a" /* AddQuestionPage */], this.navParam);
    };
    HomePage.prototype.newGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */]);
    };
    HomePage.prototype.logout = function () {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("username");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="container">  \n  <div>\n  </div>\n  <div class="imgApp"></div>\n  <div class="padding">\n    <div class="box" style="margin-top:15%">\n      <h4>Bentornato {{this.username}}</h4>\n      <button  class= "test" type = "submit"style="margin-top: 10%" ion-button color="secondary" (click)="newGame()" block>Nuova Partita</button>\n      <button class="test" type="submit" style="margin-top: 10%" ion-button color="secondary" (click)="goToAddQuestion()" block>Aggiungi Domanda</button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderBoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
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



var LeaderBoardPage = /** @class */ (function () {
    function LeaderBoardPage(navCtrl, navParams, cd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cd = cd;
        this.leaderBoard = new Array;
    }
    LeaderBoardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaderBoardPage');
        this.fillLeaderBoard();
    };
    LeaderBoardPage.prototype.fillLeaderBoard = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('Users').orderByChild('score').on('child_added', function (res) {
            //for( let girl of res.val())
            _this.leaderBoard.push({ username: res.val().username, score: res.val().score });
            _this.cd.detectChanges();
            //this.generalInfo.push({name: girl.name , info: girl.info, src:girl.src});
        });
        console.log(this.leaderBoard);
        //this.cd.detectChanges();
    };
    LeaderBoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leader-board',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/leader-board/leader-board.html"*/'<!--\n  Generated template for the LeaderBoardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>leaderBoard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor ="let user of leaderBoard?.slice().reverse()">\n      <ion-row>\n        <div>\n         <p>{{user.username}}</p>\n         <p>{{user.score}}</p>\n        </div>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/leader-board/leader-board.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], LeaderBoardPage);
    return LeaderBoardPage;
}());

//# sourceMappingURL=leader-board.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/about-us/about-us.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>Chi siamo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <img src="../../assets/imgs/logounisa.png">\n  </div>\n  <div class="developed">\n    <h4>Developed by:</h4>\n    <h5>Giammaria Giordano, Valeria Pontillo, Francesco Vicidomini</h5>\n  </div>\n  <div class="supervised">\n    <h4>Supervised by:</h4>\n    <h5>Prof.ssa Filomena Ferrucci</h5>\n    <img src="../../assets/imgs/profferrucci.jpg" style="width: 20%">\n  </div>\n  <div>\n    <p>Version 1.0</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/about-us/about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer_ngx__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddQuestionPage = /** @class */ (function () {
    function AddQuestionPage(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
    }
    AddQuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddQuestionPage');
    };
    AddQuestionPage.prototype.sendEmail = function () {
        if (this.question == undefined || this.realAns == undefined || this.ans1 == undefined ||
            this.ans2 == undefined || this.ans3 == undefined || this.soruce == undefined) {
            alert("Inserisci tutti i campi");
        }
        else {
            var email = {
                to: "fakeEmail@fake.com",
                subject: 'New question',
                body: 'question:' + this.question + "\n real answer: " + this.realAns + "\n risposta sbagliata:" + this.ans1 + "\n" +
                    "risposta sbagliata:" + this.ans2 + "\n rispsota sbagliata:" + this.ans3 + "\n fonte:" + this.soruce,
                isHtml: true
            };
            this.emailComposer.open(email);
        }
    };
    AddQuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-question',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/add-question/add-question.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Aggiungi una domanda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container">\n  <form class="box" action="index.html" method="post" (submit)="sendEmail()" >\n    <input type="text" name="" placeholder="Inserisci una domanda" [(ngModel)]="question" name="question">\n    <input type="text" name="" placeholder="Inserisci la risposta corretta" [(ngModel)]="realAns" name="realAns">\n    <input type="text" name="" placeholder="Inserisci una risposta sbagliata" [(ngModel)]="ans1" name="ans1">\n    <input type="text" name="" placeholder="Inserisci una risposta sbagliata" [(ngModel)]="ans2" name="ans2">\n    <input type="text" name="" placeholder="Inserisci una risposta sbagliata" [(ngModel)]="ans3" name="ans3">\n    <input type="text" name="" placeholder="Inserisci la fonte" [(ngModel)]="source" name="source">\n      <div class="divLogin">\n        <input type="submit" name="" value="Invia domanda">\n      </div>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/add-question/add-question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer_ngx__["a" /* EmailComposer */]])
    ], AddQuestionPage);
    return AddQuestionPage;
}());

//# sourceMappingURL=add-question.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result__ = __webpack_require__(146);
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
    function GamePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.CORRECT = 10;
        this.UNCORRECT = -5;
        this.loading = false;
        this.score = 0;
        this.it = 0;
        this.questionNumber = 4;
        this.arrayQuestions = new Array();
        this.pool = new Array();
        this.seconds = 10;
        //to use tab bar
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
        this.loadQuestion();
    };
    GamePage.prototype.ionViewDidEnter = function () {
        this.createQuestion();
    };
    //to remove tab bar
    GamePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    //to reset tab bar
    GamePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    GamePage.prototype.loadQuestion = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("Questions").once('value', function (res) {
            res.val().forEach(function (element) {
                _this.arrayQuestions.push({ question: element.question, real: element.realAnswer, ans: element.answer });
            });
            _this.createPool();
        });
    };
    GamePage.prototype.createPool = function () {
        this.mix(this.arrayQuestions.length, this.arrayQuestions);
        for (var i = 0; i < this.questionNumber; i++) {
            this.pool.push(this.arrayQuestions[i]);
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
        console.log("create question");
        this.loading = true;
        this.timer = setInterval(function () {
            _this.decrementSeconds(); // inizio a decrementarre i secondi
        }, 1000);
        if (this.it < this.questionNumber) {
            this.mix(4, this.arrayQuestions[this.it].ans);
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
            ;
            this.score = (target == this.arrayQuestions[this.it].real) ? this.score + this.CORRECT : this.score + this.UNCORRECT;
        }
        //crea la nuova domanda
        this.it++;
        //? e qui lasciare solo l'uguaglianza
        if (this.it >= this.questionNumber) {
            clearInterval(this.timer);
            this.loading = false;
            this.toSend = { score: this.score };
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
        //console.log(this.seconds);
        if (this.seconds == 0) {
            //console.log("sono arrivato a zero");
            this.restartTimerCounter();
            this.it++;
            this.createQuestion();
        }
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/game/game.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>Game</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="container">\n  <div *ngIf= "loading">\n  <ion-card class="paddingCard">\n      <p>Tempo rimanente: {{this.seconds}}</p>\n\n    <ion-card-title>\n      <h1>{{arrayQuestions[this.it].question}}</h1>\n    </ion-card-title>\n  </ion-card>\n  <div *ngFor="let c of arrayQuestions[this.it].ans">\n    <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <!-- <button style="padding:10%" ion-button color="secondary" block (click)="answerToQuestion($event)" value={{c}}>{{c}}\n          </button>-->\n          <button class="test" type="submit" style="margin-top: 1%" ion-button color="secondary"\n            (click)="answerToQuestion($event)" block value="{{c}}">\n            {{c}}\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  </div>\n</div>\n<div *ngIf="!loading">\n  <p>Loading...</p>\n</div>\n</ion-content>'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/game/game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
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
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scoreTotal = 0;
        this.score = navParams.get("score");
        this.email = localStorage.getItem("email");
        this.password = localStorage.getItem("password");
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.password)
            .then(function (res) { return __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('Users').orderByChild('email').equalTo(_this.email).once('child_added', function (v) {
            _this.scoreTotal = v.val().score + _this.score;
        }); });
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultPage');
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/result/result.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>result</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n  <div>\n      <form class="box" action="index.html" method="post" (submit)="goToHome()" >\n          <h1>Il tuo punteggio finale è: {{this.score}}</h1>\n          <h1>il tuo punteggio totale è: {{this.scoreTotal}}</h1>\n        </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/result/result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specific_info_specific_info__ = __webpack_require__(148);
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
    function ListViewPage(modalCtrl, navCtrl, navParams, cd) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cd = cd;
        this.searchTerm = "";
        this.user = {
            username: "",
        };
        this.generalInfo = new Array();
        this.setFilteredItems = function () {
            _this.resetChanges();
            _this.generalInfo = _this.generalInfo.filter(function (item) {
                return item.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
                //  return item.name.includes(this.searchTerm);
            });
            _this.cd.detectChanges();
        };
        this.resetChanges = function () {
            _this.generalInfo = _this.copyGeneralInfo;
            //return this.generalInfo;
        };
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
            _this.cd.detectChanges();
            //this.generalInfo.push({name: girl.name , info: girl.info, src:girl.src});
        });
        this.copyGeneralInfo = this.generalInfo;
        //this.cd.detectChanges();
    };
    ListViewPage.prototype.showInfo = function (girl) {
        this.toSend = {
            Girl: girl,
            Username: this.user.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__specific_info_specific_info__["a" /* SpecificInfoPage */], this.toSend);
    };
    ListViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-view',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/list-view/list-view.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>Information</ion-title>\n  \n  </ion-navbar>\n  <ion-searchbar (ionClear)="resetChanges()" (ionInput)="setFilteredItems()" \n    placeholder="Search" [(ngModel)]="searchTerm"></ion-searchbar>\n</ion-header>\n\n<ion-content padding class="container">\n  <ion-list>\n    <ion-item *ngFor ="let girl of generalInfo" (click)="showInfo(girl)">\n      <ion-row>\n        <div class="resizeImg">\n            <img src="{{girl.src}}">\n        </div>\n        <div class="centerText">\n         <h1>{{girl.name}}</h1>\n        </div>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/list-view/list-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], ListViewPage);
    return ListViewPage;
}());

//# sourceMappingURL=list-view.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        this.photo = this.girl.src;
        this.toSend.username = this.navParams.get("Username");
    }
    SpecificInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecificInfoPage');
    };
    SpecificInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-specific-info',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/specific-info/specific-info.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>SpecificInfo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="container">\n  <div>\n      <form class="box" action="index.html" method="post" (submit)="goToHome()" >\n        <img src={{this.photo}}>\n        <h1>{{this.nameGirl}}</h1>\n          <p >{{this.infoText}}</p>\n        </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/specific-info/specific-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SpecificInfoPage);
    return SpecificInfoPage;
}());

//# sourceMappingURL=specific-info.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(120);
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
            score: 0
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
            selector: 'page-signup',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Singup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container">\n  <form class="box" action="index.html" method="post" (submit)="doSignup()" >\n      <h1>Registrati</h1>\n      <input type="text" name="" placeholder="email" [(ngModel)]="user.email" name="email">\n      <input type="text" name="" placeholder="username" [(ngModel)]="user.username" name="username">\n\n      <input type="password" name="" placeholder="Password" [(ngModel)]="user.password" name="password" pattern="[0-9]*">\n      <div class="divLogin">\n        <input type="submit" name="" value="Registrati">\n      </div>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		382,
		10
	],
	"../pages/add-question/add-question.module": [
		383,
		9
	],
	"../pages/game/game.module": [
		384,
		8
	],
	"../pages/leader-board/leader-board.module": [
		385,
		7
	],
	"../pages/list-view/list-view.module": [
		386,
		6
	],
	"../pages/lobby/lobby.module": [
		387,
		5
	],
	"../pages/login/login.module": [
		388,
		4
	],
	"../pages/result/result.module": [
		389,
		3
	],
	"../pages/signup/signup.module": [
		390,
		2
	],
	"../pages/specific-info/specific-info.module": [
		391,
		1
	],
	"../pages/tabs/tabs.module": [
		392,
		0
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
webpackAsyncContext.id = 199;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LobbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-lobby',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/lobby/lobby.html"*/'<!--\n  Generated template for the LobbyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>lobby</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/lobby/lobby.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LobbyPage);
    return LobbyPage;
}());

//# sourceMappingURL=lobby.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(277);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_leader_board_leader_board__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_about_us_about_us__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_add_question_add_question__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_lobby_lobby__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_view_list_view__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_specific_info_specific_info__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__credential_json__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__credential_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__credential_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_game_game__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_result_result__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_email_composer_ngx__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var config = {
    apiKey: __WEBPACK_IMPORTED_MODULE_16__credential_json__["apiKey"],
    authDomain: __WEBPACK_IMPORTED_MODULE_16__credential_json__["authDomain"],
    databaseURL: __WEBPACK_IMPORTED_MODULE_16__credential_json__["databaseURL"],
    projectId: __WEBPACK_IMPORTED_MODULE_16__credential_json__["projectId"],
    storageBucket: __WEBPACK_IMPORTED_MODULE_16__credential_json__["storageBucket"],
    messagingSenderId: __WEBPACK_IMPORTED_MODULE_16__credential_json__["messagingSenderId"]
};
__WEBPACK_IMPORTED_MODULE_11_firebase___default.a.initializeApp(config);
__WEBPACK_IMPORTED_MODULE_11_firebase___default.a.database.enableLogging(true);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_view_list_view__["a" /* ListViewPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_specific_info_specific_info__["a" /* SpecificInfoPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_lobby_lobby__["a" /* LobbyPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_add_question_add_question__["a" /* AddQuestionPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_leader_board_leader_board__["a" /* LeaderBoardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-question/add-question.module#AddQuestionPageModule', name: 'AddQuestionPage', segment: 'add-question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leader-board/leader-board.module#LeaderBoardPageModule', name: 'LeaderBoardPage', segment: 'leader-board', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-view/list-view.module#DmPageModule', name: 'ListViewPage', segment: 'list-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lobby/lobby.module#LobbyPageModule', name: 'LobbyPage', segment: 'lobby', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specific-info/specific-info.module#SpecificInfoPageModule', name: 'SpecificInfoPage', segment: 'specific-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_view_list_view__["a" /* ListViewPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_specific_info_specific_info__["a" /* SpecificInfoPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_lobby_lobby__["a" /* LobbyPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_add_question_add_question__["a" /* AddQuestionPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_leader_board_leader_board__["a" /* LeaderBoardPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_email_composer_ngx__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(77);
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
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, sothe platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (localStorage.getItem("email") !== null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = {"apiKey":"AIzaSyDwu-STjJLemthvONG68cmtRoY3hh8_RjM","authDomain":"quizgamegirl-e0d99.firebaseapp.com","databaseURL":"https://quizgamegirl-e0d99.firebaseio.com","projectId":"quizgamegirl-e0d99","storageBucket":"quizgamegirl-e0d99.appspot.com","messagingSenderId":"748143241095"}

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(149);
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
        this.ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('user/');
        this.user = {
            email: "",
            password: "",
            username: ""
        };
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var toSend = {
            email: this.user.email,
            password: this.user.password,
            username: this.user.username,
        };
        toSend.email = this.user.email.toLowerCase();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(toSend.email, toSend.password)
            .then(function (res) { return __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('Users').orderByChild('email').equalTo(toSend.email).once('child_added', function (snapshot) {
            toSend.email = snapshot.val().email;
            toSend.password = snapshot.val().password;
            toSend.username = snapshot.val().username;
            localStorage.setItem("email", toSend.email);
            localStorage.setItem("password", toSend.password);
            localStorage.setItem("username", toSend.username);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], toSend);
        }); })
            .catch(function (err) { return alert("Mail o password errate"); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container">\n\n    <div>\n\n      </div>\n      <div class="imgApp"></div>\n  <form class="box" action="index.html" method="post">\n\n    <input type="text" name="" placeholder="email" [(ngModel)]="user.email" name="email">\n    <input type="password" name="" placeholder="Password" [(ngModel)]="user.password" name="password" pattern="[0-9]*">\n    <div class="divLogin">\n      <input type="submit" name="" value="Login" (click)="doLogin()">\n      <input type="submit" name="" value="Registrati" block (click)="goSignup()">\n      </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//}
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__leader_board_leader_board__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_us_about_us__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_view_list_view__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    //aggiungere altre root
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.home = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.list = __WEBPACK_IMPORTED_MODULE_3__list_view_list_view__["a" /* ListViewPage */];
        this.leaderboard = __WEBPACK_IMPORTED_MODULE_0__leader_board_leader_board__["a" /* LeaderBoardPage */];
        this.about = __WEBPACK_IMPORTED_MODULE_1__about_us_about_us__["a" /* AboutUsPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/tabs/tabs.html"*/'<ion-tabs mode="md" tabsHighlight="true">\n  <ion-tab [root]="home" tabTitle="Home" tabIcon="md-home"></ion-tab>\n  <ion-tab [root]="list" tabTitle="Informazioni" tabIcon="md-information-circle" ></ion-tab>\n  <ion-tab [root]= "leaderboard" tabTitle="Classifica" tabIcon="md-ribbon"></ion-tab>\n  <ion-tab [root]="about" tabTitle="Chi siamo" tabIcon="md-contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/broke31/Scrivania/Quiz-game-girl/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.js.map