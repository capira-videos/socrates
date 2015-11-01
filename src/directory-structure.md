#How to scale Polymer apps? 

The purpose of this article is to answer the question "How to scale Polymer apps?"
In particular:

- What is a good directory structure for 100+ elements?
- What is a good directory structure for multiple entrypoints? 

##Official Recommendations

- [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit)
- [Build reusable Elements](https://www.polymer-project.org/1.0/docs/start/reusableelements.html)
	- [Polycast: "Create reusable elements with ease"](https://developers.google.com/web/shows/polycasts/season-2/create-reusable-elements?hl=en)

### Polymer Starter Kit 

### Build reusable Elements





## About good practice

```
If you find that your elements are distinct enough to warrant that structure, I would recommend A) follow our example, with many, many repos, or B) making one folder per element and add demos and tests in there. Personally, I would probably go with B (since I know what A is like)
```

[Polytrack (Example of a small app)](https://github.com/cdata/polytrack)


Directory Structure

``` 
my-element 
- my-element.html
- demo 
- test
- docs 
```

Examples: paper-elements, iron-elements ... 

Good Practices: 

- "all elements are siblings"
	- canonical path '../my-element/my-element.html'
	- flat directory structure 
	- virtually serve as siblings 

- use element prefixes (like paper-, iron-)
	- group related elements 

- build reusable elements
	- extremly encapsulated & reusable
	- multiple repos (hence slowdown while working on multiple elements at the same time)
	- https://www.youtube.com/watch?v=p7Q1mQtFGM8&index=1&list=PLOU2XLYxmsII5c3Mgw6fNYCzaWrsM3sMN
	- https://www.polymer-project.org/1.0/docs/start/reusableelements.html


- Paths 
	- Good (reference only siblings or children)
		- `../my-element/my-element.html` 						//sibling element
		- `../my-element/my-sub-element.html`					//in root of sibling
		- `my-sub-element.html`									//child of own root
		- `my-sub-element/my-sub-element.html`					//child of own subfolder
	- Bad (reference into internal structure of other elements)
		- `../my-element/my-sub-element/my-sub-element.html`	//child of sibling subfolder






Anzahl Elemente ~200 (momentan ~120)


Ein "element" ist alles, was in anderen element eingebunden werden kann.
Ein "particle" ist alles, was in nur einem bestimmten element eingebunden werden kann.
Eine Group ist eine Menge an elementen, die das selbe Präfix haben. (~7 groups)

Eine App ist ein Endpoint mit index.html, app.js und elements.html, service, gulp-task, caching, etc

src
- m1-element1
-- e1-particle-1
--   ...		 // M ~ 3
-- e1-particle-M      
-- demos
-- docs
-- tests
-- index.html
- m1-element2
-- ...			// N ~ 50
- elementN		
-- ...
apps
-- editor
-- player
-- element-X   // bsp Draw-Quiz