import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Business plan", icon: "dashboard", class: "" },
  {
    path: "/table-list",
    title: "Revised business plan",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/typography",
    title: "Current expected",
    icon: "library_books",
    class: "",
  },
  { path: "/icons", title: "Monthly update", icon: "bubble_chart", class: "" },
  {
    path: "/table-list",
    title: "Actual Achieved",
    icon: "account_balance",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
