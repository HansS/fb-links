import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LinkEffects } from './link.effects';

describe('LinkEffects', () => {
  let actions$: Observable<any>;
  let effects: LinkEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LinkEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LinkEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
