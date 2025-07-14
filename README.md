## Good Web Fonts App

### Created app with choices of good fonts for the web.

App is based on Goggle Fonts page color scheme in dark mode, with view transitions, detailed pages and filtering by font type option.

Some technologies used for this APP might not work on all browsers!
____

#### Tryed out HSL() function for creating different color shades based on main color.
--theme-clr: hsl(203, 100%, 23%);

color: hsl(from var(--theme-clr) h s calc(l + 25));
##### NOTE: HSL() color creating functionality doesn't work in border colors

#### Visually hidding elements in the DOM with this class
.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

##### Not happy with how I did Copy to Clipboard functionality

##### No idea why pseudo elements position or go in second row happens for some font families...

#### Hidden attribute now works on grid and flex-box elements
_

#### About CSS view transitions
[Video tut](https://www.youtube.com/watch?v=quvE1uu1f_I)
[Video doc](https://www.youtube.com/watch?v=DtErR1UUyiU)
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition-group)

___


###### Manual for capturing sample screenshots from Google Fonts webpage, with monitor screen resolution of 1680 x 1050

<small>1. copy the sentence in filter side bar's textbox</small>

<small>2. set the font size to 24px (some fonts cane be exceptions...)</small>

<small>3. keep the filter sidebar open</small>

<small>4. console opened and set on the right and shrinked all the way to the right</small>

<small>5. result list should be displayed as grid</small>

<small>6. than do a capture node screenshot of the image of font letters</small>

<small>that way screenshot captured should be 377px in width!</small>