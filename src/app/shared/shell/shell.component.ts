import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
