import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app.pug",
    styleUrls: [ "./app.scss" ]
})
export class AppComponent {
    user : any = {};
    showError = false;
    private successMessage = '';
    private errorMessage = '';
    constructor(){ }

    signin(user){
        if(user.username === 'xyz' && user.password === 'xyzabc'){
            this.successMessage = 'SignIn successful.';
            this.errorMessage = '';
        }else{
            this.showError = true;
            this.errorMessage = 'Please enter valid username/password';
            this.successMessage = '';
        }

    }

    cancel(){
            this.user = {};
            this.showError = false;
            this.successMessage = '';
            this.errorMessage = '';
    }

}