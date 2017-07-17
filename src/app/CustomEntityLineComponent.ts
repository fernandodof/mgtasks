import { Component } from '@angular/core';
import { EntityLineComponent } from "angularm";

@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<td *ngFor="let property of entity.mountProperties()" class="w3-center">{{property.value}}</td>
         <td> <a href="#" (click)="show()">Show</a></td>
         <td> <a href="#" (click)="edit()">Edit</a></td>
         <td> <a href="#" (click)="destroy()">Destroy</a></td>`,
})
export class CustomEntityLineComponent extends EntityLineComponent {}
