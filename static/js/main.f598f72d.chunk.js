(this.webpackJsonpcoollistingapp=this.webpackJsonpcoollistingapp||[]).push([[0],{193:function(e,a,t){},194:function(e,a,t){},195:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),l=t.n(r),o=(t(92),t(93),t(10)),i=t(14),u=t(56),m=t.n(u),s=t(78),d=function(e){return function(a){var t=[],n=[],c=[];return e&&e.map((function(e){var a=new Date(e.createdOn).setHours(0,0,0,0),r=(new Date).setHours(0,0,0,0);a<r?c.push(e):a===r?n.push(e):t.push(e)})),a({type:"SORT_LIST_DATA",payload:{upcoming:t,past:c,live:n}}),null}},p=function(e){return{type:"SET_LISTING_DATA",payload:Object(i.a)({},e)}},g=function(e){return{type:"OPEN_CLOSE_POPUP",payload:e}},f=t(59),E=t(202),v=t(203),b=(t(99),t(61),"https://res.cloudinary.com/raxxx/image/upload/v1597517735/blueStackAssets"),h=[{label:"Upcoming Campaigns",value:"upcoming"},{label:"Live Campaigns",value:"live"},{label:"Past Campaigns",value:"past"}],O={calender:"".concat(b,"/calendar_hjshgi.png"),stats:"".concat(b,"/statistics-report_mfgvyq.png"),csv:"".concat(b,"/file_mpavws.png"),price:"".concat(b,"/Price_o7lx4f.png"),logo:"".concat(b,"/icons8-bluestacks-100_vrgwbv.png")},N=t(79),D=t.n(N),j=(t(24),Object(n.memo)((function(e){var a=e.imageUrl,t=e.name,n=e.region,r=e.largeImage;return c.a.createElement("div",{className:"campainNameContainer ".concat(r?"largeImage":"")},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{alt:"largeThumb",className:r?"largeThumb":"thumbImg",src:a})),c.a.createElement("div",{className:"campaignName"},c.a.createElement("p",null,t),c.a.createElement("p",null,n)))}))),w=t(81),y=t.n(w),S=(t(137),Object(n.memo)((function(e){var a=e.icon,t=e.label,r=e.clickHandler,l=void 0===r?function(){}:r,o=e.calDate,i=function(e){e.value;var n=e.onClick;return c.a.createElement("div",{className:"gameIcon",onClick:n},c.a.createElement("span",{className:"gameImg"},c.a.createElement("img",{alt:"thumbNail",className:"thumbImg",src:O[a]})),c.a.createElement("span",{className:"gameLabel"},t))};return c.a.createElement(n.Fragment,null,"calender"===a?c.a.createElement(n.Fragment,null,c.a.createElement(y.a,{popperPlacement:"auto-left",selected:o,onChange:function(e){return l(e)},customInput:c.a.createElement(i,null)})):c.a.createElement("div",{className:"gameIcon",onClick:function(e){return l(e)}},c.a.createElement("span",{className:"gameImg"},c.a.createElement("img",{alt:"thumbNail",className:"thumbImg",src:O[a]})),c.a.createElement("span",{className:"gameLabel"},t)))}))),_=Object(o.b)(null,(function(e){return{setRowData:function(a){e(function(e){return{type:"SET_ROW_DATA",payload:Object(i.a)({},e)}}(a))},openClosePopUp:function(a){e(g(a))}}}))(Object(n.memo)((function(e){var a=e.gameInfo,t=e.setRowData,r=e.openClosePopUp;return c.a.createElement(n.Fragment,null,c.a.createElement(S,{clickHandler:function(){t(a),r(!0)},label:"View Pricing",icon:"price"}))}))),A=Object(n.memo)((function(e){var a=e.rawDate,t=L(a),n=F(a),r=n>0?"Days Ago":n<0?"Days Ahead":"Live";return n=Math.abs(n),c.a.createElement("span",{className:"date"},c.a.createElement("strong",null,t),c.a.createElement("p",null,"Live"!==r?n:""," ",r))})),I=Object(o.b)(null,(function(e){return{changeDate:function(a,t){e(function(e,a){return function(t,n){var c=n().listingData;return c&&c.data&&c.data.map((function(t){e.name===t.name&&(t.createdOn=a.getTime())})),t(d(c.data)),null}}(a,t))}}}))(Object(n.memo)((function(e){var a=e.changeDate,t=e.rowData,r=[{label:"CSV",icon:"csv"},{label:"Report",icon:"stats"},{label:"Schedule Again",icon:"calender",clickHandler:function(e){a(t,e)}}];return c.a.createElement(n.Fragment,null,r.map((function(e){return c.a.createElement(S,{label:e.label,icon:e.icon,clickHandler:e.clickHandler,calDate:t.createdOn})})))}))),T=function(e){return c.a.createElement(A,{rawDate:e})},k=function(e,a){return c.a.createElement(j,{imageUrl:a.image_url,name:a.name,region:a.region})},C=function(e,a){return c.a.createElement(_,{gameInfo:a})},P=function(e,a){return c.a.createElement(I,{rowData:a})},L=function(e){var a=new Date(e),t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()+1],c=a.getDate().toString().padStart(2,"0");return"".concat(n," ").concat(t,", ").concat(c)},F=function(e){var a=((new Date).setHours(0,0,0,0)-new Date(e).setHours(0,0,0,0))/864e5;return a=Math.round(a)},x=function(e){var a=e.tableData,t=[{dataField:"createdOn",text:"DATE",headerStyle:function(){return{width:"15%"}},formatter:T},{dataField:"name",text:"CAMPAIGN",headerStyle:function(){return{width:"30%"}},formatter:k},{dataField:"view",text:"VIEW",headerStyle:function(){return{width:"15%"}},formatter:C},{dataField:"action",text:"ACTION",headerStyle:function(){return{width:"40%"}},formatter:P}];return c.a.createElement("div",{className:"listTable"},c.a.createElement(D.a,{keyField:"id",data:a,columns:t}))},M=function(){var e=Object(o.d)((function(e){return e.sortListData})),a=Object(n.useState)("upcoming"),t=Object(f.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)([]),u=Object(f.a)(i,2),m=u[0],s=u[1];Object(n.useEffect)((function(){s(e[r])}),[e]);return c.a.createElement("div",null,c.a.createElement(E.a,null,c.a.createElement("div",{className:"title"},c.a.createElement("p",null,"Manage Campaigns")),c.a.createElement("div",{className:"navBtn"},h.map((function(a,t){return c.a.createElement("button",{key:"".concat(a.label).concat(t),onClick:function(){return t=a.value,s(e[t]),void l(t);var t},className:"panelBtn ".concat(r===a.value?"active":"")},a.label)})),c.a.createElement("div",{className:" spacer16"})),c.a.createElement(v.a,null,c.a.createElement(x,{tableData:m}))))},U=function(e){var a=Object(o.c)(),t=Object(o.d)((function(e){return e}));return Object(n.useEffect)((function(){a(function(){var e=Object(s.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,fetch("https://api.jsonbin.io/b/5f172d189180616628462efc/6",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log("Fetcherr",e)}));case 4:t=e.sent,a(d(t.data)),a(p(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}())}),[]),c.a.createElement("div",{className:"tableRoot"},t.listingData&&t.listingData.data.length>0&&c.a.createElement(M,null))},H=(t(193),Object(o.b)((function(e){var a=e.rowData;return{rowData:void 0===a?{}:a}}))(Object(n.memo)((function(e){var a=e.rowData,t=a.pricing_Details,n=(t=void 0===t?{}:t).yearly,r=t.halfYearly,l=t.monthly,o=a.image_url,i=a.name,u=a.region;return c.a.createElement("div",{className:"pricePopUp"},c.a.createElement(j,{imageUrl:o,name:i,region:u,largeImage:!0}),c.a.createElement("div",{className:"pricingDetail"},c.a.createElement("h3",{className:"heading"},"Pricing"),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"duration "},c.a.createElement("p",null,"1 Week - 1 Month"),c.a.createElement("p",null,"6 Months"),c.a.createElement("p",null,"1 Year")),c.a.createElement("div",{className:"cost"},c.a.createElement("p",null,l),c.a.createElement("p",null,r),c.a.createElement("p",null,n)))))})))),R=function(){var e=Object(o.d)((function(e){return e.openClosePopUpLayer})),a=Object(o.c)();return c.a.createElement(n.Fragment,null,e&&c.a.createElement("div",{id:"myModal",className:"modal",style:{display:"block"}},c.a.createElement("div",{className:"modal-content"},c.a.createElement(H,null),c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{onClick:function(){return a(g(!1))},className:"closeModal"},"Close"))))))},W=(t(194),Object(n.memo)((function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{alt:"logo",src:O.logo})))})));var J=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(R,null),c.a.createElement(W,null),c.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=t(32),G={data:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SET_LISTING_DATA":return Object(i.a)(Object(i.a)({},e),{},{listingData:n});case"SET_ROW_DATA":return Object(i.a)(Object(i.a)({},e),{},{rowData:n});case"OPEN_CLOSE_POPUP":return Object(i.a)(Object(i.a)({},e),{},{openClosePopUpLayer:n});case"SORT_LIST_DATA":return Object(i.a)(Object(i.a)({},e),{},{sortListData:n});default:return e}},Y=t(84),q=Object(B.c)(V,Object(B.a)(Y.a));l.a.render(c.a.createElement(o.a,{store:q},c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,a,t){},61:function(e,a,t){},87:function(e,a,t){e.exports=t(195)},92:function(e,a,t){},93:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.f598f72d.chunk.js.map