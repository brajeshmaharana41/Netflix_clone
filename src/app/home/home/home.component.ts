import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { Constants } from 'src/app/shared/constants/constant';
import { ModalDetailsComponent } from 'src/app/shared/modal-details/modal-details.component';
import { CommonService } from 'src/app/shared/service/common.service';
import { HttpResponse } from 'src/app/shared/type/in-type';
import { HomeService } from '../home.service';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  changeText: boolean;
  changeTexts: boolean;
  imagesDatas: any;
  homeBanner: any;
  homeData: any;
  contentData: any;
  videoDetail: any;
  interval: Number = 2000;
  currentSlide = 0;
  userData = JSON.parse(localStorage.getItem(Constants.USER));
  currentVideo;

  private crousalItemHover = new Subject<any>();
  // @ViewChild('video') video: ElementRef;
  @ViewChild('carousel') carousel: NgbCarousel;

  videoInterval;

  constructor(
    private _router: Router,
    public _commonService: CommonService,
    private _homeService: HomeService,
    public dialog: MatDialog,
    private _changeDetection: ChangeDetectorRef
  ) { }
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
  @ViewChildren('widgetsContent') widgetsContent: QueryList<any>;

  ngOnInit(): void {
    this.changeText = false;
    this.changeTexts = false;
    // this.imagesDatas = this.MoveData;
    // this.getAllDeviceData(this.userData._id);
    this.getAllHomeData(this.userData._id,'');

    this.crousalItemHover.pipe(debounceTime(2000)).subscribe((response) => {
      // this.homeData.home_video = this.homeData.home_video.map((res) => {
      //   return {
      //     ...res,
      //     show: false,
      //   };
      // });
      for (let i = 0; i < this.homeData.length; i++) {
        this.homeData[i].videos = this.homeData[
          i
        ]?.videos?.map((res) => {
          return {
            ...res,
            show: false,
          };
        });
      }
      // response.video.show = response.type;
      this.homeData[response.index].videos[
        response.videoIndex
      ].show = response.type;
      // this.homeData.home_video[index] = {
      //   ...this.homeData?.home_video[index],
      //   show: type,
      // };
      if (response.type) {
        // this.getVideoById(response.video._id);
      }
    });

    this._homeService.selectCategory.subscribe((res:string)=>{
      this.getAllHomeData(this.userData._id,res);
    })
  }
  action(index: any, video: any, type: boolean, videoIndex: number) {
    this.crousalItemHover.next({ index, video, type, videoIndex });
    // videoObj.show = type;
    // this.homeData.home_video = this.homeData.home_video.map((res) => {
    //   return {
    //     ...res,
    //     show: false,
    //   };
    // });
    if(type) {
      this.currentVideo.pause();
    } else {
      this.currentVideo.play();
    }
    video.show = type;
    // // this.homeData.home_video[index] = {
    // //   ...this.homeData?.home_video[index],
    // //   show: type,
    // // };
    if (type) {
      // this.getVideoById(video._id, video.video[0]._id);
    }
  }

  onContentMouseLeave() {
    this.contentData = null;
  }
  scrollLeft(index: number) {
    this.widgetsContent.forEach((ele, i) => {
      if (i === index) {
        ele.nativeElement.scrollLeft -= 500;
      }
    });
  }

  scrollRight(index: number) {
    this.widgetsContent.forEach((ele, i) => {
      if (i === index) {
        ele.nativeElement.scrollLeft += 500;
      }
    });
  }

  getVideoById(video_id: string, sub_video_id: string) {
    this._homeService
      .getVideoById(video_id, sub_video_id)
      .subscribe((res: HttpResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          this.videoDetail = res.body;
          this._commonService.playedVideo.next(res.body.trailer[0]);
        }
      });
  }

  likeOrUnlike(video: any, type: 'like' | 'unlike') {
    this._homeService
      .likeUnlikeLove(video.id, video.video[0].id, type)
      .subscribe({
        next: (res: HttpResponse) => {
          if (res.status === Constants.SUCCESSSTATUSCODE) {
            video.like = res.body.like;
          }
        },
      });
  }

  addToMyList(video: any) {
    this._homeService.addToWishList(video.id, video.video[0].id).subscribe({
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

  vidEnded(i) {
    console.log("ended", i);
    let nextVideo:any
    if(i >= this.homeBanner.length - 1) {
      nextVideo =  document.getElementById(`video-0`);
    } else {
      nextVideo =  document.getElementById(`video-${i + 1}`);
    }
    this.carousel.next();
    setTimeout(() => {
      nextVideo.style.display = 'block';
      nextVideo.play();
    }, 1500);
  }

  vidPlay(i) {
    if(this.currentSlide == i) {
      console.log("play", i);
      this.currentVideo =  document.getElementById(`video-${i}`);
      this.currentSlide = i;
      setTimeout(() => {
        this.currentVideo.style.display = 'block';
        this.currentVideo.play();
      }, 1500);
    }
  }

  getAllHomeData(viewer_id: string,type:string) {
    this._homeService.getAllBannerVideo(viewer_id,type).subscribe({
      next: async (res: HttpResponse) => {
        this.homeBanner = res.body;
      }
    });
    this._homeService.getAllHomeData(viewer_id, type).subscribe({
      next: async (res: HttpResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          this.homeData = res.body;
          for (var i = 0; i < this.homeData.length; i++) {
            let response = await this._homeService.getVideoByCategoryId(viewer_id, this.homeData[i].id).toPromise();
            // data.next: (response: HttpResponse) => {
            if (response.status === Constants.SUCCESSSTATUSCODE) {
              const videosByCategories = response.body;

              // this.homeData[i]['videos'] = {};
              this.homeData[i]['videos'] = videosByCategories;
            }
            // }

          }
          // this.homeData
        }
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

  goToVideoPlayer(video) {
    this._homeService.videoDetails = video;
    sessionStorage.setItem('currentVideo', JSON.stringify(video));
    this.dialog.closeAll();
    this._router.navigate([`home/video-player`]);
  }

  openDialog(trending: any) {
    setTimeout(()=>{
      this.currentVideo.pause();
    }, 0);
    const dialogRef = this.dialog.open(ModalDetailsComponent, {
      data: { ...trending },
      width: '850px',
      height: '700px',
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe(() => this.currentVideo.play());
  }

}
