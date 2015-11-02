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
- extremly encapsulated & reusable
- Drawback: multiple repos (hence slowdown while working on multiple elements at the same time)


## Good Practices

### All Elements are Siblings 

- canonical path '../my-element/my-element.html'
- flat dependencies --> flat directory structure 
	- like in the `bower_components` directory ...

[Polyserve]() automatically redirects `bower_components` such that they can be treated as siblings.

For example: `../paper-button/paper-button.html`

#### Virtually serve siblings
Like Polyserve you could serve multiple folders as siblings of other folders. 
Though that could become quite a mess?



### Good Paths and Bad Paths: 

- Good (reference only siblings or children)
	- `../my-element/my-element.html` 						//sibling element
	- `../my-element/my-sub-element.html`					//in root of sibling
	- `my-sub-element.html`									//child of own root
	- `my-sub-element/my-sub-element.html`					//child of own subfolder
- Bad (reference into internal structure of other elements)
	- `../my-element/my-sub-element/my-sub-element.html`	//child of sibling subfolder



### Prefix-Party 
You can use prefixes. Google does it with `x-`, `iron-`, `paper-`, `platinum-`. 
With your custom prefixes you are able to sort directory of 100 elements by groups. 

An ugly hack is: `x-my-element/my-element.html` - using the `x-` only for grouping of folders, but not for file-names... 



Examples:

- [93 Polymer Elements grouped by prefix](https://elements.polymer-project.org/browse)
- [Topeka elements with and without prefix](https://github.com/Polymer/topeka-elements)
- Polymer Designer 
	- [Prefixed elements](https://github.com/Polymer/designer/tree/master/elements)
	- [src folder for vanilla js (with html-imports)](https://github.com/Polymer/designer/tree/master/src) 


#### Semantic vs. Arbitrary Prefixing
Google uses prefixes like `paper-`, `iron-` or `topeka-`. They don't describe any explicit function, but are _arbitrary_ names for groups of elements. 

Using _semantic_ prefixing can become kind of odd, since the natural names of things are structured the other way arround: 

It takes a while to get used to naming conventions like `table-kitchen` and `table-picnic`...  
Much easier is `xyz-kitchen-table` and `xyz-picnic-table`...  

Prefixes shouldn't be totally arbitrary, but a list of short words like `iron`, `paper`, `gold` that are familiar words.

### Particles 
Particles are sub-elements, that exist exclusively in their host-element and never in sibblings. 



Properties

- Particles are never imported outside of their host-element
- Particles don't break the `all elements are siblings` pattern. 
- Particle directories are children of the host directory 
	- They may contain their own `demo` and `test` folders.
	- All particles of an host-element are siblings

Examples:

- [paper-item-body](https://github.com/PolymerElements/paper-item)


### Isomers
An isomer is an element in the directory of a host-element. They are siblings of all elements.


Properties

- Isomers are closely related to the host-element
- Isomers are not complex enough to be host-elements theirselfs
- Isomers are imported by other elements.



Examples: 

- [neon-animation](https://github.com/PolymerElements/neon-animation)


 

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