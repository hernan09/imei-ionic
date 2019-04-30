import {  NgForm  } from '@angular/forms';
import {  Component   } from '@angular/core';
import {  IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Observable  } from "rxjs/Observable";
import {  HttpClient  } from "@angular/common/http";
import {  HttpParams  } from "@angular/common/http";

import {  FormGroup, FormControl, Validators  } from '@angular/forms';

import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public page:any = HomePage;
  public animation:boolean;
  public showHeaderLogin:boolean =true;
  //form-data
  public name:string;
  public pass:string;
  public data:any;
  public loginForm:any;
  public messageValidationUser:string=null;
  public validation:boolean=false;
  public shwoLoading:boolean=false;
  public showInputAniamtion:boolean=false;
  public showInputAniamtionPass:boolean=false;

  // customersObservable : Observable<Customer[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {

    this.data = {
      name:undefined,
      password:undefined
    }

    this.loginForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      });
  }

  ionViewDidLoad() {
  }

  getDataLoginUser(){
    // this.navCtrl.push( HomePage );
    this.shwoLoading =true;
    this.httpClient.post("https://urg-backend.herokuapp.com/login",
    this.data)
     .subscribe(
         data => {
            this.validation = false;
            this.shwoLoading =false;
            this.messageValidationUser = null;

            let user = this.data.name;
            this.navCtrl.push( HomePage , {'user': user});
         },
         error => {
           this.shwoLoading =false;
           this.messageValidationUser = error.error.text;
           this.validation = true;
         }
     );
  }

  onSubmit(){

    this.data = {
      name:this.name,
      password:this.pass
    }
    // console.log(this.data);
    //
    // if(this.loginForm.value){
    // }
    this.getDataLoginUser();
  }

  inputAnimation(){

    this.showHeaderLogin = true;

    if(this.name !== undefined){
      if(this.name.length > 0)
          this.showInputAniamtion = true;
      else
          this.showInputAniamtion = false;
    }

    if(this.pass !== undefined){

      if(this.pass.length > 0)
          this.showInputAniamtionPass = true;
      else
          this.showInputAniamtionPass = false;
      }
    }

    focusShowHeaderLogin(data){
      if(data)
       this.showHeaderLogin = false;
    }

}
