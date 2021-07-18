/* eslint-disable no-shadow */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { restoTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="Restos" class="Restos">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('#Restos');
    restaurant.forEach((restaurant) => {
      restoContainer.innerHTML += restoTemplate(restaurant);
    });
  },
};

export default Like;
