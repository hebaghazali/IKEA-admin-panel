import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsCrudService } from 'src/app/Services/products-crud.service';
import { productsSubCategservice } from 'src/app/Services/productsSubCategservice';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  message = '';

  categList = []
  categListName = '' 
  subCategNameList = []
  subCategIDList = []

  @ViewChild('prdPrdName') changePrdName !:ElementRef
  @ViewChild('prdName') changeName !:ElementRef
  @ViewChild('prdNameAr') changeNameAr !:ElementRef
  @ViewChild('prdQuantity') changeQuan !:ElementRef
  @ViewChild('prdPrice') changePrice !:ElementRef
  @ViewChild('prdMaterial') changeMaterial !:ElementRef
  @ViewChild('prdMaterialAr') changeMaterialAr !:ElementRef
  @ViewChild('prdAvail') changeAval !:ElementRef
  @ViewChild('prdDesc') changeDesc !:ElementRef
  @ViewChild('prdDescAr') changeDescAr !:ElementRef
  @ViewChild('prdLength') changeLength !:ElementRef
  @ViewChild('prdWidth') changeWidth !:ElementRef
  @ViewChild('prdColor') changeColor !:ElementRef
  @ViewChild('prdColorAr') changeColorAr !:ElementRef
  @ViewChild('prdURL') changeURL !:ElementRef
  @ViewChild('prdSubCatg') changeSubCatg !:ElementRef

  constructor(
    private productServices : ProductsCrudService,
    private subCategServices: productsSubCategservice ) { }

  ngOnInit(): void {
    this.subCategServices.getSubCateg().subscribe(categListt => {
      console.log(categListt);
      this.categListName = categListt[0].Name
      console.log(this.categListName);

      categListt.forEach(catgName => {
      this.categList.push({Name:catgName.Name, id:catgName.id})
    });

    console.log(this.categList);
      
    })
  }

  saveProduct(
    prdPrdName: string,
    prdName: string,
    prdNameAr: string,
    prdQuantity: string,
    prdPrice: string,
    prdMaterial: string,
    prdMaterialAr: string,
    prdAval: string,
    prdDesc: string,
    prdDescAr: string,
    prdLength: string,
    prdWidth: string,
    prdColor: string,
    prdColorAr: string,
    prdURL: string,
    prdSubCatg: string
  ) {
    let recordData = {};
    recordData['ProductName'] = prdPrdName;
    recordData['Name'] = prdName;
    recordData['NameAr'] = prdNameAr;
    recordData['Price'] = +prdPrice;
    recordData['Quantity'] =+prdQuantity;
    recordData['Material'] = prdMaterial;
    recordData['MaterialAr'] = prdMaterialAr;
    recordData['Online'] = prdAval?true:false;
    recordData['Description'] = prdDesc;
    recordData['DescriptionAr'] = prdDescAr;
    recordData['Color'] = prdColor;
    recordData['ColorAr'] = prdColorAr;
    recordData['Images'] = [prdURL,prdURL];
    recordData['Length'] = +prdLength;
    recordData['Width'] =+prdWidth;
    recordData['SubCategory'] = prdSubCatg;
    recordData['CreatedAt'] = new Date();

    this.productServices
      .createNewProduct(recordData)
      .then((res) => {
        console.log(res);
        this.message = 'Product Successfully added...';
        this.clearInput();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private clearInput() {
    this.changePrdName.nativeElement.value = '';
    this.changeName.nativeElement.value = '';
    this.changeNameAr.nativeElement.value = '';
    this.changeQuan.nativeElement.value = '';
    this.changePrice.nativeElement.value = '';
    this.changeMaterial.nativeElement.value = '';
    this.changeMaterialAr.nativeElement.value = '';
    this.changeAval.nativeElement.value = '';
    this.changeDesc.nativeElement.value = '';
    this.changeDescAr.nativeElement.value = '';
    this.changeLength.nativeElement.value = '';
    this.changeWidth.nativeElement.value = '';
    this.changeColor.nativeElement.value = '';
    this.changeColorAr.nativeElement.value = '';
    this.changeURL.nativeElement.value = '';
    this.changeSubCatg.nativeElement.value = '';
  }
}
