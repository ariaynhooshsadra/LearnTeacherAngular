import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDPCComponent } from './card-dpc.component';

describe('CardDPCComponent', () => {
  let component: CardDPCComponent;
  let fixture: ComponentFixture<CardDPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDPCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
