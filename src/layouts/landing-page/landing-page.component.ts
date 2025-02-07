import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
// import { Fetch } from '../../utils/fetch';
import { ApiService } from '../../app/app.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { url } from 'inspector';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, NavbarComponent, HttpClientModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  isLoad: boolean = false;
  matches: any[] = [];

  constructor(private apiService: ApiService) {}

  setIsLoad() {
    setTimeout(() => {
      this.isLoad = true;
    }, 6000);
  }

  ngOnInit() {
    this.setIsLoad();
    this.apiService.getPosts(`${environment.apiUrl}matches`).subscribe(
      (response) => {
        console.log('Respuesta:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
