import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  imports: [ CommonModule ],
  exports: [CounterComponent],
  providers: [],
})
export class CounterModule {}
