import { AngularCliCountriesPage } from './app.po';

describe('angular-cli-countries App', () => {
  let page: AngularCliCountriesPage;

  beforeEach(() => {
    page = new AngularCliCountriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
