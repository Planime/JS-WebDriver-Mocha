

var  webdriver = require ('selenium-webdriver'),
    { describe, it, after, before } = require('selenium-webdriver/testing')
    By = webdriver.By,
    until = webdriver.until;
var driver;

    describe('library app scenarious', function() {
        this.timeout(5000)
        beforeEach(function() {
            driver = new webdriver.Builder().forBrowser('firefox').build();
            driver.get('https://library-app.firebaseapp.com/');
        });

        afterEach(function() {
            driver.quit();
        });




        it('chanhes button opacity upon email filled out', function(){
            this.timeout(15000)
            var submitBtn = driver.findElement(By.css('.btn'));
            driver.findElement(By.css('input')).sendKeys('user@gmail.com');
            driver.wait(function(){
                return submitBtn.getCssValue('opacity').then(function(result){
                    return result == 1;
                })
            }, 10000);
        });



        it('works with mocha1', function(){
            driver.manage().timeouts().implicitlyWait(5000);
            var submitBtn = driver.findElement(By.css('.btn'));
            driver.findElement(By.css('input')).sendKeys('user@gmail.com');
            submitBtn.click();
            driver.wait(until.elementLocated(By.css('#ember3 > div > div > div.alert.alert-success')), 5000)
            driver.findElement(By.css('#ember3 > div > div > div.alert.alert-success')).getText().then(function(txt){
                console.log("Alert success text is: " + txt);
            });
        });


        it('works with mocha2', function(){
            driver.manage().timeouts().implicitlyWait(5000);
            driver.findElement(By.css('nav')).getText().then(function(txt){
                console.log('txt');
            });
        });

    });



//     driver.manage().timeouts().implicitlyWait(5000);
//
//
//
//     submitBtn.click();
//     driver.wait(until.elementLocated(By.css('#ember3 > div > div > div.alert.alert-success')), 5000)
//     driver.findElement(By.css('#ember3 > div > div > div.alert.alert-success')).getText().then(function(txt){
//         console.log("Alert success text is: " + txt);
//     });
//
//
//
//
//
//
// driver.sleep(1000)
// driver.quit();











//
//     driver.findElement(By.css('#ember14'));
//     driver.findElement(By.css('.btn-lg')).getText().then(function(txt){
//         console.log('The text of the button is ' + txt)
// });
//
//     driver.findElements(By.css('nav li')).then(function(elements) {
//         elements.map(function (el) {
//             el.getText().then(function (txt) {
//                 console.log("the text of the navbar element is: " + txt);
//
//             });
//         });
//     });




    // driver.sleep(1000)
    // driver.quit();







// var  webdriver = require ('selenium-webdriver'),
//     { describe, it, after, before } = require('selenium-webdriver/testing')
// By = webdriver.By,
//     until = webdriver.until;
//
//
//
// var driver = new webdriver.Builder().forBrowser('firefox').build();
//
// //driver.get('https://www.google.com/');
// driver.get('https://library-app.firebaseapp.com/');
// driver.manage().timeouts().implicitlyWait(5000);
//
//
// var submitBtn = driver.findElement(By.css('.btn'));
// driver.findElement(By.css('input')).sendKeys('user@gmail.com');
// // driver.findElement(By.css('.btn')).click();
//
// driver.wait(function(){
//     return submitBtn.getCssValue('opacity').then(function(result){
//         return result == 1;
//     })
// }, 10000);
// submitBtn.click();
//
//
// driver.wait(until.elementLocated(By.css('#ember3 > div > div > div.alert.alert-success')), 5000)
// driver.findElement(By.css('#ember3 > div > div > div.alert.alert-success')).getText().then(function(txt){
//     console.log("Alert success text is: " + txt);
// });
//
//
//
//
//
//
// driver.sleep(1000)
// driver.quit();

