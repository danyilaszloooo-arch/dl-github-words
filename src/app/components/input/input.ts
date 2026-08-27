import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordService } from '../../services/word-service';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  wordService = inject(WordService)
  words = this.wordService.words
  newWord: string = ''
  protected addWord(word: string) {
    if (
      word.trim().length !== 0 &&
      word.length !== 0
    )
    {
      this.words.update(current => [...current, word])
      this.newWord = ''
    }
  }
}
