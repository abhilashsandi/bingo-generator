import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoGeneratorComponent } from './bingo-generator.component';

describe('BingoGeneratorComponent', () => {
  let component: BingoGeneratorComponent;
  let fixture: ComponentFixture<BingoGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BingoGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
