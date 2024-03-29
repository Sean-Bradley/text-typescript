# text/typescript

You can use TypeScript directly in HTML Script tags.

```html
<script type="text/typescript">
    // Your TypeScript code here
</script>
```

And to make it work, also load the dependencies.

```html
<script src="https://cdn.jsdelivr.net/npm/typescript@5.3.3"></script>
<script defer src="https://cdn.jsdelivr.net/npm/text-typescript@1.3.0"></script>
```

Example,

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>"text/typescript" example</title>
        <meta name="description" content="Transpiling and executing TypeScript in the browser" />
        <style>
            body {
                overflow: hidden;
                margin: 0px;
                font-size: 15vw;
            }
        </style>
        <script type="text/typescript">
            function foo(bar: string) {
                return "Hello " + bar;
            }

            let baz = "World!";

            document.getElementById("root").innerHTML = foo(baz);
        </script>
        <script src="https://cdn.jsdelivr.net/npm/typescript@5.3.3"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/text-typescript@1.3.0"></script>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

Working Example : [sbedit.net](https://sbedit.net/f1f4b5a73ec40283d1ddb37bb1e71f7e4e31b487)

## Functionality Supported

_CTRL+click to open links in new tab/window_

|                                                                           |                                                                                                                                                                                                                                            |        |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| [Common Types](https://sbcode.net/typescript/common_types/)               | [Working Example](https://sbedit.net/5350096f66b9d321f694cc52188e13e553edac60)                                                                                                                                                      | ✅     |
| [Classes](https://sbcode.net/typescript/classes/)                         | [Working Example](https://sbedit.net/3a8a36d3bd046d5380ad41c3c8781f5e80e08caf)                                                                                                                                                      | ✅     |
| [Interfaces](https://sbcode.net/typescript/interfaces/)                   | [Working Example](https://sbedit.net/0c0fcfdb32c8e9c0d0225dcb7ef8abe1aa64bcc8)                                                                                                                                                      | ✅     |
| [Extending Classes](https://sbcode.net/typescript/extending_classes/)     | [Working Example](https://sbedit.net/33b12f255cbe83bc8d8d5ce8cd285d071c0bb347)                                                                                                                                                      | ✅     |
| [Abstract Classes](https://sbcode.net/typescript/abstract_classes/)       | [Working Example](https://sbedit.net/6c352e04dd3a3173cb28485589edd2c5214aeb77)                                                                                                                                                      | ✅     |
| [Access Modifiers](https://sbcode.net/typescript/access_modifiers/)       | [Public](https://sbedit.net/99fdbf60c582cf972d19aae3f3f4f8e42dfe195b) [Private](https://sbedit.net/536d3082fe52fca05b5a6907ea48d09cb23e2a46) [Protected](https://sbedit.net/d8a73b252320e459b00360347e53fbeeb0e09e72) | ✅✅❌ |
| [Static Members](https://sbcode.net/typescript/static_members/)           | [Working Example](https://sbedit.net/6536773cb303a632aa1aeea81a0de136fe8549a6)                                                                                                                                                      | ✅     |
| [ES6 Imports/Exports](https://sbcode.net/typescript/es6_imports_exports/) | [Working Example](https://sbedit.net/433fc06b2282985f8bca604aa4dd58688510ca16)                                                                                                                                                      | ✅\*   |

For anything marked as ❌, it is better to use TypeScript in a desktop IDE, e.g., VSCode, since you get working intellisense, ability to import types, and type checking as you type.

Compiling/transpiling TypeScript in the browser is just for fun. Don't treat it too seriously.

\* : Caveat. ES6 Imports and Exports work if you follow some rules.

-   Create multiple `text/typscript` tags, with the `id` of the module name.
-   Order the `text/typscript` tags in compilation order.
-   The final `text/typscript` tag will be the entry point. Don't name it with any `id`. Any preceding `text/typscript` tags that have been id'd will be setup as modules in memory via an `importmap` containing multiple data URLs.
-   See the working example below.

## ES6 Import/Export Working Example

[https://sbedit.net/433fc06b2282985f8bca604aa4dd58688510ca16](https://sbedit.net/433fc06b2282985f8bca604aa4dd58688510ca16)

Using multiple `text/typscript` tags as modules,

```html
<script type="text/typescript" id="someModule">
    export default class SomeModule {
        // ...
    }
</script>
<script type="text/typescript" id="anotherModule">
    export class ModuleA {
        // ...
    }
    export class ModuleB {
        // ...
    }
</script>
<script type="text/typescript">
    import SomeModule from 'someModule'
    import { ModuleA, ModuleB } from 'anotherModule'
    // ...
</script>
```

## Some More Examples

Singleton Pattern : https://sbcode.net/typescript/singleton/#sbcode-editor_1

Flyweight Pattern : https://sbcode.net/typescript/flyweight/#sbcode-editor_1

Composite Pattern : https://sbcode.net/typescript/composite/#sbcode-editor_1





