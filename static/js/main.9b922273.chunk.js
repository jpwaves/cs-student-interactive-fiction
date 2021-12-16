(this["webpackJsonpcs-student-interactive-fiction"]=this["webpackJsonpcs-student-interactive-fiction"]||[]).push([[0],[,,,,,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),i=o(4),s=o.n(i),r=(o(9),o(2)),c=(o(10),o(11),o.p+"static/media/windows-startup.4856e894.mp3"),A=o.p+"static/media/mac-startup.9e31eb81.mp3",u=o.p+"static/media/linux-startup.813939a0.wav",d=(o(12),o(0));function h(e){var t=e.title,o=e.description;return Object(d.jsxs)("div",{className:"storybox-container",children:[Object(d.jsx)("h2",{className:"scenario-title",children:t}),Object(d.jsx)("p",{className:"scenario",children:o})]})}o(14);function l(e){var t=e.handleClick,o=e.path;return Object(d.jsx)("button",{className:"path-button",onClick:function(){return t()},children:o})}o(15);function g(e){var t=e.options;return Object(d.jsx)("ul",{className:"buttons-container",children:t.map((function(e,t){var o=e.path,n=e.handleOption;return Object(d.jsx)("li",{children:Object(d.jsx)(l,{handleClick:n,path:o})},t)}))})}o(16);function p(e){var t=e.title,o=e.desc,n=e.options;return Object(d.jsxs)("div",{className:"component-container",children:[Object(d.jsx)(h,{title:t,description:o}),Object(d.jsx)(g,{options:n})]})}function f(e){var t=e.updateScenario,o=e.setBackground,n=[{path:"Windows",handleOption:function(){new Audio(c).play(),o("windows"),t(2)}},{path:"MacOS",handleOption:function(){new Audio(A).play(),o("macos"),t(2)}},{path:"Linux",handleOption:function(){new Audio(u).play(),o("linux"),t(2)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"Beginning of the Semester!",desc:"Tomorrow is the first day of the semester. As a CS student, \n    having a laptop you can take to class and do your assignments on is a must. \n    However, there are a vast number of different types of laptops to choose \n    from, and not all these laptops have the same OS. Which type of OS do you \n    prefer to have on your laptop? (This question is just to get you familiar \n    with the format of this interactive fiction and has no effect on the \n    story.)",options:n})}o(17);var w=function(e){return e>=90?e>=93?"A":"A-":e>=80?e>=86?"B+":e>=83?"B":"B-":e>=70?e>=76?"C+":e>=73?"C":"C-":e>=60?e>=66?"D+":e>=63?"D":"D-":"F"};function m(e){var t=e.grade;return Object(d.jsxs)("div",{className:"gradebar-container",children:[Object(d.jsxs)("label",{for:"gradebar",children:["Grade: ",w(t)]}),Object(d.jsxs)("progress",{id:"gradebar",value:t,max:100,children:[t,"%"]})]})}function B(e){var t=e.updateScenario,o=[{path:"Start Game",handleOption:function(){t(1)}}];return Object(d.jsx)(p,{title:"A CS Semester",desc:'Welcome! In this interactive-fiction-like game, you\'ll step into the\n        shoes of a CS student who is taking a semester of classes. The scenarios you\n        encounter on your journey are based on what I believe CS students\n        typically have to deal with, mixed with my personal experiences\n        as a CS student. The purpose of this game is to be a light-hearted, fun, and \n        informative way of showing others some of the things CS students do in a typical\n        semester and the common situations we face. To get started, click the "Start Game"\n        button below! I hope you enjoy the game!',options:o})}function C(e){var t=e.updateScenario,o=e.updateTM,n=[{path:"Yes",handleOption:function(){o(1.5),t(4)}},{path:"No",handleOption:function(){t(4)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"Get a Part-time Job?",desc:"Like any college student, money is limited. This could be partially solved by getting a part-time job. However, this will cut into time that could be used for doing coursework. Will you choose to get a part-time job",options:n})}var E=o.p+"static/media/sleep-snore.7c8e4a16.wav";function Q(e){var t=e.updateScenario,o=e.updateTM,n=[{path:"Go in-person",handleOption:function(){o(.75),t(5)}},{path:"Sleep in and attend virtually",handleOption:function(){new Audio(E).play(),o(1.1),t(5)}},{path:"Sleep in and watch recordings",handleOption:function(){new Audio(E).play(),o(1.25),t(5)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"First Few Weeks",desc:"The first few weeks of the semester have gone by and \n    you've gotten used to the routine of courses and homework. Since the\n     first day, you've been managing to keep going in-person to lectures\n      for all your classes. However, the stress of homework is slowly \n      piling on, and your sleep schedule is slowly sliding into oblivion.\n       There is the option of sleeping in and watching the recorded \n       lectures or attending via Zoom since all classes are still hybrid,\n        but that will make it hard to make friends and find study partners.\n         Today, you wake up and consider either going to class in-person\n          or sleeping in and attending class virtually. Which do you \n          choose?",options:n})}function b(e){var t=e.updateScenario,o=e.setStartEarly,n=e.updateTM,a=[{path:"Contact them now",handleOption:function(){o(!0),n(.5),t(6)}},{path:"Wait until later",handleOption:function(){o(!1),n(1.25),t(6)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"First Partner Assignment",desc:"Today, your CS class has just assigned the first of six partner assignments. The assignment is due in a week. You were given the contact information of your partner.",options:a})}function O(e){var t=e.updateScenario,o=e.startEarly,n=e.setUsedProf,a=e.setResult,i=e.updateTM,s=o?"Good news! You're partner responded quickly and now you both have started the assignment early. It's been 2 days and you two have completed a good chunk of the homework, but have run into an issue with your code where some of your functions are returning undefined and you both haven't been able to figure out the cause on your own. Luckily, you have 5 days to finish still and have many options available to you. Choose one of the following options:":"Unfortunately, your partner didn't contact you either. Now you both have only 2 days left to complete the assignment and you just started. Although you've been able to complete a good chunk of it, you've run into an error with your code that you can figure out. What will you do?",r=[{path:"Check Stack Overflow",handleOption:function(){o?(a(1),i(.75)):(a(2),i(1.25)),t(8)}},{path:"Ask on Piazza",handleOption:function(){o?(a(3),i(.75)):Math.floor(100*Math.random())+1>50?(a(4),i(.9)):(a(5),i(1.35));t(8)}},{path:"Go to Office Hours",handleOption:function(){n(!1),o&&(a(6),i(.75)),t(o?8:7)}},{path:"Talk to the Professor",handleOption:function(){n(!0),o&&(a(9),i(.5)),t(o?8:7)}},{path:"Ask on CS Khoury Discord servers",handleOption:function(){o?(a(12),i(.75)):Math.floor(100*Math.random())+1>50?(a(13),i(.9)):(a(14),i(1.35));t(8)}},{path:"Plagarizing code from the Internet",handleOption:function(){t(16)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"First Partner Assignment Pt. 2",desc:s,options:r})}var y=o.p+"static/media/no-sleep.bff8ae78.wav";function j(e){var t=e.updateScenario,o=e.usedProf,n=e.setResult,a=e.updateTM,i=o?"You were too late to go to talk with the professor in office hours and didn't end up getting any help. Now you have to grind out the assignment before it's due or you'll have to turn it in late. What will you do?":"You were too late to go to office hours and didn't end up getting any help. Now you have to grind out the assignment before it's due or you'll have to turn it in late. What will you do?",s=[{path:"Stay up and work on the homework",handleOption:function(){new Audio(y).play(),Math.floor(100*Math.random()+1)>60?(n(o?11:8),a(1.25)):(n(o?10:7),a(.75)),t(8)}},{path:"Sleep",handleOption:function(){new Audio(E).play(),Math.floor(100*Math.random()+1)>30?(n(o?11:8),a(1.4)):(n(o?10:7),a(.8)),t(8)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"First Partner Assignment Pt. 3",desc:i,options:s})}var D=o.p+"static/media/assignment-late-horn.0bb14454.wav",v=o.p+"static/media/assignment-late-trombone.0ace3615.wav",S=o.p+"static/media/wake-up-alarm.8847f0e9.wav",M={1:"You found a half solution that helped guide you to the root of the issue and finished the assignment early with little to no errors in your submission.",2:"You barely finished the assignment on time, but there are still some bad coding practices in the submission.",3:"A student and professor both responded and you were able to use their input to deduce the source of the error and you finished the assignment early with little to no errors in your submission.",4:"The responses came on the last day, but you barely submitted the assignment on time, though with a couple of small bugs and errors.",5:"The responses came on the last day so you had to submit assignment a day late.",6:"You were able to go to office hours and get help with the assignment. You finished the assignment early, and got a near perfect score!",7:"You finished the assignment on time, barely. However, your sleep schedule is now messed up and it'll take a lot of effort to fix it.",8:"You didn't have enough time to finish the assignment on time and had to turn in the assignment late.",9:"You were able to talk to the professor and get help with the assignment. You were also able to establish a good relationship with the professor, which could help in the future.",10:"You finished the assignment on time, barely. However, your sleep schedule is now messed up and it'll take a lot of effort to fix it.",11:"You didn't have enough time to finish the assignment on time and had to turn in the assignment late.",12:"Several students gave suggestions and based off those you were able to figure out the problem and turn in the assignment early. You ended up getting high marks on the assignment.",13:"Several students did end up responding, and you barely turned the assignment in on time.",14:"Several students did end up responding, but by then it was too late and you had to turn in the assignment late."};function I(e){var t=e.updateScenario,o=e.result,a="First Partner Assignment Pt. ".concat([7,8,10,11].includes(o)?4:3),i=M[o],s=[{path:"Continue",handleOption:function(){t(9)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(n.useEffect)((function(){[5,14].includes(o)&&(Math.floor(100*Math.random())+1>50?new Audio(D).play():new Audio(v).play());[8,11].includes(o)&&new Audio(S).play()}),[]),Object(d.jsx)(p,{title:a,desc:i,options:s})}var k=o.p+"static/media/game-over-trombone.5b67b7bb.wav";function P(e){var t=e.updateScenario,o=[{path:"Continue",handleOption:function(){new Audio(k).play(),t(17)}}];return Object(d.jsx)(p,{title:"Don't cheat/plagarize...",desc:"Don't cheat/plagarize.",options:o})}function x(e){var t=e.updateScenario,o=e.updateTM,n=[{path:"Do side projects",handleOption:function(){o(1.15),t(11)}},{path:"No thanks, I'll use my time for something else",handleOption:function(){t(10)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"Side Projects",desc:"You're halfway through the semester! At this point, you've learned enough to start working on side projects (or learning new languages to start your side projects). Side projects are a great way to practice your programming while also learning new skills and technologies, and creating something to add to your resume. Do you want to start investing your time into side projects?",options:n})}function Y(e){var t=e.updateScenario,o=[{path:"Continue",handleOption:function(){t(11)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"No Side Projects",desc:"Alright, that's fine for now... but you should probably do side projects once you do have free time. Maybe over the break?",options:o})}function T(e){var t=e.updateScenario,o=e.setDocumentation,n=[{path:"Add documentation",handleOption:function(){o(!0),t(12)}},{path:"Skip documentation",handleOption:function(){o(!1),t(12)}},{path:"Plagarize someone else's documentation",handleOption:function(){t(16)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"Final Assignment",desc:"The semester is coming to a close and you're doing the last assignment of the semester. However, since it's the last assignment you're feeling a little lazy about finishing it. Normally, your classes require to do thorough documentation of your code (purpose statements, explanations of complex code blocks, etc.), but it's the end of the semester and adding all that documentation is a lot of work. What will you do for this final assignment?",options:n})}function J(e){var t=e.updateScenario,o=e.documentation,n=e.updateGrade,a=o?"Added Documentation":"Skipped Documentation",i=o?"The documentation was well worth it!":"You should've done the documentation...",s=[{path:"Continue",handleOption:function(){n(o?5:-3),t(13)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:a,desc:i,options:s})}function F(e){var t=e.updateScenario,o=e.updateGrade,n=[{path:"Study for finals",handleOption:function(){o(7*Math.random()-3),t(15)}},{path:"Procrastinate studying",handleOption:function(){t(Math.floor(100*Math.random()+1)>80?14:15)}},{path:"Cheat during the exam",handleOption:function(){t(16)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"Final Exams",desc:"It's final exams week! Your final exam is coming up in 3 days, so it's now or never! What will you do?",options:n})}var U=o.p+"static/media/curve.b222ebf0.wav";function z(e){var t=e.updateScenario,o=e.updateGrade,a=[{path:"Continue",handleOption:function(){o(20),t(15)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(n.useEffect)((function(){new Audio(U).play()}),[]),Object(d.jsx)(p,{title:"The Curve",desc:"Every student's savior, the curve. Luckily, everyone else didn't do well on the final exam and the professor generously curved the exam scores. Because of the curve, your grade improved!",options:a})}var G=o.p+"static/media/ending-applause.04224f99.wav",K=o.p+"static/media/sneeze.4d0399be.wav";function R(e){var t=e.updateScenario,o=e.grade,n=e.calcGrade,a=function(e){return e>=90?(new Audio(G).play(),"You're a CS WIZ (or really lucky)!"):e>=80?(new Audio(G).play(),"Nice, you passed..."):e>=70?(new Audio(K).play(),"Rough semester... get'em next time?"):e>=60?(new Audio(k).play(),"You Failed :("):(new Audio(k).play(),"F IS FOR FAILURE")}(o),i="Your final grade at the end of the semester is a ".concat(o.toFixed(2),"% (").concat(n(o),'). I hope you enjoyed playing this interactive fiction! If you want to try going down a different path, click the "Play Again" button below.'),s=[{path:"Play Again?",handleOption:function(){t(0)}}];return Object(d.jsx)(p,{title:a,desc:i,options:s})}function q(e){var t=e.updateScenario,o=[{path:"Try Again?",handleOption:function(){t(0)}}];return Object(d.jsx)(p,{title:"You Failed!",desc:"Unfortunately, you failed to finish semester. Maybe you'll have better luck next next semester?",options:o})}var Z=o.p+"static/media/intellij.11b68713.png",L=o.p+"static/media/notepad.0e4ec9bb.png",V=o.p+"static/media/vim.e694faea.png",H=o.p+"static/media/vscode.6acf7130.png",W=o.p+"static/media/xcode.1684199e.png";function N(e){var t=e.updateScenario,o=e.updateTM,n=e.setEditorIcon,a=[{path:"Native Language IDE",handleOption:function(){var e=Math.floor(100*Math.random());n(e>66?Z:e>33?"data:image/png;base64,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":W),t(3)}},{path:"VS Code",handleOption:function(){n(H),o(Math.floor(100*Math.random()+1)>95?.7:1),t(3)}},{path:"Notepad",handleOption:function(){n(L),o(4),t(3)}},{path:"Vim",handleOption:function(){n(V),Math.floor(100*Math.random())+1>10?o(3):o(1.5),t(3)}},{path:"Switch majors",handleOption:function(){t(18)}},{path:"Drop out of college",handleOption:function(){t(19)}}];return Object(d.jsx)(p,{title:"Choose an Editor",desc:"Now that you have a laptop, you need to figure out what\n        editor you are going to use to do your coding on. Like laptops, there are\n        many options available. Here are some common options:",options:a})}var X=o.p+"static/media/home-screen.5e490514.mp3";function $(e){var t=e.updateScenario,o=[{path:"Play Again?",handleOption:function(){t(0)}}];return Object(n.useEffect)((function(){new Audio(K).play()}),[]),Object(d.jsx)(p,{title:"Dropping Out",desc:"It seems college wasn't right for you, and that's alright! There are many different pathways to success and college is just one of them. With enough effort, you'll find another way to be successful in your future, hopefully. I hope you enjoyed playing this interactive fiction! If you want to try going down a different path, click the \"Play Again\" button below.",options:o})}function _(e){var t=e.updateScenario,o=[{path:"Play Again?",handleOption:function(){t(0)}}];return Object(n.useEffect)((function(){new Audio(K).play()}),[]),Object(d.jsx)(p,{title:"Switching Majors",desc:"Switching majors is a valid choice; computer science isn't for everybody. There are many other majors to choose from, so hopefully you'll find something that interests you. I hope you enjoyed playing this interactive fiction! If you want to try going down a different path, click the \"Play Again\" button below.",options:o})}var ee=new Audio(X);ee.loop=!0;var te=function(){var e=Object(n.useState)(100),t=Object(r.a)(e,2),o=t[0],a=t[1],i=Object(n.useState)(1),s=Object(r.a)(i,2),c=s[0],A=s[1],u=Object(n.useState)("default"),h=Object(r.a)(u,2),l=h[0],g=h[1],p=Object(n.useState)(0),E=Object(r.a)(p,2),y=E[0],D=E[1],v=Object(n.useState)(Object(d.jsx)(d.Fragment,{})),S=Object(r.a)(v,2),M=S[0],k=S[1],U=Object(n.useState)(),G=Object(r.a)(U,2),K=G[0],Z=G[1],L=Object(n.useState)(),V=Object(r.a)(L,2),H=V[0],W=V[1],X=Object(n.useState)(),te=Object(r.a)(X,2),oe=te[0],ne=te[1],ae=Object(n.useState)(),ie=Object(r.a)(ae,2),se=ie[0],re=ie[1],ce=Object(n.useState)(""),Ae=Object(r.a)(ce,2),ue=Ae[0],de=Ae[1],he=Object(n.useRef)(null),le=[4,5,8,9,11,12,13,14,15];Object(n.useEffect)((function(){console.log("curr grade: "+o)}),[o]),Object(n.useEffect)((function(){console.log("curr tm: "+c)}),[c]),Object(n.useEffect)((function(){le.includes(y)?(console.log("calc grade"),function(){console.log("timeMultiplier: "+c);var e=Math.random()-Math.min(.5*c,1);console.log("direction multiplier: "+e);var t=e*(Math.random()*c*5);console.log("std dev: "+t);var n=Math.min(o+t,100);a(n)}()):16===y?a(0):0===y?(ee.play(),ee.muted=!1,a(100),g("default"),de(""),A(1)):2===y&&(ee.muted=!0),me()}),[y]);var ge=function(e){D(e)},pe=function(e){A(Math.min(7,c*e))},fe=function(e){a(o+e)},we={0:Object(d.jsx)(B,{updateScenario:ge}),1:Object(d.jsx)(f,{updateScenario:ge,setBackground:g}),2:Object(d.jsx)(N,{updateScenario:ge,updateTM:pe,setEditorIcon:de}),3:Object(d.jsx)(C,{updateScenario:ge,updateTM:pe}),4:Object(d.jsx)(Q,{updateScenario:ge,updateTM:pe}),5:Object(d.jsx)(b,{updateScenario:ge,setStartEarly:Z,updateTM:pe}),6:Object(d.jsx)(O,{updateScenario:ge,startEarly:K,setUsedProf:W,setResult:ne,updateTM:pe}),7:Object(d.jsx)(j,{updateScenario:ge,usedProf:H,setResult:ne,updateTM:pe}),8:Object(d.jsx)(I,{updateScenario:ge,result:oe}),9:Object(d.jsx)(x,{updateScenario:ge,updateTM:pe}),10:Object(d.jsx)(Y,{updateScenario:ge}),11:Object(d.jsx)(T,{updateScenario:ge,setDocumentation:re}),12:Object(d.jsx)(J,{updateScenario:ge,documentation:se,updateGrade:fe}),13:Object(d.jsx)(F,{updateScenario:ge,updateGrade:fe}),14:Object(d.jsx)(z,{updateScenario:ge,updateGrade:fe}),15:Object(d.jsx)(R,{updateScenario:ge,grade:o,calcGrade:w}),16:Object(d.jsx)(P,{updateScenario:ge}),17:Object(d.jsx)(q,{updateScenario:ge}),18:Object(d.jsx)(_,{updateScenario:ge}),19:Object(d.jsx)($,{updateScenario:ge})},me=function(){k(we[y])};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"app-background ".concat(l),ref:he}),Object(d.jsxs)("div",{className:"top-bar",children:[Object(d.jsx)("img",{className:"editor-icon ".concat(ue?"visible":"hidden"),src:ue,alt:"icon of editor"}),Object(d.jsx)(m,{grade:o})]}),M]})},oe=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;o(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(te,{})}),document.getElementById("root")),oe()}],[[18,1,2]]]);
//# sourceMappingURL=main.9b922273.chunk.js.map