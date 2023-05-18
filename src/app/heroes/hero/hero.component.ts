import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Knull';
  public age: number = 1000;

  get capitalizadName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Spiderman'

    //throw 'metodo no implementado'
  }

  changeAge():void{
    this.age = 32
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
