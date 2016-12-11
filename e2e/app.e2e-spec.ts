import { NgAzureAppPage } from './app.po';

describe('ng-azure-app App', function() {
  let page: NgAzureAppPage;

  beforeEach(() => {
    page = new NgAzureAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
