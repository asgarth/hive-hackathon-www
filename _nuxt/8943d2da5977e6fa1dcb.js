(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{539:function(t,e,l){"use strict";var n={components:{},props:{title:{required:!0,type:String},headline:{required:!0,type:String}},data:function(){return{}}},r=l(20),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"relative pt-16 pb-32 flex content-center items-center justify-center",staticStyle:{"min-height":"66vh"}},[t._m(0),t._v(" "),l("div",{staticClass:"container relative mx-auto"},[l("div",{staticClass:"items-center flex flex-wrap"},[l("div",{staticClass:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"},[l("div",{staticClass:"pr-12"},[l("h1",{staticClass:"text-white font-semibold text-5xl"},[t._v("\n            "+t._s(t.title)+"\n          ")]),t._v(" "),l("p",{staticClass:"mt-4 text-lg text-gray-300"},[t._v("\n            "+t._s(t.headline)+"\n          ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"absolute top-0 w-full h-full bg-center bg-cover",staticStyle:{"background-image":"url(https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)"}},[e("span",{staticClass:"w-full h-full absolute opacity-50 bg-black",attrs:{id:"blackOverlay"}})])}],!1,null,null,null);e.a=component.exports},540:function(t,e,l){"use strict";var n={props:{bgColor:{default:"gray-300",type:String},padding:{default:"pt-24 pb-40",type:String}}},r=l(20),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"relative block",class:["bg-"+this.bgColor,this.padding]},[e("div",{staticClass:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",staticStyle:{height:"80px",transform:"translateZ(0px)"}},[e("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[e("polygon",{staticClass:"fill-current",class:"text-"+this.bgColor,attrs:{points:"2560 0 2560 100 0 100"}})])]),this._v(" "),e("div",{staticClass:"container mx-auto px-4"},[this._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},552:function(t,e,l){"use strict";l.r(e);l(83),l(28),l(29),l(18),l(61);var n=l(34),r=l(67),o=l(539),c=l(540);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var d={name:"home-page",components:{PageHeader:o.a,PageSection:c.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({mainAccount:"config/mainAccount",sponsors:"competitions/sponsors",hiveAppUrl:"config/hiveAppUrl"})),mounted:function(){this.$store.dispatch("competitions/fetchSponsors")}},v=l(20),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("main",[l("page-header",{attrs:{title:"First Hive Hackathon",headline:"Introducing the first-ever Hive Hackathon: 2 weeks, more than 12,000 HIVE rewards and endless possibilities"}}),t._v(" "),l("page-section",{attrs:{"bg-color":"gray-300"}},[l("div",{staticClass:"flex flex-wrap text-center justify-center"},[l("div",{staticClass:"w-full lg:w-6/12 px-4"},[l("h2",{staticClass:"text-4xl font-semibold"},[t._v("Join the Hackathon")]),t._v(" "),l("p",{staticClass:"text-lg leading-relaxed mt-4 mb-4 text-gray-700"},[t._v("\n            Join the contest and build something useful for one of the best community around. This is just the beginning of the journey\n          ")])])]),t._v(" "),l("div",{staticClass:"flex flex-wrap mt-12 justify-center"},[l("div",{staticClass:"w-full lg:w-4/12 px-4 text-center mb-12"},[l("div",{staticClass:"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"},[l("i",{staticClass:"fas fa-code text-xl"})]),t._v(" "),l("h6",{staticClass:"text-xl mt-5 font-semibold"},[t._v("\n            Open Source\n          ")]),t._v(" "),l("p",{staticClass:"mt-2 mb-4 text-gray-700"},[t._v("\n            All projects must be open source and provide a public repo.\n          ")])]),t._v(" "),l("div",{staticClass:"w-full lg:w-4/12 px-4 text-center mb-12"},[l("div",{staticClass:"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"},[l("i",{staticClass:"fas fa-lightbulb text-xl"})]),t._v(" "),l("h5",{staticClass:"text-xl mt-5 font-semibold"},[t._v("\n            Built by You\n          ")]),t._v(" "),l("p",{staticClass:"mt-2 mb-4 text-gray-700"},[t._v("\n            All projects must be unique and your own work (you are free to use open source elements).\n          ")])]),t._v(" "),l("div",{staticClass:"w-full lg:w-4/12 px-4 text-center mb-12"},[l("div",{staticClass:"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"},[l("i",{staticClass:"fas fa-people-carry text-xl"})]),t._v(" "),l("h5",{staticClass:"text-xl mt-5 font-semibold"},[t._v("Join as a Group")]),t._v(" "),l("p",{staticClass:"mt-2 mb-4 text-gray-700"},[t._v("\n            You can work in teams and I can split the prize between team members if requested.\n          ")])]),t._v(" "),l("div",{staticClass:"w-full lg:w-4/12 px-4 text-center mb-12"},[l("div",{staticClass:"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"},[l("i",{staticClass:"fas fa-award text-xl"})]),t._v(" "),l("h6",{staticClass:"text-xl mt-5 font-semibold"},[t._v("\n            Winners\n          ")]),t._v(" "),l("p",{staticClass:"mt-2 mb-4 text-gray-700"},[t._v("\n            The top three entries will win a portion of the total reward pool based on their position\n          ")])]),t._v(" "),l("div",{staticClass:"w-full lg:w-4/12 px-4 text-center mb-12"},[l("div",{staticClass:"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"},[l("i",{staticClass:"fas fa-calendar-alt text-xl"})]),t._v(" "),l("h5",{staticClass:"text-xl mt-5 font-semibold"},[t._v("\n            Deadline\n          ")]),t._v(" "),l("p",{staticClass:"mt-2 mb-4 text-gray-700"},[t._v("\n            This hackathon runs for 2 weeks and will end on May 16th, 2020\n          ")])]),t._v(" "),l("div",{staticClass:"w-full lg:w-4/12 px-4 text-center mb-12"},[l("div",{staticClass:"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"},[l("i",{staticClass:"fas fa-users text-xl"})]),t._v(" "),l("h5",{staticClass:"text-xl mt-5 font-semibold"},[t._v("Community")]),t._v(" "),l("p",{staticClass:"mt-2 mb-4 text-gray-700"},[t._v("\n            Join the Hive community and create something amazing\n          ")])])])]),t._v(" "),l("page-section",{attrs:{"bg-color":"gray-900"}},[l("div",{staticClass:"flex flex-wrap justify-center text-center mb-24"},[l("div",{staticClass:"w-full lg:w-6/12 px-4"},[l("h2",{staticClass:"text-white text-4xl font-semibold"},[t._v("Contest Supporters")]),t._v(" "),l("p",{staticClass:"text-lg leading-relaxed m-4 text-gray-600"},[t._v("\n            All the supporters who have contributed to the prize pool.\n          ")])])]),t._v(" "),l("div",{staticClass:"flex flex-wrap"},t._l(t.sponsors,(function(e){return l("div",{key:e.account,staticClass:"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"},[l("div",{staticClass:"px-6 pb-6"},[l("img",{staticClass:"shadow-lg rounded-full max-w-full mx-auto bg-white border-2 border-white",staticStyle:{"max-width":"120px"},attrs:{src:"https://images.hive.blog/u/"+e.account+"/avatar",alt:e.account}}),t._v(" "),l("div",{staticClass:"pt-1 text-center"},[l("h5",{staticClass:"text-xl font-bold text-white"},[l("a",{attrs:{href:t.hiveAppUrl+"/@"+e.account,rel:"noopener"}},[t._v("@"+t._s(e.account))])]),t._v(" "),l("p",{staticClass:"mt-1 text-sm text-gray-500 uppercase font-semibold"},[t._v("\n                "+t._s(e.amount)+"\n              ")])])])])})),0)])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);