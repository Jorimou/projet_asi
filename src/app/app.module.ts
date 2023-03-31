import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdinateursComponent } from './ordinateurs/ordinateurs.component';
import { TablettesComponent } from './tablettes/tablettes.component';
import { TelephonesComponent } from './telephones/telephones.component';
import { FixesComponent } from './ordinateurs/fixes/fixes.component';
import { PortablesComponent } from './ordinateurs/portables/portables.component';
import { ComposantsComponent } from './ordinateurs/composants/composants.component';
import { PeripheriquesComponent } from './ordinateurs/peripheriques/peripheriques.component';
import { EmptyComponent } from './empty-component';
import { ConnexionfComponent } from './connexionf/connexionf.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { UpdateComponent } from './update/update.component';
import { AjoutCComponent } from './CRUD/ajout-c/ajout-c.component';
import { AjoutPComponent } from './CRUD/ajout-p/ajout-p.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdinateursComponent,
    TablettesComponent,
    TelephonesComponent,
    FixesComponent,
    PortablesComponent,
    ComposantsComponent,
    PeripheriquesComponent,
    EmptyComponent,
    ConnexionfComponent,
    AjouterComponent,
    SupprimerComponent,
    UpdateComponent,
    AjoutCComponent,
    AjoutPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
