import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EditableInputComponent } from './editable-input/editable-input.component';
import { EditableSelectComponent } from './editable-select/editable-select.component';
import { EditableImageComponent } from './editable-image/editable-image.component';
import { ImageUploadModule } from '../image-upload/image-upload.module';

@NgModule ({

    imports: [

        CommonModule,

        FormsModule,

        ImageUploadModule
    ],

    exports: [

    EditableInputComponent,

    EditableSelectComponent,

    EditableImageComponent,

    ],

    declarations: [

    EditableInputComponent,

    EditableSelectComponent,

    EditableImageComponent,

    ]
})

export class EditableModule {}
