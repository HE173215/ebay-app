import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [carts, setCarts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // Add search term state

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const categoriesResponse = await axios.get('http://localhost:9999/categories');
                setCategories(categoriesResponse.data);

                const productsResponse = await axios.get('http://localhost:9999/products');
                setProducts(productsResponse.data);

                const usersResponse = await axios.get('http://localhost:9999/users');
                setUsers(usersResponse.data);

                const cartsResponse = await axios.get('http://localhost:9999/carts');
                setCarts(cartsResponse.data);

                const reviewsResponse = await axios.get('http://localhost:9999/reviews');
                setReviews(reviewsResponse.data);

                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    const addProduct = async (product) => {
        try {
            const response = await axios.post('http://localhost:9999/products', product);
            setProducts([...products, response.data]);
        } catch (err) {
            console.error('Error adding product:', err);
            setError(err);
        }
    };

    const updateProduct = async (id, updatedProduct) => {
        try {
            const response = await axios.put(`http://localhost:9999/products/${id}`, updatedProduct);
            setProducts(products.map(product => product.id === id ? response.data : product));
        } catch (err) {
            console.error('Error updating product:', err);
            setError(err);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:9999/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (err) {
            console.error('Error deleting product:', err);
            setError(err);
        }
    };

    const addUser = async (user) => {
        try {
            const response = await axios.post('http://localhost:9999/users', user);
            setUsers([...users, response.data]);
        } catch (err) {
            console.error('Error adding user:', err);
            setError(err);
        }
    };

    const updateUser = async (id, updatedUser) => {
        try {
            const response = await axios.put(`http://localhost:9999/users/${id}`, updatedUser);
            setUsers(users.map(user => user.id === id ? response.data : user));
        } catch (err) {
            console.error('Error updating user:', err);
            setError(err);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:9999/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            console.error('Error deleting user:', err);
            setError(err);
        }
    };

    const addCart = async (cart) => {
        try {
            const response = await axios.post('http://localhost:9999/carts', cart);
            setCarts([...carts, response.data]);
        } catch (err) {
            console.error('Error adding cart:', err);
            setError(err);
        }
    };

    const updateCart = async (userId, updatedCart) => {
        try {
            const response = await axios.put(`http://localhost:9999/carts/${userId}`, updatedCart);
            setCarts(carts.map(cart => cart.userId === userId ? response.data : cart));
        } catch (err) {
            console.error('Error updating cart:', err);
            setError(err);
        }
    };

    const deleteCart = async (userId) => {
        try {
            await axios.delete(`http://localhost:9999/carts/${userId}`);
            setCarts(carts.filter(cart => cart.userId !== userId));
        } catch (err) {
            console.error('Error deleting cart:', err);
            setError(err);
        }
    };

    const addReview = async (review) => {
        try {
            const response = await axios.post('http://localhost:9999/reviews', review);
            setReviews([...reviews, response.data]);
        } catch (err) {
            console.error('Error adding review:', err);
            setError(err);
        }
    };

    const updateReview = async (productId, userId, updatedReview) => {
        try {
            const response = await axios.put(`http://localhost:9999/reviews/${productId}/${userId}`, updatedReview);
            setReviews(reviews.map(review => review.productId === productId && review.userId === userId ? response.data : review));
        } catch (err) {
            console.error('Error updating review:', err);
            setError(err);
        }
    };

    const deleteReview = async (productId, userId) => {
        try {
            await axios.delete(`http://localhost:9999/reviews/${productId}/${userId}`);
            setReviews(reviews.filter(review => !(review.productId === productId && review.userId === userId)));
        } catch (err) {
            console.error('Error deleting review:', err);
            setError(err);
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <DataContext.Provider
            value={{
                categories,
                products,
                users,
                carts,
                reviews,
                loading,
                error,
                addProduct,
                updateProduct,
                deleteProduct,
                addUser,
                updateUser,
                deleteUser,
                addCart,
                updateCart,
                deleteCart,
                addReview,
                updateReview,
                deleteReview,
                searchTerm,
                setSearchTerm,
                filteredProducts,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;