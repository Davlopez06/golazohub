import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SliderMatchesComponent } from "../../components/slider-matches/slider-matches.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league',
  imports: [NavbarComponent, SliderMatchesComponent],
  templateUrl: './league.component.html',
  styleUrl: './league.component.scss'
})
export class LeagueComponent {
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
    });
  }
}
