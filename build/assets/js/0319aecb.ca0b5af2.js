(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[9696],{3933:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r={button:"button_2UxY"},s=function(e){var t=e.children;return a.createElement("div",{className:r.root},t)}},5164:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(3552),r=n(8227),s=n(7294),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={userName:"",sucess:void 0},n}(0,a.Z)(t,e);var n=t.prototype;return n.handleSubmit=function(e){var t=this;e.preventDefault();var n=0,a=0;if(this.props.children.forEach((function(e){"ExamCheckbox"===e.props.mdxType&&(n+=1,"true"===e.props.isCorrect!=!!t.state[e.props.name]&&(a+=1))})),parseInt(a/n*100)<=10){var s=new r.jsPDF({orientation:"landscape",unit:"px",format:[1100,800]});s.addImage("/certif/certificate.jpg","JPEG",0,0,1100,800),s.setFontSize(50),s.text(this.state.userName||"",550,440,{align:"center"}),s.text(this.props.moduleName||"",550,600,{align:"center"}),s.save("Certificate"+this.props.moduleName+".pdf"),this.setState({success:!0})}else this.setState({success:!1})},n.handleChange=function(e){var t;e.preventDefault();var n=e.target,a="checkbox"===n.type?n.checked:n.value,r=n.name;this.setState(((t={})[r]=a,t))},n.handleNameChange=function(e){e.preventDefault(),this.setState({userName:e.target.value})},n.render=function(){var e=this;return s.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},this.props.children.map((function(t){return t.props&&"ExamCheckbox"===t.props.mdxType?s.createElement("div",{key:t.props.name},s.createElement("label",null,s.createElement("input",{className:"exam-checkbox",name:t.props.name,type:"checkbox",checked:!!e.state[t.props.name],onChange:function(t){return e.handleChange(t)}}),t.props.children),s.createElement("br",null)):t.props&&"h3"===t.props.mdxType?s.createElement("div",{key:t.props.children},s.createElement("br",null),s.createElement("br",null),t):t})),s.createElement("br",null),s.createElement("br",null),this.state.success?s.createElement("div",{className:"green"},"Congrats, your pdf certificate has been sent!"):s.createElement("div",null,!1===this.state.success&&s.createElement("div",{className:"red"},"Sorry, you made too many mistakes, please try again."),s.createElement("label",null,"Your name:",s.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.handleNameChange(t)},className:"exam-name"})),s.createElement("input",{type:"submit",value:"Submit",className:"exam-submit"})))},t}(s.Component)},481:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return u}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),o=n(5164),i=n(3933),c={id:"exam",title:"Exam",authors:"Maxime Sallerin"},m={unversionedId:"smartpy/exam",id:"smartpy/exam",isDocsHomePage:!1,title:"Exam",description:"Question 1",source:"@site/docs/smartpy/exam.md",sourceDirName:"smartpy",slug:"/smartpy/exam",permalink:"/smartpy/exam",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/smartpy/exam.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1623685436,formattedLastUpdatedAt:"6/14/2021",frontMatter:{id:"exam",title:"Exam",authors:"Maxime Sallerin"},sidebar:"docs",previous:{title:"Smart contract development with SmartPy",permalink:"/smartpy/write-contract-smartpy"},next:{title:"Introduction",permalink:"/ligo"}},l=[{value:"Question 1",id:"question-1",children:[]},{value:"Question 2",id:"question-2",children:[]},{value:"Question 3",id:"question-3",children:[]},{value:"Question 4",id:"question-4",children:[]},{value:"Question 5",id:"question-5",children:[]},{value:"Question 6",id:"question-6",children:[]},{value:"Question 7",id:"question-7",children:[]},{value:"Question 8",id:"question-8",children:[]},{value:"Question 9 and 10",id:"question-9-and-10",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{moduleName:"DeFi",mdxType:"ExamForm"},(0,s.kt)("h3",{id:"question-1"},"Question 1"),(0,s.kt)("p",null,"What notions are defined inside the smart contract?"),(0,s.kt)(i.Z,{name:"00",isCorrect:"true",mdxType:"ExamCheckbox"},"The type definition of the storage"),(0,s.kt)(i.Z,{name:"01",isCorrect:"false",mdxType:"ExamCheckbox"},"The balance of the contract"),(0,s.kt)(i.Z,{name:"02",isCorrect:"false",mdxType:"ExamCheckbox"},"The initial value of the storage"),(0,s.kt)(i.Z,{name:"03",isCorrect:"false",mdxType:"ExamCheckbox"},"The value of the entrypoint and its related parameters"),(0,s.kt)(i.Z,{name:"04",isCorrect:"true",mdxType:"ExamCheckbox"},"The type definition of the entrypoint"),(0,s.kt)(i.Z,{name:"05",isCorrect:"false",mdxType:"ExamCheckbox"},"The size of the storage"),(0,s.kt)(i.Z,{name:"06",isCorrect:"true",mdxType:"ExamCheckbox"},"The code of the smart contract"),(0,s.kt)("h3",{id:"question-2"},"Question 2"),(0,s.kt)("p",null,"What is returned by the execution of a smart contract?"),(0,s.kt)(i.Z,{name:"10",isCorrect:"false",mdxType:"ExamCheckbox"},"The current storage state when invoking the smart contract"),(0,s.kt)(i.Z,{name:"11",isCorrect:"true",mdxType:"ExamCheckbox"},"The modified storage state after the invocation of the smart contract"),(0,s.kt)(i.Z,{name:"12",isCorrect:"false",mdxType:"ExamCheckbox"},"The entrypoint that has been called (and its related parameters)"),(0,s.kt)(i.Z,{name:"13",isCorrect:"true",mdxType:"ExamCheckbox"},"The list of emitted operations produced by the execution of the smart contract"),(0,s.kt)(i.Z,{name:"14",isCorrect:"false",mdxType:"ExamCheckbox"},"The balance of the contract"),(0,s.kt)(i.Z,{name:"15",isCorrect:"false",mdxType:"ExamCheckbox"},"The size of the storage"),(0,s.kt)(i.Z,{name:"16",isCorrect:"false",mdxType:"ExamCheckbox"},"The code of the smart contract"),(0,s.kt)(i.Z,{name:"17",isCorrect:"false",mdxType:"ExamCheckbox"},"The list of users allowed to call the smart contract"),(0,s.kt)("h3",{id:"question-3"},"Question 3"),(0,s.kt)("p",null,"What can you do with the SmartPy online editor?"),(0,s.kt)(i.Z,{name:"20",isCorrect:"true",mdxType:"ExamCheckbox"},"Write, test and run your code"),(0,s.kt)(i.Z,{name:"21",isCorrect:"true",mdxType:"ExamCheckbox"},"Visualize the generated Michelson code and storage. "),(0,s.kt)(i.Z,{name:"22",isCorrect:"true",mdxType:"ExamCheckbox"},"View the results of the tests as an HTML document. "),(0,s.kt)(i.Z,{name:"23",isCorrect:"true",mdxType:"ExamCheckbox"},"Access a panel of several smart contract templates."),(0,s.kt)("h3",{id:"question-4"},"Question 4"),(0,s.kt)("p",null,"What is a ",(0,s.kt)("em",{parentName:"p"},"SmartPy")," smart contract?"),(0,s.kt)(i.Z,{name:"30",isCorrect:"false",mdxType:"ExamCheckbox"},"It is a class of method called `main` taking as input a storage and parameters, returning a list of operations and a modified storage."),(0,s.kt)(i.Z,{name:"31",isCorrect:"true",mdxType:"ExamCheckbox"},"It is a class definition that inherits from `sp.Contract`. A SmartPy contract consists of a state with one or several entry points."),(0,s.kt)("h3",{id:"question-5"},"Question 5"),(0,s.kt)("p",null,"What is the correct way to add an integer ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," initialized to ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," to the storage?"),(0,s.kt)(i.Z,{name:"40",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@sp.storage\ndef __init__(self):\n    self.init(x = 0)\n"))),(0,s.kt)(i.Z,{name:"41",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@sp.storage\ndef storage(self):\n    self.x = 0\n"))),(0,s.kt)(i.Z,{name:"42",isCorrect:"true",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(self):\n    self.init(x = 0)\n"))),(0,s.kt)(i.Z,{name:"43",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(self):\n    self.x = 0\n"))),(0,s.kt)(i.Z,{name:"44",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def __storage__(self):\n    self.init(x = 0)\n"))),(0,s.kt)("h3",{id:"question-6"},"Question 6"),(0,s.kt)("p",null,"What is true about the definition of entrypoints with SmartPy?"),(0,s.kt)(i.Z,{name:"50",isCorrect:"true",mdxType:"ExamCheckbox"},"Entrypoints are methods of a contract class that can be called from the outside."),(0,s.kt)(i.Z,{name:"51",isCorrect:"false",mdxType:"ExamCheckbox"},"Entrypoints are class definition that inherits from `sp.Contract`."),(0,s.kt)(i.Z,{name:"52",isCorrect:"false",mdxType:"ExamCheckbox"},"Entrypoints return values in Michelson."),(0,s.kt)(i.Z,{name:"53",isCorrect:"true",mdxType:"ExamCheckbox"},"Entrypoints need to be marked with the `@sp.entry_point` decorator."),(0,s.kt)("h3",{id:"question-7"},"Question 7"),(0,s.kt)("p",null,"What is true about tests and scenarios with SmartPy?"),(0,s.kt)(i.Z,{name:"60",isCorrect:"true",mdxType:"ExamCheckbox"},"A new test is a method marked with the `sp.add_test` decorator."),(0,s.kt)(i.Z,{name:"61",isCorrect:"true",mdxType:"ExamCheckbox"},"A new scenario is instantiated by `sp.test_scenario`."),(0,s.kt)(i.Z,{name:"62",isCorrect:"true",mdxType:"ExamCheckbox"},"Scenarios describe a sequence of actions: originating contracts, computing expressions, calling entry points, etc."),(0,s.kt)(i.Z,{name:"63",isCorrect:"true",mdxType:"ExamCheckbox"},"SmartPy provides the possibility to generate test accounts with `sp.test_account(seed)` which contain the following fields: `account.address`, `account.public_key_hash`, `account.public_key`, and `account.secret_key`."),(0,s.kt)("h3",{id:"question-8"},"Question 8"),(0,s.kt)("p",null,"What is true about types with SmartPy?"),(0,s.kt)(i.Z,{name:"70",isCorrect:"false",mdxType:"ExamCheckbox"},"SmartPy expressions do not have a type."),(0,s.kt)(i.Z,{name:"71",isCorrect:"true",mdxType:"ExamCheckbox"},"Just like in Python, most of the time, there is no need to specify the type of the object in SmartPy."),(0,s.kt)(i.Z,{name:"72",isCorrect:"true",mdxType:"ExamCheckbox"},"SmartPy uses type inference to determine each expression's type."),(0,s.kt)(i.Z,{name:"73",isCorrect:"true",mdxType:"ExamCheckbox"},"SmartPy types are all in the form `sp.T<TypeName>`."),(0,s.kt)("h3",{id:"question-9-and-10"},"Question 9 and 10"),(0,s.kt)("p",null,"For the next two questions let's consider the following piece of code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Hello(sp.Contract):\n    def __init__(self):\n        self.init(x = 0)\n\n    @sp.entry_point\n    def set_x(newX):\n        # Todo: set x from the storage to newX\n")),(0,s.kt)("p",null,"What is the correct way to set x from the storage to ",(0,s.kt)("inlineCode",{parentName:"p"},"newX"),"."),(0,s.kt)(i.Z,{name:"80",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@sp.entry_point\ndef set_x(newX):\n    self.x = newX\n"))),(0,s.kt)(i.Z,{name:"81",isCorrect:"true",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@sp.entry_point\ndef set_x(newX):\n    self.data.x = newX\n"))),(0,s.kt)(i.Z,{name:"82",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@sp.entry_point\ndef set_x(newX):\n    x = newX\n"))),(0,s.kt)(i.Z,{name:"83",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@sp.entry_point\ndef set_x(newX):\n    newX = self.data.x\n"))),(0,s.kt)("p",null,"What is the correct way to modify the code to check that ",(0,s.kt)("inlineCode",{parentName:"p"},"newX")," is greater than 0 for the entrypoint ",(0,s.kt)("inlineCode",{parentName:"p"},"set_x"),"? (If not, we want the entrypoint invocation to fail and return an error message.)"),(0,s.kt)(i.Z,{name:"84",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@sp.entry_point\ndef set_x(newX):\n    verify(newX >= 0, message="x must be a positive number")\n    self.data.x = newX\n'))),(0,s.kt)(i.Z,{name:"85",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@sp.entry_point\ndef set_x(newX):\n    sp.if(newX >= 0, message="x must be a positive number"):\n        self.data.x = newX\n'))),(0,s.kt)(i.Z,{name:"86",isCorrect:"true",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@sp.entry_point\ndef set_x(newX):\n    sp.verify(newX >= 0, message="x must be a positive number")\n    self.data.x = newX\n'))),(0,s.kt)(i.Z,{name:"87",isCorrect:"false",mdxType:"ExamCheckbox"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@sp.entry_point\ndef set_x(newX):\n    sp.check(newX >= 0, message="x must be a positive number")\n    self.data.x = newX\n')))))}u.isMDXComponent=!0},1695:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1695,e.exports=t}}]);