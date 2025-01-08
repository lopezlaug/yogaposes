import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoseDetailsComponent } from './Components/pose-details/pose-details.component';
import { PosesListComponent } from './Components/poses-list/poses-list.component';

const routes: Routes = [
  { path: '', component: PosesListComponent },
  { path: 'pose/:id', component: PoseDetailsComponent },
  { path: '**', component: PoseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
