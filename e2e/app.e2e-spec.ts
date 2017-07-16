import { AngularHmrPage } from './app.po';

describe('angular-hmr App', () => {
  let page: AngularHmrPage;

  beforeEach(() => {
    page = new AngularHmrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
