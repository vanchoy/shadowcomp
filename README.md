# What is this?

Get perfect shadows every time for non-designer.

# Installation

`npm i shadowcomp --save`

Then...

```
import { shadowComponent } from shadowComponent;

shadowComponent({
    shadow_type: 'soft',
    padding: false
});
```

## Options

ShadowComponent supports 2 options, both of which are optional:

* *shadow_type* - _hard | soft_ (Default set to soft)
* *padding* - _boolean_ (Default set to false)