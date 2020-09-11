import { TestBed } from '@angular/core/testing';

import { HeroMessageService } from './hero-message.service';

describe('HeroMessageService', () => {
    let service: HeroMessageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HeroMessageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
