import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface MovieImage {
  show?: boolean;
  img: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  changeText: boolean;
  changeTexts: boolean;
  imagesDatas: any;
  constructor(private _router: Router) {}
  MoveData: MovieImage[] = [
    { img: 'assets/1.jpg', show:false  },
    { img: 'assets/5.jpg', show:false },
    { img: 'assets/7.jpg', show:false },
    { img: 'assets/9.jpg', show:false },
    { img: 'assets/8.jpg', show:false  },
    { img: 'assets/1.jpg', show:false },
    { img: 'assets/5.jpg', show:false },
  ];
  show: string;
  ngOnInit(): void {
    this.changeText = false;
    this.changeTexts = false;
    this.imagesDatas = this.MoveData;
  }
  action(key: any,type:boolean){
    this.MoveData[key].show=type;
  //   this.show=key;

  //   let updatedDatat = this.MoveData.map((val,index)=>{

  //     return key == index  ? {...val,show:true} :{...val,show:false}

  //  })
    console.log('action',type)
  //   this.MoveData=updatedDatat;
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
      case 'newpopular':
        this.goToPage('new-popular');
        break;
      case 'mylist':
        this.goToPage('my-list');
        break;  
      case 'movie':
        this.goToPage('movie');
        break;
      case 'browselang':
        this.goToPage('browselang');
        break;
    }
  }

  goToPage(route: string) {
    this._router.navigate([`home/${route}`]);
  }
}
