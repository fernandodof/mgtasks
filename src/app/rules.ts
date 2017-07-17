import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { CustomListingTableComponent } from "app/custom-listing-table.component";
import { CustomEntityLineComponent } from "app/CustomEntityLineComponent";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .etr('list_entities', 'bug', CustomListingTableComponent)
        .etr('list_entities', 'issue', CustomListingTableComponent)
        .etr('list_entities', 'product', CustomListingTableComponent)
        .etr('list_entities', 'project', CustomListingTableComponent)
        .der('table_line', EntityLineComponent)
        .er('table_line', 'bug', CustomEntityLineComponent)
        .er('table_line', 'issue', CustomEntityLineComponent)
        .er('table_line', 'product', CustomEntityLineComponent)
        .er('table_line', 'project', CustomEntityLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
