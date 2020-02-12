# What is this?

Get perfect shadows every time for non-designer.

# Installation

`npm i shadowcomp --save`

# Usage

```javascript
import { shadowComponent } from 'shadowcomp';

shadowComponent({
    shadow_type: 'soft',
    padding: false
});
```

OR

```javascript
import { shadowComponent } from 'shadowcomp';

const shadowOptions = {
    shadow_type: 'soft',
    padding: true
};
shadowComponent(shadowOptions);
```

In HTML add the class ```shadowComp``` to the desired image and you will get the shadow.
## Options

ShadowComponent supports 2 options, both of which are optional:

* *shadow_type* - _hard | soft_ (Default set to soft)
* *padding* - _boolean_ (Default set to false)

## Demo
![Demo](https://user-images.githubusercontent.com/11825836/74355334-079b5700-4dbd-11ea-888f-25e72d37a05d.png)
Link: https://imgur.com/8rSc6Fv
