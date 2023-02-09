<h3 align="center">
  tailwix
</h3>

<p align="center">
  A complementary Tailwind CSS plugin for Radix UI
</p>

## Installation

```sh
npm install tailwix
```

```js
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwix')

    // Or with a custom prefix:
    require('tailwix')({ prefix: 'rx' })
  ],
}
```

## Documentation

Use Tailwind CSS utilities for styling the components based on their state. You can use the
following variants:

| Variant               | Inverse variant           |
| --------------------- | ------------------------- |
| `radix-open`          | `radix-not-open`          |
| `radix-closed`        | `radix-not-closed`        |
| `radix-visible`       | `radix-not-visible`       |
| `radix-hidden`        | `radix-not-hidden`        |
| `radix-on`            | `radix-not-on`            |
| `radix-off`           | `radix-not-off`           |
| `radix-checked`       | `radix-not-checked`       |
| `radix-unchecked`     | `radix-not-unchecked`     |
| `radix-indeterminate` | `radix-not-indeterminate` |
| `radix-complete`      | `radix-not-complete`      |
| `radix-loading`       | `radix-not-loading`       |
| `radix-delayeed-open` | `radix-not-delayeed-open` |
| `radix-instant-open`  | `radix-not-instant-open`  |
| `radix-horizontal`    | -                         |
| `radix-vertical`      | -                         |
| `radix-active`        | -                         |
| `radix-disabled`      | -                         |
| `radix-highlighted`   | -                         |
| `radix-placeholder`   | -                         |

Example:

```js
import { Menu } from "@radix-ui/react";

function MyDropdown() {
    return (
        <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    <a
                        className="radix-active:bg-blue-500 radix-active:text-white radix-not-active:bg-white radix-not-active:text-black"
                        href="/account-settings">
                        Account settings
                    </a>
                </Menu.Item>
                {/* ... */}
            </Menu.Items>
        </Menu>
    );
}
```

## Credits

All the credit goes to [@tailwindlabs](https://github.com/tailwindlabs)! This plugin was inspired by [@headlessui/tailwindcss](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss).
