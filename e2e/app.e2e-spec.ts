import { HavenPOCStoresPage } from './app.po';

describe('haven-pocstores App', function() {
  let page: HavenPOCStoresPage;

  beforeEach(() => {
    page = new HavenPOCStoresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
