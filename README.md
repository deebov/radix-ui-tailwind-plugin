<h3 align="center">
  radix-ui-tailwind-plugin
</h3>

<p align="center">
  A complementary Tailwind CSS plugin for Radix UI
</p>

## Installation

```sh
npm install radix-ui-tailwind-plugin
```

```js
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('radix-ui-tailwind-plugin')

    // Or with a custom prefix:
    require('radix-ui-tailwind-plugin')({ prefix: 'rx' })
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
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function MyDropdown() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="radix-open:bg-gray-100 radix-disabled:cursor-auto radix-disabled:bg-gray-100">
                More
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="radix-open:shadow-xl radix-side-bottom:bottom-0 radix-side-bottom:translate-y-full">
                <DropdownMenu.Item>
                    <a
                        className="radix-checked:text-blue-600 radix-highlighted:bg-blue-500 radix-highlighted:text-white radix-disabled:text-gray-500"
                        href="/account-settings">
                        Account settings
                    </a>
                </DropdownMenu.Item>
                {/* ... */}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}
```

## Credits

All the credit goes to [@tailwindlabs](https://github.com/tailwindlabs)! This plugin was inspired by [@headlessui/tailwindcss](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss).
