import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  popoverX = 0;
  popoverY = 0;
  showPopover = false;
  poppoverTimer;
  popoverStyles = {
    "left": "-50%",
    "top": "-50%"
  }
  currentActiveHoverVideo;
  VisibleBelowDetails = true;
  showVideoAfterXSeconds = false;
  routeCategory;
  popoverIsPlaying = false;
  scrollBelowWindowheight = false;
  openGenre = false;
  genres;
  isSticky = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 100 ? true : false;
  }
  private crousalItemHover = new Subject<any>();
  // @ViewChild('video') video: ElementRef;
  @ViewChild('carousel') carousel: NgbCarousel;

  videoInterval;

  constructor(
    private _router: Router,
    public _commonService: CommonService,
    private _homeService: HomeService,
    public dialog: MatDialog,
    private _changeDetection: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        let href = event?.url.substring(event?.url.lastIndexOf('/') + 1)
        console.log("href val", href);
        this.getGenres(href);
      }
  });
  }
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
    this._router.navigate([], {
      queryParams: {
        id: null
      },
      queryParamsHandling: 'merge',
    });
    // this.imagesDatas = this.MoveData;
    // this.getAllDeviceData(this.userData._id);
    this.getAllHomeData(this.userData._id,'');

    this._homeService.selectCategory.subscribe((res:string)=>{
      this.getAllHomeData(this.userData._id,res);
    })

    this.routeCategory = this.route.snapshot.paramMap.get('id');
    this._homeService.selectCategory.emit(this.routeCategory);
    this.getGenres(this.routeCategory);

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

    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  getGenres(value) {
    this._homeService
      .getAllVideoGenres(value)
      .subscribe((res: HttpResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          this.genres = res.body;
          console.log("this.genres", this.genres);
        }
      });
  }
  action(index: any, video: any, type: boolean, videoIndex: number, event: any) {
    // this.crousalItemHover.next({ index, video, type, videoIndex });
    // videoObj.show = type;
    // this.homeData.home_video = this.homeData.home_video.map((res) => {
    //   return {
    //     ...res,
    //     show: false,
    //   };
    // });
    /*
    if(type) {
      this.currentVideo.pause();
    } else {
      this.currentVideo.play();
    }*/
    // video.show = type;
    // // this.homeData.home_video[index] = {
    // //   ...this.homeData?.home_video[index],
    // //   show: type,
    // // };
    if (type) {
      // this.getVideoById(video._id, video.video[0]._id);
    }
    if(type) {
      this.currentActiveHoverVideo = video;
      let popoverVideo:any = document.getElementById("popoverVideoPlayer");
      popoverVideo? popoverVideo.pause() : '';
      console.log("currentActiveHoverVideo true");
      this.popoverIsPlaying = true;
      this.currentVideo ? this.currentVideo.pause() : '';
      let x = event.srcElement.getBoundingClientRect();
      // this.popoverStyles = {
      //   left: `${event.srcElement.x}px`,
      //   top: `${event.srcElement.y}px`
      // }
      this.popoverStyles = {
        left: `${x.left}px`,
        top: `${x.top}px`
      }
      // this.hoverOverPopover();
    } else {
      console.log("out");
      this.mouseOut();
      if(!this.scrollBelowWindowheight) {
        this.currentVideo.play();
      }
    }
  }

  hoverOverPopover() {
    console.log("hover over popver");
    this.showVideoAfterXSeconds = false;
    let popoverVideo:any = document.getElementById("popoverVideoPlayer");
    this.showVideoAfterXSeconds = true;
    // this.VisibleBelowDetails = true;
    popoverVideo? popoverVideo.play() : '';
  }

  mouseOut() {
    console.log("mouseOut function");
    this.currentActiveHoverVideo = false;
    console.log("currentActiveHoverVideo false");
    let popoverVideo:any = document.getElementById("popoverVideoPlayer");
    popoverVideo? popoverVideo.pause() : '';
    clearTimeout(this.poppoverTimer);
    this.popoverIsPlaying = false;
    this.popoverStyles = {
      left: "-50%",
      top: "-50%"
    }
    // this.VisibleBelowDetails = false;
    this.showVideoAfterXSeconds = false;
    window.scrollBy(0, 1);
  }

  onContentMouseLeave() {
    this.contentData = null;
  }
  scrollLeft(index: number) {
    // this.widgetsContent.forEach((ele, i) => {
    //   if (i === index) {
    //     ele.nativeElement.scrollLeft -= 500;
    //   }
    // });
    document.getElementById(`widgetsContent${index}`).scrollLeft -= 500;
  }

  scrollRight(index: number) {
    // this.widgetsContent.forEach((ele, i) => {
    //   if (i === index) {
    //     ele.nativeElement.scrollLeft += "100";
    //   }
    // });
    document.getElementById(`widgetsContent${index}`).scrollLeft += 500;
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
    let nextVideo:any;
    if(i >= this.homeBanner.length - 1) {
      nextVideo =  document.getElementById(`video-0`);
    } else {
      nextVideo =  document.getElementById(`video-${i + 1}`);
    }
    this.carousel.next();
    this.currentVideo = nextVideo;
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
    this.mouseOut();
    setTimeout(()=>{
      this.currentVideo.pause();
    }, 0);
    const dialogRef = this.dialog.open(ModalDetailsComponent, {
      data: { ...trending },
      width: '850px',
      height: '700px',
      panelClass: 'custom-dialog-container',
    });
    this._router.navigate([], {
      queryParams: {
        id: trending?.id
      },
      queryParamsHandling: 'merge',
    });
    dialogRef.afterClosed().subscribe(() => {
      this._router.navigate([], {
        queryParams: {
          id: null
        },
        queryParamsHandling: 'merge',
      });
      this.currentVideo.play()
    });
  }

  scroll = (event): void => {
    this.popoverStyles = {
      left: "-50%",
      top: "-50%"
    }
    // this.VisibleBelowDetails = false;
    this.showVideoAfterXSeconds = false;
    let wHeight = window.innerHeight
    let offset = window.pageYOffset
    if(offset > wHeight) {
      this.scrollBelowWindowheight = true;
      this.currentVideo ? this.currentVideo.pause(): '';
    }

    if(offset < 100) {
      if(!this.popoverIsPlaying) {
        this.currentVideo ? this.currentVideo.play() : '';
      }
    }
  };

}
