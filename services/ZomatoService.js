import axios from 'axios';

class ZomatoService {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8000/api/what2eat/v1',
      headers: {
        Accept: 'application/json'
      }
    });
  }

  async getCuisines(cityId) {
    const response = await this.client.get(`/cuisines/list/${cityId}`);
    console.log('cccuisines', response);

    return response;
  }

  async getCategories() {
    const response = await this.client.get('categories/list');
    console.log('ccc', response.data);

    return response.data;
  }

  async getEstablishments(cityId) {
    const response = await this.client.get(`/establishments/list/${cityId}`);
    console.log('eee', response);

    return response.data;
  }

  async getMenu(resId) {
    const response = await this.client.get(`/menu/${resId}`);
    console.log('mmm', response);

    return response.data;
  }

  async search(cuisinesId) {
    const response = await this.client.get(`/search/${cuisinesId}`);
    console.log('sss', response);

    return response.data;
  }
}

export default ZomatoService;
