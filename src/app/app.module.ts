import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AfterTenComponent } from './after-ten/after-ten.component';
import { AfterTwelfthSciComponent } from './after-twelfth-sci/after-twelfth-sci.component';
import { AfterTwelfthSciPcmComponent } from './after-twelfth-sci-pcm/after-twelfth-sci-pcm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AfterTenComponent,
    AfterTwelfthSciComponent,
    AfterTwelfthSciPcmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
