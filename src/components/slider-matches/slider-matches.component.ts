import { Component, ElementRef, ViewChild } from '@angular/core';
// import MatchesExample from '../../data-example/matches.json';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../app/app.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-slider-matches',
  imports: [CommonModule],
  templateUrl: './slider-matches.component.html',
  styleUrl: './slider-matches.component.scss',
})
export class SliderMatchesComponent {
  matches: any[] = [];
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  constructor(private apiService: ApiService) {}

  isDown = false;
  startX = 0;
  scrollLeft = 0;

  items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    this.startX = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
  }

  onMouseLeave() {
    this.isDown = false;
  }

  onMouseUp() {
    this.isDown = false;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; // Ajusta la velocidad del scroll
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  getTime(date: string) {
    const matchDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return new Intl.DateTimeFormat('es-ES', options).format(matchDate);
  }

  getDate(date: string) {
    const matchDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('es-ES', options).format(matchDate);
  }

  ngOnInit() {
    this.apiService.getPosts(`${environment.apiUrl}matches`).subscribe(
      (response) => {
        const { matches = [] } = response || {};
        this.matches = matches;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
