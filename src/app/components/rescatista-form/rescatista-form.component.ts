import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-rescatista-form',
  standalone: true,
  imports: [],
  templateUrl: './rescatista-form.component.html',
  styleUrl: './rescatista-form.component.css'
})
export class RescatistaFormComponent {
  @Input() rescatista: any;
}
