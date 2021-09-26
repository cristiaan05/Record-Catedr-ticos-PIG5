import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from '../models/login';
import { GLOBAL } from '../services/global.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
    // @ViewChild('formAddTeam') formValuesAddTeam;
  // @ViewChild('formUpdateTeam') formValuesUpdateTeam;
  // @ViewChild('formMatch') formValuesMatch;
  public url;
  public status:string;
  public loginModel:Login


  constructor(private _loginService:LoginService) {
    this.status="";
    this.url=GLOBAL.url
    this.loginModel=new Login(0,"");
   }

  ngOnInit(): void {
  }

  login(){
    this._loginService.login(this.loginModel).subscribe(
      response=>{
      if(response.login){
        console.log(response.league);
        // this.formValuesLogin.resetForm();
        this.status='ok'
      }
    },
    error=>{
      var errorMessage=<any>error;
      console.log(errorMessage);
      if (errorMessage !=null) {
        // this.status='error';
      }
    }  
    )
  }

}
