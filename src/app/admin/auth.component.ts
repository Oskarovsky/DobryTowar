import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public username: String;
    public password: String;
    public errorMessage: String;

    constructor(private router: Router) { }

    authenticate(form: NgForm) {
        if (form.valid) {
            //performing authentication
            this.router.navigateByUrl("/admin/main");
        } else {
            this.errorMessage = "Form data invalid";
        }
    }
}