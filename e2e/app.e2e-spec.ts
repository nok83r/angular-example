import { AngularSpringPage } from './app.po';

describe('angular-spring App', () => {
  let page: AngularSpringPage;

  beforeEach(() => {
    page = new AngularSpringPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
