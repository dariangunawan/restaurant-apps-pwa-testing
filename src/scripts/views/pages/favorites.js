import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
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
  },
};

export default Favorite;
