// Configs
S.cfga({
  "defaultToCurrentScreen" : true,
  "secondsBetweenRepeat" : 0.1,
  "checkDefaultsOnLoad" : true,
  "focusCheckWidthMax" : 3000
});

// Monitors
var monLaptop = "1440x900";
var monLg = "1920x1080";

// Operations
var lapChat = S.op("corner", {
  "screen" : monLaptop,
  "direction" : "top-left",
  "width" : "screenSizeX/9",
  "height" : "screenSizeY"
});
var lapMain = lapChat.dup({ "direction" : "top-right", "width" : "8*screenSizeX/9" });
var lgFull = S.op("move", {
  "screen" : monLg,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});
var lgTop = lgFull.dup({ "height" : "screenSizeY/2" });
var lgTopLeft = lgTop.dup({ "width" : "screenSizeX/2" });
var lgTopRight = lgTopLeft.dup({ "x" : "screenOriginX+screenSizeX/2" });
var lgBottom = lgTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
var lgBottomLeft = lgBottom.dup({ "width" : "screenSizeX/3" });
var lgBottomMid = lgBottomLeft.dup({ "x" : "screenOriginX+screenSizeX/3" });
var lgBottomRight = lgBottomLeft.dup({ "x" : "screenOriginX+2*screenSizeX/3" });
var lgLeft = lgTopLeft.dup({ "height" : "screenSizeY" });
var lgRight = lgTopRight.dup({ "height" : "screenSizeY" });

// common layout hashes
var lapMainHash = {
  "operations" : [lapMain],
  "ignore-fail" : true,
  "repeat" : true
};
var lgTopHash  = {
  "operations" : [lgTop],
  "repeat" : true
};
var iTermHash = {
  "operations" : [lgBottomLeft, lgBottomMid, lgBottomRight, lapMain],
  "sort-title" : true,
  "repeat-last" : true
};
var genBrowserHash = function(regex) {
  return {
    "operations" : [function(windowObject) {
      var title = windowObject.title();
      if (title !== undefined && title.match(regex)) {
        windowObject.doOperation(hpRight);
      } else {
        windowObject.doOperation(lapMain);
      }
    }],
    "ignore-fail" : true,
    "repeat" : true
  };
};

// Defaults
// S.def([monLg, monLaptop], twoMonitorLayout);
// S.def([monLaptop], oneMonitorLayout);

// Layout Operations
//var twoMonitor = S.op("layout", { "name" : twoMonitorLayout });
//var oneMonitor = S.op("layout", { "name" : oneMonitorLayout });
// var universalLayout = function() {
//   // Should probably make sure the resolutions match but w/e
//   if (S.screenCount() === 3) {
//     threeMonitor.run();
//   } else if (S.screenCount() === 2) {
//     twoMonitor.run();
//   } else if (S.screenCount() === 1) {
//     oneMonitor.run();
//   }
// };

// Batch bind everything. Less typing.
S.bnda({
  // Layout Bindings
  //"padEnter:ctrl" : universalLayout,
  //"space:ctrl" : universalLayout,

  // Basic Location Bindings
  "pad0:ctrl" : lapChat,
  "[:ctrl" : lapChat,
  "pad.:ctrl" : lapMain,
  "]:ctrl" : lapMain,
  "pad1:ctrl" : lgBottomLeft,
  "pad2:ctrl" : lgBottomMid,
  "pad3:ctrl" : lgBottomRight,
  "pad4:ctrl" : lgLeft,
  "pad5:ctrl" : lgFull,
  "pad6:ctrl" : lgRight,
  "pad7:ctrl" : lgTopLeft,
  "pad8:ctrl" : lgTop,
  "pad9:ctrl" : lgTopRight,
  "pad=:ctrl" : lgTop,
  "pad/:ctrl" : lgBottom,
  "pad*:ctrl" : lgBottomLeft,
  "pad-:ctrl" : lgTopLeft,
  "pad+:ctrl" : lgRight,

  // Resize Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  // "right:ctrl" : S.op("resize", { "width" : "+10%", "height" : "+0" }),
  // "left:ctrl" : S.op("resize", { "width" : "-10%", "height" : "+0" }),
  // "up:ctrl" : S.op("resize", { "width" : "+0", "height" : "-10%" }),
  // "down:ctrl" : S.op("resize", { "width" : "+0", "height" : "+10%" }),
  // "right:alt" : S.op("resize", { "width" : "-10%", "height" : "+0", "anchor" : "bottom-right" }),
  // "left:alt" : S.op("resize", { "width" : "+10%", "height" : "+0", "anchor" : "bottom-right" }),
  // "up:alt" : S.op("resize", { "width" : "+0", "height" : "+10%", "anchor" : "bottom-right" }),
  // "down:alt" : S.op("resize", { "width" : "+0", "height" : "-10%", "anchor" : "bottom-right" }),

  // Push Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  // "right:ctrl;shift" : S.op("push", { "direction" : "right", "style" : "bar-resize:screenSizeX/3" }),
  // "left:ctrl;shift" : S.op("push", { "direction" : "left", "style" : "bar-resize:screenSizeX/3" }),
  // "up:ctrl;shift" : S.op("push", { "direction" : "up", "style" : "bar-resize:screenSizeY/2" }),
  // "down:ctrl;shift" : S.op("push", { "direction" : "down", "style" : "bar-resize:screenSizeY/2" }),

  // Nudge Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  // "right:ctrl;alt" : S.op("nudge", { "x" : "+10%", "y" : "+0" }),
  // "left:ctrl;alt" : S.op("nudge", { "x" : "-10%", "y" : "+0" }),
  // "up:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "-10%" }),
  // "down:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "+10%" }),

  // Throw Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  "pad1:ctrl;alt" : S.op("throw", { "screen" : "2", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "pad2:ctrl;alt" : S.op("throw", { "screen" : "1", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "pad3:ctrl;alt" : S.op("throw", { "screen" : "0", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "right:ctrl;alt;cmd" : S.op("throw", { "screen" : "right", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "left:ctrl;alt;cmd" : S.op("throw", { "screen" : "left", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "up:ctrl;alt;cmd" : S.op("throw", { "screen" : "up", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "down:ctrl;alt;cmd" : S.op("throw", { "screen" : "down", "width" : "screenSizeX", "height" : "screenSizeY" }),

  // Focus Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  "right:cmd" : S.op("focus", { "direction" : "right" }),
  "left:cmd" : S.op("focus", { "direction" : "left" }),
  "up:cmd" : S.op("focus", { "direction" : "up" }),
  "down:cmd" : S.op("focus", { "direction" : "down" }),
  "up:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  "down:cmd;alt" : S.op("focus", { "direction" : "behind" }),

  // Window Hints
  "esc:cmd" : S.op("hint"),

  // Switch currently doesn't work well so I'm commenting it out until I fix it.
  //"tab:cmd" : S.op("switch"),

  // Grid
  "esc:ctrl" : S.op("grid")
});

// Test Cases
S.src(".slate.test", true);
S.src(".slate.test.js", true);

// Log that we're done configuring
S.log("[SLATE] -------------- Finished Loading Config --------------");
