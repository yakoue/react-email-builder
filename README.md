# Yakoue Email Editor

## Install

### CDN

```html
<script src="https://unpkg.com/@yakoue/react-email-builder"></script>
```

### NPM

```
$ npm install @yakoue/react-email-builder --save
or
$ yarn @yakoue/react-email-builder

```

## component

```js
import React, { useRef } from 'react';
import { render } from 'react-dom'

import EmailBuilder from '@yakoue/react-email-builder';

const App = (props) => {
  const builderRef = useRef(null);

  const exportHtml = () => {
    builderRef.current.instance.export((data) => {
      const {  html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      
      <EmailBuilder
        ref={builderRef}
        onLoad={onLoad}
      />
    </div>
  );
};

render(<App />, document.getElementById('app'))
```


### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
