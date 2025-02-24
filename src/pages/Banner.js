import React, { useContext } from 'react';
import { Button, Typography, Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../css/Banner.css';
import { DataContext } from '../context/DataContext';

const { Title, Paragraph } = Typography;

function Banner() {
    const { categories, loading, error } = useContext(DataContext);


    if (loading) {
        return <p>Loading categories...</p>;
    }

    if (error) {
        return <p>Error loading categories: {error.message}</p>;
    }

    return (
        <div>
            <Menu mode="horizontal" style={{ justifyContent: 'center' }}>
                {categories.map((category) => (
                    <Menu.Item key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </Menu.Item>
                ))}
            </Menu>
            <div style={{ backgroundColor: '#ffd700', padding: '100px', minHeight: '400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '50%' }}>
                    <Title level={2} style={{ fontSize: '3.5rem' }}>Discover a kaleidoscope of cards</Title>
                    <Paragraph style={{ fontSize: '1.3rem' }}>Build your collection of trading cards and collectible card games.</Paragraph>
                    <Button type="primary" size="large" style={{ padding: '18px 35px', fontSize: '1.3rem' }}>Find your favorites</Button>
                </div>
                <img src="/images/ebay-logo.png" alt="Card Collage" style={{ position: 'absolute', top: 0, right: 0, width: '65%', height: '60%', objectFit: 'contain' }} />
            </div>
        </div>
    );
}

export default Banner;