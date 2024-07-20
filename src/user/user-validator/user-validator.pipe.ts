import { ArgumentMetadata, HttpException, HttpStatus, Injectable, ParseIntPipe, PipeTransform } from '@nestjs/common';

@Injectable()
export class UserValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //console.log(value);
    
    const ageNumber = parseInt(value.age.toString(), 10);

    if(isNaN(ageNumber)){
      throw new HttpException('La edad debe ser un numero', HttpStatus.BAD_REQUEST);
    }

    return {...value, age: ageNumber}
  }
}
