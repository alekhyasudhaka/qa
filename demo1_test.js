Feature(' login page');

Scenario('facebook login page', ({ I }) => {

  I.amOnPage('https://www.facebook.com/login/');
 I.fillField('email','alekhya@gmail.com');
 I.fillField('pass','password');
 I.click('login');
});
