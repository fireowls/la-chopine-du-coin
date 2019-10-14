import { NavBarComponent } from './nav-bar.component';
import { environment } from 'src/environments/environment';

describe('NavBarComponent', () => {
  let component: NavBarComponent;

  beforeEach(() => {
    component = new NavBarComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test title', () => {
    expect(component.title).toBe(environment.appInfo.title);
  });
});
