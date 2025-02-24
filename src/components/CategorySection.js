import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import '../css/CategorySection.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext'; // Import DataContext

function CategorySection() {
    const { categories, loading, error } = useContext(DataContext); // Use DataContext

    if (loading) {
        return <p>Loading categories...</p>;
    }

    if (error) {
        return <p>Error loading categories: {error.message}</p>;
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Container className="category-section">
            <h2>Explore Popular Categories</h2>
            <Slider {...settings}>
                {categories.map((category) => (
                    <div key={category.id}>
                        <div className="category-item">
                            <Link to={`/category/${category.id}`}>
                                <img src={category.image} alt={category.name} className="img-fluid" />
                                <p className="text-center">{category.name}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    );
}

export default CategorySection;