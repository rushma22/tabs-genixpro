import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CareTeamPageRoutingModule } from './care-team-routing.module';

import { CareTeamPage } from './care-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CareTeamPageRoutingModule
  ],
  declarations: [CareTeamPage]
})
export class CareTeamPageModule {}
