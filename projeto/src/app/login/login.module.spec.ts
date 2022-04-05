import { LoginModule } from './login.module';

describe('LojaModule', () => {
  let lojaModule: LoginModule;

  beforeEach(() => {
    lojaModule = new LoginModule();
  });

  it('should create an instance', () => {
    expect(lojaModule).toBeTruthy();
  });
});
