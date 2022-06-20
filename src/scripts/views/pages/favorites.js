import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import { createRestaurantItemTemplate } from '../templates/template-creator';
// import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
// import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    // return `
    //   <div class="content">
    //     <h2 class="content__heading">Your Favorite Restaurants</h2>
    //     <div id="restaurants" class="restaurants">

    //     </div>
    //   </div>
    // `;
    return view.getTemplate();
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = `
        <div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>
      `;
    }
    // new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    // new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
