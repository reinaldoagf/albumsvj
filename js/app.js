var urlUsers="https://randomuser.me/api/?results=10";
new Vue({
	el:'#main',
	created:function(){
		this.getUsers();
	},
	data:{
		users:[],
		newEmail:'',
		newName:'',
		newLastname:'',
	},
	methods:{
		getUsers: function () {
			axios.get(urlUsers).then(
				response=>this.users=response.data.results
			)
		},
	}
})