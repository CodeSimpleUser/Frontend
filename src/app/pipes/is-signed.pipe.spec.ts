import { IsSignedPipe } from './is-signed.pipe';

describe('IsSignedPipe', () => {
  it('create an instance', () => {
    const pipe = new IsSignedPipe();
    expect(pipe).toBeTruthy();
  });
});
