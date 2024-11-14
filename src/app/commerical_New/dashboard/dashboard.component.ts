import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productbox: any[] = new Array()

  constructor(public dialog: MatDialog) {
   
  }

  ngOnInit(): void {
    console.clear()
    this.getProduct()
  }

  getProduct() {
    this.productbox = [
      { imgUrl: 'assets/img/newhomepage/otherproduct/3.png', name: 'Health Insurance', navigateUrl: '/health-insurance' },
      { imgUrl: 'assets/img/newhomepage/otherproduct/1.png', name: 'Private Car Insurance', navigateUrl: '' },
      { imgUrl: 'assets/img/newhomepage/otherproduct/2.png', name: 'Two Wheeler Insurance', navigateUrl: '' },
      { imgUrl: 'assets/img/newhomepage/otherproduct/4.png', name: 'Personal Accident', navigateUrl: '/personal-accident' },
      { imgUrl: 'assets/img/newhomepage/otherproduct/5.png', name: 'Travel Insurance', navigateUrl: '/travel-insurance' }
    ];
  }

  typeofPolicylist: any
  gettypeofpolicy() {
    this.typeofPolicylist = [
      { imgUrl: 'assets/img/newhomepage/otherproduct/3.png', name: 'New Business', navigateUrl: '/health-insurance' },
      { imgUrl: 'assets/img/newhomepage/otherproduct/3.png', name: 'Comprehensive', navigateUrl: '/health-insurance' },
      { imgUrl: 'assets/img/newhomepage/otherproduct/3.png', name: 'SAOD', navigateUrl: '/health-insurance' },
      { imgUrl: 'assets/img/newhomepage/otherproduct/3.png', name: 'SATP', navigateUrl: '/health-insurance' },
    ]
  }

  openDialog(): void {
    this.gettypeofpolicy()
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { typeofPolicylist: this.typeofPolicylist }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}


// Dialog 

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  typeofPolicylist: any
}
