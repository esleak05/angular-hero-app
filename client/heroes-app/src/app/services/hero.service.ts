import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './../interfaces/hero';
import { HEROES } from './../mocks/mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroServices: fetched heroes.');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroServices: fetch Hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
