import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { IPHONE } from "./mock-iphone-list";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService {
  createDb() {
    return { IPHONE };
  }
}
