/**
* @author Tarandeep Singh
* @Description This file contains code in React for Activity Description Page
*/

/********************************************************/

var ActivityDescription = React.createClass({
	render: function(){
		return (
            <div className="descContainer">
                <ActivityHeader data={this.props.data.activityDsc} />
                <ActivityDetail data={this.props.data.activityDsc} />
             </div>  
		);
	}
});


var ActivityHeader = React.createClass({
	render: function(){
		return (
			<div className="blk descHeadContainer">
				<div className="descBackBtn"></div>
				<div className="blk">
					<div className="mainImage fleft">
						<img src="img/activityMain.jpg" alt="Brand Hotel" />
					</div>
					<div className="mapContainer">
						<img src="img/map.jpg" alt="Location Map" />
					</div>						
				</div>
				<div className="descHeader actDescHeader">
					<div className="descType">{this.props.data.type}</div>
					<div className="descName">{this.props.data.name}</div>
					<div className="descRating">{this.props.data.rating}</div>
				</div>
			</div>
		);
	}
});

var ActivityDetail = React.createClass({
	render: function(){
		return (
			<div className="descDetailContainer">
				<div className="blk descDetailComponent">
					<div className="descPriceContainer fleft">
						<div className="descHeadTxt">STARTS</div>
						<div className="descPrice"><i className="descRupeeIcon"></i>{this.props.data.price}</div>
					</div>
					<div className="actionBtn fright">
						<button className="descBtn actBtn">REMOVE</button>
					</div>
					<hr />
				</div>	
				<div className="descDetailComponent">
					<div className="descInfoContainer">
						<div className="descHeadTxt">DESCRIPTION</div>
						<div className="descTextContainer">
							<div className="descText">{this.props.data.description}</div>
						</div>
						<div className="descMore">READ MORE</div>
					</div>
					<hr />
				</div>	
				<div className="descDetailComponent">
					<ActivityDescriptionDetail data={this.props.data.details} />
					<hr />
				</div>		
				<div className="descDetailComponent">
					<ActivityGallery data={this.props.data.images} />
				</div>	
			</div>
		);
	}
});


/* TODO Change Class name icon logic.  */
var ActDetail = React.createClass({
	render: function(){
			var iconClassName = "descDetailIcon" + (this.props.data.type  ? this.props.data.type : 1);
		return (
			<div className="descDetails">						
				<div className="descHeadTxt">{this.props.data.name}</div>
				<div className="descDetail"><i className={iconClassName}></i>{this.props.data.value}</div>
			</div>
		);
	}
});

var ActivityDescriptionDetail = React.createClass({
	render: function(){
		var actDetailNodes = this.props.data.map(function(detail,index){
			return (
				<ActDetail key={index} data={detail} />
			);
		});
		return (
			<div className="descDetailsContainer">
				{actDetailNodes}
			</div>
		);
	}
})

var ActivityGallery = React.createClass({
	render: function(){	
		var last = this.props.data.length-1, cn = "descGalleryImg";
		var images = this.props.data.map(function(image,index){
			if(last === index){
				cn = "descGalleryImg descGalleryLastImg";
			}
			return (
				<img key={index} src={image} className={cn} alt="Activity Gallery Image" />	
			);
		});
		return (
			<div className="descGalleryContainer">						
				<div className="descHeadTxt">PHOTOS</div>
				<div className="descGallery">
					{images}
				</div>
			</div>	
		);
	}
});

ReactDOM.render(
	<ActivityDescription data={activityDescData} />,
	document.getElementById("activityDescription")
);