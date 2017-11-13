import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySceneComponent } from './my-scene.component';

describe('MySceneComponent', () => {
  let component: MySceneComponent;
  let fixture: ComponentFixture<MySceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
