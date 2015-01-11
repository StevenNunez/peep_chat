define("peep-chat-client/adapters/application", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    var ApplicationAdapter = DS.RESTAdapter.extend({
      namespace: 'api'
    })

    __exports__["default"] = ApplicationAdapter;
  });
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
define("peep-chat-client/models/message", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      body: DS.attr('string'),
      room: DS.belongsTo('room')
    });
  });
define("peep-chat-client/models/room", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      name: DS.attr('string'),
      messages: DS.hasMany('message')
    });
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
      this.resource("rooms", function(){
        this.resource("room", {path: "/:room_id"})
      });
    });

    __exports__["default"] = Router;
  });
define("peep-chat-client/routes/rooms", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
      model: function(){
        return this.store.find('room');
      }
    });
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
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("Rooms");
      }

      data.buffer.push("<h2 id=\"title\">PeepChat</h2>\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rooms", options) : helperMissing.call(depth0, "link-to", "rooms", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("peep-chat-client/templates/room", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
    /**/) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <div id=\"message\">\n    ");
      stack1 = helpers._triageMustache.call(depth0, "message.body", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      
      data.buffer.push("\nNo Messages\n");
      }

      data.buffer.push("<h3>");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h3>\n\n");
      stack1 = helpers.each.call(depth0, "message", "in", "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("peep-chat-client/templates/rooms", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
    /**/) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    <li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "room", "room", options) : helperMissing.call(depth0, "link-to", "room", "room", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n  ");
      return buffer;
      }
    function program2(depth0,data) {
      
      var stack1;
      stack1 = helpers._triageMustache.call(depth0, "room.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      }

      data.buffer.push("<h2>All Rooms</h2>\n<ul>\n  ");
      stack1 = helpers.each.call(depth0, "room", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>\n\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("peep-chat-client/tests/adapters/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - adapters');
    test('adapters/application.js should pass jshint', function() { 
      ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 5, col 3, Missing semicolon.\n\n1 error'); 
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
define("peep-chat-client/tests/models/message.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/message.js should pass jshint', function() { 
      ok(true, 'models/message.js should pass jshint.'); 
    });
  });
define("peep-chat-client/tests/models/room.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/room.js should pass jshint', function() { 
      ok(true, 'models/room.js should pass jshint.'); 
    });
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
define("peep-chat-client/tests/peep-chat-client/tests/unit/models/message-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - peep-chat-client/tests/unit/models');
    test('peep-chat-client/tests/unit/models/message-test.js should pass jshint', function() { 
      ok(true, 'peep-chat-client/tests/unit/models/message-test.js should pass jshint.'); 
    });
  });
define("peep-chat-client/tests/peep-chat-client/tests/unit/models/room-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - peep-chat-client/tests/unit/models');
    test('peep-chat-client/tests/unit/models/room-test.js should pass jshint', function() { 
      ok(true, 'peep-chat-client/tests/unit/models/room-test.js should pass jshint.'); 
    });
  });
define("peep-chat-client/tests/peep-chat-client/tests/unit/routes/rooms-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - peep-chat-client/tests/unit/routes');
    test('peep-chat-client/tests/unit/routes/rooms-test.js should pass jshint', function() { 
      ok(true, 'peep-chat-client/tests/unit/routes/rooms-test.js should pass jshint.'); 
    });
  });
define("peep-chat-client/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(false, 'router.js should pass jshint.\nrouter.js: line 10, col 47, Missing semicolon.\n\n1 error'); 
    });
  });
define("peep-chat-client/tests/routes/rooms.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/rooms.js should pass jshint', function() { 
      ok(true, 'routes/rooms.js should pass jshint.'); 
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
define("peep-chat-client/tests/unit/models/message-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleForModel = __dependency1__.moduleForModel;
    var test = __dependency1__.test;

    moduleForModel('message', 'Message', {
      // Specify the other units that are required for this test.
      needs: ['model:room']
    });

    test('it exists', function() {
      var model = this.subject();
      // var store = this.store();
      ok(!!model);
    });
  });
define("peep-chat-client/tests/unit/models/room-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleForModel = __dependency1__.moduleForModel;
    var test = __dependency1__.test;

    moduleForModel('room', 'Room', {
      // Specify the other units that are required for this test.
      needs: []
    });

    test('it exists', function() {
      var model = this.subject();
      // var store = this.store();
      ok(!!model);
    });
  });
define("peep-chat-client/tests/unit/routes/rooms-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor('route:rooms', 'RoomsRoute', {
      // Specify the other units that are required for this test.
      // needs: ['controller:foo']
    });

    test('it exists', function() {
      var route = this.subject();
      ok(route);
    });
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