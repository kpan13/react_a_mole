!function(){try{var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="581ef87e-cca9-4ac1-975c-293fdace480a",n._sentryDebugIdIdentifier="sentry-dbid-581ef87e-cca9-4ac1-975c-293fdace480a")}catch(n){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"458d6b32"};"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2514],{37490:function(n,e,r){var t=r(66626),o=r(63257),u=r(4216),s=r(77450),i=r(12933),a=r(18025),l=r(19068),c=r(82230),d=r(94778),g=r(72093),f=r(28966),h=r(39475),p=r(51406),m=r(47336),v=r.n(m),_=r(85421),C=r(50959),b=r(43891),y=function(n){var e=n.children;return(0,u.tZ)(d.G,{css:[g.l0.position.absolute,g.l0.width("100%"),g.l0.height("100%"),(0,s.iv)({backgroundColor:p.Z.neutrals.black64})],children:(0,u.tZ)(d.G,{css:[g.l0.height("100%"),g.l0.justify.center,g.l0.align.center,g.l0.pb(24),g.l0.zIndex(1)],children:e})})},U=function(n){var e=n.title,r=n.subtitle,t=n.coverImage,a=n.canUnlock,h=n.goto,p=(0,_.useRouter)(),m=(0,u.tZ)(f.Z,{color:"white",height:16,width:16});return(0,u.tZ)(u.HY,{children:(0,u.BX)(d.G,{tag:"li",css:[{aspectRatio:"3 / 2"},g.l0.minWidth(230),g.l0.flex.grow(1),g.l0.position.relative,g.l0.borderRadius(8),g.l0.overflow("hidden"),a?g.l0.backgroundColor.backgroundHigher:g.l0.backgroundColor.backgroundDefault].concat((0,o._)(a?[l.gU.filled,g.l0.cursor.pointer]:[])),onClick:function(){a&&p.push(h)},children:[(0,u.tZ)(d.G,{"aria-label":"cover image for ".concat(e),css:[g.l0.width("100%"),g.l0.height("100%"),(0,s.iv)({background:"url(".concat((0,i.X)({src:t,width:460}),")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"})]}),(0,u.tZ)(d.G,{css:[g.l0.position.absolute,g.l0.bottom(0),g.l0.width("100%"),g.l0.height("65%"),{background:"linear-gradient(rgba(33,36,44,0), rgba(33,36,44,1))"}]}),!a&&(0,u.tZ)(u.HY,{children:(0,u.tZ)(y,{children:m})}),(0,u.BX)("div",{css:[g.l0.colWithGap(4),g.l0.position.absolute,g.l0.bottom(0),g.l0.left(0),g.l0.p(12),(0,s.iv)({color:"white"})],children:[(0,u.tZ)(c.xv,{variant:"subheadDefault",css:[{overflowWrap:"break-word",wordBreak:"break-word",display:"block"}],children:e}),(0,u.tZ)(c.xv,{variant:"text",multiline:!1,children:r})]})]})})};e.Z=function(n){var e=n.userCourse,r=n.closable,o=(0,b.QW)(e.courseSlug),s=e.lessons||[],i=(0,a.F)(o.lessons,s),l=(0,a.a)(i).ordinal-1,f=o.lessons,p=l<f.length-4?f.slice(l,l+4):f.slice(-4),m=(0,t._)((0,C.useState)(!1),1)[0],_=(0,h.o)("100-days-of-python"),y=_.isLoading,w=_.isDone;return m?(0,u.tZ)(u.HY,{children:(0,u.BX)(c.xv,{multiline:!1,children:["You can always resume the course from the"," ",(0,u.tZ)(v(),{legacyBehavior:!0,href:"/learn",css:[g.l0.fontWeight.medium],children:"Learn Page"})]})}):r&&(w||y)?null:(0,u.tZ)("section",{children:(0,u.BX)(d.G,{css:[g.l0.colWithGap(8)],children:[(0,u.tZ)(c.h4,{variant:"subheadBig",level:2,children:"Learn"}),(0,u.tZ)(d.G,{css:[g.l0.flex.row,g.l0.justify.spaceBetween,g.l0.align.center],children:(0,u.BX)(c.xv,{variant:"text",multiline:!1,children:["Jump back in to ",o.title]})}),(0,u.tZ)(d.G,{tag:"ul",css:[g.l0.flex.row,g.l0.overflowX("auto"),g.l0.align.center,g.l0.rowWithGap(16),g.l0.pt(8),{"&::-webkit-scrollbar":{width:0},scrollbarWidth:"none"}],children:p.map(function(n,e){var r;return(0,u.tZ)(U,{title:n.title,subtitle:n.ordinalLabel,coverImage:(0,b.hS)(o.slug,n),goto:"/learn/".concat(o.slug,"/hub?utm_source=widget"),canUnlock:l<(r=f.length)-4?0===e:4-(r-l-1)>e},n.slug)})})]})})}},42339:function(n,e,r){r.d(e,{LJ:function(){return v},aq:function(){return p},zV:function(){return C}});var t=r(41733),o=r(21262),u=r(71440),s=r(99165);function i(){var n=(0,o._)(["\n  fragment CurrentUserCourse on UserCourse {\n    __typename\n    id\n    courseSlug\n    timeCreated\n  }\n"]);return i=function(){return n},n}function a(){var n=(0,o._)(["\n  fragment CurrentUserCourseLessonRepl on Repl {\n    __typename\n    id\n    url\n    timeUpdated\n  }\n"]);return a=function(){return n},n}function l(){var n=(0,o._)(["\n  fragment CurrentUserCourseLesson on UserCourseLesson {\n    __typename\n    id\n    lessonSlug\n    timeCreated\n    timeCompleted\n    course {\n      id\n      ...CurrentUserCourse\n    }\n    repl {\n      id\n      ...CurrentUserCourseLessonRepl\n    }\n  }\n  ","\n  ","\n"]);return l=function(){return n},n}function c(){var n=(0,o._)(["\n  mutation StartLesson($input: CreateUserCourseLessonInput!) {\n    createUserCourseLesson(input: $input) {\n      ... on UserCourseLessonResult {\n        __typename\n        userCourseLesson {\n          id\n          ...CurrentUserCourseLesson\n        }\n      }\n      ... on NotFoundError {\n        __typename\n        message\n      }\n      ... on UnauthorizedError {\n        __typename\n        message\n      }\n      ... on UserError {\n        __typename\n        message\n      }\n    }\n  }\n  ","\n"]);return c=function(){return n},n}function d(){var n=(0,o._)(["\n  mutation RestartLesson($input: RestartUserCourseLessonInput!) {\n    restartUserCourseLesson(input: $input) {\n      ... on UserCourseLessonResult {\n        __typename\n        userCourseLesson {\n          id\n          ...CurrentUserCourseLesson\n        }\n      }\n      ... on NotFoundError {\n        __typename\n        message\n      }\n      ... on UnauthorizedError {\n        __typename\n        message\n      }\n      ... on UserError {\n        __typename\n        message\n      }\n    }\n  }\n  ","\n"]);return d=function(){return n},n}var g={},f=(0,u.Ps)(i()),h=(0,u.Ps)(a()),p=(0,u.Ps)(l(),f,h),m=(0,u.Ps)(c(),p);function v(n){var e=(0,t._)({},g,n);return s.D(m,e)}var _=(0,u.Ps)(d(),p);function C(n){var e=(0,t._)({},g,n);return s.D(_,e)}},18025:function(n,e,r){r.d(e,{F:function(){return s},a:function(){return u}});var t=r(41733),o=r(30509),u=function(n){for(var e,r,t=void 0,o=n[0];void 0===t&&void 0!==o;){if((null===(e=o.userState)||void 0===e?void 0:e.timeCompleted)!=null||(null===(r=o.next)||void 0===r?void 0:r.userState)!=null){o=o.next;continue}t=o}return null!=t?t:n[n.length-1]},s=function(n,e){for(var r=e.reduce(function(n,e){return n.set(e.lessonSlug,e),n},new Map),u=[],s=0;s<n.length;s++){var i=n[s],a=(0,o._)((0,t._)({},i),{userState:r.get(i.slug),prev:u[s-1],next:void 0});a.prev&&(a.prev.next=a),u.push(a)}return u}},28966:function(n,e,r){var t=r(41733),o=r(30509),u=r(4216);r(50959),e.Z=function(n){return(0,u.tZ)("svg",(0,o._)((0,t._)({width:20,height:18,viewBox:"0 0 14 18",fill:n.color},n),{children:(0,u.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 2h2a2 2 0 012 2v2c0 .364-.097.706-.268 1H4.268A1.99 1.99 0 014 6V4a2 2 0 012-2zM2.126 7A4.007 4.007 0 012 6V4a4 4 0 014-4h2a4 4 0 014 4v2c0 .345-.044.68-.126 1H12a2 2 0 012 2v7a2 2 0 01-2 2H2a2 2 0 01-2-2V9a2 2 0 012-2h.126z"})}))}},99067:function(n,e,r){r.d(e,{ap:function(){return m},fS:function(){return _}});var t=r(41733),o=r(21262),u=r(71440);function s(){var n=(0,o._)(["\n  fragment ProductUpdatesModuleCurrentUser on CurrentUser {\n    id\n    hasSeenReplitCoreTour: tourSeen(name: $replitCoreTourName)\n    hasSeenChangelogTour: tourSeen(name: $changelogTourName)\n    hasSeenScheduledDeploymentsTour: tourSeen(\n      name: $scheduledDeploymentsTourName\n    )\n    hasReplitMembership: subscriptionIsType(subscriptionType: HACKER_PRO)\n    isPrivacyLimitedAccess: hasPrivacyRole\n  }\n"]);return s=function(){return n},n}function i(){var n=(0,o._)(["\n  query ProductUpdatesModule(\n    $replitCoreTourName: String!\n    $changelogTourName: String!\n    $scheduledDeploymentsTourName: String!\n  ) {\n    currentUser {\n      id\n      ...ProductUpdatesModuleCurrentUser\n    }\n  }\n  ","\n"]);return i=function(){return n},n}var a=(0,u.Ps)(s());i();var l=r(76791),c=r(23606),d=r(42339),g=r(58995);function f(){var n=(0,o._)(["\n  fragment HomePageCourse on UserCourse {\n    id\n    __typename\n    courseSlug\n    timeCreated\n    lessons {\n      id\n      ...CurrentUserCourseLesson\n    }\n  }\n  ","\n"]);return f=function(){return n},n}function h(){var n=(0,o._)(["\n  query HomePage(\n    $courseSlug: String!\n    $replitCoreTourName: String!\n    $changelogTourName: String!\n    $scheduledDeploymentsTourName: String!\n    $hostingDeploymentsInput: CurentUserHostingDeploymentsInput!\n  ) {\n    currentUser {\n      id\n      isTeacher: hasRole(role: TEACHER)\n      isVerified\n      timeCreated\n      isFirewallMode\n      course(slug: $courseSlug) {\n        ... on UserCourse {\n          id\n          ...HomePageCourse\n        }\n        ... on NotFoundError {\n          __typename\n        }\n        ... on UnauthorizedError {\n          __typename\n        }\n        ... on UserError {\n          __typename\n        }\n      }\n      ...ProductUpdatesModuleCurrentUser\n      ...HomeRecentReplsCurrentUserLoadingInfo\n      ...HomeDeploymentsSectionCurrentUserLoadingInfo\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return h=function(){return n},n}var p={},m=(0,u.Ps)(f(),d.aq),v=(0,u.Ps)(h(),m,a,l.kF,c.Kt);function _(n){var e=(0,t._)({},p,n);return g.a(v,e)}}}]);
//# sourceMappingURL=2514-2c64ece826d1f87b.js.map