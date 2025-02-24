import React, { useContext } from 'react';
import '../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../context/DataContext';
import { FaShoppingCart, FaBell } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container, Row, Col, FormControl, Button, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link

function Header() {
    const { setSearchTerm } = useContext(DataContext);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDropdownSelect = (eventKey) => {
        console.log(`Dropdown item selected: ${eventKey}`);
    };

    return (
        <header>
            <Container fluid>
                <Row className="nav-links-top d-flex justify-content-between align-items-center">
                    <Col xs="auto" className="d-flex text-nowrap">
                        <a href="#" className="nav-link">Hi! Sign in or register</a>
                        <a href="#" className="nav-link">Daily Deals</a>
                        <a href="#" className="nav-link">Brand Outlet</a>
                        <a href="#" className="nav-link">Gift Cards</a>
                        <a href="#" className="nav-link">Help & Contact</a>
                    </Col>
                    <Col xs="auto" className="d-flex text-nowrap">
                        <a href="#" className="nav-link">Ship to</a>
                        <a href="#" className="nav-link">Sell</a>
                        <a href="#" className="nav-link">Watchlist</a>
                        <a href="#" className="nav-link">My eBay</a>
                    </Col>
                </Row>
                <Row className="align-items-center search-bar-container">
                    <Col xs="auto">
                        <Link to="/"> {/* Wrap the img with Link */}
                            <img src="/images/ebay-logo.png" alt="eBay Logo" height="30" />
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <select className="form-select border-0 bg-transparent">
                            <option>Shop by category</option>
                            <option>Groceries</option>
                            <option>Drinks</option>
                            <option>Chocolates</option>
                        </select>
                    </Col>
                    <Col md={7}>
                        <InputGroup className="search-bar">
                            <div className="search-input-wrapper">
                                <AiOutlineSearch className="search-icon"/>
                                <FormControl
                                    type="text"
                                    placeholder="Search for anything"
                                    onChange={handleSearchChange}
                                    className="search-input"
                                    aria-label="Text input with dropdown button"
                                />
                            </div>
                            <DropdownButton
                                variant="outline-secondary"
                                title="All Categories"
                                id="input-group-dropdown-2"
                                align="end"
                                onSelect={handleDropdownSelect}
                                className="dropdown-toggle"
                            >
                                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="anotherAction">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="somethingElse">Something else here</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item eventKey="separatedLink">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Col>
                    <Col xs="auto" className="d-flex">
                        <Button variant="primary" className="rounded-pill search-button" size="lg">Search</Button>
                    </Col>
                    <Col xs="auto">
                        <a href="/advanced" className="advanced-link">Advanced</a>
                    </Col>
                    <Col xs="auto" className="d-flex">
                        <div className="icon"><FaBell /></div>
                        <div className="icon"><FaShoppingCart /></div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;