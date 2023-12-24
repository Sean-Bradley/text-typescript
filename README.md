# _"text/typescript"_

```html{2,4-6}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>"text/typescript" example</title>
    <style>
      body {
        overflow: hidden;
        margin: 0px;
        font-size: 15vw;
      }
    </style>
    <script src="https://unpkg.com/typescript@5.3.3/lib/typescript.js"></script>
  </head>
  <body>
    <script type="text/typescript">
      function foo(bar: string) {
          return "Hello " + bar;
      }

      let baz = "World!";

      document.write(foo(baz));
    </script>
    <script src="https://cdn.jsdelivr.net/npm/text-typescript@1.0.0"></script>
  </body>
</html>
```

Use TypeScript directly in HTML Script tags.

Example : https://editor.sbcode.net/f1f4b5a73ec40283d1ddb37bb1e71f7e4e31b487
