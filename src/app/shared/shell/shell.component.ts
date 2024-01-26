import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, shareReplay } from 'rxjs';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  breakpointObserver = inject(BreakpointObserver);
  isHandset = toSignal(
    this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
      map((result) => result.matches),
      shareReplay()
    )
  );
}
