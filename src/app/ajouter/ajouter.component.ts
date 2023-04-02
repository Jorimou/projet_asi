import { Component, OnInit } from '@angular/core';
import { Produit } from './produit';
import { NgForm } from '@angular/forms';

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

  Sendata(formajout :NgForm){
    console.log("hi friends!");
    console.log("hi friends there are the values :) :", JSON.stringify(formajout.value));
  }
}
