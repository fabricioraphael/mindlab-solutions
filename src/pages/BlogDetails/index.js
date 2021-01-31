import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import {Link, useHistory, useLocation} from "react-router-dom";

export default function BlogDetails(props) {

  // let location = useLocation();
  // console.log(location);
  

  // const history = useHistory();

  // const blogPosts = useSelector( state => state.auth.blogPosts);

  // const [currPost, setCurrPost]= useState({});

  // useEffect(() => {

    
  //   console.log(">>>>>>>>>>>>> this.props.match.params.userID: ", props.match.params.postID);
  //   console.log(">>>>>>>>>>>>> this.props.match.params.post: ", props.match.params.post);
  //   console.log(">>>>>>>>>>>>> this.props.match.params.post2: ", props.location.post);
    
    
  //   document.getElementById('HOME_BANNER').style.display = "none";
    
  //   const currP = blogPosts.filter((item) => `${item.id}` === '1')

  //   console.log(">>>>>>>>>>>>> currP: ", currP);

  //   // if (currP && currP.length > 0) {
  //   //   setCurrPost(currP[0])
  //   // } else {
  //   //   history.push("/");
  //   // }

  // }, [blogPosts, history, props.location.post, props.match.params.post, props.match.params.postID]);

  useEffect(() => {
    document.getElementById('HOME_BANNER').style.display = "none";
    }, []);
  
    return (
      <>
        {/* ====================================
        ———	BREADCRUMB
        ===================================== */}
        <section className="breadcrumb-bg"  style={{backgroundImage: `url(assets/img/background/page-title-bg-img.jpg)`}}>
          <div className="container">
            <div className="breadcrumb-holder">
              <div>
                <h1 className="breadcrumb-title">Sobre Nós</h1>
                <ul className="breadcrumb breadcrumb-transparent">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Sobre Nós
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* ====================================
        ———	ABOUT MEDIA
        ===================================== */}
        <section className="py-7 py-md-10">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 order-md-1">
              <div className="image mb-4 mb-md-0">
                <img className="img-fluid rounded" src="assets/img/features/features-img1.jpg" alt="features-img1.jpg" />
              </div>
            </div>
  
            <div className="col-sm-6 col-xs-12">
              <div className="">
                <div className="section-title mb-4">
                  <h2 className="text-danger pl-0">Bem Vindo ao Projeto Estruturando</h2>
                </div>
                <p className="text-dark font-size-15 mb-4">A ONG nasceu em 2015 e hoje conta com dezenas de voluntários engajados. Desde o início, buscamos mapear as necessidades da comunidade Santa Luzia e trabalhar diretamente em parceria com atores locais. Hoje, trabalhamos em colaboração com a Creche Sorriso, aonde ajudamos a construir o espaço, melhorar a estrutura pedagógica, alimentar 60 crianças diariamente, e capacitar as famílias.</p>
                <p className="text-danger font-size-15 mb-4">Frentes de Atuação</p>
  
                <ul className="list-unstyled mb-5">
                  <li className="d-flex align-items-baseline text-muted mb-2">
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    Creche para crianças de 0 a 6 anos
                  </li>
                  <li className="d-flex align-items-baseline text-muted mb-2">
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    5 refeições por criança por dia
                  </li>
                  <li className="d-flex align-items-baseline text-muted mb-2">
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    Capacitaçãao e treinamento das famílias
                  </li>
                  <li className="d-flex align-items-baseline text-muted mb-2">
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    Projeto de artezanato feito pelas mães
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </section>
  
        {/* ====================================
        ———	ABOUT SERVICES
        ===================================== */}
        <section className="bg-info text-white pt-9 pb-8" style={{backgroundImage: `url(assets/img/background/avator-bg.png)`}}>
        <div className="container">
          <div className="section-title justify-content-center mb-4 mb-md-8">
            <span className="shape shape-left bg-danger"></span>
            <h2 className="text-white">Nossos Pilares</h2>
            <span className="shape shape-right bg-danger"></span>
          </div>
  
          <div className="row">
            <div className="col-sm-4 offset-sm-2 col-xs-12">
              <div className="media flex-sm-column flex-lg-row text-sm-right mb-7">
                <a className="media-icon-large shadow-none ml-auto mr-4 mr-md-0 p-0 order-lg-1" href="services-details.html">
                  <i className="fa fa-heart extra-large" aria-hidden="true"></i>
                </a>
  
                <div className="media-body mt-sm-3 mt-lg-0 mr-lg-3">
                  <h3 className="text-truncate">ACOLHER</h3>
                  <p className="text-white font-weight-light opacity-70 mb-0">Criamos um espaço físico digno de acolhimento  as crianças. Onde podem  brincar, tomar banho, dormirem  seus soninhos da tarde, e   passarem o dia.</p>
                </div>
              </div>
  
              <div className="media flex-sm-column flex-lg-row text-sm-right mb-7">
                <a className="media-icon-large shadow-none mr-4 mr-md-0 p-0 ml-auto order-lg-1" href="services-details.html">
                  <i className="fa fa-graduation-cap extra-large" aria-hidden="true"></i>
                </a>
                <div className="media-body mt-sm-3 mt-lg-0 mr-lg-3">
                <h3 className="text-truncate">EDUCAR</h3>
                  <p className="text-white font-weight-light opacity-70 mb-0">Este é o caminho de transformação. Voluntários fazem atividades pedagógicas com as crianças como contar histórias, fazer desenhos, colagens, brincadeiras diversas... E sempre que possível passeios fora da Comunidade .</p>
                </div>
              </div>
            </div>
  
            <div className="col-sm-4 col-xs-12">
              <div className="media flex-sm-column flex-lg-row mb-7">
                <a className="media-icon-large shadow-none mr-4 p-0 mr-lg-3 mr-md-0" href="services-details.html">
                  <i className="fa fa-cutlery extra-large" aria-hidden="true"></i>
                </a>
                <div className="media-body mt-sm-3 mt-lg-0">
                  <h3 className="text-truncate">ALIMENTAR</h3>
                  <p className="text-white font-weight-light opacity-70 mb-0">Entendemos que sem a devida nutrição a criança perde em saúde e aprendizado. Arrecadamos doações e conseguimos manter 5 refeições diárias para as 60 crianças.</p>
                </div>
              </div>
  
              <div className="media flex-sm-column flex-lg-row mb-7">
                <a className="media-icon-large shadow-none mr-4 p-0 mr-lg-3 mr-md-0" href="services-details.html">
                  <i className="fa fa-shield extra-large" aria-hidden="true"></i>
                </a>
                <div className="media-body mt-sm-3 mt-lg-0">
                  <h3 className="text-truncate">CAPACITAR</h3>
                  <p className="text-white font-weight-light opacity-70 mb-0">Voluntárias se dedicam a capacitação das mulheres da comunidade com cursos diversos que possibilitem uma renda extra ou até mesmo uma profissionalização nas áreas de gastronomia, bijouterias, saboaria, manualidades... Ensinar a pescar é sempre melhor que apenas dar o peixe pois, promove expectativa maior de mudanças </p>
                </div>
              </div>
  
            </div>
          </div>
        </div>
        </section>
  
        {/* ====================================
        ——— Meet Our	Teacher
        ===================================== */}
        <section className="py-10 bg-white">
        <div className="container">
          <div className="section-title justify-content-center mb-4 mb-md-8">
            <span className="shape shape-left bg-info"></span>
            <h2 className="text-danger">Nossos colaboradores</h2>
            <span className="shape shape-right bg-info"></span>
          </div>
  
          <div className="row">
            <div className="col-sm-3">
              <div className="card card-hover bg-transparent shadow-none">
                <div className="card-img-wrapper position-relative shadow-sm rounded-circle mx-auto">
                  <img className="card-img-top rounded-circle" src="assets/img/avator/avator-img1.jpg" alt="carousel-img"/>
                  <div className="card-img-overlay text-center rounded-circle">
                    <ul className="list-unstyled mb-0 d-flex align-items-center h-100 justify-content-center">
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body text-center">
                  <a className="text-danger font-size-20 font-weight-medium d-block" href="teachers-details.html">Angela Castilho</a>
                  <span className="text-muted">Presidente</span>
                </div>
              </div>
            </div>
  
            <div className="col-sm-3">
              <div className="card card-hover bg-transparent shadow-none">
                <div className="card-img-wrapper position-relative shadow-sm rounded-circle mx-auto">
                  <img className="card-img-top rounded-circle" src="assets/img/avator/avator-img2.jpg" alt="carousel-img"/>
                  <div className="card-img-overlay text-center rounded-circle">
                    <ul className="list-unstyled mb-0 d-flex align-items-center h-100 justify-content-center">
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body position-relative text-center pb-0">
                  <a className="text-danger font-size-20 font-weight-medium d-block" href="teachers-details.html">Victoria Brito</a>
                  <span className="text-muted">Professora</span>
                </div>
              </div>
            </div>
  
            <div className="col-sm-3">
              <div className="card card-hover bg-transparent shadow-none">
                <div className="card-img-wrapper position-relative shadow-sm rounded-circle mx-auto">
                  <img className="card-img-top rounded-circle" src="assets/img/avator/avator-img3.jpg" alt="carousel-img"/>
                  <div className="card-img-overlay text-center rounded-circle">
                    <ul className="list-unstyled mb-0 d-flex align-items-center h-100 justify-content-center">
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body position-relative text-center pb-0">
                  <a className="text-danger font-size-20 font-weight-medium d-block" href="teachers-details.html">Raphael Faber</a>
                  <span className="text-muted">Professor</span>
                </div>
              </div>
            </div>
  
            <div className="col-sm-3">
              <div className="card card-hover bg-transparent shadow-none">
                <div className="card-img-wrapper position-relative shadow-sm rounded-circle mx-auto">
                  <img className="card-img-top rounded-circle" src="assets/img/avator/avator-img4.jpg" alt="carousel-img"/>
                  <div className="card-img-overlay text-center rounded-circle">
                    <ul className="list-unstyled mb-0 d-flex align-items-center h-100 justify-content-center">
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="mr-2">
                        <a href="#" className="text-white">
                          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body position-relative text-center pb-0">
                  <a className="text-danger font-size-20 font-weight-medium d-block" href="teachers-details.html">Regina Gomes</a>
                  <span className="text-muted">Operação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </>
    );
}
