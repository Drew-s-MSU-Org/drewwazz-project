<template>
	<div>
		<Header/>
		<SearchForm v-on:search="search"/>
		<SearchResults
		v-if="videos.length > 0"
		v-bind:videos="videos"
		v-bind:reformattedSearchString="reformattedSearchString"
		/>
		<Pagination
		v-if="videos.length > 0"
		v-bind:prevPageToken="api.prevPageToken"
		v-bind:nextPageToken="api.nextPageToken"
		v-on:prev-page="prevPage"
		v-on:next-page="nextPage"
		/>
	</div>
</template>
<script>
	import Header from './layout/Header';
	import SearchForm from './SearchForm';
	import SearchResults from './SearchResults';
	import Pagination from './Pagination';
	import axios from 'axios';

	export default {
		name: 'YTapp',
		components: {
			Header,
			SearchForm,
			SearchResults,
			Pagination
		},
		data() {
			return {
				videos: [],
				reformattedSearchString: '',
				api: {
					baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
					part: 'snippet',
					type: 'video',
					order: 'viewCount',
					maxResults: 12,
					q: '',
					key: 'AIzaSyDD-USFjs9JsnFUWa6YU6pPv82gmZ3UO_M',
					prevPageToken: '',
					nextPageToken: ''
				}
			};
		},
		methods: {
			search(searchParams) {
				this.reformattedSearchString = searchParams.join(' ');
				this.api.q = searchParams.join('+');
				const { baseUrl, part, type, order, maxResults, q, key } = this.api;
				const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`;
				this.getData(apiUrl);
			},

			prevPage() {
				const { baseUrl, part, type, order, maxResults, q, key, prevPageToken } = this.api;
				const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${prevPageToken}`;
				this.getData(apiUrl);
			},

			nextPage() {
				const { baseUrl, part, type, order, maxResults, q, key, nextPageToken } = this.api;
				const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${nextPageToken}`;
				this.getData(apiUrl);
			},

			getData(apiUrl) {
				axios
				.get(apiUrl)
				.then(res => {
					this.videos = res.data.items;
					this.api.prevPageToken = res.data.prevPageToken;
					this.api.nextPageToken = res.data.nextPageToken;
				})
				.catch(error => console.log(error));
			}
		}
	};
</script>