import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  newWord: string = ''
  protected press() {
    console.log(this.newWord)
  }
}
