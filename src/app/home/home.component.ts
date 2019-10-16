import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselOptions = 
  {
    items: 1, 
    dots: false, 
    center: true,
    navigation: false, 
    loop:true,
    autoplay:false,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoHeightClass: 'owl-height',
    
}
images:[];
default = new Array(4);

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private productService: ProductService) {
  
    this.productService.getAllProducts().subscribe(res => {
      this.images = res;
    });
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
  }

  productHome(id) {
    this.router.navigate(['product/'+id]);
    }

}
