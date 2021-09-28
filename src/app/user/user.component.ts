import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, ElementRef  } from '@angular/core';
import { ViewChild } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('uploadImg')  uploadImgVariable: ElementRef;    
  constructor( private http: HttpClient, private snackBar: MatSnackBar ) { }
  selectedFile: File;
  uploadImg: any;
  progress: number = 0;

  ngOnInit(): void {
  }

  


  onFileSelected(event: any) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    //console.log(this.selectedFile.name);
    var enableUploadBtn = <HTMLInputElement> document.getElementById("uploadBtn");
    enableUploadBtn.disabled = false;
   
  }

  onImgUpload() {
    const ext =  this.selectedFile.name.split('.').pop();
    console.log(ext);
    if(ext == 'png' || ext == 'jpeg' || ext == 'jpg') { 
      const formdata = new FormData();
      formdata.append('uploadImg', this.selectedFile, this.selectedFile.name);
      //console.log(formdata);
      this.http.post('https://mohitarya.ml/uploadImgApi.php', formdata, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(
        (result:any) =>  {
          if (result.type === HttpEventType.UploadProgress) {
            this.progress = Math.round( result.loaded / result.total  * 100);
          } else if (result.type = HttpEventType.Response) {
            console.log('result', result.body); 
          }

          if(result.body == null) {
            //alert(result.body.success.msg);
          } else {
            this.snackBar.open(result.body.msg, '', {
              duration: 1000,
              verticalPosition: 'top'
            });
            setTimeout(() => {
            this.uploadImgVariable.nativeElement.value = "";
            this.progress = 0;
            var disableUploadBtn = <HTMLInputElement> document.getElementById("uploadBtn");
            disableUploadBtn.disabled = true;
            //console.log(this.progress);
            } ,3000)
          }
      }
    );
     } else {
        alert("iFile must be in jpg, png or jpeg format ");
     }
  }

 
}
