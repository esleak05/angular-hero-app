import { Component, OnInit } from '@angular/core';
import { Hero } from './../interfaces/hero';
import { HeroService } from './../services/hero.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroServices: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroServices.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
