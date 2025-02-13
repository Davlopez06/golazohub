import { Component } from '@angular/core';
import { SliderMatchesComponent } from "../../components/slider-matches/slider-matches.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-leagues',
  imports: [SliderMatchesComponent, NavbarComponent],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.scss'
})
export class LeaguesComponent {

}
