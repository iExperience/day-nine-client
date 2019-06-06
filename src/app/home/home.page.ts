import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';

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

  constructor(private httpClient: HttpClient, private navCtrl: NavController) {}

  submit() {
    console.log("Submitting to the server...");
    console.log(this.user);

    this.httpClient
      .post("http://localhost:3000/api/users", this.user)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.navCtrl.navigateForward("page2", {
            queryParams: {
              userId: response.id
            }
          });
        },
        (err) => {
          console.log(err);
          alert(err.error.message);
        }
      );
  }
}
