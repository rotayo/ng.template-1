import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutControllerService {
  public useLayoutHeaderSignal = signal(true);
  public useLayoutFooterSignal = signal(true);
}
