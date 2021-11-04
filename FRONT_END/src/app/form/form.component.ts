import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchValidator } from '../tools/match-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {  

  @Output()
  mainForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    adresse: [''],
    codePostal: ['', Validators.pattern("[0-9]{5}")],
    ville: [''],
    telephone: [''],
    email: ['', Validators.email],
    civilite: ['Homme'],
    identifiant: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
    },{
    validator: MatchValidator('password', 'passwordConfirm')
  });

  @Output()
  showRecap: boolean = false;

  isComponentValid = true;

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    this.showRecap = true;
  }

  updateCivilite(value: string) {
    this.mainForm.get('civilite')?.setValue(value);
  }

  ngOnInit(): void {

  }

}
