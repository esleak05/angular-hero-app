import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Hero } from './../interfaces/hero';
import { HeroService } from './../services/hero.service';





@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }
  @Input() hero: Hero;
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(parseInt(id, 10))
        .subscribe(hero => this.hero = hero);
  }
  goBack(): void{
    this.location.back();
  }
}
