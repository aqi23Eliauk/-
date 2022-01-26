<script>
	export default {
		onLaunch: function() {
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style>
	/*每个页面公共css */
	.container{
		width: 100%;
		height: calc(100vh - 70px);
		overflow: hidden;
	}
	.container scroll-view{
		height: 100%;
	}
	.fixbg{
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbj-yuantu.fotomore.com%2Fcreative%2Fvcg%2Fnew%2FVCG211363439424.jpg%3FExpires%3D1643621485%26OSSAccessKeyId%3DLTAI2pb9T0vkLPEC%26Signature%3DV7ZL3VtfrWsfGDmJDiahAW3pOgo%253D%26x-oss-process%3Dimage%252Fauto-orient%252C0%252Fsaveexif%252C1%252Fresize%252Cm_lfit%252Ch_1200%252Cw_1200%252Climit_1%252Fsharpen%252C100%252Fquality%252CQ_80%252Fwatermark%252Cg_se%252Cx_0%252Cy_0%252Cimage_d2F0ZXIvdmNnLXdhdGVyLTIwMDAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLG1fbGZpdCxoXzE3MSx3XzE3MSxsaW1pdF8x%252F&refer=http%3A%2F%2Fbj-yuantu.fotomore.com&app=2002&size=f10000,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645763305&t=b76c8401db191eca4c4e5d6f30d8aff1);
		background-size: cover;
		background-position: center 0;
		/* 模糊 */
		filter: blur(20px);
		transform: scale(1.2);
	}
</style>
