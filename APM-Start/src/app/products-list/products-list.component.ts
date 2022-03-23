import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "../Product";
import { ProductService } from "./products.service";

@Component({
    selector: "pm-products",
    templateUrl: "./products-list.component.html",
    styleUrls: ["./products-list.component.css"]
})
export class ProductsListComponent implements OnInit,OnDestroy {
    pageTitle: string = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImages = false;
    private _listFilter: string = '';
    subscriptions: Subscription[] = [];

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this._productService.getProducts().subscribe({
                next: products => {
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                error: err => {
                    console.log(err);
                }
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    toggleImage(): void {
        this.showImages = !this.showImages;
    }

    messageReceived(message: string): void {
        this.pageTitle = message;
    }
}