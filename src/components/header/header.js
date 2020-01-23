import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top d-flex">
        <div class="container">
          <a class="navbar-brand" href="#">Co-op Reports</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#" routerLink="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" routerLink="/aboutme">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" routerLink="/workterms">Work Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
    )
  }
}
