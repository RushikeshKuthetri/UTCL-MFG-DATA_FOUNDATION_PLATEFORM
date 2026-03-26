import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  addSuccessToast() {
    // console.log(" update success");
    
    this.toastr.success('Record Updated Successfully');
  }
  addUpdateSuccessToast(msg:any){
    this.toastr.success(msg);
  }
  addErrorToast(msg:any) {
      this.toastr.error(msg);
  }
}
