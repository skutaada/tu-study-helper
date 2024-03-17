import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tu-study-helper';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTissPrograms().subscribe(data => {
      console.log(data);
    });
  }

  getTissPrograms() {
    return this.http.get('https://tiss.tuwien.ac.at/curriculum/studyCodes.xhtml')
  }
}
