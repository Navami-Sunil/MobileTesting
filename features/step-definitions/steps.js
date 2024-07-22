const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')


Given(/^I am on the home page$/,async () => {
	console.log("HOME PAGE--------------------------------");
});

When(/^I login with username and password$/,async () => {
    await $('//android.widget.TextView[@text="Login"]').click();
    await $('//android.widget.TextView[@text="Sign up"]').click();
    await $('//android.widget.EditText[@content-desc="input-email"]').setValue("tester12@gmail.com");
    await $('//android.widget.EditText[@content-desc="input-password"]').setValue("Ab1!@asqw");
    await $('//android.widget.EditText[@content-desc="input-repeat-password"]').setValue("Ab1!@asqw");
    await $('//android.widget.TextView[@text="SIGN UP"]').click();
    await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
    await $('//android.widget.TextView[@text="Login"]').click();
    await $('//android.widget.EditText[@content-desc="input-email"]').setValue("tester12@gmail.com");
    await $('//android.widget.EditText[@content-desc="input-password"]').setValue("Ab1!@asqw");
    await $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup').click();

});

Then(/^I should see the success message$/,async () => {
	return true;
});
