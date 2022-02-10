import { Component } from '@angular/core';
import { BingoCardComponent } from '../bingo-card/bingo-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bingo-generator',
  imports:[BingoCardComponent, CommonModule],
  templateUrl: './bingo-generator.component.html',
  styleUrls: ['./bingo-generator.component.scss'],
})
export class BingoGeneratorComponent {
  numberOfCards: number = 15;
  backgroundImageUrl: string = 'path/to/your/image.jpg'; // Replace with your image path
  wordList: string[] = [
    'Baby Wipes', 'Bath Tub', 'Hooded Towel', 'Baby Spoon', 'Car Seat',
    'Baby Carrier', 'Stroller', 'Baby Shampoo', 'Pillow', 'Burp Cloth',
    'Bath Toys', 'High Chair', 'First Aid Kit', 'Pacifier', 'Bassinet',
    'Lotion', 'Play Yard', 'Teddy Bear', 'Sippy Cup', 'Crib',
    'Diaper', 'Onesie', 'Baby Bottle', 'Rocker', 'Rocking Horse', 
    "Booties", "Baby Monitor", "Bib", "Baby Powder", "Baby Soap", 
    "Bowl", "Sleeper", "Rattle", "Sleep Sack", "Baby Clothes", 
    "Socks", "Mobile", "Night Light", "Diaper Cream", 
    "Swaddle Blanket", "ఉయ్యాలా", "పాలు", "దిష్టి చుక్క", "డాడీ నరేష్", "మమ్మీ భువిజ"
  ];
  wordsPerCard = 24; // Number of unique words needed per card

  generateCardWords(): string[][] {
    const allWords = [...this.wordList].filter(word => word.toLowerCase() !== 'X'); // Exclude 'free' for random selection
    const allShuffledWords = allWords.sort(() => 0.5 - Math.random());
    const cardWordsList: string[][] = [];

    for (let i = 0; i < this.numberOfCards; i++) {
      const startIndex = i * this.wordsPerCard;
      const endIndex = startIndex + this.wordsPerCard;
      const cardSpecificWords = allShuffledWords.slice(startIndex, endIndex);

      if (cardSpecificWords.length === this.wordsPerCard) {
        cardWordsList.push([...cardSpecificWords, 'X']); // Add 'Free' to the end for the center
      } else {
        // Handle cases where not enough unique words are available
        console.warn(`Not enough unique words for card ${i + 1}.`);
        cardWordsList.push([...allShuffledWords.slice(0, this.wordsPerCard), 'X']); // Fallback: use the first few
      }
    }
    return cardWordsList;
  }

  getCardWords(index: number, allCardWords: string[][]): string[] {
    return allCardWords[index] ? allCardWords[index] : [];
  }

  getRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  printCards(): void {
    window.print();
  }
}