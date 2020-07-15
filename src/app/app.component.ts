import { Component } from '@angular/core';
import * as fromApp from './reducers/tracktics.demo.reducer';
import * as fromActions from './actions/tracktics.demo.actions';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  public success = false;
  public fail = false;

  constructor(private store: Store<fromApp.AppState>) { }

  public fetch() {
    this.store.dispatch(fromActions.onGetPitches());
    this.store.select(fromApp.selectPitches).subscribe(data => {
      if (data) {
        this.success = true;
      }
    });
  }
}
