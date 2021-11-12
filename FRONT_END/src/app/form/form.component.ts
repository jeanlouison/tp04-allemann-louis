import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Adresse } from 'src/shared/models/adresse';
import { AddressState } from 'src/shared/states/address-state';
import { MatchValidator } from '../tools/match-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {  

  @Input()
  selectedAdresse: Adresse = new Adresse();

  @Output()
  mainForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    adresse: [new Adresse({
      adresse: this.selectedAdresse.adresse,
      codePostal: this.selectedAdresse.codePostal,
      ville: this.selectedAdresse.ville
    })],
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

  @Select(AddressState.getListeAdresses)
  addresses$!: Observable<Adresse[]>;

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    this.showRecap = true;
  }

  updateCivilite(value: string) {
    this.mainForm.get('civilite')?.setValue(value);
  }

  saveFormData() {
    let saveData = JSON.parse(JSON.stringify(this.mainForm.value));
    saveData['adresse'] = JSON.parse(JSON.stringify(this.selectedAdresse));
    localStorage.setItem('FormData', JSON.stringify(saveData));
  }

  restoreFormData() {
    let storageData = localStorage.getItem('FormData');
    if (storageData != null) {
      this.mainForm.patchValue(JSON.parse(storageData));
    }
    this.mainForm.get('adresse')?.patchValue(this.selectedAdresse);
    localStorage.removeItem('FormData');
  }

  ngOnInit(): void {
    this.restoreFormData();
  }

}
