import { Component, OnInit } from '@angular/core';
import { Hero } from './../interfaces/hero';
import { HeroService } from './../services/hero.service';
import { MessageService } from './../services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 heroes: Hero[];
 selectHero: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
  ) { }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void{
    this.selectHero = hero;
    this.messageService.add(`HeroComponent: Selected hero: id: ${this.selectHero.id}`);

  }
  getHeroes(): void{
     this.heroService.getHeroes()
         .subscribe(heroes => this.heroes = heroes);
  }

}
