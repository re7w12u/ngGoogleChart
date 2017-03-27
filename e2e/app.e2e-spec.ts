import { NgGoogleChartPage } from './app.po';

describe('ng-google-chart App', function() {
  let page: NgGoogleChartPage;

  beforeEach(() => {
    page = new NgGoogleChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
