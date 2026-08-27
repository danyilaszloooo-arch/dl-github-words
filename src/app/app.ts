import { Component, signal } from '@angular/core';
import { Table } from './components/table/table';
import { Input } from './components/input/input';
import { Save } from './components/save/save';

@Component({
  selector: 'app-root',
  imports: [Table, Input, Save],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dl-github-words');
}
