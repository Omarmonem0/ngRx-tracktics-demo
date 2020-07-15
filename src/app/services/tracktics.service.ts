import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
​
@Injectable()
export class TrackticsService {
    private endpoint = 'https://api3-dev.tracktics.com/pitches';
    constructor(private http: HttpClient) {}
    getPitches(): Observable<any> {
        return this.http.get<any>(this.endpoint);
    }
}
