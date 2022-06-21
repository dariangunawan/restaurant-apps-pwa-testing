const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#restaurants');
    I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.seeElement('#restaurants');
    I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');
    I.wait(3);

    I.waitForElement('.restaurant-item');
    I.seeElement('.restaurant__name p');

    const firstRestaurant = locate('.restaurant__name p').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.wait(3);

    I.amOnPage('/#/favorites');
    I.wait(3);
    I.seeElement('.restaurant-item');
    const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.wait(5);
    I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');
    I.wait(3);

    I.waitForElement('.restaurant-item');
    I.seeElement('.restaurant__name p');

    const firstRestaurant = locate('.restaurant__name p').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    I.wait(10);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.wait(3);

    I.amOnPage('/#/favorites');
    I.wait(3);
    I.seeElement('.restaurant-item p');

    const firstRestaurantlike = locate('.restaurant-item p').first();
    const likedRestaurantName = await I.grabTextFrom(firstRestaurantlike);
    assert.strictEqual(firstRestaurantName, likedRestaurantName);
    I.click(firstRestaurantlike);
    I.wait(10);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.wait(3);

    I.amOnPage('/#/favorites');
    I.wait(3);

    I.seeElement('.restaurant-item__not__found');
    const onFav = await I.grabTextFrom('.restaurant-item__not__found');
    assert.strictEqual(onFav, 'Tidak ada restoran untuk ditampilkan');
});