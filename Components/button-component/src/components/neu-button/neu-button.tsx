import { Component, Prop, h, State, Method, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'neu-button',
    styleUrl: 'neu-button.scss',
    shadow: true
})
export class NeuAlert {

    @Prop() type: string = "primary";
    @Prop() buttonStyle: string = "primary";
    @Prop() size: string = "primary";
    @Prop() disabled: boolean = false;

    render() {
        const disabledClass = this.disabled ? "disabled" : "";
        return (
            <button type={this.type} class={`neu-button fade neu-button-${this.buttonStyle} neu-button-${this.size} ${disabledClass}`}>
                <slot />
            </button>
        );
    }
}