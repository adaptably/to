# @adaptably/to

Get the absolute path to a file in an ES6 module.

## Installation

`npm install @adaptably/to`

## Usage

```
import to from '@adaptably/to'

const path = to(target, source)
```

## Arguments

| Name | Type | Description |
| :-- | :-- | :-- |
| target | String | The relative path to the target file. |
| source | Object | An object with one key (`from`) which contains the absolute path to the source file (usually `import.meta.url`). |

## Example

Given the file structure:

```
source/
  folder1/
    1.js
  folder2/
    2.js
```

**1.js**
```javascript
import pathTo from '@adaptably/to'

const path = pathTo('../folder2/2.js', { from: import.meta.url })
// => /absolute/path/to/folder2/2.js
```
