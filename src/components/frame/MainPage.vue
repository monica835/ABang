<template>
	<mdb-container>
		<mdb-row>
			<h1>All Categories</h1>
			<mdb-card-group deck>
				<mdb-card class="shadow p-3 mb-5 bg-white rounded">
					<mdb-view hover>
						<a href="#!">
							<mdb-card-image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKONtnFRxhJI0h25UIv-6i8QNbWYD5K__O4-czlja4tQCnxU7S&s" alt="Card image cap"></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title>Van</mdb-card-title>
						<mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
							card's content.</mdb-card-text>
						<mdb-btn color="primary" @click="van">See more</mdb-btn>
					</mdb-card-body>
				</mdb-card>
				<mdb-card class="shadow p-3 mb-5 bg-white rounded">
					<mdb-view hover>
						<a href="#!">
							<mdb-card-image src="https://imgd.aeplcdn.com/600x337/cw/ec/33372/Kia-Seltos-Exterior-167737.jpg?wm=0" alt="Card image cap"></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title>Car</mdb-card-title>
						<mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
							card's content.</mdb-card-text>
						<mdb-btn color="primary" @click="car">See more</mdb-btn>
					</mdb-card-body>
				</mdb-card>
				<mdb-card class="shadow p-3 mb-5 bg-white rounded">
					<mdb-view hover>
						<a href="#!">
							<mdb-card-image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjbS80sMRZ_bguOlRMXVlNMgaxjh19us0AUEZ0NlKSnWIQbMa&s" alt="Card image cap"></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title>Motorcycle</mdb-card-title>
						<mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
							card's content.</mdb-card-text>
						<mdb-btn color="primary" @click="motor">See more</mdb-btn>
					</mdb-card-body>
				</mdb-card>
				<mdb-card class="shadow p-3 mb-5 bg-white rounded">
					<mdb-view hover>
						<a href="#!">
							<mdb-card-image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3itnEHkx7F2MbYV04RJT2l35uDye9DFsjIudhWar635DmMmnN&s" alt="Card image cap"></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title>Bus</mdb-card-title>
						<mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
							card's content.</mdb-card-text>
						<mdb-btn color="primary" @click="bus">See more</mdb-btn>
					</mdb-card-body>
				</mdb-card>
				<mdb-card class="shadow p-3 mb-5 bg-white rounded">
					<mdb-view hover>
						<a href="#!">
							<mdb-card-image src="https://c.stocksy.com/a/NfC500/z9/1240333.jpg?1568465714" alt="Card image cap"></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title>Boat</mdb-card-title>
						<mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
							card's content.</mdb-card-text>
						<mdb-btn color="primary" @click="boat">See more</mdb-btn>
					</mdb-card-body>
				</mdb-card>
			</mdb-card-group>
		</mdb-row>
	</mdb-container>
</template>

<script>
import AUTH from 'services/auth'
import ROUTER from 'router'
	import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
	export default {
		name: 'CardProPage',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
			mdbCardGroup,
			mdbBtn,
			mdbView,
			mdbMask,
			mdbIcon
		},
		methods:{
			car(){
				ROUTER.push('/car')
				},
			bus(){
				ROUTER.push('/bus')
			},
			boat(){
				ROUTER.push('/boat')
			},
			van(){
				ROUTER.push('/van')
			},
			motor(){
				ROUTER.push('/motor')
			}
		}
	}
	
</script>
<style scoped>
h1{
font-family: 'Courier New', Courier, monospace;
font-size: 50px;
}
</style>

