import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  videoDetail: any;
  constructor(
    private _router: Router,
    public _commonService: CommonService,
    private _homeService: HomeService,
    public dialog: MatDialog,
    private _changeDetection: ChangeDetectorRef
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
    this.homeData.home_video = this.homeData.home_video.map((res) => {
      return {
        ...res,
        show: false,
      };
    });
    video.show = type;
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
        this.videoDetail = res.body;
        this._commonService.playedVideo.next(res.body.trailer[0]);
      }
    });
  }

  likeOrUnlike(video: any, type: 'like' | 'unlike') {
    this._homeService.likeUnlikeLove(video.id, type).subscribe({
      next: (res: HttpResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          video.like = res.body.like;
        }
      },
    });
  }

  addToMyList(video: any) {
    this._homeService.addToWishList(video.id).subscribe({
      next: (res) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          video.is_wishlist = res.body.is_wishlist;
          video.wishlist_id = res.body._id;
        }
      },
    });
  }

  removeFromWishlist(video: any) {
    this._homeService.deleteWishList(video.wishlist_id).subscribe({
      next: (res) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          video.is_wishlist = false;
        }
      },
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

  addToMylist(video) {}
}
