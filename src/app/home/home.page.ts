import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public user: any = {
    name: "",
    email: "",
    password: ""
  };

  constructor(private httpClient: HttpClient) {}

  submit() {
    console.log("Submitting to the server...");
    console.log(this.user);

    this.httpClient
      .post("http://localhost:3000/api/users", this.user)
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }
}
