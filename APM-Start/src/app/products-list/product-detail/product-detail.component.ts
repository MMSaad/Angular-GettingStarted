import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title = 'Product Detail';
  product: IProduct | undefined; 

  
  constructor(private route: ActivatedRoute,
  private router : Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.title += `: ${id}`;
  }


  goBack(): void {
    this.router.navigate(['/products']);
  }

}
