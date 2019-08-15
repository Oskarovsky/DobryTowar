import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", "amount 1", 100),
        new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", "amount 2", 100),
        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", "amount 3", 100),
        new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", "amount 4", 100),
        new Product(5, "Product 5", "Category 2", "Product 5 (Category 2)", "amount 5", 100),
        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", "amount 6", 100),
        new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", "amount 7", 100),
        new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", "amount 8", 100),
        new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", "amount 9", 100),
        new Product(10, "Product 10", "Category 3", "Product 10 (Category 3)", "amount 10", 100),
        new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", "amount 11", 100),
        new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", "amount 12", 100),
        new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", "amount 13", 100),
        new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", "amount 14", 100),
        new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", "amount 15", 100)
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}