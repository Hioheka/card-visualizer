import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ZoomPhotoDialogComponent } from '../zoom-photo-dialog/zoom-photo-dialog.component';
import { MockDataService } from 'src/app/services/mock-data.service';
import { IIdentityData } from 'src/app/interfaces/IIdentityData.interface';
import { FileTypeEnum } from 'src/app/enums/FileTypeEnum';

@Component({
  selector: 'visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
})
export class VisualizerComponent implements OnInit {
  cardData: IIdentityData | undefined;
  public $isFlipParser = new BehaviorSubject<boolean>(true);

  public visualizerForm = new FormGroup({
    identityNumber: new FormControl('', []),
    surname: new FormControl('', []),
    name: new FormControl('', []),
    dateOfBirth: new FormControl('', []),
    serialNumber: new FormControl('', []),
    validUntil: new FormControl('', []),
    gender: new FormControl('', []),
    nationality: new FormControl('', []),
    mli: new FormControl('', []),
    signature: new FormControl('', []),
    motherName: new FormControl('', []),
    fatherName: new FormControl('', []),
    issuedBy: new FormControl('', []),
    pen: new FormControl('', []),
    mrz1: new FormControl('', []),
    mrz2: new FormControl('', []),
    mrz3: new FormControl('', []),
    imageData: new FormControl('', []),
  });

  constructor(private dialog: MatDialog, private mockData: MockDataService) {
    this.mockData.GetData().subscribe((identityData) => {
      identityData.mrz1=this.appendText(identityData.mrz1);
      identityData.mrz2=this.appendText(identityData.mrz2);
      identityData.mrz3=this.appendText(identityData.mrz3);
      this.visualizerForm.patchValue(identityData);
    });
  }

  ngOnInit(): void {}

  private appendText(value: string): string {
    let result = '';
    if (!!value) {
      if (value !== '') {
        for (let i = 0; i < value.length; i++) {
          result = result + value[i] + ' ';
        }
      }
    }
    return result.trimEnd();
  }

  public openPhotoZoomDialog(ImageName: string) {
    switch (ImageName) {
      case 'signature':
        this.dialog.open(ZoomPhotoDialogComponent, {
          data: {
            photo: this.visualizerForm.value.signature,
            caption: 'Yakınlaştırılmış İmza',
            fileType : FileTypeEnum.signature
          },
          height: '30rem',
          width: '48rem',
          disableClose: false,
        });
        break;
      case 'photo':
        this.dialog.open(ZoomPhotoDialogComponent, {
          data: {
            photo: this.visualizerForm.value.imageData,
            caption: 'Yakınlaştırılmış Fotoğraf',
            fileType : FileTypeEnum.photo
          },
          height: '42rem',
          width: '36rem',
          disableClose: false,
        });
        break;
    }
  }

  FlipParse() {
    this.$isFlipParser.next(!this.$isFlipParser.value);
  }
}
