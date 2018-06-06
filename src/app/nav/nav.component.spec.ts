import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let authService: AngularFireAuth;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      providers: [ AngularFireAuth ]
    })
    .compileComponents();
  }));


  authService = TestBed.get(AngularFireAuth);


  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('ul'));
  });

//test if the button changes from login to logout upon user action
  it('should remove and show a different button', () => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'authState').and.returnValue(true);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');

  });
});






























