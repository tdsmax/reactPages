/**
* @author Tarandeep Singh
* @Description This file contains code in React for Activity Description Page
*/

var ActivityDescription = React.createClass({
	displayName: "ActivityDescription",

	render: function () {
		return React.createElement(
			"div",
			{ className: "descContainer" },
			React.createElement(
				"div",
				{ className: "blk descHeadContainer" },
				React.createElement("div", { className: "descBackBtn" }),
				React.createElement(
					"div",
					{ className: "blk" },
					React.createElement(
						"div",
						{ className: "mainImage fleft" },
						React.createElement("img", { src: "img/activityMain.jpg", alt: "Brand Hotel" })
					),
					React.createElement(
						"div",
						{ className: "mapContainer" },
						React.createElement("img", { src: "img/map.jpg", alt: "Location Map" })
					)
				),
				React.createElement(
					"div",
					{ className: "descHeader actDescHeader" },
					React.createElement(
						"div",
						{ className: "descType" },
						"TOUR"
					),
					React.createElement(
						"div",
						{ className: "descName" },
						"The Smiths and Morrissey Bus Tour"
					),
					React.createElement(
						"div",
						{ className: "descRating" },
						"* * * * *"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "descDetailContainer" },
				React.createElement(
					"div",
					{ className: "blk descDetailComponent" },
					React.createElement(
						"div",
						{ className: "descPriceContainer fleft" },
						React.createElement(
							"div",
							{ className: "descHeadTxt" },
							"STARTS"
						),
						React.createElement(
							"div",
							{ className: "descPrice" },
							React.createElement("i", { className: "descRupeeIcon" }),
							"1000"
						)
					),
					React.createElement(
						"div",
						{ className: "actionBtn fright" },
						React.createElement(
							"button",
							{ className: "descBtn actBtn" },
							"REMOVE"
						)
					),
					React.createElement("hr", null)
				),
				React.createElement(
					"div",
					{ className: "descDetailComponent" },
					React.createElement(
						"div",
						{ className: "descInfoContainer" },
						React.createElement(
							"div",
							{ className: "descHeadTxt" },
							"DESCRIPTION"
						),
						React.createElement(
							"div",
							{ className: "descTextContainer" },
							React.createElement(
								"div",
								{ className: "descText" },
								"The Smiths & Morrissey 3 Hour Bus Tour, tour guide Craig Gill from the band Inspiral Carpets will take you on a tour of musical heritage landmarks synonymous with The Smiths, Morrissey and Johnny Marr. You will be given a full tour of Salford Lads Club and free entry into The Smiths room, the tour includes and free tea and coffee, the tour will also take you to concert venues, places referenced in songs and promotional video locations."
							)
						),
						React.createElement(
							"div",
							{ className: "descMore" },
							"READ MORE"
						)
					),
					React.createElement("hr", null)
				),
				React.createElement(
					"div",
					{ className: "descDetailComponent" },
					React.createElement(
						"div",
						{ className: "descDetailsContainer" },
						React.createElement(
							"div",
							{ className: "descDetails" },
							React.createElement(
								"div",
								{ className: "descHeadTxt" },
								"DURATION"
							),
							React.createElement(
								"div",
								{ className: "descDetail" },
								React.createElement("i", { className: "descDetailIcon5" }),
								" 3 hours (approx) "
							)
						),
						React.createElement(
							"div",
							{ className: "descDetails" },
							React.createElement(
								"div",
								{ className: "descHeadTxt" },
								"OPENING HOURS"
							),
							React.createElement(
								"div",
								{ className: "descDetail" },
								React.createElement("i", { className: "descDetailIcon6" }),
								" Open Daily: 09:35 am — 07:35 pm "
							)
						),
						React.createElement(
							"div",
							{ className: "descDetails" },
							React.createElement(
								"div",
								{ className: "descHeadTxt" },
								"ADDRESS"
							),
							React.createElement(
								"div",
								{ className: "descDetail" },
								React.createElement("i", { className: "descDetailIcon7" }),
								" 16 Peter St, Manchester M60 2DS, United Kingdom "
							)
						)
					),
					React.createElement("hr", null)
				),
				React.createElement(
					"div",
					{ className: "descDetailComponent" },
					React.createElement(
						"div",
						{ className: "descGalleryContainer" },
						React.createElement(
							"div",
							{ className: "descGalleryContainer" },
							React.createElement(
								"div",
								{ className: "descHeadTxt" },
								"PHOTOS"
							),
							React.createElement(
								"div",
								{ className: "descGallery" },
								React.createElement("img", { src: "img/gallery1.jpg", alt: "Gallery Image" }),
								React.createElement("img", { src: "img/gallery2.jpg", alt: "Gallery Image" }),
								React.createElement("img", { src: "img/gallery3.jpg", alt: "Gallery Image" }),
								React.createElement("img", { src: "img/gallery4.jpg", alt: "Gallery Image" }),
								React.createElement("img", { src: "img/gallery5.jpg", alt: "Gallery Image", className: "lastGalleryImg" })
							)
						)
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(ActivityDescription, { data: activityDesc }), document.getElementById("activityDescription"));