import { TrailerTrackerPage } from './app.po';

describe('trailer-tracker App', function() {
  let page: TrailerTrackerPage;

  beforeEach(() => {
    page = new TrailerTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
