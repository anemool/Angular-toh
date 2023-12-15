import { Component,Input } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  standalone: true, 
  imports: [
    NgIf, 
    CommonModule, 
    FormsModule, 
    RouterModule
  ]
})
export class HeroDetailComponent {
@Input() hero?: Hero; 
}
