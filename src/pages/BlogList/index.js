import React, { useState, useEffect, useMemo } from 'react';

import {Link, useHistory, useLocation} from "react-router-dom";

import { useSelector } from 'react-redux';

// import { Container } from './styles';

// import img1 from '~/assets/img/banner/slider-1/img-1.jpg';
import img2 from '~/assets/img/banner/slider-1/img-2.jpg';

import Carousel from 'react-bootstrap/Carousel'

import { store } from '~/store';


export default function BlogList() {


  const blogPosts = useSelector( state => state.auth.blogPosts);

  // const [blogPosts, setBlogPosts]= useState([]);

  useEffect(() => {

    console.log(">>>>>>>>>>>>> blogPosts: ", blogPosts);
    document.getElementById('HOME_BANNER').style.display = "none";

    

    // setBlogPosts(posts)
  }, [blogPosts]);

  return (
    <>
       {/* ====================================
        ———	BREADCRUMB
        ===================================== */}
        <section className="breadcrumb-bg" style={{backgroundImage: `url(assets/img/background/page-title-bg-img.jpg)`}}>
          <div className="container">
            <div className="breadcrumb-holder">
              <div>
                <h1 className="breadcrumb-title">Ultimas Postagens</h1>
                <ul className="breadcrumb breadcrumb-transparent">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      {/* ====================================
      ———	BLOG LIST
      ===================================== */}
      <section className="list-fullwidth py-8 py-md-10">
        <div className="container">

          {blogPosts && blogPosts.map((item, index) => {

            return (
              <div className="media media-list-view mb-5" key={`ID_${item.id}`}>
                <Link className="media-img" to={{pathname: '/postagem', state: item }}>
                  <img src={item.image} alt="Image" />
                  <div className="media-img-overlay">
                    <span className="badge badge-rounded badge-warning"> {item.dateDay} <br /> {item.dateMonth}</span>
                  </div>
                </Link>
    
                <div className="media-body">
                  <h3 className="mb-3 mb-lg-2 mb-xl-3">
                    <Link className="text-warning text-capitalize font-weight-bold" to={{pathname: '/postagem', state: item }}>
                      {item.title}
                    </Link>
                  </h3>
    
                  <ul className="list-unstyled d-flex">
                    <li className="mr-2">
                      <Link className="text-muted" to={{pathname: '/postagem', state: item }}>
                        <i className="fa fa-user mr-2" aria-hidden="true"></i>{item.author}
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link className="text-muted" to={{pathname: '/postagem', state: item }}>
                        <i className="fa fa-comments-o mr-2" aria-hidden="true"></i>0 Comentários
                      </Link>
                    </li>
                  </ul>
    
                  <p className="text-justify mb-lg-2">{item.preview}</p>
    
                  <Link className="btn btn-link text-hover-warning pl-0 text-capitalize text-underline" to={{pathname: '/postagem', state: item }}>
                  <i className="fa fa-angle-double-right mr-1" aria-hidden="true"></i> Read More
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
    </section>
    </>
  );
}
