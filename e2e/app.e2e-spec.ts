import { HistoriasClinicasPage } from './app.po';

describe('historias-clinicas App', function() {
  let page: HistoriasClinicasPage;

  beforeEach(() => {
    page = new HistoriasClinicasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
