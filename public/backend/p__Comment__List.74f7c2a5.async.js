(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{A3NK:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,o,r,i=a("bx4M"),c=(a("g9YV"),a("wCAj")),s=(a("14J3"),a("BMrR")),l=(a("jCWc"),a("kPKH")),d=(a("+L6B"),a("2/Rp")),m=(a("/zsF"),a("PArb")),u=(a("Awhp"),a("KrTs")),p=(a("2qtc"),a("kLXV")),f=a("p0pE"),h=a.n(f),y=a("2Taf"),g=a.n(y),b=a("vZ4D"),O=a.n(b),M=a("l4Ni"),j=a.n(M),v=a("ujKo"),w=a.n(v),E=a("rlhR"),C=a.n(E),R=a("MhPg"),k=a.n(R),x=(a("5NDa"),a("5rEg")),I=a("q1tI"),S=a.n(I),q=a("MuoO"),D=a("LLXN"),A=a("wd/R"),K=a.n(A),T=(a("y8nQ"),a("Vl3Y")),N=a("jehZ"),z=a.n(N),B=(a("OaEy"),a("2fM7")),V=(a("7Q2D"),a("XII7")),L=x["a"].TextArea,Y=B["a"].Option,_=function(e){function t(){var e,a;g()(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return a=j()(this,(e=w()(t)).call.apply(e,[this].concat(o))),a.state={show:!1,data:{}},a.handleSubmit=function(){var e=a.state.data,t=a.props,n=t.form,o=t.submit;n.validateFields(function(t,a){t||(a.target&&(a.target=a.target.key,a.onModel="Animate"),o(h()({},e,a)))})},a.handleCancel=function(){var e=a.props.cancel;a.setState({show:!1,data:{}}),e&&e()},a.modalShow=function(e){var t=e.type,n=e.data;a.setState({show:!0,data:h()({type:t},n)})},a}return k()(t,e),O()(t,[{key:"render",value:function(){var e=this.state,t=e.show,a=e.data,n=this.props.form.getFieldDecorator,o={labelCol:{span:4},wrapperCol:{span:18}},r="many"!==a.type&&"all"!==a.type;"one"===a.type&&!a.parent||a.type;return S.a.createElement(p["a"],{title:Object(D["formatMessage"])({id:"common.edit"}),visible:t,maskClosable:!1,forceRender:"true",onOk:this.handleSubmit,onCancel:this.handleCancel,destroyOnClose:!0},S.a.createElement(T["a"],null,"new"===a.type&&S.a.createElement(T["a"].Item,z()({},o,{label:Object(D["formatMessage"])({id:"comment.video"})}),n("target",{initialValue:void 0})(S.a.createElement(V["a"],null))),r&&S.a.createElement(T["a"].Item,z()({},o,{label:Object(D["formatMessage"])({id:"comment.content"})}),n("content",{initialValue:a.content||""})(S.a.createElement(L,{rows:4}))),S.a.createElement(T["a"].Item,z()({},o,{label:Object(D["formatMessage"])({id:"shop.status"})}),n("status",{initialValue:a.status||"draft",rules:[{required:!0,message:Object(D["formatMessage"])({id:"shop.status"})}]})(S.a.createElement(B["a"],{placeholder:Object(D["formatMessage"])({id:"shop.status.extra"})},S.a.createElement(Y,{value:"draft"},Object(D["formatMessage"])({id:"common.draft"})),S.a.createElement(Y,{value:"publish"},Object(D["formatMessage"])({id:"common.publish"})),S.a.createElement(Y,{value:"reject"},Object(D["formatMessage"])({id:"common.reject"})))))))}}]),t}(I["PureComponent"]),P=T["a"].create()(_),F=a("ZeOv"),H=x["a"].Search,J=(n=Object(q["connect"])(function(e){var t=e.comment,a=e.loading;return{comment:t,loading:a.models.comment}}),n((r=function(e){function t(e){var a;g()(this,t),a=j()(this,w()(t).call(this,e)),a.editRef=S.a.createRef(null),a.submit=function(e){var t=a.props.dispatch,n=a.state.selectedRowKeys,o=e.type;if("many"===o||"all"===o||"one"===o){var r="one"===o?[e.id]:"all"===o?[]:n;t({type:"comment/putCommentBatch",payload:{data:h()({},e,{ids:r})}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})}else t({type:"comment/postComment",payload:{data:h()({},e)}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})},a.editNew=function(){a.edit({type:"new",data:{}})},a.editReply=function(e){a.edit({type:"reply",data:{parent:e.parent||e._id,replyTo:e.author._id}})},a.editOne=function(e){var t={content:e.content,status:e.status,parent:e.parent,image:e.image,id:e._id,author:e.author._id};a.edit({type:"one",data:t})},a.editMany=function(){a.edit({type:"many"})},a.editAll=function(){a.edit({type:"all"})},a.edit=function(e){var t=e.type,n=e.data;a.editRef.modalShow({type:t,data:n})},a.deleteMany=function(){var e=a.state.selectedRowKeys;a.destroy(e)},a.deleteAll=function(){a.destroy([])},a.deleteOne=function(e){return function(){a.destroy([e])}},a.destroy=function(e){var t=a.props.dispatch;p["a"].confirm({title:Object(D["formatMessage"])({id:"comment.list.delete.comment"}),content:Object(D["formatMessage"])({id:"common.delete.tips"}),okText:Object(D["formatMessage"])({id:"common.confirm"}),cancelText:Object(D["formatMessage"])({id:"common.cancel"}),onOk:function(){return t({type:"comment/deleteCommentBatch",payload:{data:{ids:e}}}).then(function(e){e&&(a.initData(),a.setState({selectedRowKeys:[]}))})}})},a.onSearchVideo=function(e){a.query.title=e,a.query.page=1,a.initData()},a.onChangeTable=function(e,t,n){var o,r,i=e.current,c=e.pageSize,s=t.status?t.status[0]:null;n.order&&(o="descend"===n.order?-1:1,r=n.field),a.query=h()({},a.query,{size:c,page:i,sortBy:r,sortOrder:o,status:s}),a.initData()},a.initData=function(){var e=C()(a),t=e.query,n=a.props.dispatch;n({type:"comment/queryComment",payload:{query:t}});var o=a.props,r=o.location.pathname,i=o.history;i.push({pathname:r,state:a.query})};var n=e.location.state,o=void 0===n?{}:n;return a.state={selectedRowKeys:[]},a.query={title:o.title,size:o.size?o.size:10,page:o.page?o.page:1,sortBy:o.sortBy,sortOrder:o.sortOrder,status:o.status},a}return k()(t,e),O()(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=this,t=this.state.selectedRowKeys,a=this.props,n=a.comment,o=n.list,r=n.total,p=a.loading,f=o.map(function(e){return e.children&&e.children.length>0?e.countChild=e.children.length:(delete e.children,e.countChild=0),e}),h=[{title:Object(D["formatMessage"])({id:"comment.title"}),dataIndex:"target",align:"center",render:function(e){return e?e.title:Object(D["formatMessage"])({id:"common.nodata"})}},{title:Object(D["formatMessage"])({id:"comment.type"}),dataIndex:"onModel",align:"center",render:function(e){return Object(D["formatMessage"])({id:"comment.".concat(e||"children")})}},{title:Object(D["formatMessage"])({id:"comment.author"}),dataIndex:"author.name",align:"center",sorter:!0},{title:Object(D["formatMessage"])({id:"comment.content"}),dataIndex:"content",align:"center",render:function(e){return e.slice(0,50)}},{title:Object(D["formatMessage"])({id:"comment.like"}),dataIndex:"countLike",align:"center",sorter:!0},{title:Object(D["formatMessage"])({id:"comment.countChild"}),dataIndex:"countChild",align:"center",sorter:!0,render:function(e){return e||0}},{title:Object(D["formatMessage"])({id:"comment.replyTo"}),dataIndex:"replyTo",align:"center",sorter:!0,render:function(e){return e?e.name:Object(D["formatMessage"])({id:"comment.video.hasnt"})}},{title:Object(D["formatMessage"])({id:"comment.status"}),dataIndex:"status",align:"center",filters:Object.values(F["g"]),filterMultiple:!1,render:function(e){return S.a.createElement(u["a"],{status:F["g"][e].badge,text:F["g"][e].text})}},{title:Object(D["formatMessage"])({id:"comment.createdAt"}),dataIndex:"createdAt",sorter:!0,align:"center",width:160,render:function(e){return K()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(D["formatMessage"])({id:"comment.option"}),key:"action",dataIndex:"_id",align:"center",render:function(t,a){return S.a.createElement("span",null,S.a.createElement("a",{onClick:function(){return e.editReply(a)}},Object(D["formatMessage"])({id:"common.reply"})),S.a.createElement(m["a"],{type:"vertical"}),S.a.createElement("a",{onClick:function(){return e.editOne(a)}},Object(D["formatMessage"])({id:"common.edit"})),S.a.createElement(m["a"],{type:"vertical"}),S.a.createElement("a",{onClick:e.deleteOne(t)},Object(D["formatMessage"])({id:"common.delete"})))}}],y={selectedRowKeys:t,onChange:function(t){e.setState({selectedRowKeys:t})}},g=Object(F["e"])(this.query.page,this.query.size,r);return S.a.createElement(i["a"],{className:"tableList",bordered:!1},S.a.createElement(s["a"],{className:"head"},S.a.createElement(l["a"],{span:16},S.a.createElement(d["a"],{icon:"plus",type:"primary",onClick:this.editNew},Object(D["formatMessage"])({id:"common.add.new"})),t.length>0&&S.a.createElement(F["b"],{edit:this.editMany,delete:this.deleteMany}),S.a.createElement(F["a"],{edit:this.editAll,delete:this.deleteAll})),S.a.createElement(l["a"],{span:8},S.a.createElement(H,{placeholder:Object(D["formatMessage"])({id:"comment.search"}),onSearch:this.onSearchVideo,enterButton:!0}))),S.a.createElement(s["a"],null,S.a.createElement(c["a"],{className:"longTable",loading:p,rowKey:"_id",rowSelection:y,columns:h,onChange:this.onChangeTable,dataSource:f,pagination:g})),S.a.createElement(P,{submit:this.submit,wrappedComponentRef:function(t){return e.editRef=t}}))}}]),t}(I["Component"]),o=r))||o);t["default"]=J}}]);