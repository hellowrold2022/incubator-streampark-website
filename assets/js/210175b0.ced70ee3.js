"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5331],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={id:"development",title:"Develop Environment",sidebar_position:3},i=void 0,l={unversionedId:"user-guide/development",id:"user-guide/development",title:"Develop Environment",description:"StreamPark(https://github.org.apache.streampark.pulls) Or ISSUE. If you like, please give a star, your support is our greatest motivation. This project has been concerned and recognized by many friends since it was open source. Some friends are using it. They come from finance, data analysis, Internet of vehicles, smart advertising, real estate and other companies, and There are even some friends from the first-line big factories.",source:"@site/docs/user-guide/3-development.md",sourceDirName:"user-guide",slug:"/user-guide/development",permalink:"/docs/user-guide/development",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/user-guide/3-development.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"development",title:"Develop Environment",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/docs/user-guide/quick-start"},next:{title:"Docker Quick Tutorial",permalink:"/docs/user-guide/docker-deployment"}},s={},p=[{value:"Install Hadoop (optional\uff0cYARN Runtime)",id:"install-hadoop-optionalyarn-runtime",level:2},{value:"Install Hadoop environment locally",id:"install-hadoop-environment-locally",level:3},{value:"Use existing Hadoop cluster",id:"use-existing-hadoop-cluster",level:3},{value:"Install kubernetes (optional, k8s runtime)",id:"install-kubernetes-optional-k8s-runtime",level:2},{value:"Install Flink (optional, Standalone Runtime)",id:"install-flink-optional-standalone-runtime",level:2},{value:"Install maven",id:"install-maven",level:2},{value:"Install MySQL",id:"install-mysql",level:2},{value:"Install Nodejs",id:"install-nodejs",level:2},{value:"Install and configure StreamPark",id:"install-and-configure-streampark",level:2},{value:"Backend deployment and configuration",id:"backend-deployment-and-configuration",level:3},{value:"Backend compilation",id:"backend-compilation",level:4},{value:"Backend decompression",id:"backend-decompression",level:4},{value:"Backend configuration",id:"backend-configuration",level:4},{value:"Backend startup",id:"backend-startup",level:4},{value:"VM options",id:"vm-options",level:5},{value:"Environment variables",id:"environment-variables",level:5},{value:"Frontend deployment and configuration",id:"frontend-deployment-and-configuration",level:3},{value:"Frontend configuration",id:"frontend-configuration",level:4},{value:"Code compile",id:"code-compile",level:4},{value:"Start server",id:"start-server",level:4}],d={toc:p};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[StreamPark]","(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-streampark"},"https://github.com/apache/incubator-streampark"),". follows the Apache license 2.0, it will be a long-term active project. Welcome to submit ",(0,o.kt)("a",{parentName:"p",href:"https://github.org.apache.streampark.pulls"},"PR")," Or ",(0,o.kt)("a",{parentName:"p",href:"https://github.org.apache.streampark.issues/new/choose"},"ISSUE"),". If you like, please give a ",(0,o.kt)("a",{parentName:"p",href:"https://github.org.apache.streampark.stargazers"},"star"),", your support is our greatest motivation. This project has been concerned and recognized by many friends since it was open source. Some friends are using it. They come from finance, data analysis, Internet of vehicles, smart advertising, real estate and other companies, and There are even some friends from the first-line big factories.\nStreamPark community is a very open, mutual assistance and respect for talents. We also welcome more developers to join us and contribute together, not only for the code, but also for the use of documents, experience reports, questions and answers.")),(0,o.kt)("p",null,"More and more developers are not satisfied with the simple installation and use, and need to be further researched or expanded based on its source code, which requires further in-depth understanding of StreamPark. This chapter specifically describes how to build a development environment for the ",(0,o.kt)("inlineCode",{parentName:"p"},"streampark-console")," streaming batch integration platform locally. For convenience of explanation, the ",(0,o.kt)("inlineCode",{parentName:"p"},"streampark-console")," mentioned in this article refers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"streampark-console platform"),"."),(0,o.kt)("p",null,"StreamPark console has realized the decoupling of Flink runtime since version 1.2.0, That is, ",(0,o.kt)("strong",{parentName:"p"},"it is not mandatory to rely on Hadoop or kubernetes environment")," and can install Hadoop or kubernetes according to your actual needs."),(0,o.kt)("h2",{id:"install-hadoop-optionalyarn-runtime"},"Install Hadoop (optional\uff0cYARN Runtime)"),(0,o.kt)("p",null,"You can install Hadoop locally or use the existing Hadoop environment, but the following conditions are required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install and configure ",(0,o.kt)("inlineCode",{parentName:"li"},"Hadoop")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn")),(0,o.kt)("li",{parentName:"ul"},"Configured ",(0,o.kt)("inlineCode",{parentName:"li"},"HADOOP_HOME")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"HADOOP_CONF_ DIR")," environment variable"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hadoop")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn")," are running normally")),(0,o.kt)("h3",{id:"install-hadoop-environment-locally"},"Install Hadoop environment locally"),(0,o.kt)("p",null,"As for how to install the Hadoop environment locally, you can refer to the relevant information by yourself, and there will not be too much explanation here."),(0,o.kt)("h3",{id:"use-existing-hadoop-cluster"},"Use existing Hadoop cluster"),(0,o.kt)("p",null,"It is recommended to use the existing Hadoop cluster (test environment). If you use the existing Hadoop cluster, you need to copy the following configuration to the development machine"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"core-site.xml"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"hdfs-site.xml")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"yard-site.xml")," files to the development machine."),(0,o.kt)("li",{parentName:"ul"},"If Kerberos authentication is enabled, you need to copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"keytab")," file and ",(0,o.kt)("inlineCode",{parentName:"li"},"krb5.conf")," to the development machine.")),(0,o.kt)("p",null,"To ensure that the local machine can connect to the cluster, you need to set the host addresses of the ",(0,o.kt)("inlineCode",{parentName:"p"},"core-site.xml"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"hdfs-site.xml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn-site.xml")," to the development machine"),(0,o.kt)("h2",{id:"install-kubernetes-optional-k8s-runtime"},"Install kubernetes (optional, k8s runtime)"),(0,o.kt)("p",null,"If you are developing locally, you can use minikube or kubesphere to quickly install kubernetes environment, Of course, it is more recommended to choose the existing k8s cluster facilities. In addition, Tencent cloud tke and Alibaba cloud ack with time billing is also a good choice for qulckly develop."),(0,o.kt)("p",null,"For additional configuration requirements, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"/docs/flink-k8s/k8s-dev"},(0,o.kt)("strong",{parentName:"a"},"streampark flink-k8s integration support"))),(0,o.kt)("h2",{id:"install-flink-optional-standalone-runtime"},"Install Flink (optional, Standalone Runtime)"),(0,o.kt)("p",null,"Download Flink from the official website, and configure FLINK_HOME"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://mirrors.bfsu.edu.cn/apache/flink/flink-1.13.1/flink-1.13.1-bin-scala_2.11.tgz\ntar xzf flink-1.13.1-bin-scala_2.11.tgz /opt/\ncd /opt/flink-1.13.1\n")),(0,o.kt)("p",null,"Start local Flink cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/start-cluster.sh\n")),(0,o.kt)("h2",{id:"install-maven"},"Install maven"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~\nwget https://dlcdn.apache.org/maven/maven-3/3.8.6/binaries/apache-maven-3.8.6-bin.tar.gz\ntar -xzvf apache-maven-3.8.6-bin.tar.gz\nln -s /root/apache-maven-3.8.6/bin/mvn /usr/bin/mvn\n")),(0,o.kt)("h2",{id:"install-mysql"},"Install MySQL"),(0,o.kt)("p",null,"MySQL is used in ",(0,o.kt)("inlineCode",{parentName:"p"},"console"),", you can install MySQL or directly use the existing mysql. Please refer to the installation and configuration of MySQL by yourself. There is no more explanation here."),(0,o.kt)("h2",{id:"install-nodejs"},"Install Nodejs"),(0,o.kt)("p",null,"The front-end part of ",(0,o.kt)("inlineCode",{parentName:"p"},"console")," is developed with nodejs. You can download and install the latest nodejs."),(0,o.kt)("h2",{id:"install-and-configure-streampark"},"Install and configure StreamPark"),(0,o.kt)("p",null,"If all the above preparations are ready, you can install and configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"streampark-console"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"streampark-console")," is a frontend and backend separated project. In order to facilitate the final packaging and deployment of the project and reduce the user's use and learning costs, the front end and back end mixed packaging and deployment mode is used. However, it is recommended to use the front end and back end separated mode for development and debugging at the development stage. The specific steps are as follows:"),(0,o.kt)("h3",{id:"backend-deployment-and-configuration"},"Backend deployment and configuration"),(0,o.kt)("p",null,"The backend of ",(0,o.kt)("inlineCode",{parentName:"p"},"streampark-console")," is developed by springboot and mybatis, and verified by JWT. Let's take a look at the specific process of backend installation and deployment."),(0,o.kt)("h4",{id:"backend-compilation"},"Backend compilation"),(0,o.kt)("p",null,"Firstly, download the ",(0,o.kt)("inlineCode",{parentName:"p"},"streampark")," project and compile it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/incubator-streampark.git streampark\ncd streampark\nmvn clean install -Dscala.version=2.12.8 -Dscala.binary.version=2.12 -DskipTests -Pwebapp\n")),(0,o.kt)("h4",{id:"backend-decompression"},"Backend decompression"),(0,o.kt)("p",null,"After the compilation, the installation package location is ",(0,o.kt)("inlineCode",{parentName:"p"},"streampark/streampark-console/streampark-console-service/target/streampark-console-service-${version}-bin.tar.gz"),", The directory structure after decompressing is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-textmate"},".\nstreampark-console-service-${version}\n\u251c\u2500\u2500 bin\n\u2502    \u251c\u2500\u2500 flame-graph\n\u2502    \u251c\u2500\u2500   \u2514\u2500\u2500 *.py\n\u2502    \u251c\u2500\u2500 startup.sh\n\u2502    \u251c\u2500\u2500 setclasspath.sh\n\u2502    \u251c\u2500\u2500 shutdown.sh\n\u2502    \u251c\u2500\u2500 yaml.sh\n\u251c\u2500\u2500 conf\n\u2502    \u251c\u2500\u2500 application.yaml\n\u2502    \u251c\u2500\u2500 flink-application.template\n\u2502    \u251c\u2500\u2500 logback-spring.xml\n\u2502    \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 lib\n\u2502    \u2514\u2500\u2500 *.jar\n\u251c\u2500\u2500 plugins\n\u2502    \u251c\u2500\u2500 streampark-jvm-profiler-1.0.0.jar\n\u2502    \u2514\u2500\u2500 streampark-flink-sqlclient-1.0.0.jar\n\u251c\u2500\u2500 logs\n\u251c\u2500\u2500 temp\n")),(0,o.kt)("p",null,"Copy the unpacked directory to other directories to prevent it from being cleaned up the next time ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn clean")," is executed. For example, if it is placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/streampark/"),", the full path of the file is ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/streampark/streampark-console-service-${version}"),", This path will be used later and there is no space in the path."),(0,o.kt)("h4",{id:"backend-configuration"},"Backend configuration"),(0,o.kt)("p",null,"Git clone streampark source code, then open it with IntelliJ idea, and modify JDBC connection information of ",(0,o.kt)("inlineCode",{parentName:"p"},"datasource")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources/application.yml"),", Please refer to ",(0,o.kt)("a",{parentName:"p",href:"http://www.streamxhub.com/zh/doc/console/deploy/#%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE"},"modify configuration")," in the installation and deployment chapter."),(0,o.kt)("img",{src:"/doc/image/streampark_conf.jpg"}),(0,o.kt)("p",null,"If the target cluster you want to connect to has Kerberos authentication enabled, you need to find the relative information under ",(0,o.kt)("inlineCode",{parentName:"p"},"resources/kerberos.xml"),"and configure it. Kerberos is off by default. To enable it, set ",(0,o.kt)("inlineCode",{parentName:"p"},"enable")," to true, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"security:\n  kerberos:\n    login:\n      enable: false\n      principal:\n      krb5:\n      keytab:\njava:\n  security:\n    krb5:\n      conf:\n")),(0,o.kt)("h4",{id:"backend-startup"},"Backend startup"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"StreamPark console")," is a web application developed based on springboot, ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.streampark.console StreamPark console")," is the main class. Before startup, you need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"VM options")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"environment variables")),(0,o.kt)("h5",{id:"vm-options"},"VM options"),(0,o.kt)("p",null,"You need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"apphome")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"VM options"),", the value is the full path of the above unpacked streampark-console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"-Dapp.home=/opt/streampark/streampark-console-service-${version}\n")),(0,o.kt)("br",null),"If the JDK version used by the development machine is above JDK1.8, the following parameters need to be added: ",(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"--add-opens java.base/jdk.internal.loader=ALL-UNNAMED --add-opens jdk.zipfs/jdk.nio.zipfs=ALL-UNNAMED\n")),(0,o.kt)("h5",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"If you use a non locally installed Hadoop cluster (test Hadoop), you need to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"HADOOP_USER_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HADOOP_CONF_DIR")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment variables"),". The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"HADOOP_USER_NAME")," is the Hadoop user name with read and write permission to HDFS. ",(0,o.kt)("inlineCode",{parentName:"p"},"HADOOP_CONF_DIR")," is the storage location of the configuration file on the development machine. If Hadoop is installed locally, the variable does not need to be configured."),(0,o.kt)("img",{src:"/doc/image/streampark_ideaopt.jpg"}),(0,o.kt)("p",null,"If everything is ready, you can start the ",(0,o.kt)("inlineCode",{parentName:"p"},"StreamParkConsole")," main class. If it is started successfully, you will see the printing information of successful startup."),(0,o.kt)("h3",{id:"frontend-deployment-and-configuration"},"Frontend deployment and configuration"),(0,o.kt)("p",null,"The frontend is developed based on nodejs and Vue, so the node environment needs to be installed on the machine. The process is as follows:"),(0,o.kt)("h4",{id:"frontend-configuration"},"Frontend configuration"),(0,o.kt)("p",null,"Since it is a frontend and backend separated project, the frontend needs to know the access address of the backend (streampark console) in order to work together. Therefore, the Vue needs to be changed",(0,o.kt)("em",{parentName:"p"}," APP")," BASE_ The value of API variable is located in:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"web config",src:t(166).Z,width:"1826",height:"1086"})),(0,o.kt)("p",null,"Default configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"VUE_APP_PORT = 10003\nVUE_APP_BASE_API = http://localhost:10000\n")),(0,o.kt)("p",null,"Parameter description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VUE_APP_PORT"),": Frontend server port"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VUE_APP_BASE_API"),": The URL address of the backend request")),(0,o.kt)("h4",{id:"code-compile"},"Code compile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd streampark-console/streampark-console-webapp\nnpm install\n")),(0,o.kt)("h4",{id:"start-server"},"Start server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd streampark-console/streampark-console-webapp\nnpm run serve\n")))}c.isMDXComponent=!0},166:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/streampark_websetting-f54589c2652dafc8fa37cd8e995e68b4.png"}}]);