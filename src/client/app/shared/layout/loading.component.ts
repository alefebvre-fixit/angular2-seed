import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'loading-container',
    templateUrl: 'loading.component.html',
    styleUrls: ['loading.component.css'],
})

export class LoadingContainer {
    @Input() loading: boolean;
    constructor() {}
}

export class LoadingPage {
    public loading: boolean;
    constructor(val: boolean) {
        this.loading = val;
    }
    standby() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
}