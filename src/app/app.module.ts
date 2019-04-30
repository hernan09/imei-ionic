import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule,  NavController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { UniqueDeviceID } from '@ionic-native/unique-device-id'
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { FormsModule        } from '@angular/forms';
import { HttpClientModule   } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'https://urgmaps-server.herokuapp.com', options: {} };

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { Network } from '@ionic-native/network';

import { Device } from '@ionic-native/device';

import { Uid } from '@ionic-native/uid';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzKnXC--BMt6cZq6_rZ5r5Fu7hIfT_Ui0',
    }),
    AgmDirectionModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    Diagnostic,
    LocationAccuracy,
    UniqueDeviceID,
    Network,
    Device,
    Uid,
    AndroidPermissions,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
