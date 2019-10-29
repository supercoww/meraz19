import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
	registerForm: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.registerForm = this.fb.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', Validators.required],
			whatsapp: '',
			address1: '',
			address2: '',
			college: [''],
			coupon: ''
		});
	}

	onSubmit(e: Event) {
		(e.target as HTMLFormElement).submit();
	}
}
