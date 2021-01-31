import React, { useState, useEffect, useMemo } from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import InstagramEmbed from 'react-instagram-embed';

export default function Home() {

  const blogPosts = useSelector( state => state.auth.blogPosts);

  const [instaPosts, setInstaPosts] = useState([
    {id: 1, url: 'https://instagr.am/p/BMAJjKRgLC0/'},
    {id: 2, url: 'https://instagr.am/p/BvL6W30ggXX/'},
    {id: 3, url: 'https://instagr.am/p/CBBcQr5jgH8/'},
    // {id: 4, url: 'https://instagr.am/p/B1O2BD9D-ex/'},
    // {id: 5, url: 'https://instagr.am/p/B3abucVjfE5/'},
    // {id: 6, url: 'https://instagr.am/p/BtTWKW2gboG/'},
  ]);

  useEffect(() => {
    // console.log("FABER_DIV", document.getElementById('FABER_DIV'));
  document.getElementById('HOME_BANNER').style.display = "inherit";
  // $('#FABER_DIV');
  }, []);

  return (
    <>

        {/*  <!-- ====================================
        ———	BOX SECTION
        ===================================== --> */} 
        <section className="d-none d-sm-block section-top">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-sm-3">
                <a href="#courses">
                  <div className="card bg-warning card-hover scrolling">
                    <div className="card-body text-center p-0">
                      <div className="card-icon-border-large border-warning">
                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                      </div>
                      <h2 className="text-white font-size-32 pt-1 pt-lg-5 pb-2 pb-lg-6 mb-0 font-dosis">Sobre Nós</h2>
                      {/* <a href="#courses" className="btn-scroll-down d-block pb-4 pb-lg-5">
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a> */}
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-sm-3">
                <a href="#teachers">
                  <div className="card bg-success card-hover scrolling">
                    <div className="card-body text-center p-0">
                      <div className="card-icon-border-large border-success">
                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                      </div>
                      <h2 className="text-white font-size-32 pt-1 pt-lg-5 pb-2 pb-lg-6 mb-0 font-dosis">Doações</h2>
                      {/* <a href="#teachers" className="btn-scroll-down d-block pb-4 pb-lg-5">
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a> */}
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-sm-3">
                <a 
                href="#gallery">
                  <div className="card bg-danger card-hover scrolling">
                    <div className="card-body text-center p-0">
                      <div className="card-icon-border-large border-danger">
                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                      </div>
                      <h2 className="text-white font-size-32 pt-1 pt-lg-5 pb-2 pb-lg-6 mb-0 font-dosis">Agenda</h2>
                      {/* <a href="#gallery" className="btn-scroll-down d-block pb-4 pb-lg-5">
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a> */}
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-sm-3">
                <a href="#blog">
                  <div className="card bg-info card-hover scrolling">
                    <div className="card-body text-center p-0">
                      <div className="card-icon-border-large border-info">
                        <i className="fa fa-files-o" aria-hidden="true"></i>
                      </div>
                      <h2 className="text-white font-size-32 pt-1 pt-lg-5 pb-2 pb-lg-6 mb-0 font-dosis">Métricas</h2>
                      {/* <a href="#blog" className="btn-scroll-down d-block pb-4 pb-lg-5">
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*  <!-- ====================================
        ———	HOME FEATURE
        ===================================== --> */} 
        <section className="pt-9 pb-6 py-md-7">
          <div className="container">
            <div className="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">
              <span className="shape shape-left bg-info"></span>
              <h2 className="text-danger">Sobre Nós</h2>
              <span className="shape shape-right bg-info"></span>
            </div>

            <p className="mb-4 font-size-20" style={{textAlign: 'center', paddingLeft: '10%', paddingRight: '10%', paddingBottom: '5%'}}>
              A ONG nasceu em 2015 e hoje conta com dezenas de voluntários engajados. <br />
              Desde o início, buscamos mapear as necessidades da comunidade Santa Luzia e trabalhar diretamente em parceria com atores locais.
              Hoje, trabalhamos em colaboração com a Creche Sorriso, aonde ajudamos a construir o espaço, melhorar a estrutura pedagógica, alimentar 60 crianças diariamente, e capacitar as famílias. 
              <Link to="/sobre-nos">Continuar Lendo.</Link>
            </p>

            

            {/* <div className="row wow fadeInUp">
              <div className="col-sm-6 col-xl-4 col-xs-12">
                <div className="media mb-6">
                  <div className="media-icon-large bg-warning mr-xl-4">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>

                  <div className="media-body">
                    <h3 className="text-warning">Professores experiente</h3>
                    <p>Base de professores capacitados e formados para auxiliar no ensino básico das nossas crianças</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-4 col-xs-12">
                <div className="media mb-6">
                  <div className="media-icon-large bg-success mr-xl-4">
                    <i className="fa fa-leaf" aria-hidden="true"></i>
                  </div>

                  <div className="media-body">
                    <h3 className="text-success">Filosofia Sustentável</h3>
                    <p>Prezamos sempre por ideias sustentáveis tanto no contexto financeiro quando da natureza</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-4 col-xs-12">
                <div className="media mb-6">
                  <div className="media-icon-large bg-danger mr-xl-4">
                    <i className="fa fa-car" aria-hidden="true"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="text-danger">Transporte</h3>
                    <p>Auxiliamos no transporte dos alunos ate a chegada na escola sem muitas complicações.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 col-xs-12">
                <div className="media mb-6">
                  <div className="media-icon-large bg-info mr-xl-4">
                    <i className="fa fa-cutlery" aria-hidden="true"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="text-info">Alimentação balanceada</h3>
                    <p>Disponibilizamos um cardápio variado e balanceado para os nosso alunos e assistidos.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-4 col-xs-12">
                <div className="media mb-6">
                  <div className="media-icon-large bg-purple mr-xl-4">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="text-purple">Cuidado & Carinho</h3>
                    <p>Além de todo o auxilio, tentamos sempre fazer tudo com muito carinho</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-4 col-xs-12">
                <div className="media mb-7">
                  <div className="media-icon-large bg-pink mr-xl-4">
                    <i className="fa fa-shield" aria-hidden="true"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="text-pink">Segurança</h3>
                    <p>Entregamos sempre um ambiente seguro e protegido.</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/*  <!-- ====================================
        ———	CALL TO ACTION
        ===================================== --> */} 
        <section className="py-9 bg-parallax" style={{backgroundImage: `url(assets/img/background/background-img-1.jpg)`}}>
          <div className="container">
            <div className="wow fadeInUp">
              <div className="section-title justify-content-center">
                <h2 className="text-white text-center">O que você achou?</h2>
              </div>
              <div className="text-center">
                <p className="text-white font-size-18 mb-0">Quer fazer parte disso?</p>
                <Link to="sobre-nos" className="btn btn-danger shadow-sm text-uppercase mt-4">
                  <i className="fa fa-search mr-2" aria-hidden="true"></i>Conhecer Melhor
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/*  <!-- ====================================
        ———	GALLERY
        ===================================== --> */} 
        <section className="pt-9 pb-7 py-md-10" id="gallery">
          <div className="container">
            <div className="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">
              <span className="shape shape-left bg-info"></span>
              <h2 className="text-danger">Galeria</h2>
              <span className="shape shape-right bg-info"></span>
            </div>

            <div className="d-flex justify-content-center wow fadeInUp">
              <div id="filters" className="button-group">
                <button className="button is-checked" data-filter="*">Todos</button>
                <button className="button" data-filter=".charity">Cursos</button>
                <button className="button" data-filter=".nature">Eventos</button>
                <button className="button" data-filter=".children">Dia-Dia</button>
              </div>
            </div>

            <div id="gallery-grid">
              <div className="row grid wow fadeInUp">
                <div className="col-md-4 col-lg-3 col-xs-12 element-item nature">
                  <div className="media media-hoverable justify-content-center">
                    <div className="position-relative w-100">
                      <img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img1.jpg" src="assets/img/gallery/gallery-img1.jpg" alt="gallery-img" />
                      <a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img1.jpg">
                        <div className="btn btn-squre">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xs-12 element-item charity">
                  <div className="media media-hoverable justify-content-center">
                    <div className="position-relative w-100">
                      <img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img2.jpg" src="assets/img/gallery/gallery-img2.jpg" alt="gallery-img" />
                      <a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img2.jpg">
                        <div className="btn btn-squre">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xs-12 element-item children nature">
                  <div className="media media-hoverable justify-content-center">
                    <div className="position-relative w-100">
                      <img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img3.jpg" src="assets/img/gallery/gallery-img3.jpg" alt="gallery-img" />
                      <a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img3.jpg">
                        <div className="btn btn-squre">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xs-12 element-item children charity">
                  <div className="media media-hoverable justify-content-center">
                    <div className="position-relative w-100">
                      <img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img4.jpg" src="assets/img/gallery/gallery-img4.jpg" alt="gallery-img" />
                      <a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img4.jpg">
                        <div className="btn btn-squre">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xs-12 element-item nature">
                  <div className="media media-hoverable justify-content-center">
                    <div className="position-relative w-100">
                      <img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img5.jpg" src="assets/img/gallery/gallery-img5.jpg" alt="gallery-img" />
                      <a className="media-img-overlay" data-fancybox="gallery"
                      href="assets/img/gallery/gallery-lg-img5.jpg">
                        <div className="btn btn-squre">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xs-12 element-item children charity">
                  <div className="media media-hoverable justify-content-center">
                    <div className="position-relative w-100">
                      <img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img6.jpg" src="assets/img/gallery/gallery-img6.jpg" alt="gallery-img" />
                      <a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img6.jpg">
                        <div className="btn btn-squre">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xs-12 element-item children charity">
                  <div className="media media-hoverable justify-content-center">
                    <div className="position-relative w-100">
                      <img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img7.jpg" src="assets/img/gallery/gallery-img7.jpg" alt="gallery-img" />
                      <a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img7.jpg">
                        <div className="btn btn-squre">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xs-12 element-item nature">
                  <div className="media media-hoverable justify-content-center">
                    <div className="position-relative w-100">
                      <img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img8.jpg" src="assets/img/gallery/gallery-img8.jpg" alt="gallery-img" />
                      <a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img8.jpg">
                        <div className="btn btn-squre">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-aria text-center mt-4 wow fadeInUp">
              <a href="/" className="btn btn-danger text-uppercase box-shadow">Ver mais</a>
            </div>
          </div>
        </section>

        {/*  <!-- ====================================
        ———	COUNTER-UP SECTION
        ===================================== --> */} 
        <section className="py-9 pb-8 bg-parallax" style={{backgroundImage: `url(assets/img/background/countup-bg-img.jpg)`}}> 
          <div className="container">
            <div className="sectionTitleSmall text-center mb-7 wow fadeInUp">
              <h2 className="font-weight-bold text-white">Métricas</h2>
              <p className="text-white font-size-15">Um pouco mais sobre os nossos números</p>
            </div>

            {/* <div className="row wow fadeInUp" id="counter">
              <div className="col-sm-3 col-xs-12">
                <div  className="text-center text-white mb-5">
                  <div className="counter-value" data-count="436">436</div>
                  <span className="d-inline-block bg-warning text-uppercase font-weight-medium rounded-sm shadow-sm mt-1 py-2 px-3">Cestas Básicas</span>
                </div>
              </div>

              <div className="col-sm-3 col-xs-12">
                <div className="text-center text-white mb-5">
                  <div className="counter-value" data-count="323">323</div>
                  <span className="d-inline-block bg-success text-uppercase font-weight-medium rounded-sm shadow-sm mt-1 py-2 px-3">Familias Assistidas</span>
                </div>
              </div>

              <div className="col-sm-3 col-xs-12">
                <div className="text-center text-white mb-5">
                  <div className="counter-value" data-count="412">412</div>
                  <span className="d-inline-block bg-danger text-uppercase font-weight-medium rounded-sm shadow-sm mt-1 py-2 px-3">Crianças Acolhidas</span>
                </div>
              </div>

              <div className="col-sm-3 col-xs-12">
                <div className="text-center text-white mb-5">
                  <div className="counter-value" data-count="925">925</div>
                  <span className="d-inline-block bg-info text-uppercase font-weight-medium rounded-sm shadow-sm mt-1 py-2 px-3">Horas Gastas</span>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/*  <!-- ====================================
        ———	BLOG SECTION
        ===================================== --> */} 
        <section className="pt-9 pb-7" id="blog">
          <div className="container">
            <div className="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">
              <span className="shape shape-left bg-info"></span>
              <h2 className="text-danger">Ultimas Notícias</h2>
              <span className="shape shape-right bg-info"></span>
            </div>

            <div className="row wow fadeInUp">


              {blogPosts && blogPosts.map((item, index) => {
                return (
                  <div className="col-md-4" key={`ID_${item.id}`}>
                    <div className="card">
                      <div className="position-relative">
                        {/* <Link to={`/blog/post/${item.id}`} params={{ post: item }}> */}
                        <Link to={{pathname: '/postagem', state: item }} params={{ post: item }}>
                        
                          <img className="card-img-top lazyestload" data-src={item.image} src={item.image} alt="Card image" />
                        </Link>
                        <div className="card-img-overlay p-0">
                          <span className="badge badge-rounded badge-warning m-4"> {item.dateDay} <br /> {item.dateMonth}</span>
                        </div>
                      </div>

                      <div className="card-body border-top-5 px-3 border-warning">
                        <h3 className="card-title">
                          {/* <Link className="text-warning text-capitalize d-block text-truncate" to={{pathname: '/blog/post', state: item }}>{item.title}</Link> */}
                          <Link to={{pathname: '/postagem', state: item }}>{item.title}</Link>
                        </h3>
                        <ul className="list-unstyled d-flex flex-md-column flex-lg-row">
                          
                          <li className="mr-2">
                            <a className="text-muted" href="#">
                              <i className="fa fa-user mr-2" aria-hidden="true"></i>{item.author}
                            </a>
                          </li>
                          <li className="mr-2">
                            <a className="text-muted" href="#">
                              <i className="fa fa-comments-o mr-2" aria-hidden="true"></i>0 comentários
                            </a>
                          </li>
                        </ul>
                        <p className="mb-2"> {item.preview}</p>
                        <a className="btn btn-link text-hover-warning pl-0" href="#">
                          <i className="fa fa-angle-double-right mr-1" aria-hidden="true"></i> Ler mais
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="btn-aria text-center mt-4 wow fadeInUp">
              <a href="/blog" className="btn btn-danger text-uppercase">Ver Mais</a>
            </div>

            
          </div>
        </section>

        <section className="pt-9 pb-7" id="blog">
          <div className="container">
            <div className="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">
              <span className="shape shape-left bg-info"></span>
              <h2 className="text-danger">Ultimas do Instagram</h2>
              <span className="shape shape-right bg-info"></span>
            </div>

            <div className="row wow fadeInUp">



              {instaPosts && instaPosts.map((item, index) => {
                return (
                  <div className="col-md-4" key={`ID_${item.id}`}>
                    <InstagramEmbed
                      url={item.url}
                      maxWidth={320}
                      hideCaption={true}
                      containerTagName='div'
                      protocol=''
                      injectScript
                      onLoading={() => {}}
                      onSuccess={() => {}}
                      onAfterRender={() => {}}
                      onFailure={() => {}}
                    />
                  </div>
                )
              })}
            </div>

            <div className="btn-aria text-center mt-4 wow fadeInUp">
              <a href="https://www.instagram.com/projetoestruturando/" target="_blank" className="btn btn-danger text-uppercase">Visitar Nosso Instagram</a>
            </div>

            
          </div>
        </section>
        

        {/*  <!-- ====================================
        ———	CONTACT SECTION
        ===================================== --> */} 
        <section className="bg-light py-7 py-md-10">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-sm-6 col-xs-12">
                <div className="section-title align-items-baseline mb-4">
                  <h2 className="text-danger px-0 mb-0">Nosso enderenço</h2>
                </div>
                <p className="text-dark font-size-15">A ONG fica localizada na cidade estrutural, na capital nacional do Brasil.</p>
                <ul className="list-unstyled">
                  <li className="media align-items-center mb-3">
                    <div className="icon-rounded-circle-small bg-warning mr-2">
                      <i className="fa fa-map-marker text-white"></i>
                    </div>
                    <div className="media-body">
                      <p className="mb-0">9/4/C Cidade Estrutural Rua 4,Brasilia-DF</p>
                    </div>
                  </li>
                  <li className="media align-items-center mb-3">
                    <div className="icon-rounded-circle-small bg-success mr-2">
                      <i className="fa fa-envelope text-white"></i>
                    </div>
                    <div className="media-body">
                      <p className="mb-0"><a className="text-color" href="mailto:projetoestruturando@gmail.com">projetoestruturando@gmail.com</a></p>
                    </div>
                  </li>
                  <li className="media align-items-center mb-3">
                    <div className="icon-rounded-circle-small bg-info mr-2">
                      <i className="fa fa-phone text-white"></i>
                    </div>
                    {/* <div className="media-body">
                      <p className="mb-0"><a className="text-color" href="tel:[55] 61 3333 4444">+55 61 3333 4444</a></p>
                    </div> */}
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-xs-12">
                <form>
                  <div className="form-group form-group-icon">
                    <i className="fa fa-user "></i>
                    <input type="text" className="form-control border-warning" placeholder="First name" required />
                  </div>
                  <div className="form-group form-group-icon">
                    <i className="fa fa-envelope "></i>
                    <input type="email" className="form-control border-success" placeholder="Email address" required />
                  </div>
                  <div className="form-group form-group-icon">
                    <i className="fa fa-comments "></i>
                    <textarea className="form-control border-info" placeholder="Write message" rows="6"></textarea>
                  </div>
                    <button type="submit" className="btn btn-danger float-right text-uppercase">
                      Enviar mensagem
                    </button>
                </form>
              </div>
            </div>
          </div>
        </section>

    <div className="scrolling">
      <a href="#pageTop" className="back-to-top" id="back-to-top">
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </a>
    </div>

    <script src="./assets/plugins/jquery/jquery.min.js"></script>
    <script src="./assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/plugins/owl-carousel/owl.carousel.min.js"></script>
    <script src="./assets/plugins/fancybox/jquery.fancybox.min.js"></script>
    <script src="./assets/plugins/isotope/isotope.min.js"></script>
    <script src="./assets/plugins/syotimer/jquery.syotimer.min.js"></script>
    <script src="./assets/plugins/select2/js/select2.min.js"></script>
    <script src="./assets/plugins/no-ui-slider/nouislider.min.js"></script>
    <script src="./assets/plugins/lazyestload/lazyestload.js"></script>
    <script src="./assets/plugins/velocity/velocity.min.js"></script>
    <script src="./assets/plugins/images-loaded/js/imagesloaded.pkgd.min.js"></script>
    <script src="./assets/plugins/revolution/js/jquery.themepunch.tools.min.js"></script>
    <script src="./assets/plugins/revolution/js/jquery.themepunch.revolution.min.js"></script>

    <script src="assets/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
    <script src="assets/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script src="assets/plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></script> 

    <script src="./assets/plugins/wow/wow.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDU79W1lu5f6PIiuMqNfT1C6M0e_lq1ECY"></script>

    <script src="./assets/js/kidz.js"></script>
    </>
  );
}
