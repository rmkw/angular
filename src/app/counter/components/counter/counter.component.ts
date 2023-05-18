import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `<hr>
<p>Counter: {{ counter }}</p>

<button (click)="increaseBy(2)" >+1</button>
<button (click)="decreaseBy()" >-1</button>
<button (click)="reset()">RESET</button>

<hr>`
})

export class CounterComponent {
   public title: string = 'Hola';
  public counter: number = 10;

  increaseBy( value: number): void{
   this.counter += value;
  }
  decreaseBy(): void{
   this.counter -= 1;
  }
  reset(){
    this.counter = 0;
  }
  constructor() { }


}
