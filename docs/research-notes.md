# Research Notes

This file includes research done to improve the app, including suggestions for new features or technologies

## Features/Technologies to improve the app

- Update the table below  with the following information:
  - Description of the technology or feature.
  - Issue links or additional links referencing the technology or feature to be added.

| S/N         | Description |   Issue/additional links |
| ----------- | ----------- |  --------                |
|    1        | -           |  -                       |

## Accessibility checklist

Checklist based on [The Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/).
According `WCAG` there are three levels of accessibility compliance, by priority.

Levels we will use:

- `A` - Essential (If not met may not be able to read, understand or fully operate the page or view)
- `AA` - Ideal Support
- `AAA` - Specialized Support
- `AAAA` - Best practice (not mandatory by `WCAG`)

Update the table below with the following information:

- Task to improve accessibility
- Level of priority
- Relevant documentation regarding the task
- Issue links for the specific task
- Referencing the person/persons who will solve the issue
- Mark as `Done` when PR is merged and issue is completed

| Task        | Level       | Documentation | Issue       | Assign to  | Done       |
| ----------- | --------    | --------      | --------    | --------   | --------   |
| `[aria-*]` attributes match their roles | A | [docs](https://dequeuniversity.com/rules/axe/4.4/aria-allowed-attr?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `[aria-hidden="true"]` is not present on the document `<body>` | A | [docs](https://dequeuniversity.com/rules/axe/4.4/aria-hidden-body?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `[role]`s have all required `[aria-*]` attributes | A | [docs](https://dequeuniversity.com/rules/axe/4.4/aria-required-attr?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children | A | [docs](https://dequeuniversity.com/rules/axe/4.4/aria-required-children?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `[role]`s are contained by their required parent element | A | [docs](https://dequeuniversity.com/rules/axe/4.4/aria-required-parent?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `[role]` values are valid | A | [docs](https://dequeuniversity.com/rules/axe/4.4/aria-roles?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `[aria-*]` attributes have valid values | A | [docs](https://dequeuniversity.com/rules/axe/4.4/aria-valid-attr-value?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `[aria-*]` attributes are valid and not misspelled | A | [docs](https://dequeuniversity.com/rules/axe/4.4/aria-valid-attr?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| Buttons have an accessible name | A | [docs](https://dequeuniversity.com/rules/axe/4.4/button-name?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| Image elements have `[alt]` attributes | A | [docs](https://dequeuniversity.com/rules/axe/4.4/image-alt?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `[user-scalable="no"]` is not used in the `<meta name="viewport">` element and the `[maximum-scale]` attribute is not less than 5 | A | [docs](https://dequeuniversity.com/rules/axe/4.4/meta-viewport?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `[aria-hidden="true"]` elements do not contain focusable descendents | A | [docs](https://dequeuniversity.com/rules/axe/4.4/aria-hidden-focus?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| The page contains a heading, skip link, or landmark region | A | [docs](https://dequeuniversity.com/rules/axe/4.4/bypass?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| Document has a `<title>` element | A | [docs](https://dequeuniversity.com/rules/axe/4.4/document-title?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `[id]` attributes on active, focusable elements are unique | A | [docs](https://dequeuniversity.com/rules/axe/4.4/duplicate-id-active?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `<html>` element has a `[lang]` attribute | A | [docs](https://dequeuniversity.com/rules/axe/4.4/html-has-lang?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| `<html>` element has a valid value for its `[lang]` attribute | A | [docs](https://dequeuniversity.com/rules/axe/4.4/html-lang-valid?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| Links have a discernible name | A | [docs](https://dequeuniversity.com/rules/axe/4.4/link-name?utm_source=lighthouse&utm_medium=lr) | - | - | <ul><li>[x] </li></ul> |
| Background and foreground colors should have a sufficient contrast ratio | AA | [docs](https://dequeuniversity.com/rules/axe/4.4/color-contrast?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TODO</li></ul> |
| Heading elements should be in a sequentially-descending order | AAAA | [docs](https://dequeuniversity.com/rules/axe/4.4/heading-order?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TODO</li></ul>  |
| The page has a logical tab order | A | [docs1](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/?utm_source=lighthouse&utm_medium=lr) [docs2](https://www.w3.org/WAI/WCAG21/quickref/#keyboard-accessible) [docs3](https://www.csun.edu/universal-design-center/web-accessibility-criteria-tab-order#WC) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
| Interactive controls are keyboard focusable | A | [docs1](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/?utm_source=lighthouse&utm_medium=lr) [docs2](https://www.w3.org/WAI/WCAG21/quickref/#keyboard-accessible) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
| Interactive elements indicate their purpose and state | AA | [docs](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
| The user's focus is directed to new content added to the page | AAAA | [docs](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
| User focus is not accidentally trapped in a region | AA | [docs](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
| Custom controls have associated labels | AA | [docs](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
| Custom controls have ARIA roles | AA | [docs](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
| Visual order on the page follows DOM order | AA | [docs](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
| Offscreen content is hidden from assistive technology | AA | [docs](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
| HTML5 landmark elements are used to improve navigation | AA | [docs](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/?utm_source=lighthouse&utm_medium=lr) |  |  | <ul><li>[ ] TO CHECK</li></ul> |
