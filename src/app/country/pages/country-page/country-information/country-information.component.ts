import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe, UpperCasePipe, DecimalPipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<Country>();
}
