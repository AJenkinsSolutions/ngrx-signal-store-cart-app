import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output,EventEmitter } from '@angular/core';
import { IProduct } from '../../../models/product.interface';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent { 

  // !! Dumb Component !!! should only be responsible for displaying

  //This component is now the 'child component' of the ProductComponent
  //Meaning it will receive data from the parent component


  // The Input means it is taking 'IN' data from the parent component
  @Input() product!: IProduct;

  //Output means we are 'Outputting' something from the UI *In this case its a product obj*
  //Dispatch Events triggered in the UI 
  @Output() handleAdd = new EventEmitter();
  constructor(){}




  // Event emitting in child component
  addToCart(product : IProduct){

    // Please handle add
    // please Emitt the value, (product)
    this.handleAdd.emit(product)

  };
  
}
