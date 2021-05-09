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
## Methods

| Method  | Param  | description |
| -------------------------|------------------------|----------------------------|
| **setTemplate** | template | Take the template and load it to the builder |
| **saveTemplate** | Function callback | Returns the design JSON  and HTML in a callback function|
| **exportHtml**   | Function callback  | Returns the design HTML in a callback function |

## Properties

**template** _object_ or _string_ You can set MJML Json on MJML XML as string to this props
**config** _object_ You can use this props to config and customize the builder
**onLoad** _function callback_ You can use this to set call back function on builder load
### Configuration Options
---
| Attribute                           | Required |                                                                                                                 |
| :---------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| **brand**<br/>_object_              | No       | This is the Brand Object from Yakoue. You can get it from the Brand settings page.                              |
| **locale**<br/>_string_             | No       | This is the locale you want to load the editor in. We have many translations available.              |
| **fusionTags**<br/> _object_        | No       | This is an array of objects. You can pass the merge tags and special links to display in the editor. |
| **token**<br/>_string_              | No       | String token for authentication. It is required to enable user saved blocks.                                    |
| **tools**<br/>_object_              | No       | These are the options for tools and custom tools.                                                     |
| **blocks**<br/>_object_             | No       | This is an array of objects. You can pass custom blocks here.                                        |
| **drows**<br/>_object_              | No       | This is an array of objects. You can pass custom rows (sections) here.                               |
| **body**<br/>_object_               | No       | This objects to custom default template settings                                                                |
| **editor** <br/>_object_            | No       | These are some editor options for different functions of the editor.                                 |
| **fonts** <br/>_object_             | No       | You can pass custom fonts here.                                                                     |
| **toolsDefaultValues**<br/>_object_ | No       | You can pass default tools properties here.                                                                     |
| **callbacks** <br/>_array_          | No       | Array of callbacks functions                                                                                    |



### Customize configuration

See [Configuration Reference](https://docs.yakoue.com/plugins/).

For any report please write to contact@yakoue.com