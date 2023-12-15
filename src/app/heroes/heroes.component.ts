import { Component} from '@angular/core';
import { NgIf,
         NgFor, 
         UpperCasePipe
} from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    standalone: true,
    imports: [
        NgFor,
        NgIf,
        FormsModule,
        UpperCasePipe,
        HeroDetailComponent, 
        RouterModule
    ]
})
export class HeroesComponent {

  constructor(private messageService: MessageService,private heroService: HeroService) {}

  selectedHero?: Hero; 
  heroes:Hero[] = [];

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`You have selected hero #${this.selectedHero.id}: ${this.selectedHero.name}`);  
  }
  
  
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(x => this.heroes = x); 
  }
  ngOnInit():void {
    this.getHeroes(); 
  }
}
