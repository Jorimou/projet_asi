import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdinateursComponent } from './ordinateurs/ordinateurs.component';
import { FixesComponent } from './ordinateurs/fixes/fixes.component';
import { PortablesComponent } from './ordinateurs/portables/portables.component';
import { ComposantsComponent } from './ordinateurs/composants/composants.component';
import { PeripheriquesComponent } from './ordinateurs/peripheriques/peripheriques.component';
import { TablettesComponent } from './tablettes/tablettes.component';
import { TelephonesComponent } from './telephones/telephones.component';
import { EmptyComponent } from './empty-component';
import { ConnexionfComponent } from './connexionf/connexionf.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { UpdateComponent } from './update/update.component';
import { AjoutCComponent } from './CRUD/ajout-c/ajout-c.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ordinateurs', component: EmptyComponent, children: [
      { path: 'fixes', component: FixesComponent },
      { path: 'portables', component: PortablesComponent },
      { path: 'composants', component: ComposantsComponent },
      { path: 'peripheriques', component: PeripheriquesComponent },
    ]
  },
  { path: 'tablettes', component: TablettesComponent },
  { path: 'telephones', component: TelephonesComponent },
  { path: 'login', component: ConnexionfComponent},
  { path: 'ajouter', component: AjouterComponent},
  { path: 'supprimer', component: SupprimerComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'AjoutCategorie', component: AjoutCComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
