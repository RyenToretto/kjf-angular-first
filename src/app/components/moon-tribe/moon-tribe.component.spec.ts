import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonTribeComponent } from './moon-tribe.component';

describe('MoonTribeComponent', () => {
    let component: MoonTribeComponent;
    let fixture: ComponentFixture<MoonTribeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MoonTribeComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MoonTribeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
