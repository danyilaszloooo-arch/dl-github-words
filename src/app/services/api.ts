import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  public async getWords(): Promise<string[]> {
    const response = await fetch('https://api.siposm.hu/word')
    return response.json()
  }
}
