import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent  ,canActivate : [AuthGuard], data : {roles :['ADMIN']}},
    { path: 'user-profile',   component: UserProfileComponent , canActivate : [AuthGuard], data : {roles :['ADMIN']}},
    { path: 'tables',         component: TablesComponent , canActivate : [AuthGuard], data : {roles :['ADMIN']}},
    { path: 'icons',          component: IconsComponent , canActivate : [AuthGuard], data : {roles :['ADMIN']}},
    { path: 'maps',           component: MapsComponent , canActivate : [AuthGuard], data : {roles :['ADMIN']}}
];
