//导航链接
$(function(){
	var $menuShow = $('#menuShow');
	$menuShow.slideDown();
	$menuShow.parents('li.parent').removeClass('collapsed').addClass('expanded');
	$menuShow.siblings('a').addClass('on');
});

//菜单切换
$(function(){
	$('.menuTree').find('a').each(function(){
		var sHref = $(this).attr('href');
		$(this).click(function(){
			if( sHref != '#' ){
				$('#mainFrame').attr('src',sHref);
			}
			return false;
		});
	});
	//资料修改
	$('#modifyInfo').click(function(){
		$('#mainFrame').attr('src','资料修改.html');
	});
	////物业公告管理
	//$('#addNotice').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-新增物业公告.html');
	//});
	//$('#sumNotice').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-物业公告管理.html');
	//});
	//$('.editNotice').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-新增物业公告.html');
	//});
	//$('.checkNotice').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-物业公告详情.html');
	//});
	////物业公司管理
	//$('#addCompany').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-新增物业公司.html');
	//});
	//$('.editCompany').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-物业公司管理-编辑.html');
	//});
	//$('#saveCompany').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-物业公司管理.html');
	//});
	//$('#sumCompany').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-物业公司管理.html');
	//});
	////小区管理
	//$('#addCommunity').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-新增小区.html');
	//});
	//$('#sumCommunity').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-小区管理.html');
	//});
	//$('.editCommunity').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-小区管理-编辑.html');
	//});
	//$('#saveCommunity').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-小区管理.html');
	//});
	////角色管理
	//$('#addRole').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','权限-角色管理-新增角色.html');
	//});
	//$('.editRole').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','权限-角色管理-新增角色.html');
	//});
	//$('.personRole').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','权限-角色管理-人员.html');
	//});
	//$('#sumRole').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','权限-角色管理.html');
	//});
	////帐号管理
	//$('#addAccount').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','adduser.scala.html');
	//});
	//$('.editAccount').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','权限-账号管理-账号编辑.html');
	//});
	//$('#sumAccount').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','listuserr.scala.html');
	//});
	////商家管理
	//$('#addBusiness').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-商家管理-新增商家.html');
	//});
	//$('#sumBusiness').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-商家管理-小区商家管理.html');
	//});
	//$('.checkBusiness').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-商家管理-商家审核.html');
	//});
	//$('#sumBusinessCheck').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-商家管理-待审核商家管理.html');
	//});
	//$('#addBusinessType').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-商家管理-新增商家类型.html');
	//});
	//$('#sumBusinessType').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-商家管理-商家类型管理.html');
	//});
	////物业缴费管理
	//$('.checkPay').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-物业缴费管理-账单明细.html');
	//});
	//$('#backPay').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-物业缴费管理.html');
	//});
	////业主信息管理
	//$('.editOwnerInfo').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-业主信息管理-编辑.html');
	//});
	//$('#sumOwnerInfo').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-业主信息管理.html');
	//});
	////门牌审核管理
	//$('.checkAddresses').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-门牌审核管理-门牌审核.html');
	//});
	//$('#sumAddresses').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','物业-门牌审核管理.html');
	//});
	////账号审核管理
	//$('.checkAccount').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','账号申请-账号申请审核.html');
	//});
	//$('#sumAccount').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','账号申请-账号申请管理.html');
	//});
	////虚拟商品管理
	//$('.onlineItemEdit').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','积分商城-虚拟商品-编辑.html');
	//});
	//$('#onlineItemAdd').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','积分商城-虚拟商品-添加商品.html');
	//});
	//$('#saveOnlineItem').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','积分商城-虚拟商品.html');
	//});
	////实物商品管理
	//$('.itemEdit').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','积分商城-实物商品-编辑.html');
	//});
	//$('#itemAdd').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','积分商城-实物商品-添加商品.html');
	//});
	//$('#saveItem').click(function(){
	//	$(window.parent.document).find('#mainFrame').attr('src','积分商城-实物商品.html');
	//});
	
	
});

//表单边框变色插件
$(function(){
	/*表单得到失去焦点*/
	jQuery.objFocusBlur=function(obj){
		$(obj).focus(function(){$(this).addClass("focus").removeClass("inputError");});
		$(obj).blur(function(){$(this).removeClass("focus");});
	};
	$.objFocusBlur(".input_text,.textarea");
});

(function($){
	$.fn.objFocusBlur02 = function(opts){  //对象级别
		$(this).focus(function(){
			$(this).addClass(opts);
		});
		$(this).blur(function(){
			$(this).removeClass(opts);
		});
	}
	$('.keywords').objFocusBlur02('textarea-focus');
	$('.textareas').objFocusBlur02('textarea-focus');
})(jQuery);

//登录框边框着色
$('.login-txt').focus(function(){
	$('.login-info').addClass('login-info-focus');
});
$('.login-txt').blur(function(){
	$('.login-info').removeClass('login-info-focus');
});

//按钮状态切换
$('.input-btn').hover(function(){
	$(this).toggleClass('input-btn-hover');
});


//表单提示
$(function(){
	$('.input_text:not(".readonly"):not(".pp")').each(function(){
		$(this).focus(function(){
			if (this.value == this.defaultValue){
				this.value = "";
			}
		});
		$(this).blur(function(){
			if (this.value == ""){
				this.value = this.defaultValue;	
			}
		});
	});
	$(".edui-body-container").focus(function(){
		var txtValue=$(this).html();
		if(txtValue=="<p>说两句儿~</p>"){
			$(this).html("");	
		}
		$('.edui-container').addClass('edui-container-focus');
	});
	$(".edui-body-container").blur(function(){
		var txtValue=$(this).html();
		if(txtValue==""){
			$(this).html("<p>说两句儿~</p>");	
		}
		$('.edui-container').removeClass('edui-container-focus');
	});
});
//图片hover效果
jQuery.fn.imgOpacity=function(){  //对象级别
    var $self = $(this);
    $self.hover(function(){
		$self.stop(true,false).animate({opacity:"0.80"},100);	
	},function(){
		$self.stop(true,false).animate({opacity:"1"},100);
	});  
}  
$('.addimg02 li img').imgOpacity(); 
$('.menu-arrow').imgOpacity();

//限制时间
$('.rad-01').click(function(){
	$(this).attr("checked","checked");
	$('.rad-02').removeAttr("checked")
	$('.ser-time').hide();
});
$('.rad-02').click(function(){
	$(this).attr("checked","checked");
	$('.rad-01').removeAttr("checked")
	$('.ser-time').show();
});

//明细
$('#detailBtn').click(function(){
	$('#detailCon').toggle();
});

//编辑、删除、添加客服联系方式
$(function(){
	$('.edit').click(function(){
		var $this = $(this);
		if($this.val()=='编辑'){
			$this.parent('div').parent('td').siblings('td').find('input').attr('class','input_text').removeAttr('readonly');
			$this.val('确定').css('color','#dd4929');
			$this.parent('div').parent('td').siblings('td').find('div.select-box').removeClass();
			$this.parent('div').parent('td').siblings('td').find('select').removeAttr('disabled').removeClass().addClass('select_normal w200');
		}else{
			$this.parent('div').parent('td').siblings('td').find('input').removeClass().addClass('input_noborder').attr({readonly:'true'});
			$this.val('编辑').css({color:'#3298cb'})
			$this.parent('div').parent('td').siblings('td').find('div').addClass('select-box');
			$this.parent('div').parent('td').siblings('td').find('select').removeClass().addClass('select_noborder w200').attr('disabled','true');
		}
	});
});


//插件表格样式
$(function(){
	$('.mars').addClass('info-list-02 mtop20').attr({'border':'0','cellpadding':'0','cellspacing':'1'});
});

//鼠标经过表格变色
$('.info-list-02 tr:not("tr.title"):not("tr.nobg"), .ranking-info tr:not("tr.nobg"), .mars tr').hover(function(){
	$(this).children('td').addClass('trbg');
},function(){
	$(this).children('td').removeClass('trbg');
}).click(function(event){
	if($(event.target).is('td') && $(this).children('td').hasClass('trbgon')){
		$(this).children('td').removeClass('trbgon');	
	}else if($(event.target).is('td')){
		$(this).children('td').addClass('trbgon').end();
		$(this).siblings('tr').children('td').removeClass('trbgon');
	}
});

//上传照片
$('#addimg').click(function(){
	$('.addimg01').hide();
	$('.addimg02').show();
	return false; 
});
$('#addvd').click(function(){
	$('.addvd01').hide();
	$('.addvd02').show();
	return false; 
});

//隐藏导航
$('.menu-arrow').click(function(){
	var $menuTree=$('.menuTree');
	var menuWidth=$menuTree.width();
	if($menuTree.is(':visible')){
		$menuTree.hide(300).animate({left:"-"+menuWidth},300);
		$(this).attr("class",'menu-arrow01');
	}else{
		$menuTree.show(100).animate({left:"0px"},100);
		$(this).attr("class",'menu-arrow');
	}
});

//厨房右侧栏高度
$(function(){
	var Iheight = $('.food-left').height();
	$('.food-right').height(Iheight);
});

//按钮状态
$('.input-btn[name="btnColor"]').click(function(){
	$(this).toggleClass('btn-on');
});

//登录背景
$('.login-main').css({"backgroundPositionY":"650px"}).animate({"backgroundPositionY":"276px"},{easing: "easeInBack",duration: 2000,complete:function(){}});

//checkbox
$('.ck-box').click(function(){
	$(this).toggleClass('ck-box-on');
});

//权限  用户状态切换
(function($){
	//切换样式
	$.fn.swapClass = function(class1, class2){
		return this.each(function(){
			var $element = $(this);
			if($element.hasClass(class1)){
				$element.removeClass(class1).addClass(class2);
			}
			else if($element.hasClass(class2)){
				$element.removeClass(class2).addClass(class1);	
			}
		});
	};
	//切换文本
	$.fn.swapText = function(txt1, txt2){
		return this.each(function(){
			var $element = $(this);
			if($element.text() == txt1){
				$element.text(txt2);	
			}
			else if($element.text() == txt2){
				$element.text(txt1);	
			}
		});
	};
	
})(jQuery);

$('.btn-status').click(function(){
	$(this).swapClass('blue alive', 'grey asleep').swapText('启用', '禁用');
});

$('.btn-status-pay').click(function(){
	$(this).swapClass('blue alive', 'grey asleep').swapText('已缴费', '未缴费');
});

$('.btn-status-push').click(function(){
	$(this).swapClass('blue alive', 'grey asleep').swapText('是', '否');
});

$('.user-btn-status').click(function(){
	$(this).find('a').swapText('禁言', '解除禁言');
	$('.user-status').swapClass('blue alive', 'grey asleep').swapText('正常','禁言');
});

//翻页点击效果
$('.pages li:lt(9):gt(1)').has('a').click(function(){
	$(this).addClass('on').siblings().removeClass('on');
});

//欢迎界面
$(function(){
	$('.welcome-txt .txt01').css({'top':'200px','opacity':'0'}).animate({'top':'0','opacity':'1'}, 600);
	var $lis = $('.welcome-txt .point-list li');
	$lis.eq(0).css({'top':'200px','opacity':'0'}).animate({'top':'0','opacity':'1'}, 600);
	$lis.eq(1).css({'top':'200px','opacity':'0'}).animate({'top':'0','opacity':'1'}, 750);
	$lis.eq(2).css({'top':'200px','opacity':'0'}).animate({'top':'0','opacity':'1'}, 900);
	$lis.eq(3).css({'top':'200px','opacity':'0'}).animate({'top':'0','opacity':'1'}, 1050);
	$lis.find('img').each(function() {
        $(this).imgOpacity();
    });
	$('.welcome-txt .point-bg').css({'top':'200px','opacity':'0'}).animate({'top':'-100px','opacity':'1'}, 1400);
});

//物业管理权限
var $bbsManager = $('.bbs-manager');
var $bbsList = $('.bbs-list');
$bbsList.hide();
$bbsManager.click(function(){
	$(this).parent('td').parent('tr').next('tr.bbs-list').toggle();
});


function ChangePagerPosition() {
	var top = $(".main-right").scrollTop()
	//设置iframe内嵌右侧栏位置
	$(".food-right", $("#mainFrame").contents()).css("top", top);
}
//iframe所在容器的滚动条事件
$(".main-right").scroll(function () {
	var top = $(this).scrollTop();
	$(".food-right", $("#mainFrame").contents()).css("top", top);
});

//修改资料
$(function(){
	var $passwordInfo = $('.password-info');
	$passwordInfo.detach();
	$('.password-modify').click(function(){
		$(this).toggleClass('btn-on');
		var $modifyParent = $(this).parent('td').parent('tr');
		if($(this).hasClass('btn-on')){
			$passwordInfo.insertAfter($modifyParent);		
		}else{
			$passwordInfo.detach();
		}
	});
});

//找回密码
(function($){
	var $findStep01 = $('.phone-find-step01');
	var $findStep02 = $('.phone-find-step02');
	var $emailStep = $('.email-find-step');
	$findStep01.hide();
	$findStep02.hide();
	$emailStep.hide();
	$('.phone-find').click(function(){
		var $findParent = $(this).parent('td').parent('tr');
		if($(this).hasClass('btn-on')){
			return false;		
		}else{
			$(this).addClass('btn-on');
			$('.email-find').removeClass('btn-on');
			$findStep01.show();
			$emailStep.hide();
		}
		$findStep02.hide();
	});
	$('.find-verify').click(function(){
		var $verifyParent = $(this).parent('td').parent('tr');
		$findStep01.hide();
		$findStep02.show();
	});
	$('.email-find').click(function(){
		$(this).addClass('btn-on');
		$('.phone-find').removeClass('btn-on');
		$findStep01.hide();
		$findStep02.hide();
		$emailStep.show();
	});
})(jQuery);

//审核
$(function(){
	$('.select-check').click(function(){
		var $checkReason = $(this).parent('td').parent('tr').next('tr');
		if($(this).val() == 0){
			$checkReason.hide();
			if($('#newAccount')){
				$('#createAccount').show();	
			}
		}else{
			$checkReason.show();
			if($('#newAccount')){
				$('#createAccount').hide();	
			}
		}
	});
});

//导入账单弹出层
$('#importBill').click(function(){
	$.layer({
		type: 1,
		shade: [0.4,'#000000'],
		area: ['auto', 'auto'],
		title: false,
    	border : [5, 0.3, '#000'],
		page: {dom : '.layer-bill'}
	});
});

//生成新账号
$(function(){
	var $newAccount = $('.new-account').siblings();
	$newAccount.hide();
	$('.new-account').click(function(){
		$newAccount.show();
	});
});

//全选
$(function(){
	$('#checkAll').click(function(){
		if($(this).is(':checked')){
			$(this).parents('tr').siblings('tr').find('input[type=checkbox]').prop('checked', true);
		}else{
			$(this).parents('tr').siblings('tr').find('input[type=checkbox]').prop('checked', false);
		}
	});
});

//增加删除小区
$(function(){
	var $plotAdded = $('.plotAdded');
	$plotAdded.hide();
	var $plotDelete = $('.plot-delete');
	$('#createPlot').click(function(){
		var provinceVal = $('#province option:selected').text();
		var cityVal = $('#city option:selected').text();
		var blockVal = $('#block option:selected').text();
		var roadVal = $('#road').val();
		var plotNameVal = $('#plotName').val();
		if(provinceVal == '选择省' || cityVal == '' || cityVal == '选择市' || blockVal == '选择区' || plotNameVal == ''){
			alert('请完善小区信息！');
		}else{
			var plotInfo = provinceVal + ' ' + cityVal + ' ' + blockVal + ' ' + roadVal + ' ' + plotNameVal;
			var $plotTable = $(this).parents('table');
			var $newPlot = $plotAdded.clone(true).show().appendTo($plotTable);
			if(provinceVal == cityVal){
				cityVal = '';
			}
			$newPlot.find('input[name=province]').val(provinceVal);
			$newPlot.find('input[name=city]').val(cityVal);
			$newPlot.find('input[name=block]').val(blockVal);
			$newPlot.find('input[name=road]').val(roadVal);
			$newPlot.find('input[name=plotName]').val(plotNameVal);
			$newPlot.find('input').each(function(){  
			   if($(this).val() == ''){
				   $(this).hide(); 
			   }else{
				   var textWidth = function(text){ 
						var sensor = $('<div>'+ text +'</div>').css({display: 'none'}); 
						$('body').append(sensor); 
						var width = sensor.width();
						sensor.remove(); 
						return width;
					};
					$(this).width(textWidth($(this).val())); 
			   }
			}); 
		}
	});	
	$plotDelete.click(function(){
		$(this).parents('tr').remove();
		return false;
	});
});

//增加删除商品规格
$(function(){
	var $standardAdded = $('#standardAdded');
	$standardAdded.hide();
	var $standardDelete = $('.standard-delete');
	$('#createStandard').click(function(){
		var standardNameVal = $('#standardName').val();
		var standardsVal = $('#standards').val();
		if(standardNameVal == '' || standardsVal == ''){
			alert('请完善商品规格信息！');
		}else{
			var $standardTable = $(this).parents('table');
			var $newStandard = $standardAdded.clone(true).show().appendTo($standardTable);
			$newStandard.find('input[name=newStandardName]').val(standardNameVal);
			$newStandard.find('input[name=newStandards]').val(standardsVal);
			$newStandard.find('input[name=newStandards]').each(function(){  
			   if($(this).val() == ''){
				   $(this).hide(); 
			   }else{
				   var textWidth = function(text){ 
						var sensor = $('<div>'+ text +'</div>').css({display: 'none'}); 
						$('body').append(sensor); 
						var width = sensor.width();
						sensor.remove(); 
						return width;
					};
					$(this).width(textWidth($(this).val())); 
			   }
			}); 
		}
	});	
	$standardDelete.click(function(){
		$(this).parents('tr').remove();
		return false;
	});
});

//增加删除商品参数
$(function(){
	var $paramAdded = $('#paramAdded');
	$paramAdded.hide();
	var $paramDelete = $('.param-delete');
	$('#createParam').click(function(){
		var paramNameVal = $('#paramName').val();
		var paramsVal = $('#params').val();
		if(paramNameVal == '' || paramsVal == ''){
			alert('请完善商品参数信息！');
		}else{
			var $paramTable = $(this).parents('table');
			var $newParam = $paramAdded.clone(true).show().appendTo($paramTable);
			$newParam.find('input[name=newParamName]').val(paramNameVal);
			$newParam.find('input[name=newParams]').val(paramsVal);
			$newParam.find('input[name=newParams]').each(function(){  
			   if($(this).val() == ''){
				   $(this).hide(); 
			   }else{
				   var textWidth = function(text){ 
						var sensor = $('<div>'+ text +'</div>').css({display: 'none'}); 
						$('body').append(sensor); 
						var width = sensor.width();
						sensor.remove(); 
						return width;
					};
					$(this).width(textWidth($(this).val())); 
			   }
			}); 
		}
	});	
	$paramDelete.click(function(){
		$(this).parents('tr').remove();
		return false;
	});
});

//商品推广
$(function(){
	var $itemPushCheck = $('.item-push-check');
	var $itemPush = $('.item-push');
	$itemPush.hide();
	$itemPushCheck.change(function(){
		if($(this).is(':checked')){
			$itemPush.show();
		}else{
			$itemPush.hide();
		}
	});
});

//上传图片前预览缩略图
$(".uploadImage").on("change", function(){
    var files = !!this.files ? this.files : [];
    if (!files.length || !window.FileReader) return;
    var $this = $(this);
    if (/^image/.test( files[0].type)){
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = function(){
	    $this.prev(".uploadPreview").css("background-image", "url("+this.result+")");
        }
    }
});
