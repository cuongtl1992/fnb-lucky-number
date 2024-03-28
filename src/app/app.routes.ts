import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LuckyDrawComponent } from './lucky-draw/lucky-draw.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'lucky-draw',
        component: LuckyDrawComponent
    }
];
