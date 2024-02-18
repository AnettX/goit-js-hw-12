
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { PixabayAPI } from "./js/pixabay-api";
import { renderImages, renderMoreImages, showErrorMatch } from "./js/render-functions";

const refs = {
    formEl: document.querySelector('.js-search-form'),
    imgEl: document.querySelector('.js-image-container'),
    loader: document.querySelector('.loader'),
    btnLoadMore: document.querySelector('.loadmore-btn'),
};

let currentPage = 1;
let currentQuery = ''; 

function showLoader() {
    refs.loader.classList.remove('hidden');
}

function hideLoader() {
    refs.loader.classList.add('hidden');
}

refs.formEl.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

const pixabayAPI = new PixabayAPI();
console.log(pixabayAPI);

async function onFormSubmit(e) {
    e.preventDefault();
    showLoader();

    const query = e.target.elements.text.value;
    currentQuery = query; 
    currentPage = 1; 

    try {
        const data = await pixabayAPI.getImages(query); 
        renderImages(data, refs.imgEl);
        if (data.hits.length === 0) {
            throw new Error('No images found');
        }

        refs.btnLoadMore.style.display = 'block';
    } catch (error) {
        showErrorMatch();
    } finally {
        hideLoader();
    }
}

async function onLoadMoreClick() {
    try {
        const data = await pixabayAPI.getMoreImages(currentQuery, currentPage); 
        renderMoreImages(data, refs.imgEl);
        currentPage++; 
        if (currentPage * PER_PAGE >= data.totalHits) {
            refs.btnLoadMore.style.display = 'none';
        }
    } catch (error) {
        refs.btnLoadMore.style.display = 'block';
    }
}

 


