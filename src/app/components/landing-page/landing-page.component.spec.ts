import {LandingPageComponent} from './landing-page.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { landingPageState } from '../../reducers';


describe('Component: LandingPageComponent',() => {
  let component : LandingPageComponent;
  let storeMock : jasmine.SpyObj<Store<landingPageState>>;
  let routerSpy : jasmine.SpyObj<Router>


  beforeEach(() =>{
    storeMock = jasmine.createSpyObj<Store<landingPageState>>('',{});
    routerSpy = jasmine.createSpyObj<Router>('ActivatedRoute',{});
    component = new LandingPageComponent(
      storeMock,
      routerSpy,
)
  })
  it('should test ngOninit', () =>{
    component.ngOnInit();
    expect (storeMock.dispatch).toHaveBeenCalled();
  });

  it('should test nextStep', () =>{
    let  city = 'abc';
    component.nextStep(city);
  })
})
