import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'groups',
                loadChildren: () => import('./modules/group/group.module').then(m => m.GroupModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
            },
            {
                path: 'upload',
                loadChildren: () => import('./modules/file-upload/file-upload.module').then(m => m.FileUploadModule)
            },
            {
              path: 'dataset',
              loadChildren: () => import('./modules/dataset/dataset.module').then(m => m.DatasetModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
