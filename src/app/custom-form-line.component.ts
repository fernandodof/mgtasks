import { Component } from '@angular/core';
import { FormLineComponent } from "angularm";

@Component({
    selector: 'div [mgFormLine]',
    template:
        `<input
          type="{{configuration.inputType}}"
          id="{{propertyType.entityType.singular}}_{{propertyType.name}}"
          placeholder="{{propertyType.name | titleCase}}"
          [formControl]="mgFormControl"
          class="w3-input">
        <label for="{{propertyType.entityType.singular}}_{{propertyType.name}}"
            >{{propertyType.name | titleCase}}</label>
        <br>`,
})
export class CustomFormLineComponent extends FormLineComponent { }
