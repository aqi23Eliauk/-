import {
	baseUrl
} from "./config.js"
// 首页
export function topList() {

	var listIds = ['19723756' , '3779629' , '2884035' , '3778678'];
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			success: res => {
				let result = res.data.list;
				result.length = 4;
				for (let i = 0; i < listIds.length; i++) {
					result[i].listId = listIds[i]
				}
				reslove(result);
			}
		})
	})
}

// 详细歌单
export function list(listId) {
	return uni.request({
		url: `${baseUrl}/playlist/detail?id=${listId}`,
		method: 'GET'
	})
}

// 获取歌曲
export function songDetail(songId) {
	return uni.request({
		url: `${baseUrl}/song/detail?ids=${songId}`,
		method: 'GET'
	});
}

export function songSimi(songId) {
	return uni.request({
		url: `${baseUrl}/simi/song?id=${songId}`,
		method: 'GET'
	});
}
// 评论
export function songComment(songId) {
	return uni.request({
		url: `${baseUrl}/comment/music?id=${songId}`,
		method: 'GET'
	});
}
// 歌词
export function songLyric(songId) {
	return uni.request({
		url: `${baseUrl}/lyric?id=${songId}`,
		method: 'GET'
	});
}
// url
export function songUrl(songId) {
	return uni.request({
		url: `${baseUrl}/song/url?id=${songId}`,
		method: 'GET'
	});
}

// 搜索热词
export function searchHot() {
	return uni.request({
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET'
	});
}
// 搜索结果
export function searchWord(word) {
	return uni.request({
		url: `${baseUrl}/search?keywords=${word}`,
		method: 'GET'
	});
}
// 搜索提示
export function searchSuggest(word) {
	return uni.request({
		url: `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method: 'GET'
	});
}
