import { Component } from '@angular/core';


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})

export class AppHeader {
    public title: string;

    constructor() {
        this.title = "My YouTube Links"
    }
}