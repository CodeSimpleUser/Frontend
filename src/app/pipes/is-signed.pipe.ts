import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSigned',
  standalone: true
})
export class IsSignedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
