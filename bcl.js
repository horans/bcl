// ==UserScript==
// @name         bootstrap customize localization
// @namespace    http://horan.cc/
// @version      0.1a
// @description  a localization tool for bootstrap customize page, also serve as a note for people not familiar with css. simple chinese translation is currently provided.
// @author       horan
// @match        http://getbootstrap.com/customize/
// @match        http://v3.bootcss.com/customize/
// @require      //cdn.bootcss.com/jquery/1.11.3/jquery.min.js
// @grant none
// @changelog    translation revised; change localization postion to avoid compile problem.
// ==/UserScript==
$(document).ready(function() {
	'use strict';
	//localization
    function l(e, s, t){
		//h2, block title
		if(t === 2){
			$('#' + e.toLowerCase().replace(' ', '-')).append(' <small>' + s + '</small>');
		//input, deprecated
		} else if(t === 3){
			$('*[id="input-@' + e + '"]').after('<p class="help-block"><del>' + s + '</del></p>');
		//input, default
		} else {
			$('*[id="input-@' + e + '"]').after('<p class="help-block">' + s + '</p>');
        }
    }
	
	//colors
    l('colors', '颜色', 2);
    l('gray-base', '灰度 标准');
    l('gray-darker', '灰度 更深');
    l('gray-dark', '灰度 深');
    l('gray', '灰度');
    l('gray-light', '灰度 浅');
    l('gray-lighter', '灰度 更浅');
    l('brand-primary', '品牌色 主要');
    l('brand-success', '品牌色 成功');
    l('brand-info', '品牌色 提示');
    l('brand-warning', '品牌色 警告');
    l('brand-danger', '品牌色 危险');

	//scaffolding
	l('scaffolding', '脚手架', 2);
	l('body-bg', '页面 背景颜色');
	l('text-color', '页面 文字颜色');
	l('link-color', '链接 文字颜色');
	l('link-hover-color', '悬停链接 文字颜色');
	l('link-hover-decoration', '悬停链接 样式');

	//typography
	l('typography', '字体', 2);
	l('font-family-sans-serif', '字体名称 无衬');
	l('font-family-serif', '字体名称 衬线');
	l('font-family-monospace', '字体名称 等宽');
	l('font-family-base', '字体名称 标准');
	l('font-size-base', '字体大小 标准');
	l('font-size-large', '字体大小 大');
	l('font-size-small', '字体大小 小');
	l('font-size-h1', '第1大标题 字体大小');
	l('font-size-h2', '第2大标题 字体大小');
	l('font-size-h3', '第3大标题 字体大小');
	l('font-size-h4', '第4大标题 字体大小');
	l('font-size-h5', '第5大标题 字体大小');
	l('font-size-h6', '第6大标题 字体大小');
	l('line-height-base', '行高 一般');
	l('line-height-computed', '行高 间距');
	l('headings-font-family', '头部 字体名称');
	l('headings-font-weight', '头部 字体粗细');
	l('headings-line-height', '头部 行高');
	l('headings-color', '头部 文字颜色');
	
	//iconography
	l('iconography', '图标字体', 2);
	l('icon-font-path', '图标字体 路径');
	l('icon-font-name', '图标字体 名称');
	l('icon-font-svg-id', '图标字体 SVG');
	
	//components
	l('components', '组件', 2);
	l('padding-base-vertical', '垂直 内边距 标准');
	l('padding-base-horizontal', '水平 内边距 标准');
	l('padding-large-vertical', '垂直 内边距 大');
	l('padding-large-horizontal', '水平 内边距 大');
	l('padding-small-vertical', '垂直 内边距 小');
	l('padding-small-horizontal', '水平 内边距 小');
	l('padding-xs-vertical', '垂直 内边距 超小');
	l('padding-xs-horizontal', '水平 内边距 超小');
	l('line-height-large', '字体 行高 大');
	l('line-height-small', '字体 行高 小');
	l('border-radius-base', '边框 弧度 标准');
	l('border-radius-large', '边框 弧度 大');
	l('border-radius-small', '边框 弧度 小');
	l('component-active-color', '组件 当前 文字颜色');
	l('component-active-bg', '组件 当前 背景颜色');
	l('caret-width-base', '三角符号 宽度 标准');
	l('caret-width-large', '三角符号 宽度 大');
	
	//tables
	l('tables', '表格', 2);
	l('table-cell-padding', '表格 单元格 内边距');
	l('table-condensed-cell-padding', '紧缩表格 单元格 内边距');
	l('table-bg', '表格 背景颜色');
	l('table-bg-accent', '条纹表格 背景颜色');
	l('table-bg-hover', '表格 悬停 背景颜色');
	l('table-bg-active', '表格 当前 背景颜色');
	l('table-border-color', '表格 边框 颜色');
	
	//buttons
	l('buttons', '按钮', 2);
	l('btn-font-weight', '按钮 字体粗细');
	l('btn-default-color', '默认按钮 文字颜色');
	l('btn-default-bg', '默认按钮 背景颜色');
	l('btn-default-border', '默认按钮 边框 颜色');
	l('btn-primary-color', '主要按钮 文字颜色');
	l('btn-primary-bg', '主要按钮 背景颜色');
	l('btn-primary-border', '主要按钮 边框颜色');
	l('btn-success-color', '成功按钮 文字颜色');
	l('btn-success-bg', '成功按钮 背景颜色');
	l('btn-success-border', '成功按钮 边框颜色');
	l('btn-info-color', '提示按钮 文字颜色');
	l('btn-info-bg', '提示按钮 背景颜色');
	l('btn-info-border', '提示按钮 边框颜色');
	l('btn-warning-color', '警告按钮 文字颜色');
	l('btn-warning-bg', '警告按钮 背景颜色');
	l('btn-warning-border', '警告按钮 边框颜色');
	l('btn-danger-color', '危险按钮 文字颜色');
	l('btn-danger-bg', '危险按钮 背景颜色');
	l('btn-danger-border', '危险按钮 边框颜色');
	l('btn-link-disabled-color', '禁用按钮 文字颜色');
	l('btn-border-radius-base', '按钮 边框弧度 标准');
	l('btn-border-radius-large', '按钮 边框弧度 大');
	l('btn-border-radius-small', '按钮 边框弧度 小');
	
	//forms
	l('forms', '表单', 2);
	l('input-bg', '输入框 背景颜色');
	l('input-bg-disabled', '禁用输入框 背景颜色');
	l('input-color', '输入框 文字颜色');
	l('input-border', '输入框 边框颜色');
	l('input-border-radius', '输入框 边框弧度');
	l('input-border-radius-large', '输入框 边框弧度 大');
	l('input-border-radius-small', '输入框 边框弧度 小');
	l('input-border-focus', '选中输入框 边框颜色');
	l('input-color-placeholder', '输入框 占位符 颜色');
	l('input-height-base', '输入框 高度 标准');
	l('input-height-large', '输入框 高度 大');
	l('input-height-small', '输入框 高度 小');
	l('form-group-margin-bottom', '表单组 外边距');
	l('legend-color', '标记 颜色');
	l('legend-border-color', '标记 边框颜色');
	l('input-group-addon-bg', '输入框组 附件 背景颜色');
	l('input-group-addon-border-color', '输入框组 附件 边框颜色');
	l('cursor-disabled', '鼠标 禁用 样式');
	
	//dropdowns
	l('dropdowns', '下拉菜单', 2);
	l('dropdown-bg', '下拉菜单 背景颜色');
	l('dropdown-border', '下拉菜单 边框颜色');
	l('dropdown-fallback-border', '下拉菜单 边框颜色 回滚');
	l('dropdown-divider-bg', '下拉菜单 分隔颜色');
	l('dropdown-link-color', '下拉菜单 链接颜色');
	l('dropdown-link-hover-color', '下拉菜单 悬停链接 文字颜色');
	l('dropdown-link-hover-bg', '下拉菜单 悬停链接 背景颜色');
	l('dropdown-link-active-color', '下拉菜单 当前链接 文字颜色');
	l('dropdown-link-active-bg', '下拉菜单 当前链接 背景颜色');
	l('dropdown-link-disabled-color', '下拉菜单 禁用链接 文字颜色');
	l('dropdown-header-color', '头部 下拉菜单 文字颜色');
	l('dropdown-caret-color', '下拉菜单 三角符号 颜色', 3);

	//breakpoints
	l('media-queries-breakpoints', '媒体查询断点', 2);
	l('screen-xs', '超小屏幕', 3);
	l('screen-xs-min', '超小屏幕 最小值', 3);
	l('screen-phone', '电话屏幕', 3);
	l('screen-sm', '小屏幕', 3);
	l('screen-sm-min', '小屏幕 最小值');
	l('screen-tablet', '平板屏幕', 3);
	l('screen-md', '中屏幕', 3);
	l('screen-md-min', '中屏幕 最小值');
	l('screen-desktop', '桌面屏幕', 3);
	l('screen-lg', '大屏幕', 3);
	l('screen-lg-min', '大屏幕 最小值');
	l('screen-lg-desktop', '桌面屏幕 大', 3);
	l('screen-xs-max', '超小屏幕 最大值');
	l('screen-sm-max', '小屏幕 最大值');
	l('screen-md-max', '中屏幕 最大值');
	
	//grid
	l('grid-system', '网格系统', 2);
	l('grid-columns', '网格 栏数');
	l('grid-gutter-width', '网格 边距');
	l('grid-float-breakpoint', '网格 断点 最小值');
	l('grid-float-breakpoint-max', '网格 断点 最大值');
	
	//container
	l('container-sizes', '容器大小', 2);
	l('container-tablet', '平板容器');
	l('container-sm', '小容器');
	l('container-desktop', '桌面容器');
	l('container-md', '中容器');
	l('container-large-desktop', '桌面大容器');
	l('container-lg', '大容器');
	
	//navbar
	l('navbar', '导航条', 2);
	l('navbar-height', '导航条 高度');
	l('navbar-margin-bottom', '导航条 底部 外边据');
	l('navbar-border-radius', '导航条 边框弧度');
	l('navbar-padding-horizontal', '导航条 水平 内边距');
	l('navbar-padding-vertical', '导航条 垂直 内边距');
	l('navbar-collapse-max-height', '导航条 折叠 最大高度');
	l('navbar-default-color', '导航条 文字颜色');
	l('navbar-default-bg', '导航条 背景颜色');
	l('navbar-default-border', '导航条 边框颜色');
	l('navbar-default-link-color', '导航条 链接 颜色');
	l('navbar-default-link-hover-color', '导航条 悬停链接 文字颜色');
	l('navbar-default-link-hover-bg', '导航条 悬停链接 背景颜色');
	l('navbar-default-link-active-color', '导航条 当前链接 文字颜色');
	l('navbar-default-link-active-bg', '导航条 当前链接 背景颜色');
	l('navbar-default-link-disabled-color', '导航条 禁用链接 文字颜色');
	l('navbar-default-link-disabled-bg', '导航条 禁用链接 背景颜色');
	l('navbar-default-brand-color', '导航条 标志 文字颜色');
	l('navbar-default-brand-hover-color', '导航条 标志 悬停 文字颜色');
	l('navbar-default-brand-hover-bg', '导航条 标志 悬停 背景颜色');
	l('navbar-default-toggle-hover-bg', '导航条 切换 悬停 背景颜色');
	l('navbar-default-toggle-icon-bar-bg', '导航条 切换 图标栏 背景颜色');
	l('navbar-default-toggle-border-color', '导航条 切换 边框颜色');
	
	//inverted navbar
	l('inverted-navbar', '反色导航条', 2);
	l('navbar-inverse-color', '反色导航条 文字颜色');
	l('navbar-inverse-bg', '反色导航条 背景颜色');
	l('navbar-inverse-border', '反色导航条 边框颜色');
	l('navbar-inverse-link-color', '反色导航条 链接 颜色');
	l('navbar-inverse-link-hover-color', '反色导航条 悬停链接 文字颜色');
	l('navbar-inverse-link-hover-bg', '反色导航条 悬停链接 背景颜色');
	l('navbar-inverse-link-active-color', '反色导航条 当前链接 文字颜色');
	l('navbar-inverse-link-active-bg', '反色导航条 当前链接 背景颜色');
	l('navbar-inverse-link-disabled-color', '反色导航条 禁用链接 文字颜色');
	l('navbar-inverse-link-disabled-bg', '反色导航条 禁用链接 背景颜色');
	l('navbar-inverse-brand-color', '反色导航条 标志 文字颜色');
	l('navbar-inverse-brand-hover-color', '反色导航条 标志 悬停 文字颜色');
	l('navbar-inverse-brand-hover-bg', '反色导航条 标志 悬停 背景颜色');
	l('navbar-inverse-toggle-hover-bg', '反色导航条 切换 悬停 背景颜色');
	l('navbar-inverse-toggle-icon-bar-bg', '反色导航条 切换 图标栏 背景颜色');
	l('navbar-inverse-toggle-border-color', '反色导航条 切换 边框颜色');
	
	//navs
	l('navs', '导航', 2);
	l('nav-link-padding', '导航 链接 内边距');
	l('nav-link-hover-bg', '导航 链接 悬停 背景颜色');
	l('nav-disabled-link-color', '导航 禁用链接 文字颜色');
	l('nav-disabled-link-hover-color', '导航 禁用链接 悬停 文字颜色');
	
	//tabs
	l('tabs', '标签页', 2);
	l('nav-tabs-border-color', '标签页 边框颜色');
	l('nav-tabs-link-hover-border-color', '标签页 悬停链接 边框颜色');
	l('nav-tabs-active-link-hover-bg', '当前标签页 悬停链接 背景颜色');
	l('nav-tabs-active-link-hover-color', '当前标签页 悬停链接 文字颜色');
	l('nav-tabs-active-link-hover-border-color', '当前标签页 悬停链接 边框颜色');
	l('nav-tabs-justified-link-border-color', '两端对齐标签页 链接 边框颜色');
	l('nav-tabs-justified-active-link-border-color', '当前 两端对齐标签页 链接 边框颜色');
	
	//pills
	l('pills', '胶囊式标签页', 2);
	l('nav-pills-border-radius', '胶囊式标签页 边框弧度');
	l('nav-pills-active-link-hover-bg', '当前 胶囊式标签页 悬停链接 背景颜色');
	l('nav-pills-active-link-hover-color', '当前 胶囊式标签页 悬停链接 文字颜色');
	
	//pagination
	l('pagination', '分页', 2);
	l('pagination-color', '分页 文字颜色');
	l('pagination-bg', '分页 背景颜色');
	l('pagination-border', '分页 边框颜色');
	l('pagination-hover-color', '悬停分页 文字颜色');
	l('pagination-hover-bg', '悬停分页 背景颜色');
	l('pagination-hover-border', '悬停分页 边框颜色');
	l('pagination-active-color', '当前分页 文字颜色');
	l('pagination-active-bg', '当前分页 背景颜色');
	l('pagination-active-border', '当前分页 边框颜色');
	l('pagination-disabled-color', '禁用分页 文字颜色');
	l('pagination-disabled-bg', '禁用分页 背景颜色');
	l('pagination-disabled-border', '禁用分页 边框颜色');
	
	//pager
	l('pager', '翻页', 2);
	l('pager-bg', '翻页 背景颜色');
	l('pager-border', '翻页 边框颜色');
	l('pager-border-radius', '翻页 边框弧度');
	l('pager-hover-bg', '悬停翻页 背景颜色');
	l('pager-active-bg', '当前翻页 背景颜色');
	l('pager-active-color', '当前翻页 文字颜色');
	l('pager-disabled-color', '禁用翻页 文字颜色');
	
	//jumbotron
	l('jumbotron', '巨幕', 2);
	l('jumbotron-padding', '巨幕 内边距');
	l('jumbotron-color', '巨幕 文字颜色');
	l('jumbotron-bg', '巨幕 背景颜色');
	l('jumbotron-heading-color', '巨幕 标题 颜色');
	l('jumbotron-font-size', '巨幕 字体 大小');
	l('jumbotron-heading-font-size', '巨幕 标题 字体 大小');
	
	//states
	l('form-states-and-alerts', '表单状态', 2);
	l('state-success-text', '成功状态 文字颜色');
	l('state-success-bg', '成功状态 背景颜色');
	l('state-success-border', '成功状态 边框颜色');
	l('state-info-text', '提示状态 文字颜色');
	l('state-info-bg', '提示状态 背景颜色');
	l('state-info-border', '提示状态 边框颜色');
	l('state-warning-text', '警告状态 文字颜色');
	l('state-warning-bg', '警告状态 背景颜色');
	l('state-warning-border', '警告状态 边框颜色');
	l('state-danger-text', '危险状态 文字颜色');
	l('state-danger-bg', '危险状态 背景颜色');
	l('state-danger-border', '危险状态 边框颜色');
	
	//tooltips
	l('tooltips', '提示', 2);
	l('tooltip-max-width', '提示 最大宽度');
	l('tooltip-color', '提示 文字颜色');
	l('tooltip-bg', '提示 背景颜色');
	l('tooltip-opacity', '提示 透明度');
	l('tooltip-arrow-width', '提示 箭头宽度');
	l('tooltip-arrow-color', '提示 箭头颜色');

	//popovers
	l('popovers', '弹出框', 2);
	l('popover-bg', '弹出框 背景颜色');
	l('popover-max-width', '弹出框 最大宽度');
	l('popover-border-color', '弹出框 边框颜色');
	l('popover-fallback-border-color', '弹出框 边框颜色 回滚');
	l('popover-title-bg', '弹出框 标题 背景颜色');
	l('popover-arrow-width', '弹出框 箭头宽度');
	l('popover-arrow-color', '弹出框 箭头颜色');
	l('popover-arrow-outer-width', '弹出框 外部箭头宽度');
	l('popover-arrow-outer-color', '弹出框 外部箭头颜色');
	l('popover-arrow-outer-fallback-color', '弹出框 外部箭头颜色 回滚');
	
	//labels
	l('labels', '标签', 2);
	l('label-default-bg', '默认标签 背景颜色');
	l('label-primary-bg', '主要标签 背景颜色');
	l('label-success-bg', '成功标签 背景颜色');
	l('label-info-bg', '提示标签 背景颜色');
	l('label-warning-bg', '警告标签 背景颜色');
	l('label-danger-bg', '危险标签 背景颜色');
	l('label-color', '标签 文字颜色');
	l('label-link-hover-color', '标签 悬停链接 文字颜色');
	
	//modals
	l('modals', '模态', 2);
	l('modal-inner-padding', '模态 内边距');
	l('modal-title-padding', '模态 标题 内边距');
	l('modal-title-line-height', '模态 标题 行高');
	l('modal-content-bg', '模态 内容 背景颜色');
	l('modal-content-border-color', '模态 内容 边框颜色');
	l('modal-content-fallback-border-color', '模态 内容 边框颜色 回滚');
	l('modal-backdrop-bg', '模态 幕布 背景颜色');
	l('modal-backdrop-opacity', '模态 幕布 透明度');
	l('modal-header-border-color', '模态 头部 边框颜色');
	l('modal-footer-border-color', '模态 足部 边框颜色');
	l('modal-lg', '大模态 尺寸');
	l('modal-md', '中模态 尺寸');
	l('modal-sm', '小模态 尺寸');
	
	//alerts
	l('alerts', '提醒', 2);
	l('alert-padding', '提醒 内边距');
	l('alert-border-radius', '提醒 边框弧度');
	l('alert-link-font-weight', '提醒 链接 字体粗细');
	l('alert-success-bg', '成功提醒 背景颜色');
	l('alert-success-text', '成功提醒 文字颜色');
	l('alert-success-border', '成功提醒 边框颜色');
	l('alert-info-bg', '提示提醒 背景颜色');
	l('alert-info-text', '提示提醒 文字颜色');
	l('alert-info-border', '提示提醒 边框颜色');
	l('alert-warning-bg', '警告提醒 背景颜色');
	l('alert-warning-text', '警告提醒 文字颜色');
	l('alert-warning-border', '警告提醒 边框颜色');
	l('alert-danger-bg', '危险提醒 背景颜色');
	l('alert-danger-text', '危险提醒 文字颜色');
	l('alert-danger-border', '危险提醒 边框颜色');
	
	//progress bars
	l('progress-bars', '进度条', 2);
	l('progress-bg', '进度条组件 背景颜色');
	l('progress-bar-color', '进度条 文字颜色');
	l('progress-border-radius', '进度条 边框弧度');
	l('progress-bar-bg', '进度条 背景颜色');
	l('progress-bar-success-bg', '成功进度条 背景颜色');
	l('progress-bar-warning-bg', '警告进度条 背景颜色');
	l('progress-bar-danger-bg', '危险进度条 背景颜色');
	l('progress-bar-info-bg', '提示进度条 背景颜色');
	
	//list group
	l('list-group', '列表组', 2);
	l('list-group-bg', '列表组 背景颜色');
	l('list-group-border', '列表组 边框颜色');
	l('list-group-border-radius', '列表组 边框弧度');
	l('list-group-hover-bg', '悬停列表组 背景颜色');
	l('list-group-active-color', '当前列表组 标题颜色');
	l('list-group-active-bg', '当前列表组 背景颜色');
	l('list-group-active-border', '当前列表组 边框颜色');
	l('list-group-active-text-color', '当前列表组 文字颜色');
	l('list-group-disabled-color', '禁用列表组 标题颜色');
	l('list-group-disabled-bg', '禁用列表组 背景颜色');
	l('list-group-disabled-text-color', '禁用列表组 文字颜色');
	l('list-group-link-color', '列表组 链接 文字颜色');
	l('list-group-link-hover-color', '列表组 链接 悬停颜色');
	l('list-group-link-heading-color', '列表组 链接 标题颜色');
	
	//panels
	l('panels', '面版', 2);
	l('panel-bg', '面版 背景颜色');
	l('panel-body-padding', '面版 页面 内边距');
	l('panel-heading-padding', '面版 头部 内边距');
	l('panel-footer-padding', '面版 足部 内边距');
	l('panel-border-radius', '面版 边框弧线');
	l('panel-inner-border', '面版 内边框 颜色');
	l('panel-footer-bg', '面版 足部 背景颜色');
	l('panel-default-text', '面版 文字颜色');
	l('panel-default-border', '面板 边框颜色');
	l('panel-default-heading-bg', '面版 头部 背景颜色');
	l('panel-primary-text', '主要面版 文字颜色');
	l('panel-primary-border', '主要面版 边框颜色');
	l('panel-primary-heading-bg', '主要面版 头部 背景颜色');
	l('panel-success-text', '成功面版 文字颜色');
	l('panel-success-border', '成功面版 边框颜色');
	l('panel-success-heading-bg', '成功面版 头部 背景颜色');
	l('panel-info-text', '提示面版 文字颜色');
	l('panel-info-border', '提示面版 边框颜色');
	l('panel-info-heading-bg', '提示面版 头部 背景颜色');
	l('panel-warning-text', '警告面版 文字颜色');
	l('panel-warning-border', '警告面版 边框颜色');
	l('panel-warning-heading-bg', '警告面版 头部 背景颜色');
	l('panel-danger-text', '危险面版 文字颜色');
	l('panel-danger-border', '危险面版 边框颜色');
	l('panel-danger-heading-bg', '危险面版 头部 背景颜色');
	
	//thumbnails
	l('thumbnails', '缩略图', 2);
	l('thumbnail-padding', '缩略图 内边距');
	l('thumbnail-bg', '缩略图 背景颜色');
	l('thumbnail-border', '缩略图 边框颜色');
	l('thumbnail-border-radius', '缩略图 边框弧度');
	l('thumbnail-caption-color', '缩略图 文字颜色');
	l('thumbnail-caption-padding', '缩略图 文字 内边距');
	
	//wells
	l('wells', '嵌入', 2);
	l('well-bg', '嵌入 背景颜色');
	l('well-border', '嵌入 边框颜色');
	
	//badges
	l('badges', '徽章', 2);
	l('badge-color', '徽章 文字颜色');
	l('badge-link-hover-color', '徽章 悬停链接 文字颜色');
	l('badge-bg', '徽章 背景颜色');
	l('badge-active-color', '当前徽章 文字颜色');
	l('badge-active-bg', '当前徽章 背景颜色');
	l('badge-font-weight', '徽章 字体粗细');
	l('badge-line-height', '徽章 行高');
	l('badge-border-radius', '徽章 边框弧度');
	
	//breadcrumbs
	l('breadcrumbs', '面包屑导航', 2);
	l('breadcrumb-padding-vertical', '面包屑导航 垂直内边距');
	l('breadcrumb-padding-horizontal', '面包屑导航 水平内边距');
	l('breadcrumb-bg', '面包屑导航 背景颜色');
	l('breadcrumb-color', '面包屑导航 文字颜色');
	l('breadcrumb-active-color', '当前 面包屑导航 文字颜色');
	l('breadcrumb-separator', '面包屑导航 分隔符');
	
	//carousel
	l('carousel', '轮播', 2);
	l('carousel-text-shadow', '轮播 文字阴影');
	l('carousel-control-color', '轮播 控制按钮 文字颜色');
	l('carousel-control-width', '轮播 控制按钮 宽度');
	l('carousel-control-opacity', '轮播 控制按钮 透明度');
	l('carousel-control-font-size', '轮播 控制按钮 字体大小');
	l('carousel-indicator-active-bg', '轮播 当前指示按钮 背景颜色');
	l('carousel-indicator-border-color', '轮播 指示按钮 边框颜色');
	l('carousel-caption-color', '轮播 文字颜色');
	
	//close
	l('close', '关闭', 2);
	l('close-font-weight', '关闭 字体粗细');
	l('close-color', '关闭 文字颜色');
	l('close-text-shadow', '关闭 文字阴影');
	
	//code
	l('code', '代码', 2);
	l('code-color', '内联代码 文字颜色');
	l('code-bg', '内联代码 背景颜色');
	l('kbd-color', '键盘输入 文字颜色');
	l('kbd-bg', '键盘输入 背景颜色');
	l('pre-bg', '代码块 背景颜色');
	l('pre-color', '代码块 文字颜色');
	l('pre-border-color', '代码块 边框颜色');
	l('pre-scrollable-max-height', '代码块 最大高度');
	
	//type
	l('type', '排版', 2);
	l('component-offset-horizontal', '组件 水平偏移');
	l('text-muted', '柔和 文字颜色');
	l('abbr-border-color', '缩写 边框颜色');
	l('headings-small-color', '标题 小号文本 文字颜色');
	l('blockquote-small-color', '区块引用 小号文本 文字颜色');
	l('blockquote-font-size', '区块引用 字体大小');
	l('blockquote-border-color', '区块引用 边框颜色');
	l('page-header-border-color', '页面 头部 边框颜色');
	l('dl-horizontal-offset', '描述列表 水平偏移');
	l('hr-border', '水平分隔符 颜色');
});
