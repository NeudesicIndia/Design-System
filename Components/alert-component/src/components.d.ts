/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface NeuAlert {
    'alertDismissible': boolean;
    'alertType': string;
    'autoDismissTimer': number;
    'dismissAlert': () => Promise<void>;
    'showAlert': () => Promise<void>;
  }
}

declare global {


  interface HTMLNeuAlertElement extends Components.NeuAlert, HTMLStencilElement {}
  var HTMLNeuAlertElement: {
    prototype: HTMLNeuAlertElement;
    new (): HTMLNeuAlertElement;
  };
  interface HTMLElementTagNameMap {
    'neu-alert': HTMLNeuAlertElement;
  }
}

declare namespace LocalJSX {
  interface NeuAlert extends JSXBase.HTMLAttributes<HTMLNeuAlertElement> {
    'alertDismissible'?: boolean;
    'alertType'?: string;
    'autoDismissTimer'?: number;
    'onAlertDismissed'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'neu-alert': NeuAlert;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

