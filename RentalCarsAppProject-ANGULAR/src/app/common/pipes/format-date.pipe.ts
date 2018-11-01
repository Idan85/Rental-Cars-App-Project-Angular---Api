import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe ({

    name: 'formatDate'
})

export class FormatDatePipe implements PipeTransform {

    transform ( value: string ): string {

        return moment ( value ).format ( 'Y/MM/DD' );
    }
}
