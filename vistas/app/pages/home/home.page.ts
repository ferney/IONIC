import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//import { error } from 'console';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { ShareModule } from 'src/app/share/share.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:true,
  imports:[IonicModule, CommonModule, FormsModule, ShareModule]
})
export class HomePage implements OnInit {
characters:any[]=[];
params = {} as any;
  constructor(
  private rickAndMortySvc: RickAndMortyService
  ) { }

  ngOnInit() {
  this.params.page=0;
  this.getCharacters()  
  }
  
  //funcion de cargar todos los datos
  getCharacters(event?:any) {
    this.params.page +=1;
    this.rickAndMortySvc.getCharacters(this.params).subscribe(
    {
    next:(res:any)=>{
    this.characters.push(...res.results)
    if(event) event.target.complete();
    },
    error: (error: any)=>{
      if(event) event.target.complete();
    }
    }
    )
  
  }
  
  //funcion para crear el filtro
  searchCharacters() {
    this.params.page =1;
    this.rickAndMortySvc.getCharacters(this.params).subscribe(
    {
    next:(res:any)=>{
    this.characters=res.results
    
    },
    error: (error: any)=>{
      
    }
    }
    )
  
  }

}
