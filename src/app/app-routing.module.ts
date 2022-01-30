import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterTenComponent } from './after-ten/after-ten.component';
import { AfterTwelfthSciPcmComponent } from './after-twelfth-sci-pcm/after-twelfth-sci-pcm.component';
import { AfterTwelfthSciComponent } from './after-twelfth-sci/after-twelfth-sci.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'after-tenth', component: AfterTenComponent },
  { path: 'after-twelfthSci', component: AfterTwelfthSciComponent },
  { path: 'after-twelfthSciPcm', component: AfterTwelfthSciPcmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
