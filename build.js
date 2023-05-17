/**
 * Build script v4/js
 */

const src_ejs = 'total-text.js.ejs';
const dst_js = 'total-text.js';

const fs = require('fs');
const ejs = require('ejs');
const { readFile } = require('fs').promises;
const { minify } = require('terser');

const minjs = async (filePath) => {
    try {
        const inputCode = await readFile(filePath, 'utf8');
        const minifiedCode = (await minify(inputCode)).code;
        return minifiedCode;
    }
    catch (error) {
        console.error(`Error minifying js ${filePath}:`, error);
        return null;
    }
};

fs.mkdirSync('dist');
ejs.render(fs.readFileSync(src_ejs, 'utf8'), { minjs }, {async: true})
.then(output => fs.writeFileSync('dist/' + dst_js, output, 'utf8'));
