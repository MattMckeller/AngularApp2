import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { ProductService } from '../shared/services/product.service';
import { CartService } from '../shared/services/cart.service';

import { ProductComponent } from './product/product.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutCartDisplayComponent } from './checkout-cart-display/checkout-cart-display.component';
import {ImagePipeModule} from "@app/shared/pipes/images/image-pipe.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
  keyboardControl: true
};

@NgModule({
  imports: [
    MaterialModule,
    ImagePipeModule,
    FlexLayoutModule,
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
  exports: [
    ProductComponent,
    CartIconComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    CheckoutCartDisplayComponent
  ],
  declarations: [
    ProductComponent,
    CartIconComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    CheckoutCartDisplayComponent,
    ProductThumbnailComponent
  ],
  providers: [
    ProductService,
    CartService
  ],
})
export class EcommerceModule { }
