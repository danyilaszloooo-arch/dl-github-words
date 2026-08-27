import { Component, inject } from '@angular/core';
import { WordService } from '../../services/word-service';

@Component({
  selector: 'app-save',
  imports: [],
  templateUrl: './save.html',
  styleUrl: './save.css',
})
export class Save {
  wordService = inject(WordService)
  words = this.wordService.words
  protected saveToLocalStorage(): void {
    localStorage.setItem('words', JSON.stringify(this.words()))
  }
}
