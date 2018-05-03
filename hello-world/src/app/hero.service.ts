import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Identifiers } from '@angular/compiler/src/identifiers';

const HEROES = [
  { id: 21, name: 'Riddhi' },
  { id: 22, name: 'Tanish' },
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService, private http:Http) {
    console.log('HeroService constructor...');
    }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
