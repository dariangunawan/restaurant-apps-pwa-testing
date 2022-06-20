const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', (I) => {
    I.seeElement('#query');
    // I.seeElement('.query'); // membuat test menjadi gagal
    I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async (I) => {
    I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');

    I.seeElement('.restaurant__name p');

    const firstRestaurant = locate('.restaurant__name p').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item');
    const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// Scenario('searching restaurants', async (I) => {
//     I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

//     I.amOnPage('/');

//     I.seeElement('.restaurant__name p');

//     const names = [];

//     for (let i = 1; i <= 3; i++) {
//         I.click(locate('.restaurant__name p').at(i));
//         I.seeElement('#likeButton');
//         I.click('#likeButton');
//         names.push(await I.grabTextFrom('.restaurant__name'));
//         I.amOnPage('/');
//     }

//     I.amOnPage('/#/like');
//     I.seeElement('#query');

//     const searchQuery = names[1].substring(1, 3);
//     const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

//     I.fillField('#query', searchQuery);
//     I.pressKey('Enter');

//     const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
//     assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

//     matchingRestaurants.forEach(async (name, index) => {
//         const visibleName = await I.grabTextFrom(locate('.restaurant__name').at(index + 1));
//         assert.strictEqual(name, visibleName);
//     });
// });