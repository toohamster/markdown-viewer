(function() {
	window.eocourse = window.eocourse || {};
	window.eocourse.sidebarConstant = {
		id: 'sidebar_js',
		list: [{
			title: 'markdown-viewer',
			href: '/md/index',
			icon: 'index'
		}, {
			title: 'father', //一级目录
			childList: [{
				title: 'child', //二级目录
				childList: [{
					title: 'demo1',
					href: '/md/father/child/demo1',
				}, {
					title: 'demo2',
					href: '/md/father/child/demo2',
				}]
			}]
		}]
	};
})()