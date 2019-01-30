/*
 * 瀑布流
 *	效果：多列的不规则排列，每一列中又很多内容，每一项内容的高度不定，最后我们按照规则排列，三列之间不能相差太多高度

 *	实现： 首先获取需要展示的数据（假设又50条，共三列），把50条数据中国的前三条依次插入到三列中（目前又得列高有得列低），接下来在拿出三条，但是本次插入不是依次插入，而是需要先把当前三列按照高矮进行排序，哪个最矮，先给哪个插入内容，依次类推，把50条数据插入即可。 
*/ 

$(function () {
	// 当HTML结构加载完成才会执行这里得代码

	//1.获取所需要得数据
	// 真实项目当中，我得第一页加载完成之后，当用户下拉到底部，开始获取第二页的内容，服务端会给我们提供一个API获取数据的地址，并要求客户端把获取的是第几页的内容传递给服务器，服务器依照这个原理把对应不同的数据返回"分页技术"
	let page = 0,
		imgData=null,
		isRun = false;
	let queryData = () => {
		page++;
		$.ajax({
			url: `json/data.json?page=${page}`,
			method: 'get',
			async: false,    //=>同步请求（真实项目中使用的是异步）
			dataType: 'json', //把从服务器端获取的JSON字符串转化为对象（JQ内部会帮我们转换）
			success: result => {
				//我们从服务器端获取的结果
				imgData = result
				console.log(imgData)
			}
		});
	}
	queryData()



	

	// 2.数据绑定
	// => 传递一个对象进来，返回对应的结构字符串

	// 用JQ的方法去实现
	let bindHTML = () =>{
		let $boxList = $('.flowBox > li');
		for(let i = 0;i<imgData.length;i+=3){
			$boxList.sort((a,b)=>{
				return $(a).outerHeight() - $(b).outerHeight()
			}).each((index,curli)=>{
				// 第一个LI是0， index => imgData[i+0]
				// 第二个Li是1， index => imgData[i+1]
				// 第二个Li是2， index => imgData[i+2]
				// imgData[i+index]

				let item = imgData[i+index];
				if (!item) return
				let {id,pic,link,title} = item;

				$(`<a href="${ link }">
	            <div><img src="${pic}" alt=""></div>
	            <span>${ title }</span>
	        </a>`).appendTo($(curli))
			})
		}
		isRun = false;   //=>当前这一数组绑定完成后，让isRun为false,代码运作完成了
	}
	bindHTML()

	// 用原生+jq的方法去实现
	/*let queryHTML = ({id,pic,link,title}={})=>{
		if (typeof id === 'undefined') {
			return ''
		}
		return `<a href="${ link }">
            <div><img src="${pic}" alt=""></div>
            <span>${ title }</span>
        </a>`
	}
	let $boxList = $('.flowBox > li');
	let boxList = [].slice.call($boxList);
	// let boxList = $boxList.get()  //=>把JQ类数组对象转化围殴数组（GET不能传参，传参就是获取类数组中的某一项了）
	console.log($boxList)
	for(let i = 0;i<imgData.length;i+=3){
		// 分别获取每三个为一组，一组的三个内容（存在的隐形风险，当前存在数据的总长度不是3的倍数，那么最后依次循环的时候，三个中的某一个会不存在的，获取的ITEM值是UNDEFINED）
		let item1 = imgData[i],
			item2 = imgData[i+1],
			item3 = imgData[i+2];
		// 我们接下来要把获取的ITEM依次插入到每一个LI中，但是绝对不是按照顺序插入，我们需要先按照每一个LI的现有高度进行排序（小-》大），按照最新的顺序依次插入即可

		boxList.sort((a,b)=>{
			return a.offsetHeight-b.offsetHeight;
		}).forEach((curLi,index)=>{
			curLi.innerHTML += queryHTML(eval('item'+(index+1)))
		})
	}*/


	// 当滚动到页面底部，加载下一页更多数据。
	$(window).on('scroll',()=>{
		let winH = $(window).innerHeight(),  //一屏幕的高度
			pageH =  document.documentElement.scrollHeight || document.body.scrollHeight;
			scrollT = $(window).scrollTop();

		// => 卷去的高度 大于 真实高度-屏幕高度：
		if(scrollT+100>=(pageH-winH)){
			
			// 隐形问题：人为操作滚动，这个在同一操作内会被触发N次,同一个时间段会被实现N次，此时我们需要做重复操作限定
			if(isRun) return
			isRun = true

			if(page>5){
				alert("没有更多数据了")
				return
			}

			console.log("ok")
			queryData();
			bindHTML();
		}

	})




});