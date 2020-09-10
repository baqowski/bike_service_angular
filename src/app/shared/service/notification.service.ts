import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  onGetErrorMessage(err) {
    this.toastrService.error(err.error.message, err.error.error.message);
  }
}
