(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cc1ed98"],{"33b2":function(t,e,a){},3552:function(t,e,a){"use strict";var r=a("33b2"),n=a.n(r);n.a},"98ec":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"next-tracks"},[a("h1",[t._v(t._s(t.$t("next.nowPlaying")))]),a("TrackList",{attrs:{tracks:[t.currentTrack],type:"playlist",dbclickTrackFunc:"none"}}),a("h1",{directives:[{name:"show",rawName:"v-show",value:t.playNextList.length>0,expression:"playNextList.length > 0"}]},[t._v("插队播放")]),a("TrackList",{directives:[{name:"show",rawName:"v-show",value:t.playNextList.length>0,expression:"playNextList.length > 0"}],attrs:{tracks:t.playNextTracks,type:"playlist",highlightPlayingTrack:!1,dbclickTrackFunc:"playTrackOnListByID",itemKey:"id+index"}}),a("h1",[t._v(t._s(t.$t("next.nextUp")))]),a("TrackList",{attrs:{tracks:t.filteredTracks,type:"playlist",highlightPlayingTrack:!1,dbclickTrackFunc:"playTrackOnListByID"}})],1)},n=[],i=(a("4de4"),a("7db0"),a("caad"),a("a15b"),a("d81d"),a("fb6a"),a("2532"),a("d0ff")),c=a("f3f3"),s=a("2f62"),l=a("fefb"),u=a("a1a1"),o={name:"Next",components:{TrackList:u["a"]},data:function(){return{tracks:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(s["d"])(["player"])),{},{currentTrack:function(){return this.player.currentTrack},playerShuffle:function(){return this.player.shuffle},filteredTracks:function(){var t=this.player.list.slice(this.player.current+1,this.player.current+100);return this.tracks.filter((function(e){return t.includes(e.id)}))},playNextList:function(){return this.player.playNextList},playNextTracks:function(){var t=this;return this.playNextList.map((function(e){return t.tracks.find((function(t){return t.id===e}))}))}}),watch:{currentTrack:function(){this.loadTracks()},playerShuffle:function(){this.loadTracks()},playNextList:function(){this.loadTracks()}},methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["playTrackOnListByID"])),{},{loadTracks:function(){var t=this,e=this.player.list.slice(this.player.current+1,this.player.current+100);e.push.apply(e,Object(i["a"])(this.playNextList));var a=this.tracks.map((function(t){return t.id}));e.length>0&&Object(l["c"])(e.join(",")).then((function(e){var r,n=e.songs.filter((function(t){return!a.includes(t.id)}));(r=t.tracks).push.apply(r,Object(i["a"])(n))}))}}),activated:function(){this.loadTracks()}},f=o,p=(a("3552"),a("2877")),d=Object(p["a"])(f,r,n,!1,null,"658b0d37",null);e["default"]=d.exports},d0ff:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var r=a("b680");function n(t){if(Array.isArray(t))return Object(r["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=a("dde1");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||i(t)||Object(c["a"])(t)||s()}}}]);
//# sourceMappingURL=chunk-1cc1ed98.a7b1a24e.js.map