/**
 * New node file
 */
exports.Onida = function(req, res){var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
	if(err) {
		return console.dir(err);
	}
	else {
		console.log("We are connected");
	}
	
	
	var collection = db.collection('bestchoice');
	
	var data;
	//To make it simpler to the developer the driver implements the {w:1} options 
	//so that this is done automatically when inserting the document. 
	//{w:1} becomes especially important when you do update or remove as otherwise 
	//it’s not possible to determine the amount of documents modified or removed.
	
	//Insert Operation
	
	//Fetch Operation
	collection.find({"Product":"Onida"}).toArray(function(err, items) {
		console.log("Item ::::"+items);
		
					
		//data = JSON.stringify(items);
		//console.log("Item data::::"+data);
		
		res.render('Onida',{data : items});
	});
	console.log("Item data::::"+data);
	
});
	};
	
	/**
	 * New node file
	 */
	exports.Samsung = function(req, res){var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('bestchoice');
		
		var data;
		//To make it simpler to the developer the driver implements the {w:1} options 
		//so that this is done automatically when inserting the document. 
		//{w:1} becomes especially important when you do update or remove as otherwise 
		//it’s not possible to determine the amount of documents modified or removed.
		
		//Insert Operation
		
		//Fetch Operation
		collection.find({"Product":"Samsung"}).toArray(function(err, items) {
			console.log("Item ::::"+items);
			
						
			//data = JSON.stringify(items);
			//console.log("Item data::::"+data);
			
			res.render('Samsung',{data : items});
		});
		console.log("Item data::::"+data);
		
	});
		};
		
		exports.LG = function(req, res){var MongoClient = require('mongodb').MongoClient;

		// Connect to the db
		MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
			if(err) {
				return console.dir(err);
			}
			else {
				console.log("We are connected");
			}
			
			
			var collection = db.collection('bestchoice');
			
			var data;
			//To make it simpler to the developer the driver implements the {w:1} options 
			//so that this is done automatically when inserting the document. 
			//{w:1} becomes especially important when you do update or remove as otherwise 
			//it’s not possible to determine the amount of documents modified or removed.
			
			//Insert Operation
			
			//Fetch Operation
			collection.find({"Product":"LG"}).toArray(function(err, items) {
				console.log("Item ::::"+items);
				
							
				//data = JSON.stringify(items);
				//console.log("Item data::::"+data);
				
				res.render('LG',{data : items});
			});
			console.log("Item data::::"+data);
			
		});
			};
			
			exports.Sony = function(req, res){var MongoClient = require('mongodb').MongoClient;

			// Connect to the db
			MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
				if(err) {
					return console.dir(err);
				}
				else {
					console.log("We are connected");
				}
				
				
				var collection = db.collection('bestchoice');
				
				var data;
				//To make it simpler to the developer the driver implements the {w:1} options 
				//so that this is done automatically when inserting the document. 
				//{w:1} becomes especially important when you do update or remove as otherwise 
				//it’s not possible to determine the amount of documents modified or removed.
				
				//Insert Operation
				
				//Fetch Operation
				collection.find({"Product":"Sony"}).toArray(function(err, items) {
					console.log("Item ::::"+items);
					
								
					//data = JSON.stringify(items);
					//console.log("Item data::::"+data);
					
					res.render('Sony',{data : items});
				});
				console.log("Item data::::"+data);
				
			});
				};
				
				exports.Benz = function(req, res){var MongoClient = require('mongodb').MongoClient;

				// Connect to the db
				MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
					if(err) {
						return console.dir(err);
					}
					else {
						console.log("We are connected");
					}
					
					
					var collection = db.collection('bestchoice');
					
					var data;
					//To make it simpler to the developer the driver implements the {w:1} options 
					//so that this is done automatically when inserting the document. 
					//{w:1} becomes especially important when you do update or remove as otherwise 
					//it’s not possible to determine the amount of documents modified or removed.
					
					//Insert Operation
					
					//Fetch Operation
					collection.find({"Product":"MercedesBenz"}).toArray(function(err, items) {
						console.log("Item ::::"+items);
						
									
						//data = JSON.stringify(items);
						//console.log("Item data::::"+data);
						
						res.render('Benz',{data : items});
					});
					console.log("Item data::::"+data);
					
				});
					};
					
					exports.BMW = function(req, res){var MongoClient = require('mongodb').MongoClient;

					// Connect to the db
					MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
						if(err) {
							return console.dir(err);
						}
						else {
							console.log("We are connected");
						}
						
						
						var collection = db.collection('bestchoice');
						
						var data;
						//To make it simpler to the developer the driver implements the {w:1} options 
						//so that this is done automatically when inserting the document. 
						//{w:1} becomes especially important when you do update or remove as otherwise 
						//it’s not possible to determine the amount of documents modified or removed.
						
						//Insert Operation
						
						//Fetch Operation
						collection.find({"Product":"BMW"}).toArray(function(err, items) {
							console.log("Item ::::"+items);
							
										
							//data = JSON.stringify(items);
							//console.log("Item data::::"+data);
							
							res.render('BMW',{data : items});
						});
						console.log("Item data::::"+data);
						
					});
						};
						
						exports.VW = function(req, res){var MongoClient = require('mongodb').MongoClient;

						// Connect to the db
						MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
							if(err) {
								return console.dir(err);
							}
							else {
								console.log("We are connected");
							}
							
							
							var collection = db.collection('bestchoice');
							
							var data;
							//To make it simpler to the developer the driver implements the {w:1} options 
							//so that this is done automatically when inserting the document. 
							//{w:1} becomes especially important when you do update or remove as otherwise 
							//it’s not possible to determine the amount of documents modified or removed.
							
							//Insert Operation
							
							//Fetch Operation
							collection.find({"Product":"Volkswagan"}).toArray(function(err, items) {
								console.log("Item ::::"+items);
								
											
								//data = JSON.stringify(items);
								//console.log("Item data::::"+data);
								
								res.render('VW',{data : items});
							});
							console.log("Item data::::"+data);
							
						});
							};
							
							exports.Toyota = function(req, res){var MongoClient = require('mongodb').MongoClient;

							// Connect to the db
							MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
								if(err) {
									return console.dir(err);
								}
								else {
									console.log("We are connected");
								}
								
								
								var collection = db.collection('bestchoice');
								
								var data;
								//To make it simpler to the developer the driver implements the {w:1} options 
								//so that this is done automatically when inserting the document. 
								//{w:1} becomes especially important when you do update or remove as otherwise 
								//it’s not possible to determine the amount of documents modified or removed.
								
								//Insert Operation
								
								//Fetch Operation
								collection.find({"Product":"Toyota"}).toArray(function(err, items) {
									console.log("Item ::::"+items);
									
												
									//data = JSON.stringify(items);
									//console.log("Item data::::"+data);
									
									res.render('Toyota',{data : items});
								});
								console.log("Item data::::"+data);
								
							});
								};
								
								exports.Butter = function(req, res){var MongoClient = require('mongodb').MongoClient;

								// Connect to the db
								MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
									if(err) {
										return console.dir(err);
									}
									else {
										console.log("We are connected");
									}
									
									
									var collection = db.collection('bestchoice');
									
									var data;
									//To make it simpler to the developer the driver implements the {w:1} options 
									//so that this is done automatically when inserting the document. 
									//{w:1} becomes especially important when you do update or remove as otherwise 
									//it’s not possible to determine the amount of documents modified or removed.
									
									//Insert Operation
									
									//Fetch Operation
									collection.find({"Product":"ButterLondon"}).toArray(function(err, items) {
										console.log("Item ::::"+items);
										
													
										//data = JSON.stringify(items);
										//console.log("Item data::::"+data);
										
										res.render('Butter',{data : items});
									});
									console.log("Item data::::"+data);
									
								});
									};
									
					
									exports.Cnd = function(req, res){var MongoClient = require('mongodb').MongoClient;

									// Connect to the db
									MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
										if(err) {
											return console.dir(err);
										}
										else {
											console.log("We are connected");
										}
										
										
										var collection = db.collection('bestchoice');
										
										var data;
										//To make it simpler to the developer the driver implements the {w:1} options 
										//so that this is done automatically when inserting the document. 
										//{w:1} becomes especially important when you do update or remove as otherwise 
										//it’s not possible to determine the amount of documents modified or removed.
										
										//Insert Operation
										
										//Fetch Operation
										collection.find({"Product":"CND"}).toArray(function(err, items) {
											console.log("Item ::::"+items);
											
														
											//data = JSON.stringify(items);
											//console.log("Item data::::"+data);
											
											res.render('Cnd',{data : items});
										});
										console.log("Item data::::"+data);
										
									});
										};
										
						
										exports.Essie = function(req, res){var MongoClient = require('mongodb').MongoClient;

										// Connect to the db
										MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
											if(err) {
												return console.dir(err);
											}
											else {
												console.log("We are connected");
											}
											
											
											var collection = db.collection('bestchoice');
											
											var data;
											//To make it simpler to the developer the driver implements the {w:1} options 
											//so that this is done automatically when inserting the document. 
											//{w:1} becomes especially important when you do update or remove as otherwise 
											//it’s not possible to determine the amount of documents modified or removed.
											
											//Insert Operation
											
											//Fetch Operation
											collection.find({"Product":"Essie"}).toArray(function(err, items) {
												console.log("Item ::::"+items);
												
															
												//data = JSON.stringify(items);
												//console.log("Item data::::"+data);
												
												res.render('Essie',{data : items});
											});
											console.log("Item data::::"+data);
											
										});
											};
						

											exports.Opi = function(req, res){var MongoClient = require('mongodb').MongoClient;

											// Connect to the db
											MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
												if(err) {
													return console.dir(err);
												}
												else {
													console.log("We are connected");
												}
												
												
												var collection = db.collection('bestchoice');
												
												var data;
												//To make it simpler to the developer the driver implements the {w:1} options 
												//so that this is done automatically when inserting the document. 
												//{w:1} becomes especially important when you do update or remove as otherwise 
												//it’s not possible to determine the amount of documents modified or removed.
												
												//Insert Operation
												
												//Fetch Operation
												collection.find({"Product":"OPI"}).toArray(function(err, items) {
													console.log("Item ::::"+items);
													
																
													//data = JSON.stringify(items);
													//console.log("Item data::::"+data);
													
													res.render('Opi',{data : items});
												});
												console.log("Item data::::"+data);
												
											});
												};



		