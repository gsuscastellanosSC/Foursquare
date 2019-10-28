/* eslint-disable indent */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  "user": {},
  "playing": {},
  "MySites": [],
  "food": [
      {
        "id": 2,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 3,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 4,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 5,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 6,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 7,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
    ],
    "originals": [
      {
        "id": 8,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 9,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 10,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 11,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 12,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
      {
        "id": 13,
        "nameSite": "Catedral-Zipaquira",
        "description": "bla bla bla bla",
        "rating": 10,
        "type": "Diversión",
        "ccomments": "16+",
        "address": "Calle 100# 13-21",
        "city": "Bogota",
        "country": "Colombia",
        "socialMedia": [{ "gmail": "sitio@gmail.com", "facebook": "sitio@gmail.com" }],
        "images": "https://www.colombia.co/wp-content/uploads/2015/09/Catedral-Zipaquir%C3%A1.jpg",
        "source": "https://www.kienyke.com/wp-content/uploads/2018/05/avistamientos.jpeg",
        "coordinates": [{ "lat": 4.6560716, "lng": -74.0595918 }],
      },
    ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
