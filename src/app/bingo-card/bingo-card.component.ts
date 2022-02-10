import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss'],
  imports: [CommonModule]
})
export class BingoCardComponent implements OnInit {
  @Input() backgroundImage: string = '';
  @Input() words: string[] = []; // Input for the list of words
  bingoData: (string | '')[][] = [];
  bingoLabels = ['B', 'I', 'N', 'G', 'O'];

  ngOnInit(): void {
    this.generateBingoCard();
  }

  generateBingoCard(): void {
    this.bingoData = [];
    const shuffledWords = [...this.words].sort(() => 0.5 - Math.random()); // Shuffle the words
    let wordIndex = 0;

    for (let i = 0; i < 5; i++) {
      const row: (string | '')[] = [];
      for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) {
          row.push(''); // Empty center
        } else {
          if (wordIndex < shuffledWords.length) {
            row.push(shuffledWords[wordIndex++]);
          } else {
            row.push(''); // Handle cases where not enough words are provided
          }
        }
      }
      this.bingoData.push(row);
    }
  }
}