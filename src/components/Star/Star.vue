<template>
    <div class="star" :class="'star-'+size">
        <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
    </div>
</template>

<script>
  export default{
    name: 'Star',
    props: {
        size: String,
        score: Number
    },
    computed: {
        starClasses () {
            const {score} = this
            let starArr = []
            const scoreInteger = Math.floor(score)
            for (let i = 0; i < scoreInteger; i++) {
                starArr.push('on')
            }
            if (score * 10 - scoreInteger * 10 >= 5) {
                starArr.push('half')
            }
            while (starArr.length < 5) {
                starArr.push('off')
            }
            return starArr
            }
        }
    }
</script>

<style lang="less">
    @import "../../common/style/mixins.less";
    .star{
	float: left;
	font-size: 10px;
	.star-item{
		display: inline-block;
		background-repeat: no-repeat;
	}		
	&.star-48{
		.star-item{
			width: 20px;
			height: 20px;
			margin-right: 22px;
			background-size: 20px 20px;
			&:last-child{
				margin-right: 0;
			}											
			&.on{
				.bg-image('../../components/Star/imgs/star48_on');
			}											
			&.half{
				.bg-image('../../components/Star/imgs/star48_half');
			}										
			&.off{
				.bg-image('../../components/Star/imgs/star48_off');
			}
		}
    }
    &.star-36{
		.star-item{
			width: 15px;
			height: 15px;
			margin-right: 6px;
			background-size: 15px 15px;
			&:last-child{
				margin-right: 0;
			}											
			&.on{
				.bg-image('../../components/Star/imgs/star36_on');
			}											
			&.half{
				.bg-image('../../components/Star/imgs/star36_half');
			}										
			&.off{
				.bg-image('../../components/Star/imgs/star36_off');
			}
		}
    }
    &.star-24{
		.star-item{
			width: 10px;
			height: 10px;
			margin-right: 3px;
			background-size: 10px 10px;
			&:last-child{
				margin-right: 0;
			}											
			&.on{
				.bg-image('../../components/Star/imgs/star24_on');
			}											
			&.half{
				.bg-image('../../components/Star/imgs/star24_half');
			}										
			&.off{
				.bg-image('../../components/Star/imgs/star24_off');
			}
		}
	}
}
</style>
