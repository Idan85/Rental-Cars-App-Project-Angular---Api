import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe ({

    name: 'upper'
})

export class UpeercasePipe implements PipeTransform {

    transform ( value: string ): string {

        const transformedValue = value.toUpperCase();

        return transformedValue;
    }
}
