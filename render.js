/***************************************************************************************************
 *          ______                                                                                 *
 *        /\ -- - |           Total Text                                                           *
 *        `| -- - |           Rich Text Editor                                                     *
 *         | _____|_          MIT License                                                          *
 *         |/______/          Copyright (c) 2023 Dariusz Dawidowski                                *
 *                                                                                                 *
 **************************************************************************************************/


class TotalText {

    constructor(args) {

        // Params
        const { container = null, value = null, spellcheck = null, onChange = null } = args;

        // Callback
        this.onChange = onChange;

        // Textarea
        this.element = document.createElement('div');
        this.element.classList.add('editor');
        if (value) this.set(value);
        this.element.setAttribute('contenteditable', true);
        this.element.setAttribute('spellcheck', spellcheck ? 'true' : 'false');
        this.element.setAttribute('autocomplete', 'off');

        // Add to container
        if (container) container.append(this.element);
    }

    /**
     * Content text
     */

    set(text) {
        this.element.innerHTML = text;
    }

    get() {
        return this.element.innerHTML;
    }

    /**
     * Clear content
     */

    clear() {
        this.element.innerHTML = '';
    }

    /**
     * Edit mode
     */

    edit(enable) {
        // Start editing
        if (enable) {
            this.element.classList.add('editing');
            this.element.setAttribute('contenteditable', true);
        }
        // Finish editing
        else {
            this.element.setAttribute('contenteditable', false);
            this.element.classList.remove('editing');
            if (this.onChange) this.onChange(this.get());
        }
    }

    /**
     * Enable/disable spellcheck
     */

    spellcheck(enable) {
        this.element.setAttribute('spellcheck', enable ? 'true' : 'false');
    }

}
