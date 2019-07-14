import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/classes/offer';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.scss']
})
export class OfferEditComponent implements OnInit {

  offerForm: FormGroup;

  public offer: Offer;

  isLoadingResults = false;

  _id: string;

  public offerData: Offer = {
    id: this.uniqueID(),
    url: '',
    precio_actual: '',
    precio_habitual: '',
    gastos_envio: '',
    titulo: '',
    descripcion: '',
    imagen: '',
    fecha: '',
    votos: 0,
    voteUp() {},
    voteDown() {}
  };

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    moment.locale('es');
    this.offerData.fecha = moment().format('LLL');
  }

  private uniqueID() {    const thisMS: number = Date.now();
                          const shake = Math.random();
                          let unique: string = Math.pow(thisMS, shake).toString();
                          unique = unique.toString().replace('.', thisMS.toString());
                          return unique; }

  ngOnInit() {
  }

  getOffer(id) {
    this.apiService.getOffer$(id)
      .subscribe(res => {
        const id = res.id;
        this.offerForm.setValue({
          url: this.offerData.url,
          titulo: this.offerData.url,
          descripcion: this.offerData.descripcion,
          imagen: this.offerData.imagen,
          precio_actual: this.offerData.precio_actual,
          precio_habitual: this.offerData.precio_habitual
        });
      },
      (err) => {console.log(err); });
  }

  /* onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.apiService.editOffer$(this.id, form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  } */

}
