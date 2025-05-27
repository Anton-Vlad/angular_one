import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Input({ required: true }) id!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`);
  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
