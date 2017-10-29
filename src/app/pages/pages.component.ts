import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { MenuService } from '../theme';
import { pagesMenu } from './pages.menu';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right" translate></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://MurphyOil.com" translate>MurphyOil</a> 2017</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `,
})
export class PagesComponent implements OnInit {

  constructor(public menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.updateMenuByRoutes(<Routes>pagesMenu);
  }
}
