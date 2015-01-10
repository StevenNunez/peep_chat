define("peep-chat-client/app", 
  ["ember","ember/resolver","ember/load-initializers","peep-chat-client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("peep-chat-client/initializers/export-application-global", 
  ["ember","peep-chat-client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("peep-chat-client/router", 
  ["ember","peep-chat-client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function() {
    });

    __exports__["default"] = Router;
  });
define("peep-chat-client/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
    /**/) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      data.buffer.push("<h2 id=\"title\">Welcome to Ember.js</h2>\n\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("peep-chat-client/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("peep-chat-client/tests/helpers/resolver", 
  ["ember/resolver","peep-chat-client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("peep-chat-client/tests/helpers/start-app", 
  ["ember","peep-chat-client/app","peep-chat-client/router","peep-chat-client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("peep-chat-client/tests/peep-chat-client/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - peep-chat-client/tests/helpers');
    test('peep-chat-client/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'peep-chat-client/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("peep-chat-client/tests/peep-chat-client/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - peep-chat-client/tests/helpers');
    test('peep-chat-client/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'peep-chat-client/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("peep-chat-client/tests/peep-chat-client/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - peep-chat-client/tests');
    test('peep-chat-client/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'peep-chat-client/tests/test-helper.js should pass jshint.'); 
    });
  });
define("peep-chat-client/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("peep-chat-client/tests/test-helper", 
  ["peep-chat-client/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
/* jshint ignore:start */

define('peep-chat-client/config/environment', ['ember'], function(Ember) {
  var prefix = 'peep-chat-client';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("peep-chat-client/tests/test-helper");
} else {
  require("peep-chat-client/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=peep-chat-client.map