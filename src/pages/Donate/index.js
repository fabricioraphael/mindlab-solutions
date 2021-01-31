import React, { useState, useEffect, useMemo } from 'react';

import {Link } from "react-router-dom";

// import { Container } from './styles';

// import img1 from '~/assets/img/banner/slider-1/img-1.jpg';
import img2 from '~/assets/img/banner/slider-1/img-2.jpg';

import Carousel from 'react-bootstrap/Carousel'


export default function Donate() {

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
              <h1 className="breadcrumb-title">Vem com a gente!</h1>
              <ul className="breadcrumb breadcrumb-transparent">
                <li className="breadcrumb-item">
                  <Link className="text-white" to="/">Home</Link>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Doar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
                <h2 className="text-danger pl-0">Doações</h2>
              </div>
              <p className="text-dark font-size-15 mb-4">Sua doação nos permite nutrir, educar e acolher as crianças, além de capacitar as mães. Contribuções financeiras também oferecem a flexibilidade de responder a demandas pontuais como fralda, remédio, aluguel de ônibus para um passeio com as crianças, conserto nas instalações da creche, ou até na casa de uma criança necessitada. Que você seja abençoado e retribuído em muito amor e luz em sua jornada.</p>
              <p className="text-dark font-size-15 mb-4">Compartilhe seu amor com nossas crianças, ou ajude na capacitação das mães ensinando seus talentos. Encontre um tempo em sua agenda, comprometa-se e venha fazer parte deste projeto. Juntos fazemos mais e melhor!</p>
              <p className="text-dark font-size-15 mb-4">Muitas pessoas adorariam receber aquele sapato, brinquedo, ou roupa que está em bom estado, mas já não te serve mais. Desapegar circula energia e ajuda quem precisa. Gratidão pelo seu apoio à alimentação das crianças ou ao nosso bazar!</p>
              <p className="text-dark font-size-15 mb-4">Entre em contato conosco , envie nos um email. <a href="mailto:projetoestruturando@gmail.com" className="mr-lg-4 mr-xl-6 text-black opacity-80">projetoestruturando@gmail.com</a></p>
              
              
              <p className="text-danger font-size-15 mb-4">Formas de doar</p>

              <ul className="list-unstyled mb-5">
                <li className="d-flex align-items-baseline text-muted mb-2">
                  <i className="fa fa-check mr-2" aria-hidden="true"></i>
                  DOE SEU TEMPO: seja um voluntário
                </li>
                <li className="d-flex align-items-baseline text-muted mb-2">
                  <i className="fa fa-check mr-2" aria-hidden="true"></i>
                  DOE DINHEIRO: via transferencia bancaria ou cartão de crédito
                </li>
                <li className="d-flex align-items-baseline text-muted mb-2">
                  <i className="fa fa-check mr-2" aria-hidden="true"></i>
                  OUTRAS DOAÇÕES: Cestas básicas, Cobertores, Objetos e roupas em boas condições
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="section-title justify-content-center mb-5 mb-md-8">
            <span className="shape shape-left bg-info"></span>
            <h2 className="text-danger">Doações em Dinheiro</h2>
            <span className="shape shape-right bg-info"></span>
          </div>

          <div className="row">

            <div className="col-md-6 col-lg-4">
              <div className="card text-center">
                <div className="card-header">
                  Transferência Bancária
                </div>
                <div className="card-body">
                  <h5 className="card-title">Caixa Econômica Federal</h5>
                  <p className="card-text" style={{fontSize: 18}}>Banco: <b>104</b></p>
                  <p className="card-text" style={{fontSize: 18}}>Agência: <b>4760</b></p>
                  <p className="card-text" style={{fontSize: 18}}>Conta: <b>000373-3</b></p>
                  <p className="card-text" style={{fontSize: 18}}>Operação: <b>003</b></p>
                  <p className="card-text" style={{fontSize: 18}}>Cnpj: <b>27.568 052 0001-15</b></p>
                  <p className="card-text" style={{fontSize: 18}}><b>Associação Estruturando</b></p>

                  {/* <a href="#" className="btn btn-primary">Doar</a> */}
                </div>
                <div className="card-footer text-muted">
                  Vem com a gente!
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card text-center">
                <div className="card-header">
                  PicPay
                </div>
                <div className="card-body">
                  <h5 className="card-title">Em Breve!</h5>
                </div>
                <div className="card-footer text-muted">
                  Bem mais fácil!
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card text-center">
                <div className="card-header">
                  PayPal
                </div>
                <div className="card-body">
                  <h5 className="card-title">Em Breve!</h5>
                </div>
                <div className="card-footer text-muted">
                  Basta um clique!
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>

   </>
  );
}
