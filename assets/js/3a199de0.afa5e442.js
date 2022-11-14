"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5276],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>b});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=l,f=p["".concat(i,".").concat(b)]||p[b]||s[b]||o;return t?n.createElement(f,r(r({ref:a},d),{},{components:t})):n.createElement(f,r({ref:a},d))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=p;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var u=2;u<o;u++)r[u]=t[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8135:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(7462),l=(t(7294),t(3905));const o={id:"10-explain",title:"explain",sidebar_position:10},r=void 0,c={unversionedId:"flinksql/syntax/10-explain",id:"flinksql/syntax/10-explain",title:"explain",description:"\u4ecb\u7ecd",source:"@site/docs/flinksql/syntax/10-explain.md",sourceDirName:"flinksql/syntax",slug:"/flinksql/syntax/10-explain",permalink:"/docs/flinksql/syntax/10-explain",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/flinksql/syntax/10-explain.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"10-explain",title:"explain",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"alter",permalink:"/docs/flinksql/syntax/9-alter"},next:{title:"drop",permalink:"/docs/flinksql/syntax/11-drop"}},i={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",level:2},{value:"EXPLAIN PLAN",id:"explain-plan",level:3},{value:"EXPLAIN PLAN WITH DETAILS",id:"explain-plan-with-details",level:3},{value:"Explain\u7ec6\u8282",id:"explain\u7ec6\u8282",level:2}],d={toc:u};function s(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"EXPLAIN\u8bed\u53e5\u7528\u4e8e\u89e3\u91caSELECT\u6216INSERT\u8bed\u53e5\u7684\u903b\u8f91\u548c\u4f18\u5316\u7684\u67e5\u8be2\u8ba1\u5212\u3002"),(0,l.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.kt)("p",null,"flink-1.13.x\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN PLAN FOR <query_statement_or_insert_statement>\n")),(0,l.kt)("p",null,"flink-1.14.x\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN [([ExplainDetail[, ExplainDetail]*]) | PLAN FOR] <query_statement_or_insert_statement>\n")),(0,l.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"Flink SQL> CREATE TABLE MyTable1 (`count` bigint, word VARCHAR(256)) WITH (''connector'' = ''datagen'');\n[INFO] Table has been created.\n\nFlink SQL> CREATE TABLE MyTable2 (`count` bigint, word VARCHAR(256)) WITH (''connector'' = ''datagen'');\n[INFO] Table has been created.\n\nFlink SQL> EXPLAIN PLAN FOR SELECT `count`, word FROM MyTable1 WHERE word LIKE ''F%''\n> UNION ALL\n> SELECT `count`, word FROM MyTable2;\n-- \u4e0b\u9762\u7684\u8bed\u6cd5\u4ece1.14.x\u5f00\u59cb\u652f\u6301\nFlink SQL> EXPLAIN ESTIMATED_COST, CHANGELOG_MODE, JSON_EXECUTION_PLAN SELECT `count`, word FROM MyTable1\n> WHERE word LIKE ''F%''\n> UNION ALL\n> SELECT `count`, word FROM MyTable2;\n")),(0,l.kt)("h2",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),(0,l.kt)("h3",{id:"explain-plan"},"EXPLAIN PLAN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"== Abstract Syntax Tree ==\nLogicalUnion(all=[true])\n:- LogicalProject(count=[$0], word=[$1])\n:  +- LogicalFilter(condition=[LIKE($1, _UTF-16LE'F%')])\n:     +- LogicalTableScan(table=[[default_catalog, default_database, MyTable1]])\n+- LogicalProject(count=[$0], word=[$1])\n   +- LogicalTableScan(table=[[default_catalog, default_database, MyTable2]])\n\n== Optimized Physical Plan ==\nUnion(all=[true], union=[count, word])\n:- Calc(select=[count, word], where=[LIKE(word, _UTF-16LE'F%')])\n:  +- TableSourceScan(table=[[default_catalog, default_database, MyTable1]], fields=[count, word])\n+- TableSourceScan(table=[[default_catalog, default_database, MyTable2]], fields=[count, word])\n\n== Optimized Execution Plan ==\nUnion(all=[true], union=[count, word])\n:- Calc(select=[count, word], where=[LIKE(word, _UTF-16LE'F%')])\n:  +- TableSourceScan(table=[[default_catalog, default_database, MyTable1]], fields=[count, word])\n+- TableSourceScan(table=[[default_catalog, default_database, MyTable2]], fields=[count, word])\n")),(0,l.kt)("h3",{id:"explain-plan-with-details"},"EXPLAIN PLAN WITH DETAILS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'== Abstract Syntax Tree ==\nLogicalUnion(all=[true])\n:- LogicalProject(count=[$0], word=[$1])\n:  +- LogicalFilter(condition=[LIKE($1, _UTF-16LE\'F%\')])\n:     +- LogicalTableScan(table=[[default_catalog, default_database, MyTable1]])\n+- LogicalProject(count=[$0], word=[$1])\n   +- LogicalTableScan(table=[[default_catalog, default_database, MyTable2]])\n\n== Optimized Physical Plan ==\nUnion(all=[true], union=[count, word], changelogMode=[I]): rowcount = 1.05E8, cumulative cost = {3.1E8 rows, 3.05E8 cpu, 4.0E9 io, 0.0 network, 0.0 memory}\n:- Calc(select=[count, word], where=[LIKE(word, _UTF-16LE\'F%\')], changelogMode=[I]): rowcount = 5000000.0, cumulative cost = {1.05E8 rows, 1.0E8 cpu, 2.0E9 io, 0.0 network, 0.0 memory}\n:  +- TableSourceScan(table=[[default_catalog, default_database, MyTable1]], fields=[count, word], changelogMode=[I]): rowcount = 1.0E8, cumulative cost = {1.0E8 rows, 1.0E8 cpu, 2.0E9 io, 0.0 network, 0.0 memory}\n+- TableSourceScan(table=[[default_catalog, default_database, MyTable2]], fields=[count, word], changelogMode=[I]): rowcount = 1.0E8, cumulative cost = {1.0E8 rows, 1.0E8 cpu, 2.0E9 io, 0.0 network, 0.0 memory}\n\n== Optimized Execution Plan ==\nUnion(all=[true], union=[count, word])\n:- Calc(select=[count, word], where=[LIKE(word, _UTF-16LE\'F%\')])\n:  +- TableSourceScan(table=[[default_catalog, default_database, MyTable1]], fields=[count, word])\n+- TableSourceScan(table=[[default_catalog, default_database, MyTable2]], fields=[count, word])\n\n== Physical Execution Plan ==\n{\n  "nodes" : [ {\n    "id" : 37,\n    "type" : "Source: TableSourceScan(table=[[default_catalog, default_database, MyTable1]], fields=[count, word])",\n    "pact" : "Data Source",\n    "contents" : "Source: TableSourceScan(table=[[default_catalog, default_database, MyTable1]], fields=[count, word])",\n    "parallelism" : 1\n  }, {\n    "id" : 38,\n    "type" : "Calc(select=[count, word], where=[LIKE(word, _UTF-16LE\'F%\')])",\n    "pact" : "Operator",\n    "contents" : "Calc(select=[count, word], where=[LIKE(word, _UTF-16LE\'F%\')])",\n    "parallelism" : 1,\n    "predecessors" : [ {\n      "id" : 37,\n      "ship_strategy" : "FORWARD",\n      "side" : "second"\n    } ]\n  }, {\n    "id" : 39,\n    "type" : "Source: TableSourceScan(table=[[default_catalog, default_database, MyTable2]], fields=[count, word])",\n    "pact" : "Data Source",\n    "contents" : "Source: TableSourceScan(table=[[default_catalog, default_database, MyTable2]], fields=[count, word])",\n    "parallelism" : 1\n  } ]\n')),(0,l.kt)("h2",{id:"explain\u7ec6\u8282"},"Explain\u7ec6\u8282"),(0,l.kt)("p",null,"\u4eceflink-1.14.x\u5f00\u59cb\u652f\u6301\u3002"),(0,l.kt)("p",null,"\u6253\u5370\u8bed\u53e5\u5305\u542b\u6307\u5b9aexplain\u7ec6\u8282\u7684 plan \u4fe1\u606f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ESTIMATED_COST"),"\uff1a\u4f30\u8ba1\u6210\u672c\uff0c\u751f\u6210\u4f18\u5316\u5668\u4f30\u8ba1\u7684\u7269\u7406\u8282\u70b9\u7684\u6210\u672c\u4fe1\u606f\uff0c\n\u6bd4\u5982\uff1aTableSourceScan(..., cumulative cost ={1.0E8 rows, 1.0E8 cpu, 2.4E9 io, 0.0 network, 0.0 memory})\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CHANGELOG_MODE"),"\uff1a\u4e3a\u6bcf\u4e2a\u7269\u7406\u8282\u70b9\u751f\u6210\u53d8\u66f4\u65e5\u5fd7\u6a21\u5f0f\uff0c\u6bd4\u5982\uff1aGroupAggregate(..., changelogMode=","[I,UA,D]",")\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"JSON_EXECUTION_PLAN"),"\uff1a\u751f\u6210json\u683c\u5f0f\u7684\u7a0b\u5e8f\u6267\u884c\u8ba1\u5212\u3002")))}s.isMDXComponent=!0}}]);