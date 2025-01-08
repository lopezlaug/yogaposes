import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pose } from 'src/app/models/Pose.interface';
import { PosesListService } from 'src/app/services/poses-list.service';

@Component({
  selector: 'app-pose-details',
  templateUrl: './pose-details.component.html',
  styleUrls: ['./pose-details.component.css'],
})
export class PoseDetailsComponent implements OnInit {
  pose: Pose;
  detailVisible: boolean;
  buttonText: string;
  constructor(
    private dataService: PosesListService,
    private activatedRoute: ActivatedRoute
  ) {
    this.pose = { id: '' };
    this.detailVisible = false;
    this.buttonText = 'Show Details';
  }

  ngOnInit(): void {
    const poseId = this.activatedRoute.snapshot.paramMap.get('id');

    if (poseId) {
      this.dataService.getPoseById(poseId).subscribe((pose) => {
        this.pose = pose;
      });
    }
  }
  showDetails(): void {
    this.detailVisible = !this.detailVisible;
    if (this.detailVisible === true) {
      this.buttonText = 'Hide Details';
    } else {
      this.buttonText = 'Show Details';
    }
  }
}
