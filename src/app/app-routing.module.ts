import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./component/pages/landing/landing.component";
import { LoginComponent} from "./component/pages/login/login.component";

const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full'},
    { path: 'landing', component: LandingComponent},
    { path: 'login', component: LoginComponent},
  //{path: '**', component: NotFoundPageComponent} //
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
