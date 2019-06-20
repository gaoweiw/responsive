new Vue({
	el: "#app",
	data: {
		menuBtn: false,
		menu:true,
		showMenu:'',
		active:1,
		menuList:[{
			id:1,
			name:'首页'
		},{
			id:2,
			name:'聚焦宝航'
		},{
			id:3,
			name:'产品方案'
		},{
			id:4,
			name:'精彩案例'
		},{
			id:5,
			name:'企业风采'
		},{
			id:6,
			name:'新闻资讯'
		},{
			id:7,
			name:'人才招聘'
		},{
			id:8,
			name:'小蓝招聘'
		},{
			id:9,
			name:'互联网平台'
		}],
		product:[{
			imgUrl:'../static/images/p1.jpg',
			name:'人才外包',
			english:'TALENTOUTSOURCING',
			effect:'人才资源使用效益最大化',
		},{
			imgUrl:'../static/images/p2.jpg',
			name:'业务外包',
			english:'BUSINESS OUTSOURCING',
			effect:'人才资源使用效益最大化',
		},{
			imgUrl:'../static/images/p3.jpg',
			name:'招聘流程外包',
			english:'RECRUITMENT OUTSOURCING',
			effect:'海量人才简历，专精技术筛选',
		},{
			imgUrl:'../static/images/p4.jpg',
			name:'企业内训',
			english:'INTERNAL TRANINING',
			effect:'专业员工培训，提升整体素质',
		},{
			imgUrl:'../static/images/p5.jpg',
			name:'薪酬税务管理',
			english:'TAX MANAGEMENT',
			effect:'人才资源使用效益最大化',
		}]
	},
	mounted: function() {
		var _self = this;
		_self.changeMargin();
		window.onresize = function() {
			_self.changeMargin();
		};


	},
	created: function() {
		var _self = this;

	},
	methods: {
		changeMargin: function() {
			var _self = this;
			var docWidth = document.body.clientWidth;
			console.log(docWidth);
			if (docWidth <= 1200) {
				_self.menuBtn = true;
				_self.menu = false;
				
				_self.showMenu = "width:100%;display:block;transition-property:height;transition-duration:1s;transition-timing-function:ease-in;transition-delay:0.3s";
				
			}else{
				_self.menuBtn = false;
				_self.menu = true;
				_self.showMenu = "";
			}
		},
		clickMenu:function(){
			var _self = this;
			_self.menu = !_self.menu;
		},
		hover:function(id){
			var _self = this;
			_self.active = id;
			
		}
	}
})
