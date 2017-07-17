import { Component } from "@angular/core";
import { ListingTableComponent } from "angularm";

@Component({
  selector: 'div [mgListingTable]',
  template: `<div *ngIf="entityType">
    <h1>Listing {{ entityType.plural | titleCase }}</h1>
    <table>
      <thead>
        <tr>
          <th *ngFor="let propertyType of entityType.propertyTypes" class="w3-center">{{propertyType.name | titleCase}}</th>
          <th colspan="3" class="w3-center"></th>
        </tr>
      </thead>
      <tbody>
        <div *ngFor="let entity of entities" [mgEntity]="'table_line'" [entity]="entity">
        </div>
      </tbody>
    </table>
    <a href="#" (click)="create()">New {{entityType.singular | titleCase}}</a>
    <a href="#" (click)="back()">Back</a>
  </div>`
})
export class CustomListingTableComponent extends ListingTableComponent  {}
