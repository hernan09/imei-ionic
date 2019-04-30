import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = LoginPage;
  toast :any;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor( platform: Platform, statusBar: StatusBar,  splashScreen: SplashScreen,private network:Network, private toastCtrl: ToastController, public menuCtrl: MenuController)    {

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
      this.checkConnection();
      this.enableAuthenticatedMenu();
      // this.getDataLoginUser()
      this.pages = [
        { title: 'Cerrar Sesión', component: LoginPage }
      ];
    });
  }

  public checkConnection() {

      this.network.onDisconnect().subscribe(_ => {
        this.toastNotificationDisconnected();
      })

      this.network.onConnect().subscribe(_ => {
        this.toastNotificationConnect();
      })

    }

    toastNotificationConnect(){
      let toast = this.toastCtrl.create({
        message: 'Conectado',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }

    toastNotificationDisconnected(){

      let toast = this.toastCtrl.create({
        message: 'Falta conexión a Internet',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }

    openMenu() {
      this.menuCtrl.open();
    }

    enableAuthenticatedMenu() {
      this.menuCtrl.enable(true, 'authenticated');
      this.menuCtrl.enable(false, 'unauthenticated');
    }

    // getDataLoginUser(){
    //   console.log("lgin data",LoginPage)
    //   // this.nav.popToRoot ();
    //   // this.nav.setRoot( LoginPage);
    //   // this.rootPage = LoginPage;
    //   // this.nav.setPages( )
    //   // this.nav.push( LoginPage );
    // }

    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }
}
