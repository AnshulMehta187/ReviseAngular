import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/components/login/login.component';
import { StudentDetailsComponent } from './pages/components/student-details/student-details.component';
import { AuthGuard } from './pages/components/login/auth-guard.service';
import { LayoutComponent } from './pages/components/layout/layout.component';


const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
      path: 'layout',
      component: LayoutComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'students' },
        {
          path: 'students',
          component: StudentDetailsComponent,
          canActivate: [AuthGuard]
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
