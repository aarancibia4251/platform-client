import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzSliderModule,
    NzCarouselModule,
    NzIconModule,
    NzLayoutModule,
    NzTypographyModule,
    NzCardModule,
    NzGridModule,
  ],
  exports: [
    NzButtonModule,
    NzSliderModule,
    NzCarouselModule,
    NzIconModule,
    NzLayoutModule,
    NzTypographyModule,
    NzCardModule,
    NzGridModule
  ]
})
export class AntdModule { }
