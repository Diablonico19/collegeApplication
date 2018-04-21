import { Component, OnInit } from '@angular/core';
// Ici c'est pour les requetes HTTP
import { HttpClientModule } from '@angular/common/http';
import Fournitures from '../models/fournitures';
import { FournituresService } from '../services/fournitures.service';


@Component({
  selector: 'app-fournitures',
  templateUrl: './fournitures.component.html',
  styleUrls: ['../../assets/css/fournitures.component.css'],
  providers: [FournituresService]
})
export class FournituresComponent implements OnInit {
  fournituresPage0: Fournitures[];
  // fournituresPage1: Fournitures[];
  // fournituresPage2: Fournitures[];
  // fournituresPage3: Fournitures[];
  categorie: Array<boolean>[];

  constructor(private fournituresService: FournituresService) { }
  ngOnInit() {
    this.getAllFournitures();
    this.categorie = [];
    // Attention, par manque de temps on considère qu'il y a uniquement 15 catégorie

    this.initialiserCategorie();
  }

  getAllFournitures(): void {
    this.fournituresService.getAllFournitures0().subscribe(fournitures => this.fournituresPage0 = fournitures);
    // this.fournituresService.getAllFournitures1().subscribe(fournitures => this.fournituresPage1 = fournitures);
    // this.fournituresService.getAllFournitures2().subscribe(fournitures => this.fournituresPage2 = fournitures);
    // this.fournituresService.getAllFournitures3().subscribe(fournitures => this.fournituresPage3 = fournitures);
  }

  initialiserCategorie(): void {
    for (let index = 1; index <= 15; index++) {
      this.categorie.push();
    }
  }

  // categorieCree(idCategorie: number): boolean {
  //   // Si on a pas ajouté notre ligne catégorie on le fait une fois !
  //   if (idCategorie != null && this.categorie[idCategorie] === false) {
  //     this.categorie[idCategorie] = true;
  //     return false;
  //     // Sinon on retourne true pour dire que la ligne catégorie a déja été ajouté
  //   } else {
  //     return this.categorie[idCategorie];
  //   }
  // }

}
