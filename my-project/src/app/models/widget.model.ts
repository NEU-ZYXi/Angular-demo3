export class Widget {
  constructor(public _id: string,
              public pageId: string,
              public widgetType: string,
              public name: string,
              public text: string,
              public placeholder: string,
              public description: string,
              public url: string,
              public width: string,
              public height: string,
              public rows: number,
              public size: number,
              public className: string,
              public icon: string,
              public deletable: boolean,
              public formatted: boolean) {}
}
