import { PipeTransform, Pipe } from 'angular2/core';
import { IEvent } from './event';

@Pipe({//pipe decorator to define it as a pipe
    name: 'eventFilter'
})

//this formula will find a specific value that you look for through filtering. You import it and use in in yout html and component.ts
export class EventFilterPipe implements PipeTransform { //we implement PipeTransform interface 
    transform(value: IEvent[], args: string[] ): IEvent[] {//method for pipetransofrm, we transform an arr of events into filter array of events
        let filter: string = args[0] ? args[0].toLocaleLowerCase(): null;//pull filter string from first element of this array
        //js conditional below, if filter is true/defined/not null..we filter list..else no filter is specified so we return og value
        // => syntax for es2015 defines filter func, each event name is convert to lowercase and index is used to determing if filtered text is found in event.name
        return filter ? value.filter((event: IEvent) => event.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    };
}