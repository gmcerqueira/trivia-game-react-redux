(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{112:function(e,t,a){e.exports=a(215)},121:function(e,t,a){},128:function(e,t){},130:function(e,t){},163:function(e,t){},164:function(e,t){},170:function(e,t){},207:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(45),i=a.n(o),c=a(9),s=(a(121),a(8)),l=a(27),u=a(26),m=a(5),p=a(6),d=a(10),E=a(7),f=a(14),h=a(11),g=a(47),y=a.n(g),b=a(48),v=a.n(b),S=function(e,t,a,n){return fetch("".concat("https://opentdb.com/api.php?amount=5","&category=").concat(t,"&difficulty=").concat(a,"&type=").concat(n,"&token=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.results;return t.forEach((function(e){e.question=v.a.decode(e.question),e.correct_answer=v.a.decode(e.correct_answer),e.incorrect_answers=e.incorrect_answers.map((function(e){return v.a.decode(e)}))})),localStorage.setItem("questions",JSON.stringify(t)),t}))},O=function(){return function(e){e({type:"REQUEST_TOKEN",payload:{isFetching:!0}}),fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){var t=e.token;return localStorage.setItem("token",t),t})).then((function(t){return e(function(e){return{type:"REQUEST_TOKEN_SUCCESS",payload:{token:e,isFetching:!1}}}(t))})).catch((function(){return e({type:"REQUEST_TOKEN_ERROR",payload:{error:"N\xe3o foi poss\xedvel recuperar",isFetching:!1}})}))}},k=(a(207),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={email:"",playerName:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.renderButtons=a.renderButtons.bind(Object(f.a)(a)),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.id;this.setState(Object(u.a)({},n,a))}},{key:"renderButtons",value:function(){var e=this.state,t=e.email,a=e.playerName,n=t.length<=0||a.length<=0,o=this.props,i=o.requestToken,c=o.savePlayerImg,l=o.savePlayerName,u=o.savePlayerEmail;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/game"},r.a.createElement("button",{className:"login-btn play-btn","data-testid":"btn-play",type:"submit",disabled:n,onClick:function(){i(),l(a),u(t),c(t)}},"Jogar")),r.a.createElement(s.b,{to:"/config"},r.a.createElement("button",{className:"login-btn config-btn",type:"button","data-testid":"btn-settings"},"Configura\xe7\xf5es")))}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-page"},r.a.createElement("h1",{className:"login-title"},"T R I V I A"),r.a.createElement("div",{className:"login-container"},r.a.createElement("label",{className:"login-label",htmlFor:"email"},r.a.createElement("input",{className:"login-input","data-testid":"input-gravatar-email",id:"email",type:"email",placeholder:"Email",onChange:this.handleChange})),r.a.createElement("label",{className:"login-label",htmlFor:"playerName"},r.a.createElement("input",{className:"login-input","data-testid":"input-player-name",id:"playerName",type:"text",placeholder:"Player name",onChange:this.handleChange})),this.renderButtons()))}}]),t}(n.Component)),N=Object(c.b)((function(){return{}}),(function(e){return{requestToken:function(){return e(O())},savePlayerImg:function(t){return e(function(e){return{type:"SAVE_IMG",payload:{gravatarEmail:y()(e).toString()}}}(t))},savePlayerName:function(t){return e(function(e){return{type:"SAVE_NAME",payload:{name:e}}}(t))},savePlayerEmail:function(t){return e({type:"SAVE_EMAIL",payload:{email:t}})}}}))(k),j=a(70);function T(){document.querySelectorAll("[type=button]").forEach((function(e){"correct"===e.dataset.answer&&(e.style="background-color: #06f00f;color:#fcfcfc;"),"incorrect"===e.dataset.answer&&(e.style="background-color: red;color:#fcfcfc;")}))}function C(e,t){localStorage.setItem(e,JSON.stringify(t))}a(209),a(210);var _=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.nextQuestion;return r.a.createElement("button",{className:"next-btn",type:"button","data-testid":"btn-next",onClick:e},"NEXT")}}]),t}(n.Component),R=(a(211),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.gravatarEmail,n=e.score;return r.a.createElement("header",{className:"header-component"},r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header-profile"},r.a.createElement("img",{className:"header-profile-img",src:"https://www.gravatar.com/avatar/".concat(a),alt:"","data-testid":"header-profile-picture"}),r.a.createElement("p",{"data-testid":"header-player-name"},t)),r.a.createElement("p",{"data-testid":"header-score"},"Score : ".concat(n))))}}]),t}(n.Component)),A=Object(c.b)((function(e){return{name:e.player.name,gravatarEmail:e.player.gravatarEmail,questions:e.game.questions,score:e.player.score}}))(R),w=(a(212),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={assertions:0,currentQuestion:0,options:[],timer:30,points:0,stopTimer:!1},a.joinAnswers=a.joinAnswers.bind(Object(f.a)(a)),a.nextQuestion=a.nextQuestion.bind(Object(f.a)(a)),a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.startTimer=a.startTimer.bind(Object(f.a)(a)),a.correctAnswerSumPoints=a.correctAnswerSumPoints.bind(Object(f.a)(a)),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){C("state",{player:{name:this.props.name,assertions:0,score:0,gravatarEmail:"gravatarEmail"}})}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.questions,n=t.requestQuestions,r=t.token,o=t.category,i=t.difficulty,c=t.type;a!==e.questions&&this.joinAnswers(),r!==e.token&&n(r,o,i,c)}},{key:"joinAnswers",value:function(){var e=this.props.questions,t=this.state.currentQuestion;this.setState({options:[e[t].correct_answer].concat(Object(j.a)(e[t].incorrect_answers)).sort((function(){return Math.random()-.5}))})}},{key:"nextQuestion",value:function(){var e=this,t=this.state,a=t.currentQuestion,n=t.points,r=t.assertions,o=this.props,i=o.questions,c=o.savePlayerAssertions,s=o.name,l=o.gravatarEmail;a===i.length-1?(c(r),this.setState({endGame:!0},(function(){var e=JSON.parse(localStorage.getItem("ranking"))||[];localStorage.removeItem("questions"),C("ranking",[].concat(Object(j.a)(e),[{name:s,score:n,gravatarEmail:l}]))}))):this.setState({currentQuestion:a+1,timer:30,stopTimer:!1,options:[]},(function(){return e.joinAnswers()}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.id;this.setState(Object(u.a)({},n,a))}},{key:"correctAnswerSumPoints",value:function(){var e,t=this.state,a=t.points,n=t.currentQuestion,r=t.timer,o=t.assertions,i=this.props,c=i.questions,s=i.name,l=i.gravatarEmail,u=i.savePlayerScore;switch(c[n].difficulty){case"easy":e=1;break;case"medium":e=2;break;case"hard":e=3}var m=a+(10+r*e),p=o+1;this.setState({points:m,assertions:p},(function(){u(m),C("state",{player:{name:s,assertions:p,score:m,gravatarEmail:l}})}))}},{key:"startTimer",value:function(){var e=this,t=this.state,a=t.timer,n=t.stopTimer,r=setTimeout((function(){e.setState({timer:a-1})}),1e3);(0===a||n)&&(clearTimeout(r),T())}},{key:"renderOptions",value:function(){var e=this,t=this.state,a=t.currentQuestion,n=t.options,o=t.timer,i=t.stopTimer,c=this.props.questions;return n.map((function(t,n){return t===c[a].correct_answer?r.a.createElement("button",{className:"question-option",type:"button",key:n,"data-testid":"correct-answer","data-answer":"correct",onClick:function(){T(),e.setState({stopTimer:!0}),e.correctAnswerSumPoints(e)},disabled:!o||i},t):r.a.createElement("button",{className:"question-option",type:"button",key:n,"data-testid":"wrong-answer-".concat(c[a].incorrect_answers.indexOf(t)),onClick:function(){T(),e.setState({stopTimer:!0})},"data-answer":"incorrect",disabled:!o||i},t)}))}},{key:"renderMain",value:function(){var e=this.state,t=e.currentQuestion,a=e.timer,n=e.stopTimer,o=this.props.questions;return r.a.createElement("main",{className:"main-component"},r.a.createElement("p",{className:"main-timer"},"Timer: ".concat(a)),o.length?r.a.createElement("div",{className:"main-container"},this.startTimer(),r.a.createElement("div",{className:"question-component"},r.a.createElement("div",{className:"question-container"},r.a.createElement("p",{className:"question-category","data-testid":"question-category"},o[t].category),r.a.createElement("p",{className:"question-text","data-testid":"question-text"},o[t].question)),r.a.createElement("div",{className:"question-options"},this.renderOptions()))):"Loading...",(!a||n)&&r.a.createElement(_,{nextQuestion:this.nextQuestion}))}},{key:"render",value:function(){var e=this.state.endGame;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(l.a,{to:"/feedback"}),r.a.createElement(A,null),this.renderMain())}}]),t}(n.Component)),q=Object(c.b)((function(e){var t=e.player,a=e.game,n=e.config;return{name:t.name,gravatarEmail:t.gravatarEmail,token:t.token,assertions:t.assertions,questions:a.questions,category:n.category,difficulty:n.difficulty,type:n.type}}),(function(e){return{requestQuestions:function(t,a,n,r){return e(function(e,t,a,n){return function(r){r({type:"REQUEST_QUESTIONS",payload:{isFetching:!0}}),S(e,t,a,n).then((function(e){return r(function(e){return{type:"REQUEST_QUESTIONS_SUCCESS",payload:{questions:e,isFetching:!1}}}(e))})).catch((function(){return r({type:"REQUEST_QUESTIONS_ERROR",payload:{error:"N\xe3o foi poss\xedvel recuperar",isFetching:!1}})}))}}(t,a,n,r))},savePlayerScore:function(t){return e(function(e){return{type:"SAVE_SCORE",payload:{score:e}}}(t))},savePlayerAssertions:function(t){return e(function(e){return{type:"SAVE_ASSERTIONS",payload:{assertions:e}}}(t))}}}))(w),Q=function(){return function(e){e({type:"REQUEST_CATEGORIES",payload:{isFetching:!0}}),fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){return e.trivia_categories})).then((function(t){return e(function(e){return{type:"REQUEST_CATEGORIES_SUCCESS",payload:{categories:e,isFetching:!1}}}(t))})).catch((function(){return e({type:"REQUEST_CATEGORIES_ERROR",payload:{error:"N\xe3o foi poss\xedvel recuperar",isFetching:!1}})}))}},I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.requestCategories)()}},{key:"renderCategoryOptions",value:function(){var e=this.props,t=e.categories,a=e.updateCategory;return r.a.createElement("label",{htmlFor:"categories"},"Category",r.a.createElement("select",{name:"categories",id:"category",onChange:function(e){var t=e.target.value;return a(t)}},r.a.createElement("option",{hidden:!0,"aria-label":"default"}),t.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){var t=e.id,a=e.name;return r.a.createElement("option",{key:t,value:t},a)}))))}},{key:"renderDifficultyOptions",value:function(){var e=this.props.updateDifficulty;return r.a.createElement("label",{htmlFor:"categories"},"Difficulty",r.a.createElement("select",{name:"categories",id:"category",onChange:function(t){var a=t.target.value;return e(a)}},r.a.createElement("option",{hidden:!0,"aria-label":"default"}),r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard")))}},{key:"renderTypeOptions",value:function(){var e=this.props.updateType;return r.a.createElement("label",{htmlFor:"categories"},"Type",r.a.createElement("select",{name:"categories",id:"category",onChange:function(t){var a=t.target.value;return e(a)}},r.a.createElement("option",{hidden:!0,"aria-label":"default"}),r.a.createElement("option",{value:"boolean"},"True or False"),r.a.createElement("option",{value:"multiple"},"Multiple choice")))}},{key:"render",value:function(){var e=this.props.isFetching;return r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"settings-title"},"Configura\xe7\xf5es"),e?"Loading...":r.a.createElement(r.a.Fragment,null,this.renderCategoryOptions(),this.renderDifficultyOptions(),this.renderTypeOptions(),r.a.createElement(s.b,{to:"/"},"SAVE")))}}]),t}(n.Component),U=Object(c.b)((function(e){var t=e.config;return{categories:t.categories,isFetching:t.isFetching}}),(function(e){return{requestCategories:function(){return e(Q())},updateCategory:function(t){return e(function(e){return{type:"CHANGE_CATEGORY",payload:{category:e}}}(t))},updateDifficulty:function(t){return e(function(e){return{type:"CHANGE_DIFFICULTY",payload:{difficulty:e}}}(t))},updateType:function(t){return e(function(e){return{type:"CHANGE_TYPE",payload:{type:e}}}(t))}}}))(I),F=(a(213),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"showMessage",value:function(){var e=this.props.assertions;return e<3?"Could be better...":e>=3?"Good job!":void 0}},{key:"render",value:function(){var e=this.props,t=e.score,a=e.assertions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("main",{className:"feedback-component"},r.a.createElement("div",{className:"feedback-container"},r.a.createElement("p",{className:"feedback-text","data-testid":"feedback-text"},this.showMessage(a)),r.a.createElement("p",{className:"feedback-total-question","data-testid":"feedback-total-question"},"You guessed ".concat(a," questions")),r.a.createElement("p",{className:"feedback-total-score","data-testid":"feedback-total-score"},"Score: ".concat(t)),r.a.createElement("div",{className:"feedback-buttons"},r.a.createElement(s.b,{to:"/",className:"feedback-btn btn-play-again","data-testid":"btn-play-again"},"PLAY AGAIN"),r.a.createElement(s.b,{to:"/ranking",className:"feedback-btn btn-ranking","data-testid":"btn-ranking"},"SEE RANK")))))}}]),t}(n.Component)),G=Object(c.b)((function(e){return{name:e.player.name,gravatarEmail:e.player.gravatarEmail,assertions:e.player.assertions,questions:e.game.questions,score:e.player.score}}),(function(){return{}}))(F),P=(a(214),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.id;this.setState(Object(u.a)({},n,a))}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking"));return r.a.createElement("div",{className:"ranking-page"},r.a.createElement("div",{className:"ranking-container"},r.a.createElement("h1",{className:"ranking-title","data-testid":"ranking-title"},"R a n k i n g"),r.a.createElement("section",{className:"ranking-table"},e&&e.sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0})).map((function(e,t){return r.a.createElement("div",{className:"ranking-line",key:t},r.a.createElement("img",{className:"ranking-img",src:"https://www.gravatar.com/avatar/".concat(e.gravatarEmail),alt:""}),r.a.createElement("p",{className:"ranking-name","data-testid":"player-name-".concat(t)},e.name),r.a.createElement("p",{className:"ranking-score","data-testid":"player-score-".concat(t)},"".concat(e.score," points")))}))),r.a.createElement(s.b,{to:"/",className:"btn-go-home","data-testid":"btn-go-home"},"HOME")))}}]),t}(n.Component)),x=Object(c.b)((function(){return{}}),(function(){return{}}))(P);var M=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/config",component:U}),r.a.createElement(l.b,{path:"/feedback",component:G}),r.a.createElement(l.b,{path:"/game",component:q}),r.a.createElement(l.b,{path:"/ranking",component:x}),r.a.createElement(l.b,{exact:!0,path:"/",component:N}))},V=a(25),D=a(110),H=a(111),Y=a(32),J={email:"",name:"",gravatarEmail:"",score:0,assertions:0,token:"",isFetching:!1};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_EMAIL":case"SAVE_NAME":case"SAVE_IMG":case"SAVE_SCORE":case"SAVE_ASSERTIONS":case"REQUEST_TOKEN":case"REQUEST_TOKEN_SUCCESS":case"REQUEST_TOKEN_ERROR":return Object(Y.a)({},e,{},t.payload);default:return e}},L={questions:[],isFetching:!1};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_QUESTIONS":case"REQUEST_QUESTIONS_SUCCESS":case"REQUEST_QUESTIONS_ERROR":case"SAVE_CURRENT_INDEX":return Object(Y.a)({},e,{},t.payload);default:return e}},W={categories:[],difficulty:"",category:"",type:"",isFetching:!1};var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"REQUEST_CATEGORIES":case"REQUEST_CATEGORIES_SUCCESS":case"REQUEST_CATEGORIES_ERROR":case"CHANGE_CATEGORY":case"CHANGE_DIFFICULTY":case"CHANGE_TYPE":return Object(Y.a)({},e,{},n);default:return e}},$=Object(V.combineReducers)({player:K,game:B,config:X}),z=Object(V.createStore)($,Object(D.composeWithDevTools)(Object(V.applyMiddleware)(H.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{store:z},r.a.createElement(s.a,{basename:"/trivia-game-react-redux"},r.a.createElement(M,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[112,1,2]]]);
//# sourceMappingURL=main.5cd6aad3.chunk.js.map