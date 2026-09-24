# CSS Revision Reference

This folder is a quick-glance reference based on the CSS/Grid/Animation/Media Query concepts shown in the screenshots you shared.

## Files

1. `01-grid-basics.html` + `01-grid-basics.css`
   - `display: grid`
   - `grid-template-rows`
   - `grid-template-columns`
   - `fr`
   - `repeat()`
   - basic grid structure

2. `02-grid-gaps.html` + `02-grid-gaps.css`
   - `gap`
   - `grid-gap`
   - `row-gap`
   - `column-gap`

3. `03-grid-placement.html` + `03-grid-placement.css`
   - `grid-column-start`
   - `grid-column-end`
   - `grid-column`
   - `grid-row-start`
   - `grid-row-end`
   - `grid-row`
   - `span`

4. `04-grid-properties.html` + `04-grid-properties.css`
   - `justify-items`
   - `align-items`
   - `justify-self`
   - `align-self`
   - `place-items`
   - `place-self`

5. `05-css-animations.html` + `05-css-animations.css`
   - `@keyframes`
   - animation name
   - duration
   - timing function
   - delay
   - iteration count
   - direction
   - shorthand
   - percentage keyframes

6. `06-media-queries.html` + `06-media-queries.css`
   - exact `width`
   - `min-width`
   - `max-width`
   - width ranges using `and`
   - `orientation: landscape`
   - `orientation: portrait`
   - combining conditions

## Quick Memory

### Grid
`display: grid` -> creates the grid.

`grid-template-columns` -> controls columns.

`grid-template-rows` -> controls rows.

`repeat(3, 1fr)` -> 3 equal tracks.

`gap` -> space between grid cells.

`grid-column: 1 / 3` -> column line 1 to line 3.

`grid-column: 1 / span 2` -> start at line 1 and occupy 2 columns.

`grid-row: 1 / 3` -> row line 1 to row line 3.

### Alignment
`justify` -> horizontal.

`align` -> vertical.

`items` -> all grid items.

`self` -> one grid item.

### Animation
`@keyframes` -> defines the animation.

`animation: name duration timing delay count direction;`

### Media Queries
`max-width` -> width or smaller.

`min-width` -> width or larger.

`width` -> exact width.

`and` -> both conditions must be true.

`landscape` -> horizontal orientation.

`portrait` -> vertical orientation.
