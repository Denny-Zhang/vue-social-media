import{P as p,R as g,E as o,a as h}from"./index.js";import{Y as R,u,d as S,f as A,ad as k,c as y,k as b}from"./vue-Bks1hA2_.js";import{u as P}from"./useDesign-DNtIzjv4.js";import{B as D,y as G}from"./antd-CDC2_N86.js";const C="/assets/no-data-BKo151DF.svg",B="/assets/net-error-sXkbaH3y.svg";function x(s){}function I(s){const{push:n,replace:r}=s||R();function a(t=p.BASE_HOME,e=!1){t&&(e?r(t).catch(x):n(t).catch(x))}return a}const M=s=>{const{replace:n,currentRoute:r}=s||R(),{query:a,params:t={},name:e,fullPath:l}=u(r.value);function c(){return new Promise(i=>{if(e===g){i(!1);return}e&&Object.keys(t).length>0?(t._origin_params=JSON.stringify(t!=null?t:{}),t._redirect_type="name",t.path=String(e)):(t._redirect_type="path",t.path=l),n({name:g,params:t,query:a}).then(()=>i(!0))})}return c},L=S({name:"ErrorPage",props:{status:{type:Number,default:o.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(s){const n=A(new Map),{query:r}=k(),a=I(),t=M(),{t:e}=h(),{prefixCls:l}=P("app-exception-page"),c=y(()=>{const{status:T}=r,{status:m}=s;return Number(T)||m}),i=y(()=>u(n).get(u(c))),E=e("sys.exception.backLogin"),f=e("sys.exception.backHome");return u(n).set(o.PAGE_NOT_ACCESS,{title:"403",status:`${o.PAGE_NOT_ACCESS}`,subTitle:e("sys.exception.subTitle403"),btnText:s.full?E:f,handler:()=>s.full?a(p.BASE_LOGIN):a()}),u(n).set(o.PAGE_NOT_FOUND,{title:"404",status:`${o.PAGE_NOT_FOUND}`,subTitle:e("sys.exception.subTitle404"),btnText:s.full?E:f,handler:()=>s.full?a(p.BASE_LOGIN):a()}),u(n).set(o.ERROR,{title:"500",status:`${o.ERROR}`,subTitle:e("sys.exception.subTitle500"),btnText:f,handler:()=>a()}),u(n).set(o.PAGE_NOT_DATA,{title:e("sys.exception.noDataTitle"),subTitle:"",btnText:e("common.redo"),handler:()=>t(),icon:C}),u(n).set(o.NET_WORK_ERROR,{title:e("sys.exception.networkErrorTitle"),subTitle:e("sys.exception.networkErrorSubTitle"),btnText:e("common.redo"),handler:()=>t(),icon:B}),()=>{const{title:T,subTitle:m,btnText:d,icon:_,handler:O,status:N}=u(i)||{};return b(G,{class:l,status:N,title:s.title||T,"sub-title":s.subTitle||m},{extra:()=>d&&b(D,{type:"primary",onClick:O},{default:()=>d}),icon:()=>_?b("img",{src:_},null):null})}}});export{L as default};
