import { Component } from '@angular/core';
import { UserLogin } from '../../services/User.login';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'



@Component({
    templateUrl: './LoginCad.page.html',
    styleUrls: ['./Login.page.css'],
})

export class LoginCad {

    userForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl(['', Validators.required]),
        passwordConfirm: new FormControl(['', Validators.required])
    });

    private loading: boolean = false;

    constructor(
        private userlogin: UserLogin,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {


    }





    onSubmit() {
        var self = this;
        var dados = {
            ...this.userForm.value
        };

        this.userlogin.cadastrar(dados.email, dados.password,
            function (ret) {
                self.router.navigate(['list']);
            },
            function (dados) {
                alert("Erro ao cadastrar");
            });

    }

    login() {
        this.router.navigate(["/"]);
    }
}

