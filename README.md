# Analyze Action

After you request action.yml data through axios, it will help you analyze the obtained string and get the action information.

[![npm](https://img.shields.io/npm/v/analyze-action?style=flat-square&color=orange)](https://www.npmjs.com/package/analyze-action)
![](https://img.shields.io/npm/l/analyze-action?style=flat-square&color=blue)

## 🚀 Usage

```js
const { analyzeActionYml } = require('analyze-action');
// or
import { analyzeActionYml } from 'analyze-action';

analyzeActionYml(data);
```

## 🎁 API

- [analyzeActionYml](#analyzeactionyml) `1.0.0`

### analyzeActionYml

```js
analyzeActionYml(data, countOfficial);
```
#### Input
| Params | Desc | Type | Required | Default |
| -- | -- | -- | -- | -- |
| data | Oobtained string | string | ✔ | - |
| countOfficial | Whether to count the official action | boolean | ✖ | true |

#### Output

```js
{
  name: 'Issues Helper',
  actions: [
    owner: 'actions-cool',
    repo: 'issues-helper',
    version: 'v2.0.0'
  ]
}
```

## LICENSE

[MIT](https://github.com/actions-cool/analyze-action/blob/main/LICENSE)
