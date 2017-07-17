
import { CreateEntityComponent } from "angularm";
import { Component } from "@angular/core";

@Component({
  template: `<div *ngIf="entityType && myForm">
  <h1>New {{ entityType.singular | titleCase }}</h1>
  <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="w3-container">
    <div *ngFor="let propertyType of entityType.propertyTypes"
      [mgPropertyType]="'form_line'" [propertyType]="propertyType"
      [mgForm]="myForm"></div>
    <input type="submit" value="Create {{ entityType.singular | titleCase }}">
  </form>
  <a routerLink="/{{entityType.plural}}">Back</a>
</div>`
})
export class CustomCreateEntityComponent extends CreateEntityComponent {}

