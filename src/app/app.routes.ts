import { Routes } from '@angular/router';
import { LandingPageComponent } from '../layouts/landing-page/landing-page.component';
import { LeaguesComponent } from '../layouts/leagues/leagues.component';
import { LeagueComponent } from '../layouts/league/league.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'leagues', component: LeaguesComponent},
    { path: 'leagues/:id', component: LeagueComponent},
];
