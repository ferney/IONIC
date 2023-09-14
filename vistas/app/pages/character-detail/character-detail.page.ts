import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from 'src/app/share/share.module';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports:[IonicModule, CommonModule, FormsModule, ShareModule]
})
export class CharacterDetailPage implements OnInit {
characterId='';
character = null as any;
  constructor(
  private actRoute: ActivatedRoute,
  private rickAndMortySvc: RickAndMortyService
  ) { 
  this.characterId=this.actRoute.snapshot.paramMap.get('id') as string
  }

  ngOnInit() {}
  
  ionViewWillEnter(){
  this.getCharacters()
  }
  
  //optener personaje//
    getCharacters() {
     
      this.rickAndMortySvc.getCharactersById(this.characterId).subscribe(
      {
      next:(res:any)=>{
     this.character = res;
      },
      error: (error: any)=>{
       
      }
      }
      )
    
    }
  }


