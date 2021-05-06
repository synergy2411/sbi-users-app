import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : "countryCode"
})
export class CountryCodePipe implements PipeTransform {

  transform(value: number, ...code : Array<any>) : string{
    // console.log(code[1]);

    switch (code[0]) {
      case 'USA':
        return "+1 " + value;
      case 'AUS':
        return "+12 " + value;
      case 'EUR':
        return "+51 " + value;
      default:
        return "+91 " + value;
    }

  }
}
