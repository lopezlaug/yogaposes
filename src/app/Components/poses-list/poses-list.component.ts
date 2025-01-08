import { Component, OnInit } from '@angular/core';
import { Pose } from 'src/app/models/Pose.interface';
import { PosesListService } from 'src/app/services/poses-list.service';

@Component({
  selector: 'app-cats-list',
  templateUrl: './poses-list.component.html',
  styleUrls: ['./poses-list.component.css'],
})
export class PosesListComponent implements OnInit {
  poses: Pose[] = [];
  listVisible: boolean;
  galleryVisible: boolean;

  constructor(private posesListService: PosesListService) {
    this.listVisible = true;
    this.galleryVisible = false;
  }

  ngOnInit(): void {
    this.posesListService
      .getAllImages()
      .subscribe((poses) => (this.poses = poses));
  }

  showList(): void {
    this.listVisible = true;
    this.galleryVisible = false;
  }

  showGallery(): void {
    this.listVisible = false;
    this.galleryVisible = true;
  }
}
