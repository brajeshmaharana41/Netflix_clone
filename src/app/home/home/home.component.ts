import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constant';
import { ModalDetailsComponent } from 'src/app/shared/modal-details/modal-details.component';
import { CommonService } from 'src/app/shared/service/common.service';
import { HttpResponse } from 'src/app/shared/type/in-type';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  changeText: boolean;
  changeTexts: boolean;
  imagesDatas: any;
  homeData: any;
  contentData: any;
  constructor(
    private _router: Router,
    private _commonService: CommonService,
    private _homeService: HomeService,
    public dialog: MatDialog
  ) {}
  // MoveData: MovieImage[] = [
  //   { img: 'assets/1.jpg', show: false },
  //   { img: 'assets/5.jpg', show: false },
  //   { img: 'assets/7.jpg', show: false },
  //   { img: 'assets/9.jpg', show: false },
  //   { img: 'assets/8.jpg', show: false },
  //   { img: 'assets/1.jpg', show: false },
  //   { img: 'assets/5.jpg', show: false },
  // ];
  show: string;
  @ViewChild('widgetsContent') widgetsContent: ElementRef;

  ngOnInit(): void {
    this.changeText = false;
    this.changeTexts = false;
    // this.imagesDatas = this.MoveData;
    this.getAllHomeData();
  }
  action(index: any, video: any, type: boolean) {
    // videoObj.show = type;
    video.show = type;
    console.log('45', video);
    // this.homeData.home_video = this.homeData.home_video.map(
    //   (res) => {
    //     return {
    //       ...res,
    //       show: false,
    //     };
    //   }
    // );
    // this.homeData.home_video[index] = {
    //   ...this.homeData?.home_video[index],
    //   show: type,
    // };
    if (type) {
      this.getVideoById(video._id);
    }
  }

  onContentMouseLeave() {
    this.contentData = null;
  }
  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 500;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 500;
  }

  getVideoById(id: string) {
    this._homeService.getVideoById(id).subscribe((res: HttpResponse) => {
      if (res.status === Constants.SUCCESSSTATUSCODE) {
        this._commonService.playedVideo.next(res.body.trailer[0]);
      }
    });
  }

  getAllHomeData() {
    this._homeService.getAllHomeData().subscribe({
      next: (res: HttpResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          console.log(res.body);
          this.homeData = res.body;
        }
        // console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      },
    });
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
  openDialog(trending: any) {
    this.dialog.open(ModalDetailsComponent, {
      data: { trending },
      width: '850px',
      height: '700px',
      panelClass: 'custom-dialog-container',
    });
  }
}
