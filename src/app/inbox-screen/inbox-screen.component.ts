
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import PureInboxScreenComponent from '../pure-inbox-screen/pure-inbox-screen.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inbox-screen',
  template: `
    <app-pure-inbox-screen [error]="error$ | async"></app-pure-inbox-screen>
  `,
  imports: [CommonModule, PureInboxScreenComponent]
})
export default class InboxScreenComponent {
  error$: Observable<boolean>;
  constructor(private store: Store) {
    this.error$ = store.select((state) => state.taskbox.error);
  }
}
