import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function ProductPage() {
    const { categoryId } = useParams();
    const { products, categories, loading, error } = useContext(DataContext);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error loading products: {error.message}</p>;
    }

    const category = categories.find((cat) => cat.id);
    const categoryName = category ? category.name : 'Unknown Category';

    const filteredProducts = products.filter(
        (product) => product.categoryId === parseInt(categoryId)
    );

    return (
        <Container>
            <h2>Products in Category {categoryName}</h2>
            <Row>
                {filteredProducts.map((product) => (
                    <Col md={4} key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: {product.price}</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductPage;