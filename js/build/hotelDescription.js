/**
* @author Tarandeep Singh
* @Description This file contains code in React for Hotel Description Page
*/

var HotelDescription = React.createClass({
	displayName: "HotelDescription",

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
						React.createElement("img", { src: "img/hotel1.jpg", alt: "Brand Hotel" })
					),
					React.createElement(
						"div",
						{ className: "mapContainer" },
						React.createElement("img", { src: "img/map.jpg", alt: "Location Map" })
					)
				),
				React.createElement(
					"div",
					{ className: "descHeader" },
					React.createElement(
						"div",
						{ className: "descType" },
						"HOTEL"
					),
					React.createElement(
						"div",
						{ className: "descName" },
						"Hotel Football Old Trafford"
					),
					React.createElement(
						"div",
						{ className: "descRating" },
						"* * * * *"
					)
				),
				React.createElement(
					"div",
					{ className: "blk descExtendedContainer" },
					React.createElement(
						"div",
						{ className: "descTripAdvisorReview" },
						React.createElement(
							"div",
							{ className: "descTripReview fleft" },
							React.createElement(
								"div",
								{ className: "desRevText" },
								React.createElement("i", { className: "descReviewIcon" }),
								"34 Reviews "
							)
						)
					),
					React.createElement(
						"div",
						{ className: "descRankingContainer fright" },
						React.createElement(
							"div",
							{ className: "desRevText" },
							React.createElement(
								"span",
								{ className: "descRank" },
								"#17"
							),
							" of ",
							React.createElement(
								"span",
								{ className: "rankTotal" },
								"116"
							),
							" htoels in ",
							React.createElement(
								"span",
								{ className: "reviewCity" },
								"Manchester"
							)
						)
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
							{ className: "descBtn" },
							"ADD TO ITINERARY"
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
								"The Midland - QHotels is an award-winning, 4-star luxury hotel with a spa in Manchester city centre. It offers stylish, air-conditioned rooms with free WiFi."
							),
							React.createElement(
								"div",
								{ className: "descText" },
								"Plush rooms and suites offer free WiFi, tea and coffeemaking facilities, flat-screen TVs and 24-hour room service."
							)
						),
						React.createElement(
							"div",
							{ className: "descMore" },
							"READ MORE"
						),
						React.createElement(
							"div",
							{ className: "descfacContainer blk" },
							React.createElement(
								"div",
								{ className: "descFac fleft" },
								React.createElement("i", { className: "descFacIcon1" }),
								"WIFI"
							),
							React.createElement(
								"div",
								{ className: "descFac fleft" },
								React.createElement("i", { className: "descFacIcon2" }),
								"BREAKFAST, DINNER"
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
						{ className: "descDetailsContainer" },
						React.createElement(
							"div",
							{ className: "descDetails" },
							React.createElement(
								"div",
								{ className: "descHeadTxt" },
								"PRICE RANGE"
							),
							React.createElement(
								"div",
								{ className: "descDetail" },
								React.createElement("i", { className: "descDetailIcon1" }),
								"9,200 - 29,386 "
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
								React.createElement("i", { className: "descDetailIcon2" }),
								"16 Peter St, Manchester M60 2DS, United Kingdom "
							)
						),
						React.createElement(
							"div",
							{ className: "descDetails" },
							React.createElement(
								"div",
								{ className: "descHeadTxt" },
								"WEBSITE"
							),
							React.createElement(
								"div",
								{ className: "descDetail" },
								React.createElement("i", { className: "descDetailIcon3" }),
								"www.themidlands.com "
							)
						),
						React.createElement(
							"div",
							{ className: "descDetails" },
							React.createElement(
								"div",
								{ className: "descHeadTxt" },
								"TELEPHONE"
							),
							React.createElement(
								"div",
								{ className: "descDetail" },
								React.createElement("i", { className: "descDetailIcon4" }),
								"+44 870 442 1994 "
							)
						)
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(HotelDescription, { data: hotelDesc }), document.getElementById("hotelDescription"));