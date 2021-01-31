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


        {/* {/* <!-- Navbar --> */} 
    </>
  )
}