import{r as t,j as e,s as l}from"./index-2b3c62ca.js";import{a as d}from"./axios-6f067ca8.js";const h="_Container_1oce4_1",x="_Heading_1oce4_5",_="_container_1oce4_13",g="_card_1oce4_23",j="_box_1oce4_32",m="_content_1oce4_66",p="_Technologies_1oce4_146",s={Container:h,Heading:x,container:_,card:g,box:j,content:m,Technologies:p};function f(){const[a,c]=t.useState(!0),[r,i]=t.useState([]);return t.useEffect(()=>{const n=new AbortController;return d.get("/getProjects",{signal:n.signal}).then(o=>{c(!1),i(o.data)}).catch(o=>console.log(o)),()=>{n.abort()}},[]),a?e.jsx(l,{}):e.jsxs("div",{className:s.Container,id:"Projects",children:[e.jsx("div",{className:s.Heading,children:e.jsx("h1",{children:"Projects"})}),e.jsx("div",{className:s.container,children:r.map(n=>e.jsx("div",{className:s.card,children:e.jsx("div",{className:s.box,children:e.jsxs("div",{className:s.content,children:[e.jsx("img",{src:`https://github.com/AleemIlyas/Portfolio-backend/tree/main/Images/${n.image}`,alt:n.title,loading:"lazy"}),e.jsxs("h3",{children:[" ",n.title," "]}),e.jsx("br",{}),e.jsx("p",{children:n.description.slice(0,150)}),e.jsx("a",{href:n.link,target:"_blank",children:"Go To App"}),e.jsx("ul",{className:s.Technologies,children:n.technologies.map(o=>e.jsxs("li",{children:[" ",o," "]},o))})]})})},n._id))})]})}export{f as default};
