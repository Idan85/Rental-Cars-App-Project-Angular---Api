import { Component, Input } from '@angular/core';

import { EditableComponent } from '../editable-components';

@Component({
  selector: 'app-editable-select',
  templateUrl: './editable-select.component.html',
  styleUrls: ['./editable-select.component.css']
})
export class EditableSelectComponent extends EditableComponent {

  @Input () public options: any [];

}
