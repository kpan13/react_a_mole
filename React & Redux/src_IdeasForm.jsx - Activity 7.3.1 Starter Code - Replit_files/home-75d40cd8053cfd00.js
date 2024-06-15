!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7dbc15f7-5585-447b-bb7f-d320673278ef",e._sentryDebugIdIdentifier="sentry-dbid-7dbc15f7-5585-447b-bb7f-d320673278ef")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"458d6b32"},(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{15979:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return t(36419)}])},6475:function(e,n,t){"use strict";t.d(n,{p:function(){return et}});var r,o,i=t(42516),l=t(41733),a=t(30509),s=t(4216),c=t(21262),u=t(71440);function d(){var e=(0,c._)(["\n  fragment RecommendedBountyCardBounty on Bounty {\n    id\n    title\n    timeCreated\n    applicationCount\n    solverPayout\n    hasCurrentUserApplied\n    slug\n    user {\n      id\n      url\n      username\n      image\n    }\n  }\n"]);return d=function(){return e},e}var p=(0,u.Ps)(d()),h=t(58995);function m(){var e=(0,c._)(["\n  fragment RecommendedBountiesModuleBounty on Bounty {\n    id\n    ...RecommendedBountyCardBounty\n  }\n  ","\n"]);return m=function(){return e},e}function f(){var e=(0,c._)(["\n  query RecommendedBountiesModule($input: GetRecommendedBountiesForUserInput!) {\n    totalBountiesCyclesValue\n    getRecommendedBountiesForUser(input: $input) {\n      __typename\n      ... on GetRecommendedBountiesForUserResult {\n        results {\n          id\n          ...RecommendedBountiesModuleBounty\n        }\n      }\n      ... on TooManyRequestsError {\n        message\n      }\n      ... on UnauthorizedError {\n        message\n      }\n      ... on UserError {\n        message\n      }\n    }\n  }\n  ","\n"]);return f=function(){return e},e}var g={},v=(0,u.Ps)(m(),p),y=(0,u.Ps)(f(),v),Z=t(63257),b=t(57685),w=t(11715),_=t(35163),C=t(10495),x=t(85638),B=t(19068),G=t(64479),R=t(82230),S=t(4276),D=t(94778),k=t(49224),T=t(59947),E=t(33359),X=t(59249),M=t(24927),U=t(72093),W=t(51950),A=t(641),I=t(47336),L=t.n(I),N=t(50959),H=t(27649),P=[B.gU.filledAndOutlined,U.l0.p(8),U.l0.borderRadius(8)],V=(0,k.X)({self:(0,Z._)(P).concat([U.l0.colWithGap(12),U.l0.position.relative]),loadingCard:(0,Z._)(P).concat([U.l0.height(170),U.l0.position.relative]),contentWrapper:[U.l0.colWithGap(8)],replTitleLink:[U.l0.focusRingOnAfter,{outline:"none",color:"inherit","::after":{borderRadius:U.TV.space8,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,display:"block",zIndex:1}}],replTitle:[U.l0.minHeight(44.8)],payoutContainer:[U.l0.rowWithGap(8),U.l0.align.center],payoutCyclesInfo:[U.l0.color.foregroundDimmest,U.l0.flex.growAndShrink(1)],payoutCycles:[U.l0.rowWithGap(2),U.l0.align.center],payoutUsdInfo:[U.l0.color.accentPositiveStronger],applicationCount:[U.l0.color.foregroundDimmer,U.l0.rowWithGap(4),U.l0.align.center],userLink:[U.l0.flex.growAndShrink(1),U.l0.focusRing,{"&:focus":{outlineOffset:2}},U.l0.borderRadius(12)],userInfoContainer:[U.l0.rowWithGap(16),U.l0.justify.spaceBetween],postingInfo:[U.l0.rowWithGap(4),U.l0.color.foregroundDimmest,U.l0.flex.shrink(1),U.l0.align.center],poster:[U.l0.zIndex(1)],userComponent:[U.l0.rowWithGap(8),U.l0.color.foregroundDimmer],applyButtonContainer:[U.l0.zIndex(1)]});function O(e){var n=e.bounty,t=e.className,r=n.user?(0,b.sJ)({username:n.user.username,slug:n.slug}):null;return(0,s.BX)(G.Tg,{css:V.self,role:"article",className:t,children:[(0,s.BX)(D.G,{css:V.contentWrapper,children:[(0,s.BX)(D.G,{css:V.payoutContainer,children:[(0,s.tZ)(R.xv,{variant:"subheadDefault",css:V.payoutUsdInfo,multiline:!1,children:(0,_.$E)(n.solverPayout)}),(0,s.BX)(R.xv,{variant:"text",css:V.payoutCyclesInfo,multiline:!1,children:[(0,s.BX)(D.G,{css:V.payoutCycles,children:[(0,s.tZ)(E.Z,{size:16,alt:""}),(0,s.tZ)("span",{children:n.solverPayout.toLocaleString()})]}),(0,s.tZ)(H.T,{children:"Cycles"})]})]}),(0,s.tZ)(R.h4,{level:3,variant:"subheadDefault",children:r?(0,s.tZ)(L(),(0,a._)((0,l._)({legacyBehavior:!0},r),{passHref:!0,children:(0,s.tZ)("a",{css:V.replTitleLink,children:(0,s.tZ)(R.xv,{maxLines:2,css:[V.replTitle],children:n.title})})})):n.title}),(0,s.BX)(D.G,{css:V.userInfoContainer,children:[(0,s.BX)(D.G,{css:V.postingInfo,children:[n.user?(0,s.BX)(s.HY,{children:[(0,s.tZ)(W.Z,{username:n.user.username,css:V.poster,children:(0,s.tZ)(L(),(0,a._)((0,l._)({legacyBehavior:!0},(0,A.Ru)(n.user)),{passHref:!0,children:(0,s.tZ)(D.G,{tag:"a",css:V.userLink,children:(0,s.tZ)(S.n,{src:n.user.image,username:n.user.username,small:!0,css:V.userComponent})})}))}),(0,s.tZ)(R.xv,{color:"dimmest","aria-hidden":!0,multiline:!1,children:"•"})]}):null,(0,s.tZ)(R.xv,{color:"dimmest",multiline:!1,children:(0,C.F)(new Date(n.timeCreated))})]}),(0,s.BX)(D.G,{css:V.applicationCount,children:[(0,s.tZ)(M.Z,{size:16}),(0,s.tZ)(R.xv,{color:"dimmer",variant:"small",children:n.applicationCount})]})]})]}),r?(0,s.tZ)(G.Tg,{elevated:!0,css:V.applyButtonContainer,children:n.hasCurrentUserApplied?(0,s.tZ)(x.Z,(0,l._)({iconLeft:(0,s.tZ)(T.Z,{}),disabled:!0,variant:"outlined",text:"Applied"},r)):(0,s.tZ)(x.Z,(0,l._)({target:"_blank",iconRight:(0,s.tZ)(X.Z,{}),text:"Apply Now!"},r))}):null]})}function z(e){var n=e.className,t=(0,N.useId)();return(0,s.tZ)(G.Tg,{css:V.loadingCard,className:n,children:(0,s.BX)(w.Z,{speed:2,backgroundColor:U.TV.backgroundHighest,foregroundColor:U.TV.backgroundHigher,uniqueKey:t,children:[(0,s.tZ)("rect",{x:"0",y:"2",rx:"6",ry:"6",width:"90",height:"19"}),(0,s.tZ)("rect",{x:"100",y:"2",rx:"6",ry:"6",width:"75",height:"19"}),(0,s.tZ)("rect",{x:"0",y:"30",rx:"6",ry:"6",width:"100%",height:"19"}),(0,s.tZ)("rect",{x:"0",y:"57",rx:"6",ry:"6",width:"80%",height:"19"}),(0,s.tZ)("circle",{cx:"14",cy:"96",r:"12"}),(0,s.tZ)("rect",{x:"34",y:"87",rx:"6",ry:"6",width:"150",height:"19"}),(0,s.tZ)("rect",{x:"0",y:"118",rx:"6",ry:"6",width:"100%",height:"32"})]})})}var F=t(22224),j=t(16029),q=t(97056),Y=t(99236),$=t(48345),K=t(29252),J=t(87128),Q=t(39475),ee=(0,k.X)({self:[U.l0.colWithGap(12)],headerRow:[U.l0.rowWithGap(12),U.l0.justify.spaceBetween,U.l0.align.center],largeScreenGrid:[(r={},(0,i._)(r,j.Z.mobile,U.l0.display.none),(0,i._)(r,"display","grid"),(0,i._)(r,"gridTemplateColumns","repeat(auto-fill, minmax(320px, 1fr))"),(0,i._)(r,"gap",U.TV.space16),(0,i._)(r,"gridAutoFlow","dense"),r)],smallScreenScrollContainer:[(o={},(0,i._)(o,j.Z.tablet,U.l0.display.none),(0,i._)(o,j.Z.desktop,U.l0.display.none),(0,i._)(o,"marginLeft","calc(-1 * ".concat(U.TV.space32,")")),(0,i._)(o,"marginRight","calc(-1 * ".concat(U.TV.space32,")")),o)],mobileWrapper:[U.l0.width("90vw"),U.l0.maxWidth(320)],buttonContainer:[U.l0.colWithGap(8),(0,i._)({},U.BC.min("mobileMax"),[U.l0.colWithGap(0),U.l0.rowWithGap(8)])]});function en(e){var n=e.bounties,t=e.loading,r=e.isMobile;return t?(0,s.tZ)(s.HY,{children:(0,q.UV)(3).map(function(e,n){return(0,s.tZ)(D.G,{tag:"li",children:(0,s.tZ)(z,{css:r?ee.mobileWrapper:void 0})},"view-".concat(n))})}):(0,s.tZ)(s.HY,{children:n.map(function(e){return(0,s.tZ)(D.G,{tag:"li",children:(0,s.tZ)(O,{bounty:e,css:r?ee.mobileWrapper:void 0})},e.id)})})}function et(){var e,n,t,r,o=(e=(0,l._)({},g,{variables:{input:{count:3}},ssr:!1}),h.a(y,e)),i=o.data,c=o.loading,u=o.error,d=(0,Q.o)("bounties-home-module"),p=null!==(t=null==u?void 0:u.message)&&void 0!==t?t:(null==i?void 0:null===(n=i.getRecommendedBountiesForUser)||void 0===n?void 0:n.__typename)&&"GetRecommendedBountiesForUserResult"!==i.getRecommendedBountiesForUser.__typename?i.getRecommendedBountiesForUser.message:null,m=(null==i?void 0:i.getRecommendedBountiesForUser.__typename)==="GetRecommendedBountiesForUserResult"?i.getRecommendedBountiesForUser.results:[],f=null!==(r=null==i?void 0:i.totalBountiesCyclesValue)&&void 0!==r?r:null,v=null!=f&&f>=1e5?"Explore $".concat(Math.floor(f/100/1e3).toLocaleString(),"K+ in Open Bounties"):"Explore Bounties";return d.isLoading||d.isDone?null:(0,s.BX)(D.G,{tag:"section",css:ee.self,children:[(0,s.tZ)(D.G,{css:ee.headerRow,children:(0,s.tZ)(R.h4,{variant:"subheadBig",level:2,children:"Bounties"})}),p?(0,s.tZ)(Y.E,{icon:(0,s.tZ)(J.Z,{}),text:p}):null,(0,s.tZ)(D.G,{children:(0,s.tZ)(D.G,{tag:"ul",css:ee.largeScreenGrid,children:(0,s.tZ)(en,{loading:c,bounties:m,isMobile:!1})})}),(0,s.tZ)(F.Z,{tag:"ul",css:ee.smallScreenScrollContainer,gap:16,inset:32,children:(0,s.tZ)(en,{loading:c,bounties:m,isMobile:!0})}),(0,s.BX)(D.G,{css:ee.buttonContainer,children:[(0,s.tZ)(x.Z,(0,a._)((0,l._)({},(0,b.sP)({query:{create:!0}})),{iconLeft:(0,s.tZ)(K.Z,{}),text:"Create a Bounty",variant:"outlined"})),(0,s.tZ)(x.Z,(0,a._)((0,l._)({},(0,b.sP)()),{iconLeft:(0,s.tZ)($.Z,{}),text:v,variant:"outlined"}))]})]})}},90594:function(e,n,t){"use strict";var r=t(42516),o=t(4216),i=t(94778),l=t(49224),a=t(72093),s=t(98674),c=(0,l.X)({container:[a.l0.rowWithGap(8),a.l0.display.flex,a.l0.align.center,a.l0.justify.center,a.l0.backgroundColor.accentPrimaryDimmest,a.l0.minHeight(58),a.l0.width("100%"),a.l0.p(12),(0,r._)({},(0,s.EM)("mobileMax"),a.l0.colWithGap(16)),a.l0.flex.growAndShrink(1)]});n.Z=function(e){return(0,o.tZ)(i.G,{css:c.container,children:(0,o.tZ)("span",{dangerouslySetInnerHTML:{__html:e.message}})})}},22224:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(41733),o=t(30509),i=t(98924),l=t(4216),a=t(94778),s=t(49224),c=t(72093);t(50959);var u=(0,s.X)({self:[{overflowX:"auto",overflowY:"hidden","::-webkit-scrollbar":[c.l0.display.none]}]});function d(e){var n=e.gap,t=e.inset,s=e.children,d=e.className,p=(0,i._)(e,["gap","inset","children","className"]);return(0,l.tZ)(a.G,(0,o._)((0,r._)({className:d,css:u.self},p),{children:(0,l.tZ)(a.G,{css:[c.l0.px(t),c.l0.rowWithGap(n),{width:"fit-content"}],children:s})}))}},33723:function(e,n,t){"use strict";var r=t(4216),o=t(15235),i=t(85763),l=t(82230),a=t(94778),s=t(64318),c=t(90733),u=t(72093),d=t(85421);n.Z=function(e){var n=e.closeBanner,t=(0,d.useRouter)();return(0,r.BX)(a.G,{css:[u.l0.borderRadius(4),u.l0.p(16),u.l0.backgroundColor.orangeDimmest,u.l0.colWithGap(16),{border:"1px solid ".concat(u.TV.orangeDimmer)}],children:[(0,r.BX)(a.G,{css:[u.l0.flex.row,u.l0.justify.spaceBetween],children:[(0,r.BX)(a.G,{css:[u.l0.rowWithGap(8),u.l0.align.center],children:[(0,r.tZ)(c.Z,{css:[u.l0.color.orangeStrongest,u.l0.width(24),u.l0.height(24)]}),(0,r.tZ)(l.xv,{css:[u.l0.color.orangeStrongest],variant:"subheadBig",multiline:!1,children:"You are in Firewall Mode"})]}),(0,r.tZ)(i.hU,{colorway:"warning",alt:"Close firewall mode banner",tooltipBehavior:"hidden",onClick:n,children:(0,r.tZ)(s.Z,{css:[u.l0.color.orangeStrongest,u.l0.width(24),u.l0.height(24),u.l0.cursor.pointer]})})]}),(0,r.tZ)(l.xv,{css:[u.l0.color.orangeStrongest],variant:"subheadDefault",children:"Some pages on Replit are blocked. Repls are blocked from internet access and may not function as expected."}),(0,r.tZ)(a.G,{css:[u.l0.align.start],children:(0,r.tZ)(o.zx,{text:"Exit Firewall Mode",onClick:function(){window.location.href="https://www.replit.com/".concat(t.pathname)},colorway:"warning"})})]})}},44985:function(e,n,t){"use strict";var r=t(4216),o=t(15235),i=t(94778),l=t(37978);n.Z=function(e){var n=e.innerRef,t=e.onClick;return(0,r.tZ)(i.G,{innerRef:n,children:(0,r.tZ)(o.zx,{variant:"outlined",css:{background:"transparent"},iconLeft:(0,r.tZ)(l.Z,{}),text:"Customize Home",onClick:t})})}},44229:function(e,n,t){"use strict";t.d(n,{Z:function(){return U}});var r=t(27387),o=t(66626),i=t(96583),l=t(4216),a=t(41733),s=t(21262),c=t(71440),u=t(78711),d=t(99165);function p(){var e=(0,s._)(["\n  query HomePageModulesSeen($tours: [String!]!) {\n    currentUser {\n      id\n      toursSeen(tours: $tours) {\n        id\n        seen\n      }\n    }\n  }\n"]);return p=function(){return e},e}function h(){var e=(0,s._)(["\n  mutation HomePageModulesUpdate($tourId: String!, $enabled: Boolean!) {\n    updateHomeModule(input: { tourId: $tourId, enabled: $enabled }) {\n      ... on UserError {\n        __typename\n        message\n      }\n      ... on UnauthorizedError {\n        __typename\n        message\n      }\n      ... on UpdateHomeModuleResult {\n        __typename\n        tour {\n          id\n          seen\n        }\n      }\n    }\n  }\n"]);return h=function(){return e},e}var m={},f=(0,c.Ps)(p()),g=(0,c.Ps)(h()),v=t(50959),y=t(60305),Z=function(){(0,y.j)(y.U3.MODAL_VIEWED,{modalName:"Customize Home Dialog"})},b=function(e){(0,y.j)(y.U3.HOME_MODULE_TOGGLED,e)},w=function(e){(0,y.yV)({id:e.userId,activeModules:e.activeModules})},_=t(66403),C=t(69170),x=t(15235),B=t(45271),G=t(78803),R=t(82230),S=t(64432),D=t(94778),k=t(59947),T=t(29318),E=t(72093),X=[{id:"recent-repls-home-module",name:"Recent Repls",toggleable:!1},{id:"100-days-of-python",name:"Learn",toggleable:!0},{id:"bounties-home-module",name:"Bounties",toggleable:!0}],M=function(e){var n=e.module,t=e.isSelected,r=e.onChange;return(0,l.tZ)(G.r,{id:n.id,value:n.name,isDisabled:!n.toggleable,isSelected:t,onChange:r,children:(0,l.tZ)(R.xv,{css:[n.toggleable?void 0:E.l0.color.foregroundDimmest,E.l0.cursor.pointer],children:n.name})})},U=function(e){var n,t=e.userHasCourse,s=e.isOpen,c=e.onRequestClose,p=(0,C.Z)().showConfirm,h=(0,o._)((0,v.useState)(!1),2),y=h[0],G=h[1],U=(0,_.d)(),W=X.filter(function(e){return e.toggleable}).map(function(e){var n,t,r,i,l,c,p,h,y,Z,b,w,_,C;return n=e.id,l=(i=(0,o._)((t=(0,a._)({},m,{variables:{tours:n}}),u.t(f,t)),2))[0],p=(c=i[1]).data,h=c.loading,y=!(null==p?void 0:null===(r=p.currentUser)||void 0===r?void 0:r.toursSeen[0].seen),b=(Z=(0,o._)((0,v.useState)(y),2))[0],w=Z[1],(0,v.useEffect)(function(){s&&l()},[l,s]),(0,v.useEffect)(function(){w(y)},[y]),C=(0,o._)((_=(0,a._)({},m,{variables:{tourId:n,enabled:b},optimisticResponse:{__typename:"RootMutationType",updateHomeModule:{__typename:"UpdateHomeModuleResult",tour:{__typename:"TourSeen",id:n,seen:!b}}}}),d.D(g,_)),1)[0],{id:n,isLoading:h,initialIsModuleEnabled:y,isModuleEnabled:b,setModuleEnabled:w,updateModule:C}});(0,v.useEffect)(function(){s&&Z()},[s]);var A=X;t||(A=X.filter(function(e){return"100-days-of-python"!==e.id}));var I=W.some(function(e){return e.isLoading}),L=(n=(0,r._)(function(){var e;return(0,i.Jh)(this,function(n){switch(n.label){case 0:return G(!0),[4,Promise.all(W.map(function(e){return e.updateModule()}))];case 1:return n.sent(),U&&(e=W.filter(function(e){return e.isModuleEnabled}).map(function(e){return e.id}),w({userId:U.toString(),activeModules:e})),W.forEach(function(e){e.isModuleEnabled!==e.initialIsModuleEnabled&&b({module:e.id,action:e.isModuleEnabled?"enable":"disable"})}),G(!1),c(),p("Updated home"),[2]}})}),function(){return n.apply(this,arguments)});return I?(0,l.tZ)(D.G,{css:[E.l0.justify.center,E.l0.align.center,E.l0.minHeight(400),E.l0.minWidth(500)],children:(0,l.tZ)(T.Z,{size:24})}):(0,l.tZ)(B.u,{isOpen:s,onRequestClose:c,centered:!0,children:(0,l.BX)(D.G,{css:[E.l0.colWithGap(24)],children:[(0,l.tZ)(R.h4,{variant:"headerDefault",level:1,children:"Customize Home"}),(0,l.tZ)(R.xv,{children:"Choose which modules you want to keep on the homepage."}),(0,l.tZ)(D.G,{css:[E.l0.colWithGap(12)],children:A.map(function(e){var n;return(0,l.tZ)(D.G,{css:[E.l0.rowWithGap(8),E.l0.align.center],children:e.toggleable?(0,l.tZ)(l.HY,{children:(0,l.tZ)(M,{module:e,isSelected:null===(n=W.find(function(n){return n.id===e.id}))||void 0===n?void 0:n.isModuleEnabled,onChange:function(n){var t;null===(t=W.find(function(n){return n.id===e.id}))||void 0===t||t.setModuleEnabled(n)}})}):(0,l.tZ)(l.HY,{children:(0,l.tZ)(S.u,{tooltip:(0,l.BX)(R.xv,{children:[e.name," cannot be toggled off."]}),children:(0,l.tZ)(M,{module:e,isSelected:!0,onChange:void 0})})})},e.id)})}),(0,l.BX)(D.G,{css:[E.l0.rowWithGap(12),E.l0.justify.end],children:[(0,l.tZ)(x.zx,{text:"Cancel",onClick:c}),(0,l.tZ)(x.zx,{iconLeft:y?(0,l.tZ)(T.Z,{}):(0,l.tZ)(k.Z,{}),text:"Save Changes",colorway:"primary",onClick:L,loading:y})]})]})})}},36117:function(e,n,t){"use strict";var r=t(41733),o=t(30509),i=t(66626),l=t(4216),a=t(32317),s=t(17971),c=t(82230),u=t(64432),d=t(23987),p=t(94778),h=t(49224),m=t(72093),f=t(98250),g=t(50959),v=t(34335),y=(0,h.X)({tourArrow:[m.l0.zIndex(a.bf+2),{"&::after":[m.l0.backgroundColor.accentPrimaryDimmest,{top:"-7px",borderTop:"1px solid ".concat(m.TV.accentPrimaryDimmer),borderLeft:"1px solid ".concat(m.TV.accentPrimaryDimmer),borderRight:"none",borderBottom:"none"}]}]}),Z=new Date("2023-08-09"),b=function(){return(0,l.BX)(p.G,{css:[m.l0.pl(4),m.l0.textAlign.left],children:[(0,l.tZ)(c.xv,{variant:"subheadDefault",multiline:!1,children:"You can now customize your homepage"}),(0,l.tZ)(p.G,{css:m.l0.pt(8),children:"Select modules to toggle on or off."})]})};n.Z=function(e){var n=e.targetElement,t=e.userTimeCreated,c=e.manualDismiss,h=void 0!==c&&c,m=(0,f.Z)("home","home-page-modules-tooltip"),w=m.shouldDisplay,_=m.register,C=m.dismiss,x=(0,i._)((0,g.useState)(!0),2),B=x[0],G=x[1],R=(0,i._)((0,g.useState)(null),2),S=R[0],D=R[1],k=(0,i._)((0,g.useState)(null),2),T=k[0],E=k[1],X=(0,v.D)(n,S,{placement:"bottom",modifiers:[{name:"arrow",options:{element:T,padding:8}},{name:"offset",options:{offset:[0,16]}},{name:"preventOverflow",options:{padding:8}}]}),M=t<Z;return(0,g.useEffect)(function(){_&&M&&_()},[_,M]),(0,g.useEffect)(function(){h&&(C(),G(!1))},[h,C]),(0,l.tZ)(l.HY,{children:n&&w&&B&&M?(0,l.tZ)(s.h,{portalContainer:n,children:(0,l.BX)(p.G,(0,o._)((0,r._)({innerRef:D,style:X.styles.popper,css:{zIndex:a.bf+1}},X.attributes.popper),{children:[(0,l.tZ)("span",{style:X.styles.arrow,css:[u.wk,y.tourArrow],ref:E}),(0,l.tZ)(d.O,{content:b,onDismiss:function(){C(),G(!1)},cypressCloseData:"home-modules-tour-close-button"})]}))}):null})}},17527:function(e,n,t){"use strict";t.d(n,{X:function(){return m}});var r,o,i=t(42516),l=t(4216),a=t(22224),s=t(73343),c=t(82230),u=t(94778),d=t(49224),p=t(72093),h=(0,d.X)({self:[p.l0.colWithGap(12)],headerRow:[p.l0.rowWithGap(12),p.l0.justify.spaceBetween,p.l0.align.center],largeScreenAnnouncementsList:[(r={},(0,i._)(r,"@media (max-width: ".concat(1200,"px)"),p.l0.display.none),(0,i._)(r,"display","grid"),(0,i._)(r,"gridTemplateColumns","repeat(3, minmax(0, 1fr))"),(0,i._)(r,"gap",p.TV.space16),(0,i._)(r,"gridAutoFlow","dense"),r)],smallScreenScreenAnnouncementsList:[(o={},(0,i._)(o,"@media (min-width: ".concat(1199,"px)"),p.l0.display.none),(0,i._)(o,"marginLeft","calc(-1 * ".concat(p.TV.space32,")")),(0,i._)(o,"marginRight","calc(-1 * ".concat(p.TV.space32,")")),o)]});function m(e){var n,t=e.currentUser,r=e.onDismissUpdate,o=(n=[],(null==t?void 0:t.hasSeenChangelogTour)||n.push(s.v.changelogAnnouncement),(null==t?void 0:t.hasSeenReplitCoreTour)||t.isPrivacyLimitedAccess||n.push(s.v.replitCoreAnnouncement),(null==t?void 0:t.hasSeenScheduledDeploymentsTour)||n.push(s.v.scheduledDeploymentsAnnouncement),n.sort(function(e,n){return n.date.getTime()-e.date.getTime()}),n).slice(0,3);if(0===o.length)return null;var i=o.map(function(e){var n=e.Component,o=e.tourName;return(0,l.tZ)(n,{onDismiss:r,hasReplitMembership:t.hasReplitMembership,isPrivacyLimitedAccess:t.isPrivacyLimitedAccess},o)});return(0,l.BX)(u.G,{tag:"section",css:h.self,children:[(0,l.tZ)(u.G,{css:h.headerRow,children:(0,l.tZ)(c.h4,{variant:"subheadBig",level:2,children:"New on Replit"})}),(0,l.tZ)(u.G,{tag:"ul",css:h.largeScreenAnnouncementsList,children:i}),(0,l.tZ)(a.Z,{tag:"ul",css:h.smallScreenScreenAnnouncementsList,gap:16,inset:32,children:i})]})}},73343:function(e,n,t){"use strict";t.d(n,{v:function(){return P}});var r={};t.r(r),t.d(r,{Component:function(){return k},date:function(){return D},tourName:function(){return S}});var o={};t.r(o),t.d(o,{Component:function(){return X},date:function(){return E},tourName:function(){return T}});var i={};t.r(i),t.d(i,{Component:function(){return H},date:function(){return N},tourName:function(){return L}});var l=t(41733),a=t(4216),s=t(27387),c=t(63257),u=t(96583),d=t(12933),p=t(85763),h=t(19068),m=t(64479),f=t(82230),g=t(94778),v=t(49224),y=t(64318),Z=t(72093),b=t(39475),w=t(78890),_=t(10595),C=t(24605),x=[Z.l0.focusRingOnAfter,{outline:"none",color:"inherit",cursor:"pointer","::after":{borderRadius:C.TV.space8,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,display:"block",zIndex:1}}],B=(0,v.X)({self:[Z.l0.reset.button,Z.l0.colWithGap(8),h.gU.listItem,Z.l0.textAlign.left,Z.l0.p(8),Z.l0.borderRadius(8),Z.l0.position.relative,Z.l0.width(320)],headerRow:[Z.l0.rowWithGap(8),Z.l0.align.center,Z.l0.justify.spaceBetween],headerTitleAndDate:[Z.l0.rowWithGap(8),Z.l0.align.baseline],headerTitleButton:[Z.l0.reset.button].concat((0,c._)(x)),headerTitleLink:[Z.l0.color.foregroundDefault].concat((0,c._)(x)),imageWrapper:[Z.l0.display.block,Z.l0.borderRadius(8),Z.l0.border({style:"solid",width:1,color:C.TV.outlineDimmer}),Z.l0.overflow("hidden")],dismissButton:[Z.l0.zIndex(1),{background:"transparent"}]});function G(e){var n,t=e.tourName,r=e.onDismiss,o=e.title,i=e.href,l=e.onClick,c=e.date,h=e.imageSrc,v=e.description,Z=(0,b.o)(t),C=Z.isDone,x=Z.setAsDone,G=(0,_.Av)(),R=(n=(0,s._)(function(){return(0,u.Jh)(this,function(e){switch(e.label){case 0:return[4,x()];case 1:return e.sent(),r(),[2]}})}),function(){return n.apply(this,arguments)});if(C)return null;var S=(0,a.tZ)(f.h4,{variant:"subheadDefault",level:3,color:"default",children:o});return(0,a.BX)(g.G,{tag:"li",css:B.self,onClick:l,children:[(0,a.BX)(g.G,{css:B.headerRow,children:[(0,a.BX)(g.G,{css:B.headerTitleAndDate,children:[null==i?(0,a.tZ)("button",{css:B.headerTitleButton,children:S}):(0,a.tZ)("a",{href:i,target:"_blank",css:B.headerTitleLink,children:S}),(0,a.tZ)(f.xv,{multiline:!1,maxLines:1,color:"dimmer",children:G?"":(0,w.Z)(c,"MMM dd, yyyy")})]}),(0,a.tZ)(m.Tg,{elevated:!0,css:B.dismissButton,children:(0,a.tZ)(p.hU,{alt:"Dismiss",onClick:R,children:(0,a.tZ)(y.Z,{})})})]}),(0,a.tZ)(g.G,{css:B.imageWrapper,children:(0,a.tZ)(d.Z,{src:h,alt:"",width:300,height:150,layout:"responsive",priority:!0})}),(0,a.tZ)(f.xv,{color:"dimmer",children:v})]})}var R=t(60305),S="scheduled-deployments-banner",D=new Date("2024-03-25");function k(e){return(0,a.tZ)(G,(0,l._)({tourName:S,title:"Scheduled Deployments",date:D,description:"Scheduled deployments run at a specified time and frequency configured by you.",imageSrc:"/public/images/home-product-updates/scheduled-deployments-announcement-with-deploy.png",href:"http://blog.replit.com/scheduled-deployments",onClick:function(){(0,R.j)(R.U3.EXTERNAL_LINK_VIEWED,{link:"http://blog.replit.com/scheduled-deployments",source:"scheduled_deployments_homepage_banner"})}},e))}var T="changelog-banner",E=new Date("2024-04-18");function X(e){return(0,a.tZ)(G,(0,l._)({tourName:T,title:"Changelog",date:E,description:"Learn about the latest product updates.",imageSrc:"/public/images/home-product-updates/changelog-announcement-cover.png",href:"https://docs.replit.com/updates",onClick:function(){(0,R.j)(R.U3.EXTERNAL_LINK_VIEWED,{link:"https://docs.replit.com/updates",source:"changelog_homepage_banner"})}},e))}var M=t(66626),U=t(59786),W=t(89421),A=t(50959),I=t(14375),L="replit-core-banner",N=new Date("2023-11-14");function H(e){var n=(0,M._)((0,A.useState)(!1),2),t=n[0],r=n[1],o=e.hasReplitMembership,i=(0,U.P5)({controlName:"flag-delicious-discounts",logFlagToAnalytics:!1,default:!1})?"Introducing Replit memberships! Save 50% on the yearly Replit ".concat(I.we," membership!"):"Introducing Replit memberships! Save $20 with the yearly Replit ".concat(I.we," membership."),s=o?"Your subscription has been updated to our new Replit ".concat(I.we," membership."):i;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(G,(0,l._)({tourName:L,title:"Replit ".concat(I.we," Membership"),date:N,description:s,imageSrc:"/public/images/home-product-updates/core-membership-announcement.png",href:o?"/replit-core":void 0,onClick:function(){o||r(!0)}},e)),(0,a.tZ)(W.Z,{isOpen:t,onClose:function(){return r(!1)},type:"purchase",analyticsContext:{upgrade:{context:"home_page_product_announcement",surface:"core_announcement_banner_update"}}})]})}var P={scheduledDeploymentsAnnouncement:r,replitCoreAnnouncement:i,changelogAnnouncement:o}},16029:function(e,n,t){"use strict";var r=t(60772),o={mobile:"@media (max-width: ".concat(r.j.tabletMin,"px)"),tablet:"@media (min-width: ".concat(r.j.tabletMin+1,"px) and (max-width: ").concat(r.j.tabletMax,"px)"),desktop:"@media (min-width: ".concat(r.j.tabletMax+1,"px)")};n.Z=o},78803:function(e,n,t){"use strict";t.d(n,{r:function(){return w}});var r=t(41733),o=t(30509),i=t(98924),l=t(4216),a=t(50939),s=t(19068),c=t(82230),u=t(94778),d=t(72093),p=t(50959),h=t(56675),m=t(30125),f=t(9155),g=t(27649),v=t(49224),y=t(80012),Z=u.K.label,b=(0,v.X)({label:[d.l0.rowWithGap(8),d.l0.align.center],svg:{" [data-switch-outline]":{transition:"stroke 100ms ease-out"},":hover [data-switch-outline]":{transition:"stroke 0ms"}},background:{transition:"fill 80ms ease-out"},button:{transition:"x 80ms ease-out"}}),w=function(e){var n=e.colorway,t=e.dataCy,u=(0,i._)(e,["colorway","dataCy"]),v=y.Br[void 0===n?"primary":n],w=(0,p.useRef)(null),_=(0,a.l)(u),C=(0,h.h)(u,_,w).inputProps,x=(0,m.F)(u),B=x.focusProps,G=x.isFocusVisible,R=(0,f.X)(u),S=R.hoverProps,D=R.isHovered,k=_.isSelected,T=u.isDisabled||!1,E=u.isReadOnly||!1,X=p.Children.count(u.children)>0;void 0!==u["aria-label"]||u["aria-labelledby"];var M=(0,l.BX)("svg",(0,o._)((0,r._)({"aria-hidden":"true"},S),{width:"38",height:"24",viewBox:"0 0 38 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",overflow:G?"visible":"hidden",style:{cursor:T||E?"auto":"pointer"},css:b.svg,children:[(0,l.tZ)("rect",{x:"0",y:"0",width:"38",height:"24",rx:"12",fill:k?T||E?v.dimmer:v.default:s.vb.interactiveBorder,css:b.background}),(0,l.tZ)("rect",{x:k?"18":"4",y:"4",width:"16",height:"16",rx:"8",fill:d.TV.white,opacity:T?.7:1,css:b.button}),(0,l.tZ)("rect",{x:"0.5",y:"0.5",width:"37",height:"23",rx:"12",stroke:!D||T||E?"transparent":k?v.strongest:s.vb.interactiveBorderHover,"data-switch-outline":!0}),(0,l.tZ)("rect",{x:"-1",y:"-1",stroke:G?k?v.strongest:v.default:"transparent",width:"40",height:"26",rx:"13",strokeWidth:"2"})]}));return X?(0,l.BX)(Z,{css:b.label,children:[(0,l.tZ)(g.T,{children:(0,l.tZ)("input",(0,o._)((0,r._)({},C,B),{ref:w,"data-cy":t}))}),M,(0,l.tZ)(c.xv,{multiline:!1,children:u.children})]}):(0,l.BX)(Z,{css:b.label,children:[(0,l.tZ)(g.T,{children:(0,l.tZ)("input",(0,o._)((0,r._)({},C,B),{ref:w,"data-cy":t}))}),M]})}},23987:function(e,n,t){"use strict";t.d(n,{O:function(){return m}});var r=t(4216),o=t(60199),i=t(70501),l=t(64318),a=t(27649),s=t(15235),c=t(80012),u=t(85763),d=t(82230),p=t(94778),h=t(72093);function m(e){var n=e.title,t=e.content,a=e.colorway,m=void 0===a?"primary":a,g=e.totalSteps,v=void 0===g?1:g,y=e.currentStepIndex,Z=void 0===y?0:y,b=e.onDismiss,w=e.onCurrentStepChange,_=e.cypressCloseData;return(0,r.BX)(p.G,{css:[h.l0.p(8),{paddingBottom:12,paddingRight:n?void 0:32,backgroundColor:c.Br[m].dimmest,border:"1px solid "+c.Br[m].dimmer,position:"relative"},h.l0.borderRadius(8),h.l0.shadow(2),h.l0.colWithGap(8)],children:[(0,r.tZ)(u.hU,{alt:"Close",colorway:m,css:{position:"absolute",top:h.TV.space8,right:h.TV.space8},onClick:b,dataCy:_,children:(0,r.tZ)(l.Z,{})}),n?(0,r.tZ)(d.xv,{variant:"subheadBig",multiline:!1,children:n}):null,"function"==typeof t?(0,r.tZ)(t,{}):(0,r.tZ)(d.xv,{children:t}),v>1&&w?(0,r.BX)(p.G,{css:[h.l0.flex.row,h.l0.align.center,h.l0.justify.spaceBetween],children:[(0,r.tZ)(s.zx,{css:{visibility:Z<=0?"hidden":void 0},colorway:m,text:"Back",iconLeft:(0,r.tZ)(o.Z,{}),onClick:function(){return w(Z-1)}}),(0,r.tZ)(f,{colorway:m,total:v,current:Z}),(0,r.tZ)(s.zx,{"data-autofocus":!0,colorway:m,text:Z>=v-1?"Done":"Next",iconLeft:(0,r.tZ)(i.Z,{}),onClick:function(){return Z>=v-1?b():w(Z+1)}})]}):null]})}function f(e){var n=e.total,t=e.current,o=e.colorway;return(0,r.BX)(p.G,{children:[(0,r.tZ)(a.T,{children:(0,r.tZ)("progress",{value:t+1,max:n,"aria-label":"Step"})}),(0,r.tZ)(p.G,{"aria-hidden":!0,css:h.l0.rowWithGap(8),children:Array(n).fill(0).map(function(e,n){return(0,r.tZ)(p.G,{css:[h.l0.borderRadius("full"),{width:h.TV.space8,height:h.TV.space8,backgroundColor:n===t?c.Br[o].stronger:c.Br[o].dimmer}]},n)})})]})}},36419:function(e,n,t){"use strict";t.a(e,async function(e,r){try{t.r(n);var o=t(66626),i=t(4216),l=t(6475),a=t(90594),s=t(16724),c=t(68081),u=t(10529),d=t(37490),p=t(33723),h=t(44985),m=t(44229),f=t(36117),g=t(73343),v=t(91558),y=t(22481),Z=t(69170),b=t(45271),w=t(64479),_=t(82230),C=t(94778),x=t(29318),B=t(72093),G=t(89421),R=t(85421),S=t(50959),D=t(43891),k=t(99067),T=t(17527),E=e([s]);s=(E.then?(await E)():E)[0],n.default=function(){var e,n,t,r,E=(0,k.fS)({variables:{courseSlug:D.yb,hostingDeploymentsInput:{count:y.V},replitCoreTourName:g.v.replitCoreAnnouncement.tourName,changelogTourName:g.v.changelogAnnouncement.tourName,scheduledDeploymentsTourName:g.v.scheduledDeploymentsAnnouncement.tourName}}),X=E.data,M=E.loading,U=E.refetch,W=(0,u.aU)(),A=(null===(n=W.data)||void 0===n?void 0:null===(e=n.siteBanner)||void 0===e?void 0:e.message)||null,I=(0,Z.Z)().showConfirm,L=(0,R.useRouter)(),N=(0,o._)((0,S.useState)(!1),2),H=N[0],P=N[1],V=(0,o._)((0,S.useState)("pricing_page_signup"),2),O=V[0],z=V[1];(0,S.useEffect)(function(){L.query.upgrade&&(L.replace(L.pathname,"/~"),z(L.query.upgrade),P(!0))},[L,I]);var F=null==X?void 0:X.currentUser,j=null==F?void 0:F.isFirewallMode,q=(0,o._)((0,S.useState)(j),2),Y=q[0],$=q[1],K=(0,o._)((0,S.useState)(!!L.query.supportform),2),J=K[0],Q=K[1],ee=(0,S.useRef)(null),en=(0,o._)((0,S.useState)(!1),2),et=en[0],er=en[1];return(0,i.BX)(s.Z,{title:"Home",children:[A?(0,i.tZ)(a.Z,{message:A}):null,(0,i.BX)(w.Tg,{css:[B.l0.pageContent,B.l0.colWithGap(32)],dataCy:"home-page",children:[M?(0,i.tZ)(C.G,{css:[B.l0.align.center],children:(0,i.tZ)(x.Z,{size:24})}):null,F?(0,i.BX)(i.HY,{children:[(0,i.BX)(C.G,{css:[B.l0.flex.row,B.l0.align.center,B.l0.justify.spaceBetween],children:[(0,i.tZ)(_.h4,{dataCy:"home-text",variant:"headerBig",level:1,children:"Home"}),(0,i.tZ)(h.Z,{innerRef:ee,onClick:function(){er(!0)}})]}),(0,i.tZ)(f.Z,{targetElement:ee.current,userTimeCreated:new Date(F.timeCreated),manualDismiss:et}),Y&&(0,i.tZ)(p.Z,{closeBanner:function(){return $(!1)}}),(0,i.tZ)(T.X,{currentUser:F,onDismissUpdate:U}),(0,i.tZ)(v.h,{currentUser:F}),(null==F?void 0:null===(t=F.course)||void 0===t?void 0:t.__typename)==="UserCourse"?(0,i.tZ)(d.Z,{userCourse:F.course,closable:!0,placement:"home"}):null,j?null:(0,i.tZ)(i.HY,{children:(0,i.tZ)(l.p,{})}),(0,i.tZ)(b.u,{isOpen:J,onRequestClose:function(){Q(!1)},children:(0,i.tZ)(c.Z,{onRequestClose:function(){Q(!1)}})})]}):null]}),(0,i.tZ)(G.Z,{isOpen:H,onClose:function(){return P(!1)},type:"purchase",analyticsContext:{upgrade:{context:O}}}),(0,i.tZ)(m.Z,{userHasCourse:(null==F?void 0:null===(r=F.course)||void 0===r?void 0:r.__typename)==="UserCourse",isOpen:et,onRequestClose:function(){er(!1)}})]})},r()}catch(e){r(e)}})},56675:function(e,n,t){"use strict";t.d(n,{h:function(){return o}});var r=t(63172);function o(e,n,t){let{labelProps:o,inputProps:i,isSelected:l,isPressed:a,isDisabled:s,isReadOnly:c}=(0,r.O)(e,n,t);return{labelProps:o,inputProps:{...i,role:"switch",checked:l},isSelected:l,isPressed:a,isDisabled:s,isReadOnly:c}}}},function(e){e.O(0,[3904,1604,7854,3709,6645,7372,5601,663,3891,4660,372,1558,2514,9774,2888,179],function(){return e(e.s=15979)}),_N_E=e.O()}]);
//# sourceMappingURL=home-75d40cd8053cfd00.js.map