import React, { Component } from 'react';
import './Footer.css';
import { Form, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
          <div className="footer">
            <div class="main-footer">
              <ul class="row mb-4 pt-5 justify-content-lg-center">
                <li class="col foot-item">
                  <NavLink
                      to="/"
                      className="foot-link"
                  >
                    Terms of Use
                  </NavLink>
                </li>
                <li class="col foot-item col-md-auto">
                  <NavLink
                      to="/"
                      className="foot-link"
                  >
                    Privacy and Policy
                  </NavLink>
                </li>
                <li class="col foot-item">
                  <NavLink
                      to="/"
                      className="foot-link"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <ul class="row my-3 justify-content-md-center">
                <li class="col foot-item col-md-auto">
                  <NavLink
                      to="/"
                      className="foot-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M17.25 7.288v1.269c0 .297-.241.539-.538.539h-1.269c-.299 0-.538-.242-.538-.539v-1.269c0-.297.239-.538.538-.538h1.269c.297 0 .538.241.538.538zm-5.25 7.403c1.486 0 2.693-1.205 2.693-2.692s-1.207-2.69-2.693-2.69c-1.487 0-2.691 1.204-2.691 2.691s1.204 2.691 2.691 2.691zm4.261-3.291c.028.196.046.396.046.599 0 2.38-1.928 4.308-4.307 4.308s-4.307-1.928-4.307-4.307c0-.204.018-.403.046-.599.027-.194.066-.383.118-.567h-1.107v5.879c0 .297.241.538.538.538h9.424c.297 0 .538-.241.538-.538v-5.879h-1.107c.05.184.09.373.118.566zm7.739.6c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-5.385c0-.892-.723-1.615-1.615-1.615h-10.77c-.892 0-1.615.723-1.615 1.615v10.769c0 .893.723 1.616 1.615 1.616h10.77c.892 0 1.615-.723 1.615-1.616v-10.769z"/></svg>
                  </NavLink>
                </li>
                <li class="col foot-item col-md-auto">
                  <NavLink
                      to="/"
                      className="foot-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                  </NavLink>
                </li>
                <li class="col foot-item col-md-auto">
                  <NavLink
                      to="/"
                      className="foot-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
    );
  }
}

export default Footer;