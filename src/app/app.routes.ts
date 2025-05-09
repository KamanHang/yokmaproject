import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path:'',
    //     loadComponent: () =>
    //         import('./components/navbar/navbar.component').then(
    //             (m) => m.NavbarComponent
    //         )
    // },
    {
        path:'home',
        loadComponent: () =>
            import('./components/home/landingpage/landingpage.component').then(
                (m) => m.LandingpageComponent
            )
    },
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
