import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface MovieImage {
  img: string;
}

const MoveData: MovieImage[] = [
  { img: 'assets/1.jpg' },
  { img: 'assets/5.jpg' },
  { img: 'assets/7.jpg' },
  { img: 'assets/9.jpg' },
  { img: 'assets/8.jpg' },
  { img: 'assets/1.jpg' },
  { img: 'assets/5.jpg' },
];
@Component({
  selector: 'app-newpopular',
  templateUrl: './newpopular.component.html',
  styleUrls: ['./newpopular.component.scss']
})
export class NewpopularComponent implements OnInit {

  changeText: boolean;
  changeTexts: boolean;
  imagesDatas: any;
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.changeText = false;
    this.changeTexts = false;
    this.imagesDatas = MoveData;
  }

  goToTheCategory(pageName: string) {
    console.log(pageName);
    switch (pageName) {
      case 'home':
        this.goToPage('home');
        break;
      case 'tvshow':
        this.goToPage('tv-show');
        break;
      case 'mylist':
        this.goToPage('my-list');
        break;
      case 'newpopular':
        this.goToPage('new-popular');
        break;
      case 'movie':
        this.goToPage('movie');
        break;
      case 'browselang':
        this.goToPage('browselang');
        break;
    }
  }

  goToPage(route) {
    this._router.navigate([`home/${route}`]);
  }
}
