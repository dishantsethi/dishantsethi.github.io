(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{54:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),a=n(21),l=n.n(a),r=(n(54),n(7));n(66),n.p,n(73);var o=n(41),j=n(43),d=n(44),b=n(33),h=n(48),O=n(46),x=n(34),u=n.n(x),p=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={checked:!1},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e="data-theme",t=document.body,n="dark"===t.getAttribute(e)?"light":"dark";t.setAttribute(e,n)}},{key:"render",value:function(){return Object(c.jsxs)("label",{children:[Object(c.jsx)(u.a,{onChange:this.handleChange,checked:this.state.checked,offColor:"#baaa80",onColor:"#353535",width:80,height:35,uncheckedIcon:Object(c.jsx)("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"80%",marginTop:"3px",fontSize:20,textAlign:"end",marginLeft:"8px",color:"#353239",backgroundColor:"unset"}}),checkedIcon:Object(c.jsx)("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"92%",marginLeft:"-3px",fontSize:25,textAlign:"end",color:"#353239",backgroundColor:"unset"}})}),Object(c.jsx)("div",{style:{color:"white"},children:"Switch Theme"})]})}}]),n}(i.Component),m=n(9);var g=function(e){return Object(i.useEffect)((function(){m.isMobile&&alert("Visit this site from Desktop/Laptop for seamless User Experience")}),[]),Object(c.jsxs)("header",{id:"home",style:{height:"100%"},children:[e.headerData&&Object(c.jsx)("a",{href:e.headerData.github_link,id:"github",target:"blank",style:{position:"absolute",transform:"rotate(315deg)"},children:Object(c.jsx)("span",{class:"iconify","data-icon":"ri-github-line","data-inline":"false",style:{backgroundColor:"white"}})}),Object(c.jsx)("div",{className:"square"}),Object(c.jsxs)("div",{className:"header-data",children:[Object(c.jsx)("h2",{style:{fontFamily:"sans-serif",marginTop:"20px",fontWeight:"bold"},children:e.headerData&&Object(c.jsx)(o.a,{steps:[e.headerData.basic_info.name]})}),Object(c.jsx)("h4",{children:e.headerData&&Object(c.jsx)(o.a,{steps:e.headerData.basic_info.titles,loop:50,wrapper:"p"})}),Object(c.jsx)("div",{children:Object(c.jsx)(p,{})})]})]})};n(72),n(71);var v=n(70);var y=function(e){var t=Object(i.useState)(),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)("div",{style:{margin:"auto"},children:[Object(c.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(c.jsx)("ion-icon",{name:"git-network-outline"}),Object(c.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Hire Me"})]}),s&&Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)(v.a.Dialog,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(c.jsx)(v.a.Title,{children:"Hire Me"})}),Object(c.jsxs)(v.a.Body,{children:[Object(c.jsxs)("p",{children:["Hi, you can drop me an email at ",Object(c.jsx)("a",{style:{all:"unset",color:"blue"},href:"mailto:dishantsethi14@gmail.com",children:"dishantsethi14@gmail.com"})]}),Object(c.jsx)("a",{href:"tel:9582565371",style:{all:"unset",margin:"10px"},children:Object(c.jsx)("ion-icon",{name:"call-outline"})}),Object(c.jsx)("a",{href:"https://api.whatsapp.com/send?phone=919582565371&text=Hello%20Dishant",style:{all:"unset",margin:"10px"},children:Object(c.jsx)("ion-icon",{name:"logo-whatsapp"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/dishant-sethi-0b1006157/",style:{all:"unset",margin:"10px"},children:Object(c.jsx)("ion-icon",{name:"logo-linkedin"})}),Object(c.jsx)("a",{href:"https://www.instagram.com/dishantsethii/",style:{all:"unset",margin:"10px"},children:Object(c.jsx)("ion-icon",{name:"logo-instagram"})}),Object(c.jsx)("a",{href:"https://github.com/dishantsethi",style:{all:"unset",margin:"10px"},children:Object(c.jsx)("ion-icon",{name:"logo-github"})})]})]})})]})},f=n(67);var w=function(e){var t=Object(i.useState)(),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)("div",{style:{margin:"auto"},children:[Object(c.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(c.jsx)("ion-icon",{name:"bar-chart-outline"}),Object(c.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Skills"})]}),s&&Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)(v.a.Dialog,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(c.jsx)(v.a.Title,{children:"Skills"})}),Object(c.jsx)(v.a.Body,{children:Object(c.jsxs)("div",{style:{overflowY:"scroll",height:"50vh"},children:[Object(c.jsx)("h5",{children:"Programming Languages"}),Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Python"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"JavaScript"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Java"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"HTML"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"CSS"})," ",Object(c.jsx)("h5",{children:"Frontend Technologies"}),Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"React"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Vue"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Nuxt"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Next"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Redux"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Vuex"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Jest"})," ",Object(c.jsx)("h5",{children:"Backend Technologies"}),Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Django"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"DjangoRestFamework"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Flask"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"RestAPI"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"PyTest"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Postgres"})," ",Object(c.jsx)("h5",{children:"Devops tools/OS"}),Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Git"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Docker"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Kubernetes"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Helm"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"AWS"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"CloudFormation"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Terraform"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"GitLab CI"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Travis CI"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Linux"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Nginx"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Shell Scripting"})," ",Object(c.jsx)("h5",{children:"Other Skills"}),Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Documentation"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Flow diagrams"})," ",Object(c.jsx)(f.a,{pill:!0,variant:"secondary",children:"Problem Solving/Debugging"})," "]})})]})})]})},k=n(47);var C=function(e){var t=Object(i.useState)(),n=Object(r.a)(t,2),s=n[0],a=n[1],l=Object(i.useState)({}),o=Object(r.a)(l,2),j=(o[0],o[1]),d=Object(i.useState)(),b=Object(r.a)(d,2),h=b[0],O=b[1],x=Object(i.useState)(),u=Object(r.a)(x,2),p=u[0],g=u[1],y=Object(i.useState)({}),f=Object(r.a)(y,2),w=f[0],C=f[1];return Object(i.useEffect)((function(){if(m.isChrome&&!m.isIOS){window.navigator.getBattery().then((function(e){O(e.level)}));var e=window.innerHeight,t=window.innerWidth,n=window.document.referrer,c=window.navigator.connection.downlink,i=window.navigator.connection.effectiveType,s=window.screen.orientation.type.indexOf("landscape")>-1?"landscape":"portrait",a=window.navigator.deviceMemory;C({mode:s,speed:c,type:i,memory:a,height:e,width:t,referrer:n})}j(Object(k.a)({},w)),fetch("https://ipapi.co/json").then((function(e){return e.json()})).then((function(e){return g(e)}))}),[]),Object(c.jsxs)("div",{style:{margin:"auto"},children:[Object(c.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(c.jsx)("ion-icon",{name:"person-add-outline"}),Object(c.jsx)("div",{style:{display:"inline",margin:"5px"},children:"About You"})]}),s&&Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)(v.a.Dialog,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(c.jsx)(v.a.Title,{children:"Lets C what I know about YOU"})}),Object(c.jsx)(v.a.Body,{children:Object(c.jsxs)("div",{style:{overflowY:"scroll",height:"50vh"},children:[p&&Object(c.jsxs)("p",{children:["Hi Explorer, You appear to be visiting my website from ip address",Object(c.jsxs)("span",{style:{color:"blue"},children:[" ",p.ip]})," whose internet service provider is ",Object(c.jsx)("span",{style:{color:"blue"},children:p.org})]}),Object(c.jsxs)("p",{children:["I can see that you are using ",m.isBrowser&&Object(c.jsx)("span",{style:{color:"blue"},children:"desktop"}),m.isMobile&&Object(c.jsx)("span",{style:{color:"blue"},children:"mobile"})," specifically ",m.browserName&&Object(c.jsx)("span",{style:{color:"blue"},children:m.browserName})," browser of version ",m.browserVersion&&Object(c.jsx)("span",{style:{color:"blue"},children:m.browserVersion})]}),Object(c.jsxs)("p",{children:["Your OS seem to be ",m.osName&&Object(c.jsx)("span",{style:{color:"blue"},children:m.osName})," of version ",m.osVersion&&Object(c.jsx)("span",{style:{color:"blue"},children:m.osVersion})," ",w.memory&&Object(c.jsxs)("span",{style:{color:"blue"},children:[" having ",w.memory,"GB"]})," of RAM"]}),p&&Object(c.jsxs)("p",{children:["You seem to be at ",Object(c.jsx)("span",{style:{color:"blue"},children:p.latitude})," latitude and ",Object(c.jsx)("span",{style:{color:"blue"},children:p.longitude})," longitude in ",Object(c.jsxs)("span",{style:{color:"blue"},children:[p.city," ",p.region]})," of country ",Object(c.jsx)("span",{style:{color:"blue"},children:p.country_name})," whose capital is ",Object(c.jsx)("span",{style:{color:"blue"},children:p.country_capital})," and currency is ",Object(c.jsxs)("span",{style:{color:"blue"},children:[p.currency," ",p.currency_name]})]}),w.height&&Object(c.jsxs)("p",{children:["Your device's screen height is ",Object(c.jsx)("i",{style:{color:"blue"},children:w.height})," pixels and screen width is ",Object(c.jsx)("i",{style:{color:"blue"},children:w.width})," pixels, Your device is currently in the ",w.mode&&Object(c.jsx)("i",{style:{color:"blue"},children:w.mode})," mode and seems to be tilted at 0 degree angle"]}),w.speed&&Object(c.jsxs)("p",{children:["Your network speed seem to be around ",w.speed,"mbps which is effectively a ",w.type," network"]}),h&&Object(c.jsxs)("p",{children:["Your battery seems to be having ",Object(c.jsxs)("i",{style:{color:"blue"},children:[100*h,"%"]})," charge."]}),w.referrer&&Object(c.jsxs)("p",{children:["You seem to have arrived here from the website ",Object(c.jsx)("i",{style:{color:"blue"},children:w.referrer})]})]})})]})})]})},N=n(68),S=n(69);n(62);var D=function(e){var t=Object(i.useState)(),n=Object(r.a)(t,2),s=n[0],a=n[1],l=Object(i.useState)(!0),o=Object(r.a)(l,2),j=o[0],d=o[1];return Object(c.jsxs)("div",{style:{margin:"auto"},children:[Object(c.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(c.jsx)("ion-icon",{name:"happy-outline"}),Object(c.jsx)("div",{style:{display:"inline",margin:"5px"},children:"About"})]}),s&&Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)(v.a.Dialog,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(c.jsx)(v.a.Title,{children:"About Dishant"})}),Object(c.jsx)(v.a.Body,{children:Object(c.jsxs)("div",{style:{overflowY:"scroll",height:"50vh"},children:[j?Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{style:{textAlign:"center"},children:[Object(c.jsx)("b",{children:"Dishant Sethi"})," is a ",Object(c.jsx)("span",{style:{color:"blue"},children:"reserved, clam and low-pitched"})," person who tends to listen and consider the ideas and feelings of others. He is a ",Object(c.jsx)("span",{style:{color:"blue"},children:"low maintainance friends and colleague"}),". He probably looks at his phone and wait it to stop ringing so that he can text and ask you what you want. He loves to ",Object(c.jsx)("span",{style:{color:"blue"},children:"cook and eat food, travel, gym and has recently started reading books"})," in free time. Apart from his full-time job, he loves ",Object(c.jsx)("span",{style:{color:"blue"},children:"playing cricket"}),". He love to ",Object(c.jsx)("span",{style:{color:"blue"},children:"make memes"})," and make people laugh."]}),Object(c.jsx)("p",{style:{textAlign:"center"},children:"Dont DM for rishtas"})]}):Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Outline of his Technical Experience"}),Object(c.jsx)("br",{}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Good understading of Kubernetes and Helm"}),Object(c.jsx)("li",{children:"Good understading for Django and Flask"}),Object(c.jsx)("li",{children:"To be Certified React, Redux, React Hooks, Next Developer"}),Object(c.jsx)("li",{children:"Worked with Vue and nuxt"}),Object(c.jsx)("li",{children:"To be Certified AWS Cloud Practitioner"}),Object(c.jsx)("li",{children:"Worked with AWS products such as EC2, VPC, S3, Load Balancer, Cloudwatch, Elastic Container Services for deploying solutions on the Cloud"}),Object(c.jsx)("li",{children:"Used Terraform for launching infrastructure and Travis for CI/CD"}),Object(c.jsx)("li",{children:"Worked with Queues(celery), Cache(redis), Databases(postgresql)"}),Object(c.jsx)("li",{children:"Developed, architeched microservice backend"}),Object(c.jsx)("li",{children:"Problem solving, workaround development and communication"})]})]})}),Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("span",{style:{Bottom:"100px"},children:"Professional "}),Object(c.jsx)(u.a,{onChange:function(){d(!0!==j)},checked:j,offColor:"#baaa80",onColor:"#353535",uncheckedIcon:Object(c.jsx)("div",{}),checkedIcon:Object(c.jsx)("div",{})}),Object(c.jsx)("span",{children:" Personal"})]})]})})]})})]})};var T=function(e){var t=Object(i.useState)(),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)("div",{style:{margin:"auto"},children:[Object(c.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(c.jsx)("ion-icon",{name:"book-outline"}),Object(c.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Education"})]}),s&&Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)(v.a.Dialog,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(c.jsx)(v.a.Title,{children:"Education"})}),Object(c.jsx)(v.a.Body,{children:Object(c.jsx)("div",{style:{overflowY:"scroll",height:"50vh"},children:Object(c.jsxs)("div",{className:"education",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"jobs",children:"Amity University, Noida"}),Object(c.jsxs)("div",{className:"jobs__desc",children:[Object(c.jsx)("strong",{children:"BTech CSE"})," 2016 - 2020",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"CGPA - 7.46/10.0"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("li",{children:"Helped in managing various events and workshops in college"}),Object(c.jsx)("li",{children:"Helped in establishing a Linux User Group (ALiAS)"}),Object(c.jsx)("li",{children:"Member of Umeed A Drop of Hope NGO"})]})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"jobs",children:"N C Jindal Public School, Punjabi Bagh"}),Object(c.jsxs)("div",{className:"jobs__desc",children:[Object(c.jsx)("strong",{children:"Secondary Education"})," 2014 - 2016",Object(c.jsx)("div",{children:Object(c.jsx)("li",{children:"Science (Non-med)"})})]})]}),Object(c.jsx)("p",{className:"jobs",children:"Certified AWS Cloud Practitioner - AWS"}),Object(c.jsx)("p",{className:"jobs",children:"Certified React, Redux Developer - Udemy"}),Object(c.jsx)("p",{className:"jobs",children:"Certified Django and Django Rest Framework Web Developer - Udemy"})]})})})]})})]})};var _=function(e){var t=Object(i.useState)(),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)("div",{style:{margin:"auto"},children:[Object(c.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(c.jsx)("ion-icon",{name:"code-outline"}),Object(c.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Projects"})]}),s&&Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)(v.a.Dialog,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(c.jsx)(v.a.Title,{children:"Projects"})}),Object(c.jsx)(v.a.Body,{children:Object(c.jsx)("div",{style:{overflowY:"scroll",height:"50vh"},children:Object(c.jsx)("div",{className:"projects",children:Object(c.jsxs)("div",{style:{marginBottom:0},children:[Object(c.jsx)("p",{className:"jobs__heading",children:"Portfolio Website\u200b"}),Object(c.jsxs)("div",{className:"jobs__desc",children:["A Personal Portfolio website built on:",Object(c.jsx)("li",{children:"Reactjs, React-bootstrap"}),Object(c.jsx)("li",{children:"Deployed on github pages"})]})]})})})})]})})]})};var A=function(e){var t=Object(i.useState)(),n=Object(r.a)(t,2),s=n[0],a=n[1],l=Object(i.useState)(),o=Object(r.a)(l,2),j=o[0],d=o[1],b=Object(i.useState)(),h=Object(r.a)(b,2),O=h[0],x=h[1],u=Object(i.useState)(),p=Object(r.a)(u,2),m=p[0],g=p[1];return Object(c.jsxs)("div",{style:{margin:"auto"},children:[Object(c.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(c.jsx)("ion-icon",{name:"desktop-outline"}),Object(c.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Experience"})]}),s&&Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)(v.a.Dialog,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(c.jsx)(v.a.Title,{children:"Experience"})}),Object(c.jsx)(v.a.Body,{children:Object(c.jsx)("div",{style:{overflowY:"scroll",height:"50vh"},children:Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsxs)("div",{style:{marginBottom:20},children:[Object(c.jsx)("button",{style:{all:"unset"},onClick:function(){d(!0!==j)},children:Object(c.jsxs)("p",{className:"jobs",children:["Essentia Softserv LLP",Object(c.jsx)("ion-icon",{name:"caret-down-outline"})]})}),!j&&Object(c.jsxs)("span",{children:[Object(c.jsxs)("strong",{className:"jobs__desc",children:[Object(c.jsx)("br",{}),"Software Development Engineer June 2020 - Present"]}),Object(c.jsxs)("strong",{className:"jobs__desc",children:[Object(c.jsx)("br",{}),"SDE Intern May 2019 - July 2019"]})]}),j&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"jobs__desc",children:[Object(c.jsx)("strong",{children:"Software Development Engineer"})," June 2020 - Present",Object(c.jsxs)("div",{children:[Object(c.jsxs)("li",{children:["Managed deployments of ",Object(c.jsx)("strong",{children:"Vue/Nuxt/Django"})," based projects on ",Object(c.jsx)("strong",{children:"Kubernetes(DigitalOcean)"})," and ",Object(c.jsx)("strong",{children:"AWS"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"CI/CD on Gitlab"})," for Vue/Nuxt/Django based projects"]}),Object(c.jsxs)("li",{children:["Contributed in company's website ",Object(c.jsx)("strong",{children:"UI, Dockerfile, Helm Charts, backend APIs"})," "]}),Object(c.jsxs)("li",{children:["Technologies - ",Object(c.jsx)("strong",{children:"Vue, Nuxt, Docker, Kubernetes, Django Rest Framework"})," "]})]})]}),Object(c.jsxs)("div",{className:"jobs__desc",children:[Object(c.jsx)("strong",{children:"SDE Intern"})," May 2019 - July 2019",Object(c.jsxs)("div",{children:["The internship aims to solve the issues of a few open-source projects (pythonindia/junction and Fueled/django-init) that concern the company.",Object(c.jsx)("li",{children:"Send PR for few bugs of pythonindia/junction"}),Object(c.jsx)("li",{children:"Study the architecture of Fueled/django-init"}),Object(c.jsx)("li",{children:"Technologies - Python Django, Docker"})]})]})]})]}),Object(c.jsxs)("div",{style:{marginBottom:20},children:[Object(c.jsx)("button",{style:{all:"unset"},onClick:function(){x(!0!==O)},children:Object(c.jsxs)("p",{className:"jobs",children:["Eckovation",Object(c.jsx)("ion-icon",{name:"caret-down-outline"})]})}),!O&&Object(c.jsxs)("strong",{className:"jobs__desc",children:[Object(c.jsx)("br",{}),"Campus Ambassador Oct 2018 - March 2019"]}),O&&Object(c.jsxs)("div",{className:"jobs__desc",children:[Object(c.jsx)("strong",{children:"Campus Ambassador"})," Oct 2018 - March 2019",Object(c.jsx)("div",{children:"Campus Ambassador for college students to introduce them to programming and Eckovation through workshops."})]})]}),Object(c.jsxs)("div",{style:{marginBottom:20},children:[Object(c.jsx)("button",{style:{all:"unset"},onClick:function(){g(!0!==m)},children:Object(c.jsxs)("p",{className:"jobs",children:["The CasIT",Object(c.jsx)("ion-icon",{name:"caret-down-outline"})]})}),!m&&Object(c.jsxs)("strong",{className:"jobs__desc",children:[Object(c.jsx)("br",{}),"Web Development Intern May 2018 - June 2018"]}),m&&Object(c.jsxs)("div",{className:"jobs__desc",children:[Object(c.jsx)("strong",{children:"Web Development Intern"})," May 2018 - June 2018",Object(c.jsxs)("div",{children:["Contributed in creating UI for project titled 'Agri Coaching'",Object(c.jsx)("li",{children:"Technologies - CSS, Javascript"})]})]})]})]})})})]})})]})};var B=function(e){var t=Object(i.useState)(),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)("div",{style:{margin:"auto"},children:[Object(c.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(c.jsx)("ion-icon",{name:"card-outline"}),Object(c.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Donate"})]}),s&&Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)(v.a.Dialog,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(c.jsx)(v.a.Title,{children:"Want to Donate ?? "})}),Object(c.jsx)(v.a.Body,{children:Object(c.jsx)("p",{children:"Thanks for showing interest"})})]})})]})};var P=function(e){var t=Object(i.useState)(new Date),n=Object(r.a)(t,2),s=n[0],a=n[1],l=Object(i.useState)(!1),o=Object(r.a)(l,2),j=o[0],d=o[1],b=Object(i.useState)(),h=Object(r.a)(b,2),O=h[0],x=h[1];return Object(i.useEffect)((function(){var e=setInterval((function(){return a(new Date)}),1e3);return function(){clearInterval(e)}})),Object(c.jsx)("div",{id:"taskbar-wrapper",children:Object(c.jsxs)("div",{id:"taskbar",children:[Object(c.jsxs)("div",{id:"quickstart",children:[Object(c.jsxs)("div",{class:"dropup",children:[Object(c.jsx)("button",{style:{all:"unset"},onClick:function(){d(!1===j)},children:Object(c.jsx)("span",{class:"iconify","data-icon":"ant-design:windows-filled","data-inline":"false",style:{boxShadow:"100px"}})}),j&&Object(c.jsx)("div",{class:"dropup-content",children:Object(c.jsxs)(N.a,{class:"ow",style:{width:"40vw",backgroundColor:"currentColor",margin:"0px",paddingTop:"10px",paddingLeft:"7px",paddingRight:"7px"},children:[Object(c.jsxs)(S.a,{style:{color:"white"},children:[Object(c.jsx)(N.a,{id:"menu-icon",children:Object(c.jsx)(D,{})}),Object(c.jsx)(N.a,{id:"menu-icon",children:Object(c.jsx)(w,{})}),Object(c.jsx)(N.a,{id:"menu-icon",children:Object(c.jsx)(A,{})}),Object(c.jsx)(N.a,{id:"menu-icon",children:Object(c.jsx)(_,{})}),Object(c.jsx)(N.a,{id:"menu-icon",children:Object(c.jsx)(T,{})}),Object(c.jsx)(N.a,{id:"menu-icon",children:Object(c.jsx)(C,{})}),Object(c.jsx)(N.a,{id:"menu-icon",children:Object(c.jsx)(y,{})}),Object(c.jsx)(N.a,{id:"menu-icon",children:Object(c.jsx)(B,{})})]}),m.isBrowser&&Object(c.jsx)(S.a,{style:{width:"10px"},children:Object(c.jsxs)("div",{className:"metro",children:[Object(c.jsxs)("div",{className:"l1",children:[Object(c.jsx)("li",{className:"item i1",children:Object(c.jsx)("a",{href:"https://google.com",target:"blank",style:{display:"block",background:"unset"},children:Object(c.jsxs)("div",{style:{marginTop:"4%"},children:[Object(c.jsx)("ion-icon",{name:"logo-chrome"}),Object(c.jsx)("div",{children:" Chrome"})]})})}),Object(c.jsx)("li",{className:"item i2",children:Object(c.jsx)("a",{href:"https://www.google.com/search?q=videos",target:"blank",style:{display:"block",background:"unset"},children:Object(c.jsxs)("div",{style:{marginTop:"4%"},children:[Object(c.jsx)("ion-icon",{name:"videocam-outline"}),Object(c.jsx)("div",{children:" Videos"})]})})})]}),Object(c.jsx)("div",{className:"l1",children:Object(c.jsx)("li",{className:"item i3",children:Object(c.jsx)("a",{href:"https://www.youtube.com/",target:"blank",style:{display:"block",background:"unset"},children:Object(c.jsxs)("div",{style:{marginTop:"4%"},children:[Object(c.jsx)("ion-icon",{name:"logo-youtube"}),Object(c.jsx)("div",{children:" Youtube"})]})})})}),Object(c.jsxs)("div",{className:"l1",children:[Object(c.jsx)("li",{className:"item i4",children:Object(c.jsx)("a",{href:"https://myaccount.google.com/",target:"blank",style:{display:"block",background:"unset"},children:Object(c.jsxs)("div",{style:{marginTop:"4%"},children:[Object(c.jsx)("ion-icon",{name:"settings-outline"}),Object(c.jsx)("div",{children:" Control Panel"})]})})}),Object(c.jsx)("li",{className:"item i5",children:Object(c.jsx)("a",{href:"https://www.netflix.com/",target:"blank",style:{display:"block",background:"unset"},children:Object(c.jsxs)("div",{style:{marginTop:"4%"},children:[Object(c.jsx)("ion-icon",{name:"tv-outline"}),Object(c.jsx)("div",{children:"Movie & TV"})]})})})]}),Object(c.jsx)("div",{className:"l1",children:Object(c.jsx)("li",{className:"item i6",children:Object(c.jsx)("a",{href:"https://photos.google.com/",target:"blank",style:{display:"block",background:"unset"},children:Object(c.jsxs)("div",{style:{marginTop:"4%"},children:[Object(c.jsx)("ion-icon",{name:"image-outline"}),Object(c.jsx)("div",{children:" Photos"})]})})})})]})})]})})]}),Object(c.jsxs)("div",{class:"dropup",children:[Object(c.jsx)("button",{style:{all:"unset"},onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:Object(c.jsx)("span",{class:"iconify","data-icon":"fluent:mail-28-filled","data-inline":"false"})}),O&&Object(c.jsx)("div",{class:"dropup-content",children:Object(c.jsx)("a",{children:"Ah! No New message. You're Single!"})})]}),Object(c.jsx)("a",{href:"https://www.google.com",title:"Open New Tab",target:"blank",children:Object(c.jsx)("span",{class:"iconify","data-icon":"grommet-icons:chrome","data-inline":"false"})}),Object(c.jsx)("a",{href:"https://www.netflix.com",target:"blank",children:Object(c.jsx)("span",{class:"iconify","data-icon":"logos:netflix-icon","data-inline":"false"})}),e.headerData&&Object(c.jsx)("a",{href:e.headerData.linkedin_link,target:"blank",children:Object(c.jsx)("span",{class:"iconify","data-icon":"logos:linkedin-icon","data-inline":"false"})})]}),Object(c.jsxs)("div",{id:"tray",children:[Object(c.jsxs)("span",{id:"system-time",children:[s.getHours(),":",s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes(),":",s.getSeconds(),Object(c.jsx)("br",{}),s.getDate(),"/",s.getMonth()+1,"/",s.getFullYear()]}),Object(c.jsx)("span",{id:"language",children:"ENG"})]})]})})};var H=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(i.useEffect)((function(){fetch("info.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(g,{headerData:n}),Object(c.jsx)(P,{headerData:n})]})};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(H,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.87416ede.chunk.js.map