import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor (private heroService: HeroService ) {}
  heroes : Hero[] = []; 
  
  ngOnInit () {
    this.getHeroes(); 
  }
  getHeroes () :void {
    this.heroService.getHeroes()
      .subscribe(x => this.heroes = x.slice(1,5)); 
  }
}
