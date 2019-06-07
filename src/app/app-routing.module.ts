import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LauncherComponent } from './launcher/launcher.component';

const routes: Routes = [
  {path:'',component:LauncherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
