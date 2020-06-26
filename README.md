AB_glossary
==========

AB_glossary adds accordion-like functionality to list items using JavaScript.

## Screenshot
![Screenshot](/screenshot.jpg?raw=true)

## Required files

### Styles
[AB_glossary/scss/components/_AB_glossary.scss](https://github.com/andybeckmann/AB_glossary/blob/master/scss/components/_AB_glossary.scss)

### Scripts
[AB_glossary/js/AB_glossary.js](https://github.com/andybeckmann/AB_glossary/blob/master/js/AB_glossary.js)

## Example

### HTML
```html
<div id="glossary" class="glossary">
    <ul>
        <li>
            <div class="item">
                <h3 class="header-open">Example term</h3>
                <p class="paragraph-open">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </li>
    </ul>
</div>
```
### JS
```javascript
glossary('#glossary');
```