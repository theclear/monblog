import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.scss']
})
export class PostsComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  lovePoints: number;  

  constructor() { }

  onLike() {
    this.postLoveIts = this.postLoveIts + 1;
  }
  onDislike() {
    this.postLoveIts = this.postLoveIts - 1;
  }
  ngOnInit() {
  }

}
