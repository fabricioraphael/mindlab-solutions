import React from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// import Notifications from '~/components/Notifications';

// import logo from '~/assets/logo_corridaperfeita_azul.png';

// import {Container, Content, Profile } from './styles';

export default function Header({ redirectToHome, redirectToAbout, redirectToPosts, redirectToEvents }) {
  // const profile = useSelector(state => state.user.profile);

  return (
    // <Container>
    //   <Content>
    //     <nav>
    //       <img src={logo} alt="Devtime" />
    //       <Link to="/Dashboard">DASHBOARD</Link>
    //     </nav>

    //     <aside>
    //       <Notifications />
    //       <Profile>
    //         <div>
    //           <strong>{profile.username}</strong>
    //           <Link to="/profile">Meu Perfil</Link>
    //         </div>

    //         <img
    //           src="https://api.adorable.io/avatars/50/abott@adorable.png"
    //           alt={profile.username} />
    //       </Profile>
    //     </aside>
    //   </Content>
    // </Container>

    <>
      {/* {/* <!-- ====================================
      ——— HEADER
      ===================================== --> */} 
        {/* <!-- Top Color Bar --> */}
        <div className="color-bars">
          <div className="container-fluid">
            <div className="row">
              <div className="col color-bar bg-warning d-none d-md-block"></div>
              <div className="col color-bar bg-success d-none d-md-block"></div>
              <div className="col color-bar bg-danger d-none d-md-block"></div>
              <div className="col color-bar bg-info d-none d-md-block"></div>
              <div className="col color-bar bg-purple d-none d-md-block"></div>
              <div className="col color-bar bg-pink d-none d-md-block"></div>
              <div className="col color-bar bg-warning"></div>
              <div className="col color-bar bg-success"></div>
              <div className="col color-bar bg-danger"></div>
              <div className="col color-bar bg-info"></div>
              <div className="col color-bar bg-purple"></div>
              <div className="col color-bar bg-pink"></div>
            </div>
          </div>
        </div>

                {/* {/* <!-- Top Bar--> */}
            {/* <!-- d-none d-md-block --> */} 
            <div className=" bg-stone  top-bar">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 d-none d-lg-block">
                    <ul className="list-inline d-flex justify-content-xl-start align-items-center h-100 mb-0">
                      <li>
                        <span className="bg-warning icon-header mr-xl-2">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                        <a href="mailto:projetoestruturando@gmail.com" className="mr-lg-4 mr-xl-6 text-white opacity-80">projetoestruturando@gmail.com</a>
                      </li>
                      {/* <li>
                        <span className="bg-success icon-header mr-xl-2">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        <a href="tel:+1 234 567 8900" className="mr-lg-4 mr-xl-6 text-white opacity-80"> +55 61 3333 4444 </a>
                      </li> */}
                      <li className="text-white">
                        <span className="bg-pink icon-header">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </span>
                        <span className="opacity-80">Horário: 09 às 18</span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-5">
                    <ul className="list-inline d-flex mb-0 justify-content-xl-end justify-content-center align-items-center mr-xl-2">
                      <li className="mr-3">
                        <a className="icon-rounded-circle-small bg-info"  href="https://www.facebook.com/projetoestruturando/" target="_blank">
                          <i className="fa fa-facebook text-white" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-3">
                        <a className="icon-rounded-circle-small bg-danger"  href="https://www.instagram.com/projetoestruturando/" target="_blank">
                          <i className="fa fa-instagram text-white" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-3">
                        <a className="icon-rounded-circle-small bg-warning"  href="/doar">
                          <i className="fa fa-money text-white" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="text-white mr-md-3 mr-lg-2 mr-xl-5">
                        <a className="text-white font-weight-medium opacity-80"  href="/doar">DOAR</a>
                      </li>

                      {/* {/* <!-- <li className="cart-dropdown d-none d-md-block">
                        <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                          <a href="javascript:void(0)">
                            <span className="rounded-sm bg-pink icon-small icon-badge d-none close-icon">
                              <i className="fa fa-close text-white" aria-hidden="true"></i>
                            </span>
                            <span className="rounded-sm bg-pink icon-small icon-badge shopping-icon">
                              <i className="fa fa-shopping-basket text-white" aria-hidden="true"></i>
                              <span className="badge bg-warning">3</span>
                            </span>
                          </a>
                        </div>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="bg-white list-unstyled">
                            <li className="d-flex align-items-center">
                              <i className="fa fa-shopping-basket font-size-20 mr-3" aria-hidden="true"></i>
                              <h3 className="text-capitalize font-weight-bold mb-0">3 items in your cart</h3>
                            </li>
                            <hr />
                            <li>
                              <a href="product-single.html">
                                <div className="media">
                                  <div className="image">
                                    <img className="bg-light rounded-sm px-5 py-3 mr-4" src="assets/img/products/product-sm.png" alt="cart-Image">
                                  </div>
                                  <div className="media-body">
                                    <div className="d-flex justify-content-between">
                                      <h4 className="text-dark">Barbie Racing Car</h4>
                                      <span className="cancel">
                                        <i className="fa fa-close text-muted" aria-hidden="true"></i>
                                      </span>
                                    </div>
                                    <div className="price">
                                      <span className="text-warning font-weight-medium">$50</span>
                                    </div>
                                    <span className="text-muted font-weight-medium text-muted">Qnt: 1</span>
                                  </div>
                                </div>
                              </a>
                              <hr />
                            </li>
                            <li>
                              <a href="product-single.html">
                                <div className="media">
                                  <div className="image">
                                    <img className="bg-light rounded-sm px-5 py-3 mr-4" src="assets/img/products/product-sm.png" alt="cart-Image">
                                  </div>
                                  <div className="media-body">
                                    <div className="d-flex justify-content-between">
                                      <h4 className="text-dark">Barbie Racing Car</h4>
                                      <span className="cancel">
                                        <i className="fa fa-close text-muted" aria-hidden="true"></i>
                                      </span>
                                    </div>
                                    <div className="price">
                                      <span className="text-warning font-weight-medium">$50</span>
                                    </div>
                                    <span className="text-muted font-weight-medium">Qnt: 1</span>
                                  </div>
                                </div>
                              </a>
                              <hr />
                            </li>
                            <li>
                              <a href="product-single.html">
                                <div className="media">
                                  <div className="image">
                                    <img className="bg-light rounded-sm px-5 py-3 mr-4" src="assets/img/products/product-sm.png" alt="cart-Image">
                                  </div>
                                  <div className="media-body">
                                    <div className="d-flex justify-content-between">
                                      <h4 className="text-dark font-weight-bold">Barbie Racing Car</h4>
                                      <span className="cancel">
                                        <i className="fa fa-close text-muted" aria-hidden="true"></i>
                                      </span>
                                    </div>
                                    <div className="price">
                                      <span className="text-warning font-weight-medium">$50</span>
                                    </div>
                                    <span className="text-muted font-weight-medium">Qnt: 1</span>
                                  </div>
                                </div>
                              </a>
                              <hr />
                            </li>
                            <li>
                              <div className="d-flex justify-content-between mb-3">
                                <h3 className="cart-total font-weight-bold">Subtotal</h3>
                                <h3 className="cart-price font-weight-bold">$150</h3>
                              </div>
                              <div className="cart-button d-flex justify-content-between">
                                <button type="button" className="btn btn-danger text-uppercase px-4 shadow-sm mr-3" onClick="location.href='product-checkout-step-1.html';">Checkout</button>
                                <button type="button" className="btn btn-danger text-uppercase px-4 shadow-sm" onClick="location.href='product-cart.html';">View
                                  Cart</button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li> --> */} 
                    </ul>
                  </div>
                </div>
              </div>
            </div>


        {/* {/* <!-- Navbar --> */} 
        <nav className="navbar navbar-expand-md navbar-scrollUp navbar-sticky navbar-white">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img className="d-inline-block" src="assets/img/logo-school.png" alt="Kidz School" />
            </a>

            {/* {/* <!-- cart-dropdown --> */} 
            <div className="dropdown cart-dropdown ml-auto mr-5 d-md-none">
              <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <a 
                // href="javascript:void(0)"
                >
                  <span className="rounded-sm bg-pink icon-small icon-badge d-none close-icon">
                    <i className="fa fa-close text-white" aria-hidden="true"></i>
                  </span>
                  <span className="rounded-sm bg-pink icon-small icon-badge shopping-icon">
                    <i className="fa fa-shopping-basket text-white" aria-hidden="true"></i>
                    <span className="badge bg-warning">3</span>
                  </span>
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-right">
                <ul className="bg-white list-unstyled">
                  <li className="d-flex align-items-center">
                    <i className="fa fa-shopping-basket font-size-20 mr-3" aria-hidden="true"></i>
                    <h3 className="text-capitalize font-weight-bold mb-0">3 items in your cart</h3>
                  </li>
                  <hr />
                  <li>
                    <a href="product-single.html">
                      <div className="media">
                        <div className="image">
                          <img className="bg-light rounded-sm px-5 py-3 mr-4" src="assets/img/products/product-sm.png" alt="cart-Image" />
                        </div>
                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <h4 className="text-dark">Barbie Racing Car</h4>
                            <span className="cancel">
                              <i className="fa fa-close text-muted" aria-hidden="true"></i>
                            </span>
                          </div>
                          <div className="price">
                            <span className="text-warning font-weight-medium">$50</span>
                          </div>
                          <span className="text-muted font-weight-medium text-muted">Qnt: 1</span>
                        </div>
                      </div>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="product-single.html">
                      <div className="media">
                        <div className="image">
                          <img className="bg-light rounded-sm px-5 py-3 mr-4" src="assets/img/products/product-sm.png" alt="cart-Image" />
                        </div>
                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <h4 className="text-dark">Barbie Racing Car</h4>
                            <span className="cancel">
                              <i className="fa fa-close text-muted" aria-hidden="true"></i>
                            </span>
                          </div>
                          <div className="price">
                            <span className="text-warning font-weight-medium">$50</span>
                          </div>
                          <span className="text-muted font-weight-medium">Qnt: 1</span>
                        </div>
                      </div>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="product-single.html">
                      <div className="media">
                        <div className="image">
                          <img className="bg-light rounded-sm px-5 py-3 mr-4t" src="assets/img/products/product-sm.png" alt="cart-Image" />
                        </div>
                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <h4 className="text-dark font-weight-bold">Barbie Racing Car</h4>
                            <span className="cancel">
                              <i className="fa fa-close text-muted" aria-hidden="true"></i>
                            </span>
                          </div>
                          <div className="price">
                            <span className="text-warning font-weight-medium">$50</span>
                          </div>
                          <span className="text-muted font-weight-medium">Qnt: 1</span>
                        </div>
                      </div>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <div className="d-flex justify-content-between mb-3">
                      <h3 className="cart-total font-weight-bold">Subtotal</h3>
                      <h3 className="cart-price font-weight-bold">$150</h3>
                    </div>
                    <div className="cart-button d-flex justify-content-between">
                      <button type="button" className="btn btn-danger text-uppercase px-4 shadow-sm mr-3" 
                      // onClick="location.href='product-checkout-step-1.html';"
                      >Checkout</button>
                      <button type="button" className="btn btn-danger text-uppercase px-4 shadow-sm" 
                      // onClick="location.href='product-cart.html';"
                      >View
                        Cart</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <button className="navbar-toggler py-2" type="button" data-toggle="collapse" data-target="#navbarContent"
              aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item dropdown bg-warning">
                  <a className="nav-link dropdown-toggle  active " 
                    href="/">
                    <i className="fa fa-home nav-icon" aria-hidden="true"></i>
                    <span>Home</span>
                  </a>
                </li>
                <li className="nav-item dropdown bg-danger">
                  <a className="nav-link dropdown-toggle " 
                    href="/sobre-nos">
                    <i className="fa fa-user nav-icon" aria-hidden="true"></i>
                    <span>Sobre Nós</span>
                  </a>
                </li>

                <li className="nav-item dropdown bg-success">
                  <a className="nav-link dropdown-toggle " 
                    href="/doar">
                    <i className="fa fa-money nav-icon" aria-hidden="true"></i>
                    <span>Doar</span>
                  </a>
                </li>

                {/* <li className="nav-item dropdown bg-info">
                  <a className="nav-link dropdown-toggle " 
                    href="/sobre-nos">
                    <i className="fa fa-calendar nav-icon" aria-hidden="true"></i>
                    <span>Agenda</span>
                  </a>
                </li> */}

                <li className="nav-item dropdown bg-purple">
                  <a className="nav-link dropdown-toggle " 
                    href="/blog">
                    <i className="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                    <span>Blog</span>
                  </a>
                </li>


              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}