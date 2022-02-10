import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BingoGeneratorComponent } from './bingo-generator/bingo-generator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [BingoGeneratorComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bingo-generator';
}
