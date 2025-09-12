import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rollFormat'
})
export class MyPipePipe implements PipeTransform {
  transform(pairs: number[][]): string {
    return pairs.map(pair => `[${pair[0]}/${pair[1]}]`).join('  ');
  }
}

