webpackJsonp([1],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(256);
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
    // customersObservable : Observable<Customer[]>;
    function LoginPage(navCtrl, navParams, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.page = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.showHeaderLogin = true;
        this.messageValidationUser = null;
        this.validation = false;
        this.shwoLoading = false;
        this.showInputAniamtion = false;
        this.showInputAniamtionPass = false;
        this.data = {
            name: undefined,
            password: undefined
        };
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            lastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.getDataLoginUser = function () {
        var _this = this;
        // this.navCtrl.push( HomePage );
        this.shwoLoading = true;
        this.httpClient.post("https://urg-backend.herokuapp.com/login", this.data)
            .subscribe(function (data) {
            _this.validation = false;
            _this.shwoLoading = false;
            _this.messageValidationUser = null;
            var user = _this.data.name;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { 'user': user });
        }, function (error) {
            _this.shwoLoading = false;
            _this.messageValidationUser = error.error.text;
            _this.validation = true;
        });
    };
    LoginPage.prototype.onSubmit = function () {
        this.data = {
            name: this.name,
            password: this.pass
        };
        // console.log(this.data);
        //
        // if(this.loginForm.value){
        // }
        this.getDataLoginUser();
    };
    LoginPage.prototype.inputAnimation = function () {
        this.showHeaderLogin = true;
        if (this.name !== undefined) {
            if (this.name.length > 0)
                this.showInputAniamtion = true;
            else
                this.showInputAniamtion = false;
        }
        if (this.pass !== undefined) {
            if (this.pass.length > 0)
                this.showInputAniamtionPass = true;
            else
                this.showInputAniamtionPass = false;
        }
    };
    LoginPage.prototype.focusShowHeaderLogin = function (data) {
        if (data)
            this.showHeaderLogin = false;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/nicolas-atorino/Desktop/urgMaps/FrontEnd/src/pages/login/login.html"*/'<div class="login" >\n  <div class="contain-logo"  [ngClass]="showHeaderLogin? \'\' : \'hide-login\'" >\n\n    <div class="logo" >\n      <span>MAPS</span>\n    </div>\n\n  </div>\n\n  <form  [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="container-form" novalidate>\n\n    <!-- <input name="userName" type="text" [(ngModel)]="name" formControlName="firstName" required> --> \n    <div>\n      <span class="input input--haruki" [ngClass]="showInputAniamtion? \'animation-input-data\': \'animation-input-data-null\'">\n        <ion-icon name="contact"></ion-icon>\n\n        <input class="input__field input__field--haruki " name="userName" type="text" id="input-1" (focus)="focusShowHeaderLogin(showHeaderLogin)" (blur)="inputAnimation()"  [(ngModel)]="name"   formControlName="firstName" required/>\n\n        <label class="input__label input__label--haruki" for="input-1">\n          <span class="input__label-content input__label-content--haruki">Usuario</span>\n        </label>\n      </span>\n    </div>\n\n    <div>\n      <span class="input input--haruki" [ngClass]="showInputAniamtionPass? \'animation-input-data\': \'animation-input-data-null\'">\n        <ion-icon ios="ios-lock" md="md-lock"></ion-icon>\n\n        <input class="input__field input__field--haruki " name="password" type="password" id="input-2" (focus)="focusShowHeaderLogin(showHeaderLogin)" (blur)="inputAnimation()"  [(ngModel)]="pass" formControlName="lastName" required/>\n\n        <label class="input__label input__label--haruki" for="input-2">\n          <span class="input__label-content input__label-content--haruki">Contraseña</span>\n        </label>\n      </span>\n    </div>\n\n    <p [ngClass]="validation? \'add-height-message\': \'\'" class="messageValidation">{{messageValidationUser}}</p>\n\n    <div class="box-btn">\n      <button type="submit" name="button" [disabled]="loginForm.status === \'INVALID\'" >INICIAR</button>\n    </div>\n\n  </form>\n</div>\n\n<div class="loader"  [hidden]="!shwoLoading">\n  <div class="container-loading">\n\n    <h1>\n      <span class="green">U</span><span class="cian">R</span><span class="blue">G</span>\n    </h1>\n\n    <h5>Loading</h5>\n\n    <div class="background"></div>\n\n  </div>\n</div>\n'/*ion-inline-end:"/home/nicolas-atorino/Desktop/urgMaps/FrontEnd/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 212:
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
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		553,
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
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_uid__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_android_permissions__ = __webpack_require__(279);
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
    function HomePage(navCtrl, geolocation, launchNavigator, socket, uniqueDeviceID, diagnostic, alertCtrl, device, menuCtrl, platform, uid, androidPermissions, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.launchNavigator = launchNavigator;
        this.socket = socket;
        this.uniqueDeviceID = uniqueDeviceID;
        this.diagnostic = diagnostic;
        this.alertCtrl = alertCtrl;
        this.device = device;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.http = http;
        this.navParams = navParams;
        this.idMobile = '';
        this.getMovileId = '1';
        this.hiddenSection = false;
        this.animationTitle = false;
        this.emergencyPosition = [];
        this.getOriginPosition(); //setear desde el mobil - sección ubicación - Método de localización: Precisión alta
        // this.getDirection()
        // this.uniqueDeviceID.get().then((uuid: any) => {
        // console.log("uuid",uuid);
        //   this.deviceID = uuid;
        // })
        // .catch((error: any) => console.log("error",error));
        platform.ready().then(function () {
            console.log("user", _this.navParams.get("user"));
            _this.user = _this.navParams.get("user");
            _this.getGPSActive();
            _this.getDataEmergency();
        });
        // this.getIconMaps();
    }
    // async getImei() {
    //  const { hasPermission } = await this.androidPermissions.checkPermission(
    //    this.androidPermissions.PERMISSION.READ_PHONE_STATE
    //  );
    //  // console.log("permision",!hasPermission)
    //  if (hasPermission) {
    //    const result = await this.androidPermissions.requestPermission(
    //      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    //    );
    //
    //    if (!result.hasPermission) {
    //      throw new Error('Permissions required');
    //    }
    //
    //    // ok, a user gave us permission, we can get him identifiers after restart app
    //    return;
    //  }
    //
    //   return this.uid.IMEI
    // }
    // getImei() {
    //
    //   const  hasPermission  =  this.androidPermissions.checkPermission(
    //     this.androidPermissions.PERMISSION.READ_PHONE_STATE
    //   );
    //
    //   if (!hasPermission) {
    //     var result =  this.androidPermissions.requestPermission(
    //       this.androidPermissions.PERMISSION.READ_PHONE_STATE
    //     );
    //
    //     // if (!result.hasPermission) {
    //     //   throw new Error('Permissions required');
    //     // }
    //
    //     // ok, a user gave us permission, we can get him identifiers after restart app
    //     return;
    //   }
    //
    //    return this.uid.IMEI
    //   }
    HomePage.prototype.animation = function () {
        var _this = this;
        setTimeout(function () {
            _this.getAnimation(false);
        }, 21000);
    };
    HomePage.prototype.getAnimation = function (data) {
        this.animationTitle = data;
    };
    HomePage.prototype.getOriginPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            if (resp.coords.latitude)
                _this.origin = { lat: resp.coords.latitude, lng: resp.coords.longitude };
        }).catch(function (error) {
        });
    };
    HomePage.prototype.getGPSActive = function () {
        var _this = this;
        var successCallback2 = function (isAvailable) {
            // alert(isAvailable);
            if (isAvailable) {
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'URG',
                    subTitle: 'GPS Desactivado',
                    buttons: [
                        {
                            text: 'Activar',
                            role: 'Activar',
                            handler: function () {
                                _this.diagnostic.switchToLocationSettings();
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        };
        var errorCallback2 = function (e) { return console.error(e); };
        this.diagnostic.isGpsLocationAvailable().then(successCallback2).catch(errorCallback2);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        // var  IMEI = this.getImei();
        // this.deviceID = IMEI;
        // console.log('IMEI',this.deviceID);
        // this.socket.connect()
        // this.socket.emit('JOIN_ROOM', 'AMBULANCIAS')
        // this.socket.on('NEW_EMERGENCY', (location) => {
        //   console.log('location',location);
        //   console.log('IMEI',IMEI);
        //   this.showDataFinal = location;
        //   this.hiddenSection = true;
        //   this.setRoute({ lat: location.lat, lng: location.lng }, location.nameAddress , location.IMEI)
        // })
        var _this = this;
        this.updateGeolocation = setInterval(function () {
            _this.geolocation.getCurrentPosition()
                .then(function (resp) {
                _this.socket.emit('UPDATE_GEOLOCATION', {
                    id: _this.deviceID,
                    location: {
                        lat: resp.coords.latitude,
                        lng: resp.coords.longitude
                    }
                });
            })
                .catch(function (error) {
                console.log('Error getting location', error);
            });
        }, 10000);
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
        clearInterval(this.updateGeolocation);
    };
    HomePage.prototype.setRoute = function (destination, address, id) {
        this.destination = destination;
        this.address = address;
        this.idMobile = id;
        this.animationTitle = true;
        console.log('this.idMobile', this.idMobile);
        this.animation();
    };
    HomePage.prototype.showData = function () {
        var data = {
            imei: 123456,
            // latitude:-34.6037389,
            // longitude:-58.3837591,
            latitude: -34.6002054,
            longitude: -58.3871062,
            dataAndTime: '12:12:12',
            state: 'Pending',
            address: 'Av. Codova 1235'
        };
        this.http.post(
        // 'http://localhost:3200/emergencyPlace',data
        'https://urg-backend.herokuapp.com/emergencyPlace', data).subscribe(function (res) {
            console.log('save data');
        }, function (err) {
            console.log('ERROR', err);
        });
    };
    HomePage.prototype.getUpdateState = function (platform) {
        var _this = this;
        var destination = this.dataEmergency[this.dataEmergency.length - 1];
        if (destination == [])
            alert("No tiene ningún destino");
        else {
            var data = {
                id: destination._id,
                imei: destination.imei,
                state: 'Pending' //Processed
            };
            this.http.post('https://urg-backend.herokuapp.com/putLocationEmergency', data
            // 'http://localhost:3200/putLocationEmergency',data
            ).subscribe(function (res) {
                console.log('update data');
                if (platform == "google")
                    _this.goToMaps();
                else
                    _this.goToWaze();
            }, function (err) {
                console.log('ERROR', err);
            });
        }
    };
    HomePage.prototype.getDataEmergency = function () {
        var _this = this;
        this.http.post(
        // 'http://localhost:3200/getLocationEmergency',{}
        'https://urg-backend.herokuapp.com/getLocationEmergency', {}).subscribe(function (res) {
            var data = res.json();
            _this.filterImei(data);
        }, function (err) {
            console.log('ERROR', err);
        });
        setTimeout(function () { _this.getDataEmergency(); }, 10000);
    };
    HomePage.prototype.filterImei = function (data) {
        this.emergencyPosition = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].imei == this.user) {
                this.emergencyPosition.push(data[i]);
            }
        }
        this.dataEmergency = this.emergencyPosition;
        console.log(this.dataEmergency[this.dataEmergency.length - 1]);
        if (this.dataEmergency[this.dataEmergency.length - 1])
            this.address = this.dataEmergency[this.dataEmergency.length - 1].address;
        // else alert('No tiene ningún destino');
        this.animationTitle = true;
    };
    HomePage.prototype.goToMaps = function () {
        var destination = this.dataEmergency[this.dataEmergency.length - 1];
        console.log("dataEmergency", this.dataEmergency);
        console.log("origin", destination);
        var options = {
            // start: [-34.6037389, -58.3837591],
            start: [this.origin.lat, this.origin.lng],
            // launchModeGoogleMaps: 'turn-by-turn'
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate([destination.latitude, destination.longitude], options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    HomePage.prototype.goToWaze = function () {
        window.location.href = "https://www.waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17";
    };
    HomePage.prototype.getIconMaps = function () {
        this.renderOptions = {
            suppressMarkers: true,
        };
        this.markerOptions = {
            origin: {
                icon: '../../assets/imgs/origin2.png'
            },
            destination: {
                icon: '../../assets/imgs/destination2.png'
            },
        };
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nicolas-atorino/Desktop/urgMaps/FrontEnd/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n\n    <ion-title>\n      URG Maps\n    </ion-title>\n\n    <button ion-button  menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-content padding  #mycontent [ngClass]="{\'ion-content\': idMobile == \'\'}"> -->\n<ion-content padding  #mycontent >\n  <!-- <div *ngIf="idMobile === deviceID" > -->\n  <!-- <div *ngIf="idMobile != \'\'" > -->\n  <div>\n\n      <div class="address" [ngClass]="animationTitle? \'fadeOut\' : \'stop-animation\'">\n        {{address}}\n\n      </div>\n\n      <!-- <agm-map [latitude]="lat" [longitude]="lng">\n\n        <agm-direction\n          [origin]="origin"\n          [destination]="destination"\n\n          [renderOptions]="renderOptions"\n          [markerOptions]="markerOptions"\n        >\n        </agm-direction>\n\n      </agm-map> -->\n\n      <!-- <button (click)="getUpdateState()">IR con Google Maps <div class="position-icon gm-icon"></div></button> -->\n      <button (click)="getUpdateState(\'google\')">IR con Google Maps <div class="position-icon gm-icon"></div></button>\n      <button (click)="getUpdateState(\'waze\')">IR con WAZE <div class="position-icon waze-icon"></div></button>\n      <!-- <button (click)="showData()">Mostrar Datos </button> -->\n  </div>\n\n  <!-- <div *ngIf="idMobile !== deviceID" class="noLocation"> -->\n  <!-- <div *ngIf="idMobile == \'\'" class="noLocation">\n\n    <span>Usted no </span><br>\n    <span>posee</span><br>\n    <span>Notificaciones</span>\n\n    <div class="notAdress"></div>\n\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/home/nicolas-atorino/Desktop/urgMaps/FrontEnd/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_uid__["a" /* Uid */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(464);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_agm_direction__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_location_accuracy__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_socket_io__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_device__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_uid__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_android_permissions__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var config = { url: 'https://urgmaps-server.herokuapp.com', options: {} };







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCzKnXC--BMt6cZq6_rZ5r5Fu7hIfT_Ui0',
                }),
                __WEBPACK_IMPORTED_MODULE_6_agm_direction__["a" /* AgmDirectionModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_uid__["a" /* Uid */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(172);
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
    function MyApp(platform, statusBar, splashScreen, network, toastCtrl, menuCtrl) {
        var _this = this;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.checkConnection();
            _this.enableAuthenticatedMenu();
            // this.getDataLoginUser()
            _this.pages = [
                { title: 'Cerrar Sesión', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
            ];
        });
    }
    MyApp.prototype.checkConnection = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function (_) {
            _this.toastNotificationDisconnected();
        });
        this.network.onConnect().subscribe(function (_) {
            _this.toastNotificationConnect();
        });
    };
    MyApp.prototype.toastNotificationConnect = function () {
        var toast = this.toastCtrl.create({
            message: 'Conectado',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    MyApp.prototype.toastNotificationDisconnected = function () {
        var toast = this.toastCtrl.create({
            message: 'Falta conexión a Internet',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    MyApp.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MyApp.prototype.enableAuthenticatedMenu = function () {
        this.menuCtrl.enable(true, 'authenticated');
        this.menuCtrl.enable(false, 'unauthenticated');
    };
    // getDataLoginUser(){
    //   console.log("lgin data",LoginPage)
    //   // this.nav.popToRoot ();
    //   // this.nav.setRoot( LoginPage);
    //   // this.rootPage = LoginPage;
    //   // this.nav.setPages( )
    //   // this.nav.push( LoginPage );
    // }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/nicolas-atorino/Desktop/urgMaps/FrontEnd/src/app/app.html"*/'<ion-menu persistent = \'true\' id=\'menu\' side="right"  [content]="mycontent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="menu">\n    <ion-list>\n      <!-- <ion-item (click)="getDataLoginUser()" menuClose >Cerrar Sesión</ion-item> -->\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" >\n        {{p.title}}\n      </button>\n\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nicolas-atorino/Desktop/urgMaps/FrontEnd/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map