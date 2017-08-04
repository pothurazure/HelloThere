import { HelloTherePage } from './app.po';

describe('hello-there App', () => {
  let page: HelloTherePage;

  beforeEach(() => {
    page = new HelloTherePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
