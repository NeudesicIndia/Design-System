import { Component, Prop, h, Method, State, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'neu-modal',
  styleUrl: 'neu-modal.css',
  shadow: true
})
export class NeuModal {

  @Element() el: HTMLElement;

  @Prop() size: string; 
  @Prop() showcancel: boolean = true;
  @Prop() showcancelicon: boolean = true; 
  @Prop() footer: boolean = true;
  @Prop() header: boolean = true;
  @State() isopen: boolean = false;

  @Method()
  openModal() {
    this.isopen = true;
  }
  @Event() onModalClose : EventEmitter; 
 
  closeModal() {
    this.isopen = false;
    this.onModalClose.emit();
  }

  render() {
    // console.log(this.el.shadowRoot.childNodes[2]);
    //let showcancel = this.el.hasAttribute('showcancel');
    //let showcancelValue = this.el.getAttribute('showcancel');   
    //console.log(showcancelValue);

    let showMyCancelIcon = null;   
    if(this.showcancelicon){
      showMyCancelIcon = [<button class="neuBtn close" onClick={this.closeModal.bind(this)}> x </button>]; 
    }

     //show or hide cancel button
     let cancelBtnShow = null;  
     if(this.showcancel){
       cancelBtnShow = [<button class="neuBtn secondary" onClick={this.closeModal.bind(this)}>Cancel</button>];
     }
    //Show or Hide Header
    let showMyHeader = null;  
    if(this.header){
      showMyHeader = [<header> <slot name="header"></slot></header>];
    }

    //Show or Hide Footer
    let showMyFooter = null;  
    if(this.footer){
      showMyFooter = [ <footer> {cancelBtnShow} <slot name="footer"></slot> </footer>];
    }
 
    //resize modal
    let modalClass:string = "modal-main"+ " " + this.size;  
    let content = null;

    if (this.isopen) { 
      content = [
        <neu-backdrop> </neu-backdrop>,
        <div class={modalClass}>
          <div class="cancleIcon">{showMyCancelIcon}</div>
          {showMyHeader}
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          {showMyFooter} 
        </div>
      ]
    }

    return content;
  }
}
