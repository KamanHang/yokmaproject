import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () =>
            import('../app/components/authentication/login/login.component').then(
                (m) => m.LoginComponent
            )
    },
    {
        path:'register',
        loadComponent: () =>
            import('../app/components/authentication/register/register.component').then(
                (m) => m.RegisterComponent
            )
    }
];
