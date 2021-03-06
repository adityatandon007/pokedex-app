import {Component, OnInit} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Title} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private _titleService: Title, private _router: Router) {

  }

  ngOnInit() {
    this._router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => this._titleService.setTitle('Pokédex'));
  }
}
