import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Adress } from './models/adress';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  formulario: FormGroup;
  constructor( private formBuilder: FormBuilder, private http: HttpClient){}
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      endereco: this.formBuilder.group({
        numero: [null, Validators.required],
        cep: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
     
    });


  
  }

  OnSubmit() {
    console.log(this.formulario)
    this.formulario.reset();
  }

  searchCep(cep: any){
    var cep = cep.replace(/\D/g, '');
    if(cep !=""){
      var validaCep = /^[0-9]{8}$/;
      if(validaCep.test(cep)){
        this.http.get<Adress>('https://viacep.com.br/ws/'+cep+'/json').subscribe(data=> {
         this.formulario.patchValue ({
           endereco: {
             rua: data.logradouro,
             bairro: data.bairro,
             cidade: data.localidade,
             estado: data.uf
           }
         })
        })
      }
    }
  }
 
  
}
