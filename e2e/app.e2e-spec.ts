import { MySchoolAppPage } from './app.po';

describe('my-school-app App', () => {
  let page: MySchoolAppPage;

  beforeEach(() => {
    page = new MySchoolAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
