# text/typescript

```html
<script type="text/typescript">
  // Your TypeScript code here
</script>
```

Use TypeScript directly in HTML Script tags.

Example,

```html
<!doctype html>
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
    </head>
    <body>
        <script type="text/typescript">
            function foo(bar: string) {
                return "Hello " + bar;
            }

            let baz = "World!";

            document.write(foo(baz));
        </script>
        <script src="https://unpkg.com/typescript@5.3.3/lib/typescript.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/text-typescript@1.0.0"></script>
    </body>
</html>
```

Working Example : [editor.sbcode.net](https://editor.sbcode.net/f1f4b5a73ec40283d1ddb37bb1e71f7e4e31b487)
