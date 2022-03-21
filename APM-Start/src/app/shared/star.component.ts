import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from "@angular/core";


@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges{

    @Input() rating: number = 0;
    @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();

    cropWidth = 50;

    ngOnChanges(_changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75 / 5;
    }


    onClick(): void {
        console.log("Clicked!");
        this.clickEvent.emit(`The rating ${this.rating} was clicked!`);
    }
    
}