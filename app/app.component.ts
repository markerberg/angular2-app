// to use other components directive, we include directive inside of template:
// then we pass the component name inside of directive:
// finally we import component name from the specified component file

import { Component } from 'angular2/core';
import { EventListComponent } from './events/event-list.component';
import { EventService } from './events/event.service';

@Component({
    selector: 'events-app',
    template: `
    <div>
        <h1>{{ pageTitle }}</h1>
        <el-events></el-events>
    </div>
    `,
    directives: [EventListComponent],
    providers: [EventService] // give this service to all children of this componenet
})

export class AppComponent {
    pageTitle: string = 'This is the App Component';
}
