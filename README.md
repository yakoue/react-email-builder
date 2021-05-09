# Yakoue Email Editor



![Yakoue Email builder](https://my-ykmail-bucket.s3.eu-west-3.amazonaws.com/icons/yakoue-reactjs2.png)

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

  const exportHtml = () => {
   this.instance.export();
  };

  const onLoad = (instance) => {
      this.instance=instance
       this.instance.addEvent('onExport', (data) => {
        console.log('exportHtml', data)
      })

      this.instance.setTemplate(`<mjml> 
<mj-body> 
    <mj-section> 
        <mj-column> 
            <mj-text>
                <h1> Hey Title! </h1> 
            </mj-text>
                <mj-button> Hi nestor! </mj-button>
        </mj-column>
    </mj-section>  
</mj-body> 
</mjml>`)
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      
      <EmailBuilder
        onLoad={onLoad}
      />
    </div>
  );
};

render(<App />, document.getElementById('app'))
```


### Customize configuration

See [Configuration Reference](https://docs.yakoue.com/plugins/).

For any report please write to contact@yakoue.com