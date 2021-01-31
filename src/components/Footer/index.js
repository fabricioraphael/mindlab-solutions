import React from 'react'
import { useSelector } from 'react-redux';

import {Link} from "react-router-dom";

export default function Footer() {
  // const profile = useSelector(state => state.user.profile);

  const blogPosts = useSelector( state => state.auth.blogPosts);

  return (
    <>
      <footer className="footer-bg-img">
        {/*  <!-- Footer Color Bar --> */} 
        <div className="color-bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col color-bar bg-warning"></div>
              <div className="col color-bar bg-danger"></div>
              <div className="col color-bar bg-success"></div>
              <div className="col color-bar bg-info"></div>
              <div className="col color-bar bg-purple"></div>
              <div className="col color-bar bg-pink"></div>
              <div className="col color-bar bg-warning d-none d-md-block"></div>
              <div className="col color-bar bg-danger d-none d-md-block"></div>
              <div className="col color-bar bg-success d-none d-md-block"></div>
              <div className="col color-bar bg-info d-none d-md-block"></div>
              <div className="col color-bar bg-purple d-none d-md-block"></div>
              <div className="col color-bar bg-pink d-none d-md-block"></div>
            </div>
          </div>
        </div>


        <div className="pt-8 pb-7  bg-repeat" style={{backgroundImage: `url(assets/img/background/footer-bg-img-1.png)`}}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3 col-xs-12">
                <a className="mb-6 d-block" href="/">
                  {/* <img className="img-fluid d-inline-block w-50 lazyestload" data-src="assets/img/logo-footer.png" src="assets/img/logo-footer.png" /> */}
                </a>
                <p className="mb-6">A proposta da MindLab.solutions é inovar neste aspecto, identificando potenciais áreas para o desenvolvimento das tecnologias digitais para prevenção de suicídio, que venham agregar valor substancial as estratégias públicas de prevenção.</p>
              </div>

              <div className="col-sm-6 col-lg-3 col-xs-12">
                <h4 className="section-title-sm font-weight-bold text-white mb-6">Links Direto</h4>
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <a href="https://linktr.ee/mindlab.solutions">
                      <i className="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Sobre Nós
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://www.instagram.com/mindlab.solutions2021/">
                      <i className="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Instagram
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://www.instagram.com/mindlab.solutions2021/">
                      <i className="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div className="col-sm-6 col-lg-3 col-xs-12">
                <h4 className="section-title-sm font-weight-bold text-white mb-6">Posts Recentes</h4>
                <ul className="list-unstyled list-item-border-bottom">


                {blogPosts && blogPosts.map((item, index) => {
                  return (
                    <li className="mb-4 pb-4">
                      <div className="media">
                        <Link to={{pathname: '/postagem', state: item }} className="mr-2" >
                          <img className="rounded-lg w-100 border-warning border-2 d-block" style={{resizeMode: 'cover'}} data-src={item.imageSm}
                            src={item.imageSm} alt="blog-sm-img5.jpg" />
                        </Link>
                        <div className="media-body">
                          <h5 className="line-hight-16 mb-1">
                            <Link to={{pathname: '/postagem', state: item }} className="font-base font-size-14" >
                              {item.title}
                            </Link>
                          </h5>
                          <time className="text-white">{item.dateMonth} {item.dateDay} - 2012</time>
                        </div>
                      </div>
                    </li>
                  );
                })}
                </ul>
              </div> */}

              {/* <div className="col-sm-6 col-lg-3 col-xs-12">
                <h4 className="section-title-sm font-weight-bold text-white mb-6">Lista de Email</h4>
                <p className="mb-4">Faça parte da nossa lista de email e receba atualizações sobre a ONG</p>
                <form className="mb-4" action="">
                  <div className="input-group shadow-light rounded-sm input-addon">
                    <input type="text" className="form-control py-4" placeholder="Endereço de E-mail" aria-describedby="basic-addon21" />
                    <div className="input-group-append ">
                      <div className="input-group-text bg-danger">
                        <i className="fa fa-check text-white" aria-hidden="true"></i></div>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>

        {/*  <!-- Copy Right --> */} 
        <div className="copyright">
          <div className="container">
            <div className="row py-4 align-items-center">
              <div className="col-sm-7 col-xs-12 order-1 order-md-0">
                <p className="copyright-text"> © 2020 Copyright MindLab Solutions developed by <a href="http://www.mindlab.com.br/" target="_blank">mindLab</a></p>
              </div>

              <div className="col-sm-5 col-xs-12">
                <ul className="list-inline d-flex align-items-center justify-content-md-end justify-content-center mb-md-0">
                  <li className="mr-3">
                    <a className="icon-rounded-circle-small bg-warning"  href="https://www.instagram.com/mindlab.solutions2021" target="_blank">
                      <i className="fa fa-facebook text-white" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="mr-3">
                    <a className="icon-rounded-circle-small bg-success"  href="https://www.instagram.com/mindlab.solutions2021" target="_blank">
                      <i className="fa fa-instagram text-white" aria-hidden="true"></i>
                    </a>
                  </li>
                  {/* <li className="mr-3">
                    <a className="icon-rounded-circle-small bg-danger" 
                    // href="javascript:void(0)"
                    >
                      <i className="fa fa-google-plus text-white" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="mr-3">
                    <a className="icon-rounded-circle-small bg-info" 
                    // href="javascript:void(0)"
                    >
                      <i className="fa fa-pinterest-p text-white" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="">
                    <a className="icon-rounded-circle-small bg-purple" 
                    // href="javascript:void(0)"
                    >
                      <i className="fa fa-vimeo text-white" aria-hidden="true"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}