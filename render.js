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

        // Main element
        this.element = document.createElement('div');
        this.element.classList.add('total-text');

        // Textarea
        this.editor = document.createElement('div');
        this.editor.classList.add('editor');
        if (value) this.set(value);
        this.editor.setAttribute('contenteditable', true);
        this.editor.setAttribute('spellcheck', spellcheck ? 'true' : 'false');
        this.editor.setAttribute('autocomplete', 'off');
        this.element.append(this.editor);

        // Add to container
        if (container) container.append(this.element);
    }

    /**
     * Content text
     */

    set(text) {
        this.editor.innerHTML = text;
    }

    get() {
        return this.editor.innerHTML;
    }

    /**
     * Clear content
     */

    clear() {
        this.editor.innerHTML = '';
    }

    /**
     * Edit mode
     */

    edit(enable) {
        // Start editing
        if (enable) {
            this.editor.classList.add('editing');
            this.editor.setAttribute('contenteditable', true);
        }
        // Finish editing
        else {
            this.editor.setAttribute('contenteditable', false);
            this.editor.classList.remove('editing');
            if (this.onChange) this.onChange(this.get());
        }
    }

    /**
     * Enable/disable spellcheck
     */

    spellcheck(enable) {
        this.editor.setAttribute('spellcheck', enable ? 'true' : 'false');
    }

}
