const Commits = [{msg: "Bump and build v2.4.0"}
,{msg: "Improve mixin of view ui hash to behaviors"}
,{msg: "Validate yaml as part of the tests."}
,{msg: "Clean up collection view docs"}
,{msg: "Add region events for layout children views"}
,{msg: "Simplify travis file"}
,{msg: "return this for destroy for consistency"}
,{msg: "doc(collectionview): bump attachHtml default impl"}
,{msg: "(#1596) Add 'filter' option to the CollectionView"}
,{msg: "Add missing param to getChildViewContainer API"}
,{msg: "Add Marionette feature flags"}
,{msg: "perf(collectionView): reorderOnSort option for collectionView"}
,{msg: "Utilize getOption for CollectionView sort"}
,{msg: "Call Backbone.View with result of options"}
,{msg: "Add mergeOptions helper."}
,{msg: "Outsource ci.sh and add 2.4 to matrix"}
,{msg: "Add lodash 3.1 to matrix"}
,{msg: "Clairfy 'onAttach' documentation"}
,{msg: "Change _.rest multiple arg usage to drop for lodash 3 support"}
,{msg: "Deprecate the Controller Class."}
,{msg: "Fix issue with bundled root.Mn alias."}
,{msg: "Eliminate _setLength for micro optimization"}
,{msg: "Remove unused listener from base view class."}
,{msg: "Add grid tests for underscore 1.7"}
,{msg: "Add lodash to test matrix"}
,{msg: "Fix #2134; LayoutView should remove its element before destroying child regions"}
,{msg: "Doc linking fixes"}
,{msg: "Add before:show event to ChildView when added after show"}
,{msg: "Use call when there are no params"}
,{msg: "Add LayoutView shortcut methods"}
,{msg: "listenTo doesn't have a fourth argument."}
,{msg: "Add template-cache options."}
,{msg: "Support @ui selectors in region definition objects for LayoutView."}
,{msg: "Enable passing preventDestroy to region.empty."}
,{msg: "Allow custom sort comparator for CollectionView"}
,{msg: "isRendered should be true for a itemView after render with no template set"}
,{msg: "Add `isRendered` property to Views"}
,{msg: "Update marionette.regionmanager.md"}
,{msg: "Merge pull request #2320 from jasonLaster/unit-readme"}
,{msg: "Add a README for unit tests"}
,{msg: "Added Gitter Icon to the readme.md to help people join faster"}
,{msg: "Update Application documentation."}
,{msg: "v2.3.2 bump and build"}
,{msg: "Ensure apply is not called with undefined."}
,{msg: "Fix misleading #bindEntitiyEvents docs"}
,{msg: "Merge pull request #2210 from marionettejs/sjs/revert-doc-change"}
,{msg: "Revert \"Documentation fix: broken link to Marionette.View\""}
,{msg: "Fix incorrect event name docs"}
,{msg: "Merge pull request #2198 from ChrisGrant/patch-1"}
,{msg: "Missing semicolon in marionette.application docs"}
,{msg: "V2.3.1 bump and build"}
,{msg: "Fix #2108; be consistent with _.each iteration"}
,{msg: "Use bind instead of partial in TriggerHandlersForBehaviours"}
,{msg: "View: set isDestroyed to false by default"}
,{msg: "[Fix] event listener unsetting on region swap."}
,{msg: "Refactor behavior event collision solution."}
,{msg: "Fix delegateEvents + behavior bug"}
,{msg: "Reduce RegionManager.addRegions"}
,{msg: "Scope LayoutView regions to the view's elements"}
,{msg: "Fix getEl not scoped to region"}
,{msg: "updateIndicies: Reuse increment and decrement logic"}
,{msg: "Add getValue helper refactor"}
,{msg: "Merge pull request #2178 from spinloop/patch-1"}
,{msg: "Update marionette.collectionview.md"}
,{msg: "Merge pull request #2177 from paulfalgout/patch-5"}
,{msg: "No * in the link"}
,{msg: "Merge pull request #2176 from paulfalgout/patch-4"}
,{msg: "\"event\" missing from heading breaking index"}
,{msg: "Fix readme inspector image dimensions"}
,{msg: "Merge pull request #2150 from jasonLaster/inspector"}
,{msg: "Add Inspector to readme"}
,{msg: "Lock all dev deps"}
,{msg: "Bump and build v2.3.0"}
,{msg: "[minor] LayoutView._reInitializeRegions simplification"}
,{msg: "Underscore<1.6 compatibility"}
,{msg: "[minor] get option simplification"}
,{msg: "Simplify normalizeUIKeys considerably"}
,{msg: "[minor] simplify normalizeUIValues"}
,{msg: "[minor] simplify normalizeMethods helper"}
,{msg: "Fixes broken link to marionette.functions"}
,{msg: "Update package manager files to ignore correct files"}
,{msg: "support passing in 'sort' as both a class property and as an option."}
,{msg: "Remove destroy listener from previous view on region show."}
,{msg: "Fix getOption inside of AppRouter."}
,{msg: "Replace region innerHTML with jquery html."}
,{msg: "Passes model and index to emptyViewOptions."}
,{msg: "[api] rename api file to yaml extension"}
,{msg: "CompositeView comment cleanup"}
,{msg: "Remove deleted test from SpecRunner"}
,{msg: "feat(region): pass the option to the trigger events"}
,{msg: "fix(test): add consistency about named spy"}
,{msg: "Exclude generated coverage files in .gitignore"}
,{msg: ":100:% test coverage of serialize data"}
,{msg: "Test for childViews added at an existing index"}
,{msg: "Remove test handled by backbone.babysitter"}
,{msg: "Test with multiple versions of backbone and _"}
,{msg: "Create view, region, and regionManager parent references"}
,{msg: "spec for show events of emptyview if collectionview already shown"}
,{msg: "Spec to check if parentEl is defined but el is an object"}
,{msg: "Spec for undefined hash for normalizeUIValues"}
,{msg: "Remove check/error as childView defaults to self"}
,{msg: "Add deprecation warning for App regions."}
,{msg: "added childView as getChildViewContainer parameter and updated the private _insertAfter function to pass it through #1983"}
,{msg: "Adds deprecation notice about Application channel."}
,{msg: "Add Marionette.deprecate"}
,{msg: "Optimize view.triggerMethod"}
,{msg: "Rearrange ItemView.serializeData logic"}
,{msg: "Optimize ItemView.serializeCollection"}
,{msg: "Compat fixes for Backbone@1.0"}
,{msg: "Add missing specs to SpecRunner.html normalize-ui helpers"}
,{msg: "Sort dependencies and spec imports alphabetically"}
,{msg: "Remove bower dev dependency"}
,{msg: "Remove unused ItemView.destroy method"}
,{msg: "Remove devDependencies from bower"}
,{msg: "Adds onAttach triggerMethod."}
,{msg: "Fix underscore@1.6 dependent test"}
,{msg: "Minor simplifications to LayoutView"}
,{msg: "Document deprecation of Marionette.Deferred for #1982"}
,{msg: "Allow non-DOM-backed regions with `allowMissingEl`"}
,{msg: "Fix typos in Controller.yaml file"}
,{msg: "Optimization refactor of triggerMethodOn"}
,{msg: "Minor: use _.rest in View.serializeModel and ItemView.serializeCollection"}
,{msg: "Use _.invoke in Module.stop"}
,{msg: "UndelgateEvents: use apply with arguments instead of slice"}
,{msg: "Use rest in Module.create"}
,{msg: "Use reduce in View.configureTriggers"}
,{msg: "Minor: attempt to avoid _.result call in normalizeKeys"}
,{msg: "Avoid computing path when no onRoute set"}
,{msg: "Minor: simplify RegionManager emptyRegions"}
,{msg: "Add JSDOC Preview"}
,{msg: "Adds deprecation notice regarding Callbacks."}
,{msg: "Removes slice from jshintrc"}
,{msg: "Removes IIFE patterns in source."}
,{msg: "Refactor Region to sub-class Object"}
,{msg: "Refactor Behavior to subclass Object"}
,{msg: "Refactor Application to subclass Object"}
,{msg: "Adds _getNestedView to Layout and Collection Views."}
,{msg: "Adds isNodeAttached helper method."}
,{msg: "Updates docs to use getter methods."}
,{msg: "Replaces slice with _.toArray"}
,{msg: "Updates Controller documentation."}
,{msg: "Updates Module documentation."}
,{msg: "Aliases Marionette as Mn"}
,{msg: "fix indentation for destroy method for proper JSON output :neckbeard:"}
,{msg: "Add auto addRegions behavior to regionMananger"}
,{msg: "adding item-view.jsdoc... again"}
,{msg: "Improve undefined region show message."}
,{msg: "Uses on instead of listenTo for the view show callback."}
,{msg: "Update region-manager.jsdoc"}
,{msg: "Updates file names; remove unnecessary files."}
,{msg: "Removes unnecessary emptyRegions call in LayoutView."}
,{msg: "Update param types for addRegion method"}
,{msg: "Improves Application triggerMethod arguments."}
,{msg: "region._ensureViewIsIntact"}
,{msg: "Adds helper methods to AppRouter."}
,{msg: "Merge pull request #2132 from adamboduch/master"}
,{msg: "#2127: Explicitly mention that collections are not passed to the template context in composite views"}
,{msg: "Merge pull request #2125 from paulfalgout/patch-3"}
,{msg: "Wiki link removed"}
,{msg: "Merge pull request #2120 from paulfalgout/patch-2"}
,{msg: "Fix buffering implementation link"}
,{msg: "Documentation fix: broken link to Marionette.View"}
,{msg: "Cleanup typos across docs and changelog."}
,{msg: "Fix broken Documentation Index link for childview"}
,{msg: "Add documentation of serializeModel"}
,{msg: "Remove documentation about View.serializeData"}
,{msg: "Lock sinon.js to fix a travis exception"}
,{msg: "Bump and build v2.2.2"}
,{msg: "Added \"v\" before version in UrlRoot property"}
,{msg: "Correct the placement of the swapOut trigger to be in accordance with the documentation_."}
,{msg: "Fix extra call to region empty. Fix #1920"}
,{msg: "Merge pull request #2000 from abiyasa/patch-1"}
,{msg: "Doc fix: the order of Module initialize parameters"}
,{msg: "Merge pull request #1991 from timsnadden/patch-1"}
,{msg: "Update CONTRIBUTING.md"}
,{msg: "fix list item \"Initialize\" consistency"}
,{msg: "Update layout-view.jsdoc - referencing #1892"}
,{msg: "Add additional jsdoc files"}
,{msg: "add controller.jsdoc file"}
,{msg: "Add render:collection docs"}
,{msg: "Add layout-view.jsdoc"}
,{msg: "Fix broken logo path"}
,{msg: "Update marionette.object.md"}
,{msg: "Improve comments in region.show. Small cleanups."}
,{msg: "Update marionette.itemview.md"}
,{msg: "Update marionette.functions.md"}
,{msg: "Update upgrade guide to follow semver"}
,{msg: "Bump and build v2.2.1"}
,{msg: "Revert \"Throw a descriptive error for collectionViews\""}
,{msg: "Fix typo"}
,{msg: "Update region-manager.jsdoc"}
,{msg: "Fix spelling"}
,{msg: "Updates API README"}
,{msg: "Typo in changelog"}
,{msg: "Remove region add duplicate event"}
,{msg: "Runs tests against src rather than built library."}
,{msg: "Updates gitignore."}
,{msg: "Warns against overriding render."}
,{msg: "Remove inaccurate changelog notes"}
,{msg: "Bump and build v2.2.0"}
,{msg: "Test for regions during layoutview initialize"}
,{msg: "Fix emptyView event proxying bug"}
,{msg: "Fail tests if the api cannot build"}
,{msg: "Fix bug with collection events before render"}
,{msg: "Add Marionette.Error"}
,{msg: "Change examples section to constructor"}
,{msg: "Add RegionManager jsdoc"}
,{msg: "Adds this.options to Application."}
,{msg: "Stop overwriting Module::startWithParent"}
,{msg: "add removeEmptyView event and tests"}
,{msg: "Loosen jquery dep"}
,{msg: "Unwrap view methods"}
,{msg: "Add doc links to each readme file"}
,{msg: "Add initialize method to Marionette.Application"}
,{msg: "Alter Marionette.normalizeUIKeys to return a new/non-mutated hash"}
,{msg: "Remove useless argument from isEmpty"}
,{msg: "Allow use of `el` in RegionManager.addRegion definition."}
,{msg: "Unwrap view triggerMethod"}
,{msg: "Add region swapOut, beforeSwapOut"}
,{msg: "Fix constructor call implementation"}
,{msg: "Add triggers support to behaviors"}
,{msg: "Unwrap view (un)bindUiElemtns"}
,{msg: "Remove new operator"}
,{msg: "Add helpers jsdoc"}
,{msg: "Add Application jsdoc"}
,{msg: "Update specs with new error text"}
,{msg: "Use throwError helper and minor formatting fix"}
,{msg: "Include View cid in ViewDestroyError"}
,{msg: "Removed now-redundant line from view constructor"}
,{msg: "Add region.jsdoc api"}
,{msg: "Add jsDocFiles build tool"}
,{msg: "Use Marionette.triggerMethodOn for child views"}
,{msg: "Add View _behaviors reference to the associated behaviors"}
,{msg: "Throw a descriptive error for collectionViews"}
,{msg: "Refactor to use triggerMethodOn"}
,{msg: "Add Marionette.triggerMethodOn"}
,{msg: "Throw an error when bindings aren't an obj or func"}
,{msg: "Normalize region selectors hash to allow a user to use the @ui. syntax"}
,{msg: "Remove triggerMethod closure"}
,{msg: "Merge pull request #1843 from marionettejs/sjs/add-defer-doc"}
,{msg: "Add note about defer shimming"}
,{msg: "Fix typo"}
,{msg: "Fix minor typos"}
,{msg: "Updates the slogan in the README."}
,{msg: "Test Application wreqr proxy"}
,{msg: "Add test case for no template"}
,{msg: "Merge pull request #1803 from marionettejs/sjs/behavior-error"}
,{msg: "Add test case for behavior error"}
,{msg: "Add test case for behavior error"}
,{msg: "Merge pull request #1799 from jdaudier/updateRegionMgrDoc"}
,{msg: "Update RegionManager doc"}
,{msg: "Merge pull request #1795 from marionettejs/sjs/fix-coverage-metrics"}
,{msg: "Merge pull request #1780 from marionettejs/sjs/template-less-docs"}
,{msg: "Add a note about more use cases for template false"}
,{msg: "Ignore mariontte deps from coverage"}
,{msg: "Merge pull request #1784 from marionettejs/sjs/drop-old-backbone"}
,{msg: "Update language about supported BB versions"}
,{msg: "Merge pull request #1779 from marionettejs/sjs/fix-broken-docs"}
,{msg: "Fix invalid collectionView doc"}
,{msg: "Merge pull request #1766 from marionettejs/sjs/fix-broken-collection-docs"}
,{msg: "Fix incorrect collectionView docs"}
,{msg: "Merge pull request #1761 from jo/patch-1"}
,{msg: "Fix example"}
,{msg: "Merge pull request #1740 from gaogao1030/patch-1"}
,{msg: "add extend in 142 ,148,164line"}
,{msg: "Merge pull request #1692 from testbrian/master"}
,{msg: "extend Region instead of messing with prototype chain"}
,{msg: "Merge pull request #1717 from cmaher/template-helpers-docs"}
,{msg: "Clarify templateHelpers docs for non-helper methods."}
,{msg: "Merge pull request #1699 from Pleochism/patch-1"}
,{msg: "Merge pull request #1711 from jfairbank/functions-docs"}
,{msg: "Add missing 's' on index links"}
,{msg: "Fix incorrect heading in changelog"}
,{msg: "Merge pull request #1700 from pfeiffer/master"}
,{msg: "Merge pull request #1701 from slashdotdash/patch-1"}
,{msg: "Update two broken links in the documentation index"}
,{msg: "Fixed minor error in CollectionView documentation"}
,{msg: "Update marionette.compositeview.md"}
,{msg: "Bump and build v2.1.0"}
,{msg: "allow override of rendering after a collection sort"}
,{msg: "fix bug with order changed when new model added"}
,{msg: "Enforce `@ui.stuff` ui key syntax."}
,{msg: "Let RegionManager#addRegions take a function"}
,{msg: "Refactor buildRegion to simplify building from different regionConfig types"}
,{msg: "Use slice helper method"}
,{msg: "Do not use toJSON for data serialization in views"}
,{msg: "add hasView property to region"}
,{msg: "Rename CompositeView _renderRoot to _renderTemplate"}
,{msg: "remove unused args from _onCollectionAdd"}
,{msg: "Fix #1567 and add tests to cover getChildView taking a model"}
,{msg: "Add proxy for getOption to application."}
,{msg: "Document template-less item views"}
,{msg: "Fix #1435 Proxy the view's el on the behavior in addition to $el"}
,{msg: "Allow 'template: false' option for ItemView"}
,{msg: "Add Marionette.Object"}
,{msg: "Prevents AppRouter._processOnRoute() passing \"undefined\" to _.invert() when appRoutes is configured only via constructor."}
,{msg: "Add option to configure Application channels"}
,{msg: "Fix #1355 Return `this` from View and Region-based methods"}
,{msg: "pass view instance as third argument when calling Marionette.Renderer.render"}
,{msg: "Updates the contributing guide."}
,{msg: "Add region options section to docs"}
,{msg: "Add _initializeRegions and move _initRegionManager inside it."}
,{msg: "Update docs with getRegionManager method"}
,{msg: "Add getRegionManager method and use in _initRegionManager method."}
,{msg: "Use jQuery.contains to check if view.el is in DOM"}
,{msg: "Remove unneeded local variable"}
,{msg: "Merge pull request #1676 from h-tane/fix-component-path"}
,{msg: "Fix component.js path"}
,{msg: "Bump and build v2.0.3"}
,{msg: "Merge pull request #1667 from marionettejs/sjs/fix-region-bug"}
,{msg: "Fix region view destroy bug."}
,{msg: "Merge pull request #1669 from agrberg/ar/fix_before_show_for_behaviors"}
,{msg: "[fix] `before:show` trigger from region"}
,{msg: "This is really not needed and adds to the bloat of this file"}
,{msg: "Merge pull request #1541 from thejameskyle/cleanup-compositeView-childViewContainer"}
,{msg: "Cleaned up compositeView-childViewContainer spec"}
,{msg: "Merge pull request #1594 from jmeas/updates-childevents-docs"}
,{msg: "Clarifying documentation on childEvents."}
,{msg: "Add a main readme for the docs folder"}
,{msg: "Move doc link to the top of the readme"}
,{msg: "Bump and build v2.0.2"}
,{msg: "simply logic to wrap views"}
,{msg: "Remove bundled (w/wreqr+babysitter) version from bower.json"}
,{msg: "Fix bug with onRenderCollection call"}
,{msg: "Add a tests to ensure renderCollection calls"}
,{msg: "Removes triggerMethod from Controller instance."}
,{msg: "Bump bower version to fix tmp dep"}
,{msg: "Merge pull request #1635 from ahumphreys87/renameModuleDoc"}
,{msg: "Merge pull request #1631 from marionettejs/sjs/doc-fixes"}
,{msg: "rename application.module to module"}
,{msg: "Add missing vars from docs."}
,{msg: "Merge pull request #1624 from djkirby/patch-4"}
,{msg: "Update marionette.approuter.md"}
,{msg: "Merge pull request #1616 from djkirby/patch-2"}
,{msg: "Update marionette.layoutview.md"}
,{msg: "Merge pull request #1615 from djkirby/patch-1"}
,{msg: "Update marionette.compositeview.md"}
,{msg: "Merge pull request #1612 from bildja/patch-1"}
,{msg: "Highglight source block"}
,{msg: "Merge pull request #1601 from marionettejs/sjs/main-doc"}
,{msg: "Merge pull request #1607 from jmeas/remove-copyright-from-readme"}
,{msg: "Removes license info from the readme."}
,{msg: "Update main doc page to refer to the www docs"}
,{msg: "Merge pull request #1544 from thejameskyle/cleanup-sortedViews"}
,{msg: "Cleaned up sortedViews spec"}
,{msg: "Merge pull request #1589 from jmeas/link-to-region-docs"}
,{msg: "Merge pull request #1591 from jmeas/fix-collectionview-docs"}
,{msg: "Merge pull request #1593 from marionettejs/empty-options-docs"}
,{msg: "Updates emptyViewOptions documentation."}
,{msg: "Removes Marionette.async reference from docs."}
,{msg: "Links to Region docs in Application docs."}
,{msg: "Merge pull request #1581 from stephanebachelier/patch-2"}
,{msg: "Merge pull request #1580 from stephanebachelier/patch-1"}
,{msg: "Add missing Marionette dependencies"}
,{msg: "Add the `behaviorClass` options to the must part"}
,{msg: "Merge pull request #1564 from testbrian/master"}
,{msg: "Merge pull request #1572 from aarongreenlee/patch-1"}
,{msg: "JavaScript examples now render correctly"}
,{msg: "docs CompositeView childView"}
,{msg: "Merge pull request #1571 from philippm/smaller-doc-fixes"}
,{msg: "Better integrate dangling sentence into paragraph"}
,{msg: "Fix class name formatting"}
,{msg: "Merge pull request #1543 from thejameskyle/cleanup-view-uiBindings"}
,{msg: "Merge pull request #1555 from skubus/patch-1"}
,{msg: "Update marionette.region.md"}
,{msg: "Merge pull request #1552 from paulfalgout/patch-1"}
,{msg: "Merge pull request #1551 from zachsitler/patch-1"}
,{msg: "URL to backbone annotated source off"}
,{msg: "Update marionette.collectionview.md"}
,{msg: "fix docs: CollectionView getChildView"}
,{msg: "Cleaned up view.uiBindings spec"}
,{msg: "Merge pull request #1523 from jasonLaster/dupe-test"}
,{msg: "Merge pull request #1535 from olid16/patch-1"}
,{msg: "Update CONTRIBUTING.md"}
,{msg: "Merge pull request #1525 from nibblebot/patch-1"}
,{msg: "Update changelog.md"}
,{msg: "Remove dupe test"}
,{msg: "Fix incorrect getRegionManager docs."}
,{msg: "Bump and build v2.0.1"}
,{msg: "Merge pull request #1501 from thejameskyle/fix-amd-build"}
,{msg: "Merge pull request #1500 from meagar/master"}
,{msg: "Add Wreqr and Babysitter to Core AMD definition"}
,{msg: "Fix link to addChild in CollectionView docs"}
,{msg: "Bump and build v2.0.0"}
,{msg: "add coverage and coveralls"}
,{msg: "Marionette.proxyBindEntityEvents fixes"}
,{msg: "Add SpecRunner and kill fixtures"}
,{msg: "Trim up the readme"}
,{msg: "Fix setting new events with @ui interpolation."}
,{msg: "fix excess trigger 'show' in view via region"}
,{msg: "Improve spec reporter"}
,{msg: "Fix npm scripts."}
,{msg: "Cleaned up specs."}
,{msg: "Remove last vestige of Marionette.$ to fix #1406"}
,{msg: "Bump and build v2.0.0-pre.2"}
,{msg: "Cleaned up collectionView.attachToDOM spec"}
,{msg: "Remove unused build file"}
,{msg: "Add regionManager getRegions method."}
,{msg: "Thisify region tests"}
,{msg: "Remove hard dependency on jQuery.Deferred quirks"}
,{msg: "Cleaned up application.appRegions spec"}
,{msg: "Abstract html insertion into a private helper."}
,{msg: "rename region.setHtml to attachHtml"}
,{msg: "add before:destroy event to controller"}
,{msg: "Fix mocha watch config"}
,{msg: "Destroy to empty for regions."}
,{msg: "Update mocha and use setup global beforeEach/afterEach"}
,{msg: "Add use strict"}
,{msg: "Replace self => suite"}
,{msg: "thisify tests"}
,{msg: "Normalize Whitespace & Move everything into beforeEach blocks"}
,{msg: "thisify sinon"}
,{msg: "thisify fixtures"}
,{msg: "Switch to Mocha & Speed up Grunt"}
,{msg: "Renames append methods to attach"}
,{msg: "Removes calls to prototype.constructor"}
,{msg: "Rename Region#open to Region#setHtml"}
,{msg: "Underscored region's ensureEl"}
,{msg: "Bump and build v2.0.0-pre.1"}
,{msg: "Fix UMD build"}
,{msg: "TriggerMethod audit and cleanup"}
,{msg: "region triggerMethods, adds onSwap"}
,{msg: "application class triggerMethods"}
,{msg: "Removed first argument of childEvents callback"}
,{msg: "Region#show return 'this'"}
,{msg: "innerHtmlvs empty()"}
,{msg: "Normalize region this.el"}
,{msg: "Update Collection onChildAdd onChildRemove methods"}
,{msg: "Make region.show idempotent"}
,{msg: "Minor language update for nested onShow test"}
,{msg: "test case for multiple ui hashes in events"}
,{msg: "Add a test case for onDomRefesh onRender combination"}
,{msg: "Relaxed JSHint for tests"}
,{msg: "Remove IRC notifications"}
,{msg: "Add LayoutView region options"}
,{msg: "Add missing layoutview table of content links"}
,{msg: "Fix remove xdefine test case in layoutView"}
,{msg: "Adds Marionette.VERSION"}
,{msg: "Replace static helper methods"}
,{msg: "Fix Grunt dev"}
,{msg: "Re-names renderModel to _renderRoot"}
,{msg: "Normalize \"Types\" to \"Classes\""}
,{msg: "Added emptyViewOptions to CollectionView"}
,{msg: "Setup view proxy methods for getOption and bindEntityEvents"}
,{msg: "Replace all instances of close with destroy"}
,{msg: "Add before:destroy events to Regions."}
,{msg: "docs for itemView => childView"}
,{msg: "Wrap Marionette in UMD, remove separate AMD version"}
,{msg: "Sort CollectionView/CompositeView according to comparator"}
,{msg: "Install from bower on build"}
,{msg: "Update layout build asset path"}
,{msg: "Update max statements for behaviors"}
,{msg: "Readme cleanups"}
,{msg: "add banner image to readme"}
,{msg: "abstract the regionManager lookup into a helper."}
,{msg: "compositeview onChildAdd binding"}
,{msg: "Adds before:child:remove to collectionView"}
,{msg: "No more return false from onBeforeClose"}
,{msg: "Removes aliased collectionView trigger methods"}
,{msg: "Removes aliased close events from ItemView"}
,{msg: "Attaches global channel to app"}
,{msg: "Allow for behaviors to have behaviors"}
,{msg: "Renames Layout to LayoutView"}
,{msg: "Add stricter jshint options"}
,{msg: "Rename close to destroy."}
,{msg: "Refactor ItemView references to ChildView"}
,{msg: "In triggerMethod call method before trigger"}
,{msg: "stopListening after close"}
,{msg: "Removes aliased itemView events"}
,{msg: "Changed signature of Module.prototype.initialize to match Module.prototype.constructor"}
,{msg: "remove marionette.$ proxy"}
,{msg: "Throw exception in region when doesn't find 'el'"}
,{msg: "Bump and build v1.8.8"}
,{msg: "Fix behavior onShow proxy"}
,{msg: "Update version typo in changelog"}
,{msg: "Bump and build v1.8.7"}
,{msg: "Merge pull request #1452 from marionettejs/sjs/fix-behavior-ui-bug"}
,{msg: "Fix behavior prototype event clobbering"}
,{msg: "Update marionette.renderer.md"}
,{msg: "Merge pull request #1364 from jmeas/unbindEntityEvents-docs"}
,{msg: "Adds docs for unbindEntityEvents"}
,{msg: "Bump and build v1.8.6"}
,{msg: "Add .npmignore file"}
,{msg: "Remove clean:tmp"}
,{msg: "Fix Behavior onShow and onClose proxying"}
,{msg: "Re-indent behaviors test"}
,{msg: "Typo fixes, simplified a few complicated phrases."}
,{msg: "add a test to throw an error if bower components not installed"}
,{msg: "return region instance on region.show"}
,{msg: "Update jQuery bower dependency to 2.1.x"}
,{msg: "Merge pull request #1352 from jmeas/update-helper-docs"}
,{msg: "Updates reference to normalizeMethods"}
,{msg: "Merge pull request #1331 from jmeas/updated-descriptions"}
,{msg: "Updated Controller description"}
,{msg: "Bump and build v1.8.5"}
,{msg: "Add unwrap to babysitter and wreqr to remove UMDs"}
,{msg: "Merge pull request #1293 from bzalasky/patch-3"}
,{msg: "Did a quick editing pass"}
,{msg: "Merge pull request #1282 from bzalasky/patch-2"}
,{msg: "Update CONTRIBUTING.md"}
,{msg: "Merge pull request #1281 from bzalasky/patch-1"}
,{msg: "Update CONTRIBUTING.md"}
,{msg: "Merge pull request #1278 from therealjessesanford/master"}
,{msg: "Should have been values not keys here"}
,{msg: "Bump and build v1.8.4"}
,{msg: "Merge pull request #1277 from thejameskyle/fix-behaviors-toc"}
,{msg: "Fix behaviors doc ToC"}
,{msg: "Merge pull request #1235 from joezimjs/patch-3"}
,{msg: "Fix Typo in Changelog"}
,{msg: "Merge pull request #1224 from ftdebugger/patch-1"}
,{msg: "Update marionette.behaviors.md"}
,{msg: "bump and build v1.8.3"}
,{msg: "Set view options before Behaviors are initialized"}
,{msg: "Flesh out docs for CollectionView#getItemView"}
,{msg: "Merge pull request #1204 from thejameskyle/remove-package-json-nonsense"}
,{msg: "Remove Volo, Jam, and maintainers from package.json"}
,{msg: "bump and build v1.8.2"}
,{msg: "Call stopListening on behaviors onClose"}
,{msg: "Unbind collection and model events for behaviors"}
,{msg: "Merge pull request #1188 from marionettejs/sjs/fix-test-watch"}
,{msg: "Fix the grunt dev watch to work more than once"}
,{msg: "bump and build for v1.8.1"}
,{msg: "Merge pull request #1163 from jmeas/fix-gruntfile-lint"}
,{msg: "Adds newline to end of appRouter"}
,{msg: "Adds lint alias task back to the Gruntfile."}
,{msg: "Merge pull request #1158 from thejameskyle/fix-function-doc-link"}
,{msg: "Fix Marionette functions doc actAsCollection Link"}
,{msg: "Merge pull request #1150 from jmeas/fix-changelog"}
,{msg: "Fixes changelog commit links for 1.7"}
,{msg: "bump and build v1.8.0"}
,{msg: "Adds docs for Marionette.normalizeUIKeys"}
,{msg: "Adds @ui functionality to itemViewContainer"}
,{msg: "Update marionette.controller.js"}
,{msg: "Update controller.spec.js"}
,{msg: "Strengthen existing specs by testing the CollectionView's itemEvent arguments"}
,{msg: "Adds onRoute method to AppRouter"}
,{msg: "Add getRegion to Layout"}
,{msg: "Updates Gruntfile"}
,{msg: "Consolidate default events, render and close, for child view triggers"}
,{msg: "Allow CollectionView to proxy close events, (#1101)"}
,{msg: "Separate child view triggers specs to allow for finer control and better testing."}
,{msg: "Fix behaviors so that they respond to Model and Collection events"}
,{msg: "tidy up region doc headings"}
,{msg: "extend region.show to use preventClose"}
,{msg: "Add evented support to behaviors"}
,{msg: "improve inline documentation for behaviors"}
,{msg: "use the built in marionette extend for behavior"}
,{msg: "update behavior inline documentation"}
,{msg: "Extract Underscore collection mixin"}
,{msg: "Add inline docs for module implementation"}
,{msg: "Add grunt lintspaces to lint whitespaces and new lines"}
,{msg: "Clean trailing whitespaces and fix new line at eof"}
,{msg: "Add tests to bindEntityEvents and unbindEntityEvents"}
,{msg: "Call `stopListening` when RegionManager remove region"}
,{msg: "behaviors allow for a functional hash lookup"}
,{msg: "update readme build status to use svg"}
,{msg: "Merge pull request #1136 from jmeas/layout-docs"}
,{msg: "Adds a warning about Region names to the docs"}
,{msg: "Merge pull request #1116 from moimikey/master"}
,{msg: "fix broken commands/reqres doc links + condense"}
,{msg: "Merge pull request #1094 from kycool/master"}
,{msg: "delete }"}
,{msg: "Merge pull request #1088 from jasonLaster/region-manager-refactor"}
,{msg: "Rename regionManager.spec.js tests refer to public interface"}
,{msg: "bump and build v1.7.4"}
,{msg: "Merge remote-tracking branch 'origin/pr/1082' into v1.7.4"}
,{msg: "Merge remote-tracking branch 'origin/pr/1079' into v1.7.4"}
,{msg: "Merge remote-tracking branch 'origin/pr/1071' into v1.7.4"}
,{msg: "Merge remote-tracking branch 'origin/pr/1066' into v1.7.4"}
,{msg: "Merge remote-tracking branch 'origin/pr/1044' into v1.7.4"}
,{msg: "Fix issue where first behavior does not receive click event"}
,{msg: "Refactor Module._addModuleDefinition"}
,{msg: "startWithParent should be a Module class prototype property"}
,{msg: "Updated dependencies in bower.json"}
,{msg: "Merge pull request #1077 from asheriff/patch-1"}
,{msg: "Fix arg order in #initialize Module Classes example"}
,{msg: "Revert \"Call stopListening on module stop\""}
,{msg: "Merge pull request #1070 from mariusbutuc/patch-1"}
,{msg: "Update marionette.controller.md"}
,{msg: "bump and build for 1.7.3"}
,{msg: "Merge remote-tracking branch 'origin/pr/1058' into v1.7.3"}
,{msg: "Add ui interpolation for view events"}
,{msg: "fix broken $el proxy behavior"}
,{msg: "Merge pull request #1057 from rhubarbselleven/patch-1"}
,{msg: "Typo Fixup"}
,{msg: "bump and build v1.7.2"}
,{msg: "Ensure that behavior events are bound to the behavior."}
,{msg: "Merge pull request #1048 from rhubarbselleven/patch-1"}
,{msg: "Update changelog.md"}
,{msg: "bump and build 1.7.1"}
,{msg: "Add spec for re-opening a module with an options literal"}
,{msg: "allow for string based behavior events fixes #1041"}
,{msg: "bump and build v1.7.0"}
,{msg: "Refactor Module tests"}
,{msg: "Combines Application docs to single page."}
,{msg: "use ^ rather than ~"}
,{msg: "Add before:show events"}
,{msg: "add behaviors"}
,{msg: "Call stopListening on module stop"}
,{msg: "Merge pull request #978 from wbinnssmith/fix/remove-jquery-dep"}
,{msg: "Merge pull request #1027 from fenduru/fix-travis"}
,{msg: "Merge pull request #1016 from jasonLaster/region-stuff"}
,{msg: "Cleanup Region tests"}
,{msg: "Fix whitespace"}
,{msg: "Merge pull request #993 from marionettejs/gitignore-reports"}
,{msg: "Merge pull request #995 from marionettejs/update-module-docs"}
,{msg: "Fixes error in module documentation"}
,{msg: "Reports added to gitignore"}
,{msg: "Merge pull request #991 from cobbweb/feature/contribute-to-dev-branch"}
,{msg: "Revert \"- Remove reference to dev branch from contrib doc\""}
,{msg: "Merge pull request #963 from zourtney/onclose_args"}
,{msg: "Merge pull request #987 from ath0mas/patch-1"}
,{msg: "Correct view triggers hash example comment"}
,{msg: "Remove unnecessary jquery dependency"}
,{msg: "Bump and build 1.6.4"}
,{msg: "Merge pull request #976 from marionettejs/fix-double-module-init"}
,{msg: "Resolves an issue where a module's initialize would be called twice"}
,{msg: "Trigger 'before:close' and 'close' with arguments supplied to close()"}
,{msg: "Merge pull request #973 from jasonLaster/keepRunner"}
,{msg: "Add keepRunner to gruntfile"}
,{msg: "bump and build v1.6.3"}
,{msg: "Updates tests, Gruntfile"}
,{msg: "Updates dependencies"}
,{msg: "Allow event binding with functional ui attribute."}
,{msg: "add more robust normalizeUIKeys"}
,{msg: "Cleans up slice and normalizes error throwing"}
,{msg: "Refactor typeof checks to use underscore type fncs"}
,{msg: "Pass module classes directly to app.module"}
,{msg: "Merge pull request #936 from marionettejs/sjs/collection-view-readme"}
,{msg: "expand collectionView docs"}
,{msg: "Merge pull request #961 from marionettejs/sjs/fix-travis-certs"}
,{msg: "fix travis cert error http://blog.npmjs.org/post/78085451721/npms-self-signed-certificate-is-no-more"}
,{msg: "Merge pull request #951 from marionettejs/sjs/another-dead-file"}
,{msg: "Revert \"added batch file to update dependencies\""}
,{msg: "Merge pull request #950 from marionettejs/sjs/remove-dead-file"}
,{msg: "Revert \"added small script to make it easier to add new remotes\""}
,{msg: "Merge pull request #932 from marionettejs/sjs/add-on-show-docs"}
,{msg: "add documentation for onShow"}
,{msg: "Merge pull request #935 from dminkovsky/patch-1"}
,{msg: "Fixed typos in comment"}
,{msg: "Merge pull request #929 from jmeas/remove-unnecessray-args"}
,{msg: "Removes unnecessary fourth parameters to Events methods"}
,{msg: "Merge pull request #925 from jmeas/Fix-typo"}
,{msg: "Corrects typo"}
,{msg: "Merge pull request #902 from dmytroyarmak/add-docs-for-processAppRoutes"}
,{msg: "Add docs for Marionette.AppRouter#processAppRoutes"}
,{msg: "Merge pull request #909 from Anubh/patch-1"}
,{msg: "Update marionette.layout.md"}
,{msg: "bump and build [v1.6.2]"}
,{msg: "Update initialize to include moduleName and app"}
,{msg: "Update module documentation."}
,{msg: "Adds support for string-based itemEvents"}
,{msg: "Merge pull request #904 from marionettejs/sjs/update-upgrade-guide"}
,{msg: "update upgradeGuide to document appendHTML behavioral changes"}
,{msg: "Merge pull request #901 from rhubarbselleven/issue900"}
,{msg: "Updated bugs option to squash npm warning."}
,{msg: "Merge pull request #894 from gdi2290/grunt-tasks"}
,{msg: "Add load-grunt-tasks to Gruntfile"}
,{msg: "Merge pull request #893 from gdi2290/patch-1"}
,{msg: "Move testing frameworks to devDependencies"}
,{msg: "update copyright year range"}
,{msg: "Remove comment about _initialEvents being overridable."}
,{msg: "fix version number in changelog"}
,{msg: "bump and build v1.6.1"}
,{msg: "Merge pull request #891 from jmeas/module-autostart-fix"}
,{msg: "Auto-starts obj. lit. module definitions"}
,{msg: "Merge pull request #889 from jmeas/fix-read-me"}
,{msg: "Corrected docs regarding custom modules"}
,{msg: "bump and build v1.6.0"}
,{msg: "Merge pull request #883 from marcelklehr/fix/component.json"}
,{msg: "Component.json: Always pull the latest versions of deps"}
,{msg: "Merge pull request #882 from marcelklehr/add-component.json"}
,{msg: "Add component.json"}
,{msg: "Remove unnecessary blank lines"}
,{msg: "Merge pull request #845 from jmeas/master"}
,{msg: "Allow modules to be extended"}
,{msg: "Merge pull request #832 from parklet/new-override-check-empty"}
,{msg: "Clean up tests Remove extra jQuery calls and fix spelling error"}
,{msg: "Make CollectionView#checkEmpty overridable Add isEmpty for overriding empty view rendering Add isEmpty reference to docs"}
,{msg: "Merge pull request #856 from cobbweb/feature/add-sinonjs-to-test-suite"}
,{msg: "Merge pull request #870 from stsc3000/patch-1"}
,{msg: "Fix my own Typo in View Documentation"}
,{msg: "Fix Typo benifit -> benefits"}
,{msg: "Leverage spies and stubs in tests"}
,{msg: "Test code clean up"}
,{msg: "Add sinon.js to testing suite for better spying, mocking and stubbing"}
,{msg: "Update bower.json according to the spec"}
,{msg: "Add AMD build to bower.json main configuration"}
,{msg: "Merge pull request #867 from parklet/composite-collection-before-render"}
,{msg: "* Add composite:collection:before:render event"}
,{msg: "Merge pull request #868 from dmytroyarmak/patch-1"}
,{msg: "Fix markdown problem in changelog.md"}
,{msg: "v1.5.1 bump and build"}
,{msg: "Merge pull request #866 from parklet/collectionview-show-events"}
,{msg: "fixes collectionView buffer bug * Fixes #865 * Trigger itemView.onShow in appendBuffer * Fix bug in collectionView.spec"}
,{msg: "Merge pull request #864 from andrewhubbs/patch-1"}
,{msg: "Include ignore for IntelliJ based IDEs"}
,{msg: "Merge pull request #803 from dakota/patch-1"}
,{msg: "Allow options to be passed to the regionType when building a custom region"}
,{msg: "v1.5.0 bump and build"}
,{msg: "Merge pull request #861 from marionettejs/sjs/itemEvents"}
,{msg: "add itemEvents to collectionViews"}
,{msg: "Merge pull request #862 from rhubarbselleven/issue860"}
,{msg: "BabySitter and Wreqr as dependencies. Fixes #860"}
,{msg: "Merge pull request #851 from ericmatthys/master"}
,{msg: "Return the newly added view from addItemView in CollectionView."}
,{msg: "Merge pull request #855 from cobbweb/ondomrefresh-bug"}
,{msg: "Merge pull request #857 from cobbweb/add-more-notes-to-contributing-doc"}
,{msg: "Add notes about coding conventions, EditorConfig and using CoffeeScript in examples"}
,{msg: "EditorConfig settings should only target JavaScript files"}
,{msg: "Trim trailing whitespace"}
,{msg: "onDomRefresh should only trigger if the view.el is actually in the DOM"}
,{msg: "Merge pull request #849 from marionettejs/sjs/843-collection-reset-bug"}
,{msg: "Fix collectionView reset buffer itemView show condition"}
,{msg: "Merge pull request #850 from cobbweb/editorconfig"}
,{msg: "Add EditorConfig file"}
,{msg: "Remove TextMate-specific config"}
,{msg: "Merge pull request #819 from seansfkelley/options-as-fn"}
,{msg: "Update bower_components folder ignore"}
,{msg: "Merge pull request #841 from TheCloudlessSky/itemViewContainer-context"}
,{msg: "Merge pull request #834 from cobbweb/trigger-region-close-event-with-view"}
,{msg: "Call the `itemViewContainer` with the current context."}
,{msg: "fix upgrade guide for latest version"}
,{msg: "Accept function as default `options` for Views"}
,{msg: "Merge pull request #836 from andrewhubbs/patch-1"}
,{msg: "- Remove reference to dev branch from contrib doc"}
,{msg: "Merge pull request #820 from seansfkelley/add-test-package-json"}
,{msg: "Trigger Region close event with view that's being closed"}
,{msg: "Merge pull request #822 from echernyavskiy/patch-1"}
,{msg: "Slightly update Marionette.triggerMethod documentation"}
,{msg: "Pointing 'npm test' to 'grunt test' so Travis will do things."}
,{msg: "bump and build v1.4.1"}
,{msg: "Merge pull request #811 from marionettejs/sjs/fix-default-options"}
,{msg: "retain default options set on a view's constructor"}
,{msg: "v1.4.0 bump and build"}
,{msg: "Merge branch 'sjs/ui-events-and-triggers-coverage'"}
,{msg: "update docs to reflect the new @ui. syntax"}
,{msg: "Merge pull request #800 from JackEllis/patch-2"}
,{msg: "Added links to Marionette.Application and Marionette.Layout for consistency / convinience"}
,{msg: "add support for the ui hash within events and triggers"}
,{msg: "Merge pull request #799 from marionettejs/sjs/796-inital-collection-view-render-bug"}
,{msg: "add test coverage for CollectionView itemView Rendering"}
,{msg: "Merge pull request #794 from d-nation/layout-removeregion-test"}
,{msg: "bump and build v1.3.0"}
,{msg: "Added a test to verify that layout.removeRegion removes the region from layout.regions"}
,{msg: "Merge pull request #793 from marionettejs/pr/746"}
,{msg: "Update documentation to reflect render buffer changes"}
,{msg: "Buffer rendering of CollectionViews and CompositeViews using a document fragment for increased performance"}
,{msg: "Merge pull request #785 from joezimjs/patch-2"}
,{msg: "Fix RegionManager Docs Typos"}
,{msg: "Merge pull request #783 from paultyng/pt/white-space"}
,{msg: "Clean up whitespace"}
,{msg: "v1.2.3 bump and build"}
,{msg: "Merge pull request #763 from lukaszfiszer/fix-composite-view-listeners"}
,{msg: "Merge pull request #778 from ricardmo/patch-2"}
,{msg: "Fix minor typo"}
,{msg: "Merge pull request #774 from ricardmo/patch-1"}
,{msg: "Remove superfluous parenthesis"}
,{msg: "v1.2.2 bump and build"}
,{msg: "Merge pull request #767 from marionettejs/sjs/move-options-assignment"}
,{msg: "[fix] Move the instatiation of view options above the constructor"}
,{msg: "Merge pull request #765 from jcurtis/patch-1"}
,{msg: "Fix typos in changelog"}
,{msg: "Fix CompositeView adding child views before render"}
,{msg: "v1.2.1 bump and build"}
,{msg: "[fix] failing spec for trigger propigation"}
,{msg: "Merge pull request #762 from marionettejs/sjs/fix-default-view-options"}
,{msg: "Merge pull request #759 from marionettejs/sjs/fix-prevent-default-context-bug"}
,{msg: "[fix] default view options should be ,{} and not undefined"}
,{msg: "[fix] ensure that the prevent default and stop prop occurs in the correct context"}
,{msg: "Merge pull request #743 from lukesargeant/patch-1"}
,{msg: "Added info: define item view before using itemView"}
,{msg: "Merge pull request #753 from zimme/patch-1"}
,{msg: "Version bump to 1.2.0"}
,{msg: "Merge pull request #750 from LtCmdDudefellah/ar/update_bower"}
,{msg: "Remove white space"}
,{msg: "Update bower's backbone dependency"}
,{msg: "Merge pull request #744 from marionettejs/v1.2.0"}
,{msg: "build v1.2.0"}
,{msg: "add documentation for getEmptyView"}
,{msg: "added support for getEmptyView"}
,{msg: "Added documentation for manually triggers configuration"}
,{msg: "Manually triggers configuration (verbose)"}
,{msg: "Fixed failing spec due to backbone upgrade"}
,{msg: "Re-added this.options to the View base class"}
,{msg: "Updated backbone script to v1.1.0"}
,{msg: "Merge pull request #709 from JackEllis/patch-1"}
,{msg: "Merge pull request #722 from samccone/sjs/fix-region-links"}
,{msg: "Merge pull request #717 from dentafrice/patch-1"}
,{msg: "fix region documentation links"}
,{msg: "Update CONTRIBUTING.md"}
,{msg: "Small issue, text as 'baz' instead of bar despite .bar being called"}
,{msg: "Merge pull request #706 from tkoomzaaskz/patch-1"}
,{msg: "Merge pull request #705 from jdreesen/patch-1"}
,{msg: "typo fixed: `startWithParent` was not camel-cased"}
,{msg: "Update changelog.md"}
,{msg: "Merge pull request #684 from nimamehanian/master"}
,{msg: "build v1.1.0"}
,{msg: "fixed bug that prevented default regionType from being used. fixes #674"}
,{msg: "build v1.1.0"}
,{msg: "updated view type docs to show which view they extend from and mention interactions with regions"}
,{msg: "updated readme for jquery and underscore versions. closes #672"}
,{msg: "v1.1 preliminary build"}
,{msg: "prevent layout from extending prototype's .regions. fixes #685"}
,{msg: "allow templateHelpers to be passed as constructor function options. fixes #696"}
,{msg: "changelog for ui bindings fix"}
,{msg: "Merge remote-tracking branch 'ccamarat/master' into dev"}
,{msg: "v1.1 preliminary build"}
,{msg: "fixing the API and cleaning up some perf things in the approuter changes"}
,{msg: "merge underscore update in bower.json"}
,{msg: "v1.1 preliminary build"}
,{msg: "changelog and docs for itemViewContainer in constructor options of compositeview"}
,{msg: "Merge remote-tracking branch 'leoasis/item_view_container_in_composite_view_creation' into dev"}
,{msg: "Merge remote-tracking branch 'asselin/docfixes' into dev"}
,{msg: "merge conflict"}
,{msg: "Merge remote-tracking branch 'nimamehanian/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'DjebbZ/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'dtillz/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'creynders/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'z0mt3c/patch-1' into dev"}
,{msg: "changelog for layout"}
,{msg: "Merge remote-tracking branch 'recurse/patch-2' into dev"}
,{msg: "v1.1 preliminary build"}
,{msg: "docs for triggerMethod change"}
,{msg: "tweak to ensure trigger is a function"}
,{msg: "Merge remote-tracking branch 'codeimpossible/verify-trigger-exists' into dev"}
,{msg: "Merge remote-tracking branch 'louissalin/master' into dev"}
,{msg: "ability to specify appRoutes in AppRouter constructor function"}
,{msg: "specs and code update for overriding appRoutes in AppRouter constructor"}
,{msg: "Merge remote-tracking branch 'nvivo/approuter' into dev"}
,{msg: "docs for Application.addRegion"}
,{msg: "spec for Application.getRegion"}
,{msg: "Merge remote-tracking branch 'nvivo/appregion' into dev"}
,{msg: "version bump to v1.1.0"}
,{msg: "docs and changelog for AppRouter.appRoute method"}
,{msg: "Merge remote-tracking branch 'kevindew/master' into dev"}
,{msg: "fixed a broken Layout spec... the spec itself was written poorly"}
,{msg: "Merge remote-tracking branch 'jstrimpel/regions' into dev"}
,{msg: "added application.closeRegions. fixes #349"}
,{msg: "Support defining itemViewContainer in CompositeView instance creation"}
,{msg: "Documentation fixes to View, typo fix in TemplateCache"}
,{msg: "Fix docs: Rendering collection in ItemView"}
,{msg: "upgrade underscore"}
,{msg: "Bugfix for issue #655"}
,{msg: "Update readme.md"}
,{msg: "Update marionette.controller.md"}
,{msg: "Small typo in application doc."}
,{msg: "Update marionette.itemview.md"}
,{msg: "Removed dangling comma"}
,{msg: "Moves backbone.babysitter and backbone.wreqr to devDependencies"}
,{msg: "Fixing anchor"}
,{msg: "renaming component.json to bower.json to try and fix the bower install"}
,{msg: "build v1.0.4"}
,{msg: "removed unneeded build files"}
,{msg: "updated dependencies to latest versions"}
,{msg: "added batch file to update dependencies"}
,{msg: "fixing changelog formatting"}
,{msg: "Merge remote-tracking branch 'zyzniewski/master' into dev"}
,{msg: "Merge remote-tracking branch 'vrinek/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'p3drosola/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'recurse/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'ErichBSchulz/patch-3' into dev"}
,{msg: "added small script to make it easier to add new remotes"}
,{msg: "Merge remote-tracking branch 'coombsj/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'torifat/fix-package-definition' into dev"}
,{msg: "Merge remote-tracking branch 'cmcculloh/patch-2' into dev"}
,{msg: "Merge remote-tracking branch 'kahwee/patch-2' into dev"}
,{msg: "merge master"}
,{msg: "build v1.0.4"}
,{msg: "updated component + package to 1.0.4"}
,{msg: "updated changelog for 1.0.4"}
,{msg: "added specs and implementation to allow fo constructor overriding"}
,{msg: "fixed url for volo"}
,{msg: "updated component.json and added bower support"}
,{msg: "fixed anchor links for events in CollectionView documentation"}
,{msg: "Improve comment on bind-context example."}
,{msg: "Add spec to verify prematurely closed layout is properly rendered."}
,{msg: "Fix another typo on marionette.templatecache.md"}
,{msg: "Fix typo on marionette.templatecache.md"}
,{msg: "Region config 'type' should be 'regionType'"}
,{msg: "Merge pull request #618 from hallmark/patch-4"}
,{msg: "Merge pull request #632 from ErichBSchulz/patch-2"}
,{msg: "Merge pull request #634 from depoulo/patch-1"}
,{msg: "Merge pull request #641 from radar/patch-1"}
,{msg: "Update marionette.layout.js"}
,{msg: "Fix each example that erroneously used <%=, rather than <%"}
,{msg: "place existing comments with the right function"}
,{msg: "Update marionette.view.md"}
,{msg: "Marionette.triggerMethod checks for trigger before calling"}
,{msg: "Update upgradeGuide.md"}
,{msg: "Update marionette.region.md"}
,{msg: "Update marionette.layout.md"}
,{msg: "Allow AppRouter to be instantiated through the constructor instead of .extend(). Currently, options.appRoutes is not used if \"new AppRouter(,{...})\" is used."}
,{msg: "Update marionette.application.js"}
,{msg: "Added alternative app.getRegion(regionName) method for better api and support for tooling."}
,{msg: "Added appRoute method for adding singular routes easier"}
,{msg: "Fix typos in changelog"}
,{msg: "Correcting property to be passed for updated Backbone fetch() method."}
,{msg: "build v1.0.3"}
,{msg: "remove compositeview constructor function. fixes #587"}
,{msg: "fixed amd build to have banner / version info"}
,{msg: "build v1.0.3"}
,{msg: "version bump to v1.0.3"}
,{msg: "changelog for #602"}
,{msg: "Merge remote-tracking branch 'kwbock/add-index-to-composite-view' into dev"}
,{msg: "changelog for #586"}
,{msg: "merged #586"}
,{msg: "changelog of region 'show' event"}
,{msg: "Merge remote-tracking branch 'OliverJAsh/patch-4' into dev"}
,{msg: "changelog for bind entity events bug fix"}
,{msg: "Merge remote-tracking branch 'dciccale/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #615 from davidsulc/doc_fixes"}
,{msg: "improve consistency between callback and event documentation"}
,{msg: "reorder documentation for consistency"}
,{msg: "Fix documentation for changes implemented in v1.0.0-rc2"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #610 from garrison/master"}
,{msg: "Merge pull request #606 from kzhaokol/patch-1"}
,{msg: "Merge pull request #594 from lshearer/patch-1"}
,{msg: "Merge pull request #592 from rutkovsky/patch-1"}
,{msg: "Merge pull request #591 from clatour/patch-1"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #589 from Jon-Biz/master"}
,{msg: "Merge remote-tracking branch 'existentialism/upgrade-uglify' into dev"}
,{msg: "spec for adjusting region manager length on remove"}
,{msg: "Merge remote-tracking branch 'SalesSeek/master' into dev"}
,{msg: "updated renderer docs for throwing error in render method"}
,{msg: "changelog for throwing error from Renderer.render, if no template supplied"}
,{msg: "moved error throwing for not found template in to Renderer.render method"}
,{msg: "Merge remote-tracking branch 'julik/throw-meaningful-exceptions-on-missing-templates' into dev"}
,{msg: "deleted un-needed constructor from ItemView"}
,{msg: "Merge remote-tracking branch 'kevm/grunt-jasmine' into dev"}
,{msg: "changelog for PR #562"}
,{msg: "Merge remote-tracking branch 'kevm/issue560' into dev"}
,{msg: "use the correct \"its\" throughout the docs"}
,{msg: "use the correct its"}
,{msg: "Fixed typo from 'onItemBeforeRemder' to 'onItemBeforeRender'"}
,{msg: "Merge pull request #559 from zerkalica/master"}
,{msg: "addition of core directory has broken volo add command url path. This fixes the path."}
,{msg: "adjusting bitdeli image link"}
,{msg: "added bitdeli analytics"}
,{msg: "adding the index property that is available in compositeviews appendHtml definition. this being here could clarify the fact that there is a third parameter available msg: \"without having to dig into the implementation of a collection view. this change is to match the documentation as someone could be confused due to the discrepency between msg: \"the docs and the source."}
,{msg: "use correct variable to get the actual view method"}
,{msg: "Ignore some files and directories for Bower installs"}
,{msg: "Fixed 'item:rendered' and 'item:closed' event names."}
,{msg: "Fixed type in ItemView doc"}
,{msg: "updated collectionview docs to reference correct event callbacks"}
,{msg: "Update marionette.configuration.md"}
,{msg: "Set currentView on regions before \"show\" methods are triggered"}
,{msg: "Trigger \"show\" method on region before layout"}
,{msg: "Merge remote-tracking branch 'nmpolo/master' into dev"}
,{msg: "Merge remote-tracking branch 'cpjolicoeur/patch-1' into dev"}
,{msg: "Fixed typo"}
,{msg: "Remove documentation for renderCollection"}
,{msg: "Updated docs to reflect Backbone collection fetch event behavior change (#550)"}
,{msg: "Bumped grunt-contrib-uglify to v0.2 (Fixes #569)"}
,{msg: "Update region manager length when regions are removed."}
,{msg: "Throw on undefined view templates"}
,{msg: "Merge the grunt-jasmine patch by KevM"}
,{msg: "Throw with a classname when the template is falsey"}
,{msg: "Add TextMate settings for the right indentation"}
,{msg: "Fixed test running issue related to grunt jasmine dependency"}
,{msg: "Fix for issue #560"}
,{msg: "packages names changed to lower case, added jamjs maintainers section"}
,{msg: "fixed a typo"}
,{msg: "Merge pull request #553 from molily/patch-1"}
,{msg: "Merge pull request #547 from AlexDeLaCreme/patch-2"}
,{msg: "Merge pull request #546 from AlexDeLaCreme/patch-1"}
,{msg: "Update readme.md"}
,{msg: "Update marionette.configuration.md"}
,{msg: "Update marionette.configuration.md"}
,{msg: "delete region definition from layout regions hash when removing region; take 2"}
,{msg: "delete region definition from layout regions hash when removing region"}
,{msg: "re-build v1.0.2 with correct babysitter version"}
,{msg: "corrected babysitter version"}
,{msg: "build v1.0.2"}
,{msg: "changelog and version bump to v1.0.2"}
,{msg: "unbind UI elements after the 'close' method/event"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #538 from dennis-g/patch-1"}
,{msg: "added one more spec for good measure, in app router routes"}
,{msg: "Add specs for routes order"}
,{msg: "Fix reversed order of routes"}
,{msg: "Fixed link to onBeforeRender"}
,{msg: "Merge pull request #534 from bmatzner/master"}
,{msg: "Fix dependency and package version"}
,{msg: "build v1.0.1"}
,{msg: "change log for v1.0.1"}
,{msg: "removed jQuery from AMD requirments"}
,{msg: "build v1.0.1"}
,{msg: "bump version to 1.0.1, and remove jQuery dependency from package.config"}
,{msg: "regionManager.addRegions correctly supports passing in a region type, as it used to. fixes #532"}
,{msg: "corrected wreqr based docs"}
,{msg: "adjusting basic use example for regionmanager"}
,{msg: "renaming doc"}
,{msg: "fixing package.json dependencies"}
,{msg: "build v1.0.0"}
,{msg: "de-linting"}
,{msg: "merging in general cleanup from fantactuka, and making a few additional adjustments"}
,{msg: "additional refactoring of triggerMethod for performance"}
,{msg: "Merge remote-tracking branch 'fantactuka/trigger-method-refactoring' into dev"}
,{msg: "fixing package.json"}
,{msg: "Merge remote-tracking branch 'fantactuka/app-router-refactoring' into dev"}
,{msg: "Merge remote-tracking branch 'existentialism/dev-typos' into dev"}
,{msg: "Merge remote-tracking branch 'OliverJAsh/patch-3' into dev"}
,{msg: "Merge remote-tracking branch 'OliverJAsh/patch-2' into dev"}
,{msg: "Add throwError handler for convenient custom error throwing and code reduce"}
,{msg: "Replace Array.prototype.slice.apply with slice()"}
,{msg: "Replace 'var that = this' with passing context where possible (performance), remove redundant/unused variables"}
,{msg: "updated to Backbone v1.0 and Underscore v1.4.4"}
,{msg: "Refactor Marionette#triggerMethod"}
,{msg: "Fixed some minor typos"}
,{msg: "Refactor AppRouter code"}
,{msg: "build"}
,{msg: "re-bind ui elements after closing and re-rendering"}
,{msg: "adjusting collectionview docs for onbefore/after item added"}
,{msg: "adjusting docs list again"}
,{msg: "build"}
,{msg: "fixed the 'npm start' so it runs the jasmine web server"}
,{msg: "updated the docs listing in the readme, and added a configuration doc for marionette.$"}
,{msg: "fixed the spec watcher so it picks up all src files, including src/build"}
,{msg: "now using Marionette.$ instead of $ directly"}
,{msg: "Add NPM references for backbone.babysitter and backbone.wreqr"}
,{msg: "Add dependencies to NPM package"}
,{msg: "Correct \"main\" property to NPM package"}
,{msg: "Merge remote-tracking branch 'OliverJAsh/patch-1' into dev"}
,{msg: "Add \"main\" property to package.json"}
,{msg: "Merge remote-tracking branch 'MoOx/patch-1' into dev"}
,{msg: "release notes for region re-rendering view"}
,{msg: "build"}
,{msg: "Merge remote-tracking branch 'rixth/fix_reshowing_current_view' into dev"}
,{msg: "Don't close views we are going to show"}
,{msg: "Fix a typo in a comment."}
,{msg: "build"}
,{msg: "closing an itemView that does not have a 'close' method will call the 'remove' method"}
,{msg: "updating to wreqr v0.2.0"}
,{msg: "documented itemview's ability to render a collection"}
,{msg: "Merge remote-tracking branch 'zerkalica/master' into dev"}
,{msg: "Merge remote-tracking branch 'cobbweb/use-specific-dep-versions' into dev"}
,{msg: "Merge remote-tracking branch 'sheerun/patch-1' into dev"}
,{msg: "fixed build to include regionmanager"}
,{msg: "fixed banner and version numbering in grunt build. build v1.0.0"}
,{msg: "Add one letter"}
,{msg: "fixed watcher steps for grunt server to not jshint, and to watch spec files"}
,{msg: "adding grunt server task to run jasmine web server"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #506 from cobbweb/patch-1"}
,{msg: "Update docs with actual Region.prototype.open implementation"}
,{msg: "updating the contributing guidelines"}
,{msg: "build"}
,{msg: "changelog for compositeview bug"}
,{msg: "work around for resetting a collection on a compositeview, before the view has been rendered"}
,{msg: "failing spec for #500 and #501"}
,{msg: "build"}
,{msg: "updating the readme to include regionManager"}
,{msg: "build"}
,{msg: "updating Layout docs for adding / removing regions"}
,{msg: "core documentation for the regionManager"}
,{msg: "renaming 'remove' to 'removeRegions' on RegionManager"}
,{msg: "removed 'manager' from the region docs"}
,{msg: "method comments in layout"}
,{msg: "removed dup spec"}
,{msg: "spec to show region is closed after adding it to layout, and then closing layout"}
,{msg: "spec to show re-rendering after removing region, does not re-add region"}
,{msg: "making layout.regionManager a public attribute to get access to regions"}
,{msg: "first specs to remove a region from a layout"}
,{msg: "layout re-rendering after closed will re-add the regions"}
,{msg: "fixed the iterators and other _ collection methods on RegionManager, as well as a few other RegionManager and Layout issues"}
,{msg: "adjusting region manager to distinguish between closing and removing regions"}
,{msg: "specs and failing specs for re-rendering a layout with dynamic regions"}
,{msg: "first failing specs for re-rendering a layout with dynamic regions added to it"}
,{msg: "started on regionmanager updates for the changelog"}
,{msg: "addRegion and basic addRegions implementation for Layout"}
,{msg: "renaming spec file, and migrating Application to use RegionManager"}
,{msg: "moved the idea of 'defaults' for region definitions in to the regionManager.addRegions method"}
,{msg: "fixing the last of the layout specs for the migration to RegionManager"}
,{msg: "re-initializing region manager on re-rendering layout"}
,{msg: "down to 4 failing tests w/ the migration of Layout to the new RegionManager"}
,{msg: "fixing a most of Layout to work with the new RegionManager"}
,{msg: "working on delaying the Layout region selection by evaluating the parentEl as a function. still have a lot of failing tests"}
,{msg: "add multiple regions using an object literal of name/definition pairs"}
,{msg: "closing the region manager entirely"}
,{msg: "pass the name and region instance through regionManager events"}
,{msg: "removing a region from a region manager"}
,{msg: "can define a region with a 'parentEl' in the object literal definition, to use as the parent jQuery object"}
,{msg: "first passing specs for adding a region to a region manager"}
,{msg: "build"}
,{msg: "release notes and docs for layout specifying regions as a function"}
,{msg: "merging in the ability to specify layout regions as a function"}
,{msg: "setting up failing specs for layout regions defined as a function"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #494 from thoughtshop/patch-1"}
,{msg: "update region docs with correct close event"}
,{msg: "trying to get travis to work again"}
,{msg: "updating dependency list to remove 'rc' versions"}
,{msg: "build"}
,{msg: "updating docs"}
,{msg: "manually pulled changes from @paulyoung's tests cause i broke the merge"}
,{msg: "merging itemViewOptions index"}
,{msg: "separating specs for collectionview itemViewOptions and adding failing spec for index"}
,{msg: "build"}
,{msg: "removed Marionette.createObject helper method"}
,{msg: "upgrade guide and release notes for grunt update"}
,{msg: "merging in upgrade to grunt v0.4, with code coverage and other analysis reports"}
,{msg: "Merge pull request #491 from rajivr/dev"}
,{msg: "build"}
,{msg: "updating changelog"}
,{msg: "Merge remote-tracking branch 'cobbweb/remove-that-eq-this' into dev"}
,{msg: "build"}
,{msg: "removed compositeview's renderCollection method, as it was no longer used. close #490"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Remove var that = this in favor of binding"}
,{msg: "Typo - change ,{ to ( in addRegions comment"}
,{msg: "added dev task, watch, and separated coverage and basic marionette test"}
,{msg: "Merge pull request #476 from donnut/master"}
,{msg: "Merge pull request #471 from hippipp/master"}
,{msg: "Merge pull request #468 from gaxunil/master"}
,{msg: "Updated docs to reflect the new `index` argument"}
,{msg: "#480: Updated failing spec to allow for index being passed to ItemViewOptions."}
,{msg: "Fixes #480: Passing index to ItemViewOptions when it is a function."}
,{msg: "#480: Added failing spec for passing index to ItemView options when it is a function."}
,{msg: "Update docs/marionette.application.md"}
,{msg: "updated for grunt 0.4.0rc7, added plato reports, coverage reports, sourcemaps"}
,{msg: "Correcting typo (\"stopLitening\" --> \"stopListening\")"}
,{msg: "Ignore components directory"}
,{msg: "Specify specific dependencies versions"}
,{msg: "Update docs/marionette.compositeview.md"}
,{msg: "Update src/marionette.layout.js"}
,{msg: "changed regions handling in initialize function"}
,{msg: "Merge branch 'dev' of https://github.com/marionettejs/backbone.marionette into dev"}
,{msg: "updates for grunt 0.4.0"}
,{msg: "Update src/marionette.layout.js"}
,{msg: "cleaning up the readme a bit, bumping versions to v1.0.0, and build"}
,{msg: "Satisfy npm requirements by lowercasing 'name' in package.json"}
,{msg: "build"}
,{msg: "region calls 'remove' if 'close' is not found, when closing a view"}
,{msg: "build v1.0.0-rc6"}
,{msg: "Updating versions"}
,{msg: "Merge branch 'compView-beforeRender' into dev"}
,{msg: "corrected the timing of onBeforeRender/'before:render' in CompositeView. close #453"}
,{msg: "properly failing test for #453"}
,{msg: "moved location of annotated source code"}
,{msg: "working on spec for beforeRender in composite views... can't get it to fail for the right reasons, yet"}
,{msg: "most of a spec to show the before render method running after serialize data"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #451 from nginz/patch-2"}
,{msg: "Update docs/marionette.application.md"}
,{msg: "build v1.0.0-rc5"}
,{msg: "Merge remote-tracking branch 'raxer23/component-jquery' into dev"}
,{msg: "fixing a bug in 'onShow' for itemView instances when the collectionview is in the DOM already. closes #448"}
,{msg: "Merge pull request #449 from oatkiller/patch-1"}
,{msg: "Update docs/marionette.application.module.md"}
,{msg: "Merge pull request #446 from drewda/master"}
,{msg: "update the docs to reflect that Marionette.EventAggregator no longer wraps Backbone.Wreqr.EventAggregator (commit b51e1e3aa92dbc43a7423b3e29562d9a6f2f336a)"}
,{msg: "Merge pull request #445 from existentialism/patch-1"}
,{msg: "Update changelog.md"}
,{msg: "build v1.0.0-rc4"}
,{msg: "cleanup for grunt file"}
,{msg: "updated wreqr to v0.1.1"}
,{msg: "added specs for the scenario described in ticket #432"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #443 from paulwittmann/patch-2"}
,{msg: "build v1.0.0-rc4"}
,{msg: "logging info from failing spec to show the order in which views are responding to model events"}
,{msg: "Update readme.md"}
,{msg: "removing Marionette.EventAggregator"}
,{msg: "Merge branch 'entityEventsZombie' into dev"}
,{msg: "updated docs for getOption"}
,{msg: "removed Marionette.addEventBinder method"}
,{msg: "beforeEach for the spec"}
,{msg: "Merge remote-tracking branch 'g00fy/modelEventsZombie' into dev"}
,{msg: "adds Wreqr and BabySitter jamjs packages"}
,{msg: "build v1.0.0-rc4"}
,{msg: "bump version to rc4"}
,{msg: "updating changelog"}
,{msg: "fix falsey values with Marionette.getOption. fix #434"}
,{msg: "corrected comments about template loading, to remove 'async' language"}
,{msg: "started changelog"}
,{msg: "Merge remote-tracking branch 'CyCoreSystems/triggers-triggerMethod' into dev"}
,{msg: "Merge remote-tracking branch 'oatkiller/module_finalizer_context' into dev"}
,{msg: "merge commits from @jfairbank and moved test in to the 'emptyView' spec"}
,{msg: "removed code that was commented out for #429, as it was causing a zombie emptyView as noted in the ticket)"}
,{msg: "Merge remote-tracking branch 'g00fy/collectionviewResetSpec' into dev"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #435 from chikamichi/patch-1"}
,{msg: "Merge pull request #430 from romario333/dev"}
,{msg: "Merge pull request #428 from oatkiller/master"}
,{msg: "Change view.triggers to call triggerMethod"}
,{msg: "zombie modelEvents test spec"}
,{msg: "Module finalizers now run in the context of the module"}
,{msg: "Update docs/marionette.eventaggregator.md"}
,{msg: "fix #429, #175, #182 (multiple EmptyView zombie)"}
,{msg: "Fix build on case-sensitive file systems."}
,{msg: "added EmptyView and specs for testing collection.reset in collection views with an emptyView"}
,{msg: "added 'checkEmpty' for checking if the collection is empty"}
,{msg: "Merge branch 'master' of github.com:oatkiller/backbone.marionette"}
,{msg: "Grammar, punctuation, and other small fixes."}
,{msg: "grammar fixes"}
,{msg: "grammar fixes"}
,{msg: "Changed appendHtml example"}
,{msg: "fixing grammar"}
,{msg: "grammar corrections"}
,{msg: "Grammar fixes"}
,{msg: "updated jQuery to v1.9.0 and fixed a few tests with the update"}
,{msg: "updating to backbone v0.9.10"}
,{msg: "upgrade guide for removing Marionette.Async"}
,{msg: "added upgrade guide"}
,{msg: "removed support for Marionette.Async"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #414 from a5huh/patch-1"}
,{msg: "Update docs/marionette.region.md"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #413 from paulwittmann/patch-1"}
,{msg: "Update docs/marionette.templatecache.md"}
,{msg: "build"}
,{msg: "finished converting specs and code over to new startWithParent option, and still allowing the startWithParent object literal, though the docs suggest limited use for it now"}
,{msg: "starting to convert startWithParent settings to new syntax. ran in to a failing test"}
,{msg: "updating docs for module startWithParent setting change"}
,{msg: "added alternate syntax for modules to set startWithParent"}
,{msg: "build"}
,{msg: "Refer to local Marionette instead of Backbone.Marionette"}
,{msg: "build"}
,{msg: "fixed collectionView index retrieving when adding a model to the collection. fixes #409 #407"}
,{msg: "changelog for memory leak in collectionview"}
,{msg: "build"}
,{msg: "fixed the memory leak caused by view reference in the onShow code. fixes #408"}
,{msg: "build"}
,{msg: "Fixed event handler leak for child views that have been removed. fixes #408"}
,{msg: "build"}
,{msg: "view.triggers now include an args parameter in the event, with args.view, args.model, args.collection. fixes #402"}
,{msg: "Added jquery as a dependency"}
,{msg: "de-lint, build and change log for model and collection events in a view"}
,{msg: "delegate and undelegate modelEvents and collectionEvents form within Backbone.View.delegateEvents and undelegateEvents. closes #379"}
,{msg: "removed initialEvents from the public API. closes #396"}
,{msg: "allow view.ui to be a function that returns a hash"}
,{msg: "split ui hash bindings in to separate spec for clarity"}
,{msg: "renamed file for clarity in specs"}
,{msg: "allow modelEvents and collectionEvents to be functions directly, that return a hash"}
,{msg: "fixing strict mode in the build. fixes #387"}
,{msg: "build"}
,{msg: "de-linted collectionView"}
,{msg: "Merge remote-tracking branch 'sontek/run-dom-refresh-in-itemview' into dev"}
,{msg: "Merge remote-tracking branch 'origin/master' into dev"}
,{msg: "Merge pull request #391 from Vespakoen/fix-jam-config"}
,{msg: "Merge pull request #397 from rixth/patch-1"}
,{msg: "changelog and build to fix #388 and #400"}
,{msg: "spec and hopefully a fix for issue #388"}
,{msg: "Fixed typo"}
,{msg: "fixed build"}
,{msg: "updating docs, readme and changelog"}
,{msg: "updating Wreqr for backbone v0.9.9, and removing EventBinder entirely, in favor of EventAggregator"}
,{msg: "simplified the event aggregator code"}
,{msg: "replaced Backbone.EventBinder w/ a Marionette.EventBinder that uses Backbone.Events directly. realized that this should replace Backbone.Wreqr.EventAggregator, though."}
,{msg: "first build w/ official support for backbone v0.9.9"}
,{msg: "de-linted"}
,{msg: "removed Backbone.EventBinder. added changelog for 1.0.0-rc3, to upgrade to backbone v0.9.9"}
,{msg: "fixed the view close so that it will trigger the event properly, through listenTo"}
,{msg: "replacing EventBinder with Backbone.Events. one failing test remains"}
,{msg: "trigger the dom refresh functions from itemviews in a collection view"}
,{msg: "updated backbone to v0.9.9 and underscore to v1.4.3. need to replace Backbone.EventBinder w/ Backbone.Events."}
,{msg: "Added information about using a template function"}
,{msg: "Update docs/marionette.controller.md"}
,{msg: "Fixing jam config"}
,{msg: "Merge pull request #390 from punchFaceChamp/patch-1"}
,{msg: "Update docs/marionette.application.md"}
,{msg: "returned the binding from a bindTo, expands upon PR #384"}
,{msg: "Merge pull request #380 from paulwittmann/master"}
,{msg: "Merge pull request #386 from airandfingers/patch-1"}
,{msg: "Added information about using a template function"}
,{msg: "Update docs/marionette.controller.md"}
,{msg: "fixed readme links to downloads"}
,{msg: "fixing banner in build version"}
,{msg: "build 1.0 rc2"}
,{msg: "dom:refresh event for all views\""}
,{msg: "first pre-release build of 1.0.0-rc2"}
,{msg: "changed item:added event to before:item:added and after:item:added"}
,{msg: "set 'isClosed' before triggering 'close' event. fixes #371"}
,{msg: "version bump to rc2"}
,{msg: "Merge remote-tracking branch 'sontek/register-on-showcallbacks-earlier' into dev"}
,{msg: "removed marionette.async link"}
,{msg: "added babysitter to amd deps, closes #376"}
,{msg: "This moved the registration of onShowCallbacks to before initialize in case `render` is called, that way all the callbacks would still fire properly"}
,{msg: "updating changelog link"}
,{msg: "fixed itemViewOptions function call"}
,{msg: "rebuild v1.0.0-rc1 w/ fix for IE < 9 calling .apply"}
,{msg: "updated backbone.eventbinder and backbone.wreqr for IE < 9 fix when calling .apply"}
,{msg: "changelog for IE < 9 support on .apply calls"}
,{msg: "fixing calls to .apply(ctx, arguments) to account for IE < 9 throwing an error. fixes #368 for Marionette directly"}
,{msg: "cleaning up how itemViewOptions are accessed"}
,{msg: "build v1.0.0-rc1"}
,{msg: "module start events renamed for consistency"}
,{msg: "modules now trigger before:stop and stop events. fixes #366"}
,{msg: "additional spec for return value of onBeforeClose"}
,{msg: "build v1.0.0-rc1"}
,{msg: "Returning 'false' from the 'onBeforeClose' method will prevent the view from being closed"}
,{msg: "a view using bindTo for its own close event will be able to listen to the event. fixes #365"}
,{msg: "updated docs and changelog for bindEntityEvents"}
,{msg: "A single function can be declared directly in-line instead of specifying a callback via a string method name. fixes #364"}
,{msg: "updated to eventbinder v1.0.1"}
,{msg: "updated to wreqr v0.0.1"}
,{msg: "updated to latest babysitter pre-release"}
,{msg: "removed AMD bundle to reduce confusion, closes #360"}
,{msg: "Added a 'dom:refresh' event/callback method that fires after a view has been rendered, placed in the DOM with a Marionette.Region, and is re-rendered. fixes #354"}
,{msg: "The 'itemview:' events - events that are forwarded from item views - can now have a custom prefix with the 'itemViewEventPrefix' setting. fixes #292"}
,{msg: "another build of 1.0.0-rc1"}
,{msg: "The item:added/onItemAdded callback method are now fired after an item view has been rendered and added to it's parent collection view. fixes #350"}
,{msg: "another spec to show itemview 'render' event is forwarded through the collectionview as 'itemview:render' correctly. #229"}
,{msg: "fixed the ItemView being used in the spec and the test passes now. ticket #229"}
,{msg: "cleaning up the code to forward child view events. adding a failing test for #229"}
,{msg: "changing version to 1.0.0-rc1, and build"}
,{msg: "first build of v1.0.0-beta7"}
,{msg: "The context of the callback method defaults to the object w/ the 'bindTo' method"}
,{msg: "failing test for ticket #356"}
,{msg: "Merge branch 'master' into dev"}
,{msg: "removed node .6 in travis config, is unnecessary"}
,{msg: "added support for multiple event targets for modelEvents and collectionEvents, closes #355"}
,{msg: "Merge pull request #359 from sophacles/dev"}
,{msg: "Copy edits to previous changes"}
,{msg: "Merge pull request #352 from csterritt/master"}
,{msg: "Fixed the link to the changelog in 'readme.md'."}
,{msg: "Merge branch 'dev'"}
,{msg: "updated changelog"}
,{msg: "note about babysitter dependency"}
,{msg: "updated to Backbone.BabySitter v0.0.3. updated docs for collectionview"}
,{msg: "updated license info to link to http://mutedsolutions.mit-license.org/"}
,{msg: "build w/ Backbone.BabySitter to manage childviews in CollectionView"}
,{msg: "added Backbone.BabySitter and converted CollectionView to use it"}
,{msg: "fixed Controller initialize method call so 'options' param is always an object and never undefined"}
,{msg: "adds initialize events to module, closes #334"}
,{msg: "Merge pull request #346 from sophacles/dev"}
,{msg: "adds a spec for #347"}
,{msg: "Merge pull request #347 from gumballhead/dev"}
,{msg: "Update src/marionette.triggermethod.js"}
,{msg: "Updae index for documentation upates"}
,{msg: "Update TemplateCache documentation to match reality"}
,{msg: "cleaned up appRouter constructor a bit"}
,{msg: "Merge pull request #339 from joezimjs/patch-1"}
,{msg: "Merge pull request #340 from joezimjs/patch-2"}
,{msg: "startWithParent property true when should be false"}
,{msg: "Fixed tiny code sample bug"}
,{msg: "build v1.0.0-beta6"}
,{msg: "fixed an issue with defining grand-child modules and starting parent modules directly"}
,{msg: "build w/ controller.close method"}
,{msg: "version bump to v1.0.0-beta6"}
,{msg: "added a default 'close' method to Controller, triggering a 'close' event/method"}
,{msg: "build v1.0.0-beta5"}
,{msg: "release notes and version bump to v1.0.0-beta5"}
,{msg: "fixed the module startWithParent options to work as specified in docs and examples"}
,{msg: "re-ordered list of components / links to docs, to be alphabetical"}
,{msg: "Merge pull request #332 from hallmark/patch-1"}
,{msg: "Update docs/marionette.region.md"}
,{msg: "fixed #329"}
,{msg: "collectionview perf at 10, 100, and 1000 items"}
,{msg: "very basic perf test for collectionview"}
,{msg: "fixed the CompositeView so that serializeData is no longer responsible for mixing in the templateHelpers"}
,{msg: "build"}
,{msg: "converting use of this.options to Marionette.getOption"}
,{msg: "Controller adds event binder before initialize method call"}
,{msg: "removed Viewswapper and related files"}
,{msg: "Merge branch 'viewswap' into dev"}
,{msg: "Merge branch 'master' into dev"}
,{msg: "corrected command and req/res method names in docs"}
,{msg: "added a 'viewswapper vs layout and region' section to the docs"}
,{msg: "changed storeChild on CollectionView to require the item and view instance"}
,{msg: "build viewSwapper again"}
,{msg: "changelog and docs for buildItemView in CollectionView"}
,{msg: "simplified the CollectionView.buildItemView method, to make it easier to override"}
,{msg: "rebuild w/ ViewSwapper"}
,{msg: "the swappable view dectorator now includes originalView and viewName attributes"}
,{msg: "ViewSwapper triggers swap:in and swap:out events"}
,{msg: "updating docs for ViewSwapper"}
,{msg: "triggering show/onShow and hide/onHide event/methods from ViewSwapper"}
,{msg: "trigger render event / method in view swapper views"}
,{msg: "don't swap to a view if we're already on that view"}
,{msg: "correcting a big w/ the initial view and using animations to swap out views"}
,{msg: "another ViewSwapper build"}
,{msg: "cleaning up some code, comments, and setting up the initialView in the constructor, instead of on the first render - to reduce the render code"}
,{msg: "provide a 'done' callback to the hideView method, to allow for animations when hiding a view"}
,{msg: "build w/ ViewSwapper"}
,{msg: "documenting the 'swapper' special view name for the 'swapOn' configuration of ViewSwapper"}
,{msg: "specs to unbind view and swapper events. preventing swapper events from being overwritten by view events"}
,{msg: "build w/ viewSwapper"}
,{msg: "don't allow 'swapper' to be a target view, or the initialView, in a ViewSwapper"}
,{msg: "allowing swapOn to be configured with 'swapper' as an event source"}
,{msg: "placeholder specs for additional functionality"}
,{msg: "build viewswapper"}
,{msg: "de-linted"}
,{msg: "added view swapper documentation"}
,{msg: "corrected order of functions in docs to be alphabetical"}
,{msg: "added showView and hideView functions to allow customization of how the views are shown / hidden, when swapping"}
,{msg: "code comment"}
,{msg: "cleaned out file that isn't used"}
,{msg: "changelog for createObject"}
,{msg: "making use of getOption method to configure the viewSwapper"}
,{msg: "only handle the events for the current view, to prevent hidden views from accidentally swapping out to something else"}
,{msg: "fixed two more specs"}
,{msg: "switched to _.bind for view swapper event handler bindings"}
,{msg: "strict mode, and cleaning up a broken spec"}
,{msg: "close all sub-views when closing the view swapper"}
,{msg: "documenting Marionette.createObject"}
,{msg: "failing spec as a placeholder, to close the view swapper and it's configured views"}
,{msg: "adding shim / wrapper for Object.create, and ensuring swapper views only get rendered once when switching back and forth"}
,{msg: "additional behavior and specs for swapping views, ensuring they are not rendered multiple times"}
,{msg: "failing test as a placeholder"}
,{msg: "first specs for the ViewSwapper, showing initial view rendering"}
,{msg: "changelog for getOption"}
,{msg: "documented 'Marionette.getOption'"}
,{msg: "added Marionette.getOption method"}
,{msg: "moved createObject to it's own file. updated build to include createobject and controller"}
,{msg: "fixed some specs"}
,{msg: "build v1.0.0-beta4 with Controller object"}
,{msg: "version bump to v1.0.0-beta4, and starting the changelog for it"}
,{msg: "added basic docs for controller object"}
,{msg: "store options passed in to controller constructor"}
,{msg: "renamed Object to Controller"}
,{msg: "spec to show Object can trigger events"}
,{msg: "first implementation of Marionette.Object"}
,{msg: "playing with ideas for controller and base object"}
,{msg: "hacking around some ideas for a base object and controller extending from it"}
,{msg: "first spec and implementation bits for a Controller object"}
,{msg: "Merge remote-tracking branch 'elliotf/before_to_onBefore' into dev"}
,{msg: "Merge remote-tracking branch 'thylo/patch-1' into dev"}
,{msg: "Remove unused callback handlers"}
,{msg: "Assert that onBeforeRender is called to avoid incorrectly passing spec"}
,{msg: "documentation fix: beforeRender => onBeforeRender, beforeClose => onBeforeClose"}
,{msg: "fixed the remaining strict mode errors in specs"}
,{msg: "fixed all the spec errors w/ use strict mode"}
,{msg: "Update docs/marionette.itemview.md"}
,{msg: "enabling use strict on all specs. lots of failures"}
,{msg: "Merge pull request #319 from joelcox/docs-indexes"}
,{msg: "Removed the documentation index section from one of the generated indexes."}
,{msg: "Auto-generated indexes for every documentation file."}
,{msg: "Merge pull request #318 from joelcox/fix-316"}
,{msg: "Merge pull request #317 from joelcox/fix-307"}
,{msg: "Updated compositeview documentation to include an index."}
,{msg: "Updated view documentation to include an index."}
,{msg: "updated link to contrib guidelines"}
,{msg: "updating region documentation to include an index of the information it provides, as an example of ticket #300"}
,{msg: "build v1.0.0-beta3"}
,{msg: "changelog and version bump to v1.0.0-beta3"}
,{msg: "fixed gh298 by passing view as argument in a regions show event"}
,{msg: "added test to prevent regression of gh298"}
,{msg: "fixed grunt output location for core build"}
,{msg: "updated changelog commit diff link"}
,{msg: "tweaking docs"}
,{msg: "build v1.0.0-beta2"}
,{msg: "updated changelog and docs for eventaggregator changes to bindTo method"}
,{msg: "Marionette.EventAggregator combines Backbone.Wreqr.EventAggregator with Backbone.EventBinder. fixes #297"}
,{msg: "build v1.0.0-beta2"}
,{msg: "fixed the broken 'first render' logic. fixes #295"}
,{msg: "updating info on downloads"}
,{msg: "updated EventBinder version used"}
,{msg: "updated docs about template helpers"}
,{msg: "build v1.0.0-beta2"}
,{msg: "updating Backbone.EventBinder to v0.1.0"}
,{msg: "simplified trigger implementation code a tiny bit, when allowing triggers to be configured as a function"}
,{msg: "build v1.0.0-beta2"}
,{msg: "updating Region to use triggerMethod, renaming a few events and updating docs for those events"}
,{msg: "fixed the layout spec for closing regions when re-rendering"}
,{msg: "updated the composite view docs for events"}
,{msg: "updated the itemview docs for event names"}
,{msg: "updating documented events for the collection view"}
,{msg: "build v1.0.0-beta2"}
,{msg: "The events triggered from the Application object instance are now triggered with corresponding \"on,{EventName}\" method calls"}
,{msg: "moved collection empty view specs to separate file. added spec to show itemView set in CollectionView constructor for ticket #293"}
,{msg: "fixed the spec setup"}
,{msg: "changing readme to point to the website for downloads"}
,{msg: "release notes for build output changes"}
,{msg: "changed up the build process so that marionette.core is just marionette, and marionette build is marionette with all dependencies"}
,{msg: "build v1.0.0-beta2"}
,{msg: "docs and changelog for templateHepers changes"}
,{msg: "change when templateHelpers are mixed in, so they are not dependent on serializeData implementation. fixes #291"}
,{msg: "build v1.0.0-beta2"}
,{msg: "version bump to v1.0.0-beta2"}
,{msg: "Merge remote-tracking branch 'edhille/CollectionView.addItemView-bugfix' into dev"}
,{msg: "Merge remote-tracking branch 'kevindente/itemViewOptions' into dev"}
,{msg: "merging fix for #277"}
,{msg: "removed console.log from spec"}
,{msg: "working on a spec for ticket #289 but can't seem to reproduce the problem with this spec"}
,{msg: "prevent composite view from firing 'render' event / method twice. fixes #287"}
,{msg: "failing test for #287, to show the problem"}
,{msg: "Merge pull request #286 from Radagaisus/patch-3"}
,{msg: "Merge pull request #285 from Radagaisus/patch-2"}
,{msg: "Merge pull request #284 from Radagaisus/patch-1"}
,{msg: "Update docs/marionette.view.md :: more typos"}
,{msg: "Update docs/marionette.view.md :: equivilent -> equivalent"}
,{msg: "Update docs/marionette.approuter.md :: contructor -> constructor"}
,{msg: "Bind CollectionView to child view events prior to rendering child view"}
,{msg: "Allow itemViewOptions to be specified in the CollectionView constructor"}
,{msg: "built with latest eventbinder"}
,{msg: "added specific grunt 0.3.16 dependency to ensure compatibility in near future"}
,{msg: "updated eventbinder for tests and bundle"}
,{msg: "Merge pull request #276 from jsoverson/bundle-builds"}
,{msg: "Added wreqr and eventbinder to the dependencies for the amd build"}
,{msg: "removed bundles of community libraries"}
,{msg: "built bundle"}
,{msg: "removed jquery/backbone bundles"}
,{msg: "build targets"}
,{msg: "Added bundle targets. Changed license format to /*! */ style."}
,{msg: "corrected changelog diff link"}
,{msg: "build v1.0.0-beta1"}
,{msg: "bump version to v1.0.0-beta1"}
,{msg: "added Marionette.extend as alias to Backbone's extend method"}
,{msg: "changing the docs to consolidate some of the helper functions"}
,{msg: "added Marionette.addEventBinder method to properly add an instance of the EventBinder object to a specified target object, and updated all code to use this method call"}
,{msg: "build v0.11.0 pre-release"}
,{msg: "fixed how the event binder is attached to views. bind 'render' to the view instance, always"}
,{msg: "Merge remote-tracking branch 'tony/patch-6' into dev"}
,{msg: "Merge pull request #272 from jsoverson/dev"}
,{msg: "promoted Marionette to root global"}
,{msg: "Remove duplicate line"}
,{msg: "Documentation fix in MarionetteApplication"}
,{msg: "changelog"}
,{msg: "build v0.11.0 pre-release"}
,{msg: "merge boxxxie's fix for options being undefined. fixes #268"}
,{msg: "allow a layout to be defined without regions, using underscore v1.4.x. fixes #270"}
,{msg: "added index that takes into consideration 'options' being undefined"}
,{msg: "collection view can attach child view from existing DOM on init. fixes #180"}
,{msg: "build v0.11.0 pre-release w/ commands request/response"}
,{msg: "Merge pull request #267 from marionettejs/wreqr"}
,{msg: "extract var for readability"}
,{msg: "docs for commands, request/response, and re-adding event aggregator docs"}
,{msg: "changelog for request/response and commands"}
,{msg: "providing command pattern and request/response pattern from Application instance, directly"}
,{msg: "v0.11.0 pre-release build"}
,{msg: "allow regions to be defined as selector, region type, or object literal with both, on Application objects and Layouts"}
,{msg: "changelog for isClosed"}
,{msg: "v0.11.0 pre-release build"}
,{msg: "specs to show closing a view multiple times, and re-rendering it will mark it as not closed"}
,{msg: "removed unbind call in base view close method, as it was not needed"}
,{msg: "reset isClosed to false when rendering a view"}
,{msg: "prevent view close methods from running multiple times"}
,{msg: "release notes about module custom args"}
,{msg: "Merge remote-tracking branch 'yethee/module-custom-args' into dev"}
,{msg: "v0.11.0 pre-release build"}
,{msg: "version bump to v0.11.0"}
,{msg: "updated grunt.js for new file names"}
,{msg: "renamed all src files to remove backbone. from the prefix"}
,{msg: "removed reference to marionette.async for jasmine tests"}
,{msg: "readme updates for dependencies"}
,{msg: "using backbone.wreqr as a replacement for marionette.eventaggregator"}
,{msg: "updating docs for event binder and triggerMethod"}
,{msg: "removed marionette.eventbinder in favor of backbone.eventbinder"}
,{msg: "changelog updates"}
,{msg: "updated to jquery v1.8.2"}
,{msg: "upgraded to underscore v1.4.1"}
,{msg: "Merge pull request #265 from marionettejs/triggerMethod"}
,{msg: "triggerMethod: ensure the on,{Event} method is a function before trying to call it"}
,{msg: "added triggerMethod file to build"}
,{msg: "uncommented specs that should not have been commented out"}
,{msg: "change log for triggerMethod and changes to views"}
,{msg: "complete rewrite of triggerMethod and it's use in views. converted all view trigger events to use triggerMethod."}
,{msg: "second pass at triggerEvent object, which overrides the trigger method of object passed in to it's constructor"}
,{msg: "first pass at TriggerEvent object"}
,{msg: "Merge pull request #264 from kjbekkelund/unbind-all"}
,{msg: "Remove 'that' from unbindAll"}
,{msg: "Merge remote-tracking branch 'osama-ibrahim/region_view_close' into dev"}
,{msg: "started working on changelog for next release"}
,{msg: "extracted serializeData out of base View"}
,{msg: "cleaning up the getItemViewContainer method a bit, and adding a better error message when the container element is not found. closes #200"}
,{msg: "Fixes #260, refactoring of passing custom args to the module definition"}
,{msg: "Added a failing spec for issue #260"}
,{msg: "Merge branch 'patch-5' of https://github.com/tony/backbone.marionette into dev"}
,{msg: "Merge pull request #258 from jarrad/master"}
,{msg: "Fix small typo in module doc"}
,{msg: "Fixed an issue with `View.close` being called from `Region.close`, even so it's already closed."}
,{msg: "Added a failing spec to demonstrate an issue with Region.close that it calls View.close even if it's already closed."}
,{msg: "Backbone.Marionette check for DOM library argument"}
,{msg: "Merge pull request #255 from jonotron/getItemView-doc"}
,{msg: "Documented overriding of getItemView"}
,{msg: "build v0.10.2"}
,{msg: "version bump to v0.10.2"}
,{msg: "change log for PR #254. a tiny bit of code formatting"}
,{msg: "Merge remote-tracking branch 'osama-ibrahim/Layout.render_fIx' into dev"}
,{msg: "changelog for PR #253"}
,{msg: "Fixed `Layout.render` function to re-bind the regions correctly when it is bound to an event before the first render call (e.x. in the `initialize` function)"}
,{msg: "Added a failing spec to demonstrate the `Layout.render` issue with events bound before the first render call (e.x. in the `initialize` function)."}
,{msg: "Fixed duplication the callbacks when resetting callbacks"}
,{msg: "build v0.10.1"}
,{msg: "changelog and version bump for v0.10.1"}
,{msg: "added a spec to load modules in reverse order, and set startWithParent to false. fixed bug exposed by that test"}
,{msg: "Merge pull request #252 from jgornick/issue/251"}
,{msg: "added spec to show adding a finalizer outside of module definition function, and stopping the module"}
,{msg: "spec to show sub-module initializer outside of sub-module definition function"}
,{msg: "Updated urls in package.json for marionettejs org."}
,{msg: "enable irc notifications for travis ci builds"}
,{msg: "updated changelog"}
,{msg: "build v0.10.0"}
,{msg: "updated docs to show correct behavior for starting and stopping modules, including startWithParent"}
,{msg: "corrected behavior of startWithParent for modules"}
,{msg: "updated docs to rename startWithApp to startWithParent"}
,{msg: "renamed 'startWithApp' to 'startWithParent' for module definitions"}
,{msg: "updated module docs"}
,{msg: "build v0.10.0"}
,{msg: "de-linting module source"}
,{msg: "sub-modules will be started before parent modules (depth-first hierarchy traversal"}
,{msg: "sub-modules can override parent module's startWithApp setting"}
,{msg: "retriving module by name won't override the module's auto-start"}
,{msg: "spec and impl to make sub-modules dependent on their parent module, for auto-start"}
,{msg: "build v0.10.0"}
,{msg: "de-linking collection view"}
,{msg: "bump version to v0.10.0"}
,{msg: "moved some docs out of itemview in to view, as they apply to the base view and all other views"}
,{msg: "stop/finalize sub-modules before parent module. fixes #245"}
,{msg: "Merge remote-tracking branch 'jonotron/itemViewOptionsModelAccess' into dev"}
,{msg: "If itemViewOptions is a function, it should be passed the item when called"}
,{msg: "spec to show resetting and re-running callbacks"}
,{msg: "de-linting modules"}
,{msg: "module definition functions are called immediately, but initializers are not called until module start"}
,{msg: "adding CONTRIBUTING doc for https://github.com/blog/1184-contributing-guidelines"}
,{msg: "Updated travis-ci status image to point to master."}
,{msg: "build v0.9.13"}
,{msg: "de-linted view"}
,{msg: "version bump to v0.9.13"}
,{msg: "changelog and view docs updates"}
,{msg: "corrected base view to call prototype constructor before attempting to set up model / collection event declarations"}
,{msg: "layout initializes regions before calling 'initialize' function / prototype constructor"}
,{msg: "Merge remote-tracking branch 'jgornick/issue/162' into dev"}
,{msg: "Merge remote-tracking branch 'mbriggs/declarative-event-binding' into dev"}
,{msg: "Merge remote-tracking branch 'johnkpaul/close_handler_bug' into dev"}
,{msg: "removing all of the ruby dependencies and gem use"}
,{msg: "Merge pull request #244 from tony/patch-3"}
,{msg: "Update docs/marionette.eventaggregator.md"}
,{msg: "Removed the check for itemView as a function in composite and collection views."}
,{msg: "changing name. Yeoman + bower are not playing well with names that do not match the git repo"}
,{msg: "Removing version to pull from master"}
,{msg: "changing dependencies to devDependencies"}
,{msg: "Merge branch 'master' of https://github.com/marionettejs/backbone.marionette"}
,{msg: "adding component.json for bower"}
,{msg: "Forgot the add the item argument in the getItemView method."}
,{msg: "Initial commit to allow itemView for collection and composite views to be a function. This provides the ability to return a specific view for a model in the collection."}
,{msg: "Added travis status"}
,{msg: "added grunt-jasmine-runner and test script definition"}
,{msg: "tasks for grunt-jasmine-runner"}
,{msg: "adding travis config"}
,{msg: "added zepto and enderjs caveat, closes #160"}
,{msg: "added info about irc channel"}
,{msg: "fixing links to point to new marionettejs org instead of derickbailey"}
,{msg: "build v0.9.12"}
,{msg: "bump version to v0.9.12"}
,{msg: "build v0.9.12"}
,{msg: "de-linted code. cleaned up some ternary operators. removed async specs"}
,{msg: "removing marionette.async as it's in another repository now"}
,{msg: "moves binding to before the constructor call"}
,{msg: "documentation"}
,{msg: "adds declarative event binding to Backbone.Marionette.View"}
,{msg: "minor doc corrections and a link to a wiki page for the event binder"}
,{msg: "switch order of events triggered when closing collection view"}
,{msg: "build v0.9.11"}
,{msg: "changelog and package.json update for v0.9.11"}
,{msg: "version bump to v0.9.11"}
,{msg: "Merge remote-tracking branch 'jgornick/master' into dev"}
,{msg: "Merge remote-tracking branch 'teleological/rescope-variable' into dev"}
,{msg: "Merge pull request #219 from tony/patch-1"}
,{msg: "Update BindTo to EventBinder."}
,{msg: "add testcase for issue with calling collection close event handlers"}
,{msg: "Rebuilt libraries with grunt"}
,{msg: "Plug global variable leak"}
,{msg: "Keeping the original name the same."}
,{msg: "Updated package.json with more properties and included jamjs repository section."}
,{msg: "tweaking the readme"}
,{msg: "updated v0.9.10 release note about grunt"}
,{msg: "updated readme to reflect change to grunt build process"}
,{msg: "rebuild v0.9.10 with grunt as build process"}
,{msg: "changed build file to use local grunt install"}
,{msg: "made async build part of grunt build"}
,{msg: "updated build to get async as well"}
,{msg: "removed old build file"}
,{msg: "working on converting build process to grunt"}
,{msg: "ingore npm files and modules"}
,{msg: "build v0.9.10"}
,{msg: "release notes and version bump to v0.9.10"}
,{msg: "removed the initialEvents from itemView so that it won't re-render the itemView when the collection is reset, by default"}
,{msg: "rebuild v0.9.9 w/ properly linted code"}
,{msg: "Merge remote-tracking branch 'yolk/linted'"}
,{msg: "build v0.9.9"}
,{msg: "version bump to v0.9.9"}
,{msg: "using region.reset in layout re-rendering"}
,{msg: "release notes and documentation for region 'reset' method"}
,{msg: "added a 'reset' method to regions"}
,{msg: "Just some JavaScript Linting to uniform the code: * 7 missing semicolons added * variable moduleNames was hiding argument with same name. Removed var."}
,{msg: "build v0.9.8"}
,{msg: "release notes and version bump for v0.9.8"}
,{msg: "removed ability to reset callbacks. instead, when module stops, it clears them and creates new callback set"}
,{msg: "ability to reset callback set"}
,{msg: "failing spec to show error with finalizers and restarting modules"}
,{msg: "Merge remote-tracking branch 'origin/master'"}
,{msg: "build v0.9.7"}
,{msg: "version bump to v0.9.7"}
,{msg: "release notes and docs about pre-compiled template functions"}
,{msg: "Merge remote-tracking branch 'jsoverson/dev' into dev"}
,{msg: "pulled in #208 to correct issue w/ multiple startup of single module. fixes #208"}
,{msg: "Merge remote-tracking branch 'yethee/fix-start-submodule' into dev"}
,{msg: "added rake to gemfile"}
,{msg: "Merge pull request #212 from datiecher/patch-1"}
,{msg: "Removed duplicated document entry"}
,{msg: "corrected gittip link"}
,{msg: "added gittip"}
,{msg: "adding test for provided template functions"}
,{msg: "support using provided template functions"}
,{msg: "Pass options to start method of the sub-modules"}
,{msg: "Prevent re-start the module"}
,{msg: "Merge branch 'dev'"}
,{msg: "Merge pull request #202 from buremba/patch-1"}
,{msg: "build v0.9.6"}
,{msg: "bump version to v0.9.6 with release notes"}
,{msg: "added spec and fix for views not having 'bindTo' method in initialize method"}
,{msg: "spec to try and show ticket #203 failing as described, but seems to be passing for me. not sure i got the test right"}
,{msg: "fixed typo"}
,{msg: "failing spec for ticket #198"}
,{msg: "fix typo / bug in layout for default region type. build v0.9.5"}
,{msg: "fix setting invalid regionType on Marionette.Layout"}
,{msg: "link to guidelines for pull requests and contributions"}
,{msg: "build v0.9.4 for release"}
,{msg: "build v0.9.4-pre9 with all current changes"}
,{msg: "changelog for custom region types on layout"}
,{msg: "renamed regionClass to regionType for ticket #193"}
,{msg: "Merge remote-tracking branch 'jonotron/custom-layout-regions' into dev"}
,{msg: "documenting the module start/stop and initializer/finalizer changes"}
,{msg: "changelog for ticket #167"}
,{msg: "allow an already closed layout to be re-rendered, and have it's regions re-established. fixes #167"}
,{msg: "a failing test for ticket #167"}
,{msg: "Merge remote-tracking branch 'marten/master' into dev"}
,{msg: "raise an error when selector specified for itemViewContainer returns no elements"}
,{msg: "Docs reflect the region specific regionClass syntax"}
,{msg: "Layout understands region specific custom regionClasses"}
,{msg: "Merge branch 'custom-layout-region' into custom-layout-regions"}
,{msg: "Added docs re: custom region class in layout"}
,{msg: "Layout can now accept a custom region class"}
,{msg: "corrected spec description"}
,{msg: "build v0.9.4-pre8 w/ fix for empty view to not render multiple times"}
,{msg: "fixed but to prevent emptyView from being rendered mutliple times"}
,{msg: "Merge remote-tracking branch 'eskimoblood/patch-1' into dev"}
,{msg: "merging in master branch doc changes"}
,{msg: "build v0.9.4-pre7 with module restarting"}
,{msg: "spec showing behavior of restarting modules, and re-running intializers and finalizers"}
,{msg: "a bit of cleanup, naming .submodules collection"}
,{msg: "removed specs for features i decided not to add, relating to stopping modules"}
,{msg: "build v0.9.4-pre6 with first bits of module.stop()"}
,{msg: "specs for trying to stop a module that is not yet started"}
,{msg: "first passing specs for stopping a module, and stopping its sub-modules"}
,{msg: "calling 'start' on a module will start all of the sub-modules for the one that was started"}
,{msg: "splitting apart start and stop specs for modules. first set of failing tests for stopping modules. another scenario failing test for start modules"}
,{msg: "delete unused variable"}
,{msg: "Merge pull request #188 from trevordixon/patch-1"}
,{msg: "Fix README typo."}
,{msg: "Merge pull request #187 from ammeep/patch-1"}
,{msg: "Updated docs so that the template helpers text is all together. The 'Change Which Template Is Rendered For A View' section was in the middle so didn't appear to make sense. msg: \"Did not think this was intentional :)"}
,{msg: "cleanup a few key points"}
,{msg: "v0.9.4-pre build with renaming of BindTo to EventBinder"}
,{msg: "a bit of material to explain why Marionette exists and what it provides"}
,{msg: "renamed BindTo to EventBinder"}
,{msg: "first passing implementation of startWithApp option for a module"}
,{msg: "moving module startup specs to start-stop file. failing test to define how a module will not be auto-started with the app"}
,{msg: "modules can be defined after the app starts, and the modules will auto-start"}
,{msg: "moving module auto-start specs to a separate file, and specifying first failing test for auto-start adding a new module after app start"}
,{msg: "changelog note about UI elements"}
,{msg: "merging 'ui' elements changes from ifeins"}
,{msg: "build v0.9.4-pre w/ the app.removeRegion method"}
,{msg: "corrected tests for removeRegion, and documented it"}
,{msg: "Merge remote-tracking branch 'nagyv/master' into dev"}
,{msg: "build v0.9.4-pre with corrections to the emptyView"}
,{msg: "cleaning up specs and code to handle empty view closing, correctly"}
,{msg: "cleaning up code formatting. changelog for fixing emptyview"}
,{msg: "Merge commit 'fb3ccc7' into dev"}
,{msg: "collection view properly handles no collection, custom render method and removing views. fixes #173"}
,{msg: "cleaning up the collection view specs"}
,{msg: "cleaning up the module tests to start the module directly, instead of always starting the app"}
,{msg: "Fixed documentation error."}
,{msg: "Commited build products."}
,{msg: "Documentatio fixes."}
,{msg: "Added documentation."}
,{msg: "Implemented ui hash extension to CompositeView and added specs."}
,{msg: "Implemented ui hash extension for itemview and added specs for it."}
,{msg: "Merge pull request #179 from chytanya/patch-1"}
,{msg: "Fixing the closing tag."}
,{msg: "ensure App.start passes options to module.start"}
,{msg: "build v0.9.4-pre with module definition delay, and module initializers"}
,{msg: "defer module definition until the module is started"}
,{msg: "changed the way Module.create is called"}
,{msg: "basic specs for module initializers, and starting modules on app start"}
,{msg: "Added removeRegion method to Application."}
,{msg: "Merge pull request #172 from wrapp/master"}
,{msg: "Fix the composite view documentation"}
,{msg: "call closeEmptyView on showColletion to avoid incorrect state of showing empty view flag"}
,{msg: "moved help back down below the docs links"}
,{msg: "more re-organizing the readme, and updating notes on different ways of getting help"}
,{msg: "changing readme order of contents to promote the mailing list and varios ways of getting support"}
,{msg: "build v0.9.3"}
,{msg: "changelog for render methods returning 'this'"}
,{msg: "Merge remote-tracking branch 'wrapp/master' into dev"}
,{msg: "change log and docs for composite view"}
,{msg: "version bump"}
,{msg: "Merge branch 'master' into dev"}
,{msg: "Merge pull request #165 from sheehan/master"}
,{msg: "Merge pull request #164 from pdufour/master"}
,{msg: "fix outdated documentation for ItemView.render"}
,{msg: "Typo in docs."}
,{msg: "Make sure all render methods return `this`"}
,{msg: "allows itemViewContainer of containerView to be provided as a function that returns the selector string"}
,{msg: "fixed unclear usage of itemViewContainer parameter in #getItemViewContainer"}
,{msg: "fixed docs for template helpers example"}
,{msg: "updating readme to link to google group"}
,{msg: "Merge pull request #157 from brantb/feature-volo"}
,{msg: "Fix volo.url property so volo can find the built script."}
,{msg: "build v0.9.2"}
,{msg: "version bump to v0.9.2"}
,{msg: "release notes for v0.9.2"}
,{msg: "Merge remote-tracking branch 'adamwerner/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'clemens/render_event_on_collection_render' into dev"}
,{msg: "Merge remote-tracking branch 'tgcondor/patch-1' into dev"}
,{msg: "Merge remote-tracking branch 'brantb/feature-volo' into dev"}
,{msg: "Corrected variable name within the jQuery get call (line 145)"}
,{msg: "added 'render' and 'before:render' events to CollectionView"}
,{msg: "Merge pull request #154 from robjefferies/master"}
,{msg: "Updated AppRouter documentation"}
,{msg: "Return a deferred promise from Region.show"}
,{msg: "Merge pull request #151 from bruno-c/patch-2"}
,{msg: "Renderer.render does not return a Promise object anymore Added note to remind that if Renderer.render is overridden, TemplateCache.get needs to be called explicitly"}
,{msg: "Merge pull request #150 from bruno-c/patch-1"}
,{msg: "Typo - \"change the `renderTemplate` method\" should be \"change the `render` method\""}
,{msg: "Add package.json with volo support"}
,{msg: "build v0.9.2-pre"}
,{msg: "bump to v0.9.2-pre"}
,{msg: "killed extra semi-colon"}
,{msg: "specs to ensure itemViewContainer works correctly in async.compositeview"}
,{msg: "docs for itemViewContainer in composite view"}
,{msg: "reset the itemViewContainer selector on render / re-render"}
,{msg: "started on change log for next release"}
,{msg: "removed console.log"}
,{msg: "spec to show what happens when no itemViewContainer is used on a composite view"}
,{msg: "passing the first of the composite view's itemViewContainer specs"}
,{msg: "failing spec for compositeView's 'itemViewContainer' option"}
,{msg: "re-build v0.9.1"}
,{msg: "changelog for showing emptyView"}
,{msg: "restructured the async.collectionview rendering to handle showing emptyView after removing all items from the collection"}
,{msg: "failing spec for removing last item in collection, showing emptyView"}
,{msg: "build v0.9.1"}
,{msg: "change log for v0.9.1"}
,{msg: "version bump to v0.9.1"}
,{msg: "code and specs for #145, for Marionette.async"}
,{msg: "quick hack to get empty view to close when adding new item to collection. fixes #145 but still need to implement for Marionette.Async"}
,{msg: "major cleanup of the render method in collection view"}
,{msg: "failing spec for closing emptyView when an item is added to a collection"}
,{msg: "fixed appendhtml example"}
,{msg: "fixed code comment"}
,{msg: "info on why / how you should replace appendHtml method"}
,{msg: "Merge pull request #144 from chancancode/patch-1"}
,{msg: "Removed mentions of custom module objects in the docs."}
,{msg: "fixing links to async documentation"}
,{msg: "corrected version number in changelog"}
,{msg: "corrected changelog diff link for v0.9.0 release"}
,{msg: "build and release v0.9.0"}
,{msg: "version bump to v0.9.0 for release"}
,{msg: "changelog and docs for collection index"}
,{msg: "provide index for item / item view, when rendering an item in a CollectionView, to assist in sorting and displaying th sorted view correctly"}
,{msg: "corrected several async spec issues"}
,{msg: "spec for appRouter with 2 controller methods and routes"}
,{msg: "Merge pull request #139 from tomdev/dev"}
,{msg: "Fixed typo"}
,{msg: "Build v.0.9.0-pre"}
,{msg: "Call onShow on child views *after* it is rendered/displayed."}
,{msg: "cleaning up the child view storage for collection view, so it always has an object"}
,{msg: "using underscore built-in function 'result' instead of custom code"}
,{msg: "tweak to changelog"}
,{msg: "fixed a link"}
,{msg: "fixed async docs"}
,{msg: "more documentation cleanup"}
,{msg: "cleaning up docs for callbacks, and adding links to readme to docs"}
,{msg: "build v0.9.0-pre with itemViewOptions"}
,{msg: "allow itemViewOptions to be a function. fixes #92"}
,{msg: "collectionView can specify an 'itemViewOptions' which will be passed through to each item view instance. fixes #92"}
,{msg: "build v0.9.0-pre with async corrections"}
,{msg: "corrected a comment style"}
,{msg: "separated helpers from async helpers"}
,{msg: "Merge remote-tracking branch 'clemens/async_missing_dependencies_dev' into dev"}
,{msg: "Merge remote-tracking branch 'clemens/duplicated_code_add_item_view' into dev"}
,{msg: "extracted #renderItemView function so that #addItemView must not be maintained twice for regular and async module"}
,{msg: "fixed missing dependencies for async module and moved extensions to Application, Region and View from helpers to their appropriate module files"}
,{msg: "splitting the documentation out in to individual files in the docs folders"}
,{msg: "docs for onItemAdded"}
,{msg: "v0.9.0-pre build"}
,{msg: "call onItemAdded on collection view just before rendering the item view"}
,{msg: "changelog for composite view"}
,{msg: "build v0.9.0 with onShow and onRender guaranteed to be called on itemView of collection / composite views"}
,{msg: "guarantee onShow and onRender are called for child item views in collection views, even when added after collection has been shown"}
,{msg: "build v0.9.0-pre with collection view memory leak cleanup, and itemview unbindAll corrected"}
,{msg: "change log for unbindAll in close"}
,{msg: "Merge remote-tracking branch 'clemens/unbind-all-after-close-trigger' into dev"}
,{msg: "change log for collection view memory leak fix"}
,{msg: "trigger unbindAll later in close method to be able to self-bindTo 'close' event on a view"}
,{msg: "fix for leaking CollectionView (does not unbind events from closed childviews)"}
,{msg: "build v0.9.0 with async code in separate module"}
,{msg: "separated the region async code"}
,{msg: "moving the documentation related to async rendering to it's own file. updated other bits of apidocs and readme"}
,{msg: "adjusted build to create standard version and .async add-on, and built v0.9.0-pre with async separated"}
,{msg: "support files for tests, and making it easier to apply async to marionette"}
,{msg: "separated compositeview's async rendering"}
,{msg: "split apart collectionview's async rendering"}
,{msg: "spec to show layout as async render, when using itemview async render"}
,{msg: "finished pulling async out of itemview, renderer and templatecache"}
,{msg: "fixed renderer specs for non-async use"}
,{msg: "added an ItemView :: label in front of the item view perf tests as a type of categorization"}
,{msg: "improved the itemView performance tests by grouping them together for better comparison with backbone.view"}
,{msg: "starting to pull apart the async code and separate it in to it's own files, as a plugin. itemview, renderer and templatecache so far"}
,{msg: "reverted itemview back to previous code without separate renderer"}
,{msg: "reorganizing perf tests for itemView, and pulling in new tests"}
,{msg: "added second test to show diff between new view instances, and re-using view instances"}
,{msg: "Merge branch 'master' into dev"}
,{msg: "added a very basic performance test for itemview"}
,{msg: "re-using the same renderer for an item view instance"}
,{msg: "comments in collectionview"}
,{msg: "v0.9.0-pre build, with changes to ItemView rendering"}
,{msg: "renamed methods to hopefully clarify them"}
,{msg: "removed renderHtml method from ItemView"}
,{msg: "changelog for itemview"}
,{msg: "build v0.9.0 with item view split out rendering mechanism"}
,{msg: "split the item view's render method out in to it's own object, so that the code can be reasoned about and modified on its own, with better separation from the view itself"}
,{msg: "docs for empty view on collection view"}
,{msg: "Fix merge conflict"}
,{msg: "Empty [placeholder] view functionality added to CollectionView"}
,{msg: "build v0.9.0-pre from the separated source files"}
,{msg: "split the single src/backbone.marionette.js file in to multiple files for easier maintenance"}
,{msg: "v0.9.0-pre build"}
,{msg: "switched the order of parameters in Callbacks.run"}
,{msg: "stripped modules down in to their own object with limited functionality, instead of using Application objects"}
,{msg: "adjusting docs"}
,{msg: "build v0.9.0 with changes to rendering and template retrieval"}
,{msg: "updated docs to reflect new template and getTemplate settings for views"}
,{msg: "removed ability to specify template as a function that returns a jquery selector. added spec to show how to use pre-compiled templates. cleaned up some codeand specs"}
,{msg: "Empty [placeholder] view functionality added to CollectionView"}
,{msg: "comments on the render function of layout"}
,{msg: "added commit log diff links to change log for v0.8 and above"}
,{msg: "build v0.9.0-pre with TemplateCache changes"}
,{msg: "updated release notes and documentation for TemplateCache changes"}
,{msg: "reverted loadTemplate method signature, to make migration easier and to keep the method a little more sane / without object instance variables"}
,{msg: "re-wrote the TemplateCache object to use object instances instead of a single object literal. broke a lot of people's overrides in the process, but significantly cleaned up msg: \"the code"}
,{msg: "docs and build for v0.9.0-pre, with changes to composite view rendering collection on reset"}
,{msg: "resetting collection of composite view only re-renders collection. fixes #120"}
,{msg: "failing spec for #120"}
,{msg: "build v0.9.0-pre, with module definition changes"}
,{msg: "docs and changelog for module custom args and 'this' param"}
,{msg: "allow custom args to be passed in to modules. fixes #121"}
,{msg: "failing test for #121"}
,{msg: "updated changelog"}
,{msg: "version bump to v0.9.0-pre, with build"}
,{msg: "documenting the behavior of layout re-rendering"}
,{msg: "passing specs and changes for ticket #123"}
,{msg: "failing spec for issue #123"}
,{msg: "moved all change logs to changelog.md. fixes #116"}
,{msg: "removing the ability to return a custom module from a module definition"}
,{msg: "BindTo unbinding now considered context in order to unbind the events correctly"}
,{msg: "failing test for binding / unbinding"}
,{msg: "init regions for a layout, on layout construction"}
,{msg: "change region object so its easier to change how the view's el is displayed within the region"}
,{msg: "build v0.8.4"}
,{msg: "version bump to v0.8.4 and release notes"}
,{msg: "module definition correctly passes the app that .module was called from, as the second parameter to the module"}
,{msg: "separating the API documentation from the readme"}
,{msg: "build v0.8.3"}
,{msg: "version bump to v0.8.3, readme update and release notes"}
,{msg: "allow a module to be defined in more than one location"}
,{msg: "link to package management wiki"}
,{msg: "fixed copyright in readme"}
,{msg: "fixed changelog link"}
,{msg: "moved example apps to the wiki. moved full release notes to change log"}
,{msg: "fixed the test, showing there isn't a bug. just a bad test. keeping the test around anyways, to make sure this scenario continues to work in the future"}
,{msg: "converted to backbone.view. is this a backbone bug?"}
,{msg: "description of problem in comments"}
,{msg: "failing spec for a checkbox re-rendering multiple times"}
,{msg: "Merge remote-tracking branch 'origin/master'"}
,{msg: "The last 3 peices have sections starting with Backbone."}
,{msg: "Link Marionette's Pieces to their detailed description."}
,{msg: "Merge pull request #103 from powmedia/master"}
,{msg: "Fix example code for caching pre-compiled templates"}
,{msg: "build v0.8.2"}
,{msg: "fixed the design of the view triggers so they work with standard events, too"}
,{msg: "working on another spec for triggers"}
,{msg: "build v0.8.2 with view triggers"}
,{msg: "release notes and documentation for triggers"}
,{msg: "version bump to v0.8.2"}
,{msg: "views now have configurable 'triggers' that will turn a DOM event in to a view.trigger event"}
,{msg: "Merge pull request #100 from KevM/patch-1"}
,{msg: "typos"}
,{msg: "added wiki link"}
,{msg: "build v0.8.1"}
,{msg: "v0.8.1 only run the module definition for the last module in the . chain"}
,{msg: "fixing the readme"}
,{msg: "re-build v0.8.0 with correct copyright"}
,{msg: "fixed copyright date"}
,{msg: "updated jasmine and other gems"}
,{msg: "build v0.8.0"}
,{msg: "version bump to v0.8.0"}
,{msg: "documentation and release notes for v0.8.0"}
,{msg: "allow a module to be overriden by a return value from the module definition"}
,{msg: "define modules directly on an application, including sub-modules with dot-notation"}
,{msg: "build v0.7.6"}
,{msg: "release notes and version bump to v0.7.6"}
,{msg: "child view now bubbles events up through parent view"}
,{msg: "note about Marionette.View being a base view, not intended to be used directly"}
,{msg: "v0.7.5 build"}
,{msg: "a little more code cleanup, and some more documentation in the code"}
,{msg: "version bump and release notes"}
,{msg: "cleaning up the render method for item view"}
,{msg: "Allow beforeRender to return a deferred object just like on Render. Useful, for example, when used with Backbone.Relational to fetchRelated before rendering."}
,{msg: "Merge pull request #88 from hlindset/dev"}
,{msg: "Fixed typos"}
,{msg: "release notes"}
,{msg: "build v0.7.4"}
,{msg: "removing the hacky Array.remove. bump to v0.7.4"}
,{msg: "Can't remove elements from the `this.bindings` array while iterating through it"}
,{msg: "fixing link"}
,{msg: "typo"}
,{msg: "fixing issues link"}
,{msg: "updated readme for support and documentation"}
,{msg: "app router throws a friendly error when controller does not have specified function"}
,{msg: "cleaned up some appRouter specs"}
,{msg: "release notes"}
,{msg: "version bump"}
,{msg: "added templateHelpers mixing for data serialization"}
,{msg: "bindTo of EventAggregator now returns binding"}
,{msg: "fixed docco task"}
,{msg: "build v0.7.2"}
,{msg: "version bump"}
,{msg: "compositeview now calls serializeData"}
,{msg: "moved the default serializeData method to the base view instead of item view"}
,{msg: "region now supports an onShow method"}
,{msg: "docs for bindto"}
,{msg: "release notes on bindTo"}
,{msg: "corrected a collection view spec"}
,{msg: "adding unbindFrom method to BindTo"}
,{msg: "corrected spec for async onRender"}
,{msg: "Merge remote-tracking branch 'camr/dev' into dev"}
,{msg: "extracted compileTemplate method in template cache"}
,{msg: "fixing docco task"}
,{msg: "support asynchronous ItemView.onRender"}
,{msg: "Merge remote-tracking branch 'origin/master'"}
,{msg: "rebuild for v0.7.1 release"}
,{msg: "link to composite view blog post"}
,{msg: "itemview now has renderHtml method"}
,{msg: "Merge remote-tracking branch 'sheehan/master' into dev"}
,{msg: "Region now supports an initialize function"}
,{msg: "collectionview correctly defers rendering"}
,{msg: "removed gzip file links in readme"}
,{msg: "rebuild with better amd support, using new version of anvil"}
,{msg: "updated amd wrapper to support node and requirejs"}
,{msg: "fixed the build"}
,{msg: "rebuild"}
,{msg: "re-writing the build process according to @arobson's suggestions"}
,{msg: "Merge pull request #79 from drichard/patch-1"}
,{msg: "Fix some typos."}
,{msg: "extract renderHtml method from ItemView.render"}
,{msg: "remove .DS_Store file from src folder, if it exists"}
,{msg: "fixing build"}
,{msg: "moving support files"}
,{msg: "more stuff to ignore"}
,{msg: "moving support files for the build"}
,{msg: "Merge branch 'master' into dev"}
,{msg: "Merge pull request #69 from JohnSpeno/patch-1"}
,{msg: "fix some typos."}
,{msg: "rebuild v0.7.1"}
,{msg: "bump version to v0.7.1"}
,{msg: "release notes for what i'm doing"}
,{msg: "cleaned up all of the lint warnings"}
,{msg: "working on extracting header and footer for amd, and licence info, into external files"}
,{msg: "precompile / cache underscore templates"}
,{msg: "updated documentation for renderer and templatecache, dealing with preloaded and precompiled templates"}
,{msg: "fixing docco task"}
,{msg: "build for v0.7.0 release"}
,{msg: "comments around a function\""}
,{msg: "rebuild for v0.7.0 release"}
,{msg: "updating readme info about links and downloads"}
,{msg: "test passes now. was bad html. leaving the test in place, just to show that it works correctly"}
,{msg: "a failing test for composite view as a grid. not sure why."}
,{msg: "updating no-model spec for composite view"}
,{msg: "fixed the specs to run from the src"}
,{msg: "added build.cmd for windows users"}
,{msg: "fixed jasmine specs"}
,{msg: "note about where src lives now"}
,{msg: "re-build"}
,{msg: "updating readme with info and links aobut amd versions"}
,{msg: "minified current build"}
,{msg: "setting the build output correctly"}
,{msg: "setting the correct output folder"}
,{msg: "trying to get the build to output correctly"}
,{msg: "trying to set the correct output folder"}
,{msg: "first pass at build with anvil"}
,{msg: "correctly starting and stopping history in the router specs"}
,{msg: "Merge remote-tracking branch 'baalexander/async_serialize_data' into dev"}
,{msg: "release notes for unbind fix"}
,{msg: "Merge remote-tracking branch 'JProgrammer/ClosedEvent' into dev"}
,{msg: "merge origin/master"}
,{msg: "Merge pull request #65 from paulirish/patch-1"}
,{msg: "typo fixes in readme"}
,{msg: "Close event never triggers"}
,{msg: "change text around the annotated source code link"}
,{msg: "Supports asynchronous serializeData."}
,{msg: "renamed method to try and make it less confusing"}
,{msg: "Merge branch 'master' into dev"}
,{msg: "Merge remote-tracking branch 'origin/master'"}
,{msg: "donate button in readme"}
,{msg: "moved the donate button up toward the top, based on feedback from twitter"}
,{msg: "moved donate button to bottom"}
,{msg: "adding a donate button"}
,{msg: "corrected ItemView's use of Renderer.render to allow for synchronous .render implementation"}
,{msg: "updating docs for 'render' event"}
,{msg: "triggering a 'show' event from the view that was shown by a region"}
,{msg: "updated ruby gem versions"}
,{msg: "moving the test suite info in to the tools list"}
,{msg: "appendHtml now takes the collectionView and itemView as parameters"}
,{msg: "moved default close implementation on to base View"}
,{msg: "updating compositeview documentation"}
,{msg: "fixed a bug related to adding an item to a collection and render it in a collection view"}
,{msg: "corrected use of item view to render item in collection view"}
,{msg: "added a few more events for working with views / rendering"}
,{msg: "extracted 'getItemView' for colleciton view, and allow passing in through constructor options"}
,{msg: "renamed  to"}
,{msg: "note about tools"}
,{msg: "note about documentup"}
,{msg: "split out 'buildItemView' in collection view"}
,{msg: "last spec passing, as I think the composite rendering is good enough. moving on for now."}
,{msg: "extending Marionette.View with BindTo to simplify things a bit"}
,{msg: "updated to jquery v1.7.2"}
,{msg: "updated to backbone v0.9.2"}
,{msg: "bumped version to v0.7.0, and made the failing test message more detailed to remind me what i need to do"}
,{msg: "added another failing test to remind myself to think about recursive composite more"}
,{msg: "extracted Marionette.View base type"}
,{msg: "recursive composite tests are passing... but i think it's still missing something in the specs and functionality, regarding how the template is rendered and how the items msg: \"are applied"}
,{msg: "fixing renderer specs"}
,{msg: "fixed remaining itemview specs"}
,{msg: "fixed issue in rendering itemview template"}
,{msg: "moved some more tests to renderer.spec, and moved where the template check is made, in the renderer"}
,{msg: "working on cleaning up item view rendering, and composite view rendering, with new Renderer object\""}
,{msg: "starting to work on readme for release notes and new renderer object, also taking out docs that don't need to be in itemview anymore"}
,{msg: "moved the 'no template' error and test over to the renderer object"}
,{msg: "test to show renderer working with data"}
,{msg: "basics of first renderer test are passing now"}
,{msg: "began extracing rendering out in to it's own object, and re-working a lot of itemview to account for it"}
,{msg: "first failing test to extract rendering out in to another object"}
,{msg: "removed some junk that was passing settings to the modelView"}
,{msg: "recursion working, but end-result is still off"}
,{msg: "looking at what it will take to do recursive composite view ... a lot"}
,{msg: "bump version to v0.6.4"}
,{msg: "allow composite and collection views to render without a collection"}
,{msg: "Merge pull request #54 from codejet/patch-1"}
,{msg: "Corrected one small typo"}
,{msg: "minified v0.6.3 for release"}
,{msg: "updating docs for collection view events / callbacks"}
,{msg: "more events and callbacks for collectionview"}
,{msg: "specs for closing events on item view"}
,{msg: "add beforeRender and beforeClose method calls to ItemView"}
,{msg: "bump version to v0.6.3"}
,{msg: "Allow children to have remove called before parent"}
,{msg: "minified for release"}
,{msg: "version bump to v0.6.2"}
,{msg: "re-rendering a collecion view now happens through the render method"}
,{msg: "fixed an invalid spec so it fails correctly"}
,{msg: "adjusting documentation and release notes for templatecache returning plain string"}
,{msg: "fixing a template used in tests, to work with new text based template cache"}
,{msg: "Merge remote-tracking branch 'soldiermoth/master' into dev"}
,{msg: "startin on release notes for next version"}
,{msg: "Merge remote-tracking branch 'gmaiztegi/patch-1' into dev"}
,{msg: "Fixed error that occurred when a layout was reloaded after it had been closed."}
,{msg: "Merge remote-tracking branch 'JProgrammer/TemplateCacheGet' into dev"}
,{msg: "re-render on collection view now returns deferred / promise. failing spec for calling render twice on composite view"}
,{msg: "Ensure templates are only retrieved once"}
,{msg: "Remove assumption from `ItemView.renderTemplate(template,data)` that `template` is a jQuery object."}
,{msg: "minified and release notes for v0.6.1"}
,{msg: "spec to show re-rendering collection in composite works correctly"}
,{msg: "correcting deferred returns, so they only return promises"}
,{msg: "fixing composite re-rendering"}
,{msg: "correcting issue with rendering collection items, ensuring item view is rendered before appending the html to the dom"}
,{msg: "minified for v0.6.0 release"}
,{msg: "fixing several bugs in rendering a collection view"}
,{msg: "cleaning up the sample app docs"}
,{msg: "more cleanup of the template cache, and updating documentation for it"}
,{msg: "changed how the template cache loads templates, so it no longer requires a callback"}
,{msg: "fixed name in comment"}
,{msg: "Layout now returns deferred from render"}
,{msg: "composite view now returns a deferred from render"}
,{msg: "using jquery deferred to guarantee order of rendering for composite views"}
,{msg: "documentation for returning deferred from item and collection view"}
,{msg: "CollectionView.render now returns a jQuery deferred instead of the view itself"}
,{msg: "ItemView.render now returns a jQuery deferred object,instead of the view itself"}
,{msg: "more docs for compositeview"}
,{msg: "release notes"}
,{msg: "onRender for composite view. documentation for events from views"}
,{msg: "better event names for item view rendered event"}
,{msg: "working on first idea for composite rendering with garaunteed order. not yet ready, even though the tests pass"}
,{msg: "docs and release notes for itemview triggering 'view:rendered' event"}
,{msg: "trigger 'view:rendered' event from itemview"}
,{msg: "Merge remote-tracking branch 'mendicantx/dev' into dev"}
,{msg: "Add tests for closing a composite view"}
,{msg: "more release notes tweaks"}
,{msg: "better failed test messages to say what's really going on"}
,{msg: "failing specs as placeholders on what needs to be done, or at least tested correctly"}
,{msg: "model view replaces html instead of appending to it, in compositeview\""}
,{msg: "renaming TemplateManager to TemplateCache"}
,{msg: "more release notes"}
,{msg: "release notes and cleaning up how compositeview renders"}
,{msg: "finished proving that the composite's collection will not re-render itself... is that what i really want to do, though? should the collection re-render itself in the msg: \"composite view?"}
,{msg: "changing up how to re-render a composite view. failing test at the moment... i think it's re-writing the prototype's function instead of the instance function"}
,{msg: "killing the word 'manager' in more places"}
,{msg: "updating documentation to remove 'manager' from layout and region"}
,{msg: "fixed broken tests, added 'getEl' method to Region so it can be overriden as needed"}
,{msg: "failing tsts for initializing regions before rendering layout, and making the regions available in the onRender method"}
,{msg: "not implemented specs for onrender with layout"}
,{msg: "changing var names"}
,{msg: "renamed RegionManager to Region"}
,{msg: "close regions before closing the layout itself"}
,{msg: "initialize regions before rendering layout"}
,{msg: "layout now ensures region manager 'el' selection happens on the layout's rendered template"}
,{msg: "Merge remote-tracking branch 'cjroebuck/master' into dev"}
,{msg: "Merge remote-tracking branch 'kaineer/master' into dev"}
,{msg: "Make layout managers vent available before calling the ItemView constructor"}
,{msg: "This way collection.toJSON() won't be called if model is defined"}
,{msg: "Merge pull request #41 from jorin-vogel/master"}
,{msg: "Only a typo I saw while reading the README"}
,{msg: "fixed a broken spec for layout manager. changed how template is looked up for an ItemView and removed the default 'template' method"}
,{msg: "rename LayoutManager to Layout. bump version"}
,{msg: "minified v0.5.2 for release"}
,{msg: "updated documentation for LayoutManager vs CompositeRegion"}
,{msg: "rename compositeregion to layoutmanager"}
,{msg: "release notes for v0.5.2"}
,{msg: "version bump to v0.5.2"}
,{msg: "When using CompositeRegion it does not pass arguments through to Backbone.View correctly such as \"model\" because using call rather than apply"}
,{msg: "bug fix and release notes for composite view"}
,{msg: "fixed a but in app router calling controller methods. version bump to v0.5.1, minified and release notes"}
,{msg: "re-minified for v0.5.0 release"}
,{msg: "allow specifying of how to attach view's el to HTML element in region manager's 'show' method"}
,{msg: "adjusting file sizes in readme"}
,{msg: "minified for release"}
,{msg: "fixed trailing comma"}
,{msg: "documentation and release notes"}
,{msg: "documentation for composite region"}
,{msg: "bump version to v0.5.0"}
,{msg: "added core of CompositeRegion and specs"}
,{msg: "extracted composite view from collection view"}
,{msg: "bump version to v0.4.8, minified, release notes"}
,{msg: "don't re-render item view on model change"}
,{msg: "re-minified, release notes"}
,{msg: "changed how region managers are added to app, to reduce memory usage from new types"}
,{msg: "version bump to v0.4.7, and minified"}
,{msg: "starting to put together release notes for next version"}
,{msg: "allow region manager to be instantiated with el specified in options"}
,{msg: "more readme cleanup"}
,{msg: "fixing readme structure for release notes"}
,{msg: "fixed a read me formatting issue"}
,{msg: "bump version to v0.4.6, minified and adjusted file sizes in readme"}
,{msg: "release notes and docs for AppRouter"}
,{msg: "documentation for EventAggregator object"}
,{msg: "extracted event aggregator in to it's own explicit object"}
,{msg: "variable name"}
,{msg: "comma placement"}
,{msg: "Supports defining the controller in the router's definition."}
,{msg: "minified v0.4.5 for release"}
,{msg: "bump version to v0.4.5. release notes"}
,{msg: "restructuring the initial events for item and collection views"}
,{msg: "collection view closes children before re-rendering them, on reset"}
,{msg: "minified and updated download file sizes, for v0.4.4"}
,{msg: "release notes for v0.4.4"}
,{msg: "item view re-renders itself on model change, or on collection reset"}
,{msg: "version bump to v0.4.4. release notes and updating documentation"}
,{msg: "collection view renders when collection is reset"}
,{msg: "re-organizing specs a bit"}
,{msg: "fixed region manager bug, lazy-select the element on first use of 'show'"}
,{msg: "killing dead code"}
,{msg: "corrected file sizes in readme"}
,{msg: "re-minified v0.4.2"}
,{msg: "updated readme and release notes"}
,{msg: "cleaning up the callback implementation"}
,{msg: "minified v0.4.2 for release"}
,{msg: "simplified the Callbacks registration"}
,{msg: "code cleanup - removing leftover bits from my previous callbacks implementation"}
,{msg: "release notes and code comments tweaks"}
,{msg: "corrected callbacks to set context of callbacks"}
,{msg: "replacing my own code for callbacks with an impelmentation based on jquery deferred"}
,{msg: "deferred view render example for region manager"}
,{msg: "fixed bug in template manager 'clear' that prevented single template from being cleared"}
,{msg: "bind to for region managers, code cleanup, release notes"}
,{msg: "specs to verify context of event functions from region manager events"}
,{msg: "bump version to v0.4.2"}
,{msg: "improving documentation for region managers. release notes for v0.4.2"}
,{msg: "improving the documentation for the region manager"}
,{msg: "trigger opened and closed events from the view manager"}
,{msg: "Merge remote-tracking branch 'redsquare/patch-1' into dev"}
,{msg: "Merge branch 'master' into dev"}
,{msg: "Take advantage of jQuery deferred to take into account overridden render methods who want to take advantage of async template rendering. When a render method passed into msg: \"the .when is not a deferred it will be treated as a resolved Deferred and any doneCallbacks attached will be executed immediately so it is not a breaking change, it does msg: \"however put a dependency on jQuery 1.5+."}
,{msg: "removing a thought from the readme"}
,{msg: "added documentup config"}
,{msg: "fixing documentation issue"}
,{msg: "corrected download links"}
,{msg: "updating the documentation structure for better results on documentup.com"}
,{msg: "intro text tweak in readme, testing out recompile of documentup.com"}
,{msg: "re-minified v0.4.1 after a bit of code cleanup"}
,{msg: "fixing a few code comments"}
,{msg: "Cleanup"}
,{msg: "minor fix to template manager. minified and release v0.4.1"}
,{msg: "trying to fix readme for documentup"}
,{msg: "fixing readme"}
,{msg: "minified for release, v0.4.0"}
,{msg: "release notes tweaks"}
,{msg: "removing backward compatibility w/ backbone v0.5.3"}
,{msg: "typo"}
,{msg: "release notes tweaks"}
,{msg: "Updating to backbone v0.9.1. Release notes for Marionette v0.4.0"}
,{msg: "cleanup"}
,{msg: "fixed the template manager to work with the specs"}
,{msg: "working on template manager and item view, making them more async-template-loading friendly"}
,{msg: "changed the template manager to be more async loading friendly"}
,{msg: "code comments"}
,{msg: "documentation and release notes for 'start' event"}
,{msg: "added onStart callback to options for start method"}
,{msg: "documentation for callbacks object, started collection release notes"}
,{msg: "extraced app initializer code into 'Callbacks' object, which is used to manage a collection of callbacks"}
,{msg: "if the app has already been started, adding an initializer will execute the initializer immediately"}
,{msg: "corrected version # in minified file"}
,{msg: "initialize region managers immediately, when using the addRegions method on app objects"}
,{msg: "minified v0.3.0"}
,{msg: "readme tweaks for v0.3.0"}
,{msg: "collection view explicitly checks for an itemView definition, and throws exception if not found"}
,{msg: "release notes for v0.3.0"}
,{msg: "extracting additional backward compatibility for backbone v0.5.x out to helpers"}
,{msg: "correcting backward compatibility with backbone v0.5.3"}
,{msg: "updating underscore to v1.3.1"}
,{msg: "moving the backbone v0.5.x checks for events, to helper code"}
,{msg: "adopted the standard of  and , based on backbone v0.9.0, for item and collection views, and for region manager"}
,{msg: "bump version to v0.3.0"}
,{msg: "updating backbone to v0.9.0"}
,{msg: "Merge remote-tracking branch 'beardtwizzle/master' into dev"}
,{msg: "don't run things directly"}
,{msg: "adding guard"}
,{msg: "Uses Backbone 0.9's this.$el and on/off rather than bind/unbind where available."}
,{msg: "updated the region manager section of the readme"}
,{msg: "minified for v0.2.6 release"}
,{msg: "documentation, release notes and version bump for v0.2.6"}
,{msg: "executing app initializers with the app object as the context"}
,{msg: "minified for v0.2.5 release"}
,{msg: "docs and release notes saying an error will be thrown if no itemview template is found"}
,{msg: "basic docs for using a collection view as a composite view"}
,{msg: "tweaking where the no template error is thrown. making composite view use a  instead of defaulting to ItemView"}
,{msg: "item view throws an exception if no template is specified, by default"}
,{msg: "fixed the specs for the composite view rendering"}
,{msg: "starting work on composite view rendering through the collection view. failing specs, i think caused by ItemView not rendering without a template"}
,{msg: "updating release notes for working with other dom libraries"}
,{msg: "Merge remote-tracking branch 'aliem/master' into dev"}
,{msg: "tweaking docs for approuter"}
,{msg: "fixed failing test for appRouter using standard routes"}
,{msg: "bump version to v0.2.5"}
,{msg: "started on the release notes for the next version"}
,{msg: "failing test on standard route for appRouter"}
,{msg: "basic docs for appRouter"}
,{msg: "basic specs and code for app router"}
,{msg: "bump version to v0.2.4, release notes, minified"}
,{msg: "return 'this' from item view render"}
,{msg: "return this from collection view render"}
,{msg: "onRender from collection view"}
,{msg: "bump version to v0.2.3, release notes, minified"}
,{msg: "A missing var, a few missing semicolons and deleted unused delarations"}
,{msg: "updating version to v0.2.2. minified and release"}
,{msg: "Merge remote-tracking branch 'yethee/readme' into dev"}
,{msg: "Fixed some typos in readme.md file"}
,{msg: "Used bindTo in the constructor of CollectionView for collection events"}
,{msg: "Fix a variable scope"}
,{msg: "allow Zepto to own $"}
,{msg: "make it work with ender.js instead of jQuery"}
,{msg: "minor doc fixes, noted by @redsquare"}
,{msg: "fixed docs on how template manager retrieves template, by default"}
,{msg: "fixed issue in readme"}
,{msg: "minified v0.2.1 for release"}
,{msg: "collection view docs for add/remove binding"}
,{msg: "documentation for template manager. release notes for v0.2.1"}
,{msg: "specs and more functionality for the template manager"}
,{msg: "changed how getTemplate is called"}
,{msg: "added TemplateManager and bumped version to 0.2.1"}
,{msg: "add/remove children in collection view. always have this.el be  in ItemView and CollectionView"}
,{msg: "have app.vent extend BindTo"}
,{msg: "fixed the minified version for v0.2.0"}
,{msg: "release notes for v0.2.0"}
,{msg: "fixed the renderTemplate and getTemplate methods"}
,{msg: "minified v0.2.0"}
,{msg: "document tweaks"}
,{msg: "adding BindTo methods to Application"}
,{msg: "added docco task"}
,{msg: "adding a close to the collection view, having it close all children. documenting the close process"}
,{msg: "specs and code to close the collection view"}
,{msg: "storing all rendered children in an array on the collection view"}
,{msg: "spec to show overriding appendHtml"}
,{msg: "docs for first bits of collection view"}
,{msg: "first passing specs for collection view"}
,{msg: "outline of first spec for collectionview. not yet passing"}
,{msg: "reordering the Application docs section"}
,{msg: "reducing documentation hierarchy again"}
,{msg: "minor update to docs regarding extend"}
,{msg: "adjusting documentation to be one level less in hierarchy, and move the contents in to better order"}
,{msg: "adding placeholder for collection view"}
,{msg: "better docs for BindTo"}
,{msg: "spec to override renderTemplate"}
,{msg: "more docs for ItemView"}
,{msg: "working on documentation for ItemView"}
,{msg: "specs for the close method of ItemView"}
,{msg: "working on spec outlines for closing / unbinding a view"}
,{msg: "spec for context binding in bindTo"}
,{msg: "failing specs for view closing"}
,{msg: "starting to work on documentation for item view and bindto"}
,{msg: "bump version to v0.2.0 for next release"}
,{msg: "adding BindTo object"}
,{msg: "removed logs"}
,{msg: "first version of the ItemView, with specs"}
,{msg: "Little bit cleaner reuse."}
,{msg: "fixed title of sample app section in docs"}
,{msg: "added Steve Gentile's sample apps to the list of apps"}
,{msg: "Merge pull request #1 from nono/patch-1"}
,{msg: "Add syntax highlighting for examples in the README"}
,{msg: "tweak the quick sample to run on jquery dom ready"}
,{msg: "fixed link to bbclonemail source"}
,{msg: "updated readme to include links to BBCloneMail"}
,{msg: "tweaking the opening text of the 'building an app' documentation"}
,{msg: "corrected event aggregator documentation"}
,{msg: "removed the docs folder"}
,{msg: "added minified version for v0.1.0"}
,{msg: "added jQuery to the module definition"}
,{msg: "set version at v0.1.0"}
,{msg: "adding better documentation for the core of the project"}
,{msg: "added first verison of annodated source html"}
,{msg: "annotating source code with comments, to try out the whole annotated source code generator thing"}
,{msg: "option to specify regions as selectors or as RegionManger constructor functions"}
,{msg: "allow pre and post processing of initializer options"}
,{msg: "added events from the app object for initialize:before and initialize:after"}
,{msg: "fixed syntax error in specs"}
,{msg: "updated example app w/ addRegion"}
,{msg: "added 'addRegion' method to the Application object, to store and auto initialize the regions"}
,{msg: "Merge remote-tracking branch 'origin/master'"}
,{msg: "allow options to be passed into Application initializer, copying them into the instance directly"}
,{msg: "Update readme.md"}
,{msg: "scoped a global that was there by accident, in the example module in the docs"}
,{msg: "runtime and test suite requirements"}
,{msg: "adding a simple example to the docs"}
,{msg: "attach an event aggregator to each application instance"}
,{msg: "first specs for Application object, including initializers with options"}
,{msg: "spec and code to call 'onShow' after rendering and displaying a view"}
,{msg: "spec and code for calling view's 'close' method"}
,{msg: "first passing spec to create a region manager"}
,{msg: "initial repository with jasmine structure, readme and license in place"}]
