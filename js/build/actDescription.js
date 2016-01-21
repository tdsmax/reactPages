/**
* @author Tarandeep Singh
* @Description This file contains code in React for Activity Description Page
*/

/********************************************************/

var ActivityDescription = React.createClass({
	displayName: "ActivityDescription",

	render: function () {
		return React.createElement(
			"div",
			{ className: "descContainer" },
			React.createElement(ActivityHeader, { data: this.props.data.activityDsc }),
			React.createElement(ActivityDetail, { data: this.props.data.activityDsc })
		);
	}
});

var ActivityHeader = React.createClass({
	displayName: "ActivityHeader",

	render: function () {
		return React.createElement(
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
					this.props.data.type
				),
				React.createElement(
					"div",
					{ className: "descName" },
					this.props.data.name
				),
				React.createElement(
					"div",
					{ className: "descRating" },
					this.props.data.rating
				)
			)
		);
	}
});

var ActivityDetail = React.createClass({
	displayName: "ActivityDetail",

	render: function () {
		return React.createElement(
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
						this.props.data.price
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
							this.props.data.description
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
				React.createElement(ActivityDescriptionDetail, { data: this.props.data.details }),
				React.createElement("hr", null)
			),
			React.createElement(
				"div",
				{ className: "descDetailComponent" },
				React.createElement(ActivityGallery, { data: this.props.data.images })
			)
		);
	}
});

/* TODO Change Class name icon logic.  */
var ActDetail = React.createClass({
	displayName: "ActDetail",

	render: function () {
		var iconClassName = "descDetailIcon" + (this.props.data.type ? this.props.data.typ : 1);
		return React.createElement(
			"div",
			{ className: "descDetails" },
			React.createElement(
				"div",
				{ className: "descHeadTxt" },
				this.props.data.name
			),
			React.createElement(
				"div",
				{ className: "descDetail" },
				React.createElement("i", { className: iconClassName }),
				this.props.data.value
			)
		);
	}
});

var ActivityDescriptionDetail = React.createClass({
	displayName: "ActivityDescriptionDetail",

	render: function () {
		var actDetailNodes = this.props.data.map(function (detail, index) {
			return React.createElement(ActDetail, { key: index, data: detail });
		});
		return React.createElement(
			"div",
			{ className: "descDetailsContainer" },
			actDetailNodes
		);
	}
});

var ActivityGallery = React.createClass({
	displayName: "ActivityGallery",

	render: function () {
		var last = this.props.data.length - 1,
		    cn = "descGalleryImg";
		var images = this.props.data.map(function (image, index) {
			if (last === index) {
				cn = "descGalleryImg descGalleryLastImg";
			}
			return React.createElement("img", { key: index, src: image, className: cn, alt: "Activity Gallery Image" });
		});
		return React.createElement(
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
				images
			)
		);
	}
});

ReactDOM.render(React.createElement(ActivityDescription, { data: activityDescData }), document.getElementById("activityDescription"));