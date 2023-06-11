import { useEffect, useState } from 'react';
import React from 'react';
import {
    Offcanvas,
    Navbar,
    Nav,
    Button,
    Stack,
    Container,
} from 'react-bootstrap';
import Image from '../components/Image';
import SidebarLinks from '../services/sidebarLinks';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [show, setShow] = useState(false);

    const location = useLocation();

    const page = SidebarLinks.find(link => link.to == location.pathname) || {
        name: 'Clikkle',
        image: 'logos/clikkle.png',
        to: '/',
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
    }, [location.pathname]);

    return (
        <>
            <Navbar bg='white' sticky='top' className='ps-4 p-3' expand='xs'>
                <Container
                    fluid
                    style={{ justifyContent: 'start', alignItems: 'center' }}>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-lg`}
                        onClick={handleShow}
                        style={{
                            border: 0,
                            outline: 0,
                            boxShadow: 'none',
                            marginRight: 0,
                        }}
                    />

                    <a href='#link'>
                        <Image name={page.image} className='logo' />
                    </a>
                    <h4 className='pt-1'>{page.name}</h4>

                    <Offcanvas
                        show={show}
                        onHide={handleClose}
                        backdrop='static'>
                        <Offcanvas.Header
                            closeButton
                            className='offcanvasheader'>
                            <Offcanvas.Title>
                                <div className='d-flex justify-content-start '>
                                    {' '}
                                    <a href='#link'>
                                        <Image
                                            name={page.image}
                                            className='logo'
                                        />
                                    </a>
                                    <h4 className='ps-2 pt-1'>{page.name}</h4>
                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className='menu-bar p-0 m-0'>
                                <Nav className='me-auto'>
                                    <ul>
                                        <li>
                                            <Link to='/' className='link'>
                                                Overview
                                            </Link>{' '}
                                        </li>
                                        <li>
                                            <Nav.Link
                                                href='#home'
                                                className='link'>
                                                Features
                                            </Nav.Link>{' '}
                                        </li>
                                        <li>
                                            <Nav.Link
                                                href='#home'
                                                className='link'>
                                                Customers
                                            </Nav.Link>{' '}
                                        </li>
                                        <li>
                                            <Nav.Link
                                                href='#home'
                                                className='link'>
                                                Pricing
                                            </Nav.Link>{' '}
                                        </li>
                                        <li>
                                            <Nav.Link
                                                href='#home'
                                                className='link'>
                                                More tool
                                            </Nav.Link>{' '}
                                        </li>
                                    </ul>
                                </Nav>
                            </div>
                            <div className='menubar-icons '>
                                {SidebarLinks.map(link => (
                                    <div
                                        className='my-3 icons'
                                        key={link.name}
                                        style={{ paddingBlock: '9px' }}>
                                        <Link to={link.to} className='links'>
                                            <Image name={link.image} />
                                            {link.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </Offcanvas.Body>
                        <Stack
                            direction='vertical'
                            className='p-3'
                            style={{
                                boxShadow:
                                    '0 -1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)',
                            }}>
                            <Button variant='primary' className='my-2'>
                                Try Clikkle Hive
                            </Button>
                            <Button variant='outline-primary' className='my-2'>
                                {' '}
                                Go to Hive{' '}
                            </Button>
                            <a href='#link' className='text-center'>
                                Sign in
                            </a>
                        </Stack>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
