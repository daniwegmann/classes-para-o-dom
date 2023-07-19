import { Component } from "./Component.js";

export class Label extends Comment {
    constructor(text, parent, options) {
        super('label', parent, Object.assign({}, options, { textContent: text }))
    }
}