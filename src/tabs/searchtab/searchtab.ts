import { Component, OnInit } from '@angular/core';




@Component({
    selector: 'ub-tab-search',
    templateUrl: './searchtab.html'
})

export class Searchtab implements OnInit {

    recentSearches: string[] = [];
    topCategories: string[] = [];
    showSearchValues: boolean = false;
    showCategoriesImages: boolean = true;
    showTopCategoriesimages: any[] = [];
    showMoreCategoriesimages: any[] = [];
    constructor() {


    }

    ngOnInit() {
        this.recentSearches = ["Pizza", "Indian", "Asian", "Italian"];
        this.topCategories = ["Indian", "North Indian", "Pizza", "South Indian", "Burger", "Fast Food",
            "Vegetarian", "Pastry", "Desserts", "Chinese", "Street Food", "Bakery",
            "Asian", "American", "Healthy", "West Indian", "Mexican", "Pakistani", "Asian Fusion"];

        this.showTopCategoriesimages = [{ item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        ];

        this.showTopCategoriesimages = [{ item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        { item: "assets/imgs/corns.jpg" },
        ]
    }





    onSearch($event) {
        this.showSearchValues = true;
        this.showCategoriesImages = false;
        console.log($event);


    }


    ionViewWillLeave() {
        console.log("component destroyed");
        this.showSearchValues = false;
        this.showCategoriesImages = true;
    }
}