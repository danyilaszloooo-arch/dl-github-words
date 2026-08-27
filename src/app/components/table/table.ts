import { Component, inject, signal } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  apiService = inject(Api)
  words = signal<string[]>([])
  chunks = signal<string[][]>([])
  cellsInRow: number = 4
  rows: number = 1

  async ngOnInit() {
    const data = await this.apiService.getWords()
    this.words.set(data)
    let spare = this.words().length % 4
    if (spare > 1) spare = 1
    this.rows = Math.floor(this.words().length / 4) + spare
    this.chunks.set(this.chunkArray(this.words(), this.cellsInRow))
  }
  private chunkArray<T>(array: T[], chunkSize: number): T[][] {
    let chunks: T[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize))
    }
    return chunks
  }
}
