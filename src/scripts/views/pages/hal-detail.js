import UrlParser from '../../routes/url-parser';
import TheRestoranDbSource from '../../data/therestoran-source';
import { createRestoranDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const HalDetail = {
  async render() {
    return `
    <div id="restoran" class="restoran"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restoran = await TheRestoranDbSource.detailRestoran(url.id);
      const restoranContainer = document.querySelector('#restoran');
      restoranContainer.innerHTML = createRestoranDetail(restoran);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restoran: {
          id: url.id,
          name: restoran.restaurant.name,
          city: restoran.restaurant.city,
          rating: restoran.restaurant.rating,
          pictureId: restoran.restaurant.pictureId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default HalDetail;
