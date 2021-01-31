import React, { useState, useEffect, useMemo } from 'react';

// import api from '~/services/api';

// import { Container } from './styles';

// import img1 from '~/assets/img/banner/slider-1/img-1.jpg';
import img2 from '~/assets/img/banner/slider-1/img-2.jpg';

import {Link, useHistory, useLocation} from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel'


export default function Postagem() {

let location = useLocation();
const [currPost, setCurrPost]= useState(location.state);
  console.log("location: ", location.state);

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
              <h1 className="breadcrumb-title">Ver mais</h1>
              <ul className="breadcrumb breadcrumb-transparent">
                <li className="breadcrumb-item">
                  <Link className="text-white" to="/">Home</Link>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Postagem
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
        <div className="card">
          <div className="position-relative">
            <img className="card-img-top" src={currPost.image} alt="Card image cap" />
            <div className="card-img-overlay">
              <span className="badge badge-rounded badge-warning"> {currPost.dateDay} <br /> {currPost.dateMonth}</span>
            </div>
          </div>
          <div className="card-body border-top-5 px-3 rounded-bottom border-warning">
            <h3 className="card-title text-warning mb-5">{currPost.title}</h3>
            <ul className="list-unstyled d-flex mb-5">
              <li className="">
                <a className="text-muted d-inline-block mr-3" href="#user"><i className="fa fa-user mr-2" aria-hidden="true"></i>{currPost.author}</a>
              </li>
              <li className="mr-3">
                <a className="text-muted d-inline-block" href="#comments"><i className="fa fa-comments-o mr-2" aria-hidden="true"></i>0 Comments</a>
              </li>
            </ul>

            <p className="card-text text-justify mb-6">{currPost.content}</p>

            {/* <div className="">
              <ul className="list-inline d-flex mb-0">
                <li className="mr-2">
                  <a className="icon-rounded-circle-small bg-warning" href="javascript:void(0)">
                    <i className="fa fa-facebook text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a className="icon-rounded-circle-small bg-danger" href="javascript:void(0)">
                    <i className="fa fa-twitter text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a className="icon-rounded-circle-small bg-success" href="javascript:void(0)">
                    <i className="fa fa-google-plus text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a className="icon-rounded-circle-small bg-info" href="javascript:void(0)">
                    <i className="fa fa-pinterest-p text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="ml-2">
                  <a className="icon-rounded-circle-small bg-purple" href="javascript:void(0)">
                    <i className="fa fa-vimeo text-white" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      </section>

    </>
  );
}
