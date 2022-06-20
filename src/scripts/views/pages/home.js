import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
      <h1>Explore Restaurant</h1>
      <div class="restaurants" id="restaurants"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDBSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;