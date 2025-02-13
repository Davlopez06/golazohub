import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderMatchesComponent } from '../../components/slider-matches/slider-matches.component';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, NavbarComponent, HttpClientModule, SliderMatchesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  isLoad: boolean = false;

  setIsLoad() {
    setTimeout(() => {
      this.isLoad = true;
    }, 6000);
  }

  ngOnInit() {
    this.setIsLoad();
  }
}
