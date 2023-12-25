# text/typescript

Use TypeScript directly in HTML Script tags.

```html
<script type="text/typescript">
    // Your TypeScript code here
</script>
```

Then load the dependencies,

```html
<script src="https://cdn.jsdelivr.net/npm/typescript@latest"></script>
<script defer src="https://cdn.jsdelivr.net/npm/text-typescript@latest"></script>
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
        <script src="https://cdn.jsdelivr.net/npm/typescript@latest"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/text-typescript@latest"></script>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

Working Example : [editor.sbcode.net](https://editor.sbcode.net/f1f4b5a73ec40283d1ddb37bb1e71f7e4e31b487)
