import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DivineSankalpamComponent } from './divine-sankalpam/divine-sankalpam.component';
import { DivyaDesamYatraComponent } from './divya-desam-yatra/divya-desam-yatra.component';
import { KalyanaYatraComponent } from './kalyana-yatra/kalyana-yatra.component';
import { BrickAndLandDonationComponent } from './brick-and-land-donation/brick-and-land-donation.component';
import { DivineMemoriesComponent } from './divine-memories/divine-memories.component';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { DonationsComponent } from './donations/donations.component';
import { ContactSevaComponent } from './contact-seva/contact-seva.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DivineSankalpamComponent,
    DivyaDesamYatraComponent,
    KalyanaYatraComponent,
    BrickAndLandDonationComponent,
    DivineMemoriesComponent,
    BoardOfDirectorsComponent,
    DonationsComponent,
    ContactSevaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
