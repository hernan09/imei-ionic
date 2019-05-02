import { Component } from '@angular/core';
import { NavController, AlertController, MenuController, Platform, NavParams } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Socket } from 'ng-socket-io';
import { Http } from '@angular/http';
import { Device } from '@ionic-native/device';
import { Uid } from '@ionic-native/uid';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public lat: Number;
  public lng: Number;
  public address: String;
  public idMobile: string = '';

  public origin: any;
  public destination: any;

  public listMovile:any;
  public getMovileId:string = '1';

  public updateGeolocation;
  public deviceID;

  public hiddenSection:boolean = false;

  //icon Maps
  public renderOptions:any;
  public markerOptions:any;

  public launchNavigator2: LaunchNavigator;

  public animationTitle:boolean = false;

  public showDataFinal:any;

  public dataEmergency:any;

  public user:any;

  public emergencyPosition:any = [];

  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    private launchNavigator: LaunchNavigator,
    private socket: Socket,
    private uniqueDeviceID: UniqueDeviceID,
    private diagnostic: Diagnostic,
    private alertCtrl: AlertController,
    private device: Device,
    public menuCtrl: MenuController,
    public platform: Platform,
    private uid: Uid,
    private androidPermissions: AndroidPermissions,
    public http : Http,
    private navParams:NavParams,
  ) {

    this.getOriginPosition();//setear desde el mobil - sección ubicación - Método de localización: Precisión alta
    // this.getDirection()
    // this.uniqueDeviceID.get().then((uuid: any) => {
    // console.log("uuid",uuid);
    //   this.deviceID = uuid;
    // })
    // .catch((error: any) => console.log("error",error));
    platform.ready().then(() => {
      console.log("user",this.navParams.get("user"));
      this.user = this.navParams.get("user");
      this.getGPSActive();
      this.getDataEmergency()
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

  animation() {
    setTimeout(() =>{
       this.getAnimation(false);
    }, 21000);
  }

  getAnimation(data){
    this.animationTitle = data
  }

  getOriginPosition(){
    this.geolocation.getCurrentPosition().then((resp) => {

      if(resp.coords.latitude)
        this.origin = { lat: resp.coords.latitude, lng: resp.coords.longitude };

    }).catch((error) => {
    })
  }

  getGPSActive(){

    let successCallback2 = (isAvailable) => {
      // alert(isAvailable);
       if(isAvailable){
       } else{

        let alert = this.alertCtrl.create({
          title: 'URG',
          subTitle: 'GPS Desactivado',
          buttons:[
            {
              text: 'Activar',
              role: 'Activar',
              handler: () => {
                this.diagnostic.switchToLocationSettings();
              }
            }]
        });
        alert.present();
       }
    };

    let errorCallback2 = (e) => console.error(e);

    this.diagnostic.isGpsLocationAvailable().then(successCallback2).catch(errorCallback2);
  }

  ionViewDidLoad(){
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

    this.updateGeolocation = setInterval( () => {
      this.geolocation.getCurrentPosition()
        .then((resp) => {
          this.socket.emit('UPDATE_GEOLOCATION', {
            id: this.deviceID,
            location: {
              lat: resp.coords.latitude,
              lng: resp.coords.longitude
            }
          })
        })
        .catch((error) => {
          console.log('Error getting location', error)
        })
    }, 10000)
  }

  ionViewWillLeave() {
    this.socket.disconnect()
    clearInterval(this.updateGeolocation)
  }

  setRoute(destination, address, id) {

    this.destination = destination;
    this.address = address;
    this.idMobile = id;
    this.animationTitle = true;
    console.log('this.idMobile',this.idMobile)
    this.animation();
  }

  showData(){
    let data = {
      imei: 123456,
      // latitude:-34.6037389,
      // longitude:-58.3837591,
      latitude:-34.6002054,
      longitude:-58.3871062,
      dataAndTime: '12:12:12',
      state:'Pending',//Processed
      address:'Av. Codova 1235'
    }
    this.http.post(
      // 'http://localhost:3200/emergencyPlace',data
      'https://urg-backend.herokuapp.com/emergencyPlace',data
    ).subscribe(
      res => {
       console.log('save data');
      },
      err => {
        console.log('ERROR',err);
      })
  }


  getUpdateState(platform){
    var destination = this.dataEmergency[this.dataEmergency.length -1];
    if (destination == [])alert("No tiene ningún destino");

    else {
      let data = {
        id:destination._id,
        imei: destination.imei,
        state:'Pending'//Processed
      }
      this.http.post(
        'https://urg-backend.herokuapp.com/putLocationEmergency',data
        // 'http://localhost:3200/putLocationEmergency',data
      ).subscribe(
        res => {
         console.log('update data');
         if(platform == "google") this.goToMaps();
         else this.goToWaze ();
        },
        err => {
          console.log('ERROR',err);
        })
    }
  }

  getDataEmergency() {
    this.http.post(
      // 'http://localhost:3200/getLocationEmergency',{}
      'https://urg-backend.herokuapp.com/getLocationEmergency',{}
    ).subscribe(
      res => {
       var data = res.json();
       this.filterImei(data);
      },
      err => {
        console.log('ERROR',err);
      });

      setTimeout(()=>{ this.getDataEmergency(); }, 10000);
  }

  filterImei(data) {
    this.emergencyPosition = [];
    for (let i = 0; i < data.length; i++) {
      if(data[i].imei == this.user) {
        this.emergencyPosition.push(data[i]);
      }
    }
    this.dataEmergency = this.emergencyPosition;
    console.log(this.dataEmergency[this.dataEmergency.length-1])
    if(this.dataEmergency[this.dataEmergency.length-1])
      this.address = this.dataEmergency[this.dataEmergency.length-1].address;
    // else alert('No tiene ningún destino');

    this.animationTitle = true;
  }

  goToMaps(){
    let destination = this.dataEmergency[this.dataEmergency.length -1];
    console.log("dataEmergency",this.dataEmergency);
    console.log("origin",destination);
    let options: LaunchNavigatorOptions = {
      // start: [-34.6037389, -58.3837591],
      start: [this.origin.lat, this.origin.lng],
      // launchModeGoogleMaps: 'turn-by-turn'
      app: this.launchNavigator.APP.GOOGLE_MAPS
    }
    this.launchNavigator.navigate([destination.latitude, destination.longitude], options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      )
  }

  goToWaze(){
    window.location.href="https://www.waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17";
  }

  getIconMaps(){
    this.renderOptions = {
      suppressMarkers: true,
    }

    this.markerOptions = {
      origin: {
          icon: '../../assets/imgs/origin2.png'
      },
      destination: {
          icon: '../../assets/imgs/destination2.png'
      },
    }
  }

  //menu
  // openMenu() {
  //   this.menuCtrl.open();
  // }
  //
  // closeMenu() {
  //   this.menuCtrl.close();
  // }
}
