import axios from 'axios';

export async function fetchImages(value, page) {
    const url = 'https://pixabay.com/api/'
    const key = '32598741-724a4b929e0e736aaf2a0adfe';
    const filter = `?key=${key}&q=${value}$&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
    return await axios.get(`${url}${filter}`).then(response => response.data);
}