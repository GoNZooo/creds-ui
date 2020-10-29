import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UsersListEntryComponent } from "./users-list-entry.component";

describe("UsersListEntryComponent", () => {
  let component: UsersListEntryComponent;
  let fixture: ComponentFixture<UsersListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListEntryComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
