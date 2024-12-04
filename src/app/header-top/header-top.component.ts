import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent {
  @ViewChild('popupList', { static: false }) popupList!: ElementRef;

  // Toggle the popup menu
  togglePopup(event: Event) {
    event.stopPropagation(); // Prevent the click from bubbling up to the document
    const popup = this.popupList.nativeElement;
    popup.classList.toggle('hidden'); // Show or hide the popup
  }

  // Close the popup menu when clicking outside
  @HostListener('document:click', ['$event'])
  closePopup(event: Event) {
    const popup = this.popupList.nativeElement;
    const target = event.target as HTMLElement;

    // Close the popup if the click is outside the popup and button
    if (!popup.contains(event.target) && target.id !== 'icon-button') {
      popup.classList.add('hidden');
    }
  }
}
