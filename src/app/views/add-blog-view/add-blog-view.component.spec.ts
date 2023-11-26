import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogViewComponent } from './add-blog-view.component';

describe('AddBlogViewComponent', () => {
  let component: AddBlogViewComponent;
  let fixture: ComponentFixture<AddBlogViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBlogViewComponent]
    });
    fixture = TestBed.createComponent(AddBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
