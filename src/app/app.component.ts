import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeaderTopComponent } from "./header-top/header-top.component";
import { HeaderBottomComponent } from "./header-bottom/header-bottom.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderTopComponent, HeaderBottomComponent, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eCom';
}
