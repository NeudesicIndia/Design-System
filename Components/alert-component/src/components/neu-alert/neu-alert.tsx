import { Component, Prop, h, State, Method, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'neu-alert',
    styleUrl: 'neu-alert.css',
    shadow: true
})
export class NeuAlert {

    @Element() private element: HTMLElement;
    @Prop() alertType: string = "primary";
    @Prop() alertDismissible: boolean = false;

    @State() isDismissed: boolean = false;

    @Event() alertDismissed: EventEmitter;

    @Method()
    async dismissAlert() {
        this.isDismissed = true;
        setTimeout(() => {
            this.alertDismissed.emit();
            this.element.remove();
        }, 300);
    }

    render() {

        return (
            <div class={`neu-alert fade ${this.alertType} ${this.isDismissed ? 'hide' : 'show'}`}>
                <slot name="header"></slot>
                <slot name="content"></slot>
                {this.alertDismissible
                    ? <button type="button" class="neuBtn close" onClick={this.dismissAlert.bind(this)}>x</button>
                    : null
                }

            </div>
        );
    }
}