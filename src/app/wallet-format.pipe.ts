import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'WalletFormatPipe'})
export class WalletFormatPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 3) + '...' + value.slice(-4);
  }
}