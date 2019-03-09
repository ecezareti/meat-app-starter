import { EventEmitter } from '@angular/core';

export class NotificationService {
  messageEmitter = new EventEmitter<string>();

  notify (message: string) {
    this.messageEmitter.emit(message);
  }
}
