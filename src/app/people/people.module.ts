import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleViewComponent } from './people-view/people-view.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PeopleListComponent, PeopleViewComponent, PeopleFormComponent],
  imports: [
CommonModule,SharedModule,PeopleRoutingModule
  ]
})
export class PeopleModule { }
