export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByLabel('Email');
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
  } // <--- Конструктор закінчився тут

  // Наш метод дії (поза конструктором):
  async login(email) {
    await this.emailInput.fill(email);
    await this.loginButton.click();
  }
}