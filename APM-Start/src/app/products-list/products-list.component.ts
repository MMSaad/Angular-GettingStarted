import { Component, OnInit } from "@angular/core";
import { IProduct } from "../Product";
import { ProductService } from "./products.service";

@Component({
    selector: "pm-products",
    templateUrl: "./products-list.component.html",
    styleUrls: ["./products-list.component.css"]
})
export class ProductsListComponent implements OnInit {


    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
    pageTitle: string = 'Product List';

    imageWidth = 50;
    imageMargin = 2;
    showImages = false;

    private _listFilter: string = '';
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