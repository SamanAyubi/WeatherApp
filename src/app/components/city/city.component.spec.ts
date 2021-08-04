import {CityComponent} from './city.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { landingPageState } from '../../reducers';


describe('Component: CityComponent',() => {
  let component : CityComponent;
  let storeMock : jasmine.SpyObj<Store<landingPageState>>;
  let routerSpy : jasmine.SpyObj<Router>


  beforeEach(() =>{
    storeMock = jasmine.createSpyObj<Store<landingPageState>>('',{});
    routerSpy = jasmine.createSpyObj<Router>('ActivatedRoute',{});
    component = new CityComponent(
      storeMock,
      routerSpy,
    )
  })
  it('should test ngOninit', () =>{
    spyOn(component, 'filterTimeFunction');
    component.ngOnInit();
    expect(component.filterTimeFunction).toHaveBeenCalled;
    expect (storeMock.dispatch).toHaveBeenCalled();
  });

  it('should test filterTimeFunction', () =>{
    let  array = [];
    component.filterTimeFunction(array);
  })

  it('should test clickBack', () =>{
    component.clickBack();
  })
})


