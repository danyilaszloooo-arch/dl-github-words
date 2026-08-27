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

  async ngOnInit() {
    const data = await this.apiService.getWords()
    this.words.set(data)
  }
}
