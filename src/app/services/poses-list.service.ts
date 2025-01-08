import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pose } from '../models/Pose.interface';

@Injectable({
  providedIn: 'root',
})
export class PosesListService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Pose[]> {
    return this.http.get<Pose[]>('https://yoga-api-nzy4.onrender.com/v1/poses');
  }

  getPoseById(id: string): Observable<Pose> {
    return this.http.get<Pose>(
      `https://yoga-api-nzy4.onrender.com/v1/poses?id=${id}`
    );
  }
}
