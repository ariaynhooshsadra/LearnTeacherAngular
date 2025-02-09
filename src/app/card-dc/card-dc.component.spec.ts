import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDCComponent } from './card-dc.component';

describe('CardDCComponent', () => {
  let component: CardDCComponent;
  let fixture: ComponentFixture<CardDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
