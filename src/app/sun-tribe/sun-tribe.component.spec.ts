import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunTribeComponent } from './sun-tribe.component';

describe('SunTribeComponent', () => {
    let component: SunTribeComponent;
    let fixture: ComponentFixture<SunTribeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SunTribeComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SunTribeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
