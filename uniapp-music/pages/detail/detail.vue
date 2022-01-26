<template>
	<view class="detile">
		<view class="fixbg" :style="{'background-image': 'url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbj-yuantu.fotomore.com%2Fcreative%2Fvcg%2Fnew%2FVCG211363439424.jpg%3FExpires%3D1643621485%26OSSAccessKeyId%3DLTAI2pb9T0vkLPEC%26Signature%3DV7ZL3VtfrWsfGDmJDiahAW3pOgo%253D%26x-oss-process%3Dimage%252Fauto-orient%252C0%252Fsaveexif%252C1%252Fresize%252Cm_lfit%252Ch_1200%252Cw_1200%252Climit_1%252Fsharpen%252C100%252Fquality%252CQ_80%252Fwatermark%252Cg_se%252Cx_0%252Cy_0%252Cimage_d2F0ZXIvdmNnLXdhdGVyLTIwMDAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLG1fbGZpdCxoXzE3MSx3XzE3MSxsaW1pdF8x%252F&refer=http%3A%2F%2Fbj-yuantu.fotomore.com&app=2002&size=f10000,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645763305&t=b76c8401db191eca4c4e5d6f30d8aff1)'}"></view>
		<musichead title="音乐详细接口不行了" :icon='true' color='white'></musichead>
		<view class="container" v-show="!isLoading">
			<scroll-view scroll-y="true">
				<view class="detail-play" @tap="handleToPlay">
					<image src="../../static/109951165806093811.jpg" :class="{'detail-play-run': isPlayRotate}" mode="">
					</image>
					<text class="iconfont" :class="iconPlay"></text>
					<view></view>
				</view>
				<view class="detail-lyric">
					<view class="detail-lyric-wrap" :style="{transform: 'translateY('+ -(lyricIndex -1)*82 +'rpx)'}">
						<view class="detail-lyric-item" :class="{active : lyricIndex == index}"
							v-for="(item,index) in songLyric" :key='index'>{{item.lyric}}</view>
					</view>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<button open-type="share" class="list-share">
					<text class="iconfont icon-fenxiang"></text>分享给微信好友
				</button>
				<!-- #endif -->
				<!-- 喜欢 -->
				<view class="dieail-like">
					<view class="dieail-like-head">喜欢这首歌的人也听</view>
					<view class="dieail-like-item" @tap="handleToSimi(item.id)" v-for="(item, index) in songSimi" :key="index">
						<view class="dieail-like-img">
							<image :src="item.album.picUrl" mode=""></image>
						</view>
						<view class="dieail-like-song">
							<view>{{item.name}}</view>
							<view>
								<image v-if="item.privilege.maxbr === 999000" src="~@/static/sq.png" mode=""></image>
								{{item.album.artists[0].name}} - {{item.name}}
							</view>
						</view>
						<text class="iconfont icon-24gl-playCircle"></text>
					</view>
				</view>
				<!-- 评论 -->
				<view class="detail-comment">
					<view class="detail-comment-head">精彩评论</view>
					<view class="detail-comment-item" v-for="(item,index) in songComment" :key="index">
						<view class="detail-comment-img">
							<image :src="item.user.avatarUrl" mode=""></image>
						</view>
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class="detail-comment-name">
									<view>{{item.user.nickname}}</view>
									<view>{{item.time | formatTime}}</view>
								</view>
								<view class="detail-comment-like">
									{{item.likedCount | formatCount}}
									<text class="iconfont icon-icon"></text>
								</view>
							</view>
							<view class="detail-comment-text">
								{{item.content}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import musichead from "@/components/musichead/musichead.vue"
	import "@/common/iconfont.css";
	import {
		songDetail,
		songSimi,
		songComment,
		songLyric,
		songUrl
	} from "@/common/api.js"
	export default {
		data() {
			return {
				// songDetail接口出问题
				songDetail: {},
				// 相似
				songSimi: [],
				// 评论
				songComment: [],
				lyricIndex: 0,
				songLyric: [],
				// 播放状态
				iconPlay: 'icon-zanting',
				// 动画
				isPlayRotate: true,
				// 加载
				isLoading: true
			}
		},
		components: {
			musichead
		},
		onLoad(options) {
			let songId = options.songId
			// console.log(options.songId)
			this.getMusic(songId)
		},
		methods: {
			getMusic(id) {
				uni.showLoading({
					title:"加载中...."
				})
				this.isLoading = true
				Promise.all([songSimi(id), songComment(id), songLyric(id)]).then((res) => {
					if (res[0][1].data.code === 200) {
						// console.log(res)
						this.songSimi = res[0][1].data.songs
					}
					if (res[1][1].data.code === 200) {
						// console.log(res[1][1])
						this.songComment = res[1][1].data.hotComments
					}
					if (res[2][1].data.code === 200) {
						let lyric = res[2][1].data.lrc.lyric
						// console.log(lyric)
						let re = /\[([^\]]+)\]([^\[]+)/g;
						// console.log(lyric.match(re))
						var result = [];
						lyric.replace(re, ($0, $1, $2) => {
							result.push({
								"time": this.formatTimeToSec($1),
								"lyric": $2
							})
						});
						this.songLyric = result;
					}
					// #ifdef H5
					this.bgAudioManager = uni.createInnerAudioContext();
					this.iconPlay = 'icon-24gl-playCircle';
					this.isPlayRotate = false
					// #endif

					// #ifdef MP-WEIXIN
					this.bgAudioManager = uni.getBackgroundAudioManager();
					this.bgAudioManager.title = '音乐详细接口不行了';
					// #endif

					let url = 'https://music.163.com/song/media/outer/url?id=' + id + '.mp3'
					this.bgAudioManager.src = url;
					this.bgAudioManager.onTimeUpdate(() => {
						this.listenLyricIndex();
					})
					this.bgAudioManager.onPlay(() => {
						this.iconPlay = 'icon-zanting';
						this.isPlayRotate = true;
					})
					this.bgAudioManager.onPause(() => {
						this.iconPlay = 'icon-24gl-playCircle';
						this.isPlayRotate = false
					})
					
					this.isLoading = false;
					uni.hideLoading();
				});
				// https://music.163.com/song/media/outer/url?id=id.mp3
			},
			// 格式化时间
			formatTimeToSec(value) {
				let arr = value.split(':')
				return (Number(arr[0] * 60) + Number(arr[1])).toFixed(1);
			},
			// 点击屏幕播放暂停
			handleToPlay() {
				if (this.bgAudioManager.paused) {
					this.bgAudioManager.play()
				} else {
					this.bgAudioManager.pause()
				}
			},
			// 歌词定时器
			listenLyricIndex() {
				// 如果当前播放时间大于左后一个时间,则修改this.lyricIndex并且退出事件
				for (var i = 0; i < this.songLyric.length; i++) {
					if (this.bgAudioManager.currentTime > this.songLyric[this.songLyric.length - 1].time) {
						this.lyricIndex = this.songLyric.length - 1;
						break;
					}

					// 如果当前播放时间大于上一个时间段,并且小于下一个时间段,这当前播放时间处于上一个时间段
					if (this.bgAudioManager.currentTime > this.songLyric[i].time && this.bgAudioManager
						.currentTime < this.songLyric[i + 1].time) {
						this.lyricIndex = i;
					}
				}
				// console.log(this.lyricIndex)
			},
			// 相似歌曲
			handleToSimi(id){
				// console.log(id)
				this.getMusic(id);
				
				// #ifdef H5
				this.bgAudioManager.stop()
				this.lyricIndex = -1;
				// #endif
				// #ifdef MP-WEIXIN
				this.bgAudioManager.stop()
				this.lyricIndex = -1;
				// #endif
			}
		},
	}
</script>

<style scoped>
	.detail{
		background-color: #464646;
	}
	.detail-play {
		position: relative;
		width: 580rpx;
		height: 580rpx;
		background: url(~@/static/disc.png);
		background-size: cover;
		margin: 214rpx auto 0 auto;
	}

	.detail-play image {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 370rpx;
		height: 370rpx;
		border-radius: 50%;
		animation: 10s linear move infinite;
		animation-play-state: paused;
	}

	.detail-play .detail-play-run {
		animation-play-state: running
	}

	@keyframes move {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.detail-play text {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 100rpx;
		height: 100rpx;
		font-size: 100rpx;
		color: white;
	}

	.detail-play view {
		width: 230rpx;
		height: 360rpx;
		background: url(~@/static/needle.png);
		background-size: cover;
		position: absolute;
		left: 80rpx;
		right: 0;
		top: -200rpx;
		margin: auto;
	}

	.detail-lyric {
		height: 246rpx;
		font-size: 32rpx;
		line-height: 82rpx;
		text-align: center;
		overflow: hidden;
		color: #6f6e73;
	}

	.detail-lyric-wrap {
		transform: 0.5s;
	}

	.detail-lyric-item {
		height: 82rpx;
	}

	.detail-lyric-item.active {
		color: white;
	}

	/* 分享 */
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

	/* 喜欢 */
	.dieail-like {
		margin: 0 30rpx;
	}

	.dieail-like-head {
		font-size: 36rpx;
		margin: 50rpx 0;
	}

	.dieail-like-item {
		display: flex;
		align-items: center;
		margin-bottom: 38rpx;
	}

	.dieail-like-img {
		width: 82rpx;
		height: 82rpx;
		border-radius: 50rpx;
		overflow: hidden;
		margin-right: 20rpx;
	}

	.dieail-like-img image {
		width: 100%;
		height: 100%;
	}

	.dieail-like-song {
		flex: 1;
		color: #c6c2bf;
	}

	.dieail-like-song view:nth-child(1) {
		font-size: 28rpx;
		color: white;
		margin-bottom: 12rpx;
	}

	.dieail-like-song view:nth-child(2) {
		font-size: 22rpx;
	}

	.dieail-like-song image {
		width: 26rpx;
		height: 20rpx;
		margin-right: 10rpx;
	}

	.dieail-like-item text {
		font-size: 50rpx;
		color: #c6c2bf;
	}

	/* 评论 */
	.detail-comment {
		margin: 0 30rpx;
	}

	.detail-comment-head {
		font-size: 36rpx;
		margin: 50rpx 0;
	}

	.detail-comment-item {
		display: flex;
		margin-bottom: 28rpx;
	}

	.detail-comment-img {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 18rpx;
	}

	.detail-comment-img image {
		width: 100%;
		height: 100%;
	}

	.detail-comment-content {
		flex: 1;
		color: #cbcacf;
	}

	.detail-comment-title {
		display: flex;
		justify-content: space-between;
	}

	.detail-comment-name {}

	.detail-comment-name view:nth-child(1) {
		font-size: 26rpx;
	}

	.detail-comment-name view:nth-child(2) {
		font-size: 20rpx;
	}

	.detail-comment-like {
		font-size: 28rpx;
	}

	.detail-comment-text {
		font-size: 28rpx;
		line-height: 40rpx;
		color: white;
		margin-top: 20rpx;
		border-bottom: 1px solid #e0e0e0;
		padding-bottom: 40rpx;
	}
</style>
