import { DentroModule } from './dentro.module';

describe('DentroModule', () => {
  let dentroModule: DentroModule;

  beforeEach(() => {
    dentroModule = new DentroModule();
  });

  it('should create an instance', () => {
    expect(dentroModule).toBeTruthy();
  });
});
