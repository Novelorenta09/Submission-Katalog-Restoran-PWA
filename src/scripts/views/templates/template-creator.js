import CONFIG from '../../globals/config';

const createRestoranDetail = (restoran) => `
<div class="restoran-detail">
    <div class="detail-info">
        <h2 class="nama-restoran">Restoran ${restoran.restaurant.name}</h2>

        <img crossorigin="anonymous" class="gambar-restoran" src="${CONFIG.BASE_IMAGE_URL}/${restoran.restaurant.pictureId}" alt="${restoran.restaurant.name}"/>

        <div class="kota-restoran">
            <h4>Kota: </h4>
            <p>${restoran.restaurant.city}</p>
        </div>

        <div class="alamat-restoran">
            <h4>Alamat: </h4>
            <p>${restoran.restaurant.address}</p>
        </div>

        <div class="rating-restoran">
            <h4>Rating: </h4>
            <p>${restoran.restaurant.rating}</p>
        </div>

        <div class="deskripsi-restoran">
            <h4>Deskripsi</h4>
            <p>${restoran.restaurant.description}</p>
        </div>
    </div>

    <div class="more-info">
        <div  class="menu-makanan-restoran">
            <h4> Menu Makanan</h4>
            <p>${restoran.restaurant.menus.foods.map((food) => `
                <ul type="square" class="foods"> 
                    <li>${food.name}</li>
                `).join('')}
                </ul>
            </p>

        </div>

        <div class="menu-minuman-restoran">
            <h4>Menu Minuman</h4>
            <p>${restoran.restaurant.menus.drinks.map((drink) => `<ul type="square" class="drinks">
                <li>${drink.name}</li>
                `).join('')}
            </ul>
            </p>
        </div>

        <div class="review-restoran"> 
            <h4>Customer Reviews</h4>
            <div id="list-reviews">
            ${restoran.restaurant.customerReviews.map((reviews) => `
              <div class="review">
              <blockquete>
               <b>"${reviews.review}"</b>
              <footer class="author">-${reviews.name} ~ ${reviews.date}-
              </blokquete>
              </div>
            `).join('')}
        </div>

    </div>
</div>
`;
const createRestoranItem = (restoran) => `
<div class="restoran-detail-item">
    <h3 class="nama-restoran">${restoran.name}</h3>
    <div class="restoran-content">
       <a href=/#/detail/${restoran.id}> <img crossorigin="anonymous" class="gambar-restoran" src="${CONFIG.BASE_IMAGE_URL}/${restoran.pictureId}" alt="${restoran.name}"/></a>
    </div>
    <div class="more-info">
        <h4 class="kota-restoran">Kota </h4>
        <p> ${restoran.city}</p>
    </div>
    <div class="more-info rating">
        <h4 class="rating-restoran">⭐️ </h4> 
        <p> ${restoran.rating}</p>
    </div>
</div>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoranDetail,
  createRestoranItem,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
