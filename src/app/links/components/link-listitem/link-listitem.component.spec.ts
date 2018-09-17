import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListitemComponent } from './link-listitem.component';

describe('LinkListitemComponent', () => {
  let component: LinkListitemComponent;
  let fixture: ComponentFixture<LinkListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
