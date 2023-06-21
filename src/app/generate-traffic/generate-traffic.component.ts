import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductServiceService} from '../products/service/product-service.service';
import {Product} from '../products/model/product';


// @ts-ignore
@Component({
  selector: 'app-generate-traffic',
  templateUrl: './generate-traffic.component.html',
  styleUrls: ['./generate-traffic.component.css'],
})
export class GenerateTrafficComponent implements OnInit {
  private products: Product[];

  constructor(private router: Router,
              private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.generate();
  }
  // tslint:disable-next-line:typedef
  generate() {
    this.productService.generateTraffic().subscribe(data => {
      this.products = data;
    });
  }
}
