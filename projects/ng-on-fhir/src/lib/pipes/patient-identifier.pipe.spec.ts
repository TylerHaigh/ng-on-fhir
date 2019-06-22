import { PatientIdentifierPipe } from './patient-identifier.pipe';

describe('PatientIdentifierPipe', () => {
  it('create an instance', () => {
    const pipe = new PatientIdentifierPipe();
    expect(pipe).toBeTruthy();
  });
});
