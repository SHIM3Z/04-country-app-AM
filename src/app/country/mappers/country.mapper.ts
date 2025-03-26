import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  static mapRESTCountryToCountry(item: RESTCountry): Country {
    return {
      cca2: item.cca2,
      flag: item.flag,
      flagSvg: item.flags.svg,
      name: item.translations['spa'].common ?? 'No Spanish Name',
      capital: item.capital.join(', '),
      population: item.population,
    };
  }

  static mapRESTCountryArrayToCountryArray(items: RESTCountry[]): Country[] {
    return items.map(this.mapRESTCountryToCountry);
  }
}
