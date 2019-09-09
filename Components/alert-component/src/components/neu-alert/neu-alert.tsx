import { Component, Prop, h, State, Method, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'neu-alert',
    styleUrl: 'neu-alert.css',
    shadow: true
})
export class NeuAlert {

    @Prop() alertType: string = "primary";
    @Prop() alertDismissible: boolean = false;
    @Prop() autoDismissTimer: number = null;

    @State() isDismissed: boolean = null;

    @Event() alertDismissed: EventEmitter;

    @Method()
    async showAlert(): Promise<void> {
        setTimeout(() => {
            this.isDismissed = false;
        }, 300);
    }

    @Method()
    async dismissAlert(): Promise<void> {
        this.isDismissed = true;
        setTimeout(() => {
            this.alertDismissed.emit();
        }, 300);
    }

    getAlertState(): string {
        if (this.isDismissed === true) {
            return "hide";
        } else if (this.isDismissed === false) {
            return "show";
        } else {
            return "";
        }
    }

    componentDidLoad() {
        if (this.autoDismissTimer && !this.alertDismissible) {
            setTimeout(() => {
                this.isDismissed = true;
                setTimeout(() => {
                    this.alertDismissed.emit();
                }, 300);
            }, this.autoDismissTimer);
        }
    }

    render() {
        return (
            <div class={`neu-alert fade ${this.alertType} ${this.getAlertState()}`}>
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