import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';
'use strict';
declare var jQuery;

@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit{

  @Output() newIndexes = new EventEmitter();

  initialIndex: any;

  constructor(private ele: ElementRef) { }

  ngAfterViewInit(): void {
    this.appSortable(this);
  }

  appSortable(refe) {
    jQuery(this.ele.nativeElement).sortable({
      axis: 'y',
      start: function (event, ui) {
        refe.initialIndex = ui.item.index();
      },
      stop: function (event, ui) {
        refe.newIndexes.emit({
          start: refe.initialIndex,
          end: ui.item.index()
        });
      }
    });
  }

}
