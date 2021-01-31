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
