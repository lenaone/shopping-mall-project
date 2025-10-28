// API configuration for production and development
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/data'  // Use static files on Netlify
  : 'http://localhost:4000';

export const getProducts = async () => {
  try {
    let url;
    if (process.env.NODE_ENV === 'production') {
      url = '/data/products.json';
    } else {
      url = `${API_BASE_URL}/products`;
    }
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    return process.env.NODE_ENV === 'production' ? data.products : data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    let url;
    if (process.env.NODE_ENV === 'production') {
      // In production, get all products and find the one with matching id
      url = '/data/products.json';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data.products.find(product => product.id === parseInt(id));
    } else {
      url = `${API_BASE_URL}/products/${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return await response.json();
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};