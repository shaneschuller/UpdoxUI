import { UpdoxUichallengePage } from './app.po';

describe('updox-uichallenge App', () => {
  let page: UpdoxUichallengePage;

  beforeEach(() => {
    page = new UpdoxUichallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
