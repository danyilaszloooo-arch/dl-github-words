import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  words = signal<string[]>([])
}
