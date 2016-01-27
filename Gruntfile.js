module.exports = function(grunt){
	grunt.initConfig({
		person: {
			firstName: "venkat"
		}
	});

	grunt.registerTask("default", function(){
		grunt.log.writeln("Hello " + grunt.config.get("person").firstName);
	});
};