import { Component, OnInit } from '@angular/core';
interface MovieImage{
  img: string
}

const MoveData: MovieImage[] =[
  { img: 'assets/1.jpg' },
  { img: 'assets/5.jpg' },
  { img: 'assets/7.jpg' },
  { img: 'assets/9.jpg' },
  { img: 'assets/8.jpg' },
  { img: 'assets/1.jpg' },
  { img: 'assets/5.jpg' }

]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  changeText: boolean;
  changeTexts: boolean;
  imagesDatas: any
  constructor() { }

  ngOnInit(): void {
    this.changeText = false;
    this.changeTexts = false;
    this.imagesDatas =  MoveData;
  }

}
