import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonDisplayComponent } from './components/button-display/button-display.component';

const routes: Routes = [
  { path: 'button-display', component: ButtonDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
