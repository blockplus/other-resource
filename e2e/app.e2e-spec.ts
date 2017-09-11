import { GuestCssPage } from './app.po';

describe('guest-css App', () => {
  let page: GuestCssPage;

  beforeEach(() => {
    page = new GuestCssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
