import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'care-team',
        loadChildren: () => import('../pages/care-team/care-team.module').then(m => m.CareTeamPageModule)
      },
      {
        path: 'health',
        loadChildren: () => import('../pages/health/health.module').then(m => m.HealthPageModule)
      },
      {
        path: 'needs',
        loadChildren: () => import('../pages/needs/needs.module').then(m => m.NeedsPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../pages/more/more.module').then( m => m.MorePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/health',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/health',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
