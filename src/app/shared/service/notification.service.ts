import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  onGetErrorMessage(err): void {
    this.toastrService.error(err.error.message, err.error.error + ' ' + err.error.status);
  }

  onGetErrMessage(err): void {
    this.toastrService.error(err.mesa);
  }

  ongGetSuccessMessage(message): void {
    this.toastrService.success(message);
  }
}
