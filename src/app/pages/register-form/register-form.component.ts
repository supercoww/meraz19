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
			name: ['name', Validators.required],
			email: ['name@iitbhilai.ac.in', [Validators.required, Validators.email]],
			phone: ['1234567890', Validators.required],
			whatsapp: '1234567890',
			address1: 'Add1',
			address2: 'Add2',
			college: ['IIT Bhilai'],
			comment: 'Some Comment'
		});
	}

	onSubmit(e: Event) {
		(e.target as HTMLFormElement).submit();
	}
}
