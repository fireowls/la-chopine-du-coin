import { HomeWelcomeComponent } from './home-welcome.component';
import { environment } from 'src/environments/environment.prod';

describe('HomeWelcomeComponent', () => {
  let component: HomeWelcomeComponent;

  beforeEach(() => {
    component = new HomeWelcomeComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test title', () => {
    expect(component.title).toBe(environment.appInfo.title);
  });

  it('test dexcription', () => {
    expect(component.description).toBe(environment.appInfo.description);
  });

});
