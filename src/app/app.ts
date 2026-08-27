import { Component, signal } from '@angular/core';
import { Table } from './components/table/table';
import { Input } from './components/input/input';

@Component({
  selector: 'app-root',
  imports: [Table, Input],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dl-github-words');
}
