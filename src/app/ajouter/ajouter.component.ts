import { Component, OnInit } from '@angular/core';
import { Produit } from './produit';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  public produit: Produit = new Produit(); 
  constructor() { }

  ngOnInit(): void {
  }

}
