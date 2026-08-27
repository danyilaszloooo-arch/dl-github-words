import { Component, computed, inject, signal } from '@angular/core';
import { Api } from '../../services/api';
import { WordService } from '../../services/word-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [NgClass],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  apiService = inject(Api)
  wordService = inject(WordService)
  words = this.wordService.words
  chunks = computed(() => this.chunkArray(this.words(), this.cellsInRow))
  cellsInRow: number = 4
  rows: number = 1

  async ngOnInit() {
    const data = await this.apiService.getWords()
    this.words.set(data)
    let spare = this.words().length % 4
    if (spare > 1) spare = 1
    this.rows = Math.floor(this.words().length / 4) + spare
  }
  private chunkArray<T>(array: T[], chunkSize: number): T[][] {
    let chunks: T[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize))
    }
    return chunks
  }
  protected addColor(array: string[], word: string): string {
    let longestWordLength = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > longestWordLength) {
        longestWordLength = array[i].length
      }
    }
    if (word.length < 5) {
      console.log('blue')
      return 'blue'
    } else if (word.length === longestWordLength ||
      word.length + 1 === longestWordLength ||
      word.length + 2 === longestWordLength) {
        console.log('red')
        return 'red'
    } else return ''
  }
}
