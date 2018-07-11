// The toolbar at the bottom of the screen with editing controls.

const Vue = require('vue');
const zoomMappings = require('../zoom-settings');
const { updateStory } = require('../../data/actions/story');
require('./index.less');
//var stringy = 'init';


module.exports = Vue.extend({
	template: require('./index.html'),
	
	props: {
		story: {
			type: Object,
			required: true
		},
		
		zoomDesc: {
			type: String,
			required: true
		}
	},

	components: {
		'story-menu': require('./story-menu'),
		'story-search': require('./story-search')
	},
	
	methods: {
		setZoom(description) {
			this.updateStory(
				this.story.id,
				{ zoom: zoomMappings[description] }
			);
		},

		test() {
			window.open(
				'#stories/' + this.story.id + '/test',
				'twinestory_test_' + this.story.id
			);
		},

		play() {
			window.open(
				'#stories/' + this.story.id + '/play',
				'twinestory_play_' + this.story.id
			);
		},

		addPassage() {
			//stringy = 'works';
			this.$dispatch('passage-createA');
		},
		addPassageZ() {
			//stringy = 'works';
			this.$dispatch('passage-createZ');
		},

		addPassage1() {
			//stringy = 'haleluja';
			this.$dispatch('passage-createU');
		},
	
		addPassage2() {
			//stringy = 'worksssss';
			this.$dispatch('passage-createL');
		},
		addPassage00() {
			//stringy = 'works';
			this.$dispatch('passage-createX');
		},
		addPassage0() {
			//stringy = 'works';
			this.$dispatch('passage-create');
		}		
	},

	vuex: {
		actions: {
			updateStory
		}
	}
});

