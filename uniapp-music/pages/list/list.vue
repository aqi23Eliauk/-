<template>
	<view class="list">
		<view class="fixbg"></view>
		<musichead title="歌单" :icon='true' color='white'></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="list-head">
					<view class="list-head-img">
						<image src="../../static/wangyiyunyinyue.png" mode=""></image>
						<text class="iconfont icon-yousanjiao">30亿</text>
					</view>
					<view class="list-head-text">
						<view>测试文字</view>
						<view>
							<image src="../../static/wangyiyunyinyue.png" mode=""></image>测试文字
						</view>
						<view>
							测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
						</view>
					</view>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<button open-type="share" class="list-share">
					<text class="iconfont icon-fenxiang"></text>分享给微信好友
				</button>
				<!-- #endif -->
				<view class="list-music">
					<view class="list-music-head">
						<text class="iconfont icon-24gf-playCircle"></text>
						<text>播放全部</text>
						<text>(共10首)</text>
					</view>
					<view class="list-music-item" @tap="handleToDetail()" v-for="(item, index) in 10" :key='index'>
						<view class="list-music-top">{{index+1}}</view>
						<view class="list-music-song">
							<view>与我无关</view>
							<view>
								啊啊啊
							</view>
						</view>
						<text class="iconfont icon-24gl-playCircle"></text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import musichead from "@/components/musichead/musichead.vue"
	import "@/common/iconfont.css";
	import {list} from "@/common/api.js"
	export default {
		data() {
			return {
				isLoading: true
			}
		},
		components: {
			musichead
		},
		onLoad(options) {

			// let listId = options.id;
			// list(listId).then((res)=>{
			// 	// 打印接口信息
			// 	console.log(res);
				// this.isLoading = false
			// });
				
			
			uni.showToast({
				title:"接口出问题啦用了假数据",
				duration: 1500,
				icon: "none"
			})
		},
		methods:{
			handleToDetail(){
				// 写死的id
				let songId = 1901371647
				uni.navigateTo({
					url: '/pages/detail/detail?songId=' + songId
				})
			}
		}
		// onPullDownRefresh() {
		// 	setTimeout(function() {
		// 		uni.stopPullDownRefresh();
		// 	}, 1000);
		// }
	}
</script>

<style scoped>
	.list-head {
		display: flex;
		margin: 30rpx;
	}

	.list-head-img {
		position: relative;
		width: 264rpx;
		height: 264rpx;
		border-radius: 30rpx;
		overflow: hidden;
		margin-right: 42rpx;
	}

	.list-head-img image {
		width: 100%;
		height: 100%;
	}

	.list-head-img text {
		position: absolute;
		right: 8rpx;
		top: 8rpx;
		color: #FFFFFF;
		font-size: 26rpx;
	}

	.list-head-text {
		flex: 1;
		color: #f0f2f7;
	}

	.list-head-text view:nth-child(1) {
		color: #FFFFFF;
		font-size: 34rpx;
	}

	.list-head-text view:nth-child(2) {
		display: flex;
		margin: 20rpx 0;
		font-size: 24rpx;
		align-items: center;
	}

	.list-head-text view:nth-child(2) image {
		width: 54rpx;
		height: 54rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 14rpx;
	}

	.list-head-text view:nth-child(3) {
		line-height: 34rpx;
		font-size: 22rpx;
	}

	.list-share {
		width: 330rpx;
		height: 74rpx;
		margin: 0 auto;
		border-radius: 37rpx;
		background: rgba(0, 0, 0, 0.4);
		color: white;
		text-align: center;
		line-height: 74rpx;
		font-size: 28rpx;
	}

	.list-share text {
		margin-right: 16rpx;
	}

	.list-music {
		border-radius: 50rpx;
		background: white;
		margin-top: 40rpx;
		overflow: hidden;
	}

	.list-music-head {
		height: 50rpx;
		margin: 30rpx 0 70rpx 22rpx;
	}

	.list-music-head text:nth-child(1) {
		height: 50rpx;
		font-size: 50rpx;
	}

	.list-music-head text:nth-child(2) {
		font-size: 30rpx;
		margin: 0 10rpx 0 26rpx;
	}

	.list-music-head text:nth-child(3) {
		font-size: 26rpx;
		color: #b2b2b2;
	}

	.list-music-item {
		display: flex;
		margin: 0 32rpx 66rpx 46rpx;
		align-items: center;
		color: #959595;
	}

	.list-music-top {
		width: 58rpx;
		font-size: 30rpx;
		line-height: 30rpx;
	}

	.list-music-song {
		flex: 1;
	}

	.list-music-song view:nth-child(1) {
		font-size: 28rpx;
		color: #000000;
		width: 70vw;
		/* 不让换行 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.list-music-song view:nth-child(2) {
		font-size: 20rpx;
	}

	.list-music-item text {
		font-size: 50rpx;
		color: #c7c7c7;
	}
</style>
