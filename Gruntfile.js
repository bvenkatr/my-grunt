module.exports = function(grunt){

	grunt.initConfig({
		watch: {
			files:["README.md"],
			tasks: ["watchit"]
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask("watchit", function(){
		grunt.log.writeln("Yes,  you're watching for file changes");
	});
};